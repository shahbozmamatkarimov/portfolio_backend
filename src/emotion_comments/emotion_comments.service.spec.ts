import { Test, TestingModule } from '@nestjs/testing';
import { EmotionCommentsService } from './emotion_comments.service';

describe('EmotionCommentsService', () => {
  let service: EmotionCommentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmotionCommentsService],
    }).compile();

    service = module.get<EmotionCommentsService>(EmotionCommentsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
