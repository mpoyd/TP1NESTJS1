import { Module } from '@nestjs/common';
import { TodoController } from './todo.controller';
import { TodoStatusEnum } from './todo.TodoStatusEnum';

@Module({
  controllers: [TodoController]
})
export class TodoModule {
}
