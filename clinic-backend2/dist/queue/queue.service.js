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
exports.QueueService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const queue_entity_1 = require("./queue.entity");
const doctor_entity_1 = require("../doctor/doctor.entity");
let QueueService = class QueueService {
    queueRepo;
    doctorRepo;
    constructor(queueRepo, doctorRepo) {
        this.queueRepo = queueRepo;
        this.doctorRepo = doctorRepo;
    }
    async create(dto) {
        let doctor = null;
        if (dto.doctorId) {
            doctor = await this.doctorRepo.findOne({ where: { id: dto.doctorId } });
            if (!doctor)
                throw new common_1.NotFoundException('Doctor not found');
        }
        const entry = this.queueRepo.create({ ...dto, doctor });
        return this.queueRepo.save(entry);
    }
    findAll() {
        return this.queueRepo.find({ order: { priority: 'DESC', queueNumber: 'ASC' } });
    }
    async findOne(id) {
        const q = await this.queueRepo.findOne({ where: { id } });
        if (!q)
            throw new common_1.NotFoundException('Queue entry not found');
        return q;
    }
    async update(id, dto) {
        const q = await this.findOne(id);
        if (dto.doctorId) {
            const doctor = await this.doctorRepo.findOne({ where: { id: dto.doctorId } });
            if (!doctor)
                throw new common_1.NotFoundException('Doctor not found');
            q.doctor = doctor;
        }
        Object.assign(q, dto);
        return this.queueRepo.save(q);
    }
    async remove(id) {
        const q = await this.findOne(id);
        await this.queueRepo.remove(q);
        return { deleted: true };
    }
};
exports.QueueService = QueueService;
exports.QueueService = QueueService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(queue_entity_1.Queue)),
    __param(1, (0, typeorm_1.InjectRepository)(doctor_entity_1.Doctor)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], QueueService);
//# sourceMappingURL=queue.service.js.map