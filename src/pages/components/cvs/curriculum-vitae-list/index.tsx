import React from 'react'
import styles from '../../../CVs.less'
import { Avatar, Pagination, Empty, Spin } from 'antd';
import { MessageOutlined, UserOutlined } from '@ant-design/icons'
import { CurriculumVitaeModel } from '@/@types/cv';
import { Link } from 'umi';

export interface CurriculumVitaeListProps {
    data?: CurriculumVitaeModel[];
    total?: number;
    pageSize?: number;
    loading?: boolean;
    onPageChange?: (page: number, pageSize?: number) => void;
}

class CurriculumVitaeList extends React.PureComponent<CurriculumVitaeListProps> {
    render() {
        const { data, total, pageSize = 10, loading = false, onPageChange } = this.props;

        return (
            <div className={styles.content}>
                <Spin spinning={loading} tip='正在加载请稍候...'>
                    {
                        data && data.length > 0 ?
                            <div className={styles.list}>
                                {
                                    data.map(item =>
                                        <div className={styles.item} key={item.id}>
                                            <div className={styles.avatar}>
                                                <Avatar src={item.avatar} icon={<UserOutlined />} className={styles.image} size={70} />
                                                <MessageOutlined className={styles.message} />
                                            </div>
                                            <div className={styles.description}>
                                                <div>
                                                    <Link to={`/cvs/${item.id}`} className={styles.name}>{item.name}</Link>
                                                    <span className={styles.position}>{item.position}</span>
                                                    <span className={styles.time}>{item.postTime}投递</span>
                                                </div>
                                                <div className={styles.properties}>
                                                    {item.properties?.map((property, index) => <span key={index}>{property}</span>)}
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                                <div style={{ textAlign: 'right' }}>
                                    <Pagination total={total} pageSize={pageSize} hideOnSinglePage={true} onChange={onPageChange} />
                                </div>
                            </div> :
                            <Empty description="无数据"/>
                    }
                </Spin>
            </div>
        )
    }
}
export default CurriculumVitaeList;