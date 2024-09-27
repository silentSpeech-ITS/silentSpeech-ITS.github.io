import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Video } from "@/components/Video";
import { Cta } from "@/components/Cta";
export default function Home() {
  return (
    <Container>
      <Hero />

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
