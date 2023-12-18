import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../../services/actions/user-actions";
import { NavLink, Outlet, useMatch } from "react-router-dom";
import styles from "../profile-button/profile-button.module.css";

export function ProfileButton() {
  const dispatch = useDispatch();
  const isProfileActive = useMatch("/profile");
  const isProfileOrderActive = useMatch("/profile/orders");

  const handleClick = (evt) => {
    evt.preventDefault();
    console.log("click", "click");
    dispatch(logout());
  };


  return (
    <section className={`${styles.profileSection}`}>
      <div className={`${styles.profilePanel}`}>
        <ul className={`${styles.profileUl}`}>
          <li>
            <NavLink
              className={`text text_type_main-medium text_color_inactive ${
                styles.defaultNavLink
              } ${isProfileActive ? styles.active : ""}`}
              to={"/profile"}
            >
              Профиль
            </NavLink>
          </li>
          <li>
            <NavLink
              className={`text text_type_main-medium text_color_inactive ${
                styles.defaultNavLink
              } ${isProfileOrderActive ? styles.active : ""}`}
              to={"/profile/orders"}
            >
              История заказов
            </NavLink>
          </li>
          <li>
            <NavLink
              className={`text text_type_main-medium text_color_inactive ${styles.defaultNavLink}`}
              to={"/login"}
              onClick={handleClick}
            >
              Выход
            </NavLink>
          </li>
        </ul>
        <p className={`text text_type_main-small text_color_inactive pText`}>
          В этом разделе вы можете изменить свои персональные данные
        </p>
      </div>
      <Outlet />
    </section>
  );
}