const express = require("express")
const naviapp = express.Router();

//데이터전송
naviapp.use(express.json())
//주소창 ? 뒤에부분을 key와 value인식
naviapp.use(express.urlencoded({ extended : true }))
// localhost:8080/data?tablenm=swiper
const navidata = {
  navinm : [
    { nm : "회사소개", href : "#none"
    },
    { nm : "제품소개", href : "#none"
    },
    { nm : "견적서", href : "#none"
    }
  ] ,
  swiper : [
    { src : "/img/1.jpg", href : "#none"
    },
    { src : "/img/2.jpg", href : "#none"
    },
   { src : "/img/3.jpg", href : "#none"
   }
  ] 
}

naviapp.post('/',(req,res,next)=>{ 
    const tablenm = req.query.tablenm;
    if(tablenm == "navinm"){
      res.send(navidata.navinm)

    }else if(tablenm == "swiper"){
      res.send(navidata.swiper)
    }else{
      res.send(["일반라우터 ? 다음의 변수가없거나 설정안된 변수네"])
    }
     
})

module.exports = naviapp;