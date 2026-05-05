import React from 'react';
import Navbar from "../components/Navbar";
import Welcome from "../components/Welcome.jsx"
import UserInfo from '../components/UserInfo.jsx';

const Dashboard = () => {
  return (
    <>
    <Navbar />
    <Welcome name="Tomiwa" age={20} gender="female"/>
    <UserInfo department="Software Engineering" course="React" institution="SQI"/>
    </>
  )
}

export default Dashboard
