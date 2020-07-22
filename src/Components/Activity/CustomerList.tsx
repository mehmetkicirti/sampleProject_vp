import React from 'react';
import { Select } from 'antd';
import { IActivityProps} from '../../Utils/serviceInterfaces';
import { ActivityContext } from '../../Services/activityContext';
import { SelectValue } from 'antd/lib/select';

const { Option } = Select;

const CustomerList = (properties: IActivityProps): JSX.Element => {
    const {customers} = properties.store.state;
    const {state} = React.useContext(ActivityContext);

    function handleChange(value):void {
        properties.selected_activities.ActivityCustomer = value;
    }

    return (
        <Select
            disabled={state.disabled}
            showSearch
            style={{ width: 200, marginBottom: 5 }}
            onChange={(value:SelectValue)=>handleChange(value)}
            placeholder="Select A Customer"
            optionFilterProp="children"
            filterOption={(input: string, option: any) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
        >
            {
                customers.keyValuePairs.map((activity) => {
                    return (
                        <Option key={activity.key} value={activity.value}>{activity.value}</Option>
                    )
                })
            }
        </Select>
    )
}

export default CustomerList;
