import React, { useLayoutEffect, Dispatch, SetStateAction } from 'react'
import Loading from '../../pages/Loading'
import Login from '../../pages/Login'
import Page from '../Generic/Page'
import Unauthorized from '../../pages/Unauthorized'

interface AuthorizeProps extends ISharedProps, ChildProps {}

/** 
 * @title Authorize 
 * 
 * @summary Authorizes next page through state hook
 * 
 * @returns Component Next Page
 * @returns Login Page
 * @returns Unauthorized Page
 * 
 */
export default function Authorize(props: AuthorizeProps) {
    useLayoutEffect(() => {
        let authToken = localStorage.getItem("AUTHORIZATION3");
        props.setSharedProps<Dispatch<SetStateAction<SharedProps>>>({
            ...props.sharedProps, auth: {
                authorized: true,
                token: authToken,
            } as AuthState,
            stateReady: true
        })
    }, [])

    if (!props.sharedProps
        || props.sharedProps.stateReady === false) {
        return <Loading />
    }

    if (props.sharedProps
        && props.sharedProps
        && props.sharedProps.auth
        && !props.sharedProps.auth.token
        && props.sharedProps.stateReady === true) {
        return <Login
            sharedProps={props.sharedProps}
            setSharedProps={props.setSharedProps}
        />
    }

    if (props.sharedProps
        && props.sharedProps.auth
        && props.sharedProps.auth.token
        && props.sharedProps.auth.authorized === true) {
        return <Page>{props.children}</Page>
    } else return <Unauthorized />

    /* Fin */
}
