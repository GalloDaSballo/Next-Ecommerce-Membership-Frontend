import { useState, useEffect } from "react";
import APIWebClient from "../api/APIWebClient";
import { useMagic } from "../context/UserContext";
import { NO_DOWLOAD } from "../utils/constants";

const useDownloadURL = (slug: string): string | null => {
    const magic = useMagic();
    const [loading, setLoading] = useState<boolean>(false);
    const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
    useEffect(() => {
        const fetchDownload = async () => {
            if (magic) {
                try {
                    setLoading(true);
                    const token = await magic.user.generateIdToken();
                    const res = await APIWebClient.fetchProductWithToken(
                        slug,
                        token,
                    );
                    setDownloadUrl(
                        res.data[0].download !== NO_DOWLOAD
                            ? res.data[0].download
                            : null,
                    );
                } catch (err) {
                    setDownloadUrl(null);
                }
                setLoading(false);
            }
        };
        fetchDownload();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [magic]); // Magic is the only thing we need to run this
    return { downloadUrl, loading };
};

export default useDownloadURL;
