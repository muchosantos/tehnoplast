import MainLayout from "@/components/layout/MainLayout";
import CategoryHero from "@/components/ui/CategoryHero";
import Gallery from "@/components/ui/Gallery";
import Overview from "@/components/ui/Overview";
import { ogradeProducts } from "@/data";

export default function OgradeIGelenderi() {
  return (
    <MainLayout color="">
      <main>
        <CategoryHero
          heading="Tehnoplast Ograde i Gelenderi"
          description="Eralux rešenja kombinuju moderan dizajn, visok nivo sigurnosti, funkcionalnost i estetsku perfekciju, prilagođena vašim potrebama."
          image="/images/midjoruney/ograde.jpg"
        />

        <Overview
          accord={false}
          accordData={null}
          btn={false}
          title="Ograde i gelenderi"
          subtitle="Sigurno i estetski prilagodljivo rešenje koje kombinuje dugotrajnost, funkcionalnost i moderan dizajn. Idealni za stambene i poslovne objekte, pružaju zaštitu uz elegantan vizuelni efekat."
          text="Ukoliko imate dodatnih pitanja budite slobodni da nas kontaktirate."
          btnText="Kontakt"
          link="link"
          showLink={false}
        />

        <div className="wrapper">
          <Gallery data={ogradeProducts} />
        </div>
      </main>
    </MainLayout>
  );
}
