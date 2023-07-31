import styled from 'styled-components';

const AdminPageWrapper = styled.div`
  margin-left: ${( props ) => props.isMenuOpen ? '250px' : '75px'};
  transition: .5s;
`;

const TabHead = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #424242;
  margin-bottom: 32px;

  & div:last-child {
    margin-right: 0;
  }

  @media (max-width: 575px) {
    overflow: auto;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

const TabHeadNav = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  color: #9E9E9E;
  margin-right: 32px;
  border-bottom: 4px solid transparent;
  padding-bottom: 20px;
  cursor: pointer;

  &.tabs-active {
    color: #fff;
    border-bottom: 2px solid goldenrod;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }

  @media (max-width: 575px) {
    min-width: fit-content;
  }
`;

const TabBody = styled.div`

`;

const AdminContent = styled.div`
  padding: 0 50px;
`;

const PostList = styled.div`
  .post--item {
    padding: 20px;
    border: 1px solid goldenrod;
    margin-bottom: 20px;
    position: relative;
  }
  
  .btns_section {
    position: absolute;
    top: 0;
    right: 0;
  }
`;

export {
  AdminContent,
  AdminPageWrapper,
  TabBody,
  TabHead,
  TabHeadNav,
  PostList,
};
