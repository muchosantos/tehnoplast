import {
  BoxProps,
  Category,
  Products,
  ProductsProps,
  VrataProducts,
} from "./types/products";

const izrada: Category[] = [
  {
    category: "Prozori",
    link: "/prozori",
    description:
      "U ponudi imamo ALU, PVC i ALU-KLIP prozore, koji kombinuju kvalitetne materijale i moderni dizajn za maksimalnu funkcionalnost i udobnost.",
    items: [
      {
        title: "Aluminijumski prozori",
        list: [
          "Obrada najsavremenijim metodama",
          "Precizno sečenje",
          "Vrhunska završna estetika",
          "Dugotrajna zaštita",
        ],
      },
      {
        title: "PVC prozori",
        list: [
          "Napredna obrada",
          "Precizno oblikovanje",
          "Dug vek trajanja",
          "Besprekorna završna obrada",
        ],
      },
      {
        title: "Alu-klip prozori",
        list: [
          "Kombinacija aluminijuma i PVC-a",
          "Precizna obrada",
          "Elegantan dizajn",
          "Dugotrajna otpornost",
        ],
      },
    ],
  },
  {
    category: "Vrata",
    link: "/vrata",
    description:
      "Nudimo ALU, PVC i vrata sa skrivenim krilom, koja spajaju vrhunske materijale i moderan dizajn, pružajući visoku sigurnost, funkcionalnost i estetiku.",
    items: [
      {
        title: "Aluminijumska vrata",
        list: [
          "Obrada najsavremenijim metodama",
          "Precizno sečenje",
          "Vrhunska završna estetika",
        ],
      },
      {
        title: "PVC vrata",
        list: ["Napredna obrada", "Precizno oblikovanje", "Dug vek trajanja"],
      },
      {
        title: "Skriveno krilo - sistemi",
        list: ["Precizna obrada", "Elegantan dizajn", "Dugotrajna otpornost"],
      },
    ],
  },
  {
    category: "Sistemi ostakljivanja",
    link: "/sistemi-ostakljivanja",
    description:
      "Eralux rešenja kombinuju moderan dizajn, visok nivo sigurnosti, funkcionalnost i estetsku perfekciju, prilagođena vašim potrebama.",
    items: [
      {
        title: "Giljotina stakla",
        list: ["Obrada najsavremenijim metodama", "Precizno sečenje"],
      },
      {
        title: "Termo giljotina stakla",
        list: ["Obrada najsavremenijim metodama"],
      },
      {
        title: "Klizna stakla",
        list: ["Obrada najsavremenijim metodama"],
      },
      {
        title: "Sklopiva stakla",
        list: ["Obrada najsavremenijim metodama"],
      },
      {
        title: "Klizno sklopivo staklo",
        list: ["Obrada najsavremenijim metodama"],
      },
      {
        title: "Interni stakleni sistem",
        list: ["Obrada najsavremenijim metodama"],
      },
      {
        title: "Arhitektonska roletna",
        list: ["Obrada najsavremenijim metodama"],
      },
      {
        title: "Zip zavesa",
        list: ["Obrada najsavremenijim metodama"],
      },
      {
        title: "Unutrasnja zavesa",
        list: ["Obrada najsavremenijim metodama"],
      },
    ],
  },
  {
    category: "Fasade",
    link: "/fasade",
    description:
      "Izdržljive, energetski efikasne i estetski prilagodljive, naše fasade pružaju dugotrajnu zaštitu i moderan izgled svakom objektu.",
    items: [
      {
        title: "Staklene fasade",
        list: [
          "Obrada najsavremenijim metodama",
          "Precizno sečenje",
          "Vrhunska završna estetika",
        ],
      },
      {
        title: "Element fasade",
        list: [
          "Obrada najsavremenijim metodama",
          "Precizno sečenje",
          "Vrhunska završna estetika",
        ],
      },
      {
        title: "Alu-bond fasade",
        list: [
          "Obrada najsavremenijim metodama",
          "Precizno sečenje",
          "Vrhunska završna estetika",
        ],
      },
      {
        title: "Ventilirajuce fasade",
        list: [
          "Obrada najsavremenijim metodama",
          "Precizno sečenje",
          "Vrhunska završna estetika",
        ],
      },
    ],
  },
  {
    category: "Pergole",
    link: "/pergole",
    description:
      "Savršeno rešenje za zaštitu od sunca i kiše, naše pergole spajaju funkcionalnost i moderan dizajn, pružajući udobnost i eleganciju u svakom eksterijeru.",
    items: [
      {
        title: "Tekstilna pergola",
        list: [
          "Obrada najsavremenijim metodama",
          "Precizno sečenje",
          "Vrhunska završna estetika",
        ],
      },
      {
        title: "Bioklimatska pergola",
        list: [
          "Obrada najsavremenijim metodama",
          "Precizno sečenje",
          "Vrhunska završna estetika",
        ],
      },
      {
        title: "Stakleni krov",
        list: [
          "Obrada najsavremenijim metodama",
          "Precizno sečenje",
          "Vrhunska završna estetika",
        ],
      },
    ],
  },
  {
    category: "Klizni sistemi",
    link: "/klizni-sistemi",
    description:
      "Naši klizni sistemi, uključujući podizno-klizne, uskočno-klizne, klasične i akordion sisteme, pružaju maksimalnu funkcionalnost, elegantan dizajn i optimalnu iskorišćenost prostora.",
    items: [
      {
        title: "Podizno-klizni",
        list: ["Obrada najsavremenijim metodama", "Precizno sečenje"],
      },
      {
        title: "Uskočno-klizni",
        list: ["Napredna obrada"],
      },
      {
        title: "Klasično-klizni",
        list: ["Kombinacija aluminijuma i PVC-a", "Precizna obrada"],
      },
      {
        title: "Akordion sistemi",
        list: ["Kombinacija aluminijuma i PVC-a", "Precizna obrada"],
      },
    ],
  },
  {
    category: "Garažna vrata",
    link: "/garazna-vrata",
    description:
      "Garažna vrata predstavljaju idealno rešenje za sigurnost, funkcionalnost i estetiku vašeg prostora. Kombinuju visokokvalitetne materijale sa modernim mehanizmima za dugotrajnu upotrebu i pouzdanost.",
    items: [
      {
        title: "Rolo vrata",
        list: [
          "Kompaktno i praktično rešenje",
          "Sistem otvaranja prema gore i mogućnošću automatizacije",
        ],
      },
      {
        title: "Segmentna vrata",
        list: [
          "Robusna i termoizolaciona opcija",
          "Elegantan dizajn",
          "Prilagođen svim vrstama objekata",
        ],
      },
    ],
  },
  {
    category: "Ograde i gelenderi",
    link: "/ograde-i-gelenderi",
    description:
      "Ograde i gelenderi su savršeno rešenje za sigurnost, estetiku i funkcionalnost vašeg prostora. Spoj visokokvalitetnih materijala i savremenog dizajna osigurava dugotrajnost, stabilnost i elegantan izgled.",
    items: [{ title: "Pogledajte naše radove", list: [] }],
  },
  {
    category: "Prateća oprema",
    link: "/prateca-oprema",
    description:
      "Prateća oprema omogućava dodatnu zaštitu, funkcionalnost i udobnost, prilagođavajući vaše prozore i vrata savremenim potrebama.",
    items: [
      {
        title: "Komarnici",
        list: [
          "Efikasna zaštita od insekata",
          "Dostupna u fiksnim, rolo, pliše i u varijantama američkih vrata.",
        ],
      },
      {
        title: "Zaštita od sunca",
        list: ["Spoljnja", "Termo"],
      },
      {
        title: "Sanitarne pregrade",
        list: [],
      },
    ],
  },
];

