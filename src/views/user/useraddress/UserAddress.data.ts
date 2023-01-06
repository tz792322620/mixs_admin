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
    title: '钱包地址',
    align:"center",
    dataIndex: 'virtualCoinAddress'
   },
   {
    title: '钱包编号',
    align:"center",
    dataIndex: 'virtualCoinId'
   },
   {
    title: '描述',
    align:"center",
    dataIndex: 'userDesc'
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
    label: '钱包地址',
    field: 'virtualCoinAddress',
    component: 'Input',
  },
  {
    label: '钱包编号',
    field: 'virtualCoinId',
    component: 'InputNumber',
  },
  {
    label: '描述',
    field: 'userDesc',
    component: 'Input',
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
export const userAddressIdCardFormSchema: FormSchema[] = [
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
  {
    label: '联系地址',
    field: 'contactAddress',
    component: 'Input',
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
    label: '手机号',
    field: 'phone',
    component: 'Input',
  },
  {
    label: '邮箱',
    field: 'mail',
    component: 'Input',
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
