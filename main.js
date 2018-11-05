require('dotenv').config();
var mysql = require('mysql');

var con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:process.env.password,
    database:"STUDENTMANAGER"
});
con.connect(err =>{
    if(err) throw err;
    console.log("Connected!");
    const sql ="CALL findStudentWithId('B1605404');";
    con.query(sql,(err,result)=>{
        if(err) throw err;
        console.log(result[0][0].StudentName);
        console.log(result[0][0].constructor);
    });


})