const proces: Category[] = [
  {
    category: "1. Office Contact",
    link: "",

    description:
      "Naša strategija omogućava optimizaciju komunikacije, prilagođavanje poslovnim potrebama i usklađivanje sa vašim brendom. Kreiranjem funkcionalnih i estetski usklađenih rešenja, pomažemo vam da ostvarite bolju povezanost sa klijentima, povećate produktivnost i ojačate prepoznatljivost na tržištu.",
    items: [
      {
        title: "Kontakt",
        list: ["+381 62 466 555", "info@tehnoplast.co.rs"],
      },
      {
        title: "Office",
        list: ["Kosovskih junaka 20, 34220 Lapovo, Srbija"],
      },
    ],
  },
  {
    category: "2. Uzimanje mera",
    link: "",
    description:
      "Precizno merenje i stručne konsultacije za savršeno prilagođena rešenja.",
    items: [
      {
        title: "Planiranje prostora",
        list: [
          "Analiza potreba i optimizacija radnog okruženja",
          "Definisanje ključnih elemenata kancelarijskog prostora",
          "Razumevanje korisničkih zahteva i poslovne dinamike",
          "Postavljanje strateških ciljeva za efikasnu organizaciju",
        ],
      },
      {
        title: "Dizajn i konsultacije",
        list: [
          "Kreiranje funkcionalnog i estetski prilagođenog enterijera",
          "Optimizacija komunikacionih kanala i kontakt tačaka",
          "Razvoj modularnih i prilagodljivih radnih jedinica",
        ],
      },
    ],
  },
  {
    category: "3. Davanje ponuda",
    link: "",
    description:
      "Fokusiramo se na tačnost, fleksibilnost i estetsku prezentaciju kako bismo omogućili lako razumevanje i donošenje odluka.",
    items: [
      {
        title: "Proces kreiranja ponude",
        list: [
          "Analiza zahteva i definisanje ključnih parametara",
          "Strateško oblikovanje ponude u skladu sa poslovnim ciljevima",
          "Jasno strukturisani detalji i tehničke specifikacije",
        ],
      },
      {
        title: "Prezentacija i prilagođavanje",
        list: [
          "Vizuelno atraktivna i profesionalno oblikovana dokumentacija",
          "Transparentnost u cenama, rokovima i uslovima saradnje",
          "Mogućnost prilagođavanja ponude prema potrebama klijenta",
        ],
      },
    ],
  },
  {
    category: "4. Izrada stolarije",
    link: "",
    description:
      "Naš proces proizvodnje garantuje dugotrajnost, funkcionalnost i estetiku, uz prilagođavanje specifičnim zahtevima klijenata. Koristimo kvalitetne materijale i savremene metode obrade kako bismo obezbedili stolariju koja ispunjava najviše standarde.",
    items: [
      {
        title: "Proces izrade",
        list: [
          "Prilagođavanje dimenzija i tehničkih specifikacija",
          "Korišćenje visokokvalitetnih materijala i precizna obrada",
          "Testiranje izdržljivosti i završna dorada",
        ],
      },
      {
        title: "Dizajn i funkcionalnost",
        list: [
          "Estetski usklađeni detalji i moderni sistemi otvaranja",
          "Optimizacija izolacije i energetske efikasnosti",
          "Fleksibilnost u izboru boja, završnih obrada i dodatnih opcija",
        ],
      },
    ],
  },
  {
    category: "5. Transport i ugradnja",
    link: "",
    description:
      "Naš tim osigurava sigurno dopremanje i preciznu montažu, uz poštovanje svih tehničkih standarda i specifičnih zahteva klijenata. Efikasnost, pažnja prema detaljima i minimalno ometanje prostora garantuju brzo i kvalitetno izvođenje radova.",
    items: [
      {
        title: "Siguran transport",
        list: [
          "Pažljivo pakovanje i zaštita elemenata",
          "Pravovremena isporuka na željenu lokaciju",
          "Pridržavanje svih logističkih i sigurnosnih protokola",
        ],
      },
      {
        title: "Profesionalna ugradnja",
        list: [
          "Precizno nivelisanje i postavljanje stolarije",
          "Osiguravanje optimalne izolacije i funkcionalnosti",
          "Završi radovi i provera ispravnosti pre predaje klijentu",
        ],
      },
    ],
  },
];

const prozori: Products[] = [
  {
    title: "Alu prozori",
    description:
      "Obrađeni najsavremenijim metodama, naši prozori odlikuju se preciznim sečenjem, vrhunskom estetikom i dugotrajnom zaštitom.",
    btnText: "Pogledajte naše radove",
    btnLink: "/prozori/alu-prozori",
    image: "/images/test/test2.png",
  },
  {
    title: "PVC prozori",
    description:
      "PVC prozori nude naprednu obradu, precizno oblikovanje, dug vek trajanja i besprekornu završnu obradu.",
    btnText: "Pogledajte naše radove",
    btnLink: "/prozori/pvc-prozori",
    image: "/images/test/test2.png",
  },
  {
    title: "Alu-klip prozori",
    description:
      "Alu-klip prozori kombinuju aluminijum i PVC, nudeći preciznu obradu, elegantan dizajn i dugotrajnu otpornost.",
    btnText: "Pogledajte naše radove",
    btnLink: "/prozori/aluklip-prozori",
    image: "/images/test/test2.png",
  },
];

const vrataSK: VrataProducts[] = [
  {
    title: "SK 01",
    imageSrc: "/images/vrata/sk01.png",
  },
  {
    title: "SK 02",
    imageSrc: "/images/vrata/sk02.png",
  },
  {
    title: "SK 03",
    imageSrc: "/images/vrata/sk03.png",
  },
  {
    title: "SK 04",
    imageSrc: "/images/vrata/sk04.png",
  },
  {
    title: "SK 05",
    imageSrc: "/images/vrata/sk05.png",
  },
  {
    title: "SK 06",
    imageSrc: "/images/vrata/sk06.png",
  },
  {
    title: "SK 07",
    imageSrc: "/images/vrata/sk07.png",
  },
  {
    title: "SK 08",
    imageSrc: "/images/vrata/sk08.png",
  },
  {
    title: "SK 09",
    imageSrc: "/images/vrata/sk09.png",
  },
  {
    title: "SK 10",
    imageSrc: "/images/vrata/sk10.png",
  },
  {
    title: "SK 11",
    imageSrc: "/images/vrata/sk11.png",
  },
  {
    title: "SK 12",
    imageSrc: "/images/vrata/sk12.png",
  },
  {
    title: "SK 13",
    imageSrc: "/images/vrata/sk13.png",
  },
  {
    title: "SK 14",
    imageSrc: "/images/vrata/sk14.png",
  },
  {
    title: "SK 15",
    imageSrc: "/images/vrata/sk15.png",
  },
  {
    title: "SK 16",
    imageSrc: "/images/vrata/sk16.png",
  },
  {
    title: "SK 17",
    imageSrc: "/images/vrata/sk17.png",
  },
  {
    title: "SK 18",
    imageSrc: "/images/vrata/sk18.png",
  },
  {
    title: "SK 19",
    imageSrc: "/images/vrata/sk19.png",
  },
  {
    title: "SK 20",
    imageSrc: "/images/vrata/sk20.png",
  },
];

