//const backend = process.env.backendTest;
/*
import { serialize, CookieSerializeOptions } from 'cookie'
import { NextApiResponse } from 'next' 


const res = NextApiResponse ;
const options= CookieSerializeOptions({
  httpOnly: true,
  secure: process.env.NODE_ENV !== 'development',
  sameSite: 'strict',
  maxAge: 60 * 60 * 8,
  path: '/',
})

export const setCookie = (res, name, value, options) => {
  const stringValue = typeof value === 'object' ? 'j:' + JSON.stringify(value) : String(value)
  if ('maxAge' in options) {
    options.expires = new Date(Date.now() + options.maxAge)
    options.maxAge /= 1000
  }
  res.setHeader('Set-Cookie', serialize(name, String(stringValue), options))
}

*/
//const backend = "https://server42223.herokuapp.com/";
//const backend = "http://localhost:3200/";
const backend = process.env.backendTest;
export default backend;