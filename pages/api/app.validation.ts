export const _required_ : ValidationFunction = (value: string | string | object | number) : ValidationError | undefined | null => {
    if (typeof value === "string"){
        if ( value != null && value.length > 0){
            return null
        }else{
            return {
                Message: "_name_ is required"
            }
        }
    }
    return {Message: '_name_ is required'}
}

export const _match_ : ValidationFunction = (value: string, match: string) : ValidationError | undefined | null => {
    if (value == match)
    return null
    return {
        Message: "_name_ does not match _match_"
    }
}
