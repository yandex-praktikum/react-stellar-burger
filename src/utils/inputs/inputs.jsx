import React from "react";
import { FormInputEmail } from "../../components/from-container/inputs/email";
import { FormInputName } from "../../components/from-container/inputs/name";
import { FormInputPassword } from "../../components/from-container/inputs/password";
import { Link } from "react-router-dom";
import { FormFooterLinks } from "../../components/from-container/links/links";
import styles from "../../components/from-container/form-container.module.css";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { FormInputToken } from "../../components/from-container/inputs/token";

export const Inputs = {
    email: <FormInputEmail placeholder="E-mail" key="email" name="email" />,
    password: <FormInputPassword placeholder="Пароль" key="password" name="password" />,
    newPassword: <FormInputPassword placeholder="Введите новый пароль" key="newPassword" name="newPassword" />,
    token: <FormInputToken placeholder="Введите проверочный код из письма" key="token" name="token" />,
    name: <FormInputName placeholder="Имя" key="name" name="name" />,
    specifyEmail: <FormInputEmail placeholder="Введите E-mail" key="specifyEmail" name="specifyEmail" />,
    profileName: <FormInputName placeholder="Имя" key='name' name='name' disabled={true} />,
    profileEmail: <FormInputEmail placeholder="E-mail" key='email' name='email' />,
    profilePassword: <FormInputPassword placeholder="Пароль" key='password' name='password' />
}

export const Links = {
    alreadyRegistered: <FormFooterLinks key="alreadyRegistered" infoText="Уже зарегистрированы?"><Link to="/login" className={`${styles.link}`}>Войти</Link></FormFooterLinks>,
    rememberPassword: <FormFooterLinks key="rememberPassword" infoText="Вспомнили пароль?"><Link to="/login" className={`${styles.link}`}>Войти</Link></FormFooterLinks>,
    forgotPassword: <FormFooterLinks key="forgotPassword" infoText="Забыли пароль?"><Link to="/forgot-password" className={`${styles.link}`}>Восстановить пароль</Link></FormFooterLinks>,
    newUser: <FormFooterLinks key="newUser" infoText="Вы - новый пользователь?"><Link to="/register" className={`${styles.link}`}>Зарегистрироваться</Link></FormFooterLinks>
}

export const navigateButton = ({ onClick, label }) => {
    return <Button htmlType="submit" type="primary" size="medium" children={label} onClick={onClick} />
}

export const Buttons = {
    save: <Button htmlType="submit" type="primary" size="medium" children="Сохранить" key='save' />,
    cancel: <Button htmlType="reset" type="secondary" size="medium" children="Отмена" key='cancel' />
}