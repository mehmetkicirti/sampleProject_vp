import * as Cookies from "js-cookie";
import { IAuthResult } from "../Models/IAuthResult";

export const setSessionCookie = (session: IAuthResult): void => {
  Cookies.remove("user");
  Cookies.set("user", session, { expires: 14 });
};

export interface IAuthSessionResult {
  message:string;
  user:IAuthResult;
}

export const getSessionCookie = () : IAuthSessionResult => {
  const sessionCookie = Cookies.get("user");

  if (sessionCookie === undefined) {
    return {
      user:{
        authenticated:false,
        fullName:"",
        hasError:true,
        missingActivityCount:0
      },
      message:"There is no session."
    };
  } else {
    const user:IAuthResult = JSON.parse(sessionCookie);
    return {
      message:"Session",
      user
    };
  }
};