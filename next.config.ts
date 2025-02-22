
import createNextIntlPlugin from "next-intl/plugin";

const withNextPlugin = createNextIntlPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {}


export default withNextPlugin(nextConfig)