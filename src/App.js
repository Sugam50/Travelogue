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
import { getAuth } from 'firebase/auth';

function App() {
  // eslint-disable-next-line
  useEffect(() => { window.scrollTo(0, 0); const auth = getAuth() }, [])
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path='/' render={(props) => <Home {...props} />} exact />
        <Route path='/places' render={(props) => <Places {...props} />} exact />
        <Route path='/About' render={(props) => <About {...props} />} exact />
        <Route path='/login' render={(props) => <Login {...props} />} exact />
        <Route path='/dash' render={(props) => <Dashboard {...props} />} exact />
        <Route path='/placeDetails' render={(props) => <PlaceDetails {...props} />} exact />
        <Route path='*'>
          <Redirect to="/"></Redirect>
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
