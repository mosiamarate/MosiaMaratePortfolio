import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import { useLocation, useNavigate } from "react-router-dom";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "game", label: "Game" },
  { id: "contact", label: "Contact" },
];

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [active, setActive] = useState("home");

  // === ScrollSpy only works on homepage ===
  useEffect(() => {
    if (location.pathname !== "/") return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.4 }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [location.pathname]);

  // === Navigation handler (Smart) ===
  const handleNavigation = (id) => {
    if (location.pathname !== "/") {
      // navigate home first THEN scroll
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <aside className="sidebar">
      <ul>
        {sections.map((s) => (
          <li
            key={s.id}
            className={active === s.id ? "active" : ""}
            onClick={() => handleNavigation(s.id)}
          >
            {s.label}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
