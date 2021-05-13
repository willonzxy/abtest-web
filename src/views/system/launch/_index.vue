<template lang="pug">
    d2-container
        Curd(ref="curd" :config="config")
</template>
<script>
import Curd from '@/components/curd'
import { dataManagerApi as app_data_api } from '@/api/sys.app.js';
import { dataManagerApi as layer_data_api } from '@/api/sys.layer.js';
import { dataManagerApi as launch_data_api } from '@/api/sys.launch.js';
import { dataManagerApi as exp_data_api } from '@/api/sys.experiment.js';
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
                api:launch_data_api,
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
                            label:'选择所属应用',
                            onchange(val){
                                //let index = this.formConfig.findIndex(i=>i.attr === 'layer_id');
                                this.getLazyData('layer_id',layer_data_api.select.api + '?pageSize=100000&app_id='+val);
                            }
                        },
                        { 
                            attr:'layer_id',
                            type:'lazy-select',
                            api:'',
                            show:'name',
                            dataIndex:'id',
                            label:'选择所属场景',
                        },
                        { attr:'id',type:'input',label:'场景id',placeholder:"请输入场景id"},
                    ]
                },
                addFormConfig:{
                    btn_group_center:'center',
                    'label-width':'120px',
                    inline:true,
                    actions:['submit','reset'],
                    formConfig:[
                        { 
                            attr:'app_id',
                            type:'lazy-select',
                            api:app_data_api.select.api,
                            show:'name',
                            dataIndex:'id',
                            label:'选择所属应用',
                            onchange(val){
                                this.getLazyData('layer_id',layer_data_api.select.api + '?pageSize=100000&app_id='+val);
                            },
                            is_required:true,
                        },
                        { 
                            attr:'layer_id',
                            type:'lazy-select',
                            api:'',
                            show:'name',
                            dataIndex:'id',
                            label:'选择所属场景',
                            is_required:true,
                            onchange(val){
                                this.getLazyData('ref_exp_id',exp_data_api.select.api + '?pageSize=100000&layer_id='+val);
                            },
                        },
                        { 
                            attr:'ref_exp_id',
                            type:'lazy-select',
                            api:'',
                            show:'name',
                            dataIndex:'id',
                            label:'选择原始实验组',
                            is_required:true,
                        },
                        {
                            attr:'exp_set',
                            label:'实验组',
                            param_type:'array',
                            // "tab_name": "实验组",
                            children:[
                                {
                                    "label": "",
                                    "attr": "attr_items_3",
                                    "type": "",
                                    "value": "",
                                    "param_type": "object",
                                    "label-width": "0",
                                    "disabled": false,
                                    "disabled_on_edit": false,
                                    "explain": "",
                                    "children": [
                                        {
                                            "label": "实验",
                                            "attr": "exp_id",
                                            "type": "lazy-select",
                                            "api":"",
                                            "value": "",
                                            "label-width": "60",
                                            "param_type": "string",
                                            "is_required": true,
                                            "explain": "",
                                        },
                                        {
                                            "label": "分流占比",
                                            "attr": "weight",
                                            "type": "number-input",
                                            "label-width": "60",
                                            "value": "",
                                            "param_type": "number",
                                            "is_required": true,
                                            "explain": "",
                                        }
                                    ],
                                    "attrID": 3
                                }
						    ]
                        },
                        // { attr:'name',type:'lay',label:'场景名称',placeholder:"请输入场景名称",is_required:true},
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