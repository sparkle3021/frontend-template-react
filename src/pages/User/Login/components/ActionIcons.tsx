import { AlipayCircleOutlined, TaobaoCircleOutlined, WeiboCircleOutlined } from '@ant-design/icons';
import { createStyles } from 'antd-style';
import React from 'react';

const useStyles = createStyles(({ token }) => {
  return {
    action: {
      marginLeft: '8px',
      color: 'rgba(0, 0, 0, 0.2)',
      fontSize: '24px',
      verticalAlign: 'middle',
      cursor: 'pointer',
      transition: 'color 0.3s',
      '&:hover': {
        color: token.colorPrimaryActive,
      },
    },
  };
});

const ActionIcons: React.FC = () => {
  const { styles } = useStyles();
  return (
    <>
      <AlipayCircleOutlined className={styles.action} />
      <TaobaoCircleOutlined className={styles.action} />
      <WeiboCircleOutlined className={styles.action} />
    </>
  );
};

export default ActionIcons;
