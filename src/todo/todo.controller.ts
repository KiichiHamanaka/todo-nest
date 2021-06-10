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
  async getTodo(@Param('id') id: string): Promise<TodoOutputType> {
    const prisma = new PrismaClient();
    return await prisma.todo.findFirst({
      where: {
        id: Number(id),
      },
    });
  }

  @Get(':id/to-close')
  async changeClose(@Param('id') id: string): Promise<TodoOutputType> {
    const prisma = new PrismaClient();
    await prisma.todo.update({
      where: {
        id: Number(id),
      },
      data: { status: 'close' },
    });
    return await prisma.todo.findFirst({
      where: {
        id: Number(id),
      },
    });
  }

  @Get(':id/to-open')
  async changeOpen(@Param('id') id: string): Promise<TodoOutputType> {
    const prisma = new PrismaClient();
    await prisma.todo.update({
      where: {
        id: Number(id),
      },
      data: { status: 'open' },
    });
    return await prisma.todo.findFirst({
      where: {
        id: Number(id),
      },
    });
  }
}
