import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true })
    firstName?: string;

    @Column({ nullable: true })
    lastName?: string;

    @Column({ unique: true })
    username: string;

    @Column({ nullable: false })
    email: string;

    @Column({ nullable: false, select: false })
    password?: string;

    public static create(options: Partial<User>) {
        const user = new User();

        return Object.assign(user, options);
    }
}
