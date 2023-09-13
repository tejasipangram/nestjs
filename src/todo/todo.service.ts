import { Injectable, ParseUUIDPipe } from '@nestjs/common';
import { Todo } from './todo.interface';
import { parse } from 'path';
@Injectable()
export class TodoService {
  private storage: Todo[] = [];

  createOne(todo: Todo) {
    let maxId = null;

    if (this.storage.length > 0) {
      maxId = Math.max(...this.storage.map((item: Todo) => item.id || 0));
    } else {
      maxId = 0;
    }

    todo.id = maxId + 1;

    this.storage.push(todo);
    return todo;
  }
  getAll() {
    return this.storage;
  }

  getSingle(id: number): Todo {
    const data = this.storage.find((todo: Todo) => {
      if (todo.id === id) {
        return todo;
      }
    });

    return data;
  }

  updateOne(id: number, todo: Todo): Todo {
    const index = this.storage.findIndex((todo: Todo) => todo.id === id);
    this.storage[index] = todo;
    return todo;
  }

  deleteOne(id: number): string {
    this.storage = this.storage.filter((todo: Todo) => id !== todo.id);
    return 'Item deleted';
  }
}
