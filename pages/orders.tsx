import DownloadLink from "../components/DownloadLink";
import useOrders from "../hooks/useOrders";
import styles from "../styles/OrdersPage.module.scss";
import { fromImageToUrl } from "../utils/urls";

const OrdersPage: React.FC = () => {
    const { orders, loading } = useOrders();

    if (loading) {
        return <p>Fetching your orders</p>;
    }

    return (
        <div className={styles.ordersGrid}>
            {orders?.map((order) => (
                <div className={styles.order} key={order.id}>
                    <img
                        alt={order?.product?.name}
                        src={fromImageToUrl(order?.product?.image)}
                    />
                    <h3>{order?.product?.name}</h3>
                    <DownloadLink downloadUrl={order?.product?.download} />
                </div>
            ))}
        </div>
    );
};

export default OrdersPage;
