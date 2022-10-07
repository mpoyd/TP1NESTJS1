import { Controller, Delete, Get,Patch, Post, Put,Body,Param,NotFoundException,Query } from '@nestjs/common';
import { TodoModule } from './todo.module';
import {v4 as uuidv4} from 'uuid';
import { TodoStatusEnum } from './todo.TodoStatusEnum';
import { TodoModel } from './todo.model';
import { query } from 'express';
import { TodoDto } from './todo.todoDto';
import { todoUpdateDto } from './todo.todoUpdateDto';

@Controller('todo')
export class TodoController {
    private todos = [];
    @Get('all')
    getTodos() {
        // Todo 2 : Get the todo liste
        console.log('getTodos')
        return(this.todos);
    }
    //without DTO
    @Post('nodto')
    addTodo(@Body() body){
        if (!body.name) throw new NotFoundException();
        if (!body.description) throw new NotFoundException();
        const todo = new TodoModel();
        todo.description = body.description;
        todo.name = body.name;
        console.log(todo);
        this.todos.push(todo);
        return todo;
    }
    
    @Get('byid')
    findTodo(@Query('id') id) {
        console.log(id);
        if (!id) throw new NotFoundException();
        const todo = this.todos.find((todo) => todo.id == id);
        //throw exception if not found
        if (!todo) throw new NotFoundException();
        return todo;
    }
    @Delete('byid')
    deleteTodo(@Query('id') id) {
        console.log(id);
        if (!id) throw new NotFoundException();
        const todo = this.todos.find((todo) => todo.id == id);
        //throw exception if not found
        if (!todo) throw new NotFoundException();
        const indexOfTodo = this.todos.indexOf(todo);
        this.todos.splice(indexOfTodo,1);
        return todo;
    }
    @Put('byid')
    updateTodo(@Query('id') id,@Body() body) {
        console.log(id);
        if (!id) throw new NotFoundException();
        const todo = this.todos.find((todo) => todo.id == id);
        //throw exception if not found
        if (!todo) throw new NotFoundException();

        if (!body.name) throw new NotFoundException();
        if (!body.description) throw new NotFoundException();
        if (!body.status) throw new NotFoundException();
        
        todo.description = body.description;
        todo.name = body.name;
        if(!( (Object.values(body.status).includes('actif')) || (Object.values(body.status).includes('waiting')) || (Object.values(body.status).includes('done')) )) throw new NotFoundException("invalid status");
        todo.status = body.status;
        return todo;
    }

    //with DTO
    @Post('byiddto')
    addTodoDto(@Body() body:TodoDto){
        if (!body.name) throw new NotFoundException();
        if (!body.description) throw new NotFoundException();
        const todo = new TodoModel();
        todo.description = body.description;
        todo.name = body.name;
        console.log(todo);
        this.todos.push(todo);
        return todo;
    }
    @Put('byiddto')
    updateTodoDto(@Query('id') id,@Body() body:todoUpdateDto) {
        console.log(id);
        if (!id) throw new NotFoundException();
        const todo = this.todos.find((todo) => todo.id == id);
        //throw exception if not found
        if (!todo) throw new NotFoundException();

        if (!body.name) throw new NotFoundException();
        if (!body.description) throw new NotFoundException();
        if (!body.status) throw new NotFoundException();
        
        todo.description = body.description;
        todo.name = body.name;
        if(!( (Object.values(body.status).includes('actif')) || (Object.values(body.status).includes('waiting')) || (Object.values(body.status).includes('done')) )) throw new NotFoundException("invalid status");
        todo.status = body.status;
        return todo;
    }
}