const vrataAlu: VrataProducts[] = [
  {
    title: "IN 01",
    imageSrc: "/images/vrata/in01.png",
  },
  {
    title: "IN 02",
    imageSrc: "/images/vrata/in02.png",
  },
  {
    title: "IN 03",
    imageSrc: "/images/vrata/in03.png",
  },
  {
    title: "IN 04",
    imageSrc: "/images/vrata/in04.png",
  },
  {
    title: "IN 05",
    imageSrc: "/images/vrata/in05.png",
  },
  {
    title: "IN 06",
    imageSrc: "/images/vrata/in06.png",
  },
  {
    title: "IN 07",
    imageSrc: "/images/vrata/in07.png",
  },
  {
    title: "IN 08",
    imageSrc: "/images/vrata/in08.png",
  },
  {
    title: "IN 09",
    imageSrc: "/images/vrata/in09.png",
  },
  {
    title: "IN 10",
    imageSrc: "/images/vrata/in10.png",
  },
  {
    title: "IN 11",
    imageSrc: "/images/vrata/in11.png",
  },
  {
    title: "IN 12",
    imageSrc: "/images/vrata/in12.png",
  },
  {
    title: "IN 13",
    imageSrc: "/images/vrata/in13.png",
  },
  {
    title: "IN 14",
    imageSrc: "/images/vrata/in14.png",
  },
  {
    title: "IN 15",
    imageSrc: "/images/vrata/in15.png",
  },
  {
    title: "IN 16",
    imageSrc: "/images/vrata/in16.png",
  },
  {
    title: "IN 17",
    imageSrc: "/images/vrata/in17.png",
  },
  {
    title: "IN 18",
    imageSrc: "/images/vrata/in18.png",
  },
  {
    title: "IN 19",
    imageSrc: "/images/vrata/in19.png",
  },
  {
    title: "IN 20",
    imageSrc: "/images/vrata/in20.png",
  },
  {
    title: "IN 21",
    imageSrc: "/images/vrata/in21.png",
  },
  {
    title: "IN 22",
    imageSrc: "/images/vrata/in22.png",
  },
  {
    title: "IN 23",
    imageSrc: "/images/vrata/in23.png",
  },
  {
    title: "IN 24",
    imageSrc: "/images/vrata/in24.png",
  },
  {
    title: "IN 25",
    imageSrc: "/images/vrata/in25.png",
  },
  {
    title: "IN 26",
    imageSrc: "/images/vrata/in26.png",
  },
  {
    title: "IN 27",
    imageSrc: "/images/vrata/in27.png",
  },
  {
    title: "IN 28",
    imageSrc: "/images/vrata/in28.png",
  },
  {
    title: "IN 29",
    imageSrc: "/images/vrata/in29.png",
  },
  {
    title: "IN 30",
    imageSrc: "/images/vrata/in30.png",
  },
  {
    title: "IN 31",
    imageSrc: "/images/vrata/in31.png",
  },
  {
    title: "IN 32",
    imageSrc: "/images/vrata/in32.png",
  },
  ...Array.from({ length: 30 }, (_, i) => ({
    title: `Alu ${String(i + 1).padStart(2, "0")}`,
    imageSrc: `/images/vrata/al${String(i + 1).padStart(2, "0")}.png`,
  })),
];

const kontakt: Category[] = [
  {
    category: "Tehnoplast Lapovo",
    link: "",

    description:
      "Naša strategija omogućava optimizaciju komunikacije, prilagođavanje poslovnim potrebama i usklađivanje sa vašim brendom. Kreiranjem funkcionalnih i estetski usklađenih rešenja, pomažemo vam da ostvarite bolju povezanost sa klijentima, povećate produktivnost i ojačate prepoznatljivost na tržištu.",
    items: [
      {
        title: "Kontakt",
        list: ["+381 62 466 555", "office@tehnoplast.co.rs"],
      },
      {
        title: "Office",
        list: ["Kosovskih junaka 20, 34220 Lapovo, Srbija"],
      },
    ],
  },
  {
    category: "Tehnoplast Finansije",
    link: "",

    description:
      "Naša strategija omogućava optimizaciju komunikacije, prilagođavanje poslovnim potrebama i usklađivanje sa vašim brendom. Kreiranjem funkcionalnih i estetski usklađenih rešenja, pomažemo vam da ostvarite bolju povezanost sa klijentima, povećate produktivnost i ojačate prepoznatljivost na tržištu.",
    items: [
      {
        title: "Kontakt",
        list: ["+381 69 466 555", "finansije@tehnoplast.co.rs"],
      },
      {
        title: "Office",
        list: ["Kosovskih junaka 20, 34220 Lapovo, Srbija"],
      },
    ],
  },
  {
    category: "Tehnoplast Požarevac",
    link: "",

    description:
      "Naša strategija omogućava optimizaciju komunikacije, prilagođavanje poslovnim potrebama i usklađivanje sa vašim brendom. Kreiranjem funkcionalnih i estetski usklađenih rešenja, pomažemo vam da ostvarite bolju povezanost sa klijentima, povećate produktivnost i ojačate prepoznatljivost na tržištu.",
    items: [
      {
        title: "Kontakt",
        list: ["+381 62 159 9173", "pozarevac@tehnoplast.co.rs"],
      },
      {
        title: "Office",
        list: ["Nemanjina, 12000 Požarevac, Srbija"],
      },
    ],
  },
  {
    category: "Krefeld Diesseldorf, Germany",
    link: "",

    description:
      "Naša strategija omogućava optimizaciju komunikacije, prilagođavanje poslovnim potrebama i usklađivanje sa vašim brendom. Kreiranjem funkcionalnih i estetski usklađenih rešenja, pomažemo vam da ostvarite bolju povezanost sa klijentima, povećate produktivnost i ojačate prepoznatljivost na tržištu.",
    items: [
      {
        title: "Kontakt",
        list: ["+381 62 159 9173", "pozarevac@tehnoplast.co.rs"],
      },
      {
        title: "Office",
        list: ["Krefeld Diesseldorf, Germany"],
      },
    ],
  },
];

export { izrada, proces, prozori, vrataSK, vrataAlu, kontakt };

