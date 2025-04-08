import MainLayout from "@/components/layout/MainLayout";
import CategoryHero from "@/components/ui/CategoryHero";
import Gallery from "@/components/ui/Gallery";
import Overview from "@/components/ui/Overview";
// import CategoryBox from "@/components/ui/CategoryBox";

import {
  aluklipProzoriProducts,
  aluProzoriProducts,
  pvcProzoriProducts,
} from "@/data";
import { useTranslations } from "next-intl";

export default function Prozori() {
  const t = useTranslations("Prozori");
  return (
    <MainLayout color="">
      <main>
        <CategoryHero
          heading={t('mainTitle')}
          description={t('mainSubtitle')}
          image="/images/midjoruney/prozor1.jpg"
        />

        <Overview
          accord={false}
          accordData={null}
          btn={false}
          title={t('prozori1title')}
          subtitle={t('prozori1subtitle')}
          text="Ukoliko imate dodatnih pitanja budite slobodni da nas kontaktirate."
          btnText="Kontakt"
          link="link"
          showLink={false}
        />

        <div className="wrapper">
          <Gallery data={aluProzoriProducts} />
        </div>

        <Overview
          accord={false}
          accordData={null}
          btn={false}
          title={t('prozori2title')}
          subtitle={t('prozori2subtitle')}
          text="Ukoliko imate dodatnih pitanja budite slobodni da nas kontaktirate."
          btnText="Kontakt"
          link="link"
          showLink={false}
        />

        <div className="wrapper">
          <Gallery data={pvcProzoriProducts} />
        </div>

        <Overview
          accord={false}
          accordData={null}
          btn={false}
          title={t('prozori3title')}
          subtitle={t('prozori3subtitle')}
          text="Ukoliko imate dodatnih pitanja budite slobodni da nas kontaktirate."
          btnText="Kontakt"
          link="link"
          showLink={false}
        />

        <div className="wrapper">
          <Gallery data={aluklipProzoriProducts} />
        </div>
      </main>
    </MainLayout>
  );
}
