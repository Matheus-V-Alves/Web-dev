import React from "react";
import "../style/dashboard.css";
import DashboardCards from "../components/CardInfo";
import ProfileCard from "../components/ProfileCard";
import EnergyGenerationCard from "../components/GeracaoCard";
import BatteryChargeCard from "../components/BateriaCard";

const Dashboard = () => {
  return (
    <div>
      <div className="background"></div>
      <div className="dashboard-container">
        <div className="dashboard-content">
          <p className="breadcrumb">pages/dashboard</p>
          <h1 className="dashboard-title">Dashboard</h1>
        </div>
        {/*  cards aqui */}
        <DashboardCards />
        <div className="additional-cards">
          <ProfileCard />
          {/* <EnergyGenerationCard />  */}
          {/* <BatteryChargeCard />  */}
        </div>
      </div>
    </div> 
  );
};

export default Dashboard;
