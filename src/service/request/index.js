import axios from "axios";
import { message } from "antd";

import { checkStatus } from "./helper";
import {BASEURL} from './config'
// import { useGlobalStore } from "@/stores/modules/global";
import { useDispatch,useSelector } from "react-redux";
import { shallowEqual } from "react-redux";
import { changeTokenAction } from "../../store/modules/login";
import cache from "../../utils/cache";
// import router from "@/routers";



// 配置
const config = {
	// 默认地址请求地址，可在 .env.*** 文件中修改
	baseURL:BASEURL,
	// 设置超时时间（10s）
	timeout:10000,
	// 跨域时候允许携带凭证
	withCredentials: true
};

class RequestHttp {
	service;
	constructor(config) {
		// 实例化 axios
		this.service = axios.create(config);
		// this.dispatch = useDispatch()
		/**
		 * @description 请求拦截器
		 * 客户端发送请求 -> [请求拦截器] -> 服务器
		 * token校验(JWT) : 接受服务器返回的token,存储到vuex/pinia/本地储存当中
		 */
		this.service.interceptors.request.use(
			(config) => {
				// const globalState = useGlobalStore();
				// const userStore = useUserStore();
				// * 如果当前请求不需要显示 loading,在 api 服务中通过指定的第三个参数: { noLoading: true }来控制不显示loading，参见loginApi
				// config.noLoading || globalState.setGlobalState("loading", true);
				if (config.headers && typeof config.headers.set === "function"&&cache.getCache("token")) {
					// const {token} = useSelector((state)=>({token:state.login.token}),shallowEqual)
					config.headers.set("x-access-token", cache.getCache("token"));
				}
				return config;
			},
			(error) => {
				return Promise.reject(error);
			}
		);

		/**
		 * @description 响应拦截器
		 *  服务器换返回信息 -> [拦截统一处理] -> 客户端JS获取到信息
		 */
		this.service.interceptors.response.use(
			(response) => {
				const {data} = response;
				// const globalState = useGlobalStore();
				// const userStore = useUserStore();
				// * 在请求结束后，并关闭请求 loading
				// globalState.setGlobalState("loading", false);
				// * 登录失效（code == 401）
				if (data.code == 401) {
					message.error(data.msg);
					// userStore.setToken("");
					this.dispatch(changeTokenAction(''))
					// 跳转到登录页
					// router.replace(LOGIN_URL);
					return Promise.reject(data);
				}
				//  * 全局错误信息拦截（防止下载文件得时候返回数据流，没有code，直接报错）
				if (data.code && data.code !== 200) {
					message.error(data.msg);
					return Promise.reject(data);
				}
				// * 成功请求（在页面上除非特殊情况，否则不用在页面处理失败逻辑）
				return data;
			},
			async (error) => {
				const { response } = error;
				// 关闭请求 loading
				// const globalState = useGlobalStore();
				// globalState.setGlobalState("loading", false);
				// 请求超时 && 网络错误单独判断，没有 response
				if (error.message.indexOf("timeout") !== -1) message.error("请求超时！请您稍后重试");
				if (error.message.indexOf("Network Error") !== -1) message.error("网络错误！请您稍后重试");
				// 根据响应的错误状态码，做不同的处理
				if (response) checkStatus(response.status);
				// 服务器结果都没有返回(可能服务器错误可能客户端断网)，断网处理:可以跳转到断网页面
				if (!window.navigator.onLine) {
					// 跳转500显示页
				}
				return Promise.reject(error);
			}
		);
	}

	// * 常用请求方法封装
	get(url, params, _object = {}){
		return this.service.get(url, { params, ..._object });
	}
	post(url, params, _object = {}) {
		return this.service.post(url, params, _object);
	}
	put(url, params, _object = {}){
		return this.service.put(url, params, _object);
	}
	delete(url, params ,_object = {}) {
		return this.service.delete(url, { params, ..._object });
	}
	download(url, params ,_object = {}) {
		return this.service.post(url, params, { ..._object, responseType: "blob" });
	}
}

export default new RequestHttp(config);
