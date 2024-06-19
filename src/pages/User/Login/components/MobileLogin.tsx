import { getFakeCaptcha } from '@/services/ant-design-pro/login';
import { LockOutlined, MobileOutlined } from '@ant-design/icons';
import { ProFormCaptcha, ProFormText } from '@ant-design/pro-components';
import { message } from 'antd';
import React from 'react';
import { LoginMessage } from '..';

interface MobileLoginProps {
  status: string | undefined;
  loginType: string | undefined;
}

const MobileLogin: React.FC<MobileLoginProps> = ({ status, loginType }) => {
  return (
    <>
      {status === 'error' && loginType === 'mobile' && <LoginMessage content="验证码错误" />}
      <ProFormText
        fieldProps={{
          size: 'large',
          prefix: <MobileOutlined />,
        }}
        name="mobile"
        placeholder={'请输入手机号！'}
        rules={[
          {
            required: true,
            message: '手机号是必填项！',
          },
          {
            pattern: /^1\d{10}$/,
            message: '不合法的手机号！',
          },
        ]}
      />
      <ProFormCaptcha
        fieldProps={{
          size: 'large',
          prefix: <LockOutlined />,
        }}
        captchaProps={{
          size: 'large',
        }}
        placeholder={'请输入验证码！'}
        captchaTextRender={(timing, count) => {
          if (timing) {
            return `${count} ${'秒后重新获取'}`;
          }
          return '获取验证码';
        }}
        name="captcha"
        rules={[
          {
            required: true,
            message: '验证码是必填项！',
          },
        ]}
        onGetCaptcha={async (phone) => {
          const result = await getFakeCaptcha({
            phone,
          });
          if (!result) {
            return;
          }
          message.success('获取验证码成功！验证码为：1234');
        }}
      />
    </>
  );
};

export default MobileLogin;
