import React from "react";
import { navigateButton, Inputs, Links } from "../utils/inputs/inputs";
import { FormContainerOther } from "../components/from-container/from-container";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { postApiReset } from "../utils/api";


export function ResetPassword(props) {

    const navigate = useNavigate()
    const password = useSelector((store) => store.inputs.password)
    const token = useSelector((store) => store.inputs.token)
    const location = useLocation();
    let From = location?.state;

    if (!From) return (
        <h1>
            404
        </h1>
    )


    function onClick(evt) {
        evt.preventDefault();
        postApiReset(password, token)
        navigate('/login', { replace: false })
    }

    const resetPasswordFormHeadder = "Восстановление пароля";
    const resetPasswordInputs = [Inputs.newPassword, Inputs.token];
    const resetPasswordButton = navigateButton({ onClick: onClick, label: "Сохранить" });
    const resetPasswordLinks = [Links.rememberPassword];

    return (
        <FormContainerOther header={resetPasswordFormHeadder} inputs={resetPasswordInputs} button={resetPasswordButton}
            links={resetPasswordLinks} />
    )
}