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
exports.MessageService = void 0;
const common_1 = require("@nestjs/common");
const message_model_1 = require("./models/message.model");
const sequelize_1 = require("@nestjs/sequelize");
let MessageService = class MessageService {
    constructor(messageRepo) {
        this.messageRepo = messageRepo;
    }
    create(createMessageDto) {
        return this.messageRepo.create(createMessageDto);
    }
    findAll() {
        return this.messageRepo.findAll({ include: { all: true } });
    }
    findOne(id) {
        return this.messageRepo.findOne({ where: { id }, include: { all: true } });
    }
    update(id, updateMessageDto) {
        return this.messageRepo.update(updateMessageDto, { where: { id } });
    }
    remove(id) {
        return this.messageRepo.destroy({ where: { id } });
    }
};
MessageService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(message_model_1.Message)),
    __metadata("design:paramtypes", [Object])
], MessageService);
exports.MessageService = MessageService;
//# sourceMappingURL=message.service.js.map