const initialState = {
  content: [],
  bannerList: [],
  newsList: [],
  galleryCategoryList:[]
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "STORE_CONTENT":
      return { ...state, content: action.payload };

    case "STORE_BANNER":
      return { ...state, bannerList: action.payload };

    case "STORE_NEWS":
      return { ...state, newsList: action.payload };

      case "STORE_GALLARY_CATEGORY":
      return { ...state, galleryCategoryList: action.payload };

    default:
      return state;
  }
};

export default rootReducer;
