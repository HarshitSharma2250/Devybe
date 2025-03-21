import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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

const EventSection = () => {
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
        {mockEvents.map((event) => (
          <SwiperSlide key={event.id} className="news-slider__item">
            <div className="bg-card p-4 event-card">
              <h4>{event.title}</h4>
              <p className="mode">{event.Mode}</p>
              <img
                src={event.image}
                alt={event.title}
                className="w-100 my-3"
                style={{ height: "250px", objectFit: "cover", borderRadius:"15px"}}
              />
              <p className="sub-title">{event.subTitle}</p>
              {event.Mode === "offline" ? (
                <p className="location">Location: {event.Location.address}</p>
              ) : (
                <a
                  href={event.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="event-link"
                >
                  Join Online
                </a>
              )}
              <div className="d-flex flex-wrap justify-content-between mt-3">
                <p className="date">
                  Date: {new Date(event.eventDate).toLocaleDateString()}
                </p>
                <p className="type">{event.eventType}</p>
                <p className="time col-12">
                  Time: {event.eventStartTime} - {event.eventEndTime}
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

export default EventSection;
