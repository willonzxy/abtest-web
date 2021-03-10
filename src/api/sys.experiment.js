const actionPrefix = '/admin';

export const dataManagerApi = {
    add:{
        m:'post',
        api:actionPrefix + '/experiment'
    },
    select:{
        m:'get',
        api:actionPrefix + '/experiment'
    },
    edit:{
        m:'put',
        api:actionPrefix + '/experiment'
    },
    del:{
        m:'delete',
        api:actionPrefix + '/experiment'
    }
}

