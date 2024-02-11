import React from "react";
import HeaderPrimary from "../components/header/HeaderPrimary";

function FullScreen({ children }) {
  return (
    <div className="container-fluid full-page">
      <HeaderPrimary />
      {children}
    </div>
  );
}

export default FullScreen;
