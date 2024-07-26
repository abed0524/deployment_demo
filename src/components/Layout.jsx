// src/components/Layout.jsx
import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import TopBar from "./TopBar";
import BottomBar from "./BottomBar";
import SideBar from "./SideBar";
import "../styles/Layout.css";
import AccessibilityButton from "./AccessibilityButton";

const Layout = () => {
  const location = useLocation();

  // Check if the current path is not the home page
  const showSidebar = location.pathname !== "/";

  return (
    <>
      <TopBar />
      {showSidebar && <SideBar />} {/* Conditionally render SideBar */}
      <AccessibilityButton />
      <div className="content-area">
        <Outlet /> {/* Renders the child routes */}
      </div>
      <BottomBar />
      <a
        href="https://wa.me/0525399761"
        className="whatsapp-button"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-whatsapp"></i>
      </a>
    </>
  );
};

export default Layout;
