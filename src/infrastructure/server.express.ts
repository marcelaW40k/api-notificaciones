import express from 'express';
import router from './routes/index.routes';
import middleware404 from './middlewares/middlewares';


export const createServerExpress = () => {
    const app = express();
    
   app.use(express.json());
   app.use(router);
   app.use(middleware404)

    const PORT = process.env.PORT || 3001;
    app.listen(PORT, () => {
        console.log(`Api de notificaciones se esta ejecutando en el puerto: ${PORT}`);
    });
};

