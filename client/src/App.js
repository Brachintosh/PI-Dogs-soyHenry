import './App.css';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route } from 'react-router-dom';
import { obtainDogs } from './redux/actions';
import Landing from './components/Landing/landing.jsx';
import AllCards from './components/Cards/allCards.jsx';


function App() {
  
  const dispatch = useDispatch();

  useEffect(() => {
  dispatch(obtainDogs()) // >>> crear la function para obtener los perros del estado del reducer.
  }, [dispatch]);
  
  
  return (
    <React.Fragment>

      <Route exact path='/' component={Landing} />
      <Route exact path='/home' component={AllCards} />

    </React.Fragment>
  );
}

export default App;
