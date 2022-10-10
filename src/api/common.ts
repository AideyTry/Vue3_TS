/*
 * @Author: Aiden(戴林波)
 * @Date: 2022-10-09 23:15:57
 * @LastEditTime: 2022-10-10 23:20:37
 * @LastEditors: Aiden(戴林波)
 * @Description: 
 * @Email: jason_dlb@sina.cn
 */
/**
 * 公共基础接口封装
*/

import request from '@/utils/request'

export const getLoginInfo = () => {
    return request({
      method: 'GET',
      url: '/admin/login/info'
    })
  }