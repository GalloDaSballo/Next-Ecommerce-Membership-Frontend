import DownloadLink from "../components/DownloadLink";
import useOrders from "../hooks/useOrders";

const OrdersPage: React.FC = () => {
    const { orders, loading } = useOrders();

    if (loading) {
        return <p>Fetching your orders</p>;
    }

    return (
        <div>
            {orders?.map((order) => (
                <div>
                    <h3>{order.product.name}</h3>
                    <DownloadLink downloadUrl={order.product.download} />
                </div>
            ))}
        </div>
    );
};

export default OrdersPage;
