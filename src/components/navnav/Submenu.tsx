import React, { useState, useRef, useEffect } from "react";
import { useAppContext } from "../../context";
import "./index.css";

function Submenu() {
  const {
    isSubmenuOpen,
    page: { page, links },
    location,
  } = useAppContext();
  const container = useRef<HTMLDivElement>(null);
  const [columns, setColumns] = useState("col-2");
  useEffect(() => {
    setColumns("col-2");
    if (container.current !== null) {
      const submenu = container.current;
      const { center, bottom } = location;
      submenu.style.left = `${center}px`;
      submenu.style.top = `${bottom}px`;
    }

    console.log(links);
    if (links.length === 3) {
      setColumns("col-3");
    }
    if (links.length > 3) {
      setColumns("col-4");
    }
  }, [page, location, links]);
  return (
    <div
      className={`${isSubmenuOpen ? "submenu show" : "submenu"}`}
      ref={container}
    >
      <section>
        <h4>{page}</h4>
        <div className={`submenu-center ${columns}`}>
          {links.map((link: any) => {
            const { url, icon, label } = link;
            return (
              <a key={link.label} href={url}>
                {icon}
                {label}
              </a>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default Submenu;
