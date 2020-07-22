import React from 'react'
import { Select } from 'antd';
import { IActivityProps} from '../../Utils/serviceInterfaces';

const { Option } = Select;

const HourSelection = (properties:IActivityProps): JSX.Element => {
    // const {saved_activities} = properties;
    function handleChange(value) {
        properties.selected_activities.Hour =value;
    }
    return (
        <Select defaultValue="Hour" style={{ width: 100 }} onChange={handleChange}>
            <Option value={"1"}>1 Hour</Option>
            <Option value={"2"}>2 Hour</Option>
            <Option value={"3"} >3 Hour</Option>
            <Option value={"4"}>4 Hour</Option>
        </Select>
    )
}

export default HourSelection;
