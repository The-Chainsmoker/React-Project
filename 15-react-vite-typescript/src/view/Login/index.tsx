import React, { ChangeEvent, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import initLoginBg from './init'
import styles from './index.module.scss'
import './login.less'
import { CaptchaAPI, LoginAPI } from '@/https/api'
import { LoginAPIReq } from '@/type/api'
import { Input, Space, Button, message } from 'antd'
console.log('styles:', styles)

const Login: React.FC = () => {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [checkNum, setCheckNum] = useState('')
  const [imgBase64, setImgBase64] = useState('')

  const navigateTo = useNavigate()

  useEffect(() => {
    initLoginBg()
    window.onresize = () => {
      initLoginBg()
    }

    getImgBase64()
  }, [])

  /*
  useSelector((state) => {
    console.log('state:', state)
  })
  */

  const getImgBase64 = async () => {
    const ret = await CaptchaAPI()
    console.log('验证码结果', ret)
    setImgBase64('data:image/png;base64,' + ret.img)
    localStorage.setItem('uuid', ret.uuid)
  }

  const getInputValue = (type: string) => {
    return (e: ChangeEvent<HTMLInputElement>) => {
      const value: string = e.target.value
      if (type === 'user') {
        setUserName(value)
      } else if (type === 'password') {
        setPassword(value)
      } else if (type === 'checkNum') {
        setCheckNum(value)
      }
      //setUserName( e.target.value)
    }
  }

  const onSubmit = async () => {
    if (!userName.trim() || !password.trim() || !checkNum.trim()) {
      message.warning('请输入完整的信息!')
      return
    }

    const data: LoginAPIReq = {
      username: userName,
      password: password,
      code: checkNum,
      uuid: localStorage.getItem('uuid'),
    }
    let ret = await LoginAPI(data)
    console.log('登录数据:', ret)

    if (ret.code && ret.code === 200) {
      message.success('登录成功')
      localStorage.setItem('token', ret.token)
      localStorage.removeItem('uuid')
      navigateTo('/')
    } else {
      message.error(`${ret.msg}`)
    }
  }

  /**
   * username : qdtest1
   * password : 123456
   * code : 888888
   **/
  return (
    <div className={styles.loginPage}>
      <canvas id="canvas" style={{ display: 'block' }}></canvas>
      <div className={styles.loginBox + ' loginbox'}>
        <div className={styles.title}>
          <h1>前端 Smokers&nbsp;·&nbsp;通用后台系统</h1>
          <p>Strive Everyday</p>
          <div className="form">
            <Space
              direction="vertical"
              size="middle"
              style={{ display: 'flex' }}
            >
              <Input
                placeholder="请输入用户名"
                onChange={getInputValue('user')}
              />
              <Input.Password
                placeholder="请输入密码"
                onChange={getInputValue('password')}
              />
              <div className="captchaBox">
                <Input
                  placeholder="验证码"
                  onChange={getInputValue('checkNum')}
                />
                <div className="captchaImg">
                  {/* <img height="38" src={captchaImg} alt="" /> */}
                  <img height="38" src={imgBase64} alt="" />
                </div>
              </div>
              <Button type="primary" block onClick={onSubmit}>
                登录
              </Button>
            </Space>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
