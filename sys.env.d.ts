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

interface NextError{
    Key : ErrorKey,
    Message: string,
    Source: string,
    Priority: NextErrorPriority, 
}

enum NextErrorPriority{
    HIGH_PRIORTY = 0,
    MEDIUM_PRIORITY = 1,
    LOW_PRIOTITY = 2,
}
enum ErrorKey{
    INTERNAL
}



