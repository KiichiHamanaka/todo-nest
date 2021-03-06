import { Injectable } from '@nestjs/common';
import { TodoOutputType } from '../interface';
import { TodoRepository } from './todo.repository';

//サービス層はビジネスロジックを扱う所

@Injectable()
export class TodoService {
  repo = new TodoRepository();
  async getTodo(id: string): Promise<TodoOutputType> {
    return await this.repo.getTodo(id);
  }

  async statusOpen(id: string): Promise<TodoOutputType> {
    await this.repo.updateStatus(id, 'open');
    return this.getTodo(id);
  }

  async statusClose(id: string): Promise<TodoOutputType> {
    await this.repo.updateStatus(id, 'close');
    return this.getTodo(id);
  }

  async postTodo(
    id: string,
    content: string,
    title: string,
  ): Promise<TodoOutputType> {
    return await this.repo.postTodo(id, content, title);
  }
}
