import MainLayout from "@/components/layout/MainLayout";
import CategoryHero from "@/components/ui/CategoryHero";
import Gallery from "@/components/ui/Gallery";
import Overview from "@/components/ui/Overview";
import { akordionklizniProducts, klasicnoklizniProducts, podiznoklizniProducts, uskocnoklizniProducts } from "@/data";
import { useTranslations } from "next-intl";

export default function KlizniSistemi() {
    const t = useTranslations("Klizni-sistemi");
  return (
    <MainLayout color="">
      <main>
        <CategoryHero
          heading={t("mainTitle")}
          description={t('mainSubtitle')}
          image="/images/midjoruney/klizni.jpg"
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
          <Gallery data={podiznoklizniProducts} />
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
          <Gallery data={uskocnoklizniProducts} />
        </div>

        <Overview
          accord={false}
          accordData={null}
          btn={false}
          title={t('title3')}
          subtitle={t('subtitle3')}
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
          title={t('title4')}
          subtitle={t('subtitle4')}
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
