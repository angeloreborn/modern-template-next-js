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
    errors?: NextError[]
}

interface ApplicationReadyState{
    stateReady: Boolean
}

interface ISharedProps {
    sharedProps: SharedProps | undefined
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

interface NextValidation<SourceType, ErrorType, ValidationFunction>{
    SourceType : SourceType,
    ErrorType : ErrorType,
    Validation : Function 
}

type ValidationFunction = Function


interface ValidationError {
    Message?: string
}

interface NextInput<SourceType> {
    Name: string,
    Value? : SourceType,
    ValidationFunctions? : Function[],
    Errors?: ValidationError [] | null | undefined
    IsValid? : boolean | undefined
}
