import {
  Body,
  Controller,
  Delete,
  Get,
  Logger,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { Todo } from './todo.interface';
import { get } from 'http';

@Controller('todo')
export class TodoController {
  private readonly logger = new Logger(TodoController.name);
  constructor(private readonly todoService: TodoService) {}

  @Get()
  findAll(): Todo[] {
    this.logger.log('Handeling getAll() request ...');
    return this.todoService.getAll();
  }

  @Post()
  createOne(@Body() todo: Todo): Todo {
    this.logger.log('Handeling createOne() request ...');
    return this.todoService.createOne(todo);
  }

  @Get(':id')
  getSignle(@Param('id', ParseIntPipe) id: number) {
    this.logger.log('in get single ');
    return this.todoService.getSingle(id);
  }

  @Put(':id')
  updateOne(@Param('id', ParseIntPipe) id: number, @Body() todo: Todo) {
    this.logger.log('calling updateOne function');
    return this.todoService.updateOne(id, todo);
  }

  @Delete(':id')
  deleteOne(@Param('id', ParseIntPipe) id: number): string {
    return this.todoService.deleteOne(id);
  }
}
