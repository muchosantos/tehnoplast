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

export default function SistemiOstakljivanja() {
  return (
    <MainLayout color="">
      <main>
        <CategoryHero
          heading="Sistemi ostakljivanja"
          description="Eralux rešenja kombinuju moderan dizajn, visok nivo sigurnosti, funkcionalnost i estetsku perfekciju, prilagođena vašim potrebama."
          image="/images/midjoruney/ostakljivanje.jpg"
        />

        <Overview
          accord={false}
          accordData={null}
          btn={false}
          title="Giljotina stakla"
          subtitle="Sa nizom opcija za prilagođavanje, možete birati između različitih vrsta stakla i Sa nizom opcija za prilagođavanje, možete birati između različitih vrsta stakla i konfiguracija otvaranja, uključujući dizajne sa 2, 3 ili 4 krila. Ovaj svestrani sistem je idealan za stambene, komercijalne i spoljne prostore, nudeći i praktičnost i stil."
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
          title="Termo giljotina stakla"
          subtitle="Naš najmoderniji sistem giljotinskog stakla kombinuje elegantne aluminijumske profile sa visokokvalitetnim staklom, pružajući savremeno i funkcionalno rešenje za svaki prostor. Ovaj potpuno automatski sistem izdvaja se kao jedan od najnovijih i najnaprednijih na tržištu, dizajniran sa inovativnim karakteristikama koje prioritet stavljaju na estetiku i praktičnost."
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
          title="Klizno staklo"
          subtitle="Naš Klizni Sistemi za Stakla nudi besprekorno spajanje praktičnosti i estetike, dizajniran da transformiše vaš prostor, pružajući nesmetan pogled. Sistem se klizi bez napora duž izdržljivih šina, olakšavajući otvaranje ili zatvaranje, dok njegov elegantan dizajn osigurava moderan i čist vizuelni dojam."
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
          title="Klizno sklopivo staklo"
          subtitle="Naš Klizni i Sklopivi Sistem Krila nudi maksimalnu fleksibilnost i optimizaciju prostora, omogućavajući vam da bez napora otvorite svoj prostor. Krila se glatko pomeraju na šinama i sklopljena uredno ostaju sa strane—bilo levo, desno, ili obe strane—dajući vam potpunu kontrolu nad količinom otvorenog prostora."
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
          title="Interni stakleni sistemi"
          subtitle="Naši napredni sistemi za staklenje dizajnirani su sa fokusom na unutrašnju upotrebu, dok takođe omogućavaju i spoljne primene. Ovi sistemi kombinuju modernu tehnologiju i elegantan dizajn, pružajući sofisticiran, minimalistički izgled."
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
          title="Arhitektonska roletna"
          subtitle="Naš Savremeni Sistem Roleta od Polikarbonata nudi sofisticirano rešenje za maksimalno korišćenje funkcionalnosti vaših životnih prostora, zimskih vrtova i terasa. Dizajniran sa transparentnim polikarbonatnim pločama i izdržljivim aluminijumskim komponentama, ovaj sistem omogućava vam da stvorite zaštićen, ali otvoren prostor, bez žrtvovanja prirodne svetlosti ili pogleda."
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
          title="Zip zavesa"
          subtitle="Naš Automatski ZIP Sistem Zavesa nudi savršen spoj stila i funkcionalnosti za spoljašnju i unutrašnju primenu. Napravljen od visokokvalitetnih tkanina i naprednih elektronskih komponenata, ovaj sistem je dizajniran da pruži besprekornu senku, dok istovremeno poboljšava estetski izgled svakog prostora."
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
