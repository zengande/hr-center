import React from 'react';
import styles from './BasicLayout.less'
import GlobalHeader from '@/components/global-header';
import GlobalFooter from '@/components/global-footer';

export default class BasicLayout extends React.PureComponent {
    render() {
        const { children } = this.props;

        return (
            <div>
                <GlobalHeader />

                <div className={styles.body}>
                    {children}
                </div>

                <GlobalFooter/>
            </div>
        )
    }
}