import express from 'express';
import index from '../src/routes/index';

const app = express();


app.use('/', index);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}...`))