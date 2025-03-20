import MainLayout from "@/components/layout/MainLayout";
import CategoryHero from "@/components/ui/CategoryHero";
import Gallery from "@/components/ui/Gallery";
import Overview from "@/components/ui/Overview";
import { pratecaProducts } from "@/data";

export default function PratecaOprema() {
  return (
    <MainLayout color="white">
      <main>
        <CategoryHero
          heading="Tehnoplast Prateća oprema"
          description="Eralux rešenja kombinuju moderan dizajn, visok nivo sigurnosti, funkcionalnost i estetsku perfekciju, prilagođena vašim potrebama."
          image="/images/midjoruney/komarnici.png"
          color="#fff"
        />

        <Overview
          accord={false}
          accordData={null}
          btn={false}
          title="Sanitrane pregrade, komarnici i zaštita od sunca"
          subtitle="Praktična i efikasna rešenja koja obezbeđuju privatnost, zaštitu od insekata i kontrolu sunčeve svetlosti. Idealan izbor za funkcionalne i udobne prostore, uz dugotrajnost i jednostavno održavanje."
          text="Ukoliko imate dodatnih pitanja budite slobodni da nas kontaktirate."
          btnText="Kontakt"
          link="link"
          showLink={false}
        />

        <div className="wrapper">
          <Gallery data={pratecaProducts} />
        </div>
      </main>
    </MainLayout>
  );
}
