import {useLocation} from "@@/exports";
import {useContext, useMemo} from 'react';
import {RouteContext} from '@ant-design/pro-layout';

/**
 * 使用 `usePathname` 钩子来获取当前页面的路径信息以及标题。
 *
 * 这个钩子利用 `useLocation` 来获取当前浏览器的位置对象，
 * 并通过 `useContext` 访问 `RouteContext` 来获取当前路由的标题。
 * 使用 `useMemo` 来缓存计算结果，确保只在依赖项（location 和 title）改变时重新计算。
 *
 * 返回对象包括：
 * - title：当前页面的标题
 * - pathName：当前的路径名
 * - pathSegments：路径名的分段数组
 * - routeName：路径中的第一段（通常是主要的路由名）
 * - lastPath：路径中的最后一段
 */
export const usePathname: {
    title: string,
    pathName: string,
    pathSegments: string[],
    routeName: string,
    lastPath: string | undefined,
} = () => {
    const location = useLocation();
    const { title  } = useContext(RouteContext);

    return useMemo(() =>
    {
        const pathName = location.pathname;
        const pathSegments = pathName.split('/');
        return {
            title: title,
            pathName: pathName,
            pathSegments: pathSegments,
            routeName: pathSegments.length > 1 ? pathSegments[1] : "",
            lastPath: pathSegments.at(pathSegments.length), // 使用 length - 1 以防 pop() 方法修改原数组
        };
    }, [location, title]); // 依赖项为 location 和 title
};