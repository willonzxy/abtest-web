<template lang="pug">
    d2-container
        Curd(ref="curd" :config="config")
</template>
<script>
import Curd from '@/components/curd'
import { dataManagerApi as app_data_api } from '@/api/sys.app.js';
import { dataManagerApi as layer_data_api } from '@/api/sys.layer.js';
import { dataManagerApi } from '@/api/sys.experiment.js';
export default {
    name:'experiment-m',
    components:{
        Curd,
    },
    data(){
        const that = this;
        return {
            config:{
                defaultColumns:true,
                api:dataManagerApi,
                title:'实验管理',
                actions:['edit','delete'],
                searchBarConfig:{
                    btn_group_center:'center',
                    actions:['submit','reset'],
                    inline:true,
                    'label-width':'120px',
                    formConfig:[
                        { 
                            attr:'app_id',
                            type:'lazy-select',
                            api:app_data_api.select.api,
                            show:'name',
                            dataIndex:'id',
                            label:'选择所属应用',
                            onchange(val){
                                //let index = this.formConfig.findIndex(i=>i.attr === 'layer_id');
                                this.getLazyData('layer_id',layer_data_api.select.api + '?pageSize=100000&app_id='+val);
                            }
                        },
                        { 
                            attr:'layer_id',
                            type:'lazy-select',
                            api:layer_data_api.select.api,
                            show:'name',
                            dataIndex:'id',
                            label:'选择所属场景',
                        },
                        { attr:'id',type:'input',label:'实验id',placeholder:"请输入实验id"},
                    ]
                },
                addFormConfig:{
                    btn_group_center:'center',
                    'label-width':'120px',
                    inline:false,
                    actions:['submit','reset'],
                    formConfig:[
                        { 
                            attr:'app_id',
                            type:'lazy-select',
                            api:app_data_api.select.api,
                            show:'name',
                            dataIndex:'id',
                            label:'选择所属应用',
                            is_required:true,
                            onchange(val){
                                //let index = this.formConfig.findIndex(i=>i.attr === 'layer_id');
                                this.getLazyData('layer_id',layer_data_api.select.api + '?pageSize=100000&app_id='+val);
                            }
                        },
                        { 
                            attr:'layer_id',
                            type:'lazy-select',
                            api:layer_data_api.select.api,
                            show:'name',
                            dataIndex:'id',
                            label:'选择所属场景',
                            is_required:true
                        },
                        //{ attr:'name',type:'input',label:'实验名称',placeholder:"请输入实验名称",is_required:true},
                        { attr:'weight',type:'slider',showInput:true,label:'分流比例',is_required:true,value:50},
                        { attr:'api',type:'upload',label:'实验数据接口',is_required:true,explain:'经过分流处理后，返回的数据接口'},
                        { attr:'verbose',type:'input',label:'实验描述',placeholder:"请输入实验描述"},
                    ]
                },
                tableConfig:[
                    {
                        key:'app_id',
                        title:'应用id',
                    },
                    {
                        key:'layer_id',
                        title:'场景id',
                    },
                    {
                        key:'id',
                        title:'实验id',
                    },
                    // {
                    //     key:'name',
                    //     title:'实验名称',
                    // },
                    {
                        key:'weight',
                        title:'分流占比(%)',
                    },
                    {
                        key:'api',
                        title:'实验数据接口',
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