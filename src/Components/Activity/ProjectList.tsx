import React from 'react'
import { Select } from 'antd';
import { IActivityProps } from '../../Utils/serviceInterfaces';

const { Option } = Select;

const ProjectList = (properties:IActivityProps):JSX.Element => {
    // const {saved_activities} = properties;

    return (
        <Select
        disabled
        showSearch
        style={{ width: 200,marginBottom:5}}
        placeholder="Select A Project"
        optionFilterProp="children"
        filterOption={(input:string, option:any) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
    >
        <Option value="jack">Jack</Option>
        <Option value="lucy">Lucy</Option>
        <Option value="tom">Tom</Option>
    </Select>
    )
}

export default ProjectList;
