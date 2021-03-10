const actionPrefix = '/admin';

export const dataManagerApi = {
    add:{
        m:'post',
        api:actionPrefix + '/app'
    },
    select:{
        m:'get',
        api:actionPrefix + '/app'
    },
    edit:{
        m:'put',
        api:actionPrefix + '/app'
    },
    del:{
        m:'delete',
        api:actionPrefix + '/app'
    }
}

