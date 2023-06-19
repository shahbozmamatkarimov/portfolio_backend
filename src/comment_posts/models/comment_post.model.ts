import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { User } from '../../user/models/user.model';
import { Content } from '../../content/models/content.model';

interface CommentPostAttr {
  comment: string;
}

@Table({ tableName: 'comment_posts' })
export class CommentPost extends Model<CommentPost, CommentPostAttr> {
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

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
  })
  user_id: number;

  @BelongsTo(() => User)
  users: User[];

  @ForeignKey(() => Content)
  @Column({
    type: DataType.INTEGER,
  })
  content_id: number;

  @BelongsTo(() => Content)
  contents: Content[];
}
