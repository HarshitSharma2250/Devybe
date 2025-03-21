import React, { useState, useCallback } from "react";
import arrLeft from "../assets/images/icons/arrow-left.png";
import tickfrom from "../assets/images/icons/tick.png";
import tickMark from "../assets/images/icons/tick-mark.png";
import { useDispatch } from "react-redux";

const List = ({ items, images }) => {
  const [current, setCurrent] = useState([]);
  const[addEvent,setaddEvent]=useState([])
const dispatch=useDispatch()

  const updateCurrent = useCallback((name) => {
    setCurrent((c) =>
      c.includes(name) ? c.filter((i) => i !== name) : [...c, name]
    );
  }, []);

function HandleAddCategory(){
dispatch()
}


  return (
    <div className="container p-4">
      <div className="py-3">
        <h2 className="fs-4 fw-bold text-dark text-center mb-0">Choose your favorite event</h2>
        <p className="text-muted mb-0">Get personalized event recommendations</p>
      </div>
      <ul className="d-flex flex-wrap gap-2 pt-3 list-unstyled">
        {items.map((item, index) => {
          const isSelected = current.includes(item.name);
          return (
            <li
              key={item.name}
              className={`d-flex align-items-center cursor-pointer gap-2 px-3 py-2 rounded-pill ${
                isSelected ? "bg-custom text-white" : "bg-light"
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
  );
};

const SelectCategory = () => {
  const categories = [
    "Web3",
    "Community",
    "Blockchain",
    "Startup",
    "Crypto",
    "Education",
    "Sport",
  ];

  const items = categories.map((category) => ({ name: category }));

  return <List items={items} />;
};

export default SelectCategory;
