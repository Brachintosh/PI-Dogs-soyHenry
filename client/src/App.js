import './App.css';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { obtainDogs } from './redux/actions';
import NavBar from './components/NavBar/NavBar';
import Homie from './components/Home/Home';
import Landing from './components/Landing/Landing';
import Create from './components/Create/Create';
import DogDetails from './components/Details/DogDetails';
import About from './components/About/About';

function App() {
  
  const dispatch = useDispatch();

  useEffect(() => {
  dispatch(obtainDogs()) // >>> crear la function para obtener los perros del estado del reducer.
  }, [dispatch]);
  
  
  return (
    <BrowserRouter>
      <div className='App'>
      <NavBar />
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route exact path='/home' component={Homie} />
          <Route path='/create_breed' component= {Create}/>
          <Route path='/home/:id' component= {DogDetails}/>
          <Route exact path='/about' component={About} />
        </Switch>  
      </div>  
    </BrowserRouter>
  );
}

export default App;
