import { LogoutOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import { history, useModel } from '@umijs/max';
import { Avatar, Button, Space } from 'antd';
import { stringify } from 'querystring';
import type { MenuInfo } from 'rc-menu/lib/interface';
import React, { useCallback } from 'react';
import { flushSync } from 'react-dom';
import { Link } from 'umi';
import HeaderDropdown from '../HeaderDropdown';
import {userLogoutUsingPost1} from "@/services/backend/userController";
import {LOGIN_PATH, STATIC_URL} from "@/constants";
import UserAvatar from "@/components/UserAvatar";

export type GlobalHeaderRightProps = {
    menu?: boolean;
};

export const AvatarDropdown: React.FC<GlobalHeaderRightProps> = ({ menu }) => {
    /**
     * 退出登录，并且将当前的 url 保存
     */
    const loginOut = async () =>
    {
        await userLogoutUsingPost1();
        const { search, pathname } = window.location;
        const urlParams = new URL(window.location.href).searchParams;
        /** 此方法会跳转到 redirect 参数所在的位置 */
        const redirect = urlParams.get('redirect');
        // Note: There may be security issues, please note
        if (window.location.pathname !== LOGIN_PATH && !redirect)
        {
            history.replace({
                pathname: LOGIN_PATH,
                search: stringify({
                    redirect: pathname + search,
                }),
            });
        }
    };

    const { initialState, setInitialState } = useModel('@@initialState');

    const onMenuClick = useCallback(
        (event: MenuInfo) =>
        {
            const { key } = event;
            if (key === 'logout')
            {
                flushSync(() => {
                    setInitialState((s) => ({ ...s, currentUser: undefined }));
                });
                loginOut();
                return;
            }
            history.push(`/account/settings/${key}`);
        },
        [setInitialState],
    );

    const { currentUser } = initialState || {};

    if (!currentUser) {
        return (
            <Link to="/user/login">
                <Button type="primary" shape="round">
                    登录
                </Button>
            </Link>
        );
    }

    const menuItems = [
        ...(menu
            ? [
                {
                    key: 'base',
                    icon: <UserOutlined />,
                    label: '个人中心',
                },
                {
                    key: 'security',
                    icon: <SettingOutlined />,
                    label: '个人设置',
                },
                {
                    type: 'divider' as const,
                },
            ]
            : []),
        {
            key: 'logout',
            icon: <LogoutOutlined />,
            label: '退出登录',
        },
    ];
    return (
        <HeaderDropdown
            menu={{
                selectedKeys: [],
                onClick: onMenuClick,
                items: menuItems,
            }}
        >
            <Space>
                {currentUser?.userAvatar ? (
                    <UserAvatar size="default" src={currentUser.userAvatar} />
                ) : (
                    <UserAvatar size="small" />
                )}
                <span className="anticon">{currentUser?.userName ?? '用户'}</span>
            </Space>
        </HeaderDropdown>
    );
};

export const AvatarName = () => {};
