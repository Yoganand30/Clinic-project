import { Repository } from 'typeorm';
import { User } from './user.entity';
export declare class UserService {
    private usersRepository;
    constructor(usersRepository: Repository<User>);
    create(username: string, password: string): Promise<User>;
    findByUsername(username: string): Promise<User | null>;
    findById(id: number): Promise<User | null>;
    validateUser(username: string, password: string): Promise<User | null>;
}
