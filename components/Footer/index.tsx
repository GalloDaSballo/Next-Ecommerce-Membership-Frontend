import styles from "./Footer.module.scss";

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.left}>© Alex The Entreprenerd </div>
            <div className={styles.right}>
                <a
                    className={styles.link}
                    href={process.env.NEXT_PUBLIC_DISCORD_LINK}
                    target="_blank"
                    rel="nofollow noreferrer"
                >
                    Customer Support
                </a>
            </div>
        </footer>
    );
};

export default Footer;
