import styled from 'styled-components';

const HomeWrapper = styled.div`
  margin-left: ${( props ) => props.isMenuOpen ? '250px' : '75px'};
  transition: .5s;
  margin-top: 50px;
  
  .post_block,
  .search_block,
  .about_us,
  .footer
  //.categories
  //.social_block
  {
    background: rgba(62,62,62);
    border-radius: 10px;
    padding: 20px;
  }
  
  .articles {
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
  }
  
  .categories {

    &--title {
      font-size: 22px;
    }
    
    &_list {
      
      .categories_list--item {
        list-style-type: none;
        display: flex;
        align-items: center;
        margin-bottom: 10px;
        
        a {
          font-size: 16px;
          font-weight: 500;
        }
      }
    }
  }
  
  .social_block {
    
    &--title {
      font-size: 20px;
      margin-bottom: 20px;
    }
    
    .social_list {
      display: flex;
      align-items: center;
      width: 100%;
      justify-content: flex-start;
      
      &--item {
        width: 80px;
        height: 80px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        border: 2px solid #ccc;
        border-radius: 10px;
        margin-right: 15px;
        transition: .3s;
        
        svg {
          width: 30px;
          height: 30px;
        }
        
        .label {
          position: absolute;
          top: 0;
          right: 0;
          font-size: 12px;
        }

        &:hover {
          //background-color: rgba(62,62,62);
          transition: .3s;
          border-color: goldenrod;
        }

        &:hover svg path{
          fill: goldenrod;
        }
        
      }
    }
  }
  
  .blog_section {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 50px;
    
    &--title {
      font-size: 20px;
      margin-bottom: 20px;
    }
  }
  
  .footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
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

  .border {
    width: 60%;
    background: goldenrod;
    height: 3px;
    margin: 20px 0 25px;
  }
`;

export {
  HomeWrapper,
};
