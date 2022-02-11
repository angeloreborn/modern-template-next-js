export const getSessionPath = "/api/hello";
export function getSession(url: string){
    return fetch(url, {
        method: "get",
        mode: 'same-origin',
        referrerPolicy: 'same-origin',
        headers: {}
      }).then((res) => res.json());
}