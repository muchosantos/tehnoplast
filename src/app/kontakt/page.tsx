import MainLayout from "@/components/layout/MainLayout";
import CategoryHero from "@/components/ui/CategoryHero";
import Overview from "@/components/ui/Overview";
import { kontakt } from "@/data";

export default function Kontakt() {
  return (
    <MainLayout color="white">
      <main>
        <CategoryHero
          heading="Tehnoplast Kontakt"
          description="Tehnoplast je specijalizovan za dizajn, proizvodnju i ugradnju PVC i ALU stolarije, pružajući kvalitetna rešenja za domove i poslovne prostore širom Evrope."
          image="/images/hero/kontakt.jpg"
          color="#fff"
        />

        <Overview
          accord={true}
          accordData={kontakt}
          title="Beskompromisna izrada"
          subtitle="Mi oblikujemo prostore po meri, pretvarajući vizije u stvarnost kroz preciznu izradu i vrhunske materijale. Svaki naš proizvod je spoj estetike, funkcionalnosti i inovacije, prilagođen jedinstvenim potrebama naših klijenata."
          text="Ukoliko imate dodatnih pitanja budite slobodni da nas kontaktirate."
          btnText="Kontakt"
          link="link"
          btn={false}
          showLink={false}
        />
      </main>
    </MainLayout>
  );
}
