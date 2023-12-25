import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectedEmail } from "../../../services/selectors/inputs-selectors";
import { Input } from "@ya.praktikum/react-developer-burger-ui-components";
import { addEmail } from "../../../services/actions/inputs-actions";
import PropTypes from "prop-types";

export function FormInputEmail({placeholder = "E-mail"}) {

    const dispatch = useDispatch();
    const inputRef = React.useRef(null)
    const emailValue = useSelector(selectedEmail) ?? '';

    return (
      <Input
        type={'email'}
        placeholder={placeholder}
        onChange={e => dispatch(addEmail(e.target.value))}
        value={emailValue}
        name={'email'}
        error={false}
        ref={inputRef}
        errorText={'Ошибка'}
        size={'default'}
      />
    )
  }

  FormInputEmail.propTypes = {
    placeholder: PropTypes.string.isRequired,
  };