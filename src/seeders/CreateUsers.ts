import { DataSource } from 'typeorm'
import { Seeder } from '@jorgebodega/typeorm-seeding'
import { User } from '../entity/User'
import { UserFactory } from '../factories/UserFactory';

export default class CreateUsers extends Seeder {
    public async run(dataSource: DataSource): Promise<void> {
        const userFactory = new UserFactory();
        const CreatedUsers = await userFactory.makeMany(10);
        const users: User[] = CreatedUsers;
        console.log("users = ", users);
        await dataSource.createEntityManager().save<User>(users);
    }
}

console.log("Seeder =", Seeder);
console.log("CreateUsers instanceof Seeder =", CreateUsers instanceof Seeder);
