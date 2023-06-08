import { Test, TestingModule } from '@nestjs/testing';
import { EmotionCommentsController } from './emotion_comments.controller';
import { EmotionCommentsService } from './emotion_comments.service';

describe('EmotionCommentsController', () => {
  let controller: EmotionCommentsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmotionCommentsController],
      providers: [EmotionCommentsService],
    }).compile();

    controller = module.get<EmotionCommentsController>(EmotionCommentsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
