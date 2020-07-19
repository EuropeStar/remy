import { Module } from "@nestjs/common";
import { userProviders } from "./user.providers";
import { UserService } from "./user.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./user.entities";
import { UserController } from "./user.controller";

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    providers: [
        // ...userProviders,
        UserService,
        UserController
    ],
    controllers: [UserController],
    exports: [UserService, UserController]
})
export class UserModule {};