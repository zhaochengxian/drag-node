export enum Code {
    SUCCESS = 200,
    PATH_ERROR = 404,
    PARAMS_ERROR = 500,
}


export const VerifyParams = new Map([
    ['pageName', '页面名称不能为空'],
    ['paperwork', '分享文案不能为空'],
    ['shareImage', '分享图片不能为空'],
    ['backgroundImage', '背景图不能为空'],
    ['id', 'id没有传']
])

export const pageUrl = "http://www.baidu.com"
