import MainLayout from "@/components/layout/MainLayout";
import CategoryHero from "@/components/ui/CategoryHero";
import Gallery from "@/components/ui/Gallery";
import Overview from "@/components/ui/Overview";
// import CategoryBox from "@/components/ui/CategoryBox";

import { aluklipProzoriProducts, aluProzoriProducts, pvcProzoriProducts } from "@/data";

export default function Prozori() {
  return (
    <MainLayout color="">
      <main>
        <CategoryHero
          heading="Tehnoplast prozori"
          description="U ponudi imamo ALU, PVC i ALU-KLIP prozore, koji kombinuju kvalitetne materijale i moderni dizajn za maksimalnu funkcionalnost i udobnost."
          image="/images/midjoruney/prozor1.jpg"
        />

        <Overview
          accord={false}
          accordData={null}
          btn={false}
          title="Aluminijumski prozori"
          subtitle="Naši proizvodi u izgradnji nosivih konstrukcija i u svim vrstama ograda, kako u industrijskom tako i u privatnom sektoru."
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
          title="PVC prozori"
          subtitle="Naši proizvodi u izgradnji nosivih konstrukcija i u svim vrstama ograda, kako u industrijskom tako i u privatnom sektoru."
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
          title="Alu klip prozori"
          subtitle="Naši proizvodi u izgradnji nosivih konstrukcija i u svim vrstama ograda, kako u industrijskom tako i u privatnom sektoru."
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
