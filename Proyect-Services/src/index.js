import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import sequelize from './db.js';
import router from './routes.js';

const app = express();
const PORT = process.env.PORT || 4500;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use('/uploads', express.static('uploads'));
app.use('/api', router);



// Sincronizar modelos y conectar a la base de datos
sequelize.sync().then(() => {
  console.log('Database synchronized');
// Iniciar el servidor
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch(err => {
  console.error('Unable to connect to the database:', err);
  process.exit(1);
});