export const sistemiOstakljivanja: BoxProps[] = [
  {
    title: "Giljotina stakla",
    subititle:
      "Sa nizom opcija za prilagođavanje, možete birati između različitih vrsta stakla i konfiguracija otvaranja, uključujući dizajne sa 2, 3 ili 4 krila. Ovaj svestrani sistem je idealan za stambene, komercijalne i spoljne prostore, nudeći i praktičnost i stil.",
  },
  {
    title: "Termo giljotina stakla",
    subititle:
      "Idealno za stambene i komercijalne primene, naš sistem giljotinskog stakla pruža savršen balans dizajna, funkcionalnosti i performansi. unapredite svoj prostor sa najnovijim i najefikasnijim rešenjem dostupnim danas.",
  },
  {
    title: "Klizna stakla",
    subititle:
      "Sistem se klizi bez napora duž izdržljivih šina, olakšavajući otvaranje ili zatvaranje, dok njegov elegantan dizajn osigurava moderan i čist vizuelni dojam.",
  },
  {
    title: "Sklopiva stakla",
    subititle:
      "Dizajniran sa estetski prijatnim aluminijumskim okvirom, ovaj sistem je savršen za stvaranje arhitektonskih balkona, terasa i zimskih vrtova koji se besprekorno uklapaju u okolinu. Sa različitim opcijama donjih profila, možete prilagoditi sistem svojim specifičnim potrebama, održavajući čist i moderan izgled.",
  },
  {
    title: "Klizno sklopivo staklo",
    subititle:
      "Idealno za svakog ko traži sofisticiran, fleksibilan sistem stakla sa modernim karakteristikama, naš sistem kliznog i savijenog stakla postavlja novi standard u dizajnu i praktičnosti.",
  },
  {
    title: "Interni stakleni sistemi",
    subititle:
      "Sa svestranim opcijama klizanja i otvaranja, ovi sistemi su jednako praktični koliko i elegantni, čineći ih savršenim rešenjem za stambene i komercijalne prostore.",
  },
  {
    title: "Arhitektonska roletna",
    subititle:
      "Idealno za stvaranje udobnog zimskog vrta ili moderne terase, ovaj sistem je ultimativni način da dodate svestranost i eleganciju vašem prostoru.",
  },
  {
    title: "Zip zavesa",
    subititle:
      "Bilo da želite da unapredite svoj dom, kancelariju ili komercijalni prostor, naš Automatski ZIP Sistem Zavesa je svestrano rešenje koje je lako instalirati i pruža udobnost i sofisticiranost.",
  },
  {
    title: "Unutrašnje zavese",
    subititle:
      "Postignite idealnu ravnotežu između prirodnog svetla i privatnosti, sve dok unapređujete estetiku vašeg doma sa našim savršeno dizajniranim sistemima za zavese.",
  },
];

export const garaznaVrata: BoxProps[] = [
  {
    title: "Segmentna",
    subititle:
      "Sa nizom opcija za prilagođavanje, možete birati između različitih vrsta stakla i konfiguracija otvaranja, uključujući dizajne sa 2, 3 ili 4 krila. Ovaj svestrani sistem je idealan za stambene, komercijalne i spoljne prostore, nudeći i praktičnost i stil.",
  },
  {
    title: "Rolo",
    subititle:
      "Idealno za stambene i komercijalne primene, naš sistem giljotinskog stakla pruža savršen balans dizajna, funkcionalnosti i performansi. unapredite svoj prostor sa najnovijim i najefikasnijim rešenjem dostupnim danas.",
  },
];

export const aluProzoriProducts: ProductsProps[] = [
  {
    image: "/images/prozori/alu/p1.png",
    alt: "Tehnoplast Prozori, PVC I ALU Srbija, PVC Prozori, Aluminijumski prozori, Tehnoplast Lapovo, Stolarija Srbija",
  },
  {
    image: "/images/prozori/alu/p2.png",
    alt: "Tehnoplast Prozori, PVC I ALU Srbija, PVC Prozori, Aluminijumski prozori, Tehnoplast Lapovo, Stolarija Srbija",
  },
  {
    image: "/images/prozori/alu/p3.png",
    alt: "Tehnoplast Prozori, PVC I ALU Srbija, PVC Prozori, Aluminijumski prozori, Tehnoplast Lapovo, Stolarija Srbija",
  },
  {
    image: "/images/prozori/alu/p4.png",
    alt: "Tehnoplast Prozori, PVC I ALU Srbija, PVC Prozori, Aluminijumski prozori, Tehnoplast Lapovo, Stolarija Srbija",
  },
  {
    image: "/images/prozori/alu/p5.png",
    alt: "Tehnoplast Prozori, PVC I ALU Srbija, PVC Prozori, Aluminijumski prozori, Tehnoplast Lapovo, Stolarija Srbija",
  },
  {
    image: "/images/prozori/alu/p6.png",
    alt: "Tehnoplast Prozori, PVC I ALU Srbija, PVC Prozori, Aluminijumski prozori, Tehnoplast Lapovo, Stolarija Srbija",
  },
  {
    image: "/images/prozori/alu/p7.png",
    alt: "Tehnoplast Prozori, PVC I ALU Srbija, PVC Prozori, Aluminijumski prozori, Tehnoplast Lapovo, Stolarija Srbija",
  },
  {
    image: "/images/prozori/alu/p8.png",
    alt: "Tehnoplast Prozori, PVC I ALU Srbija, PVC Prozori, Aluminijumski prozori, Tehnoplast Lapovo, Stolarija Srbija",
  },
];

export const pvcProzoriProducts: ProductsProps[] = [
  {
    image: "/images/prozori/pvc/p1.png",
    alt: "Tehnoplast Prozori, PVC I ALU Srbija, PVC Prozori, Aluminijumski prozori, Tehnoplast Lapovo, Stolarija Srbija",
  },
  {
    image: "/images/prozori/pvc/p2.png",
    alt: "Tehnoplast Prozori, PVC I ALU Srbija, PVC Prozori, Aluminijumski prozori, Tehnoplast Lapovo, Stolarija Srbija",
  },
  {
    image: "/images/prozori/pvc/p3.png",
    alt: "Tehnoplast Prozori, PVC I ALU Srbija, PVC Prozori, Aluminijumski prozori, Tehnoplast Lapovo, Stolarija Srbija",
  },
  {
    image: "/images/prozori/pvc/p4.png",
    alt: "Tehnoplast Prozori, PVC I ALU Srbija, PVC Prozori, Aluminijumski prozori, Tehnoplast Lapovo, Stolarija Srbija",
  },
  {
    image: "/images/prozori/pvc/p5.png",
    alt: "Tehnoplast Prozori, PVC I ALU Srbija, PVC Prozori, Aluminijumski prozori, Tehnoplast Lapovo, Stolarija Srbija",
  },
  {
    image: "/images/prozori/pvc/p6.png",
    alt: "Tehnoplast Prozori, PVC I ALU Srbija, PVC Prozori, Aluminijumski prozori, Tehnoplast Lapovo, Stolarija Srbija",
  },
  {
    image: "/images/prozori/pvc/p7.png",
    alt: "Tehnoplast Prozori, PVC I ALU Srbija, PVC Prozori, Aluminijumski prozori, Tehnoplast Lapovo, Stolarija Srbija",
  },
];

