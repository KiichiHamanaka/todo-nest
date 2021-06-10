import { Injectable } from '@nestjs/common';
import { TodoOutputType } from '../interface';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class TodoRepository {
  async getTodo(id: string): Promise<TodoOutputType> {
    const prisma = new PrismaClient();
    return await prisma.todo.findFirst({
      where: {
        id: Number(id),
      },
    });
  }

  async updateStatus(id: string, status: string): Promise<TodoOutputType> {
    const prisma = new PrismaClient();
    return await prisma.todo.update({
      where: {
        id: Number(id),
      },
      data: { status: status },
    });
  }
}
