import MainLayout from "@/components/layout/MainLayout";
import Hero from "@/components/ui/Hero";
import Overview from "@/components/ui/Overview";
import StatsSection from "@/components/ui/StatsSection";
import VideoSection from "@/components/ui/VideoSection";
import { useTranslations } from "next-intl";

export default function Home() {
  // Ako stranica nije staticna zove se get translation iz next-intl/server. Tj, kada ne pozivas podatke
  const t = useTranslations("Home");
  const izrada = t.raw("izrada");
  const proces = t.raw("proces");

  return (
    <MainLayout color="white">
      <main>
        <Hero
          heading={t("mainTitle")}
          description={t("mainSubtitle")}
          image="/images/hero/hero.jpg"
        />
        <Overview
          accord={true}
          accordData={izrada}
          title={t("heading1")}
          subtitle={t("subheading1")}
          text={t("btnTitle")}
          btnText={t("btn1")}
          link="/kontakt"
          btn={true}
          showLink={true}
        />


        <Overview
          accord={false}
          accordData={null}
          btn={false}
          title={t("heading2")}
          subtitle={t("subheading2")}
          text={t("btnTitle")}
          btnText={t("btn1")}
          link="/kontakt"
          showLink={false}
        />

        <StatsSection />

        <VideoSection />

        <Overview
          accord={true}
          accordData={proces}
          btn={false}
          title={t("heading3")}
          subtitle={t("subheading3")}
          text={t("btnTitle")}
          btnText={t("btn1")}
          link="/kontakt"
          showLink={false}
        />
      </main>
    </MainLayout>
  );
}