export const aluklipProzoriProducts: ProductsProps[] = [
  {
    image: "/images/prozori/klip/p1.png",
    alt: "Tehnoplast Prozori, PVC I ALU Srbija, PVC Prozori, Aluminijumski prozori, Tehnoplast Lapovo, Stolarija Srbija",
  },
  {
    image: "/images/prozori/klip/p2.png",
    alt: "Tehnoplast Prozori, PVC I ALU Srbija, PVC Prozori, Aluminijumski prozori, Tehnoplast Lapovo, Stolarija Srbija",
  },
  {
    image: "/images/prozori/klip/p3.png",
    alt: "Tehnoplast Prozori, PVC I ALU Srbija, PVC Prozori, Aluminijumski prozori, Tehnoplast Lapovo, Stolarija Srbija",
  },
  {
    image: "/images/prozori/klip/p4.png",
    alt: "Tehnoplast Prozori, PVC I ALU Srbija, PVC Prozori, Aluminijumski prozori, Tehnoplast Lapovo, Stolarija Srbija",
  },
  {
    image: "/images/prozori/klip/p5.png",
    alt: "Tehnoplast Prozori, PVC I ALU Srbija, PVC Prozori, Aluminijumski prozori, Tehnoplast Lapovo, Stolarija Srbija",
  },
  {
    image: "/images/prozori/klip/p6.png",
    alt: "Tehnoplast Prozori, PVC I ALU Srbija, PVC Prozori, Aluminijumski prozori, Tehnoplast Lapovo, Stolarija Srbija",
  },
];

export const stakleneFasadeProducts: ProductsProps[] = [
  {
    image: "/images/fasade/staklene/p1.png",
    alt: "Tehnoplast Prozori, PVC I ALU Srbija, PVC Prozori, Aluminijumski prozori, Tehnoplast Lapovo, Stolarija Srbija",
  },
  {
    image: "/images/fasade/staklene/p2.png",
    alt: "Tehnoplast Prozori, PVC I ALU Srbija, PVC Prozori, Aluminijumski prozori, Tehnoplast Lapovo, Stolarija Srbija",
  },
  {
    image: "/images/fasade/staklene/p3.png",
    alt: "Tehnoplast Prozori, PVC I ALU Srbija, PVC Prozori, Aluminijumski prozori, Tehnoplast Lapovo, Stolarija Srbija",
  },
  {
    image: "/images/fasade/staklene/p4.png",
    alt: "Tehnoplast Prozori, PVC I ALU Srbija, PVC Prozori, Aluminijumski prozori, Tehnoplast Lapovo, Stolarija Srbija",
  },
  {
    image: "/images/fasade/staklene/p5.png",
    alt: "Tehnoplast Prozori, PVC I ALU Srbija, PVC Prozori, Aluminijumski prozori, Tehnoplast Lapovo, Stolarija Srbija",
  },
];

export const elementFasadeProducts: ProductsProps[] = [
  {
    image: "/images/fasade/element/p1.png",
    alt: "Tehnoplast Prozori, PVC I ALU Srbija, PVC Prozori, Aluminijumski prozori, Tehnoplast Lapovo, Stolarija Srbija",
  },
  {
    image: "/images/fasade/element/p2.png",
    alt: "Tehnoplast Prozori, PVC I ALU Srbija, PVC Prozori, Aluminijumski prozori, Tehnoplast Lapovo, Stolarija Srbija",
  },
  {
    image: "/images/fasade/element/p3.png",
    alt: "Tehnoplast Prozori, PVC I ALU Srbija, PVC Prozori, Aluminijumski prozori, Tehnoplast Lapovo, Stolarija Srbija",
  },
  {
    image: "/images/fasade/element/p4.png",
    alt: "Tehnoplast Prozori, PVC I ALU Srbija, PVC Prozori, Aluminijumski prozori, Tehnoplast Lapovo, Stolarija Srbija",
  },
  {
    image: "/images/fasade/element/p5.png",
    alt: "Tehnoplast Prozori, PVC I ALU Srbija, PVC Prozori, Aluminijumski prozori, Tehnoplast Lapovo, Stolarija Srbija",
  },
];

export const alubondFasadeProducts: ProductsProps[] = [
  {
    image: "/images/fasade/alubond/p1.png",
    alt: "Tehnoplast Prozori, PVC I ALU Srbija, PVC Prozori, Aluminijumski prozori, Tehnoplast Lapovo, Stolarija Srbija",
  },
  {
    image: "/images/fasade/alubond/p2.png",
    alt: "Tehnoplast Prozori, PVC I ALU Srbija, PVC Prozori, Aluminijumski prozori, Tehnoplast Lapovo, Stolarija Srbija",
  },
  {
    image: "/images/fasade/alubond/p3.png",
    alt: "Tehnoplast Prozori, PVC I ALU Srbija, PVC Prozori, Aluminijumski prozori, Tehnoplast Lapovo, Stolarija Srbija",
  },
  {
    image: "/images/fasade/alubond/p4.png",
    alt: "Tehnoplast Prozori, PVC I ALU Srbija, PVC Prozori, Aluminijumski prozori, Tehnoplast Lapovo, Stolarija Srbija",
  },
  {
    image: "/images/fasade/alubond/p5.png",
    alt: "Tehnoplast Prozori, PVC I ALU Srbija, PVC Prozori, Aluminijumski prozori, Tehnoplast Lapovo, Stolarija Srbija",
  },
];

export const ventilirajuceFasadeProducts: ProductsProps[] = [
  {
    image: "/images/fasade/ventilirajuce/p1.png",
    alt: "Tehnoplast Prozori, PVC I ALU Srbija, PVC Prozori, Aluminijumski prozori, Tehnoplast Lapovo, Stolarija Srbija",
  },
  {
    image: "/images/fasade/ventilirajuce/p2.png",
    alt: "Tehnoplast Prozori, PVC I ALU Srbija, PVC Prozori, Aluminijumski prozori, Tehnoplast Lapovo, Stolarija Srbija",
  },
  {
    image: "/images/fasade/ventilirajuce/p3.png",
    alt: "Tehnoplast Prozori, PVC I ALU Srbija, PVC Prozori, Aluminijumski prozori, Tehnoplast Lapovo, Stolarija Srbija",
  },
];

export const tekstilnepergoleProducts: ProductsProps[] = [
  {
    image: "/images/pergole/tekstilne/p1.png",
    alt: "Tehnoplast Prozori, PVC I ALU Srbija, PVC Prozori, Aluminijumski prozori, Tehnoplast Lapovo, Stolarija Srbija",
  },
  {
    image: "/images/pergole/tekstilne/p2.png",
    alt: "Tehnoplast Prozori, PVC I ALU Srbija, PVC Prozori, Aluminijumski prozori, Tehnoplast Lapovo, Stolarija Srbija",
  },
  {
    image: "/images/pergole/tekstilne/p3.png",
    alt: "Tehnoplast Prozori, PVC I ALU Srbija, PVC Prozori, Aluminijumski prozori, Tehnoplast Lapovo, Stolarija Srbija",
  },
  {
    image: "/images/pergole/tekstilne/p4.png",
    alt: "Tehnoplast Prozori, PVC I ALU Srbija, PVC Prozori, Aluminijumski prozori, Tehnoplast Lapovo, Stolarija Srbija",
  },
];

