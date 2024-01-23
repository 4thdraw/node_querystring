import {useEffect} from 'react'
import axios from 'axios';
import './App.css';

function App() {
  
  useEffect(
    ()=>{
      axios.get('http://localhost:8080/data?tablenm=navi')
     .then((Response)=>{
          console.log(Response.data);

         })
     .catch((Error)=>{console.log(Error)})
    }, []
  )
  return (
    <div className="App">
     
    </div>
  );
}

export default App;
