import React, { useState, ChangeEvent } from 'react'
import { Row, Col, Button, Alert, Timeline, Radio, Input } from 'antd'
import styles from './CV.less'
import { ClockCircleFilled, CheckCircleFilled, ManOutlined, WomanOutlined } from '@ant-design/icons'
import classNames from 'classnames'

export default () => {
    const [remark, setRemark] = useState('');

    const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const value = e.target.value;
        setRemark(value);
    }

    return (
        <div className={styles.container}>
            <Row gutter={48} className={styles.header}>
                <Col span={18} className={styles.title}>
                    <Radio.Group defaultValue="zh-cn" buttonStyle="solid" className={styles.languages}>
                        <Radio.Button value="zh-cn">中</Radio.Button>
                        <Radio.Button value="en-us">EN</Radio.Button>
                    </Radio.Group>
                    <h2>运营管理实习生</h2>
                    <Button className={styles.delay} icon={<ClockCircleFilled />}>申请延期</Button>
                </Col>
                <Col span={6}>
                    <Alert message="面试时间：2020-04-04 16:00" type="info" showIcon />
                </Col>
            </Row>
            <Row gutter={48} className={styles.body}>
                <Col span={18} className={styles.content}>
                    <div className={styles.info}>
                        <div className={styles.properties}>
                            <span>24岁</span>
                            <span>本科</span>
                            <span>杭州</span>
                        </div>
                        <h1 className={styles.name}>
                            张三
                            <ManOutlined className={classNames(styles.sex, styles.man)} />
                            {/* <WomanOutlined className={classNames(styles.sex, styles.woman)} /> */}
                        </h1>
                        <div className={styles.contacts}>
                            <span>手机：13000000000</span>
                            <span>邮箱：zengande@outlook.com</span>
                        </div>
                    </div>
                    <div className={styles.section}>
                        <h2 className={styles.title}>教育背景</h2>
                        <div className={styles.properties}>
                            <span>2015-2019</span>
                            <span>浙江大学</span>
                            <span>软件工程（本科）</span>
                        </div>
                        <div className={styles.item}><b>成绩排名：</b>前30%</div>
                        <div className={styles.item}><b>主修课程：</b>计算机原理、软件工程、Sql Server 数据库设计、.net 程序设计、计算机网络</div>
                        <div className={styles.item}>
                            <b>荣誉奖励：</b>
                            <ul>
                                <li>2018三好学生</li>
                                <li>2017三好学生</li>
                                <li>2016三好学生</li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.section}>
                        <h2 className={styles.title}>实习经历</h2>
                        <div className={styles.properties}>
                            <span>2018.06-2019.12</span>
                            <span>软件开发工程师</span>
                            <span>瞎扯淡软件有限公司</span>
                        </div>
                        <div className={styles.text}>这真的实在瞎扯淡这真的实在瞎扯淡这真的实在瞎扯淡这真的实在瞎扯淡这真的实在瞎扯淡这真的实在瞎扯淡这真的实在瞎扯淡这真的实在瞎扯淡这真的实在瞎扯淡这真的实在瞎扯淡这真的实在瞎扯淡这真的实在瞎扯淡这真的实在瞎扯淡这真的实在瞎扯淡这真的实在瞎扯淡这真的实在瞎扯淡这真的实在瞎扯淡这真的实在瞎扯淡这真的实在瞎扯淡这真的实在瞎扯淡</div>
                        <div className={styles.properties}>
                            <span>2018.06-2019.12</span>
                            <span>软件开发工程师</span>
                            <span>瞎扯淡软件有限公司</span>
                        </div>
                        <div className={styles.text}>这真的实在瞎扯淡这真的实在瞎扯淡这真的实在瞎扯淡这真的实在瞎扯淡这真的实在瞎扯淡这真的实在瞎扯淡这真的实在瞎扯淡这真的实在瞎扯淡这真的实在瞎扯淡这真的实在瞎扯淡这真的实在瞎扯淡这真的实在瞎扯淡这真的实在瞎扯淡这真的实在瞎扯淡这真的实在瞎扯淡这真的实在瞎扯淡这真的实在瞎扯淡这真的实在瞎扯淡这真的实在瞎扯淡这真的实在瞎扯淡</div>
                    </div>
                </Col>
                <Col span={6} className={styles.timeline}>
                    <Timeline>
                        <Timeline.Item color='blue' dot={<ClockCircleFilled />}>
                            <p className={styles.time}>2020-03-25 14:00</p>
                            <p className={styles.action}>添加备注</p>
                            <p className={styles.text}>可以进一步了解</p>
                        </Timeline.Item>
                        <Timeline.Item color="gray" dot={<CheckCircleFilled />}>
                            <p className={styles.time}>2020-03-25 13:35</p>
                            <p className={styles.action}>发送面试通知</p>
                            <p className={styles.text}>面试时间：2020-04-04 16:00</p>
                            <p className={styles.text}>面试地点：杭州市西湖区西溪路555号C座306左拐右进向东走50米向后100米</p>
                        </Timeline.Item>
                        <Timeline.Item color="gray" dot={<CheckCircleFilled />}>
                            <p className={styles.time}>2020-03-25 13:30</p>
                            <p className={styles.action}>查看了简历</p>
                        </Timeline.Item>
                        <Timeline.Item color="gray" dot={<CheckCircleFilled />}>
                            <p className={styles.time}>2020-03-25 13:00</p>
                            <p className={styles.action}>收到简历</p>
                        </Timeline.Item>
                    </Timeline>
                    <div className={styles.remark}>
                        <Input.TextArea placeholder="添加备注" className={styles.textarea} rows={2} value={remark} onChange={onChange} />
                        <Button type='primary' className={styles.save} disabled={remark.length <= 0}>保存</Button>
                    </div>
                </Col>
            </Row>
        </div>
    )
}