import { NextErrorKey, NextErrorPriority } from "../../../shared/enum";

export const registerPath = "/api/user/register";

export async function registerUser(url: string, req: RegisterRequest | undefined){
    const res = await fetch(url, {
        method: "post",
        body: JSON.stringify(req),
    });
    return await res.json();
}

export interface RegisterRequest{
    email?: string,
    username?: string,
    password?: string,
    confirmedPassword?: string,
    agreeTOS?: boolean,
    agreePrivacyPolicy?: boolean,
}

export interface RegisterResponse{
    
}

export const register_new_user_failed : NextError = {
    Key: NextErrorKey.INTERNAL,
    Source: registerPath,
    Message: "Registration Failed",
    Priority: NextErrorPriority.HIGH_PRIORTY
}


export interface RegisterErrors{
    registration_failed: NextError
}


