import { QueueService } from './queue.service';
import { CreateQueueDto } from './dto/create-queue.dto';
import { UpdateQueueDto } from './dto/update-queue.dto';
export declare class QueueController {
    private readonly queueService;
    constructor(queueService: QueueService);
    create(dto: CreateQueueDto): Promise<import("./queue.entity").Queue>;
    findAll(): Promise<import("./queue.entity").Queue[]>;
    findOne(id: number): Promise<import("./queue.entity").Queue>;
    update(id: number, dto: UpdateQueueDto): Promise<import("./queue.entity").Queue>;
    remove(id: number): Promise<{
        deleted: boolean;
    }>;
}
