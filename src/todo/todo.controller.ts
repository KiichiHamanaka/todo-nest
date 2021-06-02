import {Controller, Get, Param, Req} from '@nestjs/common';
import {TodoOutputType} from "../interface";
import table from '../data'
import { PrismaClient } from '@prisma/client';

@Controller('todo')
export class TodoController {

    @Get()
    getHello(): string {
        return 'homepage'
    }

    @Get(':id')
    async getTodo(@Param() params): Promise<any> { //TODO: paramsの型を指定する
        const prisma = new PrismaClient()
        const todos = await prisma.todo.findFirst({
            where: {
                id: Number(params.id)
            }
        })
        return todos
    }


}
