import { CreateExperienceDto } from './dto/create-experience.dto';
import { UpdateExperienceDto } from './dto/update-experience.dto';
import { Experience } from './models/experience.model';
export declare class ExperienceService {
    private experienceRepo;
    constructor(experienceRepo: typeof Experience);
    create(createExperienceDto: CreateExperienceDto): Promise<Experience>;
    findAll(): Promise<Experience[]>;
    findOne(id: number): Promise<Experience>;
    update(id: number, updateExperienceDto: UpdateExperienceDto): Promise<[affectedCount: number]>;
    remove(id: number): Promise<number>;
}
