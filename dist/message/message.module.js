"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageModule = void 0;
const common_1 = require("@nestjs/common");
const message_service_1 = require("./message.service");
const message_controller_1 = require("./message.controller");
const sequelize_1 = require("@nestjs/sequelize");
const message_model_1 = require("./models/message.model");
const jwt_1 = require("@nestjs/jwt");
let MessageModule = class MessageModule {
};
MessageModule = __decorate([
    (0, common_1.Module)({
        imports: [sequelize_1.SequelizeModule.forFeature([message_model_1.Message]), jwt_1.JwtModule.register({})],
        controllers: [message_controller_1.MessageController],
        providers: [message_service_1.MessageService],
    })
], MessageModule);
exports.MessageModule = MessageModule;
//# sourceMappingURL=message.module.js.map