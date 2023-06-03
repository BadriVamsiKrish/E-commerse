import React from 'react';
import { Button } from 'react-bootstrap';
import classes from './Movie.module.css';
import axios from 'axios';
const Movie = (props) => {
  const uid=props.id;
  function deleteResource(key){
    axios.delete(`https://react-http-f171e-default-rtdb.firebaseio.com/movies/${key}.json`)
      .then(response => {
        // Handle successful deletion
        alert('Resource deleted successfully');
        //console.log(props.key);
      })
      .catch(error => {
        // Handle error
        console.error('Error deleting resource');
        console.error(error);
      });
    //console.log(key);
  };
  
  // // Usage example
  // const resourceUrl = `https://react-http-f171e-default-rtdb.firebaseio.com/movies.json`;
  // //deleteResource(resourceUrl);
  console.log(props.id,props.title);

  return (
    
    <li className={classes.movie}>
      <h2>{props.title}</h2>
      <h3>{props.releaseDate}</h3>
      <p>{props.openingText}</p>
      <Button variant='danger' onClick={(event)=>deleteResource(uid)}>del</Button>
    </li>
  );
};

export default Movie;
