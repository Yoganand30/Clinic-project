import { Doctor } from '../doctor/doctor.entity';
export type AppointmentStatus = 'booked' | 'completed' | 'cancelled';
export declare class Appointment {
    id: number;
    patientName: string;
    patientContact: string;
    doctor: Doctor;
    date: string;
    time: string;
    status: AppointmentStatus;
}
