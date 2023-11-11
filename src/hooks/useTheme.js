
/**
 * @desc 切换主题
 */

import { ConfigProvider } from "antd";
import { useDispatch, useSelector } from "react-redux";

export const useTheme = () => {
	// const globalStore = useGlobalStore();
    const dispatch = useDispatch()
    const  primary  = useSelector((state) => ( state.theme.primary))
    const  isGrey  = useSelector((state) => ( state.theme.isGrey))
    const  isWeak  = useSelector((state) => ( state.theme.isWeak))
	// 切换暗黑模式
	const switchDark = () => {
		// const body = document.documentElement;
		// if (themeConfig.value.styleSetting == "realDark") body.setAttribute("data-theme", "dark");
		// else body.setAttribute("data-theme", "light");
		changePrimary();
	};

	// 修改主题颜色
	const changePrimary = () => {
		ConfigProvider.config({
			theme: {
				primaryColor: '#fff'
			}
		});
	};

	// 灰色和弱色切换
	const changeGreyOrWeak = (value, type) => {
		const body = document.body;
		if (!value) return body.setAttribute("style", "");
		if (type === "grey") body.setAttribute("style", "filter: grayscale(1)");
		if (type === "weak") body.setAttribute("style", "filter: invert(80%)");
		const propName = type === "grey" ? "isWeak" : "isGrey";
		// globalStore.setGlobalState(propName, false);
	};

	// 初始化 theme 配置
	const initTheme = () => {
		// switchDark();
		changePrimary();
		if (isGrey) changeGreyOrWeak(true, "grey");
		if (isWeak) changeGreyOrWeak(true, "weak");
	};

	return {
		initTheme,
		switchDark,
		changePrimary,
		changeGreyOrWeak
	};
};
