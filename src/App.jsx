// App.js
import React from 'react';
import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom';
import Footer from './Component/Footer';
import Home from './Component/Home';
import About from './Component/About';
import Menu from './Component/Menu';
import OrderOnline from './Component/OrderOnline';
import Reservations from './Component/Reservations';
import Login from './Component/Login';
import MenuBar from './Component/MenuBar';

function App() {
  return (
    <BrowserRouter basename='/booking-system'>
        <Routes>
          <Route path="/login-page"element={<Login />}/>
          <Route
            path="/*"
            element={
              <div>
                <MenuBar />
                <Outlet />
                <Footer />
              </div>
            }
          >
            <Route path="" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="menu" element={<Menu />} />
            <Route path="reservations" element={<Reservations />} />
            <Route path="specials" element={<OrderOnline />} />
          </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;