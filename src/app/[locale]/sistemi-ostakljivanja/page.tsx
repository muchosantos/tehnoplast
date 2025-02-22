import MainLayout from "@/components/layout/MainLayout";
import Box from "@/components/ui/Box";
import CategoryHero from "@/components/ui/CategoryHero";
import { sistemiOstakljivanja } from "@/data";

export default function SistemiOstakljivanja() {
  return (
    <MainLayout color="">
      <main>
        <CategoryHero
          heading="Sistemi ostakljivanja"
          description="Eralux rešenja kombinuju moderan dizajn, visok nivo sigurnosti, funkcionalnost i estetsku perfekciju, prilagođena vašim potrebama."
          image="/images/midjoruney/ostakljivanje.jpg"
        />

        <div className="my-20">
          <div className="wrapper flex flex-col gap-10">
            {sistemiOstakljivanja.map((item,i) => (
               <Box title={item.title} subititle={item.subititle} key={i}/>
            ))}
          </div>
        </div>
      </main>
    </MainLayout>
  );
}
