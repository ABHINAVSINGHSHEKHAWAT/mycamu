import { NavLink } from "react-router-dom";

function Sidebar({ isOpen, toggleSidebar }) {
  const menuItems = [
    "My institution",
    "Messages",
    "Attendance",
    "Reports",
    "Progress report",
    "Holidays",
    "Cafeteria",
    "Timetable",
    "Leave and gate pass",
    "Services",
    "Enrollment",
    "Activity",
    "Clearance",
    "Announcement",
    "Feedback",
    "Project",
    "E-Portfolio"
  ];

  const routeMap = {
    "My institution": "/my-institution",
    "Cafeteria": "/cafeteria",
  };

  return (
   <div className={`sidebar ${isOpen ? "open" : ""}`}>

      <div className="sidebar-logo">
        <img src="/bennett-logo.png" alt="logo" />
      </div>

      <input className="sidebar-search" placeholder="Search" />

      <div className="sidebar-menu">
        {menuItems.map((item, index) => {

          const path = routeMap[item];

          // If route exists → use NavLink
          if (path) {
            return (
              <NavLink
                key={index}
                to={path}
                className={({ isActive }) =>
                  isActive ? "menu-item active-menu" : "menu-item"
                }
              >
                {item}
              </NavLink>
            );
          }

          // If no route → normal div (no green)
          return (
            <div key={index} className="menu-item">
              {item}
            </div>
          );
        })}
      </div>

    </div>
  );
}

export default Sidebar;
