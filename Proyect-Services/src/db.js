import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('uvmproject', 'root', '12345', {
  host: 'localhost',
  dialect: 'mysql'
});

export default sequelize;
