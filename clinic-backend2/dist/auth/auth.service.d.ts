import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
export declare class AuthService {
    private userService;
    private jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    validateUser(username: string, password: string): Promise<{
        id: number;
        username: string;
    }>;
    login(user: any): Promise<{
        access_token: string;
    }>;
}
