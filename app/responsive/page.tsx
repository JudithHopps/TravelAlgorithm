import Image from "next/legacy/image";
import ViewSource from "../../components/view-source";
import mountains from "../../public/main.png";

const Responsive = () => (
  <div>
    <ViewSource pathname="app/responsive/page.tsx" />
    <h1>Image Component With Layout Responsive</h1>
    <Image
      alt="Mountains"
      src={mountains}
      width={700}
      height={475}
      sizes="100vw"
      priority
      style={{
        width: "100%",
        height: "auto",
      }}
    />
  </div>
);

export default Responsive;
