import { GET_PROJECTS, GET_PROJECT_DETAILS, GET_MY_DETAILS, OPEN_MODAL, CLOSE_MODAL, GET_SOCIAL_LINKES, SEND_CONTACT_SUCCESS, SEND_CONTACT_FAILURE, SEND_CONTACT_REQUEST } from "./actions";

const appReducer = (state, action) => {
  switch (action.type) {
    case GET_PROJECTS:
      return {
        ...state,
        projects: action.payload,
      };
    case GET_PROJECT_DETAILS:
      return {
        ...state,
        projectDetails: action.payload,
      };
    case GET_MY_DETAILS:
      return {
        ...state,
        myDetails: action.payload,
      };
      case SEND_CONTACT_REQUEST:
      return {
        ...state,
        sending: true,
        error: null,
      };
    case SEND_CONTACT_SUCCESS:
      return {
        ...state,
        sending: false,
        message: action.payload.message,
        name:action.payload.name,
        email:action.payload.email
      };
    case SEND_CONTACT_FAILURE:
      return {
        ...state,
        sending: false,
        error: action.payload,
      };
    case GET_SOCIAL_LINKES:
      return {
        ...state,
        linkedIn: action.payload.linkedIn,
        facebook:action.payload.facebook,
        instagram:action.payload.instagram
      };
    case OPEN_MODAL:
      return {
        ...state,
        modalOpen: true,
        modalImage: action.payload,
        modalImages: action.payload
      };
    case CLOSE_MODAL:
      return {
        ...state,
        modalOpen: false,
        modalImage: "",
      };
    default:
      return state;
  }
};
export default appReducer;
