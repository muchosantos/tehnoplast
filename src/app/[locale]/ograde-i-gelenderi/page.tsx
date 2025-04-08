import MainLayout from "@/components/layout/MainLayout";
import CategoryHero from "@/components/ui/CategoryHero";
import Gallery from "@/components/ui/Gallery";
import Overview from "@/components/ui/Overview";
import { ogradeProducts } from "@/data";
import { useTranslations } from "next-intl";

export default function OgradeIGelenderi() {
    const t = useTranslations("Ograde");
  return (
    <MainLayout color="">
      <main>
        <CategoryHero
          heading={t("mainTitle")}
          description={t("mainSubtitle")}
          image="/images/midjoruney/p7.png"
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
          <Gallery data={ogradeProducts} />
        </div>
      </main>
    </MainLayout>
  );
}
