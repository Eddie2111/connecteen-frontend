/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    env: {
        backendTest: 'http://localhost:3200/',
        backendDeploy: 'https://server42223.herokuapp.com/',
        aboutPage: "production",
        contactPage: "production",
      }
}

module.exports =nextConfig;


/*
  env: {
    backendTest: 'http://localhost:3200/',
    backendDeploy: 'https://server42223.herokuapp.com/',
    aboutPage: "production",
    contactPage: "production",
  },
*/
