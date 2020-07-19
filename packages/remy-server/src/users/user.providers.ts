import { Connection } from "typeorm";
import { User } from "./user.entities";

export const userProviders = [
    {
        provide: "UserRepository",
        useFactory: (conn: Connection) => conn.getRepository(User),
        inject: ['DATABASE_CONNECTION']
    }
];