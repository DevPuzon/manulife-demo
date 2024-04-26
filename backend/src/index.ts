import express from 'express';
import bodyParser from 'body-parser'; 
import todoRoutes from './routes/todo.route';
import cors from "cors";

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(cors({
  origin:"*"
}))
app.use('/todo',todoRoutes);

app.listen(5000, () => {
  console.log(`Server is running on port ${PORT}`);
});
