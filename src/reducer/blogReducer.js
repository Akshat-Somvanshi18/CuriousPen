const blogReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "MY_BLOG_DATA":
      return {
        ...state,
        isLoading: false,
        blogs: action.payload,
      };
    case "MY_BLOG_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case "SET_SINGLE_LOADING":
      return {
        ...state,
        isSingleLoading: true,
      };
    case "MY_SINGLE_BLOG_DATA":
      return {
        ...state,
        isSingleLoading: false,
        singleBlog: action.payload,
      };
    case "MY_SINGLE_BLOG_ERROR":
      return {
        ...state,
        isSingleLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};

export default blogReducer;
