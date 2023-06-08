import { Test, TestingModule } from '@nestjs/testing';
import { DislikeCommentsController } from './dislike_comments.controller';
import { DislikeCommentsService } from './dislike_comments.service';

describe('DislikeCommentsController', () => {
  let controller: DislikeCommentsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DislikeCommentsController],
      providers: [DislikeCommentsService],
    }).compile();

    controller = module.get<DislikeCommentsController>(DislikeCommentsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
