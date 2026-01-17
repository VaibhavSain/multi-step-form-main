import React from "react";
import { useNavigate } from "react-router-dom";

function Summary({ setPage, addones, price, plan }) {
  const navigate = useNavigate();

  return (
    <div className="absolute right-0 top-0  h-[34.50rem] w-[38rem]">
      <h1 className="text-3xl opacity-[0.9] mt-12 font-medium">Finishing up</h1>
      <p className="mt-2 opacity-[0.4]">
        Double-check everything looks OK before confirming.
      </p>
      <div className="max-h-max min-h-[7rem] relative rounded-lg mt-8 border border-blue-400 bg-[#F8F9FE] w-[28.50rem]">
        <h2 className="font-medium ml-6 mt-4">Arcade (Monthly)</h2>
        <p className="text-sm ml-6 opacity-[0.4] underline">Change</p>
        <p className="font-medium absolute right-[1.50rem] top-[1.70rem]">
          {plan}
        </p>
        <hr className="mt-4" />
        <div>
          {addones.map((item, key) => (
            <div key={key} className="flex flex-row gap-2 mt-2  ml-6">
              <p className="text-sm opacity-[0.4]">{item}</p>
              <p className={"text-sm absolute right-6"}>{price[key]}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex mt-6 -ml-[11rem] items-center justify-center flex-row">
        <p className="text-sm opacity-[0.4]">Total (per year)</p>
        <p className="text-lg font-medium ml-[16.50rem] text-[#5E56E7]">
          $120/yr
        </p>
      </div>
      <button
        onClick={() => {
          navigate("/addones/mo");
          setPage(2);
        }}
        className="opacity-[0.4] absolute bottom-[2rem] text-lg left-0 font-medium"
      >
        Go Back
      </button>
      <button
        onClick={() => navigate("/thankyou")}
        className="bg-[#483EFF] absolute right-[9.50rem] bottom-[2rem] text-white  pl-4 pt-2 pb-2 pr-4 font-medium rounded-lg"
      >
        Confirm
      </button>
    </div>
  );
}

export default Summary;
