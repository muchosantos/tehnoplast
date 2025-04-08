import MainLayout from "@/components/layout/MainLayout";
import CategoryHero from "@/components/ui/CategoryHero";
import Gallery from "@/components/ui/Gallery";
import Overview from "@/components/ui/Overview";
import { roloGaraznaProducts, segmentnaGaraznaProducts } from "@/data";
import { useTranslations } from "next-intl";

export default function GaraznaVrata() {
    const t = useTranslations("Garazna-vrata");
  return (
    <MainLayout color={''}>
      <main>
        <CategoryHero
          heading={t("mainTitle")}
          description={t('mainSubtitle')}
          image="/images/midjoruney/garazna.png"
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
          <Gallery data={segmentnaGaraznaProducts} />
        </div>

        <Overview
          accord={false}
          accordData={null}
          btn={false}
          title={t('title2')}
          subtitle={t('subtitle2')}
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
