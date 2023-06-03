import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';
const Contact = () => {
  const[name,setName]=useState('');
  const[email,setEmail]=useState('');
  const[phone,setPhone]=useState('');
  const AddHandler = () => {
    //e.preventDefault();
    // const data={'Title':title,'OpeningText':openingText,'ReleseDate':releseDate}
    // console.log(title,openingText,releseDate);
    axios.post('https://react-http-f171e-default-rtdb.firebaseio.com/movies.json',{'Name':name,'Email':email,'PhoneNumber':phone}).then(()=>alert('data is submited')).catch((er)=>alert(er));
    
  }
  return (
    <div style={{padding:'1cm',backgroundColor:'lightgray'}}>
      <h2 style={{textAlign:'center'}}>contact us</h2>
      <input placeholder='Name' style={{border:'2px solid black',borderRadius:'30px',margin:'10px',backgroundColor:'aquamarine',fontSize:'20px'}} onChange={(e)=>{setName(e.target.value)}}/>
      <br/>
      <input placeholder='Email.id' type='email' style={{border:'2px solid black',borderRadius:'30px',margin:'10px',backgroundColor:'aquamarine',fontSize:'20px'}} onChange={(e)=>{setEmail(e.target.value)}}/>
      <br/>
      <input placeholder='PhoneNumber' type='number' style={{border:'2px solid black',borderRadius:'30px',margin:'10px',backgroundColor:'aquamarine',fontSize:'20px'}} onChange={(e)=>{setPhone(e.target.value)}}/>
      <br/>
      <Button variant='success' onClick={(event)=>{AddHandler()}}>Add</Button>
    </div>
  )
}

export default Contact;