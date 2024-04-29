import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAIL,
    CLEAR_ERRORS,
    LOAD_USER_FAIL,
    LOAD_USER_REQUEST,
    LOAD_USER_SUCCESS,
    LOGOUT_SUCCESS,
    LOGOUT_FAIL,
    UPDATE_PROFILE_REQUEST,
    UPDATE_PROFILE_FAIL,
    UPDATE_PROFILE_SUCCESS,
    UPDATE_PROFILE_RESET,
    UPDATE_PASSWORD_REQUEST,
    UPDATE_PASSWORD_SUCCESS,
    UPDATE_PASSWORD_FAIL,
    UPDATE_PASSWORD_RESET,
    ALL_HOSPITALS_SUCCESS,
    ALL_HOSPITALS_FAIL,
    ALL_HOSPITALS_REQUEST,
    UPDATE_HOSPITAL_FAIL,
    UPDATE_HOSPITAL_REQUEST,
    UPDATE_HOSPITAL_RESET,
    UPDATE_HOSPITAL_SUCCESS,
    DELETE_HOSPITAL_FAIL,
    DELETE_HOSPITAL_REQUEST,
    DELETE_HOSPITAL_RESET,
    DELETE_HOSPITAL_SUCCESS,
    HOSPITAL_DETAILS_FAIL,
    HOSPITAL_DETAILS_REQUEST,
    HOSPITAL_DETAILS_SUCCESS
} from "../Constant/userConstant"

export const userReducer = ((state={user:{}},action)=>{
    switch(action.type){
        case LOGIN_REQUEST:
        case REGISTER_USER_REQUEST:
        case LOAD_USER_REQUEST:
            return{
                loading:true,
                isAuthenticated:false,
            }
        
            case LOGIN_SUCCESS:
            case REGISTER_USER_SUCCESS:
            case LOAD_USER_SUCCESS:
                return {
                    ...state,
                    loading:false,
                    isAuthenticated:true,
                    user:action.payload,
                }

            case LOGIN_FAIL:
            case REGISTER_USER_FAIL:
                return {
                    ...state,
                    loading:false,
                    isAuthenticated:false,
                    user:null,
                    error:action.payload
                }

            case LOAD_USER_FAIL:
                return{
                    loading:false,
                    isAuthenticated:false,
                    user:null,
                    error:action.payload,
                }

            case LOGOUT_SUCCESS:
                return{
                    loading:false,
                    isAuthenticated:false,
                    user:null,
                }

            case LOGOUT_FAIL:
                    return {
                      ...state,
                      loading: false,
                      error: action.payload,
                    };


            case CLEAR_ERRORS:
                return{
                    ...state,
                    error:null,
                }

            default:
                return state;
    }
});


export const profileReducer = (state={},action)=>{
    switch(action.type){
        case UPDATE_PROFILE_REQUEST:
            case UPDATE_PASSWORD_REQUEST:
            return {
                ...state,
                loading:true
            }

        case UPDATE_PROFILE_SUCCESS:
            case UPDATE_PASSWORD_SUCCESS:
            return {
                ...state,
                loading:false,
                isUpdated: action.payload
            }

        case UPDATE_PROFILE_FAIL:
            case UPDATE_PASSWORD_FAIL:
            return {
                ...state,
          loading: false,
          error: action.payload,
            }

        case UPDATE_PROFILE_RESET:
            case UPDATE_PASSWORD_RESET:
            return {
                ...state,
                isUpdated:false
            }

        case CLEAR_ERRORS:
            return {
                  ...state,
                  error: null,
                };
          
        default:
            return state;
    }
}




export const allhospitalsReducer = (state = { hospitals: [] }, action) => {
    switch (action.type) {
      case ALL_HOSPITALS_REQUEST:
        return {
          loading: true,
        };
  
      case ALL_HOSPITALS_SUCCESS:
        return {
          loading: false,
          hospitals: action.payload,
        };
  
      case ALL_HOSPITALS_FAIL:
        return {
          loading: false,
          error: action.payload,
        };
      case CLEAR_ERRORS:
        return {
          ...state,
          error: null,
        };
  
      default:
        return state;
    }
  };


  export const hospitalReducer = (state = {}, action) => {
    switch (action.type) {
      case UPDATE_HOSPITAL_REQUEST:
      case DELETE_HOSPITAL_REQUEST:
        return {
          ...state,
          loading: true,
        };
  
      case UPDATE_HOSPITAL_SUCCESS:
        return {
          ...state,
          loading: false,
          isUpdated: action.payload,
        };
  
      case DELETE_HOSPITAL_SUCCESS:
        return {
          ...state,
          loading: false,
          isDeleted: action.payload,
        };
  
      case UPDATE_HOSPITAL_FAIL:
      case DELETE_HOSPITAL_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case UPDATE_HOSPITAL_RESET:
        return {
          ...state,
          isUpdated: false,
        };
  
      case DELETE_HOSPITAL_RESET:
        return {
          ...state,
          isDeleted: false,
        };
      case CLEAR_ERRORS:
        return {
          ...state,
          error: null,
        };
  
      default:
        return state;
    }
  };


  export const hospitalDetailsReducer = (state = { hospital: {} }, action) => {
    switch (action.type) {
      case HOSPITAL_DETAILS_REQUEST:
        return {
          loading: true,
        };
  
      case HOSPITAL_DETAILS_SUCCESS:
        return {
          loading: false,
          HOSPITAL: action.payload,
        };
  
      case HOSPITAL_DETAILS_FAIL:
        return {
          loading: false,
          error: action.payload,
        };
      case CLEAR_ERRORS:
        return {
          ...state,
          error: null,
        };
  
      default:
        return state;
    }
  };