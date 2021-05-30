import { Module } from '@nestjs/common';
import {AppController} from "../app.controller";
import {AppService} from "../app.service";
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';

@Module({
    imports: [],
    controllers: [TodoController],
    providers: [TodoService],
})export class TodoModule {}
