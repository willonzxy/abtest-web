<template lang="pug">
    d2-container
        Curd(ref="curd" :config="config")
</template>
<script>
import Curd from '@/components/curd'
import { dataManagerApi } from '@/api/sys.layer.js';
import { dataManagerApi as app_data_api } from '@/api/sys.app.js';
import {IDString} from '../../common.js'
// import { deep_clone } from '@/components/curd/util';
// import { numAndEn } from '@/components/curd/form/rule.js'
// import jsMd5 from 'js-md5'
export default {
    name:'layer-manage',
    components:{
        Curd,
    },
    data(){
        const that = this;
        return {
            config:{
                defaultColumns:true,
                api:dataManagerApi,
                title:'场景管理',
                actions:['edit'],
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
                            api:`${app_data_api.select.api}?pageSize=100000`,
                            show:'name',
                            dataIndex:'alias_id',
                            label:'应用名称',
                        },
                        { attr:'alias_id',type:'input',label:'场景ID',placeholder:"请输入场景ID"},
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
                            dataIndex:'alias_id',
                            label:'应用名称',
                            is_required:true
                        },
                        { attr:'name',type:'input',label:'场景名称',placeholder:"请输入场景名称",is_required:true},
                        { attr:'alias_id',type:'input',label:'场景ID',placeholder:"请输入场景ID",maxlength:32,rules:[{...IDString}],is_required:true},
                        { attr:'verbose',type:'input',label:'备注',placeholder:"备注"},
                        
                    ]
                },
                tableConfig:[
                    {
                        key:'alias_id',
                        title:'场景ID',
                    },
                    {
                        key:'name',
                        title:'场景名称',
                    },
                    // {
                    //     key:'app_id',
                    //     title:'应用id',
                    // },
                    // {
                    //     key:'app_name',
                    //     title:'应用名称',
                    // },
                    // {
                    //     key:'status',
                    //     title:'状态',
                    // },
                    {
                        key:'verbose',
                        title:'备注',
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