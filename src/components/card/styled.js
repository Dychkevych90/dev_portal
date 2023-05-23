import styled from 'styled-components';

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 15px;
  background-color: rgb(62 62 62 / 40%);
  
  .img {
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
  }
  
  .content {
    padding: 10px;
    width: 100%;
    position: relative;
    
    .title {
      font-size: 20px;
      font-weight: 600;
      margin-bottom: 10px;
    }

    .desc {
      font-size: 12px;
      text-align: justify;
      margin-bottom: 15px;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
    }

    .read_more {
      border: none;
      background-color: transparent;
      transition: .3s;
      font-weight: 500;
      color: goldenrod;
      text-decoration: none;
      
      &:hover {
        color: #fff;
        transition: .3s;
      }
    }
    
    .date {
      font-size: 12px;
      opacity: .7;
    }
    
    .visibility_block {
      position: absolute;
      display: flex;
      align-items: center;
      right: 15px;
      bottom: 10px;
      opacity: .7;
      
      svg {
        margin-right: 5px;
      }
    }
  }
`;

export {
  CardWrapper,
};
