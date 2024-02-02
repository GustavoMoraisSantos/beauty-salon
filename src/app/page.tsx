import UncontrolledCarousel from "@/componets/carousel";
import Header from "@/componets/header";
import Section2 from "@/componets/section-2";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  return (
    <div>
      <Header />
      <UncontrolledCarousel/>
      <Section2/>
    </div>
  );
}