export const bioklimatskenepergoleProducts: ProductsProps[] = [
  {
    image: "/images/pergole/bioklimatske/p1.png",
    alt: "Tehnoplast Prozori, PVC I ALU Srbija, PVC Prozori, Aluminijumski prozori, Tehnoplast Lapovo, Stolarija Srbija",
  },
  {
    image: "/images/pergole/bioklimatske/p2.png",
    alt: "Tehnoplast Prozori, PVC I ALU Srbija, PVC Prozori, Aluminijumski prozori, Tehnoplast Lapovo, Stolarija Srbija",
  },
  {
    image: "/images/pergole/bioklimatske/p3.png",
    alt: "Tehnoplast Prozori, PVC I ALU Srbija, PVC Prozori, Aluminijumski prozori, Tehnoplast Lapovo, Stolarija Srbija",
  },
];

export const staklenikrovProducts: ProductsProps[] = [
  {
    image: "/images/pergole/krov/p1.png",
    alt: "Tehnoplast Prozori, PVC I ALU Srbija, PVC Prozori, Aluminijumski prozori, Tehnoplast Lapovo, Stolarija Srbija",
  },
  {
    image: "/images/pergole/krov/p2.png",
    alt: "Tehnoplast Prozori, PVC I ALU Srbija, PVC Prozori, Aluminijumski prozori, Tehnoplast Lapovo, Stolarija Srbija",
  },
  {
    image: "/images/pergole/krov/p3.png",
    alt: "Tehnoplast Prozori, PVC I ALU Srbija, PVC Prozori, Aluminijumski prozori, Tehnoplast Lapovo, Stolarija Srbija",
  },
  {
    image: "/images/pergole/krov/p4.png",
    alt: "Tehnoplast Prozori, PVC I ALU Srbija, PVC Prozori, Aluminijumski prozori, Tehnoplast Lapovo, Stolarija Srbija",
  },
  {
    image: "/images/pergole/krov/p5.png",
    alt: "Tehnoplast Prozori, PVC I ALU Srbija, PVC Prozori, Aluminijumski prozori, Tehnoplast Lapovo, Stolarija Srbija",
  },
];

export const podiznoklizniProducts: ProductsProps[] = [
  {
    image: "/images/klizni/podizno/p1.png",
    alt: "Tehnoplast Prozori, PVC I ALU Srbija, PVC Prozori, Aluminijumski prozori, Tehnoplast Lapovo, Stolarija Srbija",
  },
  {
    image: "/images/klizni/podizno/p2.png",
    alt: "Tehnoplast Prozori, PVC I ALU Srbija, PVC Prozori, Aluminijumski prozori, Tehnoplast Lapovo, Stolarija Srbija",
  },
  {
    image: "/images/klizni/podizno/p3.png",
    alt: "Tehnoplast Prozori, PVC I ALU Srbija, PVC Prozori, Aluminijumski prozori, Tehnoplast Lapovo, Stolarija Srbija",
  },
  {
    image: "/images/klizni/podizno/p4.png",
    alt: "Tehnoplast Prozori, PVC I ALU Srbija, PVC Prozori, Aluminijumski prozori, Tehnoplast Lapovo, Stolarija Srbija",
  },
  {
    image: "/images/klizni/podizno/p5.png",
    alt: "Tehnoplast Prozori, PVC I ALU Srbija, PVC Prozori, Aluminijumski prozori, Tehnoplast Lapovo, Stolarija Srbija",
  },
];

export const uskocnoklizniProducts: ProductsProps[] = [
  {
    image: "/images/klizni/uskocno/p1.png",
    alt: "Tehnoplast Prozori, PVC I ALU Srbija, PVC Prozori, Aluminijumski prozori, Tehnoplast Lapovo, Stolarija Srbija",
  },
  {
    image: "/images/klizni/uskocno/p2.png",
    alt: "Tehnoplast Prozori, PVC I ALU Srbija, PVC Prozori, Aluminijumski prozori, Tehnoplast Lapovo, Stolarija Srbija",
  },
  {
    image: "/images/klizni/uskocno/p3.png",
    alt: "Tehnoplast Prozori, PVC I ALU Srbija, PVC Prozori, Aluminijumski prozori, Tehnoplast Lapovo, Stolarija Srbija",
  },
  {
    image: "/images/klizni/uskocno/p4.png",
    alt: "Tehnoplast Prozori, PVC I ALU Srbija, PVC Prozori, Aluminijumski prozori, Tehnoplast Lapovo, Stolarija Srbija",
  },
];

export const klasicnoklizniProducts: ProductsProps[] = [
  {
    image: "/images/klizni/klasicno/p1.png",
    alt: "Tehnoplast Prozori, PVC I ALU Srbija, PVC Prozori, Aluminijumski prozori, Tehnoplast Lapovo, Stolarija Srbija",
  },
  {
    image: "/images/klizni/klasicno/p2.png",
    alt: "Tehnoplast Prozori, PVC I ALU Srbija, PVC Prozori, Aluminijumski prozori, Tehnoplast Lapovo, Stolarija Srbija",
  },
  {
    image: "/images/klizni/klasicno/p3.png",
    alt: "Tehnoplast Prozori, PVC I ALU Srbija, PVC Prozori, Aluminijumski prozori, Tehnoplast Lapovo, Stolarija Srbija",
  },
  {
    image: "/images/klizni/klasicno/p4.png",
    alt: "Tehnoplast Prozori, PVC I ALU Srbija, PVC Prozori, Aluminijumski prozori, Tehnoplast Lapovo, Stolarija Srbija",
  },
];

export const akordionklizniProducts: ProductsProps[] = [
  {
    image: "/images/klizni/akordion/p1.png",
    alt: "Tehnoplast Prozori, PVC I ALU Srbija, PVC Prozori, Aluminijumski prozori, Tehnoplast Lapovo, Stolarija Srbija",
  },
  {
    image: "/images/klizni/akordion/p2.png",
    alt: "Tehnoplast Prozori, PVC I ALU Srbija, PVC Prozori, Aluminijumski prozori, Tehnoplast Lapovo, Stolarija Srbija",
  },
  {
    image: "/images/klizni/akordion/p3.png",
    alt: "Tehnoplast Prozori, PVC I ALU Srbija, PVC Prozori, Aluminijumski prozori, Tehnoplast Lapovo, Stolarija Srbija",
  },
  {
    image: "/images/klizni/akordion/p4.png",
    alt: "Tehnoplast Prozori, PVC I ALU Srbija, PVC Prozori, Aluminijumski prozori, Tehnoplast Lapovo, Stolarija Srbija",
  },
];

