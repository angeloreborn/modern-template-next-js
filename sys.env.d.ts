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

interface APIResponse<T>{
    data?: T,
    status: number,
    message?: string, 
    errors?: Error[]
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



interface SendEmail{
    to: string
    from: string
    subject: string
    text?: string
    html: string
}



