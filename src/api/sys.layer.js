const actionPrefix = '/admin';

export const dataManagerApi = {
    add:{
        m:'post',
        api:actionPrefix + '/layer'
    },
    select:{
        m:'get',
        api:actionPrefix + '/layer'
    },
    edit:{
        m:'put',
        api:actionPrefix + '/layer'
    },
    del:{
        m:'delete',
        api:actionPrefix + '/layer'
    },
    launch:{
        m:'post',
        api:actionPrefix + '/launch'
    }
}

