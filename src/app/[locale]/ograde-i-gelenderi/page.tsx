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
          subtitle="Naši proizvodi u izgradnji nosivih konstrukcija i u svim vrstama ograda, kako u industrijskom tako i u privatnom sektoru."
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
