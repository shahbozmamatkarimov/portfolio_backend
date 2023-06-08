import { Injectable } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { Message } from './models/message.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class MessageService {
  constructor(@InjectModel(Message) private messageRepo: typeof Message) {}
  create(createMessageDto: CreateMessageDto) {
    return this.messageRepo.create(createMessageDto);
  }

  findAll() {
    return this.messageRepo.findAll({ include: { all: true } });
  }

  findOne(id: number) {
    return this.messageRepo.findOne({ where: { id }, include: { all: true } });
  }

  update(id: number, updateMessageDto: UpdateMessageDto) {
    return this.messageRepo.update(updateMessageDto, { where: { id } });
  }

  remove(id: number) {
    return this.messageRepo.destroy({ where: { id } });
  }
}
