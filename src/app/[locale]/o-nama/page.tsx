import MainLayout from "@/components/layout/MainLayout";
import CategoryHero from "@/components/ui/CategoryHero";
import Overview from "@/components/ui/Overview";
import StatsSection from "@/components/ui/StatsSection";
import { useTranslations } from "next-intl";

export default function ONama() {
      const t = useTranslations("O-nama");
      const kontakt = t.raw("kontakt");
      const proces = t.raw("proces");
  return (
    <MainLayout color="white">
      <main>
        <CategoryHero
          heading={t("mainTitle")}
          description={t("mainSubtitle")}
          image="/images/hero/onama.png"
          color="#fff"
        />

        <Overview
          accord={true}
          accordData={proces}
          btn={true}
          title={t('heading1')}
          subtitle={t('subheading1')}
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
          title={t('heading2')}
          subtitle={t('subheading2')}
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
