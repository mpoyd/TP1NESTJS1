import { Module } from '@nestjs/common';
import { uuidProvider } from 'src/common/common.uuidProvider';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.todoService';


@Module({
  controllers: [TodoController],
  providers:[uuidProvider, TodoService]
})
export class TodoModule {
}
