import { User } from "./user.entities";

export class UserDto {
    public id: number;
    public username: string;
    public firstName: string;
    public lastName: string;

    constructor(id: number, username: string, firstName: string, lastName: string) {
        this.id = id;
        this.username = username;
        this.firstName = firstName
        this.lastName = lastName
    }

    static fromUser(user: User): UserDto {
        return new UserDto(user.id, user.username, user.firstName, user.lastName);
    }
}