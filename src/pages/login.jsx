import React from "react";
import { navigateButton, Inputs, Links } from "../utils/inputs/inputs";
import { FormContainerOther } from "../components/from-container/from-container";
import { selectedEmail, selectedPassword } from "../services/selectors/inputs-selectors";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../services/actions/user-actions";


export function Log() {
    const dispatch = useDispatch()
    const email = useSelector(selectedEmail);
    const pass = useSelector(selectedPassword);


    function onClick(evt) {
      evt.preventDefault()
      dispatch(login(email, pass))
    }

    const loginFormHeader = "Вход"
    const loginInputs = [Inputs.email, Inputs.password];
    const loginButton = navigateButton({label: "Войти"});
    const loginFooterLinks = [Links.newUser, Links.forgotPassword];


    return (
      <FormContainerOther header={loginFormHeader} inputs={loginInputs} button={loginButton} 
      links={loginFooterLinks} handleSubmit={onClick}/>
    )
  }