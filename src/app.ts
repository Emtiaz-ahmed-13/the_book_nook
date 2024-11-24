import cors from 'cors';
import express from 'express';
import { bookRoutes } from './app/routes/bookRoutes';
import { orderRoutes } from './app/routes/orderRoutes';
// import productRoutes from './app/routes/productRoutes';

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Routes
app.use('/api/v1/products', bookRoutes);
app.use('/api/v1/orders', orderRoutes);
//app.use('/api/v1/products', productRoutes);

export default app;
