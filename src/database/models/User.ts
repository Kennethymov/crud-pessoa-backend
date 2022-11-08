import { Model, INTEGER, STRING, DATEONLY } from 'sequelize';
import db from '.';

class User extends Model {
  id!: number;
  name!: string;
  email!: string;
  birthDate!: string;
}

User.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: STRING,
    allowNull: false,
  },
  email: {
    type: STRING,
    allowNull: false,
  },
  birthDate: {
    type: DATEONLY,
    allowNull: false,
  },
}, {
  underscored: true,
  sequelize: db,
  modelName: 'users',
  timestamps: false
});

export default User;