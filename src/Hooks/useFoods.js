import { useEffect, useState } from "react";

const useFoods = () => {
    const [foods, setFoods] = useState([]);
    useEffect(() => {
        fetch('https://polar-hamlet-57469.herokuapp.com/foods')
            .then(res => res.json())
            .then(data => setFoods(data));
    }, [foods]);
    return {
        foods
    }
}
export default useFoods;