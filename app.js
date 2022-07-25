const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const app = express();
require('dotenv/config')
app.use(express.json())
app.use(morgan('tiny'))
const api = process.env.API_URL
app.post(`${api}/products`,(req,res)=>{
    res.send(req.body);
    const product = {
        id: 1,
        name: "hair dresser",
        image: "some_url"
    }
    console.log(req);
})
const DB = process.env.DATABASE.replace(
    '<PASSWORD>',
    process.env.DATABASE_PASSWORD
  );
  mongoose
    .connect(DB, {
      useNewUrlParser: true,
      useUnifiedTopology:true,
      dbName: 'db1'
    })
    .then(() => {
      console.log('DB connection successful');
      // console.log(con.connection);
    }).catch((err)=>{
        console.log(err);
    });
  
app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})