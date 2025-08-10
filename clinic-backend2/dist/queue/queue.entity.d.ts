import { Doctor } from '../doctor/doctor.entity';
export type QueueStatus = 'waiting' | 'with_doctor' | 'completed';
export declare class Queue {
    id: number;
    patientName: string;
    doctor: Doctor | null;
    queueNumber: number;
    status: QueueStatus;
    priority: number;
}
