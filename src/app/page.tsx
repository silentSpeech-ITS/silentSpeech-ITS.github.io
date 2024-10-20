import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Video } from "@/components/Video";
import { Cta } from "@/components/Cta";
import {benefitOne, benefitTwo} from "@/components/benefits/data";
import { Benefits } from "@/components/Benefits";
import Panel from "@/components/Panel";

export default function Home() {
  return (
    <Container>
      <Hero />

      <Benefits id="our-approach" data={benefitOne}/>

      <SectionTitle
        id="goal"
        preTitle="Our goal"
        title="A tool for everyone"
      >
        Our goal is to create a useful tool for both deaf people and those who want to learn sign language, making the learning process more intuitive and fun. We are working to constantly improve the accuracy of sign recognition and user experience, with the ambition to expand support for other sign languages in the future
      </SectionTitle>

      <Benefits id="gamification" imgPos="right" data={benefitTwo}/>

      <SectionTitle
        id="awards"
        preTitle="Silentspeech is award-winning."
        title="Immersive technologies Award Winner"
      >
        Silentspeech has won the first place in the <br/>"Immersive technologies"
        category of the "ITS 4.0" Awards<br/> promoted by Università Ca' Foscari.
      </SectionTitle>
      
      <Video videoId="cjkRj1g94C8" />

      <Cta />
      
    </Container>
  );
}
