import styled from 'styled-components';

export const ThemeButtonWrapper = styled.div`
    position:fixed;
    right:0;
    bottom:200px;
    background:#142ed9;
    color:white;
    padding:10px;
    border-top-left-radius:10px;
    border-bottom-left-radius:10px;
    z-index:999;
    cursor: pointer;
    .ant-spin {
        display:flex;
        justify-content:center;
        align-items:center;
    }
`