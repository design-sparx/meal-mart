import Hero from "@/components/Hero";
import Wrapper from "@/layout";
import Instructions from "@/components/Instructions";
import Categories from "@/components/Categories";
import Restaurants from "@/components/Restaurants";
import Stats from "@/components/Stats";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Meal Mart</title>
      </Head>
      <Wrapper containNav={true}>
        <Hero/>
        <Categories/>
        <Restaurants/>
        <Instructions/>
        <Stats/>
      </Wrapper>
    </>
  )
}
