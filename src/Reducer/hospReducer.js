import  {createReducer} from "@reduxjs/toolkit"


export const hospReducer  = createReducer({isAuthenticated:false},{
    loadHospRequest: (state) => {
        state.loading = true;
      },
      loadHospSuccess: (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.hosp = action.payload;
      },
      loadHospFail: (state, action) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.error = action.payload;
      },
      logoutRequest: (state) => {
        state.loading = true;
      },
      logoutSuccess: (state) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.hosp = null;
      },
      logoutFail: (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.error = action.payload;
      },
      clearError: (state) => {
        state.error = null;
      },
      clearMessage: (state) => {
        state.message = null;
      },
})