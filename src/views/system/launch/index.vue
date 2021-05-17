<template lang="pug">
    d2-container
        Curd(ref="curd" :config="config")
</template>
<script>
import Curd from '@/components/curd'
import { dataManagerApi as app_data_api } from '@/api/sys.app.js';
import { dataManagerApi as layer_data_api } from '@/api/sys.layer.js';
import { dataManagerApi as launch_data_api } from '@/api/sys.launch.js';
import dayjs from 'dayjs'
import {IDString} from '../../common.js'
import request from '@/plugin/axios'
var layer_info = {};
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
                actions:['edit','delete','copy-api'],
                render_first_action:true,
                searchBarConfig:{
                    btn_group_center:'center',
                    actions:['submit','reset'],
                    inline:true,
                    'label-width':'100px',
                    formConfig:[
                        { 
                            attr:'app_id',
                            type:'lazy-select',
                            api:app_data_api.select.api,
                            show:'name',
                            dataIndex:'alias_id',
                            label:'应用名称',
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
                            dataIndex:'alias_id',
                            label:'场景名称',
                            change_submit:true,
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
                            dataIndex:'alias_id',
                            label:'选择应用',
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
                            dataIndex:'alias_id',
                            label:'选择场景',
                            is_required:true,
                        },
                        {
                            "label": "对照组ID",
                            "attr": "ref_exp_id",
                            "type": "input",
                            "param_type": "string",
                            "is_required": true,
                            rules:[{...IDString}],
                            tab_name:'对照组配置'
                        },
                        {
                            "label": "对照组数据接口",
                            "attr": "ref_exp_api",
                            "type": "upload",
                            "value": "",
                            "param_type": "string",
                            "is_required": true,
                            "explain": "",
                            tab_name:'对照组配置'
                        },
                        { attr:'hit',type:'number-input',label:'抽样流量',is_required:true,min:0,max:1,step:0.1},
                        {attr:'verbose',label:'备注',type:'textarea'},
                        {
                            tab_name:'实验组配置',
                            attr:'exp_set',
                            label:'',
                            param_type:'array',
                            // "tab_name": "实验组",
                            children:[
                                {
                                    "label": "",
                                    "attr": "attr_items_3",
                                    "type": "",
                                    "value": "",
                                    "param_type": "object",
                                    "explain": "",
                                    "children": [
                                        {
                                            "label": "实验ID",
                                            "attr": "exp_id",
                                            "type": "input",
                                            "param_type": "string",
                                            "is_required": true,
                                            rules:[{...IDString}],
                                            "explain": "",
                                        },
                                        {
                                            "label": "实验名称",
                                            "attr": "exp_name",
                                            "type": "input",
                                            "param_type": "string",
                                            "is_required": true,
                                            "explain": "",
                                        },
                                        {
                                            "label": "实验数据接口",
                                            "attr": "exp_api",
                                            "type": "upload",
                                            "param_type": "string",
                                            "is_required": true,
                                            "explain": "",
                                        },
                                        {
                                            "label": "分流占比",
                                            "attr": "_weight",
                                            "type": "number-input",
                                            "label-width": "60",
                                            "value": "",
                                            "param_type": "number",
                                            "is_required": true,
                                            "explain": "",
                                            min:0,
                                            max:1,
                                            step:0.1
                                        }
                                    ]
                                }
						    ]
                        }
                    ]
                },
                tableConfig:[
                    // {
                    //     key:'app_name',
                    //     title:'应用名称',
                    // },
                    {
                        key:'version',
                        title:'操作版本',
                    },
                    {
                        key:'layer_id',
                        title:'场景id',
                    },
                    {
                        key:'layer_name',
                        title:'场景名称',
                    },
                    {
                        key:'translate_hit',
                        title:'抽样流量',
                    },
                    {
                        key:'ref_exp_id',
                        title:'对照组标识',
                    },
                    {
                        key:'ref_exp_api',
                        title:'对照组API',
                    },
                    {
                        key:'translate_exp_set',
                        title:'分流配置',
                    },
                    {
                        key:'translate_status',
                        title:'状态',
                    },
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
                ],
                async onbeforerender(data){
                    for(let i of data){
                        i.translate_status = {
                            1:'启动中',
                            2:'已调整',
                            3:'暂停',
                            4:'推全',
                            5:'结束'
                        }[i.status];
                        i.exp_set = JSON.parse(i.exp_set);
                        i.translate_exp_set = i.exp_set.map(ele=>{
                            return `${ele.exp_name}:${ele._weight * 100}'%`
                        });
                        i.translate_hit = i.hit * 100 +'%'

                        // 获取场景名称，并设置缓存
                        let layer_id = i.layer_id;
                        if(!layer_info[layer_id]){
                            let res = await request(layer_data_api.select.api+'?alias_id='+layer_id)
                            layer_info[layer_id] = res.data.list[0].name;
                        }
                        i.layer_name = layer_info[layer_id];

                        i.modified_date = dayjs(i.modified_date).format('YYYY-MM-DD HH:mm:ss')
                    }
                    return data;
                }
            }
        }
    }
}
</script>