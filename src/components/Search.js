import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import {AiOutlineHome} from 'react-icons/ai'
import questions from "./data"
import Button from '@mui/material/Button';
const Search = ({correct,wrong,ok,no,setOk,setNo}) => {

  const [i,setI] = useState(0);
  console.log(ok);

  const change =()=>{
    if(i===questions.length-1)
    {
      setI(i)
    }
    else
    {
      setI(i+1);
    }

  }

  const reset = ()=>{
    setOk(0)
    setNo(0)

  }

  return (<>
     <div className="navbar2">
          <h3>Covid-19 Tracker</h3>
          <Link to="/"><AiOutlineHome/></Link>
     </div>
     <h1 className='test-heading'>COVID SYMTOPMS TEST</h1>

     <div className='single-question'>
         <h4 className='hello'>{questions[i].question}</h4>
          <button className='hello no' onClick={correct}>{questions[i].option1}</button>
         <button className='hello no' onClick={wrong}>{questions[i].option2}</button>
     </div>
     {i<questions.length-1?<div className='next-btn1' ><Button variant="contained" onClick={change}>Next</Button></div>:<div className='next-btn1' ><Link to="/result"><Button variant="contained" onClick={reset}>submit</Button></Link></div>}
     
    
     </>
  )
}

export default Search


















{/* {questions.map((question)=>{
 return(
   <>
   <Question key={question.id} {...question}></Question>
   
     </>
 )
})} */}