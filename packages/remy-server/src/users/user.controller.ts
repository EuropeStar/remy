import { Controller, Get, Param, HttpException } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserDto } from "./user.dto";
import { ResponseData } from "src/common/response";
import { Error } from "src/common/error";

@Controller('users')
export class UserController {
    constructor(
        private userService: UserService
    ) {}

    @Get(":id")
    async detail(@Param('id') id: number): Promise<ResponseData<UserDto>> {
        let user = await this.userService.findById(id);
        if (user) {
            return ResponseData.ok(UserDto.fromUser(user))
        } else {
            throw new HttpException(ResponseData.fail("User not found", [new Error(404, "User not found")]), 404)
        }
    }
}