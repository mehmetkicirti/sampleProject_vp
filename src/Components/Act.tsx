import React from 'react'
import { Loading } from './Loading';
import { Row, Col, Button } from 'antd';
import { IActivityProps, IActProps } from '../Utils/serviceInterfaces';


const HourSelection = React.lazy(async () => await import('./Activity/HourSelection'));
const ActivityTypes = React.lazy(async () => await import('./Activity/ActivityTypes'));
const CustomerList = React.lazy(async () => await import('./Activity/CustomerList'));
const TextBox = React.lazy(async () => await import('./Activity/TextBox'));
const ProjectList = React.lazy(async () => await import('./Activity/ProjectList'));

const Act = (props: IActProps, key: number): JSX.Element => {

    const deleteAct = (value:string) => {
        props.deleteActHandler(parseInt(value));
    }

    const changeDisabledActHandler = ():boolean => {
        if(props.selected_activity.ActivityType === "Sales" || props.selected_activity.ActivityType === "Pre-Sales"){
            return true;
        }else return false;
    }

    const onChangeActHandler = (value:string):void=>{
        props.selected_activity.ActivityType =value;
    }

    const properties: IActivityProps = {
        store: props.store,
        selected_activities: props.selected_activity,
        changeDisabledActHandler,
        onChangeActHandler
    }

    return (
        <React.Suspense fallback={<Loading />}>
            <Row justify="space-between" >
                <Col span={4}>
                    <HourSelection {...properties} />
                </Col>
                <Col span={8}>
                    <TextBox {...properties} />
                </Col>
                <Col span={9}>
                    <ActivityTypes {...properties} />
                    <ProjectList {...properties} />
                    <CustomerList {...properties} />
                </Col>
                <Col style={{ marginTop: 30 }} span={2} >
                    <Button value={props.elementId} onClick={(event:React.MouseEvent<HTMLButtonElement>)=>deleteAct(event.currentTarget.value)} danger >Delete Act </Button>
                </Col>
            </Row>
        </React.Suspense>
    )
}

export default Act;
