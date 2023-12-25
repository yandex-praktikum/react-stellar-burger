import React from "react";
import { navigateButton, Inputs, Links } from "../utils/inputs/inputs";
import { FormContainerOther } from "../components/from-container/from-container";
import { useDispatch, useSelector } from "react-redux";
import { selectedEmail, selectedPassword, selectedUserName } from "../services/selectors/inputs-selectors";
import {login } from "../services/actions/user-actions";
import { register } from "../utils/api";

export function Reg() {
  const dispatch = useDispatch();
  const email = useSelector(selectedEmail);
  const name = useSelector(selectedUserName);
  const pass = useSelector(selectedPassword);

  function onClick(evt) {
    evt.preventDefault();
    register(name, pass, email);
    dispatch(login(email, pass));
  }

  const registerFormHeader = "Регистрация";
  const registerInputs = [Inputs.name, Inputs.email, Inputs.password];
  const registerButton = navigateButton({
    label: "Зарегистрироваться",
  });
  const registerFooterLinks = [Links.alreadyRegistered];

  return (
    <FormContainerOther
      header={registerFormHeader}
      inputs={registerInputs}
      button={registerButton}
      links={registerFooterLinks}
      handleSubmit={onClick}
      name="formRegister"
    />
  );
}