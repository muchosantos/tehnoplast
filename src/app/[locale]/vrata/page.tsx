import MainLayout from "@/components/layout/MainLayout";

import CategoryHero from "@/components/ui/CategoryHero";

import Overview from "@/components/ui/Overview";
import ProductCarousel from "@/components/ui/ProductCarousel";
import { vrataAlu, vrataSK } from "@/data";
import { useTranslations } from "next-intl";

export default function Vrata() {
  const t = useTranslations("Vrata");
  return (
    <MainLayout color="black">
      <main>
        <CategoryHero
          heading={t('mainTitle')}
          description={t('mainSubtitle')}
          image="/images/midjoruney/vrata1.jpg"
        />

        <Overview
          accord={false}
          accordData={null}
          btn={false}
          title={t('vrata1title')}
          subtitle={t("vrata1subtitle")}
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
          title={t('vrata2title')}
          subtitle={t("vrata2subtitle")}
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
