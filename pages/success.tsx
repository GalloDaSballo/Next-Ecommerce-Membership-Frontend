import DownloadLink from "../components/DownloadLink";
import useOrder from "../hooks/useOrder";
import { fromImageToUrl } from "../utils/urls";

const SuccessPage: React.FC = () => {
    const { order, loading } = useOrder();

    return (
        <div>
            <h2>{loading ? "Loading" : "Success!"}</h2>
            {order?.product && (
                <div>
                    <img
                        src={fromImageToUrl(order?.product?.image)}
                        alt={`${order.product.name}`}
                    />
                    <DownloadLink downloadUrl={order?.product?.download} />
                </div>
            )}
        </div>
    );
};

export default SuccessPage;
