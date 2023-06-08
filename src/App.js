
import './App.css';
import React, { useState } from 'react';
import StudentCard from './components/student';
import { StateFulCom, StatelessComp } from './components/StateComponent';
import Button from './components/Button';

function App() {

  const [acceptCount, setAcceptCount] = useState(0)
  const studentsData = [
    {
      name:"Selvam",
      batch:"B47WD",
      education:"B.E",
    },
    {
      name:"Sanjay",
      batch:"B45WD",
      education:"B.E",
    },
    {
      name:"Baskar",
      batch:"B43WD",
      education:"BCA",
    },
    {
      name:"Naveen",
      batch:"B42WD",
      education:"BSC",
    },
  ]
  return (
<div className="App">
<div>
  <h1>Accepted Students : {acceptCount}</h1>
</div>
<div className='card-block'>
  {studentsData.map((stud,idx)=>(
     <StudentCard
     key={idx}
     name={stud.name}
     batch={stud.batch}
     education={stud.education}
     acceptCount={acceptCount}
     setAcceptCount={setAcceptCount}
     />
  ))}
  <div>
    {/* <StateFulCom/>
    <StatelessComp name={"Sanjay"}/> */}

    <Button
    background={"crimson"}
    color="white"
    pd="15px"
    m="5px"
    wd="max-content"
    onClickFunc={()=>console.log("custom-btn clicked")}> Add </Button>

  </div>
</div>
</div>
  );
}
// const props={} => 
// props= {
//   name:"",
//    batch:"", 
//    education:""}
//destructuring 
// const {name, batch, education} = props

export default App;





