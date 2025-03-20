import MainLayout from "@/components/layout/MainLayout";
import CategoryHero from "@/components/ui/CategoryHero";
import Gallery from "@/components/ui/Gallery";
import Overview from "@/components/ui/Overview";
import { roloGaraznaProducts, segmentnaGaraznaProducts } from "@/data";

export default function GaraznaVrata() {
  return (
    <MainLayout color={''}>
      <main>
        <CategoryHero
          heading="Tehnoplast Garažna vrata"
          description="Segmentna garažna vrata pružaju odličnu termoizolaciju, dok rolo sistem omogućava maksimalnu uštedu prostora – odaberite rešenje koje najbolje odgovara vašim potrebama."
          image="/images/midjoruney/garazna.png"
        />

        <Overview
          accord={false}
          accordData={null}
          btn={false}
          title="Segmentna garažna vrata"
          subtitle="Praktično i pouzdano rešenje koje štedi prostor i obezbeđuje vrhunsku termo i zvučnu izolaciju. Sa modernim dizajnom i glatkim mehanizmom otvaranja, idealna su za sigurnost, funkcionalnost i estetski izgled garažnih prostora."
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
          title="Rolo garažna vrata"
          subtitle="Kompaktno i efikasno rešenje koje omogućava maksimalnu uštedu prostora uz jednostavan mehanizam otvaranja. Odlikuju se visokom izdržljivošću, termoizolacijom i sigurnošću, čineći ih idealnim za garaže različitih dimenzija."
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
