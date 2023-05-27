import React, { useState } from 'react';
import { Badge, Button } from 'react-bootstrap';
import ArrayItem from './items/ArrayItem';
import Cart from './Cart';
//import Modal from './UI/Modal';
import Store from './Store';
import Navigation from './Navigation';
import { BrowserRouter ,Routes,Route} from 'react-router-dom';
import Home from './Home';
import About from './About';
export const store=React.createContext();


const App = () => {
  const[cart,setCart]=useState([]);
  const[showcart,setShowcart]=useState(false);
  return (
    <store.Provider value={[cart,setCart,showcart,setShowcart]}>
      <BrowserRouter>
      <Navigation/>
      <Routes> 
        <Route path='/' exact Component={Home}/>
        <Route path='/store' exact Component={Store}/>
        <Route path='/about' exact Component={About}/>
        </Routes>
      
      </BrowserRouter>
      {/* <Store/> */}

      {/* <h1 style={{backgroundColor:'green',color:'white',textAlign:'center'}}>E-commerce website   <Button variant='warning'onClick={()=>{console.log('clicked');setShowcart(!showcart);console.log(showcart)}}>cart<h2><Badge bg='dark'>{cart.length}</Badge></h2></Button></h1>
      {showcart && <Cart/>}
      <ArrayItem/> */}

    </store.Provider>
  )
}

export default App;
// import React,{ useState } from "react";
// import Modal from'./UI/Modal';
// import "./App.css";
// export const store=React.createContext();
// function App() {
//   const [show, setShow] = useState(false);
//   const[cart,setCart]=useState([]);
//   //const[showcart,setShowcart]=useState(false);
//   return (
//     <store.Provider value={[cart,setCart,show,setShow]}>
//     <div className="App" onClick={() => console.log("Clicked")}>
//       <h2>Click to open Modal</h2>
//       <button onClick={() => setShow(!show)}>Open Modal</button>
//       <Modal closeModal={() => setShow(false)} />
//     </div>
//     </store.Provider>
//   );
// }

// export default App;