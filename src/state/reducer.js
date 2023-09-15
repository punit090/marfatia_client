const initialState = {
  content: [],
  bannerList: [],
  newsList: [],
  galleryCategoryList:[],
  gallery:[],
  downloads:[],
  selectedCategory:null
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

      case "STORE_GALLARY":
      return { ...state, gallery: action.payload };

      case "SET_CATEGORY":
      return { ...state, selectedCategory: action.payload };

      case "SET_NEWS":
        return { ...state, selectedNews: action.payload };

        case "SET_DOWNLOAD":
          return { ...state, downloads: action.payload };
  

    default:
      return state;
  }
};

export default rootReducer;
