const express = require("express")
const naviapp = express.Router();

naviapp.use(express.json())
naviapp.use(express.urlencoded({ extended : true }))

const mysqlconect = require("../mysql/contact")

/* 포스트맨에서 확인해주세요. (post)
  5가지 상황을 미리 설계
  목록   localhost:8007/api?botable=ongadam_about
  글보기 localhost:8007/api?botable=ongadam_about&wr_id=3
  글쓰기 localhost:8007/api?botable=ongadam_about&w=i
  글수정 localhost:8007/api?botable=ongadam_about&wr_id=3&w=u
  글삭제 localhost:8007/api?botable=ongadam_about&wr_id=3&w=d
*/
naviapp.post('/',(req,res,next)=>{ 
  const botable = req.query.botable;
  const w = req.query.w ? req.query.w : "" ; 
  //crud sql문을 완성하기 위한 핵심변수
  const wr_id = req.query.wr_id ? req.query.wr_id : "";
  
  if(w == ""){
     req.body.crud = "select";
     req.body.botable = botable;   
     req.body.wr_id = wr_id; // where문
     next('route')
  }else if(w=="i"){
     req.body.crud = "insert"
     req.body.botable = botable; 
     next('route')
  }else if(w=="u"){
     req.body.crud = "update"
     req.body.botable = botable;  
     req.body.wr_id = wr_id;
     next('route')
  }else if(w=="d"){
     req.body.crud = "delete"
     req.body.botable = botable; 
     req.body.wr_id = wr_id;
     next('route')
  }else{
     res.send("라우터 주소 확인하시오.")     
  }     
})

naviapp.use('/', mysqlconect )

module.exports = naviapp;