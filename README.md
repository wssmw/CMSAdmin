# Admin

## 项目简介

Admin 是一个基于 React18、react-router、axios、antd、echarts 开源的后台管理系统，本项目使用了常用的一些功能，比如动态路由，状态持久化，全局布局的修改，大屏展示等，另外本项目也封装了一些常用组件，比如复制，水印等。


## 在线预览

-[在线预览](http://47.93.103.147:8080/#/home/index)

## 相关仓库

- GitHub(https://github.com/wssmw/CMSAdmin.git)

## 项目功能
-基于axios对请求进行二次封装（请求拦截、取消）
-支持组件国际化，主题切换等（未完成）
-常用自定义指令开发（权限、复制、水印、拖拽、节流、防抖、长按…）
-实现状态持久化，刷新不会丢失状态
-引入styled-components使用css in js技术进行css的编写
-自定义hooks实现动态路由


## 快速上手

- **Clone：**

```text
# GitHub
git clone https://github.com/wssmw/CMSAdmin.git
```

- **Install:**

```text
npm install 
```

- **Run:**

```text
npm run start 
```

- **Build:**

```text
npm run build 
```

## 项目截图


## 文件资源目录

```text
Admin
├─ public                 # 静态资源文件（该文件夹不会被打包）
├─ src
│  ├─ assets              # 静态资源文件
│  ├─ components          # 全局组件
│  ├─ hooks               # 常用 Hooks 封装
│  ├─ layouts             # 框架布局模块
│  ├─ router              # 路由管理
│  ├─ store               # pinia store
│  ├─ service             # 接口管理，包括封装axios
│  ├─ utils               # 常用工具库
│  ├─ views               # 项目所有页面
│  ├─ App.jsx             # 项目主组件
│  ├─ index.js            # 项目入口文件
│  ├─ style.js            # App.js的css文件
├─ .env                   # vite 常用配置
├─ .gitignore             # 忽略 git 提交
├─ package-lock.json      # 依赖包包版本锁
├─ package.json           # 依赖包管理
├─ README.md              # README 介绍
├─ craco.config.js        # craco 全局配置
```
