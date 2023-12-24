import React from "react";
import styles from "../from-container/form-container.module.css";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { Inputs } from "../../utils/inputs/inputs";
import { Links } from "../../utils/inputs/inputs";

export function FormContainerLogin({ header }) {
  return (
    <section className={`${styles.formContainer}`}>
      <p className="text text_type_main-medium">{header}</p>
      <form>
        <>
          <div className={`${styles.formInputs}`}>
            {Inputs.email}
            {Inputs.password}
          </div>
          <Button
            htmlType="button"
            type="primary"
            size="medium"
            extraClass={styles.buttonExtra}
            children={"Войти"}
          />
        </>
      </form>
      <div className={`${styles.formLinks}`}>
        {Links.newUser}
        {Links.forgotPassword}
      </div>
    </section>
  );
}


export function FormContainerOther ({header, inputs, links, button, handleSubmit}) {

    return (
      <section className={`${styles.formContainer}`}>
        <p className="text text_type_main-medium">
          {header}
        </p>
        <form onSubmit={handleSubmit}>
          <fieldset className={styles.formFieldset}>
            <div className={`${styles.formInputs}`}>
              {[...inputs]}
            </div>
            <div className={`${styles.buttonExtra}`}>
              {button}
            </div>
          </fieldset>
        </form>
        <div className={`${styles.formLinks}`}>
          {[...links]}
        </div>
      </section>
    )
  }

  export function FormContainerUser({inputs, button, handleSubmit, handleReset, }) {

    return (
      <section className={`${styles.sectionUser}`}>
        <form onSubmit={handleSubmit} onReset={handleReset}>
          <fieldset className={styles.formFieldset}>
            <div className={`${styles.formInputs}`}>
              {[...inputs]}
            </div>
            <div className={`${styles.buttonExtra}`}>
              {button}
            </div>
          </fieldset>
        </form>
      </section>
    )
  }