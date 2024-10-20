import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Video } from "@/components/Video";
import { Cta } from "@/components/Cta";
import {benefitOne, benefitTwo} from "@/components/benefits/data";
import { Benefits } from "@/components/Benefits";

export default function Home() {
  return (
    <Container>
      <Hero />

      <Benefits data={benefitOne}/>

      <SectionTitle
        id="our-goal"
        preTitle="Our goal"
        title="A tool for everyone"
      >
        Our goal is to create a useful tool for both deaf people and those who want to learn sign language, making the learning process more intuitive and fun. We are working to constantly improve the accuracy of sign recognition and user experience, with the ambition to expand support for other sign languages in the future
      </SectionTitle>


      <Benefits imgPos="right" data={benefitTwo}/>

      <SectionTitle
        id="presentazione-yt"
        preTitle="La nostra presentazione"
        title="silentSpeech all'ITS 4.0"
      >
        silentSpeech è vincitore del primo posto nella categoria <br/>"Tecnologie Immersive"
        del progetto ITS 4.0<br/> promosso dall'Università Ca' Foscari.
      </SectionTitle>
      
      <Video videoId="cjkRj1g94C8" />
      <Cta />
    </Container>
  );
}
