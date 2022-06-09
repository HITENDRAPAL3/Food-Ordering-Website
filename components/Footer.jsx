import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.png" objectFit="cover" layout="fill" alt="" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            TASTY FOOD AT YOUR DOORSTEP 
          </h2>
          <h2 className={styles.motto}>
            ORDER NOW!! 
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>OUR RESTAURANTS</h1>
          <p className={styles.text}>
            Road 54, R.Bazaar
            <br /> Kanpur, 208021
            <br /> +91 456 346 4657
          </p>
          <p className={styles.text}>
            Block 108, New Haveli
            <br /> Kanpur, 208055
            <br /> +91 899 489 0950
          </p>
          <p className={styles.text}>
            Block 67, Imagica Park
            <br /> Kanpur, 208033
            <br /> +91 345 622 776
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            24X7 at your Service
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;