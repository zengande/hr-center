import React from 'react';
import moment from 'moment';
import { CalendarInfo } from '@/@types/calendar';
import classNames from 'classnames'
import zhCN from 'antd/lib/calendar/locale/zh_CN';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Calendar as ACalendar, Button } from 'antd'
import styles from '@/pages/index.less'

interface ICalendarProps {
    onSelect?: (date: moment.Moment) => void;
    data?: CalendarInfo[]
}
interface ICalendarState {
    selectedDate?: moment.Moment;
    displayDate?: moment.Moment;
}
export default class Calendar extends React.PureComponent<ICalendarProps, ICalendarState> {

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
                dateFullCellRender={date => this.renderCell(date)}/>
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
                <Button type="link" className={styles.calender_btn} icon={<LeftOutlined />} onClick={() => this.setDisplayDate(value.clone().add(-1, "M"), onChange)} />
                <b>{value.format('YYYY年MM月')}</b>
                <Button type="link" className={styles.calender_btn} icon={<RightOutlined />} onClick={() => this.setDisplayDate(value.clone().add(1, "M"), onChange)} />
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
            var current = moment(item.date)
            if (current.isValid() && date.isSame(current, "d")) {
                value = item.count
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