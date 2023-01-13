const dotenv=require('dotenv').config()
const express=require('express')
const mongoose=require('mongoose')
const bodyparser=require('body-parser')
const cors=require('cors')
const cookieParser=require('cookie-parser')
const userRoute=require('./routes/userRoute')
const productRoute=require('./routes/productRoute')
const contactRoute=require('./routes/contactRoute')
const multer  = require('multer');
const upload = multer();


const app=express()
mongoose.set("strictQuery", false);

app.use(express.json()) // help in using express data
app.use(express.urlencoded({extended:false}))
app.use(bodyparser.json())
app.use(cookieParser());
app.use(cors({
    origin:['http://localhost:3000','https://pinvent-app.vercel.app'],
    credentials:true
}));
app.use(upload.array());

app.use('/api/users',userRoute);
app.use('/api/products',productRoute)
app.use('/api/contactus',contactRoute);


const PORT=process.env.PORT || 5000 ;

// connect to mongoDB and start the server

mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        app.listen(PORT,()=>{
            console.log(`Server running on port ${PORT}`)
        })
    })
    .catch((err)=>{console.log(err)})
