import Image from "next/legacy/image";
import ViewSource from "../components/view-source";
import main from "../public/main.png";
import styles from "./page.module.css";
import Button from "../components/button";

const Home = () => (
  <div className={styles.home}>
    <ViewSource pathname="app/page.tsx" />
    <div className={styles.imageContainer}>
      <Image
        alt="main"
        src={main}
        layout="fill"
        sizes="100vw"
        priority
        className={styles.image}
      />

      <Button />
    </div>
  </div>
);

export default Home;
