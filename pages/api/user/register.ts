import { PrismaClient } from '@prisma/client'
import { Hash } from "../../../lib/Security"

import type {
    NextApiRequest,
    NextApiResponse
} from 'next'

import {
    RegisterRequest,
    RegisterResponse,
    register_new_user_failed
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
        && body.password === body.confirmedPassword) {
        await prisma.user.create({
            data: {
                email: body.email,
                username: body.username,
                password: Hash(body.password),
            }
        })

        res.status(200).json({
            data: {

            } as RegisterResponse,
            status: 200
        });

    } else {
        res.status(401).json({
            status: 401,
            errors: [register_new_user_failed]
        })
    }
}