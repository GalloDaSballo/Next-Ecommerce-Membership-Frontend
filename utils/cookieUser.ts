import cookies from "cookie-cutter";

const COOKIE_USER_ID = "cached_user_email";

export const getUserCookie = (): string => cookies.get(COOKIE_USER_ID);

export const setUserCookie = (username: string): void =>
    cookies.set(COOKIE_USER_ID, username);
