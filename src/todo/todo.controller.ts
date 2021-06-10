import { Controller, Get, Param } from '@nestjs/common';
import { TodoOutputType } from '../interface';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
  service = new TodoService();

  @Get()
  getHello(): string {
    return 'homepage';
  }

  @Get(':id')
  async getTodo(@Param('id') id: string): Promise<TodoOutputType> {
    return this.service.getTodo(id);
  }

  @Get(':id/to-close')
  async changeClose(@Param('id') id: string): Promise<TodoOutputType> {
    return this.service.statusClose(id);
  }

  @Get(':id/to-open')
  async changeOpen(@Param('id') id: string): Promise<TodoOutputType> {
    return this.service.statusOpen(id);
  }
}
