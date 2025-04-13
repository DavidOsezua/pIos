import styles from "./AdminNavbar.module.css";
import Notification from "./svgComponent/Notification";
import Profile from "./svgComponent/Profile";

const AdminNavbar = () => {
  return (
    <header className={`${styles.dashboardHeader}`}>
      <nav className={styles.dashboardNav}>
        <button onClick={() => {}}></button>

        <div className="flex items-center gap-2">
          <button>
            <Notification />
          </button>

          <button>
            <Profile />
          </button>

          <p>Admin</p>
        </div>
      </nav>
    </header>
  );
};

export default AdminNavbar;
