import { Product } from "../../api/interfaces";
import { useMagic } from "../../context/UserContext";
import useDownloadURL from "../../hooks/useDownloadURL";
import { handleStripePurchase } from "../../utils/stripe";
import { fromDownloadUrlToValidURl } from "../../utils/urls";
import DownloadLink from "../DownloadLink";

// If user can download, tehy see download link
// If user cannot downlaod, they see Purchase button
const ProductButton: React.FC<{ product: Product }> = ({ product }) => {
    const { downloadUrl, loading } = useDownloadURL(product.slug);
    const magic = useMagic();
    const handleClick = async () => {
        try {
            const authToken = await magic.user.generateIdToken();
            handleStripePurchase(product, authToken);
        } catch (err) {
            alert(`Something went wrong ${err}`);
        }
    };

    if (loading) {
        return null;
    }
    if (downloadUrl) {
        return <DownloadLink downloadUrl={downloadUrl} />;
    }
    return <button onClick={handleClick}>Buy it</button>;
};

export default ProductButton;
