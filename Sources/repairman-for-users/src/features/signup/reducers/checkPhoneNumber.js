/* eslint-disable prettier/prettier */
import { handleActions } from 'redux-actions';
import { CHECK_PHONE_NUMBER } from '../actionTypes/checkPhoneNumber';

const initialState = {
  isLoading: false,
  isError: false,
  userPhoneNumber: '',
  responseData: '',
 };
const actions = {
  [CHECK_PHONE_NUMBER.FIND]: () => ({ isLoading: true }),
  [CHECK_PHONE_NUMBER.FIND_SUCCESS]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    responseData: responseData,
  }),
  [CHECK_PHONE_NUMBER.FIND_FAILURE]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    isError: true,
    responseData,
  }),
};
export default handleActions(actions, initialState);
