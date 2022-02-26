import { PrismaClient } from '@prisma/client'
import {Hash} from "../../../lib/Security"
const prisma = new PrismaClient()

import type { 
  NextApiRequest, 
  NextApiResponse 
} from 'next'

import { 
  RegisterRequest, 
  RegisterResponse 
} from './register.config'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<APIResponse<RegisterResponse>>
) {
  const prisma = new PrismaClient();
  let body: RegisterRequest = req.body;

  if (body.username
    && body.email
    && body.password
    && body.confirmedPassword
    && body.password === body.confirmedPassword)

  prisma.user.create({
      data : {
          email : body.email,
          username : body.username,
          password: Hash(body.password),
      }
  })
 
}