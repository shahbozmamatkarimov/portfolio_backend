import { EmotionsService } from './emotions.service';
import { CreateEmotionDto } from './dto/create-emotion.dto';
import { UpdateEmotionDto } from './dto/update-emotion.dto';
export declare class EmotionsController {
    private readonly emotionsService;
    constructor(emotionsService: EmotionsService);
    create(createEmotionDto: CreateEmotionDto): Promise<import("./models/emotion.model").Emotion>;
    findAll(): Promise<import("./models/emotion.model").Emotion[]>;
    findOne(id: string): Promise<import("./models/emotion.model").Emotion>;
    update(id: string, updateEmotionDto: UpdateEmotionDto): Promise<[affectedCount: number]>;
    remove(id: string): Promise<number>;
}
