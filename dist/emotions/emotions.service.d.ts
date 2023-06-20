import { CreateEmotionDto } from './dto/create-emotion.dto';
import { UpdateEmotionDto } from './dto/update-emotion.dto';
import { Emotion } from './models/emotion.model';
export declare class EmotionsService {
    private emotionsRepo;
    constructor(emotionsRepo: typeof Emotion);
    create(createEmotionDto: CreateEmotionDto): Promise<Emotion>;
    findAll(): Promise<Emotion[]>;
    findOne(id: number): Promise<Emotion>;
    update(id: number, updateEmotionDto: UpdateEmotionDto): Promise<[affectedCount: number]>;
    remove(id: number): Promise<number>;
}
