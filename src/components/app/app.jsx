import styles from "./app.module.css";
import AppHeader from '../app-header/app-header';
import React from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { Reg } from "../../pages/registration";
import { Log } from "../../pages/login.jsx";
import { Home } from "../../pages/home";
import { ForgotPassword } from "../../pages/forgot-password";
import { ResetPassword } from "../../pages/reset-password";
import { useDispatch, useSelector } from "react-redux";
import { ProfileButton } from "../../components/profile/profile-button/profile-button"
import { OnlyAuth, OnlyUnAuth } from "../protected-route/protected-route";
import { ProfileInputFields } from "../../pages/profile-input-fields";
import Modal from "../modal/modal";
import IngredientDetail from "../ingredient-details/ingredient-detail"
import { Orders } from "../../pages/orders/orders";
import { getBurgerIngredients } from "../../services/actions/ingredient-actions";
import { checkUserAuth } from "../../services/actions/user-actions";

function App() {

    const navigate = useNavigate()
    const location = useLocation();
    const background = location.state && location.state.background;

    const handleModalClose = () => {
        navigate(-1);
    }

    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(getBurgerIngredients());
        dispatch(checkUserAuth())
      }, [dispatch]);

    return (
        <div className={styles.app}>
            <Routes location={background || location}>
                <Route path="/" element={<AppHeader />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<OnlyUnAuth component={<Log />} />} />
                    <Route path="/register" element={<OnlyUnAuth component={<Reg />} />} />
                    <Route path="/forgot-password" element={<OnlyUnAuth component={<ForgotPassword />} />} />
                    <Route path="/reset-password" element={<OnlyUnAuth component={<ResetPassword />} />} />
                    <Route path="/profile" element={<OnlyAuth component={<ProfileButton />} />} >
                        <Route index element={<ProfileInputFields />} />
                        <Route path="orders" element={<OnlyAuth component={<Orders />} />} />
                    </Route>
                    <Route path="/ingredients/:ingredientId" element={<IngredientDetail />} />
                </Route>
            </Routes>

            {background && <Routes>
                <Route path="/ingredients/:ingredientId" element={<Modal closeModal={handleModalClose} header={"Детали ингредиента"}>
                    <IngredientDetail />
                </Modal>} />
            </Routes>}
        </div>
    );
}

export default App;