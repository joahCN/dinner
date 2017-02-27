/**
 * Created by joah.zhang on 2017/2/27.
 */

let errorCodes = {
    "1000": '用户名或密码错误',
    default: 'API error'
};

module.exports ={
    getErrorMessage: (code)=>{
        return errorCodes[code] || errorCodes.default;
    }
};