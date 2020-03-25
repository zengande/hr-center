import React from 'react';
import styles from './BasicLayout.less'
import GlobalHeader from '@/components/global-header';
import GlobalFooter from '@/components/global-footer';

export default class BasicLayout extends React.PureComponent<any> {
    render() {
        const { children, location: { pathname } } = this.props;

        return (
            <div>
                <GlobalHeader pathname={pathname} />

                <div className={styles.body}>
                    {children}
                </div>

                <GlobalFooter />
            </div>
        )
    }
}