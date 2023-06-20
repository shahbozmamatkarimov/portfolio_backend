import { ContentService } from './content.service';
import { CreateContentDto } from './dto/create-content.dto';
import { UpdateContentDto } from './dto/update-content.dto';
export declare class ContentController {
    private readonly contentService;
    constructor(contentService: ContentService);
    create(createContentDto: CreateContentDto): Promise<import("./models/content.model").Content>;
    findAll(): Promise<import("./models/content.model").Content[]>;
    findOne(id: string): Promise<import("./models/content.model").Content>;
    update(id: string, updateContentDto: UpdateContentDto): Promise<[affectedCount: number]>;
    remove(id: string): Promise<number>;
}
