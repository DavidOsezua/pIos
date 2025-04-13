import { sideBarLinks } from "@/data/data";
import styles from "./AdminSidebar.module.css";

import { NavLink } from "react-router-dom";

const AdminSidebar = () => {
  return (
    <aside className={`${styles.sideBar}`}>
      <nav className={styles.sidebarNav}>
        <NavLink to="/">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="Logo" />
          </div>
        </NavLink>

        <ul className={`${styles.navMenu}`}>
          {sideBarLinks.map((sidebarLink) => (
            <li key={sidebarLink.link} className={styles.navItems}>
              <NavLink
                to={sidebarLink.path}
                className={styles.link}
                // onClick={toggleHandler}
              >
                {sidebarLink.link}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default AdminSidebar;
