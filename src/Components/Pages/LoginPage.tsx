import React from 'react'
import { Form, Input, Button, Checkbox, message } from 'antd';
import { ActivityContext } from '../../Services/activityContext';
import { onFinishAction, addFromSessionAction } from '../../Actions/userActions';
import { navigate } from '../../Utils/routerHistory';

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 8 },
};
const tailLayout = {
    wrapperCol: { offset: 6, span: 12 },
};

const LoginPage = (): JSX.Element => {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");

    const { dispatch } = React.useContext(ActivityContext);
    const onFinish = async () => {
        const resultMessage: string = await onFinishAction(dispatch, { username, password });
        if (resultMessage.length > 1) {
            message.error(resultMessage);
            setUsername("");
            setPassword("");
        } else {
            navigate('/activity');
        }
    }
    
    React.useEffect(() => {
        if (addFromSessionAction(dispatch)) {
            navigate('/activity');
        }
    }, [dispatch]);

    return (
        <React.Fragment>
            <div className="loginBg">
                <Form
                    initialValues={{ remember: true }}
                    className="form"
                    onFinish={onFinish}
                    {...layout}
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input type="text" onChange={(e) => setUsername(e.target.value)} value={username} />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password onChange={(e) => setPassword(e.target.value)} value={password} />
                    </Form.Item>
                    <Form.Item {...tailLayout}>
                        <Checkbox style={{ marginRight: 60 }} name="remember">Remember me</Checkbox>
                        <Button type="ghost" htmlType="submit">
                            Login
                    </Button>
                    </Form.Item>
                </Form>
            </div>
        </React.Fragment>
    );

}

export default LoginPage;
