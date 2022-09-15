const db=require('../connection/db');

const create= (req,res)=>{
 const {epName,epDepartment,epSalary}=req.body;
 const qry="INSERT into employee (epName,epDepartment,epSalary) values(?,?,?)";
 try{
   db.query(qry,[epName,epDepartment,epSalary], function(err,results) {
    if(results){
      res.send("user created successfully");
     }else{
      console.log(err);
     }
  })
 }catch(err){
  console.log("err",err);
 }
}

const findAll= (req,res)=>{
  try{
    db.query(`select * from employee`, function(err,results) {
     if(results){
      res.json(results);
     }else{
      console.log(err);
     }

   })
  }catch(err){
   console.log(err);
  }
 }

 const findOne= (req,res)=>{
const {id}=req.params;
  try{
    const sql = `SELECT * FROM employee WHERE id = ${id}`;
    db.query(sql, function(err,results) {
    if(results){
      res.send(results);
     }else{
      console.log(err);
     }     
   })
  }catch(err){
   console.log(err);
  }
 }

 const update= (req,res)=>{
  const {epName,epDepartment,epSalary}=req.body;
  const{id}=req.params;
    try{
      const sql = `update employee set epName=?,epDepartment=?,epSalary=? where id=?`;
      db.query(sql,[epName,epDepartment,epSalary,id], function(err, results) {
      if(results){
        res.send('user updated successfully');
       }else{
        console.log(err);
       } 
     })
    }catch(err){
     console.log(err);
    }
}


const Delete= (req,res)=>{
  const {id}=req.params;
    try{
      const sql = "delete from employee where id=?";
      db.query(sql,[id], function(err, results) {
      if(results){
        res.send('user deleted sucessful');
       }else{
        console.log(err);
       }    
     })
    }catch(err){
     console.log(err);
    }
   }


module.exports ={
  create,
  findAll,
  findOne,
  update,
  Delete
}
