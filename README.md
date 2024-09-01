# 前端模板-React + Ant design Pro



基于 React + Ant Design 的项目初始模板，整合了常用框架和主流业务的示例代码。只需 1 分钟 即可完成网站的基础前端！！！欢迎加:star:或pull request.

[TOC]

## 模板特点

### 主流框架 & 特性

+ Ant Design Pro 6.0.0
+ React 18.2.0
+ node 至少 16 版本及以上
+ antd 5.2.2
+ Type Script
+ 动态路由
+ Eslint
+ Prettier

### Ant Design Pro 架构

#### Umi

官网地址：https://umijs.org/

+ Node.js 前端开发基础环境
+ webpack 前端必学必会的打包工具
+ react-router 路由库
+ proxy 反向代理工具
+ dva 轻量级的应用框架
+ fabric 严格但是不严苛的 lint 规则集（eslint、stylelint、prettier)
+ Type Script 带类型的 JavaScript

#### Ant Design 前端组件库

官网地址：https://ant-design.antgroup.com/index-cn

![ant design](/docs/ant_design.png)

#### Ant Design Chart 简单好用的React 图表库

官网地址：https://ant-design-charts.antgroup.com/

![ant design chart](/docs/ant_design_chart.png)

#### ProComponents 模板组件

官网地址：https://pro.ant.design/zh-CN/

+ ProLayout - 提供开箱即用的菜单和面包屑功能
+ ProForm - 表单模板组件，预设常见布局和行为
+ ProTable - 表格模板组件，抽象网格请求和单元格样式
+ ProCard - 提供卡片切分以及栅格布局能力

#### umi 插件

+ 内置布局
+ 国际化
+ 权限
+ 数据流
+ OpenAPI快速生成前端请求代码

### 业务特性

+ 栅格布局（可自定义，可适应）
+ 简单权限管理 
+ 全局初始数据（ getInitialState )
+ 默认使用 less 作为样式语言
+ OpenAPI 自动生成后端请求代码
+ 统一错误处理

### 配套快速启动Springboot的后端模板

后端仅需配置数据源等核心关键配置，快速结合前端模板进行快速启动。

#### gitee

https://gitee.com/caixypromise/Springboot-inital-template

#### github

https://github.com/CaixyPromise/Springboot-inital-template

## 业务功能

+ :star: 提供基于Swagger2的 **OpenAPI** 后端接口自动生成
+ :star: 基础的**用户登录、用户注册，以及OAuth2第三方登录**
+ :star: 自带管理**员用户管理界面，提**高修改用户、新建用户、查询用户、删除用户、禁用账号等功能
+ :star: 提供基本个人账号管理（上传头像、修改信息、修改密码）
+ :star: 提供额外自创的**常用Hook函数**，例如获取pathname，异步处理(加强原生useTransition钩子)
+ :star: 提供额外的常用**工具类**，例如Json安全解析（配套异常报错），加密工具类
+ :star: 提供额外的常用**功能组件**：验证码输入、用户搜索框（防抖）、用户头像、用户性别展示
+ :star: 提供额外的常用**正则匹配表达式**常量，快速完成前端正则匹配机制。
+ :star: 动态路由展示与**权限管理**。

## 快速上手

1. 安装node.js包管理根据。并且使用Npm或yarn安装前端依赖。

   - 如果你喜欢使用Npm

     ```shell
     npm install
     ```

   - 如果你喜欢使用yarn

     ```shell
     yarn
     ```

2. 使用命令生成后端请求代码

   1. 启动后端的万用模板或带有接口文档的后端项目
   2. 在前端项目的config/config.ts大约129行处，设置`schemaPath`为你的后端接口路径

   ![setting_openapi](/docs/setting_openapi.png)

   3. 在package.json找到open api的启动方式，快速请求生成后端地址。
      ![query_openapi](/docs/query_openapi.png)

3. 将标题和 logo 等切换为个人所需配置：config/defaultSettings.ts

![modify_title_logo](/docs/modify_title_logo.png)

4）测试业务功能

## 贡献者

<a href="https://github.com/CaixyPromise/React-fronted-template/graphs/contributors">   <img src="https://contrib.rocks/image?repo=CaixyPromise/React-fronted-template" /> </a>

