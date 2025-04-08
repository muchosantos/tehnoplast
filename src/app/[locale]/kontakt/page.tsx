import MainLayout from "@/components/layout/MainLayout";
import CategoryHero from "@/components/ui/CategoryHero";
import Overview from "@/components/ui/Overview";
import { useTranslations } from "next-intl";

export default function Kontakt() {
  const t = useTranslations("Kontakt");
  const kontakt = t.raw("kontakt");
  return (
    <MainLayout color="white">
      <main>
        <CategoryHero
          heading={t("mainTitle")}
          description={t("mainSubtitle")}
          image="/images/hero/kontakt.jpg"
          color="#fff"
        />

        <Overview
          accord={true}
          accordData={kontakt}
          title={t('heading1')}
          subtitle={t('subheading1')}
          text={t('btnTitle')}
          btnText="Kontakt"
          link="link"
          btn={false}
          showLink={false}
        />
      </main>
    </MainLayout>
  );
}
