import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { timestamp } from './todo.timestamp';
import { TodoStatusEnum } from './todo.TodoStatusEnum';
@Entity('todo')
export class todoEntity extends timestamp {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({ length: 50, unique: true })
    name: string;
    @Column()
    description: string;
    @Column({ type: 'enum', enum: TodoStatusEnum, default: TodoStatusEnum.waiting })
    status: TodoStatusEnum;
}