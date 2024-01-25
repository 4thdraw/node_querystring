const express = require("express")
const naviapp = express.Router();

naviapp.use(express.json())
naviapp.use(express.urlencoded({ extended : true }))

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

naviapp.post('/:tablenm',(req,res,next)=>{ 
    // const tablenm = req.query.tablenm;
    const tablenm = req.params.tablenm;
    if(tablenm == "navinm"){
      res.send(navidata.navinm)
      //   /data?tablenm=navinm
      //   /data/navinm

    }else if(tablenm == "swiper"){
      res.send(navidata.swiper)
     //    /data?tablenm=swiper
     //    /data/navinm
    }else{
      res.send(["일반라우터 ? 다음의 변수가없거나 설정안된 변수네"])
      //   /data?tablenm=alkdflans,  /data, /data?andlfa=slkfna
      
    }
     
})

module.exports = naviapp;