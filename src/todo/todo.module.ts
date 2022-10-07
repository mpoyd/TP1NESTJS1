import { Module } from '@nestjs/common';
import { uuidProvider } from 'src/common/common.uuidProvider';
import { TodoController } from './todo.controller';


@Module({
  controllers: [TodoController],
  providers:[uuidProvider]
})
export class TodoModule {
}
