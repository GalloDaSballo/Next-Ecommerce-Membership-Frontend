import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import APIWebClient from "../api/APIWebClient";
import { useMagic } from "../context/UserContext";
import { Order } from "../api/interfaces";

const useOrder = (): { order: Order | null; loading: boolean } => {
    const router = useRouter();
    const { token } = router.query;
    const [order, setOrder] = useState<Order | null>(null);
    const [loading, setLoading] = useState<boolean>(null);
    const magic = useMagic();

    useEffect(() => {
        const fetchOrder = async () => {
            setLoading(true);
            try {
                const authToken = await magic.user.generateIdToken();
                const res = await APIWebClient.unlockProduct(token, authToken);
                setOrder(res.data);
            } catch (err) {
                setOrder(null);
            }
            setLoading(false);
        };
        fetchOrder();
    }, [token, magic?.user]);

    return { order, loading };
};

export default useOrder;
