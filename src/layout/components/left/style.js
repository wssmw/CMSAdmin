import styled from "styled-components";

export const LeftWrapper = styled.div`
  height:100%;
  .logo {
    display: flex;
    justify-content:center;
    align-items:center;
    width:100%;
    height:55px;
    display: flex;
    img {
      width: 40px;
    }
    .dec {
      margin:0 10px;
      color:black;
      font-weight:600;
      font-size:30px;
    }
  }
  .scroll {
    height:90%;
    overflow-y:auto;
    ::-webkit-scrollbar {
      /* 对应纵向滚动条的宽度 */
      width: 5px;
      /* 对应横向滚动条的宽度 */
      height: 10px;
    }
    /* 滚动条上的滚动滑块 */
    ::-webkit-scrollbar-thumb {
        background-color: #49b1f5;
        border-radius: 32px;
    }
    .ant-menu-title-content {
      flex: none !important;
      margin-left:20px !important;
    }
  }
`