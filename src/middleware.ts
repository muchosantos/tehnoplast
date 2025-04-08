import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['sr', 'de', 'fr'],
  defaultLocale: 'sr',
});

export const config = {
  matcher: ['/', '/(sr|de|fr)/:path*'],
};