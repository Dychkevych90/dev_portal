import styled from 'styled-components';
const SingleArticle = styled.div`
  margin-left: ${( props ) => props.isMenuOpen ? '250px' : '75px'};
  transition: .5s;
  padding: 50px 0;
  
  .main_block {
    position: relative;
    margin-bottom: 50px;
    
    &--image {
      height: 400px;
      opacity: .6;
    }
    
    .title {
      position: absolute;
      left: 32px;
      top: 133px;
      color: goldenrod;
      font-size: 80px;
      font-weight: 700;
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

const SocialMediaSharedBtnWrapper = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
  
  .btn_container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
  }

  & :is(.btn, .link){
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: none;
    background-color: #ccc;
    color: #000;
    
    path {
      color: #000;
    }
  }

  .btn {
    position: absolute;
    z-index: 10;
  }

  .item {
    position: absolute;
    list-style: none;
    transition: transform 0.5s;
    width: 45px;
    height: 45px;
  }

  &.active .item:nth-child(1){
    transform: translateX(65px);
    transition-delay: 0.3s;
  }
  
  &.active .item:nth-child(2){
    transform: translateY(-65px);
    transition-delay: 0.6s;
  }
  
  &.active .item:nth-child(3){
    transform: translateY(65px);
  }
  
  .instagram:hover {
    background: radial-gradient(circle farthest-corner at 35% 90%, #fec564, transparent 50%), radial-gradient(circle farthest-corner at 0 140%, #fec564, transparent 50%), radial-gradient(ellipse farthest-corner at 0 -25%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 20% -50%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 0, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 60% -20%, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 100%, #d9317a, transparent), linear-gradient(#6559ca, #bc318f 30%, #e33f5f 50%, #f77638 70%, #fec66d 100%);
  }
  .telegram:hover {
    background-color: #229ED9;
  }
  
  .facebook:hover {
    background-color: #0165E1;
  }
`;

export {
  SingleArticle,
  CodeBlock,
  SocialMediaSharedBtnWrapper,
};
