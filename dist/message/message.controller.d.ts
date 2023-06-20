import { MessageService } from './message.service';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
export declare class MessageController {
    private readonly messageService;
    constructor(messageService: MessageService);
    create(createMessageDto: CreateMessageDto): Promise<import("./models/message.model").Message>;
    findAll(): Promise<import("./models/message.model").Message[]>;
    findOne(id: string): Promise<import("./models/message.model").Message>;
    update(id: string, updateMessageDto: UpdateMessageDto): Promise<[affectedCount: number]>;
    remove(id: string): Promise<number>;
}
