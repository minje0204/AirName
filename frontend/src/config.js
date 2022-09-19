const BASE_URL = 'https://jsonplaceholder.typicode.com';

const API = {
  POST: `${BASE_URL}/posts`,
  COMMENT: `${BASE_URL}/comments`,
  MAIN: `${BASE_URL}/main`,
  MYPAGE: `${BASE_URL}/users/private/user`,
  USER_PAGE: `${BASE_URL}/users/public/user`,
  SIGNUP: `${BASE_URL}/users/signup`,
  WRITERDATA: `${BASE_URL}/users/?user_tag_id=`,
  TAGDATA: `${BASE_URL}/branch_tags/userTagList`,
  DITAILLIST: `${BASE_URL}/postings`,
  KEYWORDS: `${BASE_URL}/keywords/list`,
  LOGIN: `${BASE_URL}/users/signin`,
  DETAIL_PAGE: `${BASE_URL}/postings/detail`,
  RELATED: `${BASE_URL}/postings`
};

export default API;