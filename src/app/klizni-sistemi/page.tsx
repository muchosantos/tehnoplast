import MainLayout from "@/components/layout/MainLayout";
import CategoryHero from "@/components/ui/CategoryHero";
import Gallery from "@/components/ui/Gallery";
import Overview from "@/components/ui/Overview";
import { akordionklizniProducts, klasicnoklizniProducts, podiznoklizniProducts, uskocnoklizniProducts } from "@/data";

export default function KlizniSistemi() {
  return (
    <MainLayout color="">
      <main>
        <CategoryHero
          heading="Tehnoplast Klizni sistemi"
          description="Eralux rešenja kombinuju moderan dizajn, visok nivo sigurnosti, funkcionalnost i estetsku perfekciju, prilagođena vašim potrebama."
          image="/images/midjoruney/klizni.jpg"
        />

        <Overview
          accord={false}
          accordData={null}
          btn={false}
          title="Podizno-klizni sistemi"
          subtitle="Naši proizvodi u izgradnji nosivih konstrukcija i u svim vrstama ograda, kako u industrijskom tako i u privatnom sektoru."
          text="Ukoliko imate dodatnih pitanja budite slobodni da nas kontaktirate."
          btnText="Kontakt"
          link="link"
          showLink={false}
        />

        <div className="wrapper">
          <Gallery data={podiznoklizniProducts} />
        </div>

        <Overview
          accord={false}
          accordData={null}
          btn={false}
          title="Uskočno-klizni sistemi"
          subtitle="Naši proizvodi u izgradnji nosivih konstrukcija i u svim vrstama ograda, kako u industrijskom tako i u privatnom sektoru."
          text="Ukoliko imate dodatnih pitanja budite slobodni da nas kontaktirate."
          btnText="Kontakt"
          link="link"
          showLink={false}
        />

        <div className="wrapper">
          <Gallery data={uskocnoklizniProducts} />
        </div>

        <Overview
          accord={false}
          accordData={null}
          btn={false}
          title="Klasično-klizni sistemi"
          subtitle="Naši proizvodi u izgradnji nosivih konstrukcija i u svim vrstama ograda, kako u industrijskom tako i u privatnom sektoru."
          text="Ukoliko imate dodatnih pitanja budite slobodni da nas kontaktirate."
          btnText="Kontakt"
          link="link"
          showLink={false}
        />

        <div className="wrapper">
          <Gallery data={klasicnoklizniProducts} />
        </div>

        <Overview
          accord={false}
          accordData={null}
          btn={false}
          title="Akordion sistemi"
          subtitle="Naši proizvodi u izgradnji nosivih konstrukcija i u svim vrstama ograda, kako u industrijskom tako i u privatnom sektoru."
          text="Ukoliko imate dodatnih pitanja budite slobodni da nas kontaktirate."
          btnText="Kontakt"
          link="link"
          showLink={false}
        />

        <div className="wrapper">
          <Gallery data={akordionklizniProducts} />
        </div>
      </main>
    </MainLayout>
  );
}
