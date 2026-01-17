import React, { useState } from "react";
import arcade from "../images/icon-arcade.svg";
import controller from "../images/icon-advanced.svg";
import gamepad from "../images/icon-pro.svg";
import { useNavigate } from "react-router-dom";

function SelectPlan({ setPage, setPlan }) {
  const logos = [arcade, controller, gamepad];
  const monPrice = ["$9/mo", "$12/mo", "$15/mo"];
  const yearPrice = ["$90/yr", "$120/yr", "$150/yr"];
  const [price, setPrice] = useState(monPrice);
  const [yes, setYes] = useState(false);
  const [select, setSelect] = useState(0);
  const navigate = useNavigate();

  const navigateToNext = () => {
    if (yes === true) {
      navigate("/addones/yr");
      setPage(2);
    } else {
      navigate("/addones/mo");
      setPage(2);
    }
  };

  return (
    <div className="absolute right-0 top-0  h-[34.50rem] w-[38rem]">
      <h1 className="text-3xl opacity-[0.9] mt-12 font-medium">
        Select your plan
      </h1>
      <p className="mt-2 opacity-[0.4]">
        You have the option of monthly or yearly billing.
      </p>
      <div className="flex gap-4 mt-9">
        {logos.map((ind, key) => (
          <div
            onClick={() => {
              setSelect(key);
              setPlan(price[key]);
            }}
            key={key}
            className={
              select === key
                ? `border-2 cursor-pointer  border-blue-400 h-[9rem] rounded-xl w-[9rem]`
                : `border-2 cursor-pointer  border-gray-400 h-[9rem] rounded-xl w-[9rem]`
            }
          >
            <img src={ind} className="ml-3 mt-4" alt="arcade" />
            <h2 className="font-medium ml-3 mt-8">Arcade</h2>
            <p className="text-sm ml-3  opacity-[0.4]">{price[key]}</p>
          </div>
        ))}
      </div>
      <div className="absolute cursor-pointer select-none  font-medium mt-8  gap-4 rounded-lg flex items-center justify-center  h-[3rem] bg-[#EBF1FD] w-[29rem]">
        <p
          className={yes ? `opacity-[0.4]` : ``}
          onClick={() => {
            setYes(false);
            setPrice(monPrice);
          }}
        >
          Monthly
        </p>
        <div className="border transition duration-400 rounded-full bg-blue-600 pt-[3px] pl-[0.10rem] h-[1.25rem] w-[3rem]">
          <div
            className={
              yes
                ? `h-[.80rem] w-[.80rem] ml-[1.80rem] bg-white rounded-full`
                : `h-[.80rem] w-[.80rem] ml-[0.10rem] bg-white rounded-full`
            }
          ></div>
        </div>
        <p
          onClick={() => {
            setYes(true);
            setPrice(yearPrice);
          }}
          className={yes ? `` : `opacity-[0.4]`}
        >
          Yearly
        </p>
      </div>
      <button
        onClick={() => {
          navigate("/");
          setPage(0);
        }}
        className="opacity-[0.4] absolute bottom-[2rem] text-lg left-0 font-medium"
      >
        Go Back
      </button>
      <button
        onClick={navigateToNext}
        className="bg-[#483EFF] absolute right-[9rem] bottom-[2rem] text-white  pl-4 pt-2 pb-2 pr-4 font-medium rounded-lg"
      >
        Next Step
      </button>
    </div>
  );
}

export default SelectPlan;
