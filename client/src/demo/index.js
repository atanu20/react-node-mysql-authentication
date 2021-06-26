const express =require('express');
// const debug = require("debug")("server");
const mysql=require('mysql');

const cors = require("cors");
const bcrypt = require('bcrypt');

const saltRounds = 10;

const PORT=process.env.PORT || 8000;

const app=express();


app.use(cors({
    origin:"http://localhost:3000",
    credentials:true,
}));
app.use(express.json());

const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'login_react'
})





app.get("/",(req,res)=>{
    res.send("hi");
})

app.post("/register",(req,res)=>{
    const email=req.body.email;
    const password=req.body.password;
    bcrypt.hash(password,saltRounds,(errr,hash)=>{
        const data={
       
            email:req.body.email,
            password:hash,        
       
       };
       if(errr)
       {
        console.log(err);
       }
       else{
        let sqll=`select * from users where email='${email}'`;
        db.query(sqll,(er,ress)=>{
            if(ress.length > 0)
            {
                res.send({msg:"User Email Already Present"})

            }
            else{
                let sql="INSERT INTO `users` SET ?";
                db.query(sql,data,(err,result)=>{
                    if(err)
                    {
                        console.log(err)
                    }
                    else{
                        //  console.log(result);
                         res.send(result);
                        // res.send()
            
                    }
                })
            }
        })

       

       }
      

    })
   
    
     
})

app.post("/login",(req,res)=>{
   const email=req.body.email;
    const password=req.body.password;

    // console.log(email);
        
      
        let sql=`select * from users where email='${email}'`;
        // console.log(sql);
        db.query(sql,(err,result)=>{
            if(err)
            {
                // res.send({err:err})
                console.log(err);
            }
            else{
              
               if(result.length > 0)
               {
                bcrypt.compare(password,result[0].password,(errr,response)=>{
                    if(response)
                    {
                     
                     res.send({login:true,useremail:email});
                    }
                    else{
                     res.send({login:false,msg:"Wrong Password"});
                    
                    }
                })

                

               }
               else{
                    res.send({login:false,msg:"User Email Not Exits"});
                // console.log("noo email ")
               }
                
    
            }
        })

      
    
     
})




app.listen(PORT,()=>{
    console.log(`app running in ${PORT}` )
})