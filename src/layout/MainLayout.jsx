import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

function MainLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="layout">

      {/* SIDEBAR */}
      <Sidebar
        isOpen={sidebarOpen}
        toggleSidebar={toggleSidebar}
      />

      {/* OVERLAY (Mobile Only) */}
      {sidebarOpen && (
        <div
          className="overlay"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* MAIN CONTENT */}
      <div className="main-content">

        {/* HAMBURGER BUTTON */}
        <div className="mobile-header">
          <button
            className="hamburger"
            onClick={toggleSidebar}
          >
            ☰
          </button>
        </div>

        <Header />
        <Outlet />
      </div>
    </div>
  );
}

export default MainLayout;