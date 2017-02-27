/**
 * Created by joah.zhang on 2017/2/27.
 */
// let getErrorMessage = require("./errorCodes");

module.exports = {
    success: (data)=>{
        return sails.util._.assign({}, data, {
            status: {
                success: true,
                code: 0,
                message: ''
            }
        })
    },
    fail: (code) => {
        return {
            status: {
                success: false,
                code: code,
                message: ErrorCodeService.getErrorMessage(code)
            }
        }
    }
};