import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { User } from '../../user/models/user.model';
import { Project } from '../../projects/models/project.model';

interface CommentAttr {
  comment: string;
  reply: string;
}

@Table({ tableName: 'comment' })
export class Comment extends Model<Comment, CommentAttr> {
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
  comment: string;

  @Column({
    type: DataType.STRING,
  })
  reply: string;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
  })
  user_id: number;

  @BelongsTo(() => User)
  users: User[];

  @ForeignKey(() => Project)
  @Column({
    type: DataType.INTEGER,
  })
  project_id: number;

  @BelongsTo(() => Project)
  projects: Project[];
}
