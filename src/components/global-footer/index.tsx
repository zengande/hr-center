import React from 'react';
import styles from './index.less';

export default class GlobalFooter extends React.PureComponent{
    render(){
        return(
            <div className={styles.container}>
                <div className={styles.item}>©2020|*ICP备********号|联系我们: ***@***.com</div>
                <div className={styles.item}>**科技有限公司版权所有</div>
                <div className={styles.item}>客户服务热线：400-***-**** 服务时间：周一至周五 09:00-18:00</div>
            </div>
        )
    }
}