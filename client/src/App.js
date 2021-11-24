import './App.css';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { obtainDogs } from './redux/actions';
import Landing from './components/Landing/landing.jsx';
import Home from './components/Home/home.jsx';
import Details from './components/Details/details.jsx';
import Create from './components/Create/create.jsx';

function App() {
  
  const dispatch = useDispatch();

  useEffect(() => {
  dispatch(obtainDogs()) // >>> crear la function para obtener los perros del estado del reducer.
  }, [dispatch]);
  
  
  return (
    <BrowserRouter>
      <div className='App'>
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route exact path='/home' component={Home} />
          <Route path='/create' component= {Create}/>
          <Route path='/:id' component= {Details}/>
        </Switch>  
      </div>  
    </BrowserRouter>
  );
}

export default App;
