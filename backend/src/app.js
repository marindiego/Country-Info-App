import express from 'express';
import cors from 'cors';
import router from './routes/countriesRouter.js';
import morgan from 'morgan';

const app = express(); 

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use(router);


function startServer () {
    const PORT = process.env.PORT || 3001;
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}
startServer();