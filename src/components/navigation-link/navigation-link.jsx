import React from "react";
import {Link} from "react-router-dom";
import styles from "./navigation-link.module.css"

export function NavigationLink({to, icon, label}) {

    const textType = {
      primary: "text text_type_main-default",
      secondary: "text text_type_main-default text_color_inactive",
    }

    return (
      <Link to={to} className={`${styles.linkNav}`}>
        {icon}
        <p className={`${textType[icon.props.type]} pl-2 ${styles.label}`}>
          {label}
        </p>
      </Link>
    );
  }
