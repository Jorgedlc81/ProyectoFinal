import { DataTypes } from 'sequelize';
import sequelize from '../db.js';

const Service = sequelize.define('Service', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    subtitle: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    heroImage: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {
    timestamps: false
  });

  export default Service