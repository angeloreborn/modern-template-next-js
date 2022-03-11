import { NextErrorKey, NextErrorPriority } from "../../../shared/enum";

export const authorizePath = "/api/user/authorize";

export async function authorizeUser(url: string, req: AuthorizeRequest | undefined){
    const res = await fetch(url, {
        method: "post",
        body: JSON.stringify(req),
    });
    return await res.json();
}

export interface AuthorizeRequest{
    username?: string,
    password?: string,
    token?: string,   
}

export interface AuthorizeResponse{
    token: string
}

export const invalid_token : NextError = {
    Key: NextErrorKey.INTERNAL,
    Source: authorizePath,
    Message: "Authorization Rejected: Invalid token was supplied",
    Priority: NextErrorPriority.HIGH_PRIORTY
}
export const invalid_body : NextError = {
    Key: NextErrorKey.INTERNAL,
    Source: authorizePath,
    Message: "Post Error: Malformed body",
    Priority: NextErrorPriority.HIGH_PRIORTY
}
export const invalid_credentials : NextError = {
    Key: NextErrorKey.INTERNAL,
    Source: authorizePath,
    Message: "Invalid Credentials: The supplied credentials could not be authorized",
    Priority: NextErrorPriority.HIGH_PRIORTY
}