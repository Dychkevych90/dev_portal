import styled from 'styled-components';

const BlogPageWrapper = styled.div`
  margin-left: ${( props ) => props.isMenuOpen ? '250px' : '75px'};
  transition: .5s;
`;

export {
  BlogPageWrapper,
};
