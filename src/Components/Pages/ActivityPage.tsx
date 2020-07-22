import React from 'react'
import ActivityPageHeader from '../ActivityPageHeader';
import { Loading } from '../Loading';
import { ActivityContext } from '../../Services/activityContext';
import { IAuthResult } from '../../Models/IAuthResult';
import { IMissingDays } from '../../Models/IMissingDays';
import { Typography, Row, Col } from 'antd';

const { Text } = Typography;


const MissingDailyActivity = React.lazy(async () => await import('./../MissingDailyActivity'));

export interface IProps<T> {
    store: T;
}
export interface IDay {
    day: number,
    month: number,
    year: number
}

const ActivityPage = (): JSX.Element => {
    const { state } = React.useContext(ActivityContext);

    const missingDays: IMissingDays = state.missingDays;

    const props: IProps<IAuthResult> = {
        store: state.auth_user
    }


    return (
        <div>
            <ActivityPageHeader {...props} />
            {
                // missingDays.days !== null ?
                <React.Suspense fallback={<Loading />}>
                    {
                        missingDays.days.length !== 0 ? 
                        missingDays.days.map((missingDay, index) => {
                            const day: IDay = {
                                day: missingDay.getDay(),
                                month: missingDay.getMonth(),
                                year: missingDay.getFullYear()
                            }
                            return (
                                <MissingDailyActivity {...day} key={index} />
                            )
                        }):<Row style={{marginTop:"10%"}} justify="center"><Col><Text style = {{textAlign:"center"}}>There is no needed to filling acts Because already all activities filled successfully</Text></Col></Row>
                    }
                </React.Suspense>  
            //     : <Row style={{marginTop:"10%"}} justify="center"><Col><Text style = {{textAlign:"center"}}>There is no needed to filling acts Because already all activities filled successfully</Text></Col></Row>
            }
        </div>
    )
}

export default ActivityPage;
