import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Comment } from '../../comment/models/comment.model';

interface ProjectAttr {
  image: string;
  title: string;
  description: string;
  link: string;
  github_link: string;
  languages: string;
}

@Table({ tableName: 'project' })
export class Project extends Model<Project, ProjectAttr> {
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
  image: string;

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

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  link: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  github_link: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  languages: string;

  @ForeignKey(() => Comment)
  @Column({
    type: DataType.INTEGER,
  })
  comment_id: number;

  @BelongsTo(() => Comment)
  comments: string;
}
