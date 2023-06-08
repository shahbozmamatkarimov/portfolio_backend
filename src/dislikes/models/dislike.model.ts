import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Project } from '../../projects/models/project.model';

interface DislikeAttr {
  dislikes: number;
}

@Table({ tableName: 'dislike' })
export class Dislike extends Model<Dislike, DislikeAttr> {
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
  dislikes: number;

  @ForeignKey(() => Project)
  @Column({
    type: DataType.INTEGER,
  })
  project_id: number;

  @BelongsTo(() => Project)
  projects: string[];
}
