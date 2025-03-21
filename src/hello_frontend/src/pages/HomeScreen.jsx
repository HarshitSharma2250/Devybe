import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import EventSection from "./EventSection";

const HomeScreen = () => {
  return (
    <div>
      <Header />
      <div className="hero-section">
        <h1>Book Your Tickets And Vybe The Moment</h1>
      </div>
      <div className="pt-5">
        <div className="heading container-lg">
          <h2>Featured Events</h2>
          <EventSection />
        </div>
      </div>
      <div className="pt-5">
        <div className="heading container-lg">
          <h2>Popular Events</h2>
          <EventSection />
        </div>
      </div>
      <div className="pt-5">
        <div className="heading container-lg">
          <h2>Trending Events</h2>
          <EventSection />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomeScreen;
