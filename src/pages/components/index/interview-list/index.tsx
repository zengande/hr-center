import React from 'react';
import styles from '@/pages/index.less'
import { Empty, Button, Avatar } from 'antd'
import { MessageOutlined, UserOutlined } from '@ant-design/icons';
import { InterviewModel } from '@/@types/calendar';

export interface InterviewListProps {
    data?: InterviewModel
}

export default class InterviewList extends React.PureComponent<InterviewListProps> {
    render() {
        const { data } = this.props;

        return (
            (data && data.total > 0) ? <>
                <h2 className={styles.title}>当日面试安排<span className='text-highlight'>{data.total}</span>场</h2>
                <div className={styles.list}>
                    {data.data.map((item, index) => (
                        <div className={styles.item} key={index}>
                            <p className={styles.item_time}>{item.time}</p>
                            {
                                item.list.map((_item, _index) => (
                                    <div key={_index} className={styles.item_content}>
                                        <Avatar size={32} icon={<UserOutlined />} src={_item.avatar} alt="" className={styles.content_avatar} />
                                        <b className={styles.content_name}>{_item.name}</b>
                                        <span className={styles.content_title}>{_item.title}</span>
                                        <Button className={styles.content_message} type="link" icon={<MessageOutlined />} />
                                    </div>
                                ))
                            }
                        </div>
                    ))}
                </div>
            </> : <Empty description="暂无面试安排" />
        )
    }
}