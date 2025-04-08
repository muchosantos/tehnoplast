import MainLayout from "@/components/layout/MainLayout";
import CategoryHero from "@/components/ui/CategoryHero";
import Gallery from "@/components/ui/Gallery";
import Overview from "@/components/ui/Overview";
import { pratecaProducts } from "@/data";
import { useTranslations } from "next-intl";

export default function PratecaOprema() {
        const t = useTranslations("Prateca-Oprema");
  return (
    <MainLayout color="white">
      <main>
        <CategoryHero
          heading={t("mainTitle")}
          description={t("mainSubtitle")}
          image="/images/midjoruney/komarnici.png"
          color="#fff"
        />

        <Overview
          accord={false}
          accordData={null}
          btn={false}
          title={t('title1')}
          subtitle={t('subtitle1')}
          text="Ukoliko imate dodatnih pitanja budite slobodni da nas kontaktirate."
          btnText="Kontakt"
          link="link"
          showLink={false}
        />

        <div className="wrapper">
          <Gallery data={pratecaProducts} />
        </div>
      </main>
    </MainLayout>
  );
}
