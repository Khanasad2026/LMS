import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './configs/mongodb.js';
import { clerkWebhooks } from './controllers/webhooks.js';

// Initialize Express
const app = express();

//Connect to database
await connectDB()

//Middleware cors is use to connect backend to oter domain
app.use(cors())

//Routes
app.get('/', (req,res)=> res.send("API is working"))
app.post('/clerk', express.json(),clerkWebhooks)

//Port
const PORT = process.env.PORT || 5000

app.listen(PORT,()=>{
  console.log(`Server is running on port ${PORT}`)
})