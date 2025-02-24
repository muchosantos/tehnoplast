// import { getRequestConfig } from "next-intl/server";
// import { notFound } from "next/navigation";
// import { locales, defaultLocale } from "./config"; // ✅ Uvozimo podržane jezike

// export default getRequestConfig(async ({ requestLocale }) => {
//   // Sačekaj `requestLocale`
//   let locale = await requestLocale;

//   // Ako `locale` nije validan, koristi `defaultLocale`
//   if (!locale || !locales.includes(locale as (typeof locales)[number])) {
//     locale = defaultLocale;
//   }

//   // Ako ni podrazumevani jezik nije validan, prijavi 404
//   if (!locales.includes(locale as (typeof locales)[number])) {
//     return notFound();
//   }

//   return {
//     locale: locale as (typeof locales)[number], // Ispravan TypeScript tip
//     messages: (await import(`./messages/${locale}.json`)).default,
//   };
// });
