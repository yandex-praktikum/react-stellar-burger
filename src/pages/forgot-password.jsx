import React from "react";
import { navigateButton, Inputs, Links } from "../utils/inputs/inputs";
import { FormContainerOther } from "../components/from-container/from-container";
import { useLocation, useNavigate } from "react-router-dom";
import { postApiResetPassword } from "../utils/api";
import { useSelector } from "react-redux";
import { selectedEmail } from "../services/selectors/inputs-selectors";


export function ForgotPassword() {

    const navigate = useNavigate();
    const email = useSelector(selectedEmail);
    const location = useLocation();

    function onClick(evt) {
      evt.preventDefault();
      postApiResetPassword(email)
      let test = localStorage.getItem('resetPasswordFlag');
      console.log(test);
      if (localStorage.getItem('resetPasswordFlag')) {
        // Флаг существует в localStorage
        navigate('/reset-password', { replace: false, state: {isFromComponent: location.pathname} });
      } else {
        // Флаг отсутствует в localStorage
        navigate('/login', { replace: false });
      }
    }

    const forgotPasswordFormHeader = "Восстановление пароля"
    const forgotPasswordInputs = [Inputs.specifyEmail];
    const forgotPasswordButton = navigateButton({ label: "Восстановить"});
    const forgotPasswordLinks = [Links.rememberPassword];

    return (
      <FormContainerOther header={forgotPasswordFormHeader} inputs={forgotPasswordInputs} button={forgotPasswordButton}
                        links={forgotPasswordLinks} handleSubmit={onClick}/>
    )
  }
