import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

import { 
  JwtPayload 
} from 'jsonwebtoken';

import type { 
  NextApiRequest, 
  NextApiResponse 
} from 'next'

import { 
  Verify 
} from '../../../lib/Security';

import { 
  AuthorizeRequest, 
  AuthorizeResponse, 
  invalid_body,
  invalid_credentials,
  invalid_token
} from './authorize.config'


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<APIResponse<AuthorizeResponse>>
) {
  const prisma = new PrismaClient();
  let body: AuthorizeRequest = req.body;

  if (!body.username || !body.password && body.token) {
    let tokenVerification: JwtPayload | null = Verify(body.token);
    if (tokenVerification && body.token) {
      res.status(200).json({
        data: {
          token: body.token,
        } as AuthorizeResponse,
        status: 200
      });
    }else{
      res.status(401).json({
        status: 401,
        errors: [invalid_token]
      })
    }
  } 
  
  if (!body.username || !body.password){
    res.status(400).json({
      errors: [invalid_body],
      status: 400
    });
  }

  let user = await prisma.user.findFirst({
    where: {
      username: body.token,
      password: body.password,   
    }
  })

  if (!user){
    res.status(401).json({
      errors: [invalid_credentials],
      status: 401
    });
  }

}
