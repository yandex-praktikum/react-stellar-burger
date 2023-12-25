import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../../services/actions/inputs-actions";
import { Input } from "@ya.praktikum/react-developer-burger-ui-components";
import { selectedUserName } from "../../../services/selectors/inputs-selectors";
import PropTypes from "prop-types";

export function FormInputName({placeholder = 'Имя'}) {

    const dispatch = useDispatch();
    const inputRef = React.useRef(null)
    const nameValue = useSelector(selectedUserName) ?? '';

    return (
      <Input
        type={'text'}
        placeholder={placeholder}
        onChange={e => dispatch(addUser(e.target.value))}
        value={nameValue}
        name={'name'}
        error={false}
        ref={inputRef}
        errorText={'Ошибка'}
        size={'default'}
      />
    )
  }

  FormInputName.propTypes = {
    placeholder: PropTypes.string.isRequired,
  };