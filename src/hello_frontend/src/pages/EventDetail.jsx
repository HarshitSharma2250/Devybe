import React from "react";
// import thumbnail from "./assets/images/thumbnail-event.png";
import calender from "../assets/images/icons/calendar.png";
import location from "../assets/images/icons/location.png";
import app from "../assets/images/icons/apps.png";
// import eventImg from "../assets/images/event-img.png";
import { Link, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useDispatch } from "react-redux";
import { RegisterEventThunk } from "../features/thunks/SystemDashboardthunk";

const EventDetail = () => {
const dispatch=useDispatch()
const location = useLocation();
  const data = location.state;


function HandleEventRegister(){
dispatch(RegisterEventThunk(data))
}


const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", 
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const monthNumber = data.eventDate.split("-")[1]; // "05"
const monthName = months[parseInt(monthNumber, 10) - 1];


  return (
    <>
      <Header />
      <div className="custom-section pt-5">
        <div className="container-lg pt-5">
          <div className="row h-100">
            <div className="col-xl-4 col-lg-5 col-md-4">
              <img
              src={data.imageUrl}
              alt=""
              style={{ height: "100%", width: "100%", objectFit: "cover" }}
            />
            </div>
            <div className="col-xl-8 col-lg-7 col-md-8 mt-4 mt-md-0">
              <div className="event-detail d-flex flex-column justify-content-between h-100 bg-white">
                <h1>
                {data.subtitle}
                </h1>
                <div>
                  <div className="d-flex align-items-center gap-2 py-1 event-detail-content">
                    <img src={calender} alt="" />
                    <small>  {monthName} {data.startTime}-{monthName}{data.endTime}  Onwards</small>
                  </div>
                  <div className="d-flex align-items-center gap-2 py-1 event-detail-content">
                    <img src={location} alt="" />
                    <small>{ data.address || "Raddision Blu, Sohna Road Gurgaon"}</small>
                  </div>
                  <div className="d-flex align-items-center gap-2 py-1 event-detail-content">
                    <img src={data.imageUrl} alt="" />
                    <small>Invite-Only</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 my-md-5 my-4 py-md-5 bg-white d-flex flex-wrap" style={{borderRadius: "6px"}}>
              <div className="other-details d-flex flex-column col-md-7">
                <div className="d-flex align-items-center gap-2">
                  {/* <img src={data.imageUrl} alt="" style={{}} /> */}
                  <div className="">
                    <h6>Presented by</h6>
                    <h5>{data.title||"CryptoConnect"}</h5>
                  </div>
                </div>
                <div>
                  <h3 className="mb-2 mt-3">Socials</h3>
                  <div className="event-socials d-flex align-items-center gap-4">
                    <Link className="social-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        className="bi bi-twitter-x"
                        viewBox="0 0 16 16"
                      >
                        <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                      </svg>
                    </Link>
                    <Link className="social-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        className="bi bi-linkedin"
                        viewBox="0 0 16 16"
                      >
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                      </svg>
                    </Link>
                    <Link className="social-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        className="bi bi-telegram"
                        viewBox="0 0 16 16"
                      >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09" />
                      </svg>
                    </Link>
                    <Link className="social-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        className="bi bi-globe-americas"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M2.04 4.326c.325 1.329 2.532 2.54 3.717 3.19.48.263.793.434.743.484q-.121.12-.242.234c-.416.396-.787.749-.758 1.266.035.634.618.824 1.214 1.017.577.188 1.168.38 1.286.983.082.417-.075.988-.22 1.52-.215.782-.406 1.48.22 1.48 1.5-.5 3.798-3.186 4-5 .138-1.243-2-2-3.5-2.5-.478-.16-.755.081-.99.284-.172.15-.322.279-.51.216-.445-.148-2.5-2-1.5-2.5.78-.39.952-.171 1.227.182.078.099.163.208.273.318.609.304.662-.132.723-.633.039-.322.081-.671.277-.867.434-.434 1.265-.791 2.028-1.12.712-.306 1.365-.587 1.579-.88A7 7 0 1 1 2.04 4.327Z" />
                      </svg>
                    </Link>
                  </div>
                </div>
                <div>
                  <h3 className="mb-2 mt-3">About the host</h3>
                  <p>
                   {data.subtitle || "CryptoConnect, based in Dubai, a Web3 networking collective focused on DeFi and NFTs."}
                  </p>
                </div>
              </div>
              <div className="register-card col-md-3">
                <div className="top-head">
                  <h3>Registration</h3>
                </div>
                <p>Welcome! To join the event, please register below.</p>
                <button className="custom-btn" onClick={HandleEventRegister}>Register</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EventDetail;
