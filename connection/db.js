const mysql = require("mysql2");


const connection =
  mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'employees',
    password:'deepak12345'
  });

  if(connection){
    console.log('db connected');
  }else{
    console.log("err");
  }
  

module.exports=connection; 
