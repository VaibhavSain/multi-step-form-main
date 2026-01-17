import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function YourInfo({ setPage }) {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const checkInputs = (e) => {
    e.preventDefault();

    if (name.length > 8 && email.length > 8 && phone.length > 10) {
      navigate("/selectplan");
      setPage(1);
    } else {
      alert("Fill the input fields!");
    }
  };
  return (
    <div className="absolute right-0 top-0  h-[34.50rem] w-[38rem]">
      <h1 className="text-3xl opacity-[0.9] mt-12 font-medium">
        Personal Info
      </h1>
      <p className="mt-2 opacity-[0.4]">
        Please provide your name, email address, and phone number.
      </p>
      <form onSubmit={checkInputs}>
        <div className="h-[4rem] mt-8 w-[28rem]">
          <p>Name</p>
          <input
            required
            name="name"
            value={name}
            type="text"
            onChange={(e) => setName(e.target.value)}
            className="border mt-2 h-[2.50rem] rounded-lg pl-4 w-full"
            placeholder="e.g. Stephen King"
          />
        </div>

        <div className="h-[4rem] mt-8 w-[28rem]">
          <p>Email Address</p>
          <input
            required
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="border mt-2 h-[2.50rem] rounded-lg pl-4 w-full"
            placeholder="e.g. stephenking@lorem.com"
          />
        </div>
        <div className="h-[4rem] mt-8 w-[28rem]">
          <p>Phone</p>
          <input
            required
            name="phone"
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="border mt-2 h-[2.50rem] rounded-lg pl-4 w-full"
            placeholder="e.g. +1 234 567 890"
          />
        </div>
        <button
          type="submit"
          className="bg-[#483EFF] absolute right-[9.50rem] bottom-[2rem] text-white  pl-4 pt-2 pb-2 pr-4 font-medium rounded-lg"
        >
          Next Step
        </button>
      </form>
    </div>
  );
}

export default YourInfo;
