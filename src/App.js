import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import { useEffect } from 'react';
import NavBar from './components/NavBar';
import React from 'react';
import Footer from './components/Footer';
import PlaceDetails from './pages/PlaceDetails';
import Places from './pages/Places';
import About from './pages/About';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

function App() {
  useEffect(() => { window.scrollTo(0, 0) }, [])
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/places' exact>
          <Places />
        </Route>
        <Route path='/About' exact>
          <About />
        </Route>
        <Route path='/login' exact>
          <Login />
        </Route>
        <Route path='/dash' exact>
          <Dashboard />
        </Route>
        <Route path='/placeDetails' exact>
          <PlaceDetails/>
        </Route>
        <Route path='*'>
          <Redirect to="/"></Redirect>
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
