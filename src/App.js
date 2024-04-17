import React, { useState } from 'react';
import './App.css';
import About from './Components/About';
import { BrowserRouter as Routes , Route  } from 'react-router-dom';
import Services from './Components/Services';
import Home from './Components/Home';
import Login from './Components/Login';
import Logout from './Components/Logout';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.setItem('isLoggedIn', 'false');
  };
  return (
      <Routes>
        
        <Route exact path="/">
          {isLoggedIn ? <Redirect to="/home" /> : <Login onLogin={handleLogin} />}
        </Route>
        <Route path="/home">
          {isLoggedIn ? <Home onLogout={handleLogout} /> : <Redirect to="/" />}
        </Route>
        <Route path="/logout">
          <Logout onLogout={handleLogout} />
        </Route>
      <Route path='/about' element={<About/>}/>
      <Route path='/services' element={<Services/>}/>
      </Routes>
      
  );
}

export default App;
