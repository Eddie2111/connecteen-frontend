// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'John Doe' })
}

export async function getServerSideProps({ req, res }) {
  const body = JSON.parse(req.body)
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  )

  return {
    props: {},
  }
}


export function handleRequest(req, res) {
  if (req.method !== 'POST') {
    res.status(405).send({ message: 'Only POST requests allowed' })
    return
  }

  // not needed in NextJS v12+
  const body = JSON.parse(req.body)

  // the rest of your code
  if (req.method === 'POST') {
    const blob =  { 
      message: 'POST request complete',
      body: body,
      accessToken: "2143ax_CRX-32Z",
      refreshToken: "2143ax_CRX-64x", 
  };
    res.send(JSON.stringify(blob));
  }
}
