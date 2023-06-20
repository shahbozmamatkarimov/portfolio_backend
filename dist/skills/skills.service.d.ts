import { CreateSkillDto } from './dto/create-skill.dto';
import { UpdateSkillDto } from './dto/update-skill.dto';
import { Skill } from './models/skill.model';
export declare class SkillsService {
    private SkillRepo;
    constructor(SkillRepo: typeof Skill);
    create(createSkillDto: CreateSkillDto): Promise<Skill>;
    findAll(): Promise<Skill[]>;
    findOne(id: number): Promise<Skill>;
    update(id: number, updateSkillDto: UpdateSkillDto): Promise<[affectedCount: number]>;
    remove(id: number): Promise<number>;
}
