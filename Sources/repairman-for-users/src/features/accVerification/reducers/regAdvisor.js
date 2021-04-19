/* eslint-disable prettier/prettier */
import { handleActions } from 'redux-actions';
import { REGADVISOR } from '../actionTypes/regAdvisor';

const initialState = { isLoading: false, isError: false, responseData: {} };
const actions = {
  [REGADVISOR.REGADVISOR_GETALL]: () => ({ isLoading: true }),
  [REGADVISOR.REGADVISOR_GETALL_SUCCESS]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    responseData: responseData.response ? responseData.response : responseData,
  }),
  [REGADVISOR.REGADVISOR_GETALL_FAILURE]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    isError: true,
    responseData,
  }),
};
export default handleActions(actions, initialState);
