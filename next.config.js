/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    MONGO_URI: 'mongodb+srv://kb:kbmongodbpass2338@cluster0.pshzv.mongodb.net/playDex?retryWrites=true&w=majority'
  }
}

module.exports = nextConfig
