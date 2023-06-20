import { SkillsService } from './skills.service';
import { CreateSkillDto } from './dto/create-skill.dto';
import { UpdateSkillDto } from './dto/update-skill.dto';
export declare class SkillsController {
    private readonly skillsService;
    constructor(skillsService: SkillsService);
    create(createSkillDto: CreateSkillDto): Promise<import("./models/skill.model").Skill>;
    findAll(): Promise<import("./models/skill.model").Skill[]>;
    findOne(id: string): Promise<import("./models/skill.model").Skill>;
    update(id: string, updateSkillDto: UpdateSkillDto): Promise<[affectedCount: number]>;
    remove(id: string): Promise<number>;
}
