import {
  Body,
  Controller,
  DefaultValuePipe,
  Get,
  HttpStatus,
  Param,
  ParseArrayPipe,
  ParseIntPipe,
  Post,
  Query,
  UsePipes,
} from '@nestjs/common';
import { ParamsTokenFactory } from '@nestjs/core/pipes';
import { ValidationTypes, Validator } from 'class-validator';
import { get } from 'http';
import { Validation } from 'src/cutosmPipes/Validation';
import { ValidationPipe } from 'src/cutosmPipes/Validationtype';
import { MyCutomPipe } from 'src/cutosmPipes/myCustomPipe';

@Controller('pipe')
export class PipeController {
  @Get(':id')
  getData(
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    id: number,
  ) {
    return 'the id is ' + id + ' ' + typeof id;
  }

  @Get()
  getPage(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe)
    page: number,
  ): string {
    return 'the id is ' + page + ' ' + typeof page;
  }
  @Get('multi')
  getMultiPages(
    @Query('page', new ParseArrayPipe({ items: Number, separator: ',' }))
    page: number[],
  ): string {
    console.log(page);
    return 'the id is ' + page + ' ';
  }
  @Get('get')
  @UsePipes(new MyCutomPipe())
  validatePipe(@Query() data: any) {
    console.log(data);
    return 'The data is ' + data;
  }

  @Post()
  create(@Body(new ValidationPipe()) Validation: Validation) {
    console.log('here we caem');
    console.log(Validation);
    return 'user added';
  }
}
