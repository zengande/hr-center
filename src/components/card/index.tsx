import React from 'react';
import styles from './index.less';

export default class Card extends React.PureComponent {
    render() {
        const { children } = this.props;

        return (
            <div className={styles.container}>
                {children}
            </div>
        )
    }
}