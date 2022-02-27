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
  Compare,
  Hash,
  Sign,
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


  if (body.username && body.password) {
    let user = await prisma.user.findFirst({
      where: {
        username: body.username
      }
    })
    if (user) {
      let authorize = Compare(body.password, user.password);
      if (authorize === true) {
        res.status(200).json({
          data: {
            token: Sign({
              role: user.role
            }, 60 * 60 * 24 * 2)
          } as AuthorizeResponse,
          status: 200
        });
      }
    }
  } else {
    if (!body.username || !body.password) {
      res.status(400).json({
        errors: [invalid_body],
        status: 400
      });
    }
  }

  res.status(401).json({
    errors: [invalid_credentials],
    status: 401
  });
}
