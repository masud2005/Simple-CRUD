
import cors from 'cors';
import express, { Request, Response } from 'express';
const app = express();

// Middleware
app.use(express.json());
app.use(cors());


app.get('/', (req, res) => {
    res.send("Simple CRUD Server is Running...");
})

app.use((req, res) => {
    res.status(404).json({ message: 'Sorry! Route not found' })
})

export default app;