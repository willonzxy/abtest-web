<template lang="pug">
    d2-container
        Curd(ref="curd" :config="config")
</template>
<script>
import Curd from '@/components/curd'
import { dataManagerApi } from '@/api/sys.layer.js';
import { dataManagerApi as app_data_api } from '@/api/sys.app.js';
export default {
    name:'launch',
    components:{
        Curd,
    },
    data(){
        const that = this;
        return {
            config:{
                defaultColumns:true,
                api:dataManagerApi,
                title:'启动分流',
                actions:['edit','launch'],
                searchBarConfig:{
                    btn_group_center:'center',
                    actions:['submit','reset'],
                    inline:true,
                    'label-width':'100px',
                    formConfig:[
                        // { attr:'type',type:'radio',label:'应用类型',data:
                        //     [
                        //         {value:1,label:'Web'},
                        //         {value:2,label:'小程序'},
                        //         {value:3,label:'Android'},
                        //         {value:4,label:'IOS'}
                        //     ],
                        // },
                        // { attr:'name',type:'input',label:'应用名称',placeholder:"请输入应用名称"},
                        { 
                            attr:'app_id',
                            type:'lazy-select',
                            api:app_data_api.select.api,
                            show:'name',
                            dataIndex:'id',
                            label:'应用名称',
                        },
                        { attr:'id',type:'input',label:'场景id',placeholder:"请输入场景id"},
                    ]
                },
                addFormConfig:{
                    btn_group_center:'center',
                    'label-width':'100px',
                    inline:false,
                    actions:['submit','reset'],
                    formConfig:[
                        { 
                            attr:'app_id',
                            type:'lazy-select',
                            api:app_data_api.select.api,
                            show:'name',
                            dataIndex:'id',
                            label:'应用名称',
                            is_required:true
                        },
                        { attr:'name',type:'input',label:'场景名称',placeholder:"请输入场景名称",is_required:true},
                        { attr:'verbose',type:'input',label:'场景描述',placeholder:"请输入场景描述"},
                    ]
                },
                tableConfig:[
                    // {
                    //     key:'app_name',
                    //     title:'应用名称',
                    // },
                    {
                        key:'id',
                        title:'场景id',
                    },
                    {
                        key:'name',
                        title:'场景名称',
                    },
                    {
                        key:'status',
                        title:'状态',
                    },
                    {
                        key:'verbose',
                        title:'场景描述',
                    },
                    {
                        key:'modified_date',
                        title:'修改时间',
                    },
                    {
                        key:'modifier_name',
                        title:'修改人',
                    },
                ]
            }
        }
    },
    methods:{
        
    }
}
</script>