import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {

  const [acceptCount, setAcceptCount] = useState(0);

  const studentsData =[
    {
      name : "Sanjay",
      batch : "B47",
      education : "B.E",
    },
    {
      name : "Rahul",
      batch : "B45",
      education : "B.Tech",
    },
    {
      name : "Naveen",
      batch : "B42",
      education : "Bsc",
    },
    {
      name : "Parthiban",
      batch : "B41",
      education : "B.com",
    },
  ]
  return (
    <div className="App">
      <div>
        <h1>Accepted Students : {acceptCount}</h1>
      </div>
      <div className='card-block'>
        {studentsData.map((stud,idx)=>
          (
            <StudentCard
            key = {idx}
            name = {stud.name}
            batch = {stud.batch}
            education = {stud.education}
            acceptCount = {acceptCount}
            setAcceptCount = {setAcceptCount}
            />
          ))
        }
          
      </div>
      
    </div>
  );
}

export default App;


function StudentCard({name,batch,education,acceptCount,setAcceptCount})
{
  const [show, setShow] = useState(true)
  function handleAccept()
  {
    setShow(!show)
    setAcceptCount(acceptCount+1)
  }

  function handleReject()
  {
    setShow(!show)
    setAcceptCount(acceptCount-1)
  }
  
  return(
    <div className="Card">
      <img src='https://th.bing.com/th/id/OIP.Bi81yEfzzJtTz66IcC0lngHaHa?w=159&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7'></img>
      <h3>{name}</h3>
      <p>{batch}</p>
      <p>{education} </p>
      {
        show ?
        <button className='accept-btn' id='btn' onClick={handleAccept}>Accept</button>
        :
        <button className='reject-btn' id='btn' onClick={handleReject}>Reject</button>
      }
    </div>
  )
}



