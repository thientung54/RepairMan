/* eslint-disable prettier/prettier */
import { handleActions } from 'redux-actions';
import { REGSERVICE } from '../actionTypes/regService';

const initialState = { isLoading: false, isError: false, responseData: {} };
const actions = {
  [REGSERVICE.REGSERVICE_GETALL]: () => ({ isLoading: true }),
  [REGSERVICE.REGSERVICE_GETALL_SUCCESS]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    responseData: responseData.response ? responseData.response : responseData,
  }),
  [REGSERVICE.REGSERVICE_GETALL_FAILURE]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    isError: true,
    responseData,
  }),
};
export default handleActions(actions, initialState);
