import React from "react";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="min-h-screen flex justify-center items-center px-5">
      <Outlet />
    </div>
  );
};

export default AuthLayout;
