import type { QueueStatus } from '../queue.entity';
export declare class CreateQueueDto {
    patientName: string;
    doctorId?: number;
    queueNumber: number;
    status?: QueueStatus;
    priority?: number;
}
