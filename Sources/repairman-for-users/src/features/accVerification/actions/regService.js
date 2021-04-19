import { createAction } from 'redux-actions';
import { REGSERVICE } from '../actionTypes/regService';

export const getAllRegServiceAction = createAction(REGSERVICE.REGSERVICE_GETALL);
export const getAllRegServiceSuccessAction = createAction(REGSERVICE.REGSERVICE_GETALL_SUCCESS);
export const getAllRegServiceFailureAction = createAction(REGSERVICE.REGSERVICE_GETALL_FAILURE);