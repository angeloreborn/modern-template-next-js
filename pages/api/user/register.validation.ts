export const EmailValidationFunction : ValidationFunction = (email: string) : ValidationError[] => {

    let valid_at_sign = true;
    let validation_responses: ValidationError[] = new Array();
    for (let i = 0; i < email.length; i++) {
        const element = email[i];
        if (element === "@"){
            if (valid_at_sign){
                validation_responses.push({
                    Message: "Cannot have 2 '@' symbols."
                })
            }else{
                valid_at_sign = true
            }          
        }
    }
    return validation_responses;
}


