/* eslint-disable prettier/prettier */
import { handleActions } from 'redux-actions';
import { LOGIN } from '../actionTypes/index';

const initialState = { isLoading: false, isError: false, responseData: {} };
const actions = {
  [LOGIN.AUTH]: () => ({ isLoading: true }),
  [LOGIN.AUTH_SUCCESS]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    responseData: responseData.response ? responseData.response : responseData,
  }),
  [LOGIN.AUTH_FAILURE]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    isError: true,
    responseData,
  }),
};
export default handleActions(actions, initialState);
