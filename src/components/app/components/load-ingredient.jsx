import React, {useState, useEffect} from "react";
import { getIngredients } from "../../../utils/Api";

function LoadIngredient({onDataLoaded, onError}) {
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getIngredients();
                onDataLoaded(data);
                setIsLoading(false);
            } catch (err) {
                onError(err.message);
                setIsLoading(false);
            }
        };

        fetchData();
    }, [onDataLoaded, onError]);

    return isLoading ? <p>Загрузка...</p> : null;
}

export default LoadIngredient