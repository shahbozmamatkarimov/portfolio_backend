import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface SocialNetworkAttr {
  name: string;
  link: string;
  icon: string;
}

@Table({ tableName: 'socialnetworks' })
export class SocialNetwork extends Model<SocialNetwork, SocialNetworkAttr> {
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
  link: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  icon: string;
}
