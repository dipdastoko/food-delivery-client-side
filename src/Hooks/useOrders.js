import { useState } from "react"

const useOreders = () => {
    const [orders, setOrders] = useState([]);

    fetch('http://localhost:5000/orders')
        .then(res => res.json())
        .then(data => setOrders(data));

    return orders;
}
export default useOreders;