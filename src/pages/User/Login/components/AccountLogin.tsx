import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { ProFormText } from '@ant-design/pro-components';
import React from 'react';
import { LoginMessage } from '..';

interface AccountLoginProps {
  status: string | undefined;
  loginType: string | undefined;
}

const AccountLogin: React.FC<AccountLoginProps> = ({ status, loginType }) => {
  return (
    <>
      {status === 'error' && loginType === 'account' && (
        <LoginMessage content={'错误的用户名和密码(admin/123456)'} />
      )}
      <ProFormText
        name="username"
        fieldProps={{
          size: 'large',
          prefix: <UserOutlined />,
        }}
        placeholder={'用户名: admin or user'}
        rules={[
          {
            required: true,
            message: '用户名是必填项！',
          },
        ]}
      />
      <ProFormText.Password
        name="password"
        fieldProps={{
          size: 'large',
          prefix: <LockOutlined />,
        }}
        placeholder={'密码: 123456'}
        rules={[
          {
            required: true,
            message: '密码是必填项！',
          },
        ]}
      />
    </>
  );
};

export default AccountLogin;
