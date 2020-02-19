const logger = require('../utils/logger');

global.__successResponse = (res,data) => {
    let resData = {
        message: 'SUCCESS',
        data
    }
    res.status(200).send(resData);
};

global.__badRequest = (res,message) => {
   let errObj = {
        status: 'FAIL',
        data: message || 'Bad request'
    }
    logger.info(message || 'Bad request');
    // res.status(400).send(errObj);
};
global.__notFound = (res,message) => {
    let errObj = {
        status: 'FAIL',
        data: message || 'Not Found'
    }
    logger.info(message || 'Not Found');
    res.status(404).send(errObj);
 };
global.__unauthorized = (res, message) => {
    let unauthorizedObj = {
        status: 'FAIL',
        data: message || 'Unauthorized'
    }
    logger.info(message || 'Unauthorized');
    res.status(401).send(unauthorizedObj);
};