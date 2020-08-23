
const router = require("express").Router();
const modelapp = require("../model/database")
router.get("/admin", async(req,res,next)=>{
  let productContainer= await  modelapp.find({});
    res.render("admin" ,{productContainer});
})


router.post('/handleForm',async(req,res)=>{


    await modelapp.insertMany(
      {name:req.body.name  , price:req.body.price,
       total:req.body.total,description:req.body.description, imgURL:req.file.path});
    res.redirect("/admin")
 

    
  
  })
router.get('/delete/:id',async(req,res)=>{
    //console.log(req.file.path)
    await modelapp.findByIdAndDelete({_id:req.params.id});
    res.redirect("/admin")
   
    
  })
  router.get('/edit/:id',async(req,res)=>{
    //console.log(req.file.path)
  let editConatiner=    await modelapp.find({_id:req.params.id});
    res.render("edit",{editConatiner});
  })
  router.post('/editFormData/:id',async(req,res)=>{
    //console.log(req.file.path)
    await modelapp.findOneAndUpdate({ _id:req.params.id },
      {name:req.body.name  , price:req.body.price,
      total:req.body.total,description:req.body.description, imgURL:req.file.path});
    res.redirect("/admin")
   
    
  })

module.exports=router;