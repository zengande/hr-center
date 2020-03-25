import React from 'react';
import styles from './index.less'
import classNames from 'classnames';
import { Input } from 'antd'
const { Search } = Input;

export interface RadioGroupData {
    value: string | number;
    text: string
}

export interface HeaderRadioGroupProps {
    data?: RadioGroupData[];
    name?: string;
    value?: string | number;
    onChange?: (value: string | number) => void;
    onSearch?: (value: string) => void;
}

export default class HeaderRadioGroup extends React.PureComponent<HeaderRadioGroupProps> {
    render() {
        const { data, value, onChange, onSearch } = this.props;
        return (data && data.length > 0) ?
            <div className={styles.container}>
                <div className={styles.list}>
                    {data.map(item => (
                        <div key={item.value}
                            className={classNames(styles.item, value === item.value && styles.checked)}
                            onClick={() => { onChange && onChange(item.value) }}>
                            {item.text}
                        </div>
                    ))}
                </div>
                <Search
                    className={styles.search}
                    placeholder="请输入搜索内容"
                    onSearch={onSearch}
                />
            </div>
            : <></>
    }
}