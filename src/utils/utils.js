const BASE_URL = process.env.REACT_APP_BFF_URL;

const request = {
  fetchPosts: `${BASE_URL}/posts/`,
};

export default request;