export const segmentnaGaraznaProducts: ProductsProps[] = [
  {
    image: "/images/garazna/segment/p1.png",
    alt: "Tehnoplast Prozori, PVC I ALU Srbija, PVC Prozori, Aluminijumski prozori, Tehnoplast Lapovo, Stolarija Srbija",
  },
  {
    image: "/images/garazna/segment/p2.png",
    alt: "Tehnoplast Prozori, PVC I ALU Srbija, PVC Prozori, Aluminijumski prozori, Tehnoplast Lapovo, Stolarija Srbija",
  },
  {
    image: "/images/garazna/segment/p3.png",
    alt: "Tehnoplast Prozori, PVC I ALU Srbija, PVC Prozori, Aluminijumski prozori, Tehnoplast Lapovo, Stolarija Srbija",
  },
  {
    image: "/images/garazna/segment/p4.png",
    alt: "Tehnoplast Prozori, PVC I ALU Srbija, PVC Prozori, Aluminijumski prozori, Tehnoplast Lapovo, Stolarija Srbija",
  },
];

export const roloGaraznaProducts: ProductsProps[] = [
  {
    image: "/images/garazna/rolo/p1.png",
    alt: "Tehnoplast Prozori, PVC I ALU Srbija, PVC Prozori, Aluminijumski prozori, Tehnoplast Lapovo, Stolarija Srbija",
  },
  {
    image: "/images/garazna/rolo/p2.png",
    alt: "Tehnoplast Prozori, PVC I ALU Srbija, PVC Prozori, Aluminijumski prozori, Tehnoplast Lapovo, Stolarija Srbija",
  },
  {
    image: "/images/garazna/rolo/p3.png",
    alt: "Tehnoplast Prozori, PVC I ALU Srbija, PVC Prozori, Aluminijumski prozori, Tehnoplast Lapovo, Stolarija Srbija",
  },
  {
    image: "/images/garazna/rolo/p4.png",
    alt: "Tehnoplast Prozori, PVC I ALU Srbija, PVC Prozori, Aluminijumski prozori, Tehnoplast Lapovo, Stolarija Srbija",
  },
];

export const ogradeProducts: ProductsProps[] = [
  {
    image: "/images/ograde/p1.png",
    alt: "Tehnoplast Prozori, PVC I ALU Srbija, PVC Prozori, Aluminijumski prozori, Tehnoplast Lapovo, Stolarija Srbija",
  },
  {
    image: "/images/ograde/p2.png",
    alt: "Tehnoplast Prozori, PVC I ALU Srbija, PVC Prozori, Aluminijumski prozori, Tehnoplast Lapovo, Stolarija Srbija",
  },
  {
    image: "/images/ograde/p3.png",
    alt: "Tehnoplast Prozori, PVC I ALU Srbija, PVC Prozori, Aluminijumski prozori, Tehnoplast Lapovo, Stolarija Srbija",
  },
  {
    image: "/images/ograde/p4.png",
    alt: "Tehnoplast Prozori, PVC I ALU Srbija, PVC Prozori, Aluminijumski prozori, Tehnoplast Lapovo, Stolarija Srbija",
  },
  {
    image: "/images/ograde/p5.png",
    alt: "Tehnoplast Prozori, PVC I ALU Srbija, PVC Prozori, Aluminijumski prozori, Tehnoplast Lapovo, Stolarija Srbija",
  },
  {
    image: "/images/ograde/p6.png",
    alt: "Tehnoplast Prozori, PVC I ALU Srbija, PVC Prozori, Aluminijumski prozori, Tehnoplast Lapovo, Stolarija Srbija",
  },
  {
    image: "/images/ograde/p7.png",
    alt: "Tehnoplast Prozori, PVC I ALU Srbija, PVC Prozori, Aluminijumski prozori, Tehnoplast Lapovo, Stolarija Srbija",
  },
  {
    image: "/images/ograde/p8.png",
    alt: "Tehnoplast Prozori, PVC I ALU Srbija, PVC Prozori, Aluminijumski prozori, Tehnoplast Lapovo, Stolarija Srbija",
  },
];

export const pratecaProducts: ProductsProps[] = [
  {
    image: "/images/prateca/p1.png",
    alt: "Tehnoplast Prozori, PVC I ALU Srbija, PVC Prozori, Aluminijumski prozori, Tehnoplast Lapovo, Stolarija Srbija",
  },
  {
    image: "/images/prateca/p2.png",
    alt: "Tehnoplast Prozori, PVC I ALU Srbija, PVC Prozori, Aluminijumski prozori, Tehnoplast Lapovo, Stolarija Srbija",
  },
  {
    image: "/images/prateca/p3.png",
    alt: "Tehnoplast Prozori, PVC I ALU Srbija, PVC Prozori, Aluminijumski prozori, Tehnoplast Lapovo, Stolarija Srbija",
  },
  {
    image: "/images/prateca/p4.png",
    alt: "Tehnoplast Prozori, PVC I ALU Srbija, PVC Prozori, Aluminijumski prozori, Tehnoplast Lapovo, Stolarija Srbija",
  },
  {
    image: "/images/prateca/p5.png",
    alt: "Tehnoplast Prozori, PVC I ALU Srbija, PVC Prozori, Aluminijumski prozori, Tehnoplast Lapovo, Stolarija Srbija",
  },
  {
    image: "/images/prateca/p6.png",
    alt: "Tehnoplast Prozori, PVC I ALU Srbija, PVC Prozori, Aluminijumski prozori, Tehnoplast Lapovo, Stolarija Srbija",
  },
  {
    image: "/images/prateca/p7.png",
    alt: "Tehnoplast Prozori, PVC I ALU Srbija, PVC Prozori, Aluminijumski prozori, Tehnoplast Lapovo, Stolarija Srbija",
  },
  {
    image: "/images/prateca/p8.png",
    alt: "Tehnoplast Prozori, PVC I ALU Srbija, PVC Prozori, Aluminijumski prozori, Tehnoplast Lapovo, Stolarija Srbija",
  },
  {
    image: "/images/prateca/p9.png",
    alt: "Tehnoplast Prozori, PVC I ALU Srbija, PVC Prozori, Aluminijumski prozori, Tehnoplast Lapovo, Stolarija Srbija",
  },
];

export const giljotinastaklaProducts: ProductsProps[] = [
  {
    image: "/images/sistemi/giljotina/p1.png",
    alt: "Tehnoplast Prozori, PVC I ALU Srbija, PVC Prozori, Aluminijumski prozori, Tehnoplast Lapovo, Stolarija Srbija",
  },
  {
    image: "/images/sistemi/giljotina/p2.png",
    alt: "Tehnoplast Prozori, PVC I ALU Srbija, PVC Prozori, Aluminijumski prozori, Tehnoplast Lapovo, Stolarija Srbija",
  },
  {
    image: "/images/sistemi/giljotina/p3.png",
    alt: "Tehnoplast Prozori, PVC I ALU Srbija, PVC Prozori, Aluminijumski prozori, Tehnoplast Lapovo, Stolarija Srbija",
  },
  {
    image: "/images/sistemi/giljotina/p4.png",
    alt: "Tehnoplast Prozori, PVC I ALU Srbija, PVC Prozori, Aluminijumski prozori, Tehnoplast Lapovo, Stolarija Srbija",
  },
];

