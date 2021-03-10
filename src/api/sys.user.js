const actionPrefix = '/admin';

export const dataManagerApi = {
    add:{
        m:'post',
        api:actionPrefix + '/user-regist'
    },
    select:{
        m:'get',
        api:actionPrefix + '/user-record'
    },
    edit:{
        m:'put',
        api:actionPrefix + '/user-edit'
    },
    del:{
        m:'delete',
        api:actionPrefix + '/user-del'
    }
}

