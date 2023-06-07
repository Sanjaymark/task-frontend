import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {

  return (
    <Membership/>
  );
}

export default App;

function FreeMembership()
{
  return(
    <div className="Card">
      <div className='ihead'>
            <h1 className='member'>FREE</h1>
            <h1>$0<sub id='sub'>/month</sub></h1>
      </div>
            <hr></hr>
      <div className='ibody'>
            <h3> &#x2714; Single User</h3>
            <h3> &#x2714; 5GB Storage</h3>
            <h3> &#x2714; Unlimited Public Projects</h3>
            <h3> &#x2714; Community Access</h3>
            <h3 className='e'> &#x2718; Unlimited Private Projects</h3>
            <h3 className='e'> &#x2718; Dedicated Phone Support</h3>
            <h3 className='e'> &#x2718; Free Subdomain</h3>
            <h3 className='e'> &#x2718; Monthly Status Reports</h3>
      </div>
      <br></br>
      <div>
            <button className='button'>BUTTON</button>
      </div>
    </div>
  )
}

function PlusMembership()
{
  return(
    <div className="Card">
      <div className='ihead'>
            <h1 className='member'>PLUS</h1>
            <h1>$9<sub id='sub'>/month</sub></h1>
      </div>
            <hr></hr>
      <div className='ibody'>
            <h3> &#x2714; Single User</h3>
            <h3> &#x2714; 5GB Storage</h3>
            <h3> &#x2714; Unlimited Public Projects</h3>
            <h3> &#x2714; Community Access</h3>
            <h3> &#x2714; Unlimited Private Projects</h3>
            <h3> &#x2714; Dedicated Phone Support</h3>
            <h3> &#x2714; Free Subdomain</h3>
            <h3 className='e'> &#x2718; Monthly Status Reports</h3>
      </div>
      <br></br>
      <div>
            <button className='button'>BUTTON</button>
      </div>
    </div>
  )
}

function ProMembership()
{
  return(
    <div className="Card">
      <div className='ihead'>
            <h1 className='member'>PRO</h1>
            <h1>$49<sub id='sub'>/month</sub></h1>
      </div>
            <hr></hr>
      <div className='ibody'>
            <h3> &#x2714; Single User</h3>
            <h3> &#x2714; 5GB Storage</h3>
            <h3> &#x2714; Unlimited Public Projects</h3>
            <h3> &#x2714; Community Access</h3>
            <h3> &#x2714; Unlimited Private Projects</h3>
            <h3> &#x2714; Dedicated Phone Support</h3>
            <h3> &#x2714; Free Subdomain</h3>
            <h3> &#x2714; Monthly Status Reports</h3>
      </div>
      <br></br>
      <div>
            <button className='button'>BUTTON</button>
      </div>
    </div>
  )
}

function Membership()
{
  const free = FreeMembership();
  const plus = PlusMembership();
  const pro = ProMembership();
  return(
    <div className='result'>
      {free}
      {plus}
      {pro}
    </div>
  )
  
}

