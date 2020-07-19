import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { UserService } from './users/user.service';
import { User } from './users/user.entities';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly userService: UserService
  ) {}

  @Get()
  async getHello(): Promise<User[]> {
    return await this.userService.findAll()
  }
}
