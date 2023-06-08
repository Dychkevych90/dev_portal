import styled from 'styled-components';
const SingleArticle = styled.div`
  margin-left: ${( props ) => props.isMenuOpen ? '250px' : '75px'};
  transition: .5s;
  padding: 50px 0;
  
  .main_block {
    position: relative;
    margin-bottom: 50px;
    
    .background {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0,0,0,0.2);
      z-index: 2;
    }
    
    &--image {
      height: 400px;
    }
    
    .title {
      position: absolute;
      left: 32px;
      top: 133px;
      color: goldenrod;
      font-size: 80px;
      font-weight: 700;
      z-index: 2;
    }
  }

  .small_title {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 10px;
    
    span {
      font-size: 20px;
      font-weight: 600;
      margin-bottom: 10px;
      color: #36b7b7;
    }
  }
  
  .desc {
    margin-bottom: 10px;
  }
`;

const CodeBlock = styled.div`
  background-color: #333;
  width: fit-content;
  padding: 20px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  min-width: 300px;
  align-items: flex-start;
  
  .top {
    display: flex;
    align-items: center;
    .dot {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: #6a6767;
      margin-right: 5px;
      margin-bottom: 10px;
    }
    
    & .dot:last-child{
      margin-right: 0;
    }
  }
  
  .bottom {
    display: flex;
    align-items: center;
    flex-direction: column;
    
    .code_row {
      display: flex;
      align-items: center;
    }
    
    .console_log_color {
      color: #6a6767;
    }
    
    .code {
      margin-right: 10px;
      font-weight: 500;
    }
    
    .text_color {
      &-violet {
        color: #925ca9;
      }
      &-green {
        color: forestgreen;
      }
    }
  }
`;

export {
  SingleArticle,
  CodeBlock,
};
