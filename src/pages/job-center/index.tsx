import React from 'react';
import HeaderRadioGroup from '@/components/header-radio-group';
import styles from './index.less';
import { Button } from 'antd';
import { SendOutlined } from '@ant-design/icons'
import JobTable from './job-table';
import { connect, DispatchProp } from 'dva';
import { JobCenterModelState } from './model';
import { JobSummary } from '@/@types/job';

export interface JobCenterProps extends DispatchProp {
    loading?: boolean;
    data?: JobSummary[];
    total?: number;
}

class JobCenter extends React.PureComponent<JobCenterProps> {
    state = {
        type: 1
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData(page: number = 1) {
        this.props.dispatch({
            type: 'job_center/fetch',
            payload: {
                page
            }
        })
    }

    render() {
        const { type } = this.state;
        const { data, total, loading } = this.props;
        console.log(this.props)
        const groupData = [{
            value: 1,
            text: "招聘中(0)"
        }, {
            value: 2,
            text: "待提交(0)"
        }, {
            value: 3,
            text: "已下线(0)"
        }, {
            value: 4,
            text: "审核中(0)"
        }]

        return (
            <div className={styles.container}>
                <HeaderRadioGroup data={groupData} value={type} onChange={value => this.setState({ type: value })} />
                <div className={styles.header}>
                    <h1 className={styles.title}>{total} 个招聘中职位<span className={styles.tip}>有的放矢，高效招聘</span></h1>
                    <Button className={styles.button} shape="round" type="primary" icon={<SendOutlined />}>发布职位</Button>
                </div>
                <div className={styles.content}>
                    <JobTable data={data} total={total} loading={loading} onPageChange={page => this.fetchData(page)} onSelectChange={values => console.log(values)} />
                </div>
            </div>
        )
    }
}

export default connect(({ loading, job_center }: { loading: any, job_center: JobCenterModelState }) => ({
    loading: loading.effects['job_center/fetch'],
    ...job_center
}))(JobCenter)