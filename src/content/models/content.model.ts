import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Comment } from '../../comment/models/comment.model';

interface ContentAttr {
  title: string;
  description: string;
  comment_id: number;
}

@Table({ tableName: 'content' })
export class Content extends Model<Content, ContentAttr> {
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
  title: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  description: string;

  @ForeignKey(() => Comment)
  @Column({
    type: DataType.INTEGER,
  })
  comment_id: number;

  @BelongsTo(() => Comment)
  comments: Comment[];
}
