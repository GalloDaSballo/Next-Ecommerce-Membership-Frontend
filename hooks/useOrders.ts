import { useState, useEffect } from "react";
import APIWebClient from "../api/APIWebClient";
import { useMagic } from "../context/UserContext";
import { Order } from "../api/interfaces";

const useOrders = (): { orders: Order[]; loading: boolean } => {
    const [orders, setOrders] = useState<Order[]>([]);
    const [loading, setLoading] = useState<boolean>(null);
    const magic = useMagic();

    useEffect(() => {
        const fetchOrder = async () => {
            setLoading(true);
            try {
                const authToken = await magic.user.generateIdToken();
                const res = await APIWebClient.fetchMyOrders(authToken);
                setOrders(res.data);
            } catch (err) {
                setOrders(null);
            }
            setLoading(false);
        };
        fetchOrder();
    }, [magic?.user]);

    return { orders, loading };
};

export default useOrders;
