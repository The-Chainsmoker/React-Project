// 验证码的响应类型约束
export interface CaptchaAPIRes {
  msg: string
  img: string
  code: number
  captchaEnabled: boolean
  uuid: string
}
// 登录请求参数类型约束
export interface LoginAPIReq {
  username: string
  password: string
  code: string
  uuid: string
}
// 登录的响应类型约束
export interface LoginAPIRes {
  msg: string
  code: number
  token: string
}
