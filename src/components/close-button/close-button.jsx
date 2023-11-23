import React from "react";
import styles from "./close-button.module.css";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";


function CloseButton({onClick}) {
    return (
        <button className={`${styles.closeButton}`} onClick={onClick}>
            <CloseIcon type='primary' />
        </button>
    )
}

CloseButton.propTypes = {
    onClick: PropTypes.func.isRequired,
};

export default CloseButton