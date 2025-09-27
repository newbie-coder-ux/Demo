import React from 'react';
import { useState } from 'react'
import './App.css'
import Pages from '../src/Pages/Pages';
import {store} from './store'; 
import {Provider} from 'react-redux' 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './Pages/Login';
import Dashboard from './Pages/DashBoard';
import PrivateRoute from './Pages/PrivateRoute';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Provider store={store}>
      <Pages/>
       <Router> 
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/dashboard"
          element={
            //  <PrivateRoute>
              <Dashboard />
            //  </PrivateRoute>
          }
        />
      </Routes>
    </Router>
    </Provider>
      
    </>
  )
}
   
 

export default App;
