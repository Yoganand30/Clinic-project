import type { AppointmentStatus } from '../appointment.entity';
export declare class CreateAppointmentDto {
    patientName: string;
    patientContact: string;
    doctorId: number;
    date: string;
    time: string;
    status: AppointmentStatus;
}
