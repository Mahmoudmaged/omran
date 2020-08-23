const AppRoutes=require('express').Router();
const modelApp=require('../models/mdelApp');

AppRoutes.get('/',async(req,res)=>{
    const result=await modelApp.find({})
    res.render('index',{result});
})

AppRoutes.get('/dashbord',async(req,res)=>{

    const result =await modelApp.find({});
    res.render('dashbord',{result})
})

   AppRoutes.post('/handleForm',async(req,res)=>{
    //res.send('helloo')
    let title=req.body.title;
    let description=req.body.desc;
    await  modelApp.insertMany({name:title,description:description,imgURl:req.file.path})
    
   
     res.redirect('/')
 })   
 AppRoutes.get('/blog-details/:id',async(req,res)=>{
        
    const result = await modelApp.find({_id:req.params.id})
    
    res.render('blog-details',{result})
})
AppRoutes.get('/edit',async(req,res)=>{
    res.render('edit')
})
AppRoutes.get('/add-article',async(req,res)=>{
    res.render('add-article')
})
AppRoutes.get('/Delete/:id',async(req,res)=>{
    await modelApp.findByIdAndDelete({_id:req.params.id});
    
    res.redirect('/dashbord');
})
AppRoutes.get('/edit/:id',async(req,res)=>{

    const result= await modelApp.find({_id:req.params.id})
    
       res.render('edit',{result});
   });
AppRoutes.post('/updateProduct/:id',async(req,res,next)=>{
    await modelApp.findOneAndUpdate({_id:req.params.id},{name:req.body.name,description:req.body.description,imgURl:req.file.path})
    
    
       res.redirect('/dashbord')
 });
 AppRoutes.post('/search',async(req,res)=>{
        
        res.render('index',{result})
      
   });
   

module.exports=AppRoutes;