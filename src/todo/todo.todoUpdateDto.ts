import { TodoStatusEnum } from "./todo.TodoStatusEnum";
import { PartialType} from '@nestjs/mapped-types';
import { TodoDto } from './todo.todoDto';

export class todoUpdateDto extends PartialType(TodoDto) {
    status: TodoStatusEnum;
}


