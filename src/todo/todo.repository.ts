import { Injectable } from '@nestjs/common';
import { TodoOutputType } from '../interface';
import { PrismaClient } from '@prisma/client';

// リポジトリ層はデータストアを扱う

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

  async postTodo(
    id: string,
    content: string,
    title: string,
  ): Promise<TodoOutputType> {
    const prisma = new PrismaClient();
    return await prisma.todo.create({
      data: {
        content: content,
        title: title,
        status: 'open',
      },
    });
  }
}
