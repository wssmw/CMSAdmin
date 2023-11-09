import styled from 'styled-components'
export const TopWrapper = styled.div`
  height:100%;
  display: flex;
  flex-direction:column;
  .top {
      height:55px;
      display: flex;
      justify-content:space-between;
      .left {
      height:100%;
      display: flex;
      justify-content:center;
      align-items:center;
      .collapsed {
        display:flex;
        width: 22px;
        height: 22px;
        font-size:22px;
        margin:10px;
        background-color: #fff;
        cursor: pointer;
      }
      .Breadcrumb {
        .ant-breadcrumb-link {
          display:flex;
          align-items:center;
        }
      }
    }
  }
  .bottom {
    .tabsIcon {
      display:flex;
      align-items:center;
    }
  }
`