const APIUrl = "https://norma.nomoreparties.space/api/ingredients";

export const getIngredients = async () => {
    try {
        const response = await fetch(APIUrl);

        if (!response.ok) {
            throw new Error('Ошибка при запросе к API');
        }

        const result = await response.json();

        if (result && result.success && Array.isArray(result.data)) {
            return result.data;
        } else {
            throw new Error('Неверный формат данных');
        }
    } catch (err) {
        throw err;
    }
};