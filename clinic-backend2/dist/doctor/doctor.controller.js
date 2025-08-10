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
exports.DoctorController = void 0;
const common_1 = require("@nestjs/common");
const doctor_service_1 = require("./doctor.service");
const create_doctor_dto_1 = require("./dto/create-doctor.dto");
const update_doctor_dto_1 = require("./dto/update-doctor.dto");
let DoctorController = class DoctorController {
    doctorService;
    constructor(doctorService) {
        this.doctorService = doctorService;
    }
    create(createDoctorDto) {
        return this.doctorService.create(createDoctorDto);
    }
    findAll(specialization, location) {
        return this.doctorService.findAll({ specialization, location });
    }
    findOne(id) {
        return this.doctorService.findOne(id);
    }
    update(id, updateDoctorDto) {
        return this.doctorService.update(id, updateDoctorDto);
    }
    remove(id) {
        return this.doctorService.remove(id);
    }
};
exports.DoctorController = DoctorController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ whitelist: true })),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_doctor_dto_1.CreateDoctorDto]),
    __metadata("design:returntype", void 0)
], DoctorController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('specialization')),
    __param(1, (0, common_1.Query)('location')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], DoctorController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], DoctorController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ whitelist: true })),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_doctor_dto_1.UpdateDoctorDto]),
    __metadata("design:returntype", void 0)
], DoctorController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], DoctorController.prototype, "remove", null);
exports.DoctorController = DoctorController = __decorate([
    (0, common_1.Controller)('doctors'),
    __metadata("design:paramtypes", [doctor_service_1.DoctorService])
], DoctorController);
//# sourceMappingURL=doctor.controller.js.map