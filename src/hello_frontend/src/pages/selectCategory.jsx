import React, { useState, useCallback } from "react";
import arrLeft from "../assets/images/icons/arrow-left.png";
import tickfrom from "../assets/images/icons/tick.png";
import tickMark from "../assets/images/icons/tick-mark.png";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";

// const List = ({ items, closeCategoryModal}) => {
const SelectCategory = ({closeCategoryModal}) => {

  const [current, setCurrent] = useState([]);

  const updateCurrent = useCallback((name) => {
    setCurrent((c) =>
      c.includes(name) ? c.filter((i) => i !== name) : [...c, name]
    );
  }, []);


  function HandleAddCategory() {
 toast.success("category updated successfully")
 setTimeout(() => {
   closeCategoryModal(false)
 }, 500);

   }
      
   
   const allCategories = [
    { name: "Business" },
    { name: "Music & Entertainment" },
    { name: "Community" },
    { name: "Health" },
    { name: "Web3" },
    { name: "Blockchain" },
    { name: "Crypto" }
  ];
  



  return (
  <>
    <div style={{ cursor: "pointer" }} onClick={()=> closeCategoryModal(false)}  >
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
    {/* <List items={items} closeCategoryModal={closeCategoryModal} /> */}
    <div className="container p-4">
      <div className="py-3">
        <h2 className="fs-4 fw-bold text-dark text-center mb-0">Choose your favorite event</h2>
        <p className="text-muted mb-0">Get personalized event recommendations</p>
      </div>
      <ul className="d-flex flex-wrap gap-2 pt-3 list-unstyled">
        {allCategories.map((item, index) => {
          const isSelected = current.includes(item.name);
          return (
            <li
              key={index}
              className={`d-flex align-items-center cursor-pointer gap-2 px-3 py-2 rounded-pill ${isSelected ? "bg-custom text-white" : "bg-light"
                }`}
              style={{ cursor: "pointer" }}
              onClick={() => updateCurrent(item.name)}
            >
              <img src={isSelected ? tickMark : ""} />
              <span >{item.name}</span>
            </li>
          );
        })}
      </ul>
      <button onClick={HandleAddCategory}
        className="custom-btn w-100 mt-3"
      >
        Get Started
      </button>
    </div>
  </>
  )
};

export default SelectCategory;
