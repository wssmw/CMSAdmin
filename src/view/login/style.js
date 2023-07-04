import styled from 'styled-components';

export const LoginWrapper = styled.div`
  position: relative;
  width: 96%;
  height:94%;
  background:url('/img/login_bg.png') no-repeat ;
  background-size:100%;
  margin:20px;
  border-radius:10px;
  
  .login {
    position:absolute;
    top:50%;
    transform:translateY(-50%);
    right:5%;
    width: 420px;
    background-color:#eee;
    border-radius:10px;
  }
`