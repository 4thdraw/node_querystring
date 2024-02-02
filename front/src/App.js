import {useEffect, useState} from 'react'
import { tableselect } from './promise/dbconect'
import './App.css';

function App() {
  const [content, setcont] = useState([]); 
  useEffect(
    ()=> {  
     const tableresult = async () =>{
        try{ 
            const sqldata = await tableselect('ongadam_about');
            setcont([...sqldata.data])           
         }
        catch (error){
            setcont(["죄송합니다. 불안정한 서버로 이후 다시 진행해주세요."])
        }
     }
     tableresult();
    }, []
  )
  return (
    <div className="App">
      {content && content.map((e, i) => e.src )}
    </div>
  );
}

export default App;
