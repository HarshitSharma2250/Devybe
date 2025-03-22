import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { GetAllEventThunk, RegisterEventThunk } from "../features/thunks/SystemDashboardthunk";
import { useNavigate } from "react-router-dom";
import EventDetail from "./EventDetail";

const mockEvents = [
  {
    id: 1,
    title: "Blockchain Expo 2025",
    subTitle: "Biggest blockchain event!",
    Mode: "offline",
    Location: { address: "San Francisco, CA" },
    eventDate: "2025-06-15T00:00:00Z",
    eventStartTime: "10:00",
    eventEndTime: "18:00",
    eventType: "paid",
    image:
      "https://cdn.pixabay.com/photo/2016/11/23/15/48/audience-1853662_640.jpg",
  },
  {
    id: 2,
    title: "NFT Summit",
    subTitle: "Future of digital art",
    Mode: "online",
    link: "https://nftsummit.com",
    eventDate: "2025-07-10T00:00:00Z",
    eventStartTime: "12:00",
    eventEndTime: "16:00",
    eventType: "free",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrMf_ZvhkL3ZB0DuNs9OkbfU7ueXgHxtNoFQ&s",
  },
  {
    id: 3,
    title: "Web3 Hackathon",
    subTitle: "Compete in Web3",
    Mode: "offline",
    Location: { address: "New York, NY" },
    eventDate: "2025-08-20T00:00:00Z",
    eventStartTime: "09:00",
    eventEndTime: "21:00",
    eventType: "paid",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3DNasCvfOLMIxJyQtbNq7EfLkWnMazHE9xw&s",
  },
  {
    id: 4,
    title: "Blockchain Expo 2025",
    subTitle: "Biggest blockchain event!",
    Mode: "offline",
    Location: { address: "San Francisco, CA" },
    eventDate: "2025-06-15T00:00:00Z",
    eventStartTime: "10:00",
    eventEndTime: "18:00",
    eventType: "paid",
    image:
      "https://cdn.pixabay.com/photo/2016/11/23/15/48/audience-1853662_640.jpg",
  },
  {
    id: 5,
    title: "NFT Summit",
    subTitle: "Future of digital art",
    Mode: "online",
    link: "https://nftsummit.com",
    eventDate: "2025-07-10T00:00:00Z",
    eventStartTime: "12:00",
    eventEndTime: "16:00",
    eventType: "free",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrMf_ZvhkL3ZB0DuNs9OkbfU7ueXgHxtNoFQ&s",
  },
  {
    id: 6,
    title: "Web3 Hackathon",
    subTitle: "Compete in Web3",
    Mode: "offline",
    Location: { address: "New York, NY" },
    eventDate: "2025-08-20T00:00:00Z",
    eventStartTime: "09:00",
    eventEndTime: "21:00",
    eventType: "paid",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3DNasCvfOLMIxJyQtbNq7EfLkWnMazHE9xw&s",
  },
];

const AllEvents = () => {
const dispatch=useDispatch()
const {Events}=useSelector(state=>state.dashboardData)
 const navigate=useNavigate()

useEffect(()=>{
dispatch(GetAllEventThunk())
},[dispatch])

console.log('Events hjeree',Events)



const HandleClickSingleEvent = (data) => {
  navigate('/event-details', { state: data });
};




  return (
    <div className="mt-5 container-lg position-relative">
      {/* Slider */}
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1.2}
        spaceBetween={15}
        navigation={{
          prevEl: ".swiper-prev",
          nextEl: ".swiper-next",
        }}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1.5 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
        className="news-slider"
      >
        {Events.map((event,index) => (
          <SwiperSlide key={index} className="news-slider__item" >
            <div className="bg-card p-4 event-card" onClick={()=>HandleClickSingleEvent(event)}>
              <h4>{event?.title}</h4>
              <p className="mode">{event.mode}</p>
              <img
                src={event?.imageUrl}
                alt={event.title}
                className="w-100 my-3"
                style={{ height: "250px", objectFit: "cover", borderRadius:"15px"}}
              />
              <p className="sub-title">{event.subTitle}</p>
              {event.mode === "offline" ||event.mode === "online" ? (
                <p className="location">Location: {event.address}</p>
              ) : (
                <a
                  href={"#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="event-link"
                >
                  Join Now
                </a>
              )}
              <div className="d-flex flex-wrap justify-content-between mt-3">
                <p className="date">
                  Date: {(event.eventDate)}
                </p>
                <p className="type">{event.eventType}</p>
                <p className="time col-12">
                  Time: {event.startTime} - {event.endTime}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom navigation buttons */}
      <div className="swiper-prev text-white">&lt;</div>
      <div className="swiper-next text-white">&gt;</div>
    </div>
 
  );
};

export default AllEvents;
