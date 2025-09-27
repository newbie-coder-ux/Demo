import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate for programmatic navigation
import Header from '../components/Header/Header';

function Dashboard() {
  const navigate = useNavigate();

  // useEffect(() => {
  //   const isLoggedIn = sessionStorage.getItem('isLoggedIn');
    
  //   if (!isLoggedIn) {
     
  //     navigate('/login');
  //   }
  // }, [navigate]);

  return (
    <div>
      <Header />
      <div className="container mt-5 pt-5">
        <h2>Welcome to your Dashboard!</h2>
        <p>You are successfully logged in.</p>
      </div>
    </div>
  );
}

export default Dashboard;
