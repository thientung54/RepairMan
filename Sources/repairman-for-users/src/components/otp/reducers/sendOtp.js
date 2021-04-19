/* eslint-disable prettier/prettier */
import { handleActions } from 'redux-actions';
import { OTP } from '../actionTypes/sendOtp';

const initialState = { isLoading: false, isError: false, responseData: '' };
const actions = {
  [OTP.SEND]: () => ({ isLoading: true }),
  [OTP.SEND_SUCCESS]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    responseData: responseData.response ? responseData.response : responseData,
  }),
  [OTP.SEND_FAILURE]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    isError: true,
    responseData,
  }),
};
export default handleActions(actions, initialState);
