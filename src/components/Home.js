import React,{useState} from 'react'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { borderRadius } from '@mui/system';
import {Link} from 'react-router-dom'
const Home = ({region}) => {

   const [country,setCountry] = useState('');
   const [stats,setStats] = useState('');
   const [date,setDate] = useState('');

const getStats =()=>{
    const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '07ef2d038dmsh72b55d44f90823ap1288abjsn32222cb465c1',
		'X-RapidAPI-Host': 'covid-19-statistics.p.rapidapi.com'
	}
};

fetch(`https://covid-19-statistics.p.rapidapi.com/reports?q=${country}&date=${me}`, options)
	.then(response => response.json())
	.then(data => setStats(data.data[0]))
	.catch(err => console.error(err));
   }

   const handleChange =(e)=>{
      setCountry(e.target.value);
   }

   let day = new Date().getDate();
   var month = new Date().getMonth()+1;
   var year = new Date().getFullYear();
//   console.log(year,month,day);
day=day-2;
day = "0"+day;
month="0"+month;

const me =`${year}-${month}-${day}`;
console.log(me);



console.log(stats);

  
   
  return (
     <>
     <main className='background'>
     <div className="navbar">
          <h3>Covid-19 Tracker</h3>
     </div>
     <div className="grid-container">
        <div className="grid-container2">
             <div className="subgrid1">
               <h1>Follow covid 19 <br/>vaccination<br/>  program</h1>
               <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum quaerat sed voluptate iste placeat molestias illum, </p>
               <div  className='check-btn'>
               {/* <button className='test-btn'>Test</button> */}
               <Link className="test-btn" to="/search">Covid Test</Link>
               <button className='test-btn'>Info</button>
               </div>
             </div>
             <div className="subgrid2"><img className='covid-img' src="https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y292aWR8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60" alt=""  /></div> 
        </div>
        <div className="grid-container3">
           <div className="input-search">
            <input type="text" className='input-bar' value={country} onChange={handleChange} placeholder="Enter Country Name.."/>
           </div>
           <div className="submit-btn">
           <button onClick={getStats} >submit</button>
           </div>
           
         
            <div className='stat-container'>
                
               <div className='stat-item'> 
               <div>Active</div>
               {stats.active?<div>{stats.active}</div>:`----`}
               </div>
               <div className='stat-item'>
               <div>Confirmed</div>
               {stats.confirmed?<div>{stats.confirmed}</div>:`----`}
               </div>
               <div className='stat-item'>
               <div>Deaths</div>
               {stats.deaths?<div>{stats.deaths}</div>:`----`}
               </div>
               <div className='stat-item'> 
               <div>Recovered</div>
               {stats.recovered?<div>{stats.recovered}</div>:`----`}
               </div>
               <div className='stat-item'> 
               <div>Fatality-rate</div>
               {stats.fatality_rate?<div>{stats.fatality_rate}</div>:`----`}
               </div>
               
              
           </div>
        </div>
      </div>
     
   </main>
     
     </>
  )
}

export default Home

























































































{/* {region?<div>
 {region.map((regions)=>{
    return(
       <>
          <div className='article'>
             {regions.name}
          </div>
       </>
    )
 })}
</div>:<div>loading</div>} */}