import { Column, DataType, Model, Table } from 'sequelize-typescript';

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
    unique: true,
  })
  content: string;

  @Column({
    type: DataType.STRING,
    unique: true,
  })
  image: string;
}
