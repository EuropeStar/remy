import { Injectable, Inject } from "@nestjs/common";
import { Repository } from "typeorm";
import { User } from "./user.entities";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class UserService { 
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>
    ) {}

    async findAll(): Promise<User[]> {
        return this.userRepository.find();
    }

    async findById(id: number): Promise<User | null> {
        return this.userRepository.findOne({id})
    }
}