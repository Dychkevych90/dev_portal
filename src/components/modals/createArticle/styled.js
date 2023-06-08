import styled from 'styled-components';

const ArticleWrapper = styled.div`
  z-index: 100;
  position: relative;
  
  form {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #ccc;
    border-radius: 10px;
    min-width: 700px;
    padding: 30px;
    z-index: 10;
    max-height: calc(90vh);
    overflow: auto;

    &::-webkit-scrollbar {
      display: none;
    }
    
    & > * {
      margin-bottom: 10px;
    }
    
    .title {
      font-size: 35px;
      font-weight: 500;
      text-transform: uppercase;
      margin-bottom: 20px;
      color: goldenrod;
    }
    
    input {
      padding: 10px;
      border: none;
      border-radius: 10px;
      outline: none;
      font-weight: 500;
      width: 100%;
    }
    
    .create_section {
      padding: 10px;
      border: none;
      text-transform: uppercase;
      border-radius: 10px;
      font-weight: 500;
      font-size: 16px;
      margin-bottom: 20px;
    }
    
    .sections {
      
      .section {
        padding: 10px;
        border-radius: 10px;
        background: #332b2bba;
        margin-bottom: 20px;
      }
      
      .buttons {
        display: flex;
        width: 100%;
        margin-bottom: 15px;
        
        button {
          flex: 1;
          padding: 10px;
          border: none;
          text-transform: uppercase;
          border-radius: 5px;
          font-weight: 500;
          font-size: 16px;
          margin: 2px;
          transition: .3s;
          
          &:hover {
            background-color: #333;
            color: goldenrod;
            transition: .3s;
          }
        }
      }
      
      .preview {
        border-top: 3px solid goldenrod;
        
        &_item{
          color: #fff;
          font-size: 16px;
          margin: 10px 0;
          padding: 5px;
          
          span, pre {
            color: #fff;
            font-size: 16px;
            margin-right: 10px;
          }

          .preview_item--title {
            color: #000;
          }
        }
        
        .text,
        .code {
          flex-direction: column;
          display: flex;
        }
      }
    }
    
    .save {
      padding: 10px;
      border: none;
      text-transform: uppercase;
      border-radius: 5px;
      font-weight: 500;
      font-size: 16px;
      transition: .3s;
      width: 100%;
      margin: 20px 0 0;
    }
  }
  
  & * {
    color: #000;
  }
`;

export {
  ArticleWrapper,
};
