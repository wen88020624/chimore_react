import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createUserDto: CreateUserDto): Promise<{
        email: string;
        name: string | null;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAll(): Promise<({
        posts: {
            title: string;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            content: string | null;
            published: boolean;
            authorId: number;
        }[];
    } & {
        email: string;
        name: string | null;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    })[]>;
    findOne(id: number): Promise<{
        posts: {
            title: string;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            content: string | null;
            published: boolean;
            authorId: number;
        }[];
    } & {
        email: string;
        name: string | null;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: number, updateUserDto: UpdateUserDto): Promise<{
        email: string;
        name: string | null;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    remove(id: number): Promise<{
        email: string;
        name: string | null;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
