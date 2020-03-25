import React from 'react';
import HeaderRadioGroup from '@/components/header-radio-group';
import styles from './CVs.less';
import { Row, Col } from 'antd'
import SearchForm from './components/cvs/search-form';
import CurriculumVitaeList from './components/cvs/curriculum-vitae-list';
import { connect, DispatchProp } from 'dva';
import { CVsModelState } from './models/cvs';
import { CurriculumVitaeModel } from '@/@types/cv';

interface CVsProps extends DispatchProp {
    loading?: boolean;
    total?: number;
    data?: CurriculumVitaeModel[]
}
class CVs extends React.PureComponent<CVsProps> {
    state = {
        type: 1
    }

    componentDidMount() {
        this.fetch({ pageSize: 10 });
    }

    fetch(query?: any) {
        this.props.dispatch({ type: 'cvs/fetch', payload: { ...query } })
    }

    render() {
        const { loading, total, data } = this.props;

        console.log(this.props);

        const groupData = [
            { value: 1, text: '待处理(0)' },
            { value: 2, text: '待定(0)' },
            { value: 3, text: '通知面试(0)' },
            { value: 4, text: '录用(0)' },
            { value: 5, text: '系统过滤' },
            { value: 6, text: '不合适' }
        ];
        const { type } = this.state;

        return (
            <div className={styles.container}>
                <HeaderRadioGroup data={groupData} value={type} onChange={value => this.setState({ type: value })} />
                <div className={styles.search}>
                    <h1 className={styles.title}>{total} 封待处理简历</h1>
                    <SearchForm />
                </div>
                <CurriculumVitaeList total={total}
                    data={data}
                    loading={loading}
                    onPageChange={page => this.fetch({ page })} />
            </div>
        )
    }
}

export default connect(({ loading, cvs }: { loading: any, cvs: CVsModelState }) => ({
    loading: loading.effects['cvs/fetch'],
    ...cvs
}))(CVs)