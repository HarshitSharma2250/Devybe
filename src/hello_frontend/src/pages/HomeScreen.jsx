import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import EventSection from "./EventSection";
import { useDispatch } from "react-redux";
import AllEvents from "./AllEvents";

const HomeScreen = () => {
const dispatch=useDispatch()







  return (
    <div>
      <Header />
      <div className="hero-section">
        <h1>Book Your Tickets And Vybe The Moment</h1>
      </div>
      <div className="pt-5">
        <div className="heading container-lg">
          <h2>All Events</h2>
          <AllEvents />
        </div>
      </div>
     
      <Footer />
    </div>
  );
};

export default HomeScreen;
