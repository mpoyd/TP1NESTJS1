import { Controller, Delete, Get,Patch, Post, Put,Body,Param,NotFoundException,Query, Injectable} from '@nestjs/common';
import { TodoModule } from './todo.module';
import {v4 as uuidv4} from 'uuid';
import { TodoStatusEnum } from './todo.TodoStatusEnum';
import { TodoModel } from './todo.model';
import { query } from 'express';
import { TodoDto } from './todo.todoDto';
import { todoUpdateDto } from './todo.todoUpdateDto';
import { uuidProvider } from 'src/common/common.uuidProvider';

@Injectable()
export class TodoService {
    private todos: TodoModel[] = []
    constructor(private uuidProv: uuidProvider) {}

    findTodo(id: string): TodoModel {
        console.log(id);
        if (!id) throw new NotFoundException();
        const todo = this.todos.find((todo) => todo.id == id);
        //throw exception if not found
        if (!todo) throw new NotFoundException();
        return todo;
    }

    getTodo(): TodoModel[] {
        // Todo 2 : Get the todo liste
        console.log('getTodos')
        return(this.todos);
    }

    postTodoWithDTO(body: TodoDto): TodoModel {
        if (!body.name) throw new NotFoundException();
        if (!body.description) throw new NotFoundException();
        const todo = new TodoModel();
        todo.description = body.description;
        todo.name = body.name;
        console.log(todo);
        this.todos.push(todo);
        return todo;
    }

    deleteTodo(id: string): TodoModel {
        console.log(id);
        if (!id) throw new NotFoundException();
        const todo = this.todos.find((todo) => todo.id == id);
        //throw exception if not found
        if (!todo) throw new NotFoundException();
        const indexOfTodo = this.todos.indexOf(todo);
        this.todos.splice(indexOfTodo,1);
        return todo;
    }
    

    updateTodoWithDTO(id: string, body: todoUpdateDto): TodoModel{
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
        if(! (body.status.match('actif') ||
        (body.status.match('waiting')) ||
        (body.status.match('done')) ))
           throw new NotFoundException("invalid status");
        todo.status = body.status;
        return todo;
    }

    getUuid(): string {
        // Todo 2 : Get the todo liste
        console.log('getUuid');
        return this.uuidProv.getUuid();
    
    }

}