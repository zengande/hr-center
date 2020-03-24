import React from 'react';
import styles from './index.less';
import { Button, Row, Col, Card, Spin, Skeleton } from 'antd'
import { SendOutlined, ContactsOutlined } from '@ant-design/icons';
import moment from 'moment';
import { IndexModelState } from 'umi';
import { connect, DispatchProp } from 'dva';
import { CalendarModel, InterviewModel } from '@/@types/calendar';
import Calendar from './components/index/calendar';
import InterviewList from './components/index/interview-list';

interface IndexProps extends DispatchProp {
  calendar?: CalendarModel[];
  interviewList?: InterviewModel;
  calendarLoading?: boolean;
  interviewListLoading?: boolean;
}

interface IndexState {
}

class Index extends React.PureComponent<IndexProps, IndexState> {
  constructor(props: IndexProps) {
    super(props);
    this.state = {}
  }
  componentDidMount() {
    this.props.dispatch({ type: 'index/fetchCalendar', payload: moment().format('YYYY/MM/DD') })
  }

  fetchList(date: string) {
    this.props.dispatch({ type: 'index/fetchInterviewList', payload: date });
  }

  render() {
    const { calendar = [], interviewList, calendarLoading, interviewListLoading } = this.props;

    const calendarDate = calendar.map(item => ({
      date: item.date,
      count: item.count
    }))
    return (
      <div className={styles.container}>
        <div className={styles.left}>
          <h1>早上好，**科技</h1>
          <p>遇到问题可以点击右下角反馈按钮联系客服哦。</p>
          <Button type="primary" icon={<SendOutlined />}>发布职位</Button>
          <div className={styles.menus}>
            <div className={styles.menuItem}>
              <img className={styles.item_logo} />
              <span className={styles.item_text}>职位刷新</span>
            </div>
            <div className={styles.menuItem}>
              <img className={styles.item_logo} />
              <span className={styles.item_text}>智能置顶</span>
            </div>
            <div className={styles.menuItem}>
              <img className={styles.item_logo} />
              <span className={styles.item_text}>搜寻人才</span>
            </div>
            <div className={styles.menuItem}>
              <img className={styles.item_logo} />
              <span className={styles.item_text}>招聘专场</span>
            </div>
            <div className={styles.menuItem}>
              <img className={styles.item_logo} />
              <span className={styles.item_text}>急速招聘</span>
            </div>
            <div className={styles.menuItem}>
              <img className={styles.item_logo} />
              <span className={styles.item_text}>在线考试</span>
            </div>
            <div className={styles.menuItem}>
              <img className={styles.item_logo} />
              <span className={styles.item_text}>校园招聘方案</span>
            </div>
            <div className={styles.menuItem}>
              <img className={styles.item_logo} />
              <span className={styles.item_text}>实习管家</span>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.cards}>
            <div className={styles.card}>
              <p className={styles.card_tip}><ContactsOutlined /> 累计发布职位 400</p>
              <div className={styles.card_left}>
                <h2>在招职位</h2>
                <p>即将过期0</p>
              </div>
              <b className={styles.card_num}>19</b>
            </div>
            <div className={styles.card}>
              <p className={styles.card_tip}><ContactsOutlined /> 累计收到简历 9999+</p>
              <div className={styles.card_left}>
                <h2>待反馈</h2>
                <p>未读99+</p>
              </div>
              <b className={styles.card_num}>99+</b>
            </div>
            <div className={styles.card}>
              <p className={styles.card_tip}><ContactsOutlined /> 累计通知面试 156</p>
              <div className={styles.card_left}>
                <h2>面试安排</h2>
                <p><span>延期0</span><span>放弃0</span></p>
              </div>
              <b className={styles.card_num}>06</b>
            </div>
            <div className={styles.card}>
              <p className={styles.card_tip}><ContactsOutlined /> 累计发出录用 56</p>
              <div className={styles.card_left}>
                <h2>本周录用</h2>
                <p>上周录用03</p>
              </div>
              <b className={styles.card_num}>11</b>
            </div>
          </div>
          <div className={styles.main}>
            <div className={styles.content}>
              <Spin tip="正在获取日程" spinning={calendarLoading}>
                <Calendar data={calendarDate} onSelect={date => this.fetchList(date.format('YYYY/MM/DD'))} />
              </Spin>
            </div>
            <div className={styles.content}>
              <Skeleton loading={interviewListLoading || calendarLoading} active paragraph={{ rows: 5, width: '100%' }} >
                <InterviewList data={interviewList} />
              </Skeleton>
            </div>
          </div>
          <div style={{ marginTop: "20px", clear: 'both' }}>
            <Row gutter={20}>
              <Col span={6}>
                <Card className={styles.footer_card} bordered={false}>
                  <h3>近7日简历处理率</h3>
                  <b>97%</b>
                  <p>全平台平均值 73%</p>
                </Card>
              </Col>
              <Col span={6}>
                <Card className={styles.footer_card} bordered={false}>
                  <h3>近7日平均处理时间</h3>
                  <b>0.8</b>
                  <span className={styles.unit}>天</span>
                  <p>全平台平均值 1.2天</p>
                </Card>
              </Col>
              <Col span={6}>
                <Card className={styles.footer_card} bordered={false}>
                  <h3>近7日通知反馈率</h3>
                  <b>38%</b>
                  <p>全平台平均值 65%</p>
                </Card>
              </Col>
              <Col span={6}>
                <Card className={styles.footer_card} bordered={false}>
                  <h3>近7日平均反馈时间</h3>
                  <b>2.3</b>
                  <span className={styles.unit}>天</span>
                  <p>全平台平均值 6.3天</p>
                </Card>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(({ index, loading }: { loading: any, index: IndexModelState }) => ({
  calendar: index.calendar,
  interviewList: index.interviewList,
  calendarLoading: loading.effects['index/fetchCalendar'],
  interviewListLoading: loading.effects['index/fetchInterviewList'],
}))(Index)
