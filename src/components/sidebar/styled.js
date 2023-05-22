import styled from 'styled-components';

const SideBarWrapper = styled.div`
  background-color: ${( { theme } ) => theme.sidebar};
  width: ${( props ) => props.openmenu ? '250px' : '75px'};
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  padding: ${( props ) => props.openmenu ? '40px 20px 10px' : '40px 15px 10px'};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  transition:  .5s;
  
 .top,
 .bottom {
   width: 100%;
   text-align: center;
   
   .nav {
     &_item {
       list-style-type: none;
       display: flex;
       justify-content: flex-start;
       align-items: center;
       width: 100%;
       padding: ${( props ) => props.openmenu ? '10px' : '10px 0'};
       border-radius: 5px;
       transition: .3s;
       margin-bottom: 20px;
       
       &:hover {
         background-color: #3a3b3c;
         transition: .3s;
         
         & .hover {
           opacity: 1;
           transition: 1s;
         }
       }
     }

     .link {
       text-decoration: none;
       display: flex;
       align-items: center;
       width: ${( props ) => props.openmenu ? 'unset' : '25px'};
       margin-left: ${( props ) => props.openmenu ? '0' : '10px'};
       transition: margin-left 0.5s;
       
       .text {
         font-weight: 600;
         white-space: nowrap;
         opacity: ${( props ) => props.openmenu ? '1' : '0'};
         transform: translateX(${( props ) => props.openmenu ? '0' : '10px'});
         transition: .3s;
       }
     }
     
     .nav_icon,
     .icon-react {
       width: 25px;
       min-width: 25px;
       height: 25px;
       margin-right: ${( props ) => props.openmenu ? '20px' : '0'};
       transition: .3s;
     }
     
     .icon-js {
       transform: scale(1.5);
     }
   }
 }
  
  
  .toggle_menu {
    position: absolute;
    top: 20px;
    right: -15px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    border: none;
    background-color: #3a3b3c;
    transform: rotate(${( props ) => props.openmenu ? '180deg' : '0'});
    transition: .5s;
    
    svg {
      path {
        fill : ${( { theme } ) => theme.fill};
      }
    }
  }
  
  .logout_btn, 
  .switch {
    width: 100%;
    background-color: transparent;
    border: none;
    display: flex;
    align-items: center;
    padding: 10px;
    
    .switchBtn {
      border: none;
      background-color: transparent;
    }

    .icon {
      width: 25px;
      min-width: 25px;
      height: 25px;
      margin-right: ${( props ) => props.openmenu ? '20px' : '0'};
      transition: .3s;
    }

    .text {
      font-weight: 600;
      white-space: nowrap;
      opacity: ${( props ) => props.openmenu ? '1' : '0'};
      transform: translateX(${( props ) => props.openmenu ? '0' : '10px'});
      transition: .3s;
    }
  }
  
  .switcher {
    opacity: ${( props ) => props.openmenu ? '1' : '0'};
    transform: translateX(${( props ) => props.openmenu ? '0' : '10px'});
  }
  
  .logo {
    margin-bottom: 40px;
    display: block;
    text-decoration: none;
    font-weight: 600;
    font-size: 20px;
    text-align: left;
    padding: 0 10px 0 50px;
    opacity: ${( props ) => props.openmenu ? '1' : '0'};
    transition: .3s;
  }
`;

const HoverBlock = styled.div`
  background-color: #707070;
  position: absolute;
  right: -72px;
  padding: 5px;
  border-radius: 5px;
  opacity: 0;
  transition: .3s;
  
  &:after {
    content: '';
    background-color: #707070;
    width: 12px;
    height: 12px;
    left: -3px;
    top: 50%;
    transform: translateY(-50%) rotate(45deg);
    position: absolute;
    z-index: -1;
  }
`;

export {
  SideBarWrapper,
  HoverBlock,
};
