import Link from "next/link";
import { useLogout, useUser } from "../../context/UserContext";
import styles from "./Header.module.scss";

const Header: React.FC = () => {
    const user = useUser();
    const logout = useLogout();

    return (
        <div className={styles.header}>
            <div className={styles.inner}>
                <div className={styles.left}>
                    <Link href="/">
                        <a>
                            <h1>Entreprenerd Store</h1>
                        </a>
                    </Link>
                </div>
                <div className={styles.right}>
                    {user && (
                        <>
                            <Link href="/orders">
                                <a>Your Orders</a>
                            </Link>
                            <button type="button" onClick={logout}>
                                Logout
                            </button>
                        </>
                    )}
                    {!user && (
                        <Link href="/login">
                            <a>Login</a>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Header;
