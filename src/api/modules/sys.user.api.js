import { find, assign } from 'lodash'
import { dataManagerApi } from '@/api/sys.login.js';
import _fetch from '../../components/curd/util/fetch'

export default ({ service, request, serviceForMock, requestForMock, mock, faker, tools }) => ({
  /**
   * @description 登录
   * @param {Object} data 登录携带的信息
   */
  SYS_USER_LOGIN (data = {}) {
    // 模拟数据
    // mock
    //   .onAny(dataManagerApi.login.api)
    //   .reply(config => {
    //     const user = find(users, tools.parse(config.data))
    //     return user
    //       ? tools.responseSuccess(assign({}, user, { token: faker.random.uuid() }))
    //       : tools.responseError({}, '账号或密码不正确')
    //   })
    // 接口请求
    return _fetch({
      url: dataManagerApi.login.api,
      method: dataManagerApi.login.m,
      data,
      // headers:{
      //   'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
      // }

    })
  },
  getSessionInfo () {
    // 模拟数据
    // mock
    //   .onAny(dataManagerApi.login.api)
    //   .reply(config => {
    //     const user = find(users, tools.parse(config.data))
    //     return user
    //       ? tools.responseSuccess(assign({}, user, { token: faker.random.uuid() }))
    //       : tools.responseError({}, '账号或密码不正确')
    //   })
    // 接口请求
    return _fetch({
      url: dataManagerApi.getSession.api,
      method: dataManagerApi.getSession.m,
      // headers:{
      //   'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
      // }
    })
  }
})
