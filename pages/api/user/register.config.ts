export const authorizePath = "/api/user/authorize";

export async function registerUser(url: string, req: RegisterRequest | undefined){
    const res = await fetch(url, {
        method: "post",
        body: JSON.stringify(req),
    });
    return await res.json();
}

export interface RegisterRequest{
    username?: string,
    password?: string,
    confirmedPassword?: string,
    agreeTOS?: boolean,
    agreePrivacyPolicy?: boolean,
}

export interface RegisterResponse{
    token: string
}

export enum RegisterErrors{
    USERNAME_EXISTS,
    UNSAFE_PASSWORD
}