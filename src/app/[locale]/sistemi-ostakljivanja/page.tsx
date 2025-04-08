import MainLayout from "@/components/layout/MainLayout";
import CategoryHero from "@/components/ui/CategoryHero";
import Gallery from "@/components/ui/Gallery";
import Overview from "@/components/ui/Overview";
import {
  arhitektonskastaklaProducts,
  giljotinastaklaProducts,
  internistaklaProducts,
  kliznastaklaProducts,
  sklopivastaklaProducts,
  termostaklaProducts,
  zipstaklaProducts,
} from "@/data";
import { useTranslations } from "next-intl";

export default function SistemiOstakljivanja() {
      const t = useTranslations("Sistemi-ostaklivanja");
  return (
    <MainLayout color="">
      <main>
        <CategoryHero
          heading={t('mainTitle')}
          description={t('mainSubtitle')}
          image="/images/midjoruney/ostakljivanje.jpg"
        />

        <Overview
          accord={false}
          accordData={null}
          btn={false}
          title={t("title1")}
          subtitle={t("subtitle1")}
          text="Ukoliko imate dodatnih pitanja budite slobodni da nas kontaktirate."
          btnText="Kontakt"
          link="link"
          showLink={false}
        />

        <div className="wrapper">
          <Gallery data={giljotinastaklaProducts} />
        </div>

        <Overview
          accord={false}
          accordData={null}
          btn={false}
            title={t("title2")}
          subtitle={t("subtitle2")}
          text="Ukoliko imate dodatnih pitanja budite slobodni da nas kontaktirate."
          btnText="Kontakt"
          link="link"
          showLink={false}
        />

        <div className="wrapper">
          <Gallery data={termostaklaProducts} />
        </div>

        <Overview
          accord={false}
          accordData={null}
          btn={false}
          title={t("title3")}
          subtitle={t("subtitle3")}
          text="Ukoliko imate dodatnih pitanja budite slobodni da nas kontaktirate."
          btnText="Kontakt"
          link="link"
          showLink={false}
        />

        <div className="wrapper">
          <Gallery data={kliznastaklaProducts} />
        </div>

        <Overview
          accord={false}
          accordData={null}
          btn={false}
          title={t("title4")}
          subtitle={t("subtitle4")}
          text="Ukoliko imate dodatnih pitanja budite slobodni da nas kontaktirate."
          btnText="Kontakt"
          link="link"
          showLink={false}
        />

        <div className="wrapper">
          <Gallery data={sklopivastaklaProducts} />
        </div>

        <Overview
          accord={false}
          accordData={null}
          btn={false}
          title={t("title5")}
          subtitle={t("subtitle5")}
          text="Ukoliko imate dodatnih pitanja budite slobodni da nas kontaktirate."
          btnText="Kontakt"
          link="link"
          showLink={false}
        />

        <div className="wrapper">
          <Gallery data={internistaklaProducts} />
        </div>

        <Overview
          accord={false}
          accordData={null}
          btn={false}
          title={t("title6")}
          subtitle={t("subtitle6")}
          text="Ukoliko imate dodatnih pitanja budite slobodni da nas kontaktirate."
          btnText="Kontakt"
          link="link"
          showLink={false}
        />

        <div className="wrapper">
          <Gallery data={arhitektonskastaklaProducts} />
        </div>

        <Overview
          accord={false}
          accordData={null}
          btn={false}
          title={t("title7")}
          subtitle={t("subtitle7")}
          text="Ukoliko imate dodatnih pitanja budite slobodni da nas kontaktirate."
          btnText="Kontakt"
          link="link"
          showLink={false}
        />

        <div className="wrapper">
          <Gallery data={zipstaklaProducts} />
        </div>
      </main>
    </MainLayout>
  );
}
