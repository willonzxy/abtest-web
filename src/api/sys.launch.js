const actionPrefix = '/admin';

export const dataManagerApi = {
    add:{
        m:'post',
        api:actionPrefix + '/launch'
    },
    select:{
        m:'get',
        api:actionPrefix + '/launch'
    },
    edit:{
        m:'put',
        api:actionPrefix + '/launch'
    },
    del:{
        m:'delete',
        api:actionPrefix + '/launch'
    }
}

