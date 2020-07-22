import React from 'react';
import { Row, Col, Typography, Button, message } from 'antd';
import { Loading } from './Loading';
import { IDay } from './Pages/ActivityPage';
import { ActivityContext } from '../Services/activityContext';
import { Dispatch, IState, IActProps } from '../Utils/serviceInterfaces';
import { onSaveActivityAction,onAddActAction, onDeleteActAction, onSavedDailyActivityDay } from '../Actions/activityActions';

const Act = React.lazy(async () => await import('./Act'));
const { Text } = Typography;



const MissingDailyActivity = (missingDay: IDay, key: number) => {
    // const [actList, setActList] = React.useState(Array<JSX.Element>());
    const { state, dispatch } = React.useContext(ActivityContext);
    const [keyValue,setKeyValue]=React.useState(0);
    
    const createKey = ():number=>{
        return Math.floor(Math.random()*100);
    }

    const deleteActHandler = (elementId:number) => {
        const resultMessage =onDeleteActAction(dispatch,elementId,state);
        message.info(resultMessage);
    }
    
    const props: IActProps = {
        store: { state, dispatch },
        deleteActHandler,
        selected_activity: {
            Hour: "",
            ActivityDay: "",
            ActivityProject: "",
            ActivityType: "",
            ActivityCustomer: "",
            ActivityDescription: "",
            ActivitySubProject: ""
        },
        elementId: keyValue
    }

    React.useEffect(()=>{
        setKeyValue(createKey());
        onAddActAction(dispatch,<Act {...props} key={keyValue}/>,state);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    const addActHandler = () => {
        setKeyValue(createKey());
        //setActList([...actList, <Act  {...props} key={keyValue} />]);
        onAddActAction(dispatch,<Act {...props} key={keyValue}/>,state);
    }

    const convertToDate = (date:string[]):Date => {
       let dateInt:number[] = date.map((e)=>parseInt(e));
       console.log(dateInt);
       return new Date(dateInt[2],dateInt[1],dateInt[0]);
    }

    const saveActProps = (dispatch:Dispatch) => {
        const props:Array<IActProps> = state.act.map(act=>act.props);
        const store:IState = state;
        let hour:number = 0; 
        let activityType:string = "";
        let activityCustomer:string = "";
        let activityDescription:string = "";
        let activityDay: string = store.missingDays.days.map(date=>`${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`).join(','); 
        props.forEach((activity)=>{
            hour += isNaN(parseInt(activity.selected_activity.Hour)) ? 0 : parseInt(activity.selected_activity.Hour);
            activityType+=activity.selected_activity.ActivityType+",";
            activityCustomer+=activity.selected_activity.ActivityCustomer+",";
            activityDescription += activity.selected_activity.ActivityDescription+",";
        });
        console.log(activityType,activityDescription);
        if(hour<8){
            message.warning("Cannot be add activity should be at least 8 hours");
        }else{
            onSaveActivityAction(dispatch,{
                Hour:hour.toString(),
                ActivityCustomer:activityCustomer,
                ActivityDay:activityDay,
                ActivityDescription:activityDescription,
                ActivityProject:"",
                ActivitySubProject:"",
                ActivityType:activityType
            });
            if(state.saved_activities.Hour !== 0){
                message.success("Saved Activity successfully to date : "+ activityDay);
                setTimeout(()=>{
                    console.log({
                        Hour:hour.toString(),
                        ActivityCustomer:activityCustomer,
                        ActivityDay:activityDay,
                        ActivityDescription:activityDescription,
                        ActivityProject:"",
                        ActivitySubProject:"",
                        ActivityType:activityType
                    });
                },2000);
                onSavedDailyActivityDay(dispatch,convertToDate(activityDay.split('/')),state);
            }else{
                message.error("Try again later..");
            }
        }
    }

    return (
        <Row>
            <Col span={24}>
                <fieldset style={{ border: '2px solid grey', margin: 5, padding: 5 }}>
                    <legend style={{ margin: 20, width: 120 }}>
                        <Text style={{ marginLeft: 10, fontWeight: 'bold', fontFamily: 'verdana', textDecoration: 'underline', fontSize: 14, color: '#24D6BF' }}>{`${missingDay.day}/${missingDay.month}/${missingDay.year}`}</Text>
                    </legend>
                    <Row style={{ marginBottom: 5 }} justify="center">
                        <Button onClick={()=>addActHandler()} danger>Add Act</Button>
                    </Row>
                    <Row>
                        <Col xs={{ span: 18, offset: 6 }} lg={{ span: 14, offset: 4 }}>
                            <React.Suspense fallback={<Loading />}>
                                {
                                    state.act.map((act) => {
                                        return (
                                            act
                                        )
                                    })
                                }
                            </React.Suspense>
                        </Col>
                    </Row>
                    <Row justify="end">
                        <Col>
                                <Button onClick={()=>saveActProps(dispatch)} hidden={state.act.length===0 ? true : false} style={{margin:10}} type="ghost">Submit</Button>
                        </Col>
                    </Row>
                </fieldset>
            </Col>
        </Row>
    );
}

export default MissingDailyActivity;