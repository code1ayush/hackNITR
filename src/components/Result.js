import React from 'react'
import {Link} from 'react-router-dom'
import {AiOutlineHome} from 'react-icons/ai'

const Result = ({ ok, no}) => {
    
  return (
    <>
         <div className="navbar2">
          <h3>Covid-19 Tracker</h3>
          <Link to="/"><AiOutlineHome/></Link>
     </div>
     <div className='single-question1'>
        {ok<=3?<h4>It can be a normal flue,
        but be careful and wear mask at public places</h4>:<h4>You might have the Covid infection,
        get a RTPCR test asap</h4>}
     </div>
    </>
  )
}

export default Result