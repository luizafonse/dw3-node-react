import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import styles from "@/components/Menu/Menu.module.css";
import Link from "next/link";
import { logout } from "@/services/auth";
import { useRouter } from "next/router";

const Menu = () => {
  const [menuIcon, setMenuIcon] = useState(<FaBars />);
  const [isActive, setIsActive] = useState(false);
  const router = useRouter();

  const activeMenu = () => {
    setIsActive(!isActive);
    if (!isActive) {
      setMenuIcon(<IoClose />);
    } else {
      setMenuIcon(<FaBars />);
    }
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/home">
          <img src="/images/thegames_symbol.png" alt="The Games" />
        </Link>
      </div>
      <div className={styles.menu}>
        {/* isActive && styles.active */}
        <ul
          className={`${styles.menuItems} ${isActive ? styles.active : ""}`}
          id={styles.menuItems}
        >
          <li>
            <Link href="/home">Home</Link>
          </li>
          <li>
            <Link href="/create">Cadastrar jogos</Link>
          </li>
          <li>
            <a onClick={() => logout(router)} href="#">
              Logout
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.menuBtn} id="menuBtn">
        {/* Ícone do React Icons */}
        <i id={styles.menuIcon} onClick={activeMenu}>
          {menuIcon}
        </i>
      </div>
    </nav>
  );
};

export default Menu;
