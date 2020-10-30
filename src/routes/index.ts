import { Router } from 'express';
import gendersRouter from './genders.routes';
import paymentmethodsRouter from './paymentmethods.routes';
import sizesRouter from './sizes.routes';
import cartsRoutes from './carts.routes';
import productsRoutes from './products.routes';
import ordersRoutes from './orders.routes';
import usersRoutes from './users.routes';
import usersRouter from './users.routes';

const routes = Router();

routes.use('/genders', gendersRouter);
routes.use('/paymentmethods', paymentmethodsRouter);
routes.use('/sizes', sizesRouter);
routes.use('/carts', cartsRoutes);
routes.use('/products', productsRoutes);
routes.use('/orders', ordersRoutes);
routes.use('/users', usersRouter);

export default routes;
