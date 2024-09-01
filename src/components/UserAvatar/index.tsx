import React, {useMemo} from "react";
import {Avatar} from "antd";
import {UserOutlined} from "@ant-design/icons";
import {STATIC_URL} from "@/constants";
import {isFullUrl} from "@/constants/regex";

interface UserAvatarProps
{
    size?: 'large' | 'small' | 'default' | number;  // 调整 size 类型以适应 Ant Design 的 Avatar 组件
    src?: string;
}

// 定义一个帮助函数来检测 URL 是否完整


// React 组件
const UserAvatar: React.FC<UserAvatarProps> = ({size = 'default', src}) =>
{
    // 使用 useMemo 来优化 avatarSrc 的计算
    const avatarSrc = useMemo(() =>
    {
        // 如果 src 为空，则直接返回 undefined
        if (!src)
        {
            return undefined;
        }
        // 如果 src 是完整的 URL，则直接使用 src
        // 否则拼接 STATIC_URL 和 src
        return isFullUrl(src) ? src : `${STATIC_URL}${src}`;
    }, [src]);  // 依赖于 src，当 src 变化时重新计算

    return (
        <Avatar
            size={size}
            src={avatarSrc}
            // 当 avatarSrc 未定义时，显示默认的 UserOutlined 图标
            icon={!avatarSrc ? <UserOutlined/> : undefined}
        />
    );
};

export default UserAvatar;