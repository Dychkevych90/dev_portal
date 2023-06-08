import styled from 'styled-components';

const SocialMediaSharedBtnWrapper = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
  z-index: 2;
  
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
  SocialMediaSharedBtnWrapper,
};
