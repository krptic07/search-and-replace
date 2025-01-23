import React from "react";
import { Outlet } from "react-router-dom";

const MainLayout: React.ComponentType = () => {
  return (
    <div
      style={{
        backgroundColor: "#363333",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <Outlet />
    </div>
  );
};

export default MainLayout;
