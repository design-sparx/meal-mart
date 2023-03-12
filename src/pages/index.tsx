import Hero from "@/components/Hero";
import Wrapper from "@/layout";
import Instructions from "@/components/Instructions";
import Categories from "@/components/Categories";
import Restaurants from "@/components/Restaurants";
import Stats from "@/components/Stats";
import {useMantineTheme} from "@mantine/core";

export default function Home() {
  const theme = useMantineTheme();

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
