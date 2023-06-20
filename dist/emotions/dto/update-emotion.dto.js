"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateEmotionDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_emotion_dto_1 = require("./create-emotion.dto");
class UpdateEmotionDto extends (0, swagger_1.PartialType)(create_emotion_dto_1.CreateEmotionDto) {
}
exports.UpdateEmotionDto = UpdateEmotionDto;
//# sourceMappingURL=update-emotion.dto.js.map