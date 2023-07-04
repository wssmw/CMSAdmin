import http from '../request'

// 登录
export const loginApi = (params) => {
	// 正常 post json 请求
	return http.post(`/login`, params, { noLoading: true });
};
// 获取用户列表
export const getAuthMenuListApi = () => {
	return http.get( `/menu/list`, {}, { noLoading: true });
};