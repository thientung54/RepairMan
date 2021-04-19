/* eslint-disable prettier/prettier */
import { handleActions } from 'redux-actions';
import { REGISTER } from '../actionTypes/registerUser';

const initialState = { isLoading: false, isError: false, responseData: '' };
const actions = {
  [REGISTER.ADD]: () => ({ isLoading: true }),
  [REGISTER.ADD_SUCCESS]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    responseData: responseData.response ? responseData.response : responseData,
  }),
  [REGISTER.ADD_FAILURE]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    isError: true,
    responseData,
  }),
};
export default handleActions(actions, initialState);
