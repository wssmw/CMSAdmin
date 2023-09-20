import http from '../request'

// 获取table数据
export const getTableList = (params) => {
	// 正常 post json 请求
	return http.post(`/user/list`, params, { noLoading: true });
};