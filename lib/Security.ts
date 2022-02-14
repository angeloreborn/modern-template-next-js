import bcrypt from 'bcrypt';
import jwt, { JwtPayload, VerifyErrors } from 'jsonwebtoken';
import env from '../environment.config.json'

const salt_rounds = 10;

export function Hash(plainText: string) : string{
    return bcrypt.hashSync(plainText, salt_rounds);
}

export function Compare(plainText: string, hash: string) : Boolean{
    return bcrypt.compareSync(plainText, hash);
}

export function Sign(claims : any, expiresInSeconds: number) : string | null{
    return jwt.sign(claims, env.SECURITY.RSA_256_KEY_PRIVATE, {expiresIn : expiresInSeconds});
}

export function Decode(token : string | null) : string | JwtPayload | null{
    if (!token) return null;
    return jwt.decode(token);
}

export function Verify(token: string | null) : JwtPayload | null{
    if (!token) return null;
    jwt.verify(token, env.SECURITY.RSA_256_KEY_PRIVATE, function(err, decoded) {
        if (err) return null;
        return decoded;
    })
    return null;
}