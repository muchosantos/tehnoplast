import MainLayout from "@/components/layout/MainLayout";

import CategoryHero from "@/components/ui/CategoryHero";

import Overview from "@/components/ui/Overview";
import ProductCarousel from "@/components/ui/ProductCarousel";
import {  vrataAlu, vrataSK } from "@/data";

export default function Vrata() {
  return (
    <MainLayout color="black">
      <main>
        <CategoryHero
          heading="Tehnoplast Vrata"
          description="Bez obzira da li birate aluminijumska vrata zbog izdržljivosti, PVC vrata zbog energetske efikasnosti ili skriveno krilo sistem za moderan i minimalistički izgled, pronađite idealno rešenje za svoj prostor."
          image="/images/midjoruney/vrata1.jpg"
        />

        <Overview
          accord={false}
          accordData={null}
          btn={false}
          title="Aluminijumska vrata"
          subtitle="Naša aluminijumska vrata nude savršen spoj čvrstoće, elegancije i dugotrajnosti, prilagođena kako industrijskim, tako i stambenim objektima. Sa modernim dizajnom i vrhunskom izradom, pružaju sigurnost, funkcionalnost i estetsku vrednost."
          text="Ukoliko imate dodatnih pitanja budite slobodni da nas kontaktirate."
          btnText="Kontakt"
          link="link"
          showLink={false}
        />



        <div className="wrapper">
          <ProductCarousel data={vrataAlu} />
        </div>

        {/* <Overview
          accord={false}
          accordData={null}
          btn={false}
          title="Inox paneli"
          subtitle="Naši proizvodi u izgradnji nosivih konstrukcija i u svim vrstama ograda, kako u industrijskom tako i u privatnom sektoru."
          text="Ukoliko imate dodatnih pitanja budite slobodni da nas kontaktirate."
          btnText="Kontakt"
          link="link"
          showLink={false}
        />

        <div className="wrapper">
          <ProductCarousel data={vrata} />
        </div> */}

        <Overview
          accord={false}
          accordData={null}
          btn={false}
          title="Skriveno krilo - sistemi"
          subtitle="Sistemi sa skrivenim krilom pružaju moderan i sofisticiran izgled, omogućavajući veću površinu stakla i više prirodne svetlosti. Sa čistim linijama i diskretnim okvirom, idealni su za savremene objekte koji teže minimalizmu i funkcionalnosti."
          text="Ukoliko imate dodatnih pitanja budite slobodni da nas kontaktirate."
          btnText="Kontakt"
          link="link"
        />

        <div className="wrapper">
          <ProductCarousel data={vrataSK} />
        </div>
      </main>
    </MainLayout>
  );
}
