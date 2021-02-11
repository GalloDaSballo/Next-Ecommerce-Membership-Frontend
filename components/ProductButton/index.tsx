import { Product } from "../../api/interfaces";
import useDownloadURL from "../../hooks/useDownloadURL";

// If user can download, tehy see download link
// If user cannot downlaod, they see Purchase button
const ProductButton: React.FC<{ product: Product }> = ({ product }) => {
    const { downloadUrl, loading } = useDownloadURL(product.slug);
    if (loading) {
        return null;
    }
    if (downloadUrl) {
        return (
            <a download href={downloadUrl}>
                Download
            </a>
        );
    }
    return <button>Buy it</button>;
};

export default ProductButton;
