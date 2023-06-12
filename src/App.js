
import './App.css';
import React, { useState } from 'react';
import TopBar from './Components/TopBar';
import Base from './BasePage/Base';
import Dashboard from './Pages/Dashboard';
import Profile from './Pages/Profile';


function App() {


const studentData = [
  {
  name : "Sanjay",
  age : 25
  },
  {
    name : "Ajay",
    age : 23
    }
]
const [data, setData] = useState(studentData)
  return (
<div className="App">
  <Dashboard
   data ={data}
   setData ={setData}
  />
</div>
  ); 
}


export default App;



// useState() - day1
// useEffect() -

