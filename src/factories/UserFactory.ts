import { DataSource } from 'typeorm';
import { AppDataSource } from '../data-source';
import { Factory, FactorizedAttrs } from '@jorgebodega/typeorm-factory'
import { User } from '../entity/User';
import { faker } from '@faker-js/faker'

export class UserFactory extends Factory<User> {
    protected entity = User;
    protected dataSource = AppDataSource;
    firstName = faker.person.firstName();
    lastName = faker.person.lastName();
    protected attrs(): FactorizedAttrs<User> {
        console.log("test");
        return {
            firstName: this.firstName,
            lastName: this.lastName,
            email: faker.internet.email({ firstName: this.firstName, lastName: this.lastName, provider: 'test' }),
            username: faker.internet.userName({ firstName: this.firstName, lastName: this.lastName }),
            password: faker.internet.password(),
            // owner: new LazyInstanceAttribute((instance) => new SingleSubfactory(UserFactory, { pets: [instance] })),
        };
    }
}
