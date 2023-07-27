import CoursesCard from "./components/CoursesCard";
import HeroSection from "./components/HeroSection";
import Trusted from "./components/Trusted";

const Home = () => {
  const data = {
    name: "UDEMY CLONE",
  };

  return (
    <>
      <HeroSection myData={data} />
      <CoursesCard/>
      <Trusted />
    </>
  );
};

export default Home;
