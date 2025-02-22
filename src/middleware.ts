import createMiddleware from 'next-intl/middleware'
import { locales } from './config'


export default createMiddleware({
    locales,
    defaultLocale:'sr'
})

export const config = {
    matcher: ['/' ,'/(sr|de|fr)/:path*']
}