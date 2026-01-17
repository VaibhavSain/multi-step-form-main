import React from "react";
import { useNavigate } from "react-router-dom";

function AddOns({ setPage, setPrice, price, addones, setAddones }) {
  const navigate = useNavigate();
  const headings = ["Online service", "Larger storage", "Customizable profile"];
  const para = [
    "Access to  multiplayer",
    "Extra 1TB of cloud save",
    "Custom theme on your profile",
  ];
  const prices = ["+$1/mo", "+$2/mo", "+$2/mo"];

  const addData = (key) => {
    setAddones([...addones, headings[key]]);
    setPrice([...price, prices[key]]);
  };
  return (
    <div className="absolute right-0 top-0  h-[34.50rem] w-[38rem]">
      <h1 className="text-3xl opacity-[0.9] mt-12 font-medium">Pick add-ons</h1>
      <p className="mt-2 opacity-[0.4]">
        Add-ons help enhance your gaming experience.
      </p>

      <div className="mt-5 flex flex-col gap-4">
        {headings.map((ind, key) => (
          <div
            key={key}
            className="border relative flex flex-col items-center justify-center rounded-lg border-blue-400 h-[4.50rem] w-[30rem]"
          >
            <input
              onClick={() => addData(key)}
              type="checkbox"
              className="h-[1.20rem] absolute left-[1.50rem] w-[1.20rem]"
            />

            <div className=" absolute left-[4rem]">
              <h2 className="font-medium">{ind}</h2>
              <p className="text-sm opacity-[0.4]">{para[key]}</p>
            </div>
            <p className="text-sm absolute right-[2rem] text-blue-500 font-medium">
              {prices[key]}
            </p>
          </div>
        ))}
      </div>

      <button
        onClick={() => {
          setPage(1);
          navigate("/selectplan");
        }}
        className="opacity-[0.4] absolute bottom-[2rem] text-lg left-0 font-medium"
      >
        Go Back
      </button>
      <button
        onClick={() => {
          navigate("/summary");
          setPage(3);
        }}
        className="bg-[#483EFF] absolute right-[9rem] bottom-[2rem] text-white  pl-4 pt-2 pb-2 pr-4 font-medium rounded-lg"
      >
        Next Step
      </button>
    </div>
  );
}

export default AddOns;
