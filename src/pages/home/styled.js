import styled from 'styled-components';

const HomeWrapper = styled.div`
  margin-left: ${( props ) => props.isMenuOpen ? '250px' : '75px'};
  transition: .5s;
  margin-top: 50px;
  
  .post_block,
  .search,
  .about_us {
    background: rgba(62,62,62,.7);
    border-radius: 10px;
    padding: 20px;
  }
  
  .about_us {
    margin-bottom: 20px;
    padding: 50px 10px;
    border-radius: 10px;
    text-align: center;
  }
  
  .search {
    padding: 10px 20px;
    border-radius: 10px;
    width: 100%;
    height: 80px;
    border: none;
    outline: none;
    color: #fff;
  }
  
  .post_block {
    margin-right: 20px;
    height: 100%;
    background-color: transparent;
    width: 100%;
    display: flex;
    flex-direction: column;
    
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
