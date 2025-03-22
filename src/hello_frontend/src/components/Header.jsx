import React, { useEffect, useState } from "react";
import logo from "../../src/assets/images/logo.png";
import SelectCategory from "../pages/selectCategory";
import { useDispatch, useSelector } from "react-redux";
import { AuthLoginThunk } from "../features/thunks/UserThunk";


const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const [showCategoryModal, setShowCategoryModal] = useState(false);
const dispatch=useDispatch()
const {tokens}=useSelector((state)=>state.userTokens)
const [forstData, setForstData] = useState({
  password: '',
  name: ''
});




const closeCategoryModal = () =>{
  setShowCategoryModal(false)
}

function HandleSubmit(e){
  e.preventDefault()
  dispatch(AuthLoginThunk(forstData)).unwrap()
  .then((response)=>{
    if(response.message){
      setShowModal(false)
    }
  })
}

const HandleLoginChange = (e) => {
  const { name, value } = e.target;
  setForstData((prevData) => ({
    ...prevData,
    [name]: value
  }));
};


  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg">
          <div className="container-lg">
            <a className="navbar-brand" href="#">
              <img src={logo} alt="Logo" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav justify-content-center flex-grow-1 mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Events
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    style={{cursor:"pointer"}}
                    onClick={() => setShowCategoryModal(true)}
                  >
                    Select Category
                  </a>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <button
                  className="signup-btn"
                  type="button"
                  onClick={() => setShowModal(true)}
                >
                 {tokens && tokens.message ||"Sign up"} 
                </button>
              </form>
              
            </div>
          </div>
        </nav>
      </header>

      {/* Modal  for login*/}
      {showModal && (
        <div className="modal-overlay col-md-6">
          <div className="col-xl-4 col-lg-6 col-md-8 col-11">
            <div className="modal-content">
              <div
                onClick={() => setShowModal(false)}
                style={{ cursor: "pointer" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-x float-end"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                </svg>
              </div>
              <form  onSubmit={HandleSubmit}>
                <legend>Sign in to your account</legend>
                <div className="form-group">
                  <label className="form-label">User Name</label>
                  <input
                  value={forstData.name}
                  name="name"
                  onChange={HandleLoginChange}
                    type="text"
                    className="form-control"
                    placeholder="Enter Name"
                  />
                </div>
                <div className="form-group mt-3">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    value={forstData.password}
                    name="password"
                    onChange={HandleLoginChange}
                    className="form-control"
                    placeholder="Enter Password"
                  />
                </div>
                <button type="submit" className="custom-btn mt-3">Submit</button>
              </form>
              {/* <p>Or continue with</p>
              <button className="mt-3 wallet-btn">Connect Wallet</button> */}
            </div>
          </div>
        </div>
      )}

      {/* Category modal  */}
      {showCategoryModal && (
        <div className="modal-overlay col-md-6">
          <div className="col-xl-4 col-lg-6 col-md-8 col-11">
            <div className="modal-content">              
              <SelectCategory closeCategoryModal={closeCategoryModal} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
