import { Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';
import {Role} from './user.roles';


@Entity()
@Unique(['username'])
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column({default: ""})
    firstName: string
    
    @Column({default: ""})
    lastName: string

    @Column()
    username: string

    @Column()
    password: string
    
    @Column({default: Role.DEFAULT})
    role: Role
}