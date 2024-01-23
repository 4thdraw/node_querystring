import {useEffect, useState} from 'react'
import axios from 'axios';
import './App.css';

function App() {
  const [content, setcont] = useState("");
  
  useEffect(
    ()=>{
      // 서버요청 -> web.js가 /data 라우터넘겨주기 -> req 저장
      // req.query -> 쿼리스트링 변수= 값 
      // naviapp.use(express.urlencoded({ extended : true }))
      // data 라우터 파일이 res.send 보내주는 데이터를
      axios.get('http://localhost:8080/data?tablenm=qna')
     .then((Response)=>{ // 여기 변수에 저장
          console.log(typeof Response.data, Response.data);
          setcont(Response.data);
         })
     .catch((Error)=>{console.log(Error)})
    }, []
  )
  return (
    <div className="App">
      {content}
    </div>
  );
}

export default App;
