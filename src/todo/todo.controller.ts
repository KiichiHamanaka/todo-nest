import { Controller, Get, Param, Req } from '@nestjs/common';
import { TodoOutputType } from '../interface';
import table from '../data';

@Controller('todo')
export class TodoController {
  @Get()
  getHello(): string {
    return 'homepage';
  }

  @Get(':id')
  getTodo(@Param('id') id: string): TodoOutputType {
    return table.find((row) => row.id === parseInt(id));
  }
}
