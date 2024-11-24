// app.ts
import cors from 'cors';
import express from 'express';
import { bookRoutes } from './app/routes/bookRoutes';
import { orderRoutes } from './app/routes/orderRoutes';

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('<h1>The Book Nook API</h1>');
});

// Routes
app.use('/api/v1/products', bookRoutes);
app.use('/api/v1/orders', orderRoutes);

export default app;
