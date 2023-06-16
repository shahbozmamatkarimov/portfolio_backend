import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Comment } from '../../comment/models/comment.model';

interface EmotionAttr {
  like: number;
  comment_id: number;
}

@Table({ tableName: 'emotions' })
export class Emotion extends Model<Emotion, EmotionAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  like: number;

  @ForeignKey(() => Comment)
  @Column({
    type: DataType.INTEGER,
  })
  comment_id: number;

  @BelongsTo(() => Comment)
  comments: Comment[];
}
