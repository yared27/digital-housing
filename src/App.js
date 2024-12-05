// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import Welcome from './pages/Welcome.js'
import Navbar from './Component/Navbar/Navbar.jsx';
import SignupForm from './pages/signup.js';
import LoginForm from './pages/login.js';
import Identifier from './pages/owner_renter.js';
import {BrowserRouter as Router,Routes,Route, BrowserRouter} from 'react-router-dom';

function App() {
  return (
      <div>
          {/* <div className='App'>
        </div> */}
        <BrowserRouter>
            <Navbar/>
            <Routes>
              <Route path='/' element={<Welcome/>}/>
              <Route path='/signupForm' element={<SignupForm/>}/>
              <Route path='/LoginForm' element={<LoginForm/>}/>
              <Route path='/Identifier' element={<Identifier/>}/>
            </Routes>
        </BrowserRouter>
      </div>
      );
    }
export default App;
