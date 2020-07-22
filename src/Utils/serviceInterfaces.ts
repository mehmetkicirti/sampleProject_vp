import { IAuthResult } from "../Models/IAuthResult";
import { IActivity } from "../Models/IActivity";
import { ICustomer } from "../Models/ICustomer";
import { IMissingDays } from "../Models/IMissingDays";
import { ISaveActivity } from "../Models/ISaveActivity";
import { IUser } from "../Models/IUser";

export interface IState {
    auth_user: IAuthResult;
    user: IUser;
    activities: IActivity;
    customers: ICustomer;
    missingDays: IMissingDays;
    saved_activities: ISaveActivity;
    disabled:boolean;
    act :Array<JSX.Element>;
}
export interface IActProps {
    store: { state: IState, dispatch: Dispatch };
    deleteActHandler: (index:number) => void;
    selected_activity: ISaveActivity;
    elementId:number;
}

export interface IAction {
    type: ActionTypes;
    payload: any;
}
export type Dispatch = React.Dispatch<IAction>;

export enum ActionTypes {
    AUTH_USER = "AUTH_USER",
    GET_ACTIVITIES = "GET_ACTIVITIES",
    GET_MISSING_DAYS = "GET_MISSING_DAYS",
    GET_CUSTOMERS = "GET_CUSTOMERS",
    GET_PROJECTS = "GET_PROJECTS",
    SAVE_ACTIVITY = "SAVE_ACTIVITY",
    CHANGE_DISABLED_CUSTOMER = "CHANGE_DISABLED_CUSTOMER",
    ADD_ACT ="ADD_ACT",
    REMOVE_ACT = "REMOVE_ACT",
    UPDATE_MISSING_DAY = "UPDATE_MISSING_DAY"
}

export interface IActivityProps {
    store: { state: IState, dispatch: Dispatch };
    selected_activities:ISaveActivity;
    changeDisabledActHandler:()=>boolean;
    onChangeActHandler:(value:string)=>void;
}