import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { TodoStatusEnum } from './todo.TodoStatusEnum';
@Entity('todo')
export class todoEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({ length: 50, unique: true })
    name: string;
    @Column()
    description: string;
    @Column({ unique: true })
    createdAt: Date;
    @Column({ type: 'enum', enum: TodoStatusEnum, default: TodoStatusEnum.waiting })
    status: TodoStatusEnum;
}