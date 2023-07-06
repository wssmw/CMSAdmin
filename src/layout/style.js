import styled from 'styled-components';

export const LayoutWrapper = styled.div`
  position:absolute;
  top:0;
  bottom:0;
  left:0;
  right:0;
  background-color:#fff;
  .layout {
    height:100%;
    .layout1 {
      .content {
      background-color:white;
      overflow-y:auto;
      width:100%;
      height:100%;
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
    }
    
  }
`