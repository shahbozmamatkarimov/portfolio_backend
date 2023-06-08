import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface ExperienceAttr {
  title: string;
  description: string;
}

@Table({ tableName: 'experience' })
export class Experience extends Model<Experience, ExperienceAttr> {
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
  time: string;

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
  languages: string;
}
