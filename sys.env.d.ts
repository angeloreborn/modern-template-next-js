interface ISession {
    session: Session
}

interface AuthState{
    token: string | null
    authorized: Boolean
}

interface Auth{
    token?: string
    signDate?: number
    expDate?: number
}


interface SharedProps extends ApplicationReadyState{
    auth?: AuthState
}

interface ApplicationReadyState{
    stateReady: Boolean
}

interface ISharedProps{
    sharedProps: SharedProps
    setSharedProps:  Dispatch<SetStateAction<SharedProps>>
}

interface ChildProps{
    children?: any | string
}




interface Session extends Hash, AuthorizationClaims, User, Activity{ 
  user: User
  activity: Activity
}

interface User extends AuthorizationClaims, PermissionClaims{
    username?: string, 
    email?: string,
    addresses?: Address[],
}

interface SessionState {
    session: Session | null,
    ready : Boolean 
  }
  
interface AuthorizationClaims{
    authorizations: Authorization[]
}

interface PermissionClaims{
    permissions: Permission[]
}
interface Address{

}

interface Authorization extends Hash{
    token: string 
}

interface BrowserActivity extends Hash{
    event: Event[]
    collect_threshold: number 
    user_agent: string
}

interface Event {
    date: Date
    action: Action<T>
}

interface Action<T>{

}

interface Hash{
    hash: string
}

interface Permission{
    hash:string
}

interface Claim{
    Key : string,
    Value: string,
}

interface SendEmail{
    to: string
    from: string
    subject: string
    text?: string
    html: string
}



