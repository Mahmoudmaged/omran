const express=require('express');
const app=express();
const bodyParser=require('body-parser').urlencoded({extended:false})
const path=require('path');
const mongoose=require('mongoose');

app.set('view engine','ejs');
app.use(express.static(path.join(__dirname,'assets')));
app.use("/xyz",express.static(path.join(__dirname,'xyz')));
app.use(bodyParser)
const multer = require("multer");

var storage = multer.diskStorage({
    destination:(req ,file ,cb)=>{
        cb(null,"xyz")
    },
    filename:(req ,file ,cb)=>{
        cb(null,Date.now()+'_'+Math.random()*1000+"mahmoud"+file.originalname)
    },
})

function fileFilter (req, file, cb) {


    if(file.mimetype==="image/png" ||file.mimetype==="image/jpg"||file.mimetype==="image/jpeg")
    {
        cb(null, true)

    }else 
    {
        cb("invalid file type only png , jpg and jpeg is acceptable", false)

    }
  
  }
app.use(multer({dest:"xyz",storage,fileFilter}).single("img"));



const Admin=require('./controler/admin');
const user=require('./controler/user');
app.use(Admin);
app.use(user);
mongoose.connect("mongodb+srv://MahmoudElwan:01015776658@mahmoudelwan-nodejs.jfspq.mongodb.net/myDB", { useNewUrlParser: true , useUnifiedTopology: true });
app.listen(process.env.PORT||3000,()=>{
    console.log('server is running now......')
})
