import bcrypt from 'bcrypt';

const salt_rounds = 10;

export function Hash(plainText: string) : string{
    return bcrypt.hashSync(plainText, salt_rounds);
}

export function Compare(plainText: string, hash: string) : Boolean{
    return bcrypt.compareSync(plainText, hash);
}