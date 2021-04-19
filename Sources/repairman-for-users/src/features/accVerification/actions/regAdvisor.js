import { createAction } from 'redux-actions';
import { REGADVISOR } from '../actionTypes/regAdvisor';

export const getAllRegAdvisorAction = createAction(REGADVISOR.REGADVISOR_GETALL);
export const getAllRegAdvisorSuccessAction = createAction(REGADVISOR.REGADVISOR_GETALL_SUCCESS);
export const getAllRegAdvisorFailureAction = createAction(REGADVISOR.REGADVISOR_GETALL_FAILURE);