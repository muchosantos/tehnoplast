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
          subtitle="Naši proizvodi u izgradnji nosivih konstrukcija i u svim vrstama ograda, kako u industrijskom tako i u privatnom sektoru."
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
          subtitle="Naši proizvodi u izgradnji nosivih konstrukcija i u svim vrstama ograda, kako u industrijskom tako i u privatnom sektoru."
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
          subtitle="Naši proizvodi u izgradnji nosivih konstrukcija i u svim vrstama ograda, kako u industrijskom tako i u privatnom sektoru."
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
          subtitle="Naši proizvodi u izgradnji nosivih konstrukcija i u svim vrstama ograda, kako u industrijskom tako i u privatnom sektoru."
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
