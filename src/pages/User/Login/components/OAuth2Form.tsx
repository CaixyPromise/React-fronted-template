import {FacebookOutlined, GithubOutlined, GoogleOutlined, XOutlined} from "@ant-design/icons";
import {List} from "antd";
import React from "react";
import {initiateGithubLoginUsingGet1} from "@/services/backend/userController";
import {HOME_HOST_DEV} from "@/constants";
import {OAuthTypeEnum} from "@/enums/OAuthTypeEnum";
import {UNIMPLEMENTED} from "@/utils/unImplemented";



interface OAuth2FormProps {

}

const OAuth2Form:React.FC<OAuth2FormProps> = () =>
{
    const doAuthLogin = async (provider: OAuthTypeEnum) => {
        try {
            const response = await initiateGithubLoginUsingGet1({
                redirectUri: HOME_HOST_DEV,
                provider: provider
            })
            if (response.code === 0 && response.data) {
                console.log(response.data)
                window.location.href = response.data
            }
        }
        catch (e : any)
        {

        }
    }


    const oauth2List: {
        icon: React.ReactNode,
        name: string,
        onClick: () => void
    }[] = [
        {
            icon: <GithubOutlined style={{ fontSize: '30px', color: "purple" }}/>,
            name: "github",
            onClick: () => {doAuthLogin(OAuthTypeEnum.GITHUB)}
        },
        {
            icon: <GoogleOutlined style={{ fontSize: '30px', color: "purple" }} />,
            name: "Google",
            onClick: UNIMPLEMENTED
        },
        {
            icon: <FacebookOutlined style={{ fontSize: '30px', color: "purple" }} />,
            name: "Facebook",
            onClick:UNIMPLEMENTED
        },
        {
            icon: <XOutlined style={{ fontSize: '30px', color: "purple" }}/>,
            name: "Twitter",
            onClick: UNIMPLEMENTED
        }
    ]

    return <>
        <List
            footer={null}
            dataSource={oauth2List}
            renderItem={(item) => {
                return <List.Item>
                    <List.Item.Meta
                        style={{
                            textAlign: "center"
                        }}
                        avatar={item.icon}
                        title={<a href="#" onClick={item.onClick}>{item.name}</a>}
                        description={"Sign in with " + item.name}
                    />
                </List.Item>
            }}
        />
    </>
}
export default OAuth2Form;

