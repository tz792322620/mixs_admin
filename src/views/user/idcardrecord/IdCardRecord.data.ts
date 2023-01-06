import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
//列表数据
export const columns: BasicColumn[] = [
   {
    title: '用户编号',
    align:"center",
    dataIndex: 'userId'
   },
   // {
   //  title: '国家表id',
   //  align:"center",
   //  dataIndex: 'countryId'
   // },
   {
    title: '名字',
    align:"center",
    dataIndex: 'name'
   },
   {
    title: '姓氏',
    align:"center",
    dataIndex: 'surname'
   },
   // {
   //  title: '出生地址',
   //  align:"center",
   //  dataIndex: 'birthAddress'
   // },
   // {
   //  title: '出生日期',
   //  align:"center",
   //  dataIndex: 'birthDate',
   //  customRender:({text}) =>{
   //    return !text?"":(text.length>10?text.substr(0,10):text)
   //  },
   // },
   {
    title: '联系地址',
    align:"center",
    dataIndex: 'contactAddress'
   },
   // {
   //  title: '证件类型(0:身份证 1:护照 2:驾照)',
   //  align:"center",
   //  dataIndex: 'credentialsType'
   // },
   // {
   //  title: '认证状态：0审核中，1通过，2拒绝',
   //  align:"center",
   //  dataIndex: 'status'
   // },
   {
    title: '身份证号码',
    align:"center",
    dataIndex: 'cardNum'
   },
   // {
   //  title: '正面',
   //  align:"center",
   //  dataIndex: 'front'
   // },
   // {
   //  title: '背面',
   //  align:"center",
   //  dataIndex: 'backend'
   // },
   // {
   //  title: '手持',
   //  align:"center",
   //  dataIndex: 'hand'
   // },
   // {
   //  title: '视频',
   //  align:"center",
   //  dataIndex: 'video'
   // },
   // {
   //  title: '拒绝理由',
   //  align:"center",
   //  dataIndex: 'reason'
   // },
   // {
   //  title: '认证等级( 0：未认证, 1：基本信息认证 2：审核中, 3：已认证, 4：不通过)',
   //  align:"center",
   //  dataIndex: 'authorizeLevel'
   // },
];
//查询数据
export const searchFormSchema: FormSchema[] = [
];
//表单数据
export const formSchema: FormSchema[] = [
  {
    label: '用户编号',
    field: 'userId',
    component: 'Input',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入用户编号!'},
          ];
     },
  },
  {
    label: '国家表编号',
    field: 'countryId',
    component: 'InputNumber',
  },
  {
    label: '名字',
    field: 'name',
    component: 'Input',
  },
  {
    label: '姓氏',
    field: 'surname',
    component: 'Input',
  },
  {
    label: '出生地址',
    field: 'birthAddress',
    component: 'Input',
  },
  {
    label: '出生日期',
    field: 'birthDate',
    component: 'DatePicker',
  },
  {
    label: '联系地址',
    field: 'contactAddress',
    component: 'Input',
  },
  {
    label: '证件类型',
    field: 'credentialsType',
    component: 'JDictSelectTag',
    componentProps: {
      dictCode: 'credentials_type',
      placeholder: '请选择证件类型',
      stringToNumber: true,
    },
  },
  {
    label: '认证状态',
    field: 'status',
    component: 'JDictSelectTag',
    componentProps: {
      dictCode: 'authorize_status',
      placeholder: '请选择认证状态',
      stringToNumber: true,
    },
  },
  {
    label: '身份证号码',
    field: 'cardNum',
    component: 'Input',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入身份证号码!'},
          ];
     },
  },
  {
    label: '正面',
    field: 'front',
    component: 'Input',
  },
  {
    label: '背面',
    field: 'backend',
    component: 'Input',
  },
  {
    label: '手持',
    field: 'hand',
    component: 'Input',
  },
  {
    label: '视频',
    field: 'video',
    component: 'Input',
  },
  {
    label: '拒绝理由',
    field: 'reason',
    component: 'Input',
  },
  {
    label: '认证等级',
    field: 'authorizeLevel',
    component: 'JDictSelectTag',
    componentProps: {
      dictCode: 'authorize_level',
      placeholder: '请选择认证等级',
      stringToNumber: true,
    },
  },
	// TODO 主键隐藏字段，目前写死为ID
	{
	  label: '',
	  field: 'id',
	  component: 'Input',
	  show: false
	},
];



/**
* 流程表单调用这个方法获取formSchema
* @param param
*/
export function getBpmFormSchema(_formData): FormSchema[]{
  // 默认和原始表单保持一致 如果流程中配置了权限数据，这里需要单独处理formSchema
  return formSchema;
}
