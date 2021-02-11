import { fromDownloadUrlToValidURl } from "../../utils/urls";

const DownloadLink: React.FC<{ downloadUrl: string }> = ({ downloadUrl }) => (
    <a
        target="_blank"
        rel="noreferrer nofollower"
        download
        href={fromDownloadUrlToValidURl(downloadUrl)}
    >
        Download
    </a>
);

export default DownloadLink;
