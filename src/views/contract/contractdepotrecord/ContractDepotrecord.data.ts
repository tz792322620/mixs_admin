import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
import {JVxeTypes,JVxeColumn} from '/@/components/jeecg/JVxeTable/types'
//列表数据
export const columns: BasicColumn[] = [
   {
    title: '用户编号',
    align:"center",
    dataIndex: 'userId'
   },
   {
    title: '合约仓编号',
    align:"center",
    dataIndex: 'contractDepotId'
   },
   {
    title: '过夜费率',
    align:"center",
    dataIndex: 'overnightFeeTate'
   },
   {
    title: '过夜费',
    align:"center",
    dataIndex: 'overnightFee'
   },
   {
    title: '过夜费总计',
    align:"center",
    dataIndex: 'overnightFeeTotal'
   },
];
//查询数据
export const searchFormSchema: FormSchema[] = [
];
//表单数据
export const formSchema: FormSchema[] = [
  {
    label: '用户编号',
    field: 'userId',
    component: 'InputNumber',
  },
  {
    label: '合约仓编号',
    field: 'contractDepotId',
    component: 'InputNumber',
  },
  {
    label: '过夜费率',
    field: 'overnightFeeTate',
    component: 'InputNumber',
  },
  {
    label: '过夜费',
    field: 'overnightFee',
    component: 'InputNumber',
  },
  {
    label: '过夜费总计',
    field: 'overnightFeeTotal',
    component: 'InputNumber',
  },
	// TODO 主键隐藏字段，目前写死为ID
	{
	  label: '',
	  field: 'id',
	  component: 'Input',
	  show: false
	},
];
//子表单数据
export const contractDepotrecordIdCardFormSchema: FormSchema[] = [
  {
    label: '所属用户',
    field: 'userId',
    component: 'Input',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入所属用户!'},
          ];
     },
  },
  // {
  //   label: '国家表id',
  //   field: 'countryId',
  //   component: 'InputNumber',
  // },
  {
    label: '真实名字',
    field: 'name',
    component: 'Input',
  },
  {
    label: '真实姓氏',
    field: 'surname',
    component: 'Input',
  },
  // {
  //   label: '出生地址',
  //   field: 'birthAddress',
  //   component: 'Input',
  // },
  // {
  //   label: '出生日期',
  //   field: 'birthDate',
  //   component: 'DatePicker',
  // },
  // {
  //   label: '联系地址',
  //   field: 'contactAddress',
  //   component: 'Input',
  // },
  // {
  //   label: '证件类型(0:身份证 1:护照 2:驾照)',
  //   field: 'credentialsType',
  //   component: 'InputNumber',
  // },
  // {
  //   label: '认证状态：0审核中，1通过，2拒绝',
  //   field: 'status',
  //   component: 'InputNumber',
  // },
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
  // {
  //   label: '正面',
  //   field: 'front',
  //   component: 'Input',
  // },
  // {
  //   label: '背面',
  //   field: 'backend',
  //   component: 'Input',
  // },
  // {
  //   label: '手持',
  //   field: 'hand',
  //   component: 'Input',
  // },
  // {
  //   label: '视频',
  //   field: 'video',
  //   component: 'Input',
  // },
  // {
  //   label: '拒绝理由',
  //   field: 'reason',
  //   component: 'Input',
  // },
  // {
  //   label: '认证等级( 0：未认证, 1：基本信息认证 2：审核中, 3：已认证, 4：不通过)',
  //   field: 'authorizeLevel',
  //   component: 'InputNumber',
  // },
  {
    label: '邮箱',
    field: 'mail',
    component: 'Input',
  },
  {
    label: '手机号',
    field: 'phone',
    component: 'Input',
  },
	{
	  label: '',
	  field: 'id',
	  component: 'Input',
	  show: false
	},
];
//子表表格配置


/**
* 流程表单调用这个方法获取formSchema
* @param param
*/
export function getBpmFormSchema(_formData): FormSchema[]{
// 默认和原始表单保持一致 如果流程中配置了权限数据，这里需要单独处理formSchema
  return formSchema;
}
