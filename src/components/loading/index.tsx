import React from 'react';
import { Spin } from 'antd'

export default class Loading extends React.PureComponent {
    render() {
        return (
            <div className="loading">
                <Spin spinning={true} tip="加载中..."></Spin>
            </div>
        )
    }
}