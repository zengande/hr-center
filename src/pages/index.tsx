import React from 'react';
import styles from './index.less';
import { Button, Card, Row, Col } from 'antd'
import { SendOutlined } from '@ant-design/icons';

export default () => {
  return (
    <div>
      <Card bordered={true}>
        <div>
            早上好，**科技
            <div>
            <Button type="primary" icon={<SendOutlined />}>发布职位</Button>
          </div>
        </div>

      </Card>
      <div>
        <Button>test</Button>
      </div>
    </div>
  );
}
