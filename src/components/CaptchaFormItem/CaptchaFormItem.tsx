import React, {forwardRef, useEffect, useImperativeHandle, useState} from "react";
import {ProFormText} from "@ant-design/pro-components";
import {SmileOutlined} from "@ant-design/icons";
import {getCaptchaUsingGet1} from "@/services/backend/captchaController";
import {Image, message, Spin} from "antd";
import useAsyncHandler from "@/hooks/useAsyncHandler";
import {CaptchaFormTypeProps} from "@/components/CaptchaFormItem/typing";


const CaptchaFormItem: CaptchaFormTypeProps.ComponentReturnType = forwardRef<
    CaptchaFormTypeProps.CaptchaFormItemHandle,
    CaptchaFormTypeProps.CaptchaFormItemProps
>(({ setCaptchaId, captchaItemId }, ref) =>
    {
        const [ captcha, setCaptcha ] = useState<string>('');
        const [ queryCaptchaHandler, loading ] = useAsyncHandler<API.CaptchaVO>();

        const fetchCaptcha = async () =>
        {
            const captchaResponse = await queryCaptchaHandler(async () =>
            {
                const { data, code } = await getCaptchaUsingGet1();
                if (code !== 0)
                {
                    return Promise.reject()
                }
                return data as API.CaptchaVO
            }, [], () => message.error('获取验证码失败, 请点击重新刷新'));
            if (captchaResponse)
            {
                setCaptcha(captchaResponse.codeImage || ""); // 存储Base64编码的图像
                setCaptchaId(captchaResponse.uuid || "")     // 存储图像验证码的id
            }
        };

        useEffect(() =>
        {
            fetchCaptcha();
        }, [])

        useImperativeHandle(ref, () => ({
            refreshCaptcha: fetchCaptcha
        }))

        return <>
            <div style={{
                marginTop: 16,
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
            }}>
                <ProFormText
                    name={captchaItemId}
                    rules={[ {
                        required: true,

                        validator: async (_, value) =>
                        {
                            if (value === null || value === '')
                            {
                                return Promise.reject("验证码不能为空!")
                            }
                        }
                    } ]}
                    fieldProps={{
                        prefix: <SmileOutlined/>,
                        size: "large",
                        style: { width: '210px' }
                    }}
                    placeholder={"请输入验证码"}
                    style={{
                        flex: 1,
                    }}
                />
                <Spin spinning={loading}>
                    <Image
                        src={`data:image/png;base64,${captcha}`}
                        preview={false}
                        onClick={fetchCaptcha}
                        style={{
                            width: '110px',
                            height: '50px',
                            cursor: 'pointer',
                            borderRadius: "6px",
                            border: "1px solid transparent",
                        }}
                    />
                </Spin>
            </div>
        </>
    })

export default CaptchaFormItem;
