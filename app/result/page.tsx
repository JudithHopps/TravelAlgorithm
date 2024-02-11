import Image from "next/legacy/image";
import ViewSource from "../../components/view-source";
import styles from "../../styles.module.css";
import mountains from "../../public/mountains.jpg";

const BackgroundPage = () => (
  <div>
    <ViewSource pathname="app/background/page.tsx" />
    <div className={styles.bgWrap}></div>
    <p className={styles.bgText}>
      Image Component
      <br />
      as a Background
    </p>
  </div>
);

export default BackgroundPage;
