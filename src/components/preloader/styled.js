import styled from 'styled-components';

const PreloaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  position: relative;
  z-index: 1001;
  
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    background-color: rgba(0,0,0,.5);
    width: 100%;
    height: 100%;
  }
`;

const PreloaderText = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  animation-name: fadeIn;
  animation-duration: 1s;
  animation-fill-mode: forwards;
  
  svg {
    width: 100%;
    height: 100%;
  }

  &:not(:first-child) {
    animation-name: fadeOut;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`;

export {
  PreloaderText,
  PreloaderWrapper,
};
