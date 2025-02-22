import MainLayout from "@/components/layout/MainLayout";
import CategoryHero from "@/components/ui/CategoryHero";
import Gallery from "@/components/ui/Gallery";
import Overview from "@/components/ui/Overview";
import { roloGaraznaProducts, segmentnaGaraznaProducts } from "@/data";

export default function GaraznaVrata() {
  return (
    <MainLayout color={''}>
      <main>
        <CategoryHero
          heading="Tehnoplast Garažna vrata"
          description="Segmentna garažna vrata pružaju odličnu termoizolaciju, dok rolo sistem omogućava maksimalnu uštedu prostora – odaberite rešenje koje najbolje odgovara vašim potrebama."
          image="/images/midjoruney/garazna.png"
        />

        <Overview
          accord={false}
          accordData={null}
          btn={false}
          title="Segmentna garažna vrata"
          subtitle="Naši proizvodi u izgradnji nosivih konstrukcija i u svim vrstama ograda, kako u industrijskom tako i u privatnom sektoru."
          text="Ukoliko imate dodatnih pitanja budite slobodni da nas kontaktirate."
          btnText="Kontakt"
          link="link"
          showLink={false}
        />

        <div className="wrapper">
          <Gallery data={segmentnaGaraznaProducts} />
        </div>

        <Overview
          accord={false}
          accordData={null}
          btn={false}
          title="Rolo garažna vrata"
          subtitle="Naši proizvodi u izgradnji nosivih konstrukcija i u svim vrstama ograda, kako u industrijskom tako i u privatnom sektoru."
          text="Ukoliko imate dodatnih pitanja budite slobodni da nas kontaktirate."
          btnText="Kontakt"
          link="link"
          showLink={false}
        />

        <div className="wrapper">
          <Gallery data={roloGaraznaProducts} />
        </div>
      </main>
    </MainLayout>
  );
}
