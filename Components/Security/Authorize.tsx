import React, { useLayoutEffect, Dispatch, SetStateAction } from 'react'
import Loading from '../../pages/Loading'
import Login from '../../pages/Login'
import Page from '../Generic/Page'
import Unauthorized from '../../pages/Unauthorized'
interface AuthorizeProps extends ISharedProps, ChildProps {

}

export default function Authorize(props: AuthorizeProps) {
    useLayoutEffect(() => {
        let authToken = localStorage.getItem("AUTHORIZATION3");
        console.log(authToken);
        console.log(props.sharedProps)
        props.setSharedProps<Dispatch<SetStateAction<SharedProps>>>({
            ...props.sharedProps, auth: {
                authorized: true,
                token: authToken,
            } as AuthState,
            stateReady: true
        })

    }, [])


    /** 
     * Authorization Level 0
     * 
     * If there are no shared props instance or
     * the state of the autorization is still pending
     * then the page will @returns <Loading/>
     * 
     * @property props.sharedProps should always 
     * exist at some point in the lifecycle
     * 
     */
    if (!props.sharedProps
        || props.sharedProps.stateReady === false) {
        return <Loading />
    }
    /** 
     * Authorization Level 1
     * 
     * If there are no shared props instance or
     * the state of the autorization is still pending
     * then the page will @returns <Loading/>
     * 
     * @property props.sharedProps should always 
     * exist at some point in the lifecycle
     * 
     */
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

    /** 
     * Authorization Exit Level
     * 
     * If there are no shared props instance or
     * the state of the autorization is still pending
     * then the page will @returns <Loading/>
     * 
     * @property props.sharedProps should always 
     * exist at some point in the lifecycle
     * 
     */
    if (props.sharedProps
        && props.sharedProps.auth
        && props.sharedProps.auth.token
        && props.sharedProps.auth.authorized === true) {
        return <Page>{props.children}</Page>
    } else {
        return <Unauthorized />
    }


}
