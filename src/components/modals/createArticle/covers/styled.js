import styled from 'styled-components';

const CustomCover = styled.div`
  width: 100%;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  padding: 10px;
  height: 150px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  
  .pill {
    font-size: 10px;
    background-color: goldenrod;
    border-radius: 10px;
    padding: 2px 5px;
    color: #000;
    margin-bottom: 10px;
  }
  
  .title {
    
  }
  
  .icons_block {
    .icon {
      width: 90px;
      height: 90px;
    }
  }
`;

export {
  CustomCover,
};
