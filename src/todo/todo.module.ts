import { Module } from '@nestjs/common';
import { uuidProvider } from 'src/common/common.uuidProvider';
import { TodoController } from './todo.controller';
import { todoEntity } from './todo.todoEntity';
import { TodoService } from './todo.todoService';
import { TypeOrmModule } from '@nestjs/typeorm/dist';

@Module({
  imports: [TypeOrmModule.forFeature([todoEntity])],
  controllers: [TodoController],
  providers:[uuidProvider, TodoService]
})
export class TodoModule {
}
