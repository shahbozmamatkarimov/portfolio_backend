"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCommentPostDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_comment_post_dto_1 = require("./create-comment_post.dto");
class UpdateCommentPostDto extends (0, swagger_1.PartialType)(create_comment_post_dto_1.CreateCommentPostDto) {
}
exports.UpdateCommentPostDto = UpdateCommentPostDto;
//# sourceMappingURL=update-comment_post.dto.js.map