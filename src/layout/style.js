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
      .tabs {
        border-top:1px solid #f1f1f1;
        background:white;
        .ant-tabs-nav {
          margin:0;
        }
        .tabsIcon {
          display:flex;
          align-items:center;
        } 
      }
      .content {
        min-width:1000px;
        background-color:#f0f2f5;
        padding:5px;
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