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
exports.QueueController = void 0;
const common_1 = require("@nestjs/common");
const queue_service_1 = require("./queue.service");
const create_queue_dto_1 = require("./dto/create-queue.dto");
const update_queue_dto_1 = require("./dto/update-queue.dto");
let QueueController = class QueueController {
    queueService;
    constructor(queueService) {
        this.queueService = queueService;
    }
    create(dto) {
        return this.queueService.create(dto);
    }
    findAll() {
        return this.queueService.findAll();
    }
    findOne(id) {
        return this.queueService.findOne(id);
    }
    update(id, dto) {
        return this.queueService.update(id, dto);
    }
    remove(id) {
        return this.queueService.remove(id);
    }
};
exports.QueueController = QueueController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ whitelist: true })),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_queue_dto_1.CreateQueueDto]),
    __metadata("design:returntype", void 0)
], QueueController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], QueueController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], QueueController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ whitelist: true })),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_queue_dto_1.UpdateQueueDto]),
    __metadata("design:returntype", void 0)
], QueueController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], QueueController.prototype, "remove", null);
exports.QueueController = QueueController = __decorate([
    (0, common_1.Controller)('queue'),
    __metadata("design:paramtypes", [queue_service_1.QueueService])
], QueueController);
//# sourceMappingURL=queue.controller.js.map