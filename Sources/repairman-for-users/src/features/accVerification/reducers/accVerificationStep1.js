/* eslint-disable prettier/prettier */
import { handleActions } from 'redux-actions';
import { ACCVERIFICATIONSTEP1 } from '../actionTypes/accVerificationStep1';

const initialState = { isLoading: false, isError: false, responseData: {} };
const actions = {
  [ACCVERIFICATIONSTEP1.ADD]: () => ({ isLoading: true }),
  [ACCVERIFICATIONSTEP1.ADD_SUCCESS]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    responseData: responseData.response ? responseData.response : responseData,
  }),
  [ACCVERIFICATIONSTEP1.ADD_FAILURE]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    isError: true,
    responseData,
  }),
};
export default handleActions(actions, initialState);
