import React, { FC, useState, useEffect } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Gamburger } from '../../Ui-Kit/components/GamburgerMenu';
import styles from "./Header.module.scss";

export const Header: React.FC = () => {

  const [toggle, setToggle] = useState<boolean>(true);

  React.useEffect(() => {
    console.log(toggle)
  }, [toggle])

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <div className={styles.nav__row}>
          <a href="/" className={styles.logo}>
            <strong>Freelancer</strong>
            {" "}portfolio
          </a>
          <ul className={styles.nav__list}>
            <NavLink to="/">Main</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/about">About</NavLink>
          </ul>
          <div className={styles.menu__toggle}>
            <div className={styles.nav__gamburger} onClick={() => setToggle(!toggle)}>
              <Gamburger />
            </div>
            <nav className={styles.underMenu}>
              { !toggle ?

                <ul className={styles.nav__list__adaptive}>
                  <NavLink to="/">Main</NavLink>
                  <NavLink to="/projects">Projects</NavLink>
                  <NavLink to="/about">About</NavLink>
              </ul> : null}
            </nav>
          </div>
        </div>
      </div>
    <Outlet />
    </nav>
  )
}