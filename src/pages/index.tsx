import React from 'react';
import styles from './index.less';
import { Button, Calendar as ACalendar, Row, Col, Card } from 'antd'
import { SendOutlined, ContactsOutlined } from '@ant-design/icons';
import zhCN from 'antd/lib/calendar/locale/zh_CN';
import moment from 'moment';
import classNames from 'classnames'

export default () => {
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
            <Calendar data={[{ key: '2020/03/23', value: 5 }, { key: '2020/03/10', value: 8 }]} />
          </div>
          <div className={styles.content}>
            <h2 className={styles.title}>当日面试安排<span className='text-highlight'>8</span>场</h2>
            <div className={styles.list}>
              <p>1</p>
              <p>1</p>
              <p>1</p>
              <p>1</p>
              <p>1</p>
              <p>1</p>
              <p>1</p>
              <p>1</p>
              <p>1</p>
              <p>1</p>
              <p>1</p>
              <p>1</p>
              <p>1</p>
              <p>1</p>
              <p>1</p>
              <p>1</p>
              <p>1</p>
              <p>1</p>
              <p>1</p>
              <p>1</p>
              <p>1</p>
              <p>1</p>
              <p>1</p>
              <p>1</p>
            </div>
          </div>
        </div>

        <div style={{ marginTop: "20px", clear:'both' }}>
          <Row gutter={20}>
            <Col span={6}><Card bordered={false}>
              <h3>近7日简历处理率</h3>
              <b>97%</b>
              <p>全平台平均值 73%</p>
            </Card></Col>
            <Col span={6}><Card bordered={false}>
              <h3>近7日简历处理率</h3>
              <b>97%</b>
              <p>全平台平均值 73%</p>
            </Card></Col>
            <Col span={6}><Card bordered={false}>
              <h3>近7日简历处理率</h3>
              <b>97%</b>
              <p>全平台平均值 73%</p>
            </Card></Col>
            <Col span={6}><Card bordered={false}>
              <h3>近7日简历处理率</h3>
              <b>97%</b>
              <p>全平台平均值 73%</p>
            </Card></Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

interface ICalendarProps {
  onSelect?: (date: moment.Moment) => void;
  data?: Array<{ key: string, value: number }>
}
interface ICalendarState {
  selectedDate?: moment.Moment
}
class Calendar extends React.PureComponent<ICalendarProps, ICalendarState> {

  constructor(props: ICalendarProps) {
    super(props);
    this.state = {
      selectedDate: moment()
    }
  }

  render() {
    return (
      <ACalendar locale={zhCN}
        fullscreen={false}
        onSelect={date => this.onSelect(date)}
        dateFullCellRender={date => this.renderCell(date)} />
    )
  }

  renderCell(date: moment.Moment) {
    const { selectedDate } = this.state;
    const isSelected = date.isSame(selectedDate, "d");
    const isToday = !isSelected && moment().isSame(date, "d");
    const value = this.getValue(date);

    return (
      <div className={classNames(styles.cell, isToday && styles.today, isSelected && styles.selected)}>
        {date.date()}
        {value > 0 && (<span className={styles.num}>{value}</span>)}
      </div>
    )
  }

  getValue(date: moment.Moment) {
    const { data } = this.props;
    if (!data) {
      return 0;
    }

    let value = 0;
    for (let index = 0; index < data.length; index++) {
      const item = data[index];
      var current = moment(item.key)
      if (current.isValid() && date.isSame(current, "d")) {
        value = item.value
        break;
      }
    }
    return value;
  }

  onSelect(date: moment.Moment) {
    this.setState({ selectedDate: date })
    const { onSelect } = this.props;
    onSelect && onSelect(date);
  }
}
