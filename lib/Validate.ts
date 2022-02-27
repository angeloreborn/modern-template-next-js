import {Dispatch, SetStateAction} from 'react'
export function NextValidate<T>(state : NextInput<T>, setState: Dispatch<SetStateAction<NextInput<T>>>, ghostValue: any, name: string): ValidationError[] | null | undefined{
    let validationErrors : ValidationError[] = new Array();
    if (state.ValidationFunctions){
       
        state.ValidationFunctions.forEach(validation=>{           
            let result : ValidationError | null = validation(ghostValue);
            if (result){
                if (result.Message){
                    result.Message = result.Message.replace("_name_", name);
                }              
                validationErrors.push(result);
            }
        })
    }
    return validationErrors;
}

export const handleString = (event: React.ChangeEvent<HTMLInputElement>, val : NextInput<string>, set : Dispatch<SetStateAction<NextInput<string>>>) =>{
    let validationErrors = NextValidate(val, set, event.target.value, val.Name);
    let value = event.target.value;

    set({
      ...val,
      Value: value,
      Errors: validationErrors,
      IsValid: validationErrors?.length === 0 ? false: true
    });
}