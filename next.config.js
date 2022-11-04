/** @type {import('next').NextConfig} */
const nextConfig = {
  
  
}

module.exports ={  
    reactStrictMode: true,
    swcMinify: true,
    env: {
        backendTest: 'http://localhost:3200/',
        backendDeploy: 'https://server42223.herokuapp.com/',
        aboutPage: "production",
        contactPage: "production",
    }
}


/*
  env: {
    backendTest: 'http://localhost:3200/',
    backendDeploy: 'https://server42223.herokuapp.com/',
    aboutPage: "production",
    contactPage: "production",
  },
*/