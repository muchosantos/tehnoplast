import MainLayout from "@/components/layout/MainLayout";
import CategoryHero from "@/components/ui/CategoryHero";
import Gallery from "@/components/ui/Gallery";
import Overview from "@/components/ui/Overview";
import { alubondFasadeProducts, elementFasadeProducts, stakleneFasadeProducts, ventilirajuceFasadeProducts } from "@/data";

export default function Fasade() {
  return (
    <MainLayout color="">
      <main>
        <CategoryHero
          heading="Tehnoplast Fasade"
          description="Eralux rešenja kombinuju moderan dizajn, visok nivo sigurnosti, funkcionalnost i estetsku perfekciju, prilagođena vašim potrebama."
          image="/images/midjoruney/fasade.png"
        />

        <Overview
          accord={false}
          accordData={null}
          btn={false}
          title="Staklene fasade"
          subtitle="Elegantan i savremen dizajn koji omogućava maksimalan prodor prirodne svetlosti, poboljšava energetsku efikasnost i doprinosi estetici svakog objekta. Idealno rešenje za moderne poslovne i stambene prostore koji spajaju funkcionalnost i vrhunski vizuelni efekat."
          text="Ukoliko imate dodatnih pitanja budite slobodni da nas kontaktirate."
          btnText="Kontakt"
          link="link"
          showLink={false}
        />

        <div className="wrapper">
          <Gallery data={stakleneFasadeProducts} />
        </div>


        <Overview
          accord={false}
          accordData={null}
          btn={false}
          title="Element fasade"
          subtitle="Modularno i efikasno rešenje koje omogućava brzu montažu, vrhunsku termoizolaciju i moderan dizajn. Sa preciznom izradom i visokokvalitetnim materijalima, osigurava dugotrajnost, stabilnost i estetsku usklađenost sa savremenom arhitekturom."
          text="Ukoliko imate dodatnih pitanja budite slobodni da nas kontaktirate."
          btnText="Kontakt"
          link="link"
          showLink={false}
        />

        <div className="wrapper">
          <Gallery data={elementFasadeProducts} />
        </div>



        <Overview
          accord={false}
          accordData={null}
          btn={false}
          title="Alubond fasade"
          subtitle="Lagana, izdržljiva i estetski prilagodljiva rešenja koja kombinuju vrhunsku otpornost na vremenske uslove sa modernim dizajnom. Idealan izbor za savremene objekte, pružajući dugotrajnost, energetski efikasnost i sofisticiran vizuelni efekat."
          text="Ukoliko imate dodatnih pitanja budite slobodni da nas kontaktirate."
          btnText="Kontakt"
          link="link"
          showLink={false}
        />

        <div className="wrapper">
          <Gallery data={alubondFasadeProducts} />
        </div>

        <Overview
          accord={false}
          accordData={null}
          btn={false}
          title="Ventilirajuce fasade"
          subtitle="Savremeno fasadno rešenje koje poboljšava energetsku efikasnost objekta, omogućava optimalnu termoizolaciju i sprečava kondenzaciju. Kombinuje funkcionalnost i estetiku, pružajući dugotrajnu zaštitu i moderan arhitektonski izraz."
          text="Ukoliko imate dodatnih pitanja budite slobodni da nas kontaktirate."
          btnText="Kontakt"
          link="link"
          showLink={false}
        />

        <div className="wrapper">
          <Gallery data={ventilirajuceFasadeProducts} />
        </div>
      </main>
    </MainLayout>
  );
}
