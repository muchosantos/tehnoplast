import MainLayout from "@/components/layout/MainLayout";
import CategoryHero from "@/components/ui/CategoryHero";
import Gallery from "@/components/ui/Gallery";
import Overview from "@/components/ui/Overview";
import { bioklimatskenepergoleProducts, staklenikrovProducts, tekstilnepergoleProducts } from "@/data";

export default function Pergole() {
  return (
    <MainLayout color="">
      <main>
        <CategoryHero
          heading="Tehnoplast Pergole"
          description="Eralux rešenja kombinuju moderan dizajn, visok nivo sigurnosti, funkcionalnost i estetsku perfekciju, prilagođena vašim potrebama."
          image="/images/midjoruney/pergole.png"
        />

        <Overview
          accord={false}
          accordData={null}
          btn={false}
          title="Tekstilne pergole"
          subtitle="Fleksibilno i elegantno rešenje za zaštitu od sunca i vremenskih uslova, idealno za terase, bašte i otvorene prostore. Kombinuju moderan dizajn sa funkcionalnošću, pružajući udobnost, hladovinu i estetski doprinos eksterijeru."
          text="Ukoliko imate dodatnih pitanja budite slobodni da nas kontaktirate."
          btnText="Kontakt"
          link="link"
          showLink={false}
        />

        <div className="wrapper">
          <Gallery data={tekstilnepergoleProducts} />
        </div>

        <Overview
          accord={false}
          accordData={null}
          btn={false}
          title="Bioklimatske pergole"
          subtitle="Inovativno rešenje koje omogućava prirodnu regulaciju svetlosti, ventilacije i zaštite od vremenskih uslova. Sa podesivim lamelama, pružaju savršen balans između hlada i prozračnosti, čineći svaki eksterijer funkcionalnim i estetski atraktivnim."
          text="Ukoliko imate dodatnih pitanja budite slobodni da nas kontaktirate."
          btnText="Kontakt"
          link="link"
          showLink={false}
        />

        <div className="wrapper">
          <Gallery data={bioklimatskenepergoleProducts} />
        </div>

        <Overview
          accord={false}
          accordData={null}
          btn={false}
          title="Stakleni krov - pergole"
          subtitle="Elegantno i dugotrajno rešenje koje omogućava maksimalan prodor prirodne svetlosti uz zaštitu od vremenskih uslova. Idealno za moderne eksterijere, stvara prozračan i sofisticiran prostor sa osećajem otvorenosti i udobnosti."
          text="Ukoliko imate dodatnih pitanja budite slobodni da nas kontaktirate."
          btnText="Kontakt"
          link="link"
          showLink={false}
        />

        <div className="wrapper">
          <Gallery data={staklenikrovProducts} />
        </div>
      </main>
    </MainLayout>
  );
}
