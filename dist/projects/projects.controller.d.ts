import { ProjectsService } from './projects.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
export declare class ProjectsController {
    private readonly projectsService;
    constructor(projectsService: ProjectsService);
    create(createProjectDto: CreateProjectDto): Promise<import("./models/project.model").Project>;
    findAll(): Promise<import("./models/project.model").Project[]>;
    findOne(id: string): Promise<import("./models/project.model").Project>;
    update(id: string, updateProjectDto: UpdateProjectDto): Promise<[affectedCount: number]>;
    remove(id: string): Promise<number>;
}
