"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppointmentService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const appointment_entity_1 = require("./appointment.entity");
const doctor_entity_1 = require("../doctor/doctor.entity");
let AppointmentService = class AppointmentService {
    appointmentRepo;
    doctorRepo;
    constructor(appointmentRepo, doctorRepo) {
        this.appointmentRepo = appointmentRepo;
        this.doctorRepo = doctorRepo;
    }
    async create(dto) {
        const doctor = await this.doctorRepo.findOne({ where: { id: dto.doctorId } });
        if (!doctor)
            throw new common_1.NotFoundException('Doctor not found');
        const exists = await this.appointmentRepo.findOne({
            where: { doctor: { id: doctor.id }, date: dto.date, time: dto.time },
        });
        if (exists)
            throw new common_1.BadRequestException('Doctor is not available at that time');
        const appointment = this.appointmentRepo.create({ ...dto, doctor });
        return this.appointmentRepo.save(appointment);
    }
    findAll() {
        return this.appointmentRepo.find();
    }
    async findOne(id) {
        const appt = await this.appointmentRepo.findOne({ where: { id } });
        if (!appt)
            throw new common_1.NotFoundException('Appointment not found');
        return appt;
    }
    async update(id, dto) {
        const appt = await this.findOne(id);
        if (dto.doctorId) {
            const doctor = await this.doctorRepo.findOne({ where: { id: dto.doctorId } });
            if (!doctor)
                throw new common_1.NotFoundException('Doctor not found');
            appt.doctor = doctor;
        }
        Object.assign(appt, dto);
        return this.appointmentRepo.save(appt);
    }
    async remove(id) {
        const appt = await this.findOne(id);
        await this.appointmentRepo.remove(appt);
        return { deleted: true };
    }
};
exports.AppointmentService = AppointmentService;
exports.AppointmentService = AppointmentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(appointment_entity_1.Appointment)),
    __param(1, (0, typeorm_1.InjectRepository)(doctor_entity_1.Doctor)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], AppointmentService);
//# sourceMappingURL=appointment.service.js.map