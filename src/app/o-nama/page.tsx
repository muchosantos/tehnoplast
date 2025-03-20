import MainLayout from "@/components/layout/MainLayout";
import CategoryHero from "@/components/ui/CategoryHero";
import Overview from "@/components/ui/Overview";
import StatsSection from "@/components/ui/StatsSection";
import { kontakt, proces } from "@/data";

export default function ONama() {
  return (
    <MainLayout color="white">
      <main>
        <CategoryHero
          heading="Tehnoplast PVC i ALU stolarija."
          description="Tehnoplast je specijalizovan za dizajn, proizvodnju i ugradnju PVC i ALU stolarije, pružajući kvalitetna rešenja za domove i poslovne prostore širom Evrope."
          image="/images/hero/onama.png"
          color="#fff"
        />

        <Overview
          accord={true}
          accordData={proces}
          btn={true}
          title="Širom Evrope"
          subtitle="Svaki prostor prilagođavamo vašim željama, pretvarajući ideje u stvarnost pažljivom izradom i vrhunskim materijalima. Naši proizvodi kombinuju dizajn, funkcionalnost i kvalitet, pružajući rešenja skrojena po meri svakog klijenta."
          text="Ukoliko imate dodatnih pitanja budite slobodni da nas kontaktirate."
          btnText="Kontakt"
          link="/kontakt"
          showLink={false}
        />

        <div className="my-40">
        <StatsSection />
        </div>

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
