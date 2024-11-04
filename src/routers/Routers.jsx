import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Login from "../pages/login/Login";
import Home from "../pages/home/Home";
import CashDetail from "../pages/cashdetail/CashDetail";
import Staff from "../pages/staff/Staff";

function Routers() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/login");
  }, []);
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />} />
      <Route path="/detail" element={<CashDetail />} />
      <Route path="/staff" element={<Staff/>} />
    </Routes>
  );
}

export default Routers;
