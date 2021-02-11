import { Product } from "../../api/interfaces";
import useDownloadURL from "../../hooks/useDownloadURL";
import { fromDownloadUrlToValidURl } from "../../utils/urls";

// If user can download, tehy see download link
// If user cannot downlaod, they see Purchase button
const ProductButton: React.FC<{ product: Product }> = ({ product }) => {
    const { downloadUrl, loading } = useDownloadURL(product.slug);
    if (loading) {
        return null;
    }
    if (downloadUrl) {
        return (
            <a
                target="_blank"
                rel="noreferrer nofollower"
                download
                href={fromDownloadUrlToValidURl(downloadUrl)}
            >
                Download
            </a>
        );
    }
    return <button>Buy it</button>;
};

export default ProductButton;
