// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/Prisma'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    prisma.user.findUnique({
      where:{
        
      }
    })
  console.log("ok");
  res.status(200).json({ name: 'John Toe' })

}
