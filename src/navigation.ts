import {createNavigation} from 'next-intl/navigation'
import {locales, /* .. */} from './config'

export const {Link, redirect, usePathname, useRouter} = createNavigation({locales, /* ... */})

// ovaj code se koristi kada imamo linkove koji salju na drugacije stranice. Kako bi se zadrzao izabrani jezik pri promeni linka
// zapravo createNavigation samo dodaje prefix izabranog jezika na linkove