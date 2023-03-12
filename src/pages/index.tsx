import Hero from "@/components/Hero";
import Wrapper from "@/layout";
import Instructions from "@/components/Instructions";
import Categories from "@/components/Categories";
import Restaurants from "@/components/Restaurants";
import Stats from "@/components/Stats";

export default function Home() {
  return (
    <Wrapper containNav={true}>
      <Hero/>
      <Categories/>
      <Restaurants/>
      <Instructions/>
      <Stats/>
    </Wrapper>
  )
}
