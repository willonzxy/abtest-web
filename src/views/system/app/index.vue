<template lang="pug">
    d2-container
        Curd(ref="curd" :config="config")
</template>
<script>
import Curd from '@/components/curd'
import { dataManagerApi } from '@/api/sys.app.js';
import { deep_clone } from '@/components/curd/util';
import { numAndEn } from '@/components/curd/form/rule.js'
import jsMd5 from 'js-md5'
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
                        { attr:'id',type:'input',label:'应用id',placeholder:"请输入应用id"},
                        { attr:'name',type:'input',label:'应用名称',placeholder:"请输入应用名称"},
                    ]
                },
                addFormConfig:{
                    btn_group_center:'center',
                    'label-width':'100px',
                    inline:false,
                    actions:['submit','reset'],
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
                        { attr:'verbose',type:'input',label:'应用描述',placeholder:"请输入应用描述"},
                    ]
                },
                tableConfig:[
                    {
                        key:'id',
                        title:'应用id',
                    },
                    {
                        key:'name',
                        title:'应用名称',
                    },
                    {
                        key:'link',
                        title:'应用链接',
                    },
                    {
                        key:'verbose',
                        title:'应用描述',
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