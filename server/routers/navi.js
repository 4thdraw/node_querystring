const express = require("express")
const naviapp = express.Router();
//중요 (라우터의 쿼리스트링을 일반문자가 아닌 데이터로 인식하게 하기 )
naviapp.use(express.json())
// req.query변수가져오기 위해서 
naviapp.use(express.urlencoded({ extended : true }))

naviapp.get('/',(req,res,next)=>{ 

      const info = req.query.tablenm;  // pc
      const no = req.query.w;  // 1   
      if(info == "navi"){ 
          //next('route'); 
          //다음라우터 실행
          res.send(`${info}테이블 데이터 쿼리문 돌려서 보낸준 자료
          http://localhost:8080/data?tablenm=navi
          `) 
      }else if(info =="swiper"){
          res.send(`${info}테이블 http://localhost:8080/data?tablenm=swiper`)
      }else if(info =="qna"){
          res.send(`${info}테이블 노드자료를 리액트에게 전달`)
      }else{
         res.send("일반라우터")   
      }
})

module.exports = naviapp;