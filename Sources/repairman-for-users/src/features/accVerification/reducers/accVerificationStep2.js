/* eslint-disable prettier/prettier */
import { handleActions } from 'redux-actions';
import { ACCVERIFICATIONSTEP2 } from '../actionTypes/accVerificationStep2';

const initialState = { isLoading: false, isError: false, responseData: {} };
const actions = {
  [ACCVERIFICATIONSTEP2.ADD]: () => ({ isLoading: true }),
  [ACCVERIFICATIONSTEP2.ADD_SUCCESS]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    responseData: responseData.response ? responseData.response : responseData,
  }),
  [ACCVERIFICATIONSTEP2.ADD_FAILURE]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    isError: true,
    responseData,
  }),
};
export default handleActions(actions, initialState);
