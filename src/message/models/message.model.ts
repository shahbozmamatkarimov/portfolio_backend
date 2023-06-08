import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface MessageAttr {
  fullname: string;
  email: string;
  message: string;
  subject: string;
}

@Table({ tableName: 'message' })
export class Message extends Model<Message, MessageAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  fullname: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  email: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  message: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  subject: string;
}
