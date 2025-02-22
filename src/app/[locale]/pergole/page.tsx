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
          subtitle="Naši proizvodi u izgradnji nosivih konstrukcija i u svim vrstama ograda, kako u industrijskom tako i u privatnom sektoru."
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
          subtitle="Naši proizvodi u izgradnji nosivih konstrukcija i u svim vrstama ograda, kako u industrijskom tako i u privatnom sektoru."
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
          subtitle="Naši proizvodi u izgradnji nosivih konstrukcija i u svim vrstama ograda, kako u industrijskom tako i u privatnom sektoru."
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
