import * as express from "express";
import { Request, Response } from "express";
import { connectDB } from "./database/db";
import { errorHandler } from "./middleware/ErrorMiddleware";
import axios from 'axios';

require("dotenv").config();

connectDB();

const app = express();
app.use(express.json());
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
const API_KEY = process.env.API_KEY;

// app.use("/loved", require("./routes/LovedRoutes"));



 // getting trending movies and tv series of the week by page
app.get('/trending', async (req: Request, res: Response) => {
  try {
   
    let page:number = parseInt(req.query.page as string);
    if (!page || page > 1000){
      page = 1;
    }

    const response = await axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&page=${page}`)
    res.json(response.data);
    
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
});

// Getting movies by page
app.get('/movie', async (req: Request, res: Response) => {
  try {
   
    let page:number = parseInt(req.query.page as string);
    if (!page || page > 500){
      page = 1;
    }

    const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`)
    res.json(response.data);
    
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
});


// Getting tv series by page
app.get('/tv', async (req: Request, res: Response) => {
  try {
   
    let page:number = parseInt(req.query.page as string);
    if (!page || page > 500){
      page = 1;
    }

    const response = await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`)
    res.json(response.data);
    
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
});



app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
