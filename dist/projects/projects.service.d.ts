import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { Project } from './models/project.model';
export declare class ProjectsService {
    private projectRepo;
    constructor(projectRepo: typeof Project);
    create(createProjectDto: CreateProjectDto): Promise<Project>;
    findAll(): Promise<Project[]>;
    findOne(id: number): Promise<Project>;
    update(id: number, updateProjectDto: UpdateProjectDto): Promise<[affectedCount: number]>;
    remove(id: number): Promise<number>;
}