export const termostaklaProducts: ProductsProps[] = [
  {
    image: "/images/sistemi/termo/p1.png",
    alt: "Tehnoplast Prozori, PVC I ALU Srbija, PVC Prozori, Aluminijumski prozori, Tehnoplast Lapovo, Stolarija Srbija",
  },
  {
    image: "/images/sistemi/termo/p2.png",
    alt: "Tehnoplast Prozori, PVC I ALU Srbija, PVC Prozori, Aluminijumski prozori, Tehnoplast Lapovo, Stolarija Srbija",
  },
  {
    image: "/images/sistemi/termo/p3.png",
    alt: "Tehnoplast Prozori, PVC I ALU Srbija, PVC Prozori, Aluminijumski prozori, Tehnoplast Lapovo, Stolarija Srbija",
  },
  {
    image: "/images/sistemi/termo/p4.png",
    alt: "Tehnoplast Prozori, PVC I ALU Srbija, PVC Prozori, Aluminijumski prozori, Tehnoplast Lapovo, Stolarija Srbija",
  },
];

export const kliznastaklaProducts: ProductsProps[] = [
  {
    image: "/images/sistemi/klizna/p1.png",
    alt: "Tehnoplast Prozori, PVC I ALU Srbija, PVC Prozori, Aluminijumski prozori, Tehnoplast Lapovo, Stolarija Srbija",
  },
  {
    image: "/images/sistemi/klizna/p2.png",
    alt: "Tehnoplast Prozori, PVC I ALU Srbija, PVC Prozori, Aluminijumski prozori, Tehnoplast Lapovo, Stolarija Srbija",
  },
  {
    image: "/images/sistemi/klizna/p3.png",
    alt: "Tehnoplast Prozori, PVC I ALU Srbija, PVC Prozori, Aluminijumski prozori, Tehnoplast Lapovo, Stolarija Srbija",
  },
];

export const sklopivastaklaProducts: ProductsProps[] = [
  {
    image: "/images/sistemi/sklopiva/p1.png",
    alt: "Tehnoplast Prozori, PVC I ALU Srbija, PVC Prozori, Aluminijumski prozori, Tehnoplast Lapovo, Stolarija Srbija",
  },
  {
    image: "/images/sistemi/sklopiva/p2.png",
    alt: "Tehnoplast Prozori, PVC I ALU Srbija, PVC Prozori, Aluminijumski prozori, Tehnoplast Lapovo, Stolarija Srbija",
  },
  {
    image: "/images/sistemi/sklopiva/p3.png",
    alt: "Tehnoplast Prozori, PVC I ALU Srbija, PVC Prozori, Aluminijumski prozori, Tehnoplast Lapovo, Stolarija Srbija",
  },
];

export const internistaklaProducts: ProductsProps[] = [
  {
    image: "/images/sistemi/interni/p1.png",
    alt: "Tehnoplast Prozori, PVC I ALU Srbija, PVC Prozori, Aluminijumski prozori, Tehnoplast Lapovo, Stolarija Srbija",
  },
  {
    image: "/images/sistemi/interni/p2.png",
    alt: "Tehnoplast Prozori, PVC I ALU Srbija, PVC Prozori, Aluminijumski prozori, Tehnoplast Lapovo, Stolarija Srbija",
  },
  {
    image: "/images/sistemi/interni/p3.png",
    alt: "Tehnoplast Prozori, PVC I ALU Srbija, PVC Prozori, Aluminijumski prozori, Tehnoplast Lapovo, Stolarija Srbija",
  },
];

export const arhitektonskastaklaProducts: ProductsProps[] = [
  {
    image: "/images/sistemi/arhitektonska/p1.png",
    alt: "Tehnoplast Prozori, PVC I ALU Srbija, PVC Prozori, Aluminijumski prozori, Tehnoplast Lapovo, Stolarija Srbija",
  },
  {
    image: "/images/sistemi/arhitektonska/p2.png",
    alt: "Tehnoplast Prozori, PVC I ALU Srbija, PVC Prozori, Aluminijumski prozori, Tehnoplast Lapovo, Stolarija Srbija",
  },
  {
    image: "/images/sistemi/arhitektonska/p3.png",
    alt: "Tehnoplast Prozori, PVC I ALU Srbija, PVC Prozori, Aluminijumski prozori, Tehnoplast Lapovo, Stolarija Srbija",
  },
  {
    image: "/images/sistemi/arhitektonska/p4.png",
    alt: "Tehnoplast Prozori, PVC I ALU Srbija, PVC Prozori, Aluminijumski prozori, Tehnoplast Lapovo, Stolarija Srbija",
  },
  {
    image: "/images/sistemi/arhitektonska/p5.png",
    alt: "Tehnoplast Prozori, PVC I ALU Srbija, PVC Prozori, Aluminijumski prozori, Tehnoplast Lapovo, Stolarija Srbija",
  },
  {
    image: "/images/sistemi/arhitektonska/p6.png",
    alt: "Tehnoplast Prozori, PVC I ALU Srbija, PVC Prozori, Aluminijumski prozori, Tehnoplast Lapovo, Stolarija Srbija",
  },
  {
    image: "/images/sistemi/arhitektonska/p7.png",
    alt: "Tehnoplast Prozori, PVC I ALU Srbija, PVC Prozori, Aluminijumski prozori, Tehnoplast Lapovo, Stolarija Srbija",
  },
  {
    image: "/images/sistemi/arhitektonska/p8.png",
    alt: "Tehnoplast Prozori, PVC I ALU Srbija, PVC Prozori, Aluminijumski prozori, Tehnoplast Lapovo, Stolarija Srbija",
  },
  {
    image: "/images/sistemi/arhitektonska/p9.png",
    alt: "Tehnoplast Prozori, PVC I ALU Srbija, PVC Prozori, Aluminijumski prozori, Tehnoplast Lapovo, Stolarija Srbija",
  },
  {
    image: "/images/sistemi/arhitektonska/p10.png",
    alt: "Tehnoplast Prozori, PVC I ALU Srbija, PVC Prozori, Aluminijumski prozori, Tehnoplast Lapovo, Stolarija Srbija",
  },
];

export const zipstaklaProducts: ProductsProps[] = [
  {
    image: "/images/sistemi/zip/p1.png",
    alt: "Tehnoplast Prozori, PVC I ALU Srbija, PVC Prozori, Aluminijumski prozori, Tehnoplast Lapovo, Stolarija Srbija",
  },
  {
    image: "/images/sistemi/zip/p2.png",
    alt: "Tehnoplast Prozori, PVC I ALU Srbija, PVC Prozori, Aluminijumski prozori, Tehnoplast Lapovo, Stolarija Srbija",
  },
  {
    image: "/images/sistemi/zip/p3.png",
    alt: "Tehnoplast Prozori, PVC I ALU Srbija, PVC Prozori, Aluminijumski prozori, Tehnoplast Lapovo, Stolarija Srbija",
  },
  {
    image: "/images/sistemi/zip/p4.png",
    alt: "Tehnoplast Prozori, PVC I ALU Srbija, PVC Prozori, Aluminijumski prozori, Tehnoplast Lapovo, Stolarija Srbija",
  },
];
