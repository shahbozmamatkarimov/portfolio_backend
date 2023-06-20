import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { Message } from './models/message.model';
export declare class MessageService {
    private messageRepo;
    constructor(messageRepo: typeof Message);
    create(createMessageDto: CreateMessageDto): Promise<Message>;
    findAll(): Promise<Message[]>;
    findOne(id: number): Promise<Message>;
    update(id: number, updateMessageDto: UpdateMessageDto): Promise<[affectedCount: number]>;
    remove(id: number): Promise<number>;
}
