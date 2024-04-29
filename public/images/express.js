const express =require('express');
const app= express()
const path =require('path')
const sqlite3 = require('sqlite3').verbose();
// const bparser =require('bodyparser');
app.set('view engine','ejs');
// app.use(bparser.urlen   )
app.set('views',path.join(__dirname,'views'));
//  database ------->
const db_name =path.join(__dirname,'data','psdapp.db');
 const db = new sqlite3.Database(db_name,err=>{
   if(err){
      console.log(err.message);
   }
   console.log("connected");
 })




app.listen(3000)

const query ="create table  fsduser(uid integer primary key autoincrement,fname varchar(50),lname varchar(50))"

db.run(query,err=>{
   if(err){
      console.log(err.message);
   }
   console.log('run');
})
const inser ="insert into fsduser values(1,'arjun','kumar')"

db.run(inser,err=>{
   if(err){
      console.log(err.message);
   }
   console.log('run');
})
const inser2 ="insert into fsduser values(2,'param','kumar')"
db.run(inser2,err=>{
   if(err){
      console.log(err.message);
   }
   console.log('run');
})
app.get('/fsd',(req,res)=>{
   const gdata="select *from fsduser order by uid"
   db.all(gdata,(err,rows)=>{
      if(err){
         console.log(err.message);
      }
      console.log('display');
      res.render('fdata',{model:rows})
   })
   
})