import { MouseEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { useUser } from "../../context/UserContext";
import styles from "./Header.module.scss";

const Header: React.FC = () => {
    const router = useRouter();
    const isHome = router.pathname === "/";
    const user = useUser();

    /**
     * Go Back in History
     * @param event
     */
    const goBack = (event: MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        router.back();
    };

    return (
        <div className={styles.nav}>
            {!isHome && (
                <div className={styles.back}>
                    <a href="#" onClick={goBack}>
                        {"<"} Back{" "}
                    </a>
                </div>
            )}
            <div className={styles.title}>
                <Link href="/">
                    <a>
                        <h1>The E-Commerce</h1>
                    </a>
                </Link>
            </div>

            <div className={styles.auth}>
                {user ? (
                    <Link href="/account">
                        <a>
                            <img src="/user_avatar.png" alt={user.email} />
                        </a>
                    </Link>
                ) : (
                    <Link href="/login">
                        <a>Log in</a>
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Header;
