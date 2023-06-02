// import React, { useState } from 'react';
// import { Badge, Button } from 'react-bootstrap';
// import ArrayItem from './items/ArrayItem';
// import Cart from './Cart';
// //import Modal from './UI/Modal';
// import Store from './Store';
// import Navigation from './Navigation';
// import { BrowserRouter ,Routes,Route} from 'react-router-dom';
// import Home from './Home';
// import About from './About';
// export const store=React.createContext();


// const App = () => {
//   const[cart,setCart]=useState([]);
//   const[showcart,setShowcart]=useState(false);
//   return (
//     <store.Provider value={[cart,setCart,showcart,setShowcart]}>
//       <BrowserRouter>
//       <Navigation/>
//       <Routes> 
//         <Route path='/' exact Component={Home}/>
//         <Route path='/store' exact Component={Store}/>
//         <Route path='/about' exact Component={About}/>
//         </Routes>
      
//       </BrowserRouter>
//       </store.Provider>
//   )
// }


// export default App;
import React, { useState,useEffect } from 'react';

import MoviesList from './components/MoviesList';
import AddMovie from './components/AddMovie';
import './App.css';
import axios from 'axios';

function App() {
  const[movies,setMovies]=useState([]);
  const[loading,setLoading]=useState(false);
  useEffect(()=>{
    // async function fetchmovieshandler(){
    //   setLoading(true);
    //   const responce=await fetch('https://swapi.dev/api/films/');
    //   const data=await responce.json();
  
    //   const transformedmovies=data.results.map((movieData)=>{
    //     return {id:movieData.episode_id,
    //       title:movieData.title,
    //       openingText:movieData.opening_crawl,
    //       releseDate:movieData.relese_date,
  
    //   };})
    //   setMovies(transformedmovies);
    //   setLoading(false);
    //   console.log(transformedmovies);
      
    // }

    fetchmovieshandler();
  },[]);
  async function fetchmovieshandler(){
    setLoading(true);
    const responce=await axios.get('https://react-http-f171e-default-rtdb.firebaseio.com/movies.json');
    const data= new Array(responce.data);
    //const data=await responce;

    console.log((data));
    
    const transformedMovies = Object.keys(data[0]).map((movieId) => {
      const movie = data[0][movieId];
    
      return {
        id: movieId,
        title: movie.Title,
        openingText: movie.OpeningText,
        releaseDate: movie.ReleseDate
      };
    });
    
    //console.log(transformedMovies);
    setMovies(transformedMovies);
    setLoading(false);
    console.log(transformedMovies);

  }
  //fetchmovieshandler();
  // const dummyMovies = [
  //   {
  //     id: 1,
  //     title: 'Some Dummy Movie',
  //     openingText: 'This is the opening text of the movie',
  //     releaseDate: '2021-05-18',
  //   },
  //   {
  //     id: 2,
  //     title: 'Some Dummy Movie 2',
  //     openingText: 'This is the second opening text of the movie',
  //     releaseDate: '2021-05-19',
  //   },
  // ];

  return (
    <React.Fragment>
      <section>
        <div>
        <AddMovie/>
        </div>
        <button onClick={fetchmovieshandler}>Fetch Movies</button>
      </section>
      <section>
        {!loading && movies.length>0 && <MoviesList movies={movies} />}
        {!loading && movies.length==0 && <img src='http://www.fam-kurtze.de/nodata.png' alt='loading...' style={{height:'3cm',width:'3cm'}}></img> }
        {loading && <img src='https://i.pinimg.com/originals/8d/70/dd/8d70dd7f87522e8ee1dcf9d55a51ce99.gif' alt='loading...' style={{height:'5cm',width:'5cm'}}></img>}
      </section>
    </React.Fragment>
  );
}

export default App;
