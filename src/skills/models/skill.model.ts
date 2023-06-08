import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface SkillAttr {
  name: string;
  image: string;
  link: string;
}

@Table({ tableName: 'skill' })
export class Skill extends Model<Skill, SkillAttr> {
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
  name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  image: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  link: string;
}
