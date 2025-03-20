import MainLayout from "@/components/layout/MainLayout";
import CategoryHero from "@/components/ui/CategoryHero";
import Gallery from "@/components/ui/Gallery";
import Overview from "@/components/ui/Overview";
import { akordionklizniProducts, klasicnoklizniProducts, podiznoklizniProducts, uskocnoklizniProducts } from "@/data";

export default function KlizniSistemi() {
  return (
    <MainLayout color="">
      <main>
        <CategoryHero
          heading="Tehnoplast Klizni sistemi"
          description="Eralux rešenja kombinuju moderan dizajn, visok nivo sigurnosti, funkcionalnost i estetsku perfekciju, prilagođena vašim potrebama."
          image="/images/midjoruney/klizni.jpg"
        />

        <Overview
          accord={false}
          accordData={null}
          btn={false}
          title="Podizno-klizni sistemi"
          subtitle="Praktično i estetski sofisticirano rešenje koje omogućava lako otvaranje velikih staklenih površina uz maksimalnu stabilnost i toplotnu izolaciju. Idealan izbor za prostore koji teže prozračnosti, prirodnom osvetljenju i neometanom pogledu."
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
          title="Uskočno-klizni sistemi"
          subtitle="Kompaktno i funkcionalno rešenje koje kombinuje lakoću otvaranja sa visokim nivoom termo i zvučne izolacije. Idealan izbor za prostore koji zahtevaju efikasnost, uštedu prostora i moderan dizajn."
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
          title="Klasično-klizni sistemi"
          subtitle="Jednostavno i praktično rešenje koje omogućava lako klizno otvaranje uz optimizaciju prostora. Odlikuju se pouzdanošću, dugotrajnošću i dobrim izolacionim svojstvima, čineći ih idealnim za različite vrste objekata."
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
          title="Akordion sistemi"
          subtitle="Fleksibilno i funkcionalno rešenje koje omogućava potpuno otvaranje prostora zahvaljujući sklopivom mehanizmu. Idealni za velike otvore, pružaju maksimalnu prilagodljivost, uštedu prostora i moderan estetski izgled."
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
