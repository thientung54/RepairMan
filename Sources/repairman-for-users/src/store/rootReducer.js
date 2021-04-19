/* eslint-disable prettier/prettier */
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as toastrReducer } from 'react-redux-toastr';

//SIGNUP
import registerUserReducer from '../features/signup/reducers/registerUser';
import checkPhoneNumberReducer from '../features/signup/reducers/checkPhoneNumber';
import sendOtpReducer from '../components/otp/reducers/sendOtp';
import reSendOtpReducer from '../components/otp/reducers/reSendOtp';
//import signUpTechnicianReducer from './user/signUpTechnicianReducer';
//LOGIN
import loginReducer from '../features/login/reducers/index';
//ACCOUNT VERIFICATION STEP 1
import accVerification1Reducer from '../features/accVerification/reducers/accVerificationStep1';
//ACCOUNT VERIFICATION STEP 2
import accVerification2Reducer from '../features/accVerification/reducers/accVerificationStep2';
//ACCOUNT VERIFICATION STEP 3
import accVerification3Reducer from '../features/accVerification/reducers/accVerificationStep3';
//REGISTRATION CITY
import regAdvisorReducer from '../features/accVerification/reducers/regAdvisor';
//REGISTRATION SERVICE
import regServiceReducer from '../features/accVerification/reducers/regService';

export default combineReducers({
    router: routerReducer,
    toastr: toastrReducer,
    //SIGNUP
    registerUserReducer,
    checkPhoneNumberReducer,
    sendOtpReducer,
    reSendOtpReducer,
    //signUpTechnicianReducer,
    //LOGIN
    loginReducer,
    //ACCOUNT VERIFICATION STEP 1
    accVerification1Reducer,
    //ACCOUNT VERIFICATION STEP 2
    accVerification2Reducer,
    //ACCOUNT VERIFICATION STEP 3
    accVerification3Reducer,
    //REGISTRATION ADVISOR
    regAdvisorReducer,
    //REGISTRATION SERVICE
    regServiceReducer,
});
