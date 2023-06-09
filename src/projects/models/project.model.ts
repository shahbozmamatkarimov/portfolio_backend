import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface ProjectAttr {
  image: string;
  title: string;
  description: string;
  start_time: string;
  end_time: string;
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
    type: DataType.DATE,
    allowNull: false,
  })
  start_time: string;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  end_time: string;

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
}
