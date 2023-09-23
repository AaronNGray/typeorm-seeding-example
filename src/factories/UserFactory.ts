import { DataSource } from 'typeorm';
import { AppDataSource } from '../data-source';
import { Factory, FactorizedAttrs } from '@jorgebodega/typeorm-factory'
import { User } from '../entity/User';
import { faker } from '@faker-js/faker'

export class UserFactory extends Factory<User> {
    protected entity = User;
    protected dataSource = AppDataSource;
    protected attrs(): FactorizedAttrs<User> {
        const firstName = faker.person.firstName();
        const lastName = faker.person.lastName();
        return {
            firstName: firstName,
            lastName: lastName,
            email: faker.internet.email({ firstName: firstName, lastName: lastName, provider: 'test' }),
            username: faker.internet.userName({ firstName: firstName, lastName: lastName }),
            password: faker.internet.password(),
            // owner: new LazyInstanceAttribute((instance) => new SingleSubfactory(UserFactory, { pets: [instance] })),
        };
    }
}
