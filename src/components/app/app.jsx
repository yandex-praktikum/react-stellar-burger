import styles from "./app.module.css";
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const baseURL = 'https://norma.nomoreparties.space/api/ingredients';

  useEffect(() => {
    fetch(baseURL)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .then((data) => {
        setData(data.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className={styles.app}>
      <AppHeader />
      <main className={styles['app-body']}>
        <BurgerIngredients ingredients={data} />
        <BurgerConstructor burgerArr={data} />
      </main>
    </div>
  );
}

export default App;
