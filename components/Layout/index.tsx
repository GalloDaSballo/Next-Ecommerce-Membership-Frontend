import Footer from "../Footer";
import Header from "../Header";
import styles from "./Layout.module.scss";

const Layout: React.FC = ({ children }) => {
    return (
        <div>
            <Header />
            <main className={styles.main}>{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
