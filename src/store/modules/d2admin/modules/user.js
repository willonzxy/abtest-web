export default {
  namespaced: true,
  state: {
    // 用户信息
    info: {}
  },
  getters:{
    userInfo(state){
      return state.info;
    }
  },
  actions: {
    /**
     * @description 设置用户数据
     * @param {Object} context
     * @param {*} info info
     */
    async set ({ state, dispatch }, info) {
      // info.admin = 1;
      // store 赋值
      state.info = {
        ...state.info,
        ...info.data,
        // admin:1
      }
      // 持久化
      await dispatch('d2admin/db/set', {
        dbName: 'sys',
        path: 'user.info',
        value: state.info,
        user: true
      }, { root: true })
    },
    /**
     * @description 从数据库取用户数据
     * @param {Object} context
     */
    async load ({ state, dispatch }) {
      // store 赋值
      state.info = await dispatch('d2admin/db/get', {
        dbName: 'sys',
        path: 'user.info',
        defaultValue: {},
        user: true
      }, { root: true })
    }
  }
}
