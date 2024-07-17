import React from "react";

declare namespace CaptchaFormTypeProps
{
    interface CaptchaFormItemProps
    {
        setCaptchaId: React.Dispatch<React.SetStateAction<string>>
    }

// 定义暴露给父组件的方法
    export interface CaptchaFormItemHandle
    {
        // 刷新验证码
        refreshCaptcha: () => void;
    }

    type ComponentReturnType = React.ForwardRefExoticComponent<Omit<CaptchaFormItemProps, "ref"> & React.RefAttributes<CaptchaFormItemHandle>>;
}
