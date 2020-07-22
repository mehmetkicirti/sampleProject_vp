import React from 'react'
import { Row, Col, Typography, Space } from 'antd';
import { IProps } from './Pages/ActivityPage';
import { IAuthResult } from '../Models/IAuthResult';
const { Text } = Typography;

const ActivityPageHeader = (props:IProps<IAuthResult>): JSX.Element => {
    return (
        <div>
            <Row justify="center" style={{ backgroundColor: '#24D6BF', padding: 20 }}>
                <Col>
                    <Space direction="vertical">
                        <Text style={{ color: 'white', fontSize: 16 }}>Dear {props.store.fullName}, thank you for using I-LOOP</Text>
                    </Space>
                </Col>
            </Row>
            <Row style={{ backgroundColor: '#344A58', marginTop: 5, padding: 50 }}>
            </Row>
            <Row justify="center">
                <Col>
                    <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'black' }}>Activity</Text>
                </Col>
            </Row>
            <Row align="middle">
                <Col span={24}>
                    <div style={{ border: '1px solid #24D6BF', margin: 5, padding: 20, textAlign: 'center' }}>
                        <Text style={{ color: 'black' }}>Please insert your daily activities</Text>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default ActivityPageHeader;
