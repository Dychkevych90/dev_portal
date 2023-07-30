import styled from 'styled-components';

const LoginFormWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: rgba(0,0,0,.5);
  z-index: 100;
  position: fixed;
  left: 0;
  top: 0;
  
  form {
    width: min(100%, 500px);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background-color: #ccc;
    border-radius: 10px;
    
    .title {
      color: #000;
      margin-bottom: 10px;
      font-size: 20px;
      font-weight: 600;
      width: 100%;
    }
    
    input {
      width: 100%;
      margin-bottom: 20px;
      height: 40px;
      border-radius: 10px;
      border: none;
      outline: none;
      padding-left: 10px;
    }
    
    .form_btn {
      width: 100%;
      height: 40px;
      border: none;
      border-radius: 10px;
      color: #000;
      background-color: goldenrod;
      font-weight: 500;
      font-size: 16px;
    }
  }
`;

export {
  LoginFormWrapper,
};
