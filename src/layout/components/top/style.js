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
        width: 22px;
        height: 22px;
        font-size:22px;
        margin:10px;
        background-color: #fff;
      }
      .Breadcrumb {

      }
    }
  }
  .bottom {

  }
`