import React, { useCallback, useEffect } from "react";
import ReactDOM from "react-dom";
import styles from "./modal.module.css";
import CloseButton from "../close-button/close-button";
import ModalOverlay from "../modal-overlay/modal-overlay";
import { modalPropType } from "../../utils/prop-types";

const mRoot = document.getElementById("modal-root");

const Modal = ({ closeModal, children, header }) => {

    const handleCloseModal = useCallback(() => {
        closeModal();
    }, [closeModal]);

    useEffect(() => {
        const closeByUseEsc = (evt) => {
            evt.key === "Escape" && handleCloseModal();
        };

        document.addEventListener("keydown", closeByUseEsc);

        return () => {
            document.removeEventListener("keydown", closeByUseEsc);
        };
    }, [handleCloseModal]);

    return ReactDOM.createPortal(
        <>
            <div className={styles.modal}>
                <section className={`${styles.modalContainer}`}>
                    <h2 className={`${styles.modalTitle} pt-10 pr-10 pl-10`}>
                        <p className={`text text_type_main-large`}>{header}</p>
                        <CloseButton onClick={handleCloseModal} />
                    </h2>
                    {children}
                </section>
            </div>
            <ModalOverlay onClick={handleCloseModal} />
        </>,
        mRoot
    );
};

Modal.propTypes = modalPropType;

export default Modal;
