import MainLayout from "@/components/layout/MainLayout";
import CategoryHero from "@/components/ui/CategoryHero";
import Gallery from "@/components/ui/Gallery";
import Overview from "@/components/ui/Overview";
import {
  alubondFasadeProducts,
  elementFasadeProducts,
  stakleneFasadeProducts,
  ventilirajuceFasadeProducts,
} from "@/data";
import { useTranslations } from "next-intl";

export default function Fasade() {
  const t = useTranslations("Fasade");
  return (
    <MainLayout color="">
      <main>
        <CategoryHero
          heading={t("mainTitle")}
          description={t("mainSubtitle")}
          image="/images/midjoruney/fasade.png"
        />

        <Overview
          accord={false}
          accordData={null}
          btn={false}
          title={t("fasade1title")}
          subtitle={t("fasade1subtitle")}
          text="Ukoliko imate dodatnih pitanja budite slobodni da nas kontaktirate."
          btnText="Kontakt"
          link="link"
          showLink={false}
        />

        <div className="wrapper">
          <Gallery data={stakleneFasadeProducts} />
        </div>

        <Overview
          accord={false}
          accordData={null}
          btn={false}
          title={t("fasade2title")}
          subtitle={t("fasade2subtitle")}
          text="Ukoliko imate dodatnih pitanja budite slobodni da nas kontaktirate."
          btnText="Kontakt"
          link="link"
          showLink={false}
        />

        <div className="wrapper">
          <Gallery data={elementFasadeProducts} />
        </div>

        <Overview
          accord={false}
          accordData={null}
          btn={false}
          title={t("fasade3title")}
          subtitle={t("fasade3subtitle")}
          text="Ukoliko imate dodatnih pitanja budite slobodni da nas kontaktirate."
          btnText="Kontakt"
          link="link"
          showLink={false}
        />

        <div className="wrapper">
          <Gallery data={alubondFasadeProducts} />
        </div>

        <Overview
          accord={false}
          accordData={null}
          btn={false}
          title={t("fasade4title")}
          subtitle={t("fasade4subtitle")}
          text="Ukoliko imate dodatnih pitanja budite slobodni da nas kontaktirate."
          btnText="Kontakt"
          link="link"
          showLink={false}
        />

        <div className="wrapper">
          <Gallery data={ventilirajuceFasadeProducts} />
        </div>
      </main>
    </MainLayout>
  );
}
