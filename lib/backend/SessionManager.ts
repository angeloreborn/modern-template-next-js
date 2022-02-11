import { JwtPayload } from 'jsonwebtoken';
import {Sign, Verify, Decode} from './Security'

/**
 * @summary Fetches the session from the server
 * @access 
 * @returns Session
 */
export function GetSession() : Session{
    return GetLocalStorage("KEY") as Session;
}

export function GetLocalStorage<T>(key: string) : T | null{
    var stored_value_as_token = localStorage.getItem(key)

    
    let valid : JwtPayload | null = Verify(stored_value_as_token);

    if (!valid){
        return null
    }
    
    return Decode(stored_value_as_token) as T | null;
}

export function SetSession(session: Session) : Boolean{
    let token : string | null = Sign(session, 60*60*24*2);

    if (!token) return false;

    localStorage.setItem("KEY", token)

    return true;
}

