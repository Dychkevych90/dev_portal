import styled from 'styled-components';

const HomeWrapper = styled.div`
  margin-left: ${( props ) => props.isMenuOpen ? '250px' : '75px'};
  transition: .5s;
  margin-top: 50px;
  
  .post_block,
  .search_block,
  .about_us {
    background: rgba(62,62,62);
    border-radius: 10px;
    padding: 20px;
  }
  
  .about_us {
    margin-bottom: 20px;
    padding: 50px 10px;
    border-radius: 10px;
    text-align: center;
  }
  
  .search_block {
    padding: 10px 20px;
    border-radius: 10px;
    width: 80px;
    height: 80px;
    display: flex;
    position: relative;
    transition: width .5s ease;

    .search-input {
      width: 0;
      padding: 8px;
      padding-left: 50px;
      border: none;
      background-color: transparent;
      border-radius: 4px;
      transition: width .5s ease;
      overflow: hidden;
      z-index: 0;
      outline: none;
    }

    .search-icon {
      padding: 8px;
      border: none;
      background-color: transparent;
      cursor: pointer;
      position: absolute;
      left: 40px;
      transform: translate(-50%, -50%);
      top: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1;
      width: 40px;
      height: 40px;
      
      svg {
        width: 100%;
        height: 100%;
      }
    }

    &.expanded .search-input {
      width: 250px;
    }

    &.expanded .search-icon {
      left: 20px;
      transform: translateY(-50%);
    }

    &.expanded {
      width: 300px;
    }
  }
  
  .post_block {
    margin-right: 20px;
    height: 100%;
    background-color: transparent;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0;
    
    &--title {
      font-size: 22px;
    }
    
    .border {
      width: 60%;
      background: goldenrod;
      height: 3px;
      margin: 20px 0 25px;
    }
    
    &--list {
      display: flex;
      flex-wrap: wrap;
      margin-bottom: 20px;
      
      .item {
        flex-basis: 32%;
        margin-right: 10px;
        margin-bottom: 10px;
      }
      
      &.item:nth-child(3n){
        margin-right: 0;
      }
    }
    
    .load_more--btn {
      width: 200px;
      margin: 0 auto;
      background: goldenrod;
      padding: 10px 20px;
      border: none;
      border-radius: 10px;
      font-size: 19px;
      color: #fff;
    }
  }
`;

export {
  HomeWrapper,
};
