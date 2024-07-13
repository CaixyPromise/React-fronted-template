import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import '@umijs/max';
import React from 'react';
import defaultSettings from '../../../config/defaultSettings';

const Footer: React.FC = () => {
  const defaultMessage = 'CaixyPromise';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      style={{
        background: 'none',
      }}
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'title',
          title: defaultSettings.title,
          href: '/',
          blankTarget: true,
        },
        {
          key: 'github',
          title: (
            <>
              <GithubOutlined /> CaixyPromise
            </>
          ),
          href: 'https://github.com/CaixyPromise',
          blankTarget: true,
        },
      ]}
    />
  );
};
export default Footer;
