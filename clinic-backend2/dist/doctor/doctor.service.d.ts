import { Repository } from 'typeorm';
import { Doctor } from './doctor.entity';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { UpdateDoctorDto } from './dto/update-doctor.dto';
export declare class DoctorService {
    private doctorRepo;
    constructor(doctorRepo: Repository<Doctor>);
    create(createDto: CreateDoctorDto): Promise<Doctor[]>;
    findAll(query?: {
        specialization?: string;
        location?: string;
    }): Promise<Doctor[]>;
    findOne(id: number): Promise<Doctor>;
    update(id: number, updateDto: UpdateDoctorDto): Promise<Doctor>;
    remove(id: number): Promise<{
        deleted: boolean;
    }>;
}
