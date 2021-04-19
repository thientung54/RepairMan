/* eslint-disable prettier/prettier */
import { handleActions } from 'redux-actions';
import { ACCVERIFICATIONSTEP3 } from '../actionTypes/accVerificationStep3';

const initialState = { isLoading: false, isError: false, responseData: {} };
const actions = {
  [ACCVERIFICATIONSTEP3.ADD]: () => ({ isLoading: true }),
  [ACCVERIFICATIONSTEP3.ADD_SUCCESS]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    responseData: responseData.response ? responseData.response : responseData,
  }),
  [ACCVERIFICATIONSTEP3.ADD_FAILURE]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    isError: true,
    responseData,
  }),
};
export default handleActions(actions, initialState);
