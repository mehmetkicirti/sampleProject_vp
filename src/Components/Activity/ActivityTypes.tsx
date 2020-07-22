import React from 'react'
import { Select } from 'antd';
import { IActivityProps, Dispatch } from '../../Utils/serviceInterfaces';
import { onChangeDisabledCustomerListAction } from '../../Actions/activityActions';
import { SelectValue } from 'antd/lib/select';

const { Option } = Select;

const ActivityTypes = (properties:IActivityProps): JSX.Element => {

    const {state,dispatch} = properties.store;

    function handleChange(value,dispatch:Dispatch):void {
        properties.onChangeActHandler(value);
        onChangeDisabledCustomerListAction(dispatch,properties.selected_activities);
    }
    
    return (
        <Select
            showSearch
            style={{ width: 200 ,marginBottom:5}}
            placeholder="Select A Activity"
            optionFilterProp="children"
            onChange={(value:SelectValue)=>handleChange(value,dispatch)}
            filterOption={(input:string, option:any) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
        >
            {
                state.activities.keyValuePairs.map((activity)=>{
                    return (
                    <Option key={activity.key} value={activity.value}>{activity.value}</Option>
                    )
                })
            }
        </Select>
    )
}

export default ActivityTypes;
