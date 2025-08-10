import { DoctorService } from './doctor.service';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { UpdateDoctorDto } from './dto/update-doctor.dto';
export declare class DoctorController {
    private readonly doctorService;
    constructor(doctorService: DoctorService);
    create(createDoctorDto: CreateDoctorDto): Promise<import("./doctor.entity").Doctor[]>;
    findAll(specialization?: string, location?: string): Promise<import("./doctor.entity").Doctor[]>;
    findOne(id: number): Promise<import("./doctor.entity").Doctor>;
    update(id: number, updateDoctorDto: UpdateDoctorDto): Promise<import("./doctor.entity").Doctor>;
    remove(id: number): Promise<{
        deleted: boolean;
    }>;
}
