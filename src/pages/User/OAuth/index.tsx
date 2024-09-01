import {useEffect} from "react";
import {useLocation} from "@umijs/max";
import {githubLoginCallbackUsingGet1} from "@/services/backend/userController";

const GithubCallback = () => {
    const location = useLocation();

    useEffect(() => {
        console.log("GithubCallback")
        const params = new URLSearchParams(location.search);
        const code = params.get('code');
        const state = params.get('state');

        const response = githubLoginCallbackUsingGet1({
            code,
            state
        }).then(res => {
            if (res.code === 0 && res.data) {
                console.log('Authentication successful:', res.data);
                if (res.data.redirected) {
                    window.location.href = res.data.redirected;
                } else {
                    window.location.href = '/';
                }

            }
        })

        // 这里发送请求到你的后端，例如 http://localhost:7529/api/oauth2/github/callback
        // fetch(`http://localhost:7529/api/oauth2/github/callback?code=${code}&state=${state}`, {
        //     method: 'GET',
        //     credentials: 'include',  // 如果需要跨域携带 cookie
        // })
        //     .then(response => response.json())
        //     .then(data => {
        //         console.log('Authentication successful:', data);
        //         // 处理登录成功后的逻辑，例如重定向到主页或显示用户信息
        //     })
        //     .catch(error => {
        //         console.error('Error during authentication:', error);
        //     });
    }, [location]);

    return <div>Loading...</div>;
};

export default GithubCallback;