import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Project } from '../../projects/models/project.model';

interface EmotionCommentAttr {
  like: number;
  comment_id: number;
}

@Table({ tableName: 'emotioncomments' })
export class EmotionComment extends Model<EmotionComment, EmotionCommentAttr> {
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

  @ForeignKey(() => Project)
  @Column({
    type: DataType.INTEGER,
  })
  project_id: number;

  @BelongsTo(() => Project)
  projects: Project[];
}
