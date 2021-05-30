import {Controller, Get} from '@nestjs/common';
import {TodoOutputType} from "../interface";

@Controller('todo')
export class TodoController {

    @Get()
    getHello(): string {
        return 'hogegegege'
    }

    @Get(':id')
    getTodo(): TodoOutputType {
        return {
            id:1,
            todo:`作るぞ`,
            status:`open`
        }
    }


}
