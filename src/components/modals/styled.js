import styled from 'styled-components';

const ArticleWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #ccc;
  border-radius: 10px;
  min-width: 400px;
  padding: 30px;
  form {
    display: flex;
    flex-direction: column;
    & > * {
      margin-bottom: 10px;
    }
  }
`;

export {
  ArticleWrapper,
};
