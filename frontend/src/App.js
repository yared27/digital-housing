// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import Welcome from './pages/Welcome.js'
import Navbar_page from './Component/Navbar/Navbar.jsx';
import SignupForm from './pages/signup.js';
import LoginForm from './pages/login.js';
import Payemt from './pages/payement_gate_way.js';
import Identifier from './pages/owner_renter.js';
import {BrowserRouter as Router,Routes,Route, BrowserRouter} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import HomesList from './pages/owner_page.js';
import DropdownMenu from './Component/dropdown.js';
function App() {
  return (
      <div>
          {/* <div className='App'>
        </div> */}
        <ToastContainer/>
        <BrowserRouter>
            <Navbar_page/>
            <Routes>
              <Route path='/' element={<Welcome/>}/>
              <Route path='/signupForm' element={<SignupForm/>}/>
              <Route path='/LoginForm' element={<LoginForm/>}/>
              <Route path='/Identifier' element={<Identifier/>}/>
              <Route path="/HomesList" element={<HomesList/>}/>
              <Route path="/payement_gate_way" element={<Payemt/>}/>
            </Routes>
        </BrowserRouter>
      </div>
      );
    }
export default App;
