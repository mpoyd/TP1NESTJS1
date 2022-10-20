import { TodoStatusEnum } from "./todo.TodoStatusEnum";
import { PartialType} from '@nestjs/mapped-types';
import { todoDto } from './todo.todoDto';

export class todoUpdateDto extends PartialType(todoDto) {
    status: TodoStatusEnum;
}


