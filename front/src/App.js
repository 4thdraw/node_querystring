import {useEffect, useState} from 'react'
import axios from 'axios';
import './App.css';

function App() {
  const [content, setcont] = useState([]);

  const tableselect = async (tablenm) =>{
    axios.post(`/data/${tablenm}`)
    //노드의 req -> res -> Response.data로 저장된다.
    .then((Response)=>{ // 여기 변수에 저장
         console.log(typeof Response.data, Response.data, Array.isArray(Response.data));
         setcont([...Response.data]);
        })
    .catch((Error)=>{console.log(Error)})
  }   

  useEffect(
    ()=> { 
      tableselect("swiper");
    }, []
  )
  return (
    <div className="App">
      { content.map((e, i) => e.src )}
    </div>
  );
}

export default App;
