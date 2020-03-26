import React from 'react';
import styles from './index.less';
import { Checkbox, Divider, Button, Pagination, Spin, Empty } from 'antd';
import { InfoCircleFilled } from '@ant-design/icons'
import classNames from 'classnames'
import { JobSummary, JobStatus } from '@/@types/job';

export interface JobTableProps {
    loading?: boolean;
    data?: JobSummary[];
    total?: number;
    pageSize?: number;
    onPageChange?: (page: number) => void;
    onSelectChange?: (selectedValues: Array<string>) => void;
    operationsRender?: () => React.ReactNode;
}

export default class JobTable extends React.Component<JobTableProps> {
    static defaultProps: JobTableProps = {
        loading: false,
        total: 0,
        pageSize: 10
    }

    state = {
        allChecked: false,
        checkedValues: new Array<string>()
    }

    changeAllChecked() {
        let { allChecked, checkedValues } = this.state;
        const { data } = this.props;
        if (allChecked) {
            checkedValues = [];
        } else {
            checkedValues = data?.map(item => item.id) || [];
        }
        this.setState({ allChecked: !allChecked, checkedValues });
        this.notifySelectChanged(checkedValues);
    }

    changeChecked(id: string) {
        const { checkedValues } = this.state;
        const index = checkedValues.findIndex(i => i === id);
        if (index >= 0) {
            checkedValues.splice(index, 1);
        } else {
            checkedValues.push(id);
        }
        this.setState({ checkedValues });
        this.notifySelectChanged(checkedValues);
    }

    isChecked(id: string) {
        const { checkedValues } = this.state;
        return checkedValues.findIndex(v => v === id) >= 0;
    }

    notifySelectChanged(values:Array<string>) {
        const { onSelectChange } = this.props;
        onSelectChange && onSelectChange(values);
    }

    render() {
        const { loading, data, total, pageSize, onPageChange, operationsRender } = this.props;
        const { allChecked, checkedValues } = this.state;

        return (
            <Spin spinning={loading} tip="正在拉取数据...">
                {data && data.length > 0 ?
                    <div className={styles.table}>
                        <div className={styles.operations}>
                            <Checkbox checked={allChecked || data.length === checkedValues.length} onChange={this.changeAllChecked.bind(this)}>全选</Checkbox>
                            {operationsRender && operationsRender()}
                        </div>
                        <div className={styles.thead}>
                            <span className={styles.th}></span>
                            <span className={styles.th}>职位名称</span>
                            <span className={styles.th}>要求</span>
                            <span className={styles.th}>投递统计</span>
                            <span className={styles.th}>热度</span>
                            <span className={styles.th}>提升热度</span>
                            <span className={styles.th}>职位操作</span>
                        </div>
                        <div className={styles.tbody}>
                            {data.map((item, index) =>
                                <div key={item.id} className={styles.tcontent}>
                                    <div className={styles.row}>
                                        <div className={styles.col}>
                                            <Checkbox checked={this.isChecked(item.id)} onChange={this.changeChecked.bind(this, item.id)} />
                                        </div>
                                        <div className={styles.col}> {item.name} </div>
                                        <div className={styles.col}>{item.requirement || "无要求"}</div>
                                        <div className={styles.col}>
                                            <div>
                                                <span className={styles.gray}>总投递 256</span>
                                                <Divider type="vertical" />
                                                <a>待处理 199</a>
                                            </div>
                                        </div>
                                        <div className={styles.col}>100</div>
                                        <div className={styles.col}>
                                            <Button>处理简历</Button>
                                            <Button>智能置顶</Button>
                                            <Button>刷新(99)</Button>
                                        </div>
                                        <div className={styles.col}>
                                            <Button>编辑</Button>
                                            <Button>下线</Button>
                                        </div>
                                    </div>
                                    <div className={classNames(styles.statusbar, item.status === JobStatus.AboutToExpire && styles.warning)}>
                                        <div className={styles.status}>
                                            {
                                                item.status === JobStatus.AboutToExpire ?
                                                    <><InfoCircleFilled style={{ marginRight: '5px' }} />即将过期</> :
                                                    '招聘中'
                                            }
                                        </div>
                                        <span className={styles.time}>{item.updateTime}更新</span>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className={styles.tfoot}>
                            <Pagination total={total} pageSize={pageSize} hideOnSinglePage={true} onChange={onPageChange} />
                        </div>
                    </div> :
                    <Empty description="无数据" />
                }
            </Spin>
        )
    }
}