import Image from "next/image";
import ViewSource from "../components/view-source";
import main from "../public/main.png";
import styles from "./page.module.css";
import Button from "../components/button";

const Responsive = () => (
  <div>
    <ViewSource pathname="app/page.tsx" />
    <div className={styles.imageContainer}>
      <Image
        alt="Mountains"
        src={main}
        width={700}
        height={475}
        sizes="100vw"
        priority
        className={styles.image}
      />
    </div>
    <Button />
  </div>
);

export default Responsive;
