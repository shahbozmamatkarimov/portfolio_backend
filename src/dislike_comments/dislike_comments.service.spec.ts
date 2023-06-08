import { Test, TestingModule } from '@nestjs/testing';
import { DislikeCommentsService } from './dislike_comments.service';

describe('DislikeCommentsService', () => {
  let service: DislikeCommentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DislikeCommentsService],
    }).compile();

    service = module.get<DislikeCommentsService>(DislikeCommentsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
