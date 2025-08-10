import { AuthService } from './auth.service';
import { UserService } from '../user/user.service';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { LoginUserDto } from '../user/dto/login-user.dto';
export declare class AuthController {
    private authService;
    private userService;
    constructor(authService: AuthService, userService: UserService);
    register(createUserDto: CreateUserDto): Promise<any>;
    login(loginDto: LoginUserDto): Promise<{
        access_token: string;
    }>;
}
