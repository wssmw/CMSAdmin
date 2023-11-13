import { useRoutes } from "react-router-dom";
import { AppWrapper } from "./style";
import {useLoadRouter} from "./hooks/useLoadRouter";
import { ConfigProvider } from "antd";
import { useSelector } from "react-redux";

import enUS from 'antd/locale/en_US';
import zhCN from 'antd/locale/zh_CN';
import { CHINESE } from "./config/Laguage";


function App() {
    const routes = useLoadRouter();
    const  primary  = useSelector((state) => ( state.theme.primary))
    const  language  = useSelector((state) => ( state.theme.language))
    const  size  = useSelector((state) => ( state.theme.size))
    return (
      <AppWrapper>
        <ConfigProvider 
          direction='ltr' 
          theme={{token:{colorPrimary:primary}}} 
          locale={language==CHINESE?zhCN:enUS}
          componentSize={size}>
          {useRoutes(routes)}
        </ConfigProvider>
      </AppWrapper>
    );
}

export default App;
