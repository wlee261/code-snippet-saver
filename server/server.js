import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';

import snippetRoutes from './routes/snippets.js';

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true}))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true}))
app.use(cors());

app.use('/snippets', snippetRoutes);

const CONNECTION_URL = 'mongodb+srv://Winston:wlee261@cluster0.0koaf.mongodb.net/snippet_app?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

