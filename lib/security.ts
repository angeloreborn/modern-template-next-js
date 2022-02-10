import bcrypt from 'bcrypt';
import jwt, { JwtPayload, VerifyErrors } from 'jsonwebtoken';
import 'dotenv/config'
const salt_rounds = 10;

export function Hash(plainText: string) : string{
    return bcrypt.hashSync(plainText, salt_rounds);
}

export function Compare(plainText: string, hash: string) : Boolean{
    return bcrypt.compareSync(plainText, hash);
}

export function Sign(claims : any, expiresInSeconds: number) : string | null{
    var privateKey = process.env.RSA_256_PRIVATE_KEY;

    if(privateKey){
        return jwt.sign(claims, privateKey, {expiresIn : expiresInSeconds});
    }

    return null;
}

export function Verify(token: string) : JwtPayload | VerifyErrors | null{
    var privateKey = process.env.RSA_256_PRIVATE_KEY;

    if (privateKey){
        jwt.verify(token, privateKey, function(err, decoded) {
            if (err) return err;
            return decoded;
        })
    }

    return null;
}