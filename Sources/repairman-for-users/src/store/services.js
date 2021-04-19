/* eslint-disable prettier/prettier */
//import { commonConstant } from '../contants/common';
import { configs } from '../configs';
import { getAsyncStorage } from '../utilities/storage';
import { commonConstant } from '../constants';

const getToken = () => {
    getAsyncStorage(commonConstant.AUTH_TOKEN).then((authToken) => {
        if (authToken !== null) {
            console.log('AUTH_TOKEN has got from getToken: ', authToken);
            return 'jwt ' + authToken;
        }
    });
}

const API_SERVICES = {
    URL_HOST_API: configs.URL_HOST_API,
    HEADERS(tokenJWT) {
        return {
            'Content-Type': 'application/json; charset=utf-8',
            Authorization: tokenJWT ? tokenJWT : getToken(),
        };
    },
};

export default API_SERVICES;
