import styled from 'styled-components';

const CustomCover = styled.div`
  width: 100%;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  padding: 10px;
  height: fit-content;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  
  .pill {
    font-size: 12px;
    background-color: goldenrod;
    border-radius: 10px;
    padding: 2px 5px;
    color: #000;
    margin-bottom: 10px;
  }
  
  .title {
    margin-bottom: 10px;
    font-weight: 600;
    font-size: 20px;
    color: #fff;
    letter-spacing: 1px;
  }
  
  .icons_block {
    .icon {
      width: 90px;
      height: 90px;
    }
    .css {
      width: 105px;
      height: 105px;
    }
  }
`;

export {
  CustomCover,
};
