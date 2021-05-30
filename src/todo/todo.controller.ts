import {Controller, Get, Param, Req} from '@nestjs/common';
import {TodoOutputType} from "../interface";

@Controller('todo')
export class TodoController {

    @Get()
    getHello(): string {
        return 'homepage'
    }

    @Get(':id')
    getTodo(@Param() params): TodoOutputType { //TODO: paramsの型を指定する
        return {
            id:params.id,
            todo:`作るぞ`,
            status:`open`
        }
    }


}
