import { useEffect, useState } from "react"

const useOreders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('https://polar-hamlet-57469.herokuapp.com/getOrders')
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [orders])

    return orders;
}
export default useOreders;