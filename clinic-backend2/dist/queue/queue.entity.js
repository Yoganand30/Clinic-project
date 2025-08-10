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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Queue = void 0;
const typeorm_1 = require("typeorm");
const doctor_entity_1 = require("../doctor/doctor.entity");
let Queue = class Queue {
    id;
    patientName;
    doctor;
    queueNumber;
    status;
    priority;
};
exports.Queue = Queue;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Queue.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Queue.prototype, "patientName", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => doctor_entity_1.Doctor, { eager: true, onDelete: 'SET NULL', nullable: true }),
    __metadata("design:type", Object)
], Queue.prototype, "doctor", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", Number)
], Queue.prototype, "queueNumber", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: ['waiting', 'with_doctor', 'completed'], default: 'waiting' }),
    __metadata("design:type", String)
], Queue.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], Queue.prototype, "priority", void 0);
exports.Queue = Queue = __decorate([
    (0, typeorm_1.Entity)()
], Queue);
//# sourceMappingURL=queue.entity.js.map