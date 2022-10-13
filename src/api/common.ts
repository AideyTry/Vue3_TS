/*
 * @Author: Aiden(戴林波)
 * @Date: 2022-10-09 23:15:57
 * @LastEditTime: 2022-10-13 22:54:55
 * @LastEditors: Aiden(戴林波)
 * @Description: 
 * @Email: jason_dlb@sina.cn
 */
/**
 * 公共基础接口封装
*/

import request from '@/utils/request'

import type { LoginInfo } from './types/common'

export const getLoginInfo = () => {
    return request<LoginInfo>({
      method: 'GET',
      url: '/admin/login/info'
    })
  }