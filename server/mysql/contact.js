const express = require('express')
const mysql = require('mysql');
const dbinfo = require('./dbconfig.json');

const mysqlconect = express.Router();

mysqlconect.use(express.json());

const conectmothed = mysql.createPool(dbinfo);

mysqlconect.post("/", (req, res)=>{   
    const crud = req.body.crud;
    const botable = req.body.botable;
    const wr_id = req.body.wr_id ? req.body.wr_id : ""; // 조건적으로 발생하는 변수

    conectmothed.getConnection((error, connection)=>{
        if(error) throw console.log("DB정보 틀린거같아"+error)         
         
        if(crud == "select"){
            var selquery = wr_id =="" ? `select * from ${botable}`:`select * from ${botable} where wr_id=${wr_id}`;
            connection.query(selquery,(err, result) =>{
                if(err) throw console.log('쿼리문 다시 작성해')          
                res.send(result)
            })
            connection.release(); //연결 반환
        }else if(crud == "insert"){
            connection.query(`INSERT INTO ${botable} (src, cardTopic, cardName, cardContent0, cardContent1) 
            VALUES ('/img/bbb.jpg', 'Best Item', '소형스타일러', '<span>ccccc</span>', '온가담.. ')`,(err, result) =>{
                if(err) throw console.log('쿼리문 다시 작성해')          
                res.send(result)
            })
            connection.release(); //연결 반환

        }else if(crud == "update"){
            //리액트 폼태그완성 insert  처리후 update
            connection.query(`select * from ongadam_about`,(err, result) =>{
                if(err) throw console.log('쿼리문 다시 작성해')          
                res.send(result)
            })
            connection.release(); //연결 반환

        }else{
            connection.query(`delete * from ${botable} where wr_id=${wr_id}`,(err, result) =>{
                if(err) throw console.log('쿼리문 다시 작성해')          
                res.send("삭제했습니다.")
            })
            connection.release(); //연결 반환

        }
    })
})

module.exports = mysqlconect;

