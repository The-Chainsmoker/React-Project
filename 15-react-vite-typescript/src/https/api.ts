import request from './index'
import { CaptchaAPIRes, LoginAPIReq, LoginAPIRes } from '@/type/api'

export const CaptchaAPI = (): Promise<CaptchaAPIRes> =>
  request.get('/prod-api/captchaImage')

export const LoginAPI = (params: LoginAPIReq): Promise<LoginAPIRes> =>
  request.post('/prod-api/login', params)
