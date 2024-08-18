import Banner from "./components/LandPage/Banner/Banner";
import Birtain from "./components/LandPage/Birtain/Birtain";
import CityGuide from "./components/LandPage/CityGuide/CityGuide";
import Find from "./components/LandPage/FindInspitation/Find";
import Hiking from "./components/LandPage/Hiking/HIking";
import Iceland from "./components/LandPage/Iceland/Iceland";
import MorcoNavbia from "./components/LandPage/MorcoNabia/MorcoNavbia";
import LatestGuide from "./components/LandPage/OurLatestGuide/LatestGuide";
import RoadTrip from "./components/LandPage/RaodTrip/RoadTrip";
import Usa from "./components/LandPage/USA/Usa";
import Welcome from "./components/LandPage/WelcomeToAny/Welcome";
import WhereToNext from "./components/LandPage/WhereToNext/WhereToNext";

export default function Home() {
  return (
    <>
   <Welcome />
   <Find />
   <LatestGuide />
   <RoadTrip />
   <Hiking />
   <Birtain />   
   <Iceland />
   <MorcoNavbia />
   <Usa />
   <CityGuide />
   <Banner />
   <WhereToNext />
   </>
  )
}

