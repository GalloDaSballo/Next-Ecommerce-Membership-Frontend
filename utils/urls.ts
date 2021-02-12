import { Image } from "../api/interfaces";

export const API_URL =
    process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337";

/**
 * Given a image object return the proper path to display it
 * Provides a default as well
 * @param {any} image
 */
export const fromImageToUrl = (image: Image) => {
    if (!image) {
        return "/vercel.svg"; // Or default image here
    }
    if (image.url.indexOf("/") === 0) {
        // It's a relative url, add API URL
        return `${API_URL}${image.url}`;
    }

    return image.url;
};

/**
 * Given a image object return the proper path to display it
 * Provides a default as well
 * @param {string} downloadUrl
 */
export const fromDownloadUrlToValidURl = (downloadUrl: string) => {
    if (downloadUrl.indexOf("/") === 0) {
        // It's a relative url, add API URL
        return `${API_URL}${downloadUrl}`;
    }

    return downloadUrl;
};
