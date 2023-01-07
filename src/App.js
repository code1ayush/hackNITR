import react , {useState,useEffect} from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home'
import Search from './components/Search'
import './App.css';
import Result from './components/Result';
function App() {

  const [ok,setOk] = useState(0);
  const[no,setNo] = useState(0);

   const correct =()=>{
    setOk(ok+1)

  }

  const wrong =()=>{
    setNo(no+1)

  }


  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} ></Route>
        <Route path="/search" element={<Search ok={ok} no={no} correct={correct} wrong={wrong} setNo={setNo} setOk={setOk} />}></Route>
        <Route path='/result' element={<Result  ok={ok} no={no}/>}></Route>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
