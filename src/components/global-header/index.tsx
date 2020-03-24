import React from 'react';
import styles from './index.less';
import { Layout, Menu, Row, Col } from 'antd'
import { Link } from 'umi';

const Header = Layout.Header;

const menus = [{
    href: '/',
    text: '首页'
}, {
    href: '/cvs',
    text: '简历中心'
}, {
    href: '/jobs',
    text: '职位中心'
}, {
    href: '/search',
    text: '搜寻人才'
}, {
    href: '/quick',
    text: '急速招聘'
}, {
    href: '/account',
    text: '账号中心'
}]

export default class GlobalHeader extends React.PureComponent {
    render() {
        return (

            <Header>
                <div className={styles.container}>
                    <div className={styles.logo} />
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['/']}
                        style={{ lineHeight: '64px' }}
                    >
                        {menus.map((item, index) => (
                            <Menu.Item key={item.href}><Link to={item.href}>{item.text}</Link></Menu.Item>
                        ))}
                    </Menu>
                </div>
            </Header >
        )
    }
}