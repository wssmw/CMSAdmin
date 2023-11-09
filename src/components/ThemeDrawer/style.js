import styled from 'styled-components';

export const ThemeDrawerWrapper = styled.div`
    .divider {
        color:red;
    }
    .setting-drawer-block-checbox {
        display: flex;
        margin: 20px 0;
        .ant-gw-checkbox-item {
            position: relative;
            width: 44px;
            height: 36px;
            overflow: hidden;
            cursor: pointer;
            background-color: #f0f2f5;
            border-radius: 4px;
            box-shadow: 0 1px 2.5px 0 rgb(0 0 0 / 18%);
            &::before {
                position: absolute;
                top: 0;
                left: 0;
                width: 33%;
                height: 100%;
                content: "";
                background-color: #ffffff;
            }
            &::after {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 25%;
                content: "";
                background-color: #ffffff;
            }
            .select-icon {
                position: absolute;
                right: 6px;
                bottom: 4px;
                font-size: 14px;
                font-weight: 700;
                color: var(--ant-primary-color);
                pointer-events: none;
            }
            &:hover {
                box-shadow: 0 0 5px 1px #cdd0d6;
            }
        }
        .ant-gw-checkbox-item-light {
            &::before {
                content: "";
                background-color: #ffffff;
            }
            &::after {
                background-color: #ffffff;
            }
            .inner {
                display: none;
            }
        }
        .ant-gw-checkbox-item-realDark {
            background-color: rgba(#001529, 0.85);
            &::before {
                z-index: 1;
                content: "";
                background-color: rgba(#001529, 0.65);
            }
            &::after {
                background-color: rgba(#001529, 0.65);
            }
        }
        .ant-gw-checkbox-item-side,
        .ant-gw-checkbox-item-dark {
            &::before {
                z-index: 1;
                content: "";
                background-color: #001529;
            }
            .inner {
                display: none;
            }
        }
        .ant-gw-checkbox-item-top {
            &::before {
                background-color: #f0f2f5;
            }
            &::after {
                background-color: #001529;
            }
            .inner {
                display: none;
            }
        }
        .ant-gw-checkbox-item-mix {
            &::before {
                content: " ";
                background-color: #ffffff;
            }
            &::after {
                background-color: #001529;
            }
            .inner {
                display: none;
            }
        }
        .ant-gw-checkbox-item-left {
            &::before {
                z-index: 1;
                width: 16%;
                content: "";
                background-color: #001529;
            }
            .inner {
                position: absolute;
                top: 0;
                left: 0;
                display: block;
                width: 33%;
                height: 100%;
                content: "";
                background-color: #ffffff;
            }
        }
    }
   
`