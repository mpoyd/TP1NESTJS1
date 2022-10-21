import { TodoStatusEnum } from "./todo.TodoStatusEnum";
import { PartialType} from '@nestjs/mapped-types';
import { todoDto } from './todo.todoDto';
import { IsIn } from "class-validator";

export class todoUpdateDto extends PartialType(todoDto) {
    @IsIn(['waiting', 'done', 'actif'])
    status: TodoStatusEnum;
}


