import { Controller, Get, Param } from '@nestjs/common';
import { TodoOutputType } from '../interface';
import { PrismaClient } from '@prisma/client';

@Controller('todo')
export class TodoController {
  @Get()
  getHello(): string {
    return 'homepage';
  }

  @Get(':id')
  async getTodo(@Param() params): Promise<TodoOutputType> {
    //TODO: paramsの型を指定する
    const prisma = new PrismaClient();
    return await prisma.todo.findFirst({
      where: {
        id: Number(params.id),
      },
    });
  }
}
