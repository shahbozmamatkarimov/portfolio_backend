import { CreateContentDto } from './dto/create-content.dto';
import { UpdateContentDto } from './dto/update-content.dto';
import { Content } from './models/content.model';
export declare class ContentService {
    private contentRepo;
    constructor(contentRepo: typeof Content);
    create(createContentDto: CreateContentDto): Promise<Content>;
    findAll(): Promise<Content[]>;
    findOne(id: number): Promise<Content>;
    update(id: number, updateContentDto: UpdateContentDto): Promise<[affectedCount: number]>;
    remove(id: number): Promise<number>;
}
