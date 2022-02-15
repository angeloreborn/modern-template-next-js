export const authorizePath = "/api/user/authorize";

export function authorizeUser(url: string, req: AuthorizeRequest | undefined){
    return fetch(url, {
        method: "post",
        body: JSON.stringify(req),
      }).then((res) => res.json());
}

export interface AuthorizeRequest{
    username?: string,
    password?: string,
    token?: string,   
}

export interface AuthorizeResponse{
    token: string
}