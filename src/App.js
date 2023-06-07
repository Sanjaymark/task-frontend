
import './App.css';
import React, { useState } from 'react';
function App() {
const [addCount, setAddCount] = useState(0)
  const productsData = [
    {
      name : "Fancy Product",
      price : "$40.00 - $80.00",
    },
    {
      name : "Special Item",
      price : "$20.00 $18.00",
    },
    {
      name : "Sale Item",
      price : "$50.00 $25.00",
    },
    {
      name : "Popular Item",
      price : "$40.00",
    },
    {
      name : "Sale Item",
      price : "$50.00 $25.00",
    },
    {
      name : "Fancy Product",
      price : "$120.00 - $280.00",
    },
    {
      name : "Special Item",
      price : "$20.00 $18.00",
    },
    {
      name : "Popular Item",
      price : "$40.00",
    },
  ]
  return (
<div className="App">
  
  <div className='cart'>
      <div className='Cart'> 
          Cart : {addCount}
      </div>
  </div>
  <div className='Shop'>
     <p>
       <span className='SS'>Shop In Style</span><br></br>
       <span className='ss'>With this shop hompeage template</span>
     </p> 
  </div>
  <div className='card-block'>
    {productsData.map((prod,idx)=>(
      <ProductCard
       key={idx}
       name={prod.name}
       price={prod.price}
       addCount={addCount}
       setAddCount={setAddCount}
      />
     ))
    }
  </div>
  <div className='copy'>
         <h3> Copyright © Your Website 2023 </h3>
  </div>
</div>
  );
}


export default App;

function ProductCard({name, price, addCount, setAddCount}){
  const [show, setShow] = useState(true)

  function handleAdd(){
    setShow(!show)
    setAddCount(addCount+1)
  }

  function handleRemove(){
    setShow(!show)
    setAddCount(addCount-1)
    
  }
  return (
   
    <div className='student-card'>
      <img id='image' src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="name"/>
      <h3>{name}</h3>
      <p>{price}</p>

    {
    show ?   <button 
      className='add-btn btn'
      onClick={handleAdd}
      >Add to cart</button> 
      :    
      <button 
      className='remove-btn btn'
      onClick={handleRemove}
      >Remove from Cart</button>
    }
    
    

    </div>
  )
}




// function Welcome(){
//   const welcomename = "guvi"
//   return(
//     React.createElement("div", {id:"welcome"}, 
//     React.createElement("h1", {}, `Hi how are you ${welcomename}`))
//   )
// }
//jsx -> javascript xml = (html with js)

// functional component
// function Greeting(){
//   //normal js
//   //function
//   //varible
//   const name = "sanjay"

//   return (
//     <div id="greeting" className='greeting-class'>
//       <h1>Hi how are you {name}</h1>
//     </div>
//   )
// }