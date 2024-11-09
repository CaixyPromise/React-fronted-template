import Footer from '@/components/Footer';
import {LoginForm} from '@ant-design/pro-components';
import {useEmotionCss} from '@ant-design/use-emotion-css';
import {Helmet, history, useModel} from '@umijs/max';
import {message, Tabs} from 'antd';
import React, {useMemo, useRef, useState} from 'react';
import Settings from '../../../../config/defaultSettings';
import {userRegisterUsingPost1} from "@/services/backend/userController";
import useAsyncHandler from "@/hooks/useAsyncHandler";
import AuthForm from "@/pages/User/Login/components/AuthForm";
import RegisterForm from "@/pages/User/Login/components/RegisterForm";
import {FormInstance} from "antd/lib";
import {CaptchaFormTypeProps} from "@/components/CaptchaFormItem/typing";
import OAuth2Form from "@/pages/User/Login/components/OAuth2Form";
import {userLoginUsingPost1} from "@/services/backend/authController";
import {TokenUtil} from "@/utils/TokenUtil";

const Login: React.FC = () =>
{
    enum ActionType
    {
        AccountLogin = "account",
        Register = "register",
        OAuth2 = "oauth2"
    }

    const formRef = useRef<FormInstance>();
    const [ type, setType ] = useState<ActionType>(ActionType.AccountLogin);
    const { initialState, setInitialState } = useModel('@@initialState');
    const [ loginHandler, isPending, ] = useAsyncHandler<API.LoginUserVO>()
    const [ registerHandler, isPendingRegister ] = useAsyncHandler<boolean>()
    const [ captchaId, setCaptchaId ] = useState<string>("");
    const captchaRef = useRef<CaptchaFormTypeProps.CaptchaFormItemHandle>();

    const styles = useMemo(() =>
    {
        const baseStyle = {
            transition: 'opacity 0.5s ease, max-height 0.5s ease',
            maxHeight: '0px',
            overflow: 'hidden',
            opacity: 0
        };

        const activeStyle = {
            maxHeight: '440px',
            opacity: 1

        };

        return {
            formField: type ? { ...baseStyle } : { ...baseStyle, ...activeStyle },
            formFieldActive: { ...baseStyle, ...activeStyle }
        };
    }, [ type ]);
    const containerClassName = useEmotionCss(() =>
    {
        return {
            display: 'flex',
            flexDirection: 'column',
            height: '100vh',
            overflow: 'auto',
            backgroundImage:
                "url('https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/V-_oS6r-i7wAAAAAAAAAAAAAFl94AQBr')",
            backgroundSize: '100% 100%',
        };
    });

    const handleLogin = async (values: API.UserLoginRequest) =>
    {
        const onSuccess = (res: API.LoginUserVO) => {
          if (TokenUtil.isTokenLoggedIn()) {
            const {token} = res;
            if (token === undefined) {
              message.error('登录失败，token为空');
              return -1;
            }
            TokenUtil.setToken(token);
          }
          // 保存已登录用户信息
          setInitialState((prevState: any) => ({
            ...prevState,
            ...res,
            currentUser: res,
          }));
          return 0;
        }
        const onError = (error: Error) =>
        {
            const defaultLoginFailureMessage = `登录失败，${error.message}`;
            message.error(defaultLoginFailureMessage);
            // 重新获取验证码
            captchaRef.current?.refreshCaptcha();
        };

        const res = await loginHandler(async () =>
        {
            console.log("values: ", values)
            // 登录
            const response = await userLoginUsingPost1({
                ...values,
                captchaId
            });
            if (response.code !== 0) {
                return Promise.reject(new Error('登录请求失败'));
            }
            return response.data;
        }, [], onError);

        if (res)
        {
            const defaultLoginSuccessMessage = '登录成功！';
            message.success(defaultLoginSuccessMessage);
            if (!onSuccess(res)) {
              const urlParams = new URL(window.location.href).searchParams;
              const redirectUrl = urlParams.get('redirect') || '/';
              history.push(redirectUrl);
            }
        }
    };

    const handleRegister = async (values: API.UserRegisterRequest) =>
    {
        const onError = (error: Error) =>
        {
            const defaultLoginFailureMessage = `注册失败，${error.message}`;
            message.error(defaultLoginFailureMessage);
            captchaRef.current?.refreshCaptcha();
        };

        const res = await registerHandler(async () =>
        {
            // 注册
            const response = await userRegisterUsingPost1({
                ...values,
                captchaId
            });
            if (!response.data)
            {
                message.error(`注册失败：${response.message}`)
                return Promise.reject(new Error('注册请求失败'));
            }
            return response.data;
        }, [], onError);

        if (res)
        {
            const defaultLoginSuccessMessage = '注册成功！';
            message.success(defaultLoginSuccessMessage);
            return { success: true, userAccount: values.userAccount }
        }
        else
        {
            return { success: false, userAccount: null }
        }
    }

    const getTabList = (): {
        key: string;
        label: string;
        dom?: React.ReactNode;
    }[] => ([
        {
            key: ActionType.AccountLogin,
            label: '账户密码登录',
            dom: <AuthForm setCaptchaId={setCaptchaId} captchaRef={captchaRef}/>,
        },
        {
            key: ActionType.Register,
            label: '用户注册',
            dom: <RegisterForm setCaptchaId={setCaptchaId} captchaRef={captchaRef}/>
        },
        {
            key: ActionType.OAuth2,
            label: '第三方登录',
            dom: <OAuth2Form />
        }
    ])

    const onSubmit = async () =>
    {
        const values = formRef.current?.getFieldsValue();

        if (type === ActionType.AccountLogin)
        {
            formRef?.current
                ?.validateFields?.([ 'userAccount-Login', 'userPassword-Login', 'login-captcha' ])
                .then(async values => {
                    await handleLogin({
                        userAccount: values['userAccount-Login'],
                        userPassword: values['userPassword-Login'],
                        captcha: values['login-captcha']
                    }).finally(() => {
                        formRef.current?.resetFields();
                    });
                });
        }
        else
        {
            formRef?.current
                ?.validateFields
                ?.([ 'userAccount', 'userPassword', 'register-captcha' ])
                .then(async values => {
                    const { success, userAccount } = await handleRegister({
                        ...values,
                        captcha: values['register-captcha']
                    })
                    if (success)
                    {
                        formRef.current?.resetFields();
                        formRef.current?.setFieldsValue({
                            "userAccount-Login": userAccount,
                        })
                        setType(ActionType.AccountLogin);
                    }
            })
        }
    }

    return (
        <div className={containerClassName}>
            <Helmet>
                <title>
                    {'登录'} - {Settings.title}
                </title>
            </Helmet>
            <div
                style={{
                    flex: '1',
                    padding: '32px 0',
                }}
            >
                <LoginForm
                    contentStyle={{
                        minWidth: 280,
                        maxWidth: '75vw',
                    }}
                    formRef={formRef}
                    logo={<img alt="logo" style={{ height: '100%' }} src="/logo.svg"/>}
                    title="前端模板"
                    subTitle={'快速开发属于自己的前端项目'}
                    initialValues={{
                        autoLogin: true,
                    }}
                    style={{
                        marginBottom: "-15px"
                    }}
                    submitter={{
                        searchConfig: {
                            submitText: type === ActionType.Register ? '注册' : '登录'
                        },
                        submitButtonProps: {
                            onClick: onSubmit
                        }
                    }}
                >
                    <Tabs
                        activeKey={type}
                        onChange={(activeKey) =>
                        {
                            setType(activeKey as ActionType)
                            captchaRef.current?.refreshCaptcha();
                        }}
                        centered
                        items={getTabList()}
                    />
                    {
                        getTabList().map((item, index) =>
                        {
                            return <>
                                <div key={index}
                                     style={type === item.key ? styles.formFieldActive : styles.formField}>
                                    {item.dom}
                                </div>
                            </>
                        })
                    }

                    <div
                        style={{
                            marginBottom: 24,
                            textAlign: 'right',
                        }}
                    >
                        {
                            type === ActionType.AccountLogin
                                ? <a onClick={() => setType(ActionType.Register)}>新用户注册</a>
                                : <a onClick={() => setType(ActionType.AccountLogin)}>使用已有账户登录</a>
                        }
                    </div>
                </LoginForm>
            </div>
            <Footer/>
        </div>
    );
};
export default Login;
