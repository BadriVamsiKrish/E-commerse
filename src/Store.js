import React, { useContext } from 'react';
import { store } from './App';
import { Badge, Button } from 'react-bootstrap';
import ArrayItem from './items/ArrayItem';
import Cart from './Cart';
const Store = () => {
  const[cart,setCart,showcart,setShowcart]=useContext(store);
  return (
    <div>
      <h1 style={{backgroundColor:'green',color:'white',textAlign:'center'}}>E-commerce website   <Button variant='warning'onClick={()=>{console.log('clicked');setShowcart(!showcart);console.log(showcart)}}>cart<h2><Badge bg='dark'>{cart.length}</Badge></h2></Button></h1>
      {showcart && <Cart/>}
      <ArrayItem/>
    </div>
  )
}

export default Store;