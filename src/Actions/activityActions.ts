import { Dispatch, ActionTypes, IAction, IState } from "../Utils/serviceInterfaces";
import { ISaveActivity } from "../Models/ISaveActivity";

export const onSaveActivityAction = (dispatch: Dispatch, value: ISaveActivity): void => {
    dispatch({
        type: ActionTypes.SAVE_ACTIVITY,
        payload: value
    });
}
export const onChangeDisabledCustomerListAction = (dispatch: Dispatch, activityTypes: ISaveActivity): void => {
    let dispatchObject: IAction = {
        type: ActionTypes.CHANGE_DISABLED_CUSTOMER,
        payload: true
    }
    if (activityTypes.ActivityType === "Sales" || activityTypes.ActivityType === "Pre-Sales") {
        dispatchObject.payload = false;
    }
    dispatch(dispatchObject);
}

export const onAddActAction = (dispatch: Dispatch, act: JSX.Element,state:IState): void => {
    let dispatchObject : IAction = {
        type: ActionTypes.ADD_ACT,
        payload: act
    }
    if(state.act.length === 0){
        dispatchObject.payload = act;
    }
    dispatch(dispatchObject);
}
export const onDeleteActAction = (dispatch: Dispatch, elementId: number, state: IState): string => {
    if (state.act.length >= 2) {
        const withoutDeletedAct = state.act.filter((act: JSX.Element) => act.props.elementId !== elementId);
        dispatch({
            type: ActionTypes.REMOVE_ACT,
            payload: withoutDeletedAct
        });
        return `${elementId} id deleted successfully`;
    }else{
        return `At least 2 Activity`;
    }
}

export const onSavedDailyActivityDay = (dispatch:Dispatch,day:Date,state:IState):void => {
    console.log(state.missingDays);
    state.missingDays.days.forEach((missingDay)=>{
        if( day.getMonth() === missingDay.getMonth()){
            let index = state.missingDays.days.indexOf(missingDay);
            dispatch({
                type:ActionTypes.UPDATE_MISSING_DAY,
                payload: state.missingDays.days.splice(index,1)
            })
        }
    })
    console.log(state.missingDays);
}
