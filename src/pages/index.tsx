import React from 'react';
import styles from './index.less';
import { Button, Calendar as ACalendar, Row, Col, Card, Avatar, Badge } from 'antd'
import { SendOutlined, ContactsOutlined, LeftOutlined, RightOutlined, UserOutlined, MessageOutlined } from '@ant-design/icons';
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
            <Calendar data={[{ key: '2020/03/23', value: 5 }, { key: moment().format(), value: 8 }, { key: '2020/03/10', value: 8 }]} onSelect={date => console.log(date)} />
          </div>
          <div className={styles.content}>
            <h2 className={styles.title}>当日面试安排<span className='text-highlight'>8</span>场</h2>
            <div className={styles.list}>
              <div className={styles.item}>
                <p className={styles.item_time}>10:00</p>
                <div className={styles.item_content}>
                  <Avatar size={32} icon={<UserOutlined />} className={styles.content_avatar} />
                  <b className={styles.content_name}>张三</b>
                  <span className={styles.content_title}>前端工程师</span>
                  <Button className={styles.content_message} type="link" icon={<MessageOutlined />} />
                </div>
                <div className={styles.item_content}>
                  <Avatar size={32} icon={<UserOutlined />} className={styles.content_avatar} />
                  <b className={styles.content_name}>张三</b>
                  <span className={styles.content_title}>前端工程师</span>
                  <Button className={styles.content_message} type="link" icon={<MessageOutlined />} />
                </div>
                <div className={styles.item_content}>
                  <Avatar size={32} icon={<UserOutlined />} className={styles.content_avatar} />
                  <b className={styles.content_name}>张三</b>
                  <span className={styles.content_title}>前端工程师</span>
                  <Button className={styles.content_message} type="link" icon={<Badge dot><MessageOutlined /></Badge>} />
                </div>
                <div className={styles.item_content}>
                  <Avatar size={32} icon={<UserOutlined />} className={styles.content_avatar} />
                  <b className={styles.content_name}>张三</b>
                  <span className={styles.content_title}>前端工程师</span>
                  <Button className={styles.content_message} type="link" icon={<Badge dot><MessageOutlined /></Badge>} />
                </div>
              </div>
              <div className={styles.item}>
                <p className={styles.item_time}>14:00</p>
                <div className={styles.item_content}>
                  <Avatar size={32} icon={<UserOutlined />} className={styles.content_avatar} />
                  <b className={styles.content_name}>张三</b>
                  <span className={styles.content_title}>前端工程师</span>
                  <Button className={styles.content_message} type="link" icon={<MessageOutlined />} />
                </div>
              </div>
              <div className={styles.item}>
                <p className={styles.item_time}>14:30</p>
                <div className={styles.item_content}>
                  <Avatar size={32} icon={<UserOutlined />} className={styles.content_avatar} />
                  <b className={styles.content_name}>张三</b>
                  <span className={styles.content_title}>前端工程师</span>
                  <Button className={styles.content_message} type="link" icon={<MessageOutlined />} />
                </div>
                <div className={styles.item_content}>
                  <Avatar size={32} icon={<UserOutlined />} className={styles.content_avatar} />
                  <b className={styles.content_name}>张三</b>
                  <span className={styles.content_title}>前端工程师</span>
                  <Button className={styles.content_message} type="link" icon={<Badge dot><MessageOutlined /></Badge>} />
                </div>
              </div>
              <div className={styles.item}>
                <p className={styles.item_time}>16:00</p>
                <div className={styles.item_content}>
                  <Avatar size={32} icon={<UserOutlined />} className={styles.content_avatar} />
                  <b className={styles.content_name}>张三</b>
                  <span className={styles.content_title}>前端工程师</span>
                  <Button className={styles.content_message} type="link" icon={<MessageOutlined />} />
                </div>
              </div>
            </div>
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
  );
}

interface ICalendarProps {
  onSelect?: (date: moment.Moment) => void;
  data?: Array<{ key: string, value: number }>
}
interface ICalendarState {
  selectedDate?: moment.Moment;
  displayDate?: moment.Moment;
}
class Calendar extends React.PureComponent<ICalendarProps, ICalendarState> {

  constructor(props: ICalendarProps) {
    super(props);
    const now = moment();
    this.state = {
      selectedDate: now,
      displayDate: now
    }
  }

  render() {
    const { displayDate } = this.state;
    return (
      <ACalendar locale={zhCN}
        fullscreen={false}
        value={displayDate}
        onSelect={date => this.onSelect(date)}
        headerRender={config => this.renderHeader(config)}
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

  renderHeader(config: { value: moment.Moment, type: string, onChange: (date: moment.Moment) => void }) {
    const { value, onChange } = config;
    const { displayDate } = this.state;

    return (
      <div className={styles.calender_header}>
        <Button type="link" icon={<LeftOutlined />} onClick={() => this.setDisplayDate(value.clone().add(-1, "M"), onChange)} />
        <b>{value.format('YYYY年MM月')}</b>
        <Button type="link" icon={<RightOutlined />} onClick={() => this.setDisplayDate(value.clone().add(1, "M"), onChange)} />
        {!moment().isSame(displayDate, "d") && <Button type="link" className={styles.today} onClick={() => this.setDisplayDate(moment(), onChange)}>今天</Button>}

      </div>
    )
  }

  setDisplayDate(date: moment.Moment, onChange: (date: moment.Moment) => void) {
    this.setState({ displayDate: date });
    onChange(date);
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
    this.setState({ selectedDate: date, displayDate: date })
    const { onSelect } = this.props;
    onSelect && onSelect(date);
  }
}
