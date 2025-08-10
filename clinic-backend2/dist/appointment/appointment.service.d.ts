import { Repository } from 'typeorm';
import { Appointment } from './appointment.entity';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';
import { Doctor } from '../doctor/doctor.entity';
export declare class AppointmentService {
    private appointmentRepo;
    private doctorRepo;
    constructor(appointmentRepo: Repository<Appointment>, doctorRepo: Repository<Doctor>);
    create(dto: CreateAppointmentDto): Promise<Appointment>;
    findAll(): Promise<Appointment[]>;
    findOne(id: number): Promise<Appointment>;
    update(id: number, dto: UpdateAppointmentDto): Promise<Appointment>;
    remove(id: number): Promise<{
        deleted: boolean;
    }>;
}
