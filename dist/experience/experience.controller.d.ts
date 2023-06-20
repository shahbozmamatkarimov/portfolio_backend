import { ExperienceService } from './experience.service';
import { CreateExperienceDto } from './dto/create-experience.dto';
import { UpdateExperienceDto } from './dto/update-experience.dto';
export declare class ExperienceController {
    private readonly experienceService;
    constructor(experienceService: ExperienceService);
    create(createExperienceDto: CreateExperienceDto): Promise<import("./models/experience.model").Experience>;
    findAll(): Promise<import("./models/experience.model").Experience[]>;
    findOne(id: string): Promise<import("./models/experience.model").Experience>;
    update(id: string, updateExperienceDto: UpdateExperienceDto): Promise<[affectedCount: number]>;
    remove(id: string): Promise<number>;
}
