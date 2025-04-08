
import createNextIntlPlugin from "next-intl/plugin";

const withNextPlugin = createNextIntlPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {}


export default withNextPlugin(nextConfig)

// import type { NextConfig } from 'next'
 
// const nextConfig: NextConfig = {
//   /* config options here */
// }
 
// export default nextConfig