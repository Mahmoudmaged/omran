const express=require('express');
const app = express();
const bodyParser=require('body-parser').urlencoded({extended:false});
const path=require('path');
const mongoose=require('mongoose');

const AppRoutes=require('./routes/links.routs');
const multer = require("multer");


var storage = multer.diskStorage({
    destination:(req ,file ,cb)=>{
        cb(null,"xyz")
    },
    filename:(req ,file ,cb)=>{
        cb(null,Date.now()+'_'+Math.random()*1000+"mahmoud"+file.originalname)
    },
})


app.use(multer({dest:"xyz",storage}).single("img"));
app.use(AppRoutes );
app.use(bodyParser);



app.set('view engine','ejs');
app.use(express.static(path.join(__dirname,'public')));
app.use('/xyz',express.static(path.join(__dirname,'xyz')));

mongoose.connect("mongodb+srv://mostafa:mostafa@cluster0.uzvic.mongodb.net/test",{useNewUrlParser:true,useUnifiedTopology:true});

process.env.PORT
app.listen(process.env.PORT||3000,()=>{
    console.log("hello world");
})
