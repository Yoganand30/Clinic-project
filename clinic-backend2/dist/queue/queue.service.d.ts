import { Repository } from 'typeorm';
import { Queue } from './queue.entity';
import { CreateQueueDto } from './dto/create-queue.dto';
import { UpdateQueueDto } from './dto/update-queue.dto';
import { Doctor } from '../doctor/doctor.entity';
export declare class QueueService {
    private queueRepo;
    private doctorRepo;
    constructor(queueRepo: Repository<Queue>, doctorRepo: Repository<Doctor>);
    create(dto: CreateQueueDto): Promise<Queue>;
    findAll(): Promise<Queue[]>;
    findOne(id: number): Promise<Queue>;
    update(id: number, dto: UpdateQueueDto): Promise<Queue>;
    remove(id: number): Promise<{
        deleted: boolean;
    }>;
}
