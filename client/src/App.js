import './App.css';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { obtainDogs } from './redux/actions';
import Landing from './components/Landing/Landing.jsx';
import Home from './components/Home/Home.jsx';
import Details from './components/Details/Details.jsx';
import Create from './components/Create/Create.jsx';

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
          <Route path='/create_breed' component= {Create}/>
          <Route path='/:id' component= {Details}/>
        </Switch>  
      </div>  
    </BrowserRouter>
  );
}

export default App;
