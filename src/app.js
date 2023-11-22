const express=require("express");
const app=express();
const port=process.env.PORT || 3000;
require("./db/conn.js")
const Users=require("./models/infodata.js")
app.use(express.json())
app.get("/",(req,res)=>{
    res.send("Hi ! this rsetfull api")
})


app.post("/info", async(req,res)=>{

    try {
        
        const addRecords= new Users(req.body)
        console.log(addRecords);
        const insertRec= await addRecords.save();
       
        res.status(200).send(insertRec)


    } catch (error) {
       res.status(400).send(error)
    }
})


app.get("/info", async(req,res)=>{

    try {
        
        const find_data= await Users.find({});
        find_data.sort((a,b)=>{
                      
              if (a.name < b.name) {
                  return -1;
              }
              if (a.name > b.name) {
                  return 1;
              }
              return 0;
        })


       
        res.send(find_data);


    } catch (error) {
       res.status(400).send(error)
    }
})

app.get("/info/:id", async(req,res)=>{

    try {
        _id=req.params.id
        const find_data= await Users.findById(_id);

       
        res.send(find_data);


    } catch (error) {
       res.status(400).send(error)
    }
})


app.get("/infoname/:name", async(req,res)=>{

      cname=req.params.name;
    console.log(cname);
    try {
        const find_data= await Users.find({});
           const filteredn_name=find_data.filter(function(e){
           if (e.name==cname){
            return e;
           }
           else{
                
           }
           
           })
           res.send(filteredn_name);
       
        


    } catch (error) {
       res.status(400).send(error)
    }
})


app.get("/infoemail/:email", async(req,res)=>{

    cemail=req.params.email;
  try {
      const find_data= await Users.find({});
         const filteredn_name=find_data.filter(function(e){
         if (e.email==cemail){
          return e;
         }
         else{
              
         }
         
         })
         res.send(filteredn_name);
     
      


  } catch (error) {
     res.status(400).send(error)
  }
})


app.get("/infoaddress/:address", async(req,res)=>{

    caddress=req.params.address;
    console.log(caddress);
  try {
      const find_data= await Users.find({});
         const filteredn_name=find_data.filter(function(e){
         if (e.address.village==caddress){
          return e;
         }
         else{
              
         }
         
         })

          filteredn_name.sort((a,b)=>{
                      
              if (a.name < b.name) {
                  return -1;
              }
              if (a.name > b.name) {
                  return 1;
              }
              return 0;
        })


         res.send(filteredn_name);
     
      


  } catch (error) {
     res.status(400).send(error)
  }
})


app.get("/infopincode/:pincode", async(req,res)=>{

    cpincode=req.params.pincode;
    console.log(cpincode);
  try {
      const find_data= await Users.find({});
         const filteredn_name=find_data.filter(function(e){
         if (e.address.pincode==cpincode){
          return e;
         }
         else{
              
         }
         
         })

          filteredn_name.sort((a,b)=>{
                      
              if (a.name < b.name) {
                  return -1;
              }
              if (a.name > b.name) {
                  return 1;
              }
              return 0;
        })


         res.send(filteredn_name);
     
      


  } catch (error) {
     res.status(400).send(error)
  }
})





app.patch("/info/:id", async(req,res)=>{

    try {
        _id=req.params.id
        const find_data= await Users.findByIdAndUpdate(_id,req.body,{new:true});

       
        res.send(find_data);


    } catch (error) {
       res.status(400).send(error)
    }
})


app.delete("/info/:id", async(req,res)=>{

    try {
        _id=req.params.id
        const find_data= await Users.findByIdAndDelete(_id);

       
        res.send(find_data);


    } catch (error) {
       res.status(400).send(error)
    }
})

app.listen(port,()=>{
    console.log("the server is runing on port"+port);
})