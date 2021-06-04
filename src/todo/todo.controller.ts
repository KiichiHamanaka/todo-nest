import { Controller, Get, Param, Req } from '@nestjs/common';
import { TodoOutputType } from '../interface';
import table from '../data';
import axios from 'axios';
import { zip } from 'rxjs';

@Controller('todo')
export class TodoController {
  @Get()
  async getHello(): Promise<string> {
    await this.postDataAxios();
    return 'homepage';
  }

  async postDataAxios() {
    const headers = {
      'Content-Type': 'application/json',
      mode: 'cors',
      withCredentials: 'true',
    };
    await axios
      .post(
        'https://techtrain-railway-api.herokuapp.com/users',
        {
          name: 'string',
          email: 'string',
          password: 'string',
        },
        {
          headers,
        },
      )
      .then((response) => {
        console.log(response.data);
      });
  }

  @Get(':id')
  getTodo(@Param() params): TodoOutputType {
    //TODO: paramsの型を指定する
    return table.find((row) => row.id === parseInt(params.id));
  }
}
