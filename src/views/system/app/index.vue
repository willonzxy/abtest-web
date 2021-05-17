<template lang="pug">
    d2-container
        Curd(ref="curd" :config="config")
</template>
<script>
import Curd from '@/components/curd'
import { dataManagerApi } from '@/api/sys.app.js';
// import { deep_clone } from '@/components/curd/util';
// import { numAndEn } from '@/components/curd/form/rule.js'
// import jsMd5 from 'js-md5'
import {IDString} from '../../common.js'
export default {
    name:'app-m',
    components:{
        Curd,
    },
    data(){
        const that = this;
        return {
            config:{
                defaultColumns:true,
                api:dataManagerApi,
                title:'应用管理',
                actions:['edit'],
                searchBarConfig:{
                    btn_group_center:'center',
                    actions:['submit','reset'],
                    inline:true,
                    'label-width':'100px',
                    formConfig:[
                        { attr:'type',type:'radio',label:'应用类型',data:
                            [
                                {value:1,label:'Web'},
                                {value:2,label:'小程序'},
                                {value:3,label:'Android'},
                                {value:4,label:'IOS'}
                            ],
                        },
                        { attr:'alias_id',type:'input',label:'应用ID',placeholder:"请输入应用ID"},
                    ],
                },
                addFormConfig:{
                    btn_group_center:'center',
                    'label-width':'100px',
                    inline:false,
                    actions:['submit'],
                    formConfig:[
                        { attr:'type',type:'radio',label:'应用类型',data:
                            [
                                {value:1,label:'Web'},
                                {value:2,label:'小程序'},
                                {value:3,label:'Android'},
                                {value:4,label:'IOS'}
                            ],
                            is_required:true,
                            onchange(val){
                                let index =  this.formConfig.findIndex(i=>i.attr === 'link')
                                this.formConfig[index].disabled = val === 1 ? false : true;
                            }
                        },
                        { attr:'link',type:'input',label:'应用链接',placeholder:"请输入应用链接",disabled:true},
                        { attr:'name',type:'input',label:'应用名称',placeholder:"请输入应用名称",is_required:true},
                        { attr:'alias_id',type:'input',label:'应用ID',placeholder:"ID系统唯一，一但提交无法修改",is_required:true,maxlength:32,rules:[{...IDString}],disabled_on_edit:true},
                        { attr:'verbose',type:'input',label:'备注',placeholder:"请输入备注"},
                    ]
                },
                tableConfig:[
                    {
                        key:'alias_id',
                        title:'应用ID',
                    },
                    {
                        key:'name',
                        title:'应用名称',
                    },
                    {
                        key:'link',
                        title:'应用链接',
                    },
                    // {
                    //     key:'shunt_api',
                    //     title:'分流api',
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