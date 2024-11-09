import {useEffect} from "react";
import {useLocation} from "@umijs/max";
import {oAuthLoginCallbackUsingGet1} from "@/services/backend/authController";

const GithubCallback = () => {
    const location = useLocation();

    useEffect(() => {
        console.log("GithubCallback")
        const params = new URLSearchParams(location.search);
        const code = params.get('code');
        const state = params.get('state');

        const response = oAuthLoginCallbackUsingGet1({
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

    }, [location]);

    return <div>Loading...</div>;
};

export default GithubCallback;
