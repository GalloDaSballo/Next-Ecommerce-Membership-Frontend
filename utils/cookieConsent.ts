import cookies from "cookie-cutter";

export const COOKIE_CONSENT =
    process.env.NEXT_PUBLIC_COOKIE_CONSENT || "entreprenerd_store_consent";

export const getConsent = (): boolean => cookies.get(COOKIE_CONSENT);

export const setConsent = (approved: boolean): void =>
    approved ? cookies.set(COOKIE_CONSENT, JSON.stringify(new Date())) : null;
