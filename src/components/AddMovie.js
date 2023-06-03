import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import {Button } from 'react-bootstrap';
const AddMovie = () => {
  const[title,setTitle]=useState('');
  const[openingText,setOpeningText]=useState('');
  const[releseDate,setReleseDate]=useState('');
  
  const AddHandler = (e) => {
    e.preventDefault();
    const data={'Title':title,'OpeningText':openingText,'ReleseDate':releseDate}
    console.log(title,openingText,releseDate);
    axios.post('https://react-http-f171e-default-rtdb.firebaseio.com/movies.json',{'Title':title,'OpeningText':openingText,'ReleseDate':releseDate}).then(()=>alert('data is submited'));
    setTitle('');
    setOpeningText('');
    setReleseDate('');
  }
  return (
    <div style={{border:'5px inset blue',backgroundColor:'aqua',borderRadius:'20px'}}>
      Title:<input style={{margin:'10px 0cm'}} value={title} onChange={(e)=>{setTitle(e.target.value)}}/><br/>
      Opening Text:<input type='textarea' value={openingText} onChange={(e)=>{setOpeningText(e.target.value)}}/><br/>
      Relese Date :<input type='date' style={{margin:'10px 0cm'}} value={releseDate} onChange={(e)=>{setReleseDate(e.target.value)}}/><br/>
      <Button variant='success' onClick={AddHandler}>Add Movie</Button>
    </div>
  )
}

export default AddMovie;