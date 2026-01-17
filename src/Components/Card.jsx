import React, { useState } from "react";
import Sidebar from "./Sidebar";
import YourInfo from "../Pages/YourInfo";
import SelectPlan from "../Pages/SelectPlan";
import { Route, Routes } from "react-router-dom";
import AddOns from "../Pages/AddOns";
import YearAddOns from "../Pages/YearAddOns";
import Summary from "../Pages/Summary";
import ThankYou from "../Pages/ThankYou";

function Card() {
  const [page, setPage] = useState(0);
  const [plan, setPlan] = useState();
  const [addones, setAddones] = useState([]);
  const [price, setPrice] = useState([]);
  console.log(addones);
  console.log(price);

  return (
    <div className="bg-[#ffffff] relative h-[36rem] rounded-xl w-[60rem]">
      <Sidebar page={page} />
      <Routes>
        <Route path="/" element={<YourInfo setPage={setPage} />} />
        <Route
          path="/selectplan"
          element={<SelectPlan setPlan={setPlan} setPage={setPage} />}
        />
        <Route
          path="/addones/mo"
          element={
            <AddOns
              setAddones={setAddones}
              price={price}
              addones={addones}
              setPrice={setPrice}
              setPage={setPage}
            />
          }
        />
        <Route path="/addones/yr" element={<YearAddOns setPage={setPage} />} />
        <Route
          path="/summary"
          element={
            <Summary
              plan={plan}
              addones={addones}
              price={price}
              setPage={setPage}
            />
          }
        />
        <Route path="/thankyou" element={<ThankYou setPage={setPage} />} />
      </Routes>
    </div>
  );
}

export default Card;
