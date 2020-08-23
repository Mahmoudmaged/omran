
const router = require("express").Router();
const modelapp = require("../model/database")
router.get("/", async(req,res,next)=>{
  let productContainer= await  modelapp.find({});
    res.render("user" ,{productContainer});
})
router.post("/search", async(req,res,next)=>{
    let searchKey = req.body.search;
 
let productContainer= await  modelapp.find({name: new RegExp(searchKey)});
        res.render("user",{productContainer});

  })

  router.get("/showmore/:id", async(req,res,next)=>{
    let productContainer= await  modelapp.find({_id:req.params.id});
      res.render("showmore" ,{productContainer});
  })

module.exports=router;