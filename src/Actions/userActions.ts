import { setSessionCookie, getSessionCookie } from '../Utils/sessionOperations';
import { IAuthResult } from '../Models/IAuthResult';
import { ActionTypes, Dispatch } from '../Utils/serviceInterfaces';
import { navigate } from '../Utils/routerHistory';

export const URL = "https://ilooppowerapps.veripark.com/api";

export const onFinishAction = async (dispatch:Dispatch, { username, password }):Promise<string> => {
    const response = await fetch(`${URL}/auth/post`,{
        method:'POST',
        mode:'cors',
        credentials:'same-origin',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            'UserName':username,
            'Password':password
        })
    });
    const dataJSON: IAuthResult = await response.json();
    
    if (dataJSON.authenticated === false) {
        return "Wrong username or  password";
    } else {
        setSessionCookie(dataJSON);
        dispatch({
            type:ActionTypes.AUTH_USER,
            payload:dataJSON
        });
        return "";
    }
}
export const addFromSessionAction = (dispatch:Dispatch) :boolean => {
    const sessionDetail = getSessionCookie();
    if(sessionDetail.user.authenticated === true){
        dispatch({
            type:ActionTypes.AUTH_USER,
            payload:sessionDetail.user
        })
        return true;
    }else{
        navigate('/');
        return false;
    }
}