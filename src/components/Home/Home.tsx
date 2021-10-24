import { Articles } from "./Articles/Articles";
import { CardLink } from "./CardLink/CardLink";
import { CarsCard } from "./CarsCard/CarsCard";
import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";
import { Slider } from "./Slider/Slider";

export const Home = () => {
  return (
    <div>
      <Header />
      <Slider />
      <CardLink />
      <CarsCard />
      <Articles />
      <Footer />
    </div>
  );
};
