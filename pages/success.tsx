import Image from "next/image";
import DownloadLink from "../components/DownloadLink";
import useOrder from "../hooks/useOrder";
import { fromImageToUrl } from "../utils/urls";
import styles from "../styles/SuccessPage.module.scss";

const SuccessPage: React.FC = () => {
    const { order, loading } = useOrder();

    return (
        <div className={styles.container}>
            <Image src="/success.svg" width={109} height={94} />
            <h2>{loading ? "Loading" : "Thank You For Your Purchase!"}</h2>
            {order?.product && (
                <div>
                    <img
                        src={fromImageToUrl(order?.product?.image)}
                        alt={`${order?.product?.name}`}
                    />
                    <DownloadLink downloadUrl={order?.product?.download} />
                </div>
            )}
        </div>
    );
};

export default SuccessPage;
