import React, {MutableRefObject} from "react";
import {ProFormText} from "@ant-design/pro-components";
import {LockOutlined, UserOutlined} from "@ant-design/icons";
import {ACCOUNT_REGEX, PASSWORD_REGEX} from "@/constants/regex";
import CaptchaFormItem from "@/components/CaptchaFormItem/CaptchaFormItem";

interface AuthFormProps
{
    setCaptchaId: React.Dispatch<React.SetStateAction<string>>
    captchaRef: any
}


const AuthForm:React.FC<AuthFormProps> = ({setCaptchaId, captchaRef}) =>
{
    return <>
        <ProFormText
            name="userAccount-Login"
            fieldProps={{
                size: 'large',
                prefix: <UserOutlined/>,
            }}
            placeholder={'请输入账号'}
            rules={[
                {
                    required: true,
                    message: '账号是必填项！',
                },
                ACCOUNT_REGEX
            ]}
        />
        <ProFormText.Password
            name="userPassword-Login"
            fieldProps={{
                size: 'large',
                prefix: <LockOutlined/>,
            }}
            placeholder={'请输入密码'}
            rules={[
                {
                    required: true,
                    message: '密码是必填项！',
                },
                PASSWORD_REGEX
            ]}
        />
        <CaptchaFormItem setCaptchaId={setCaptchaId} captchaItemId="login-captcha" ref={captchaRef}/>
    </>
}

export default AuthForm;
