import React from "react";
import thankYou from "../images/icon-thank-you.svg";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function ThankYou({ setPage }) {
  const navigate = useNavigate();

  const autoReload = () => {
    navigate("/");
    setPage(0);
    window.location.reload();
  };

  useEffect(() => {
    setTimeout(() => {
      autoReload();
    }, 25000);
  });
  return (
    <div className="absolute border-blue-300 border gap-[1rem] flex-col right-0 flex items-center justify-center top-0  h-[34.50rem] w-[42rem]">
      <img src={thankYou} alt="thankyou-icon" />
      <h2 className="text-4xl font-medium">Thank you!</h2>
      <p className="w-[32rem] opacity-[0.4] text-center">
        Thanks for confirming your subscription!We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com
      </p>
    </div>
  );
}

export default ThankYou;
