import { useRoutes } from "react-router-dom";
import { AppWrapper } from "./style";
import {useLoadRouter} from "./hooks/useLoadRouter";
import { ConfigProvider } from "antd";
import { useSelector } from "react-redux";

import enUS from 'antd/locale/en_US';
import zhCN from 'antd/locale/zh_CN';


function App() {
    const routes = useLoadRouter();
    const  primary  = useSelector((state) => ( state.theme.primary))
    const  language  = useSelector((state) => ( state.theme.language))
    return (
      <AppWrapper>
        <ConfigProvider direction='ltr' theme={{token:{colorPrimary:primary}}} locale={language=='zhCN'?zhCN:enUS}>
          {useRoutes(routes)}
        </ConfigProvider>
      </AppWrapper>
    );
}

export default App;
