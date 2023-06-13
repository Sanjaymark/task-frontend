
import './App.css';
import React, { useState } from 'react';
import TopBar from './Components/TopBar';
import Base from './BasePage/Base';
import Dashboard from './Pages/Dashboard';
import Profile from './Pages/Profile';
import StudentList from './Components/StudentList';
import { Routes, Route } from 'react-router-dom';


function App() {


const studentData = [
     {
      id: 1,
      name : "Kishore",
      batch: "b47WD",
      email: "abc@gmail.com",
      phone: 782465244,
      qualification: "B.E"
     },
     {
      id: 2,
      name : "Aditiya",
      batch: "b47WD",
      email: "adc@gmail.com",
      phone: 652664624,
      qualification: "B.Tech"
     },
]

const [data,setData] = useState(studentData)
  return(
    <div className='App'>
        <Routes>
            <Route exact path='/' element={<Dashboard/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/student/all' 
              element={<StudentList
              studentData={data}
              setData={setData}/>
            }/>
        </Routes>
    </div>
  ); 
}


export default App;

