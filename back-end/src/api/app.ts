import * as express from 'express';
import * as cors from 'cors';
import { LoginRoutes, TaskRoutes, UserRoutes } from '../routes';

const app = express();
const allowedOrigins = ['http://localhost:3001'];

const options: cors.CorsOptions = {
  origin: allowedOrigins,
};

app.use(cors(options));
app.use(express.json());

app.use('/users', UserRoutes);
app.use('/login', LoginRoutes);
app.use('/tasks', TaskRoutes);

export { app };
