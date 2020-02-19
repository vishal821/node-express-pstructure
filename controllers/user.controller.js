const lang = require('../language/en');
const jwt = require('jsonwebtoken');
const usermodel = require('../models/user.model')
const jwConfig = require('config');
const { base64decode } = require('nodejs-base64');
/********/
//user login controller
exports.post = async (requestData, res) => {
    const email_id = requestData.body ? requestData.body.email : false;
    const password = requestData.body ? base64decode(requestData.body.password) : false;
    if (email_id && password) {
        try {
            let userData = await usermodel.queryres();
            if (userData) {
                return __successResponse(res,'Success');
            }
            else {
                return __notFound(res,lang.USER_NOTEXITS);
            }
        }
        catch(err) {
            return __notFound(res,err.message);
        }
    } else {
        return __notFound(res,lang.EMAIL_PWD_REQ);
    }
}