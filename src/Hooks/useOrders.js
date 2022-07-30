import { useEffect, useState } from "react"

const useOreders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/getOrders')
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [])

    return orders;
}
export default useOreders;