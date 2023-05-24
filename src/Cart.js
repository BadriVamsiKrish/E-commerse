import React,{useContext, useState} from 'react';
import { store } from './App';
import { Button, Table } from 'react-bootstrap';
//import Modal from './UI/Modal';
import ReactDOM from 'react-dom';
//import './Cart.css';
const Cart = () => {
  const[cart,setCart,showcart,setShowcart]=useContext(store);
  const totalPrice = cart.reduce((sum, item) => sum + (item.price)*(item.quantity), 0);

  const removeHandler = (ite) => {
    const res=cart.filter((item)=>item !== ite);
    console.log(res);
     setCart([...res]);


  }
  // const overlay= {
  //   width: 100%,
  //   width: 100%
  //   background-color: rgba(0, 0, 0, 0.5),
  //   position: absolute;
  //   top: 0;
  //   bottom: 0;
  //   left: 0;
  //   right: 0;
  //   z-index: 1;
  //   backdrop-filter: blur(2px);
  // };
  
  // return(
  //   <div>
  //   <h2 style={{textAlign:'center'}}>cart</h2>
  //       <Table striped bordered hover>
  //       <thead>
  //         <tr>
  //           <th>item</th>
  //           <th>Price</th>
  //           <th>quantity</th>
  //           <th>action</th>
  //         </tr>
  //       </thead>
  //       <tbody>{console.log(cart)}
  //       {cart.map((item,index)=>{return(<tr>
  //           <td><img src={item.imageUrl} alt='img' style={{height:'2cm',width:'2cm'}}/>{item.title}</td>
  //           <td>{item.price}</td>
  //           <td>{parseInt(item.quantity)}</td>
  //           <td><Button variant='danger'onClick={(event)=>removeHandler(item)}>Remove</Button></td>
  //         </tr>)})}
          
  //       </tbody>
  //     </Table>
  //     <div>
  //       <h2>Total:Rs.{totalPrice}</h2>
  //     </div>
  //   </div>
  //const[cart,setCart,showcart,setShowcart]=useContext(store);
  
  //const totalPrice = cart.reduce((sum, item) => sum + (item.price)*(item.quantity), 0);

  // const removeHandler = (ite) => {
  //   const res=cart.filter((item)=>item !== ite);
  //   console.log(res);
  //    setCart([...res]);
  // };

  return ReactDOM.createPortal(
    <div style={{border:'5px solid black',padding:'40px',background:'yellow'}}>
      <div style={{backgroundColor:'aquamarine'}}>
        <h2 style={{textAlign:'center'}}>cart<Button variant='danger' onClick={(event)=>setShowcart(!showcart)}style={{textAlign:'end'}}>Close</Button></h2>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>item</th>
          <th>Price</th>
          <th>quantity</th>
          <th>action</th>
        </tr>
      </thead>
      <tbody>{console.log(cart)}
      {cart.map((item,index)=>{return(<tr>
          <td><img src={item.imageUrl} alt='img' style={{height:'2cm',width:'2cm'}}/>{item.title}</td>
          <td>{item.price}</td>
          <td><Button onClick={(event)=>{item.quantity++;console.log(item);setCart([...cart])}}>+</Button>{parseInt(item.quantity)}<Button onClick={(event)=>{if(item.quantity--==0){removeHandler(item)}else{setCart([...cart])};}}>-</Button></td>
          <td><Button variant='danger'onClick={(event)=>removeHandler(item)}>Remove</Button></td>
        </tr>)})}
        
      </tbody>
    </Table>
    <div>
      <h2>Total:Rs.{totalPrice}</h2>
    </div>
    </div></div>,document.getElementById('portal')
  )
  }

export default Cart;