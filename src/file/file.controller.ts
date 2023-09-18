import {
  Controller,
  FileTypeValidator,
  ParseFilePipe,
  Post,
  UploadedFile,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import * as path from 'path';
import { extname } from 'path/posix';

@Controller('file')
export class FileController {
  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(
    @UploadedFile(
      new ParseFilePipe({
        validators: [new FileTypeValidator({ fileType: 'image/*' })],
      }),
    )
    file: Express.Multer.File,
  ): Promise<object> {
    console.log(file);

    try {
      if (file) {
        return { status: 'file uploaded' };
      }
    } catch (error) {
      console.log(error);
    }
  }

  @Post('file-upload')
  @UseInterceptors(
    FilesInterceptor('image', 1, {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          const uniqueSuffix = Date.now() + '-' + Math.random() * 1e9;
          const etext = extname(file.originalname);
          const fileName = `${file.originalname}-${uniqueSuffix}${etext}`;
          cb(null, fileName);
        },
      }),
    }),
  )
  fileUpload(
    @UploadedFiles()
    file,
  ) {
    console.log(file);

    try {
      if (file) {
        return { status: 'file uploaded' };
      }
    } catch (error) {
      console.log(error);
    }
  }
}
