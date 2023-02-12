import styles from '../../../styles/nav.module.css';
const Navlist = () => {
    return (
        <ul className={styles.navlist_ul}>
        <li>
          <a href="#" className={styles.navlist} aria-current="page">Home</a>
        </li>
        <li>
          <a href="#" className={styles.navlist}>About</a>
        </li>
        <li>
          <a href="#" className={styles.navlist}>Blog</a>
        </li>
        <li>
          <a href="#" className={styles.navlist}>FAQ</a>
        </li>
        <li>
          <a href="#" className={styles.navlist}>Contact</a>
        </li>
      </ul>
    );
};

export default Navlist;