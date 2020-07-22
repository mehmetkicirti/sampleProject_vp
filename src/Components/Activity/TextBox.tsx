import React from 'react'
import { Input } from 'antd';
import { IActivityProps } from '../../Utils/serviceInterfaces';

const { TextArea } = Input;

const TextBox = (properties:IActivityProps):JSX.Element => {
    // const {saved_activities} = properties;

    const [value, setValue] = React.useState("");
    
    const onChangeHandler = (targetValue:string) => {
        setValue(targetValue);
        properties.selected_activities.ActivityDescription = value;
    }

    return (
        <TextArea
                value={value}
                style = {{width:350}}
                onChange={(e:React.ChangeEvent<HTMLTextAreaElement>)=>onChangeHandler(e.target.value)}
                autoSize={{ minRows: 4, maxRows: 6 }}
            />
    )
}

export default TextBox;
