/* eslint-disable prettier/prettier */
import { handleActions } from 'redux-actions';
import { OTP } from '../actionTypes/reSendOtp';

const initialState = { isLoading: false, isError: false, responseData: '' };
const actions = {
  [OTP.RESEND]: () => ({ isLoading: true }),
  [OTP.RESEND_SUCCESS]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    responseData: responseData.response ? responseData.response : responseData,
  }),
  [OTP.RESEND_FAILURE]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    isError: true,
    responseData,
  }),
};
export default handleActions(actions, initialState);
