const actionPrefix = '/admin';

export const dataManagerApi = {
    login:{
        m:'post',
        api:'/login'
    },
    logout:{
        m:'get',
        api:actionPrefix + '/logout'
    },
    getSession:{
        m:'get',
        api:actionPrefix + '/user_session'
    },
}

