import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
import {JVxeTypes,JVxeColumn} from '/@/components/jeecg/JVxeTable/types'
//列表数据
export const columns: BasicColumn[] = [
  {
    title: '币种名',
    align:"center",
    dataIndex: 'virtualCoinName'
  },
   {
    title: '用户编号',
    align:"center",
    dataIndex: 'userId'
   },
   {
    title: '用户钱包编号',
    align:"center",
    dataIndex: 'userVirtualWalletId'
   },
   {
    title: '记录名',
    align:"center",
    dataIndex: 'recordName'
   },
   {
    title: '交易数量',
    align:"center",
    dataIndex: 'amount'
   },
  {
    title: '进账类型',
    dataIndex: 'type',
    sorter: true,
    customRender: ({ text }) => {
      return render.renderDict(text, 'income_type');
    },
  },
   {
    title: '描述',
    align:"center",
    dataIndex: 'description'
   },
   {
    title: '交易后余额',
    align:"center",
    dataIndex: 'afterBalance'
   },
   {
    title: '交易前余额',
    align:"center",
    dataIndex: 'beforeBalance'
   },

   {
    title: '手续费',
    align:"center",
    dataIndex: 'commissionCharge'
   },
   {
    title: '充提hash',
    align:"center",
    dataIndex: 'hash'
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
    label: '用户钱包编号',
    field: 'userVirtualWalletId',
    component: 'InputNumber',
  },
  {
    label: '记录名',
    field: 'recordName',
    component: 'Input',
  },
  {
    label: '交易数量',
    field: 'amount',
    component: 'InputNumber',
  },
  {
    label: '进账类型',
    field: 'type',
    component: 'JDictSelectTag',
    componentProps: {
      dictCode: 'income_type',
      placeholder: '请选择进账类型',
      stringToNumber: true,
    },
  },
  {
    label: '描述',
    field: 'description',
    component: 'Input',
  },
  {
    label: '交易后余额',
    field: 'afterBalance',
    component: 'InputNumber',
  },
  {
    label: '交易前余额',
    field: 'beforeBalance',
    component: 'InputNumber',
  },
  {
    label: '币种名',
    field: 'virtualCoinName',
    component: 'Input',
  },
  {
    label: '手续费',
    field: 'commissionCharge',
    component: 'InputNumber',
  },
  {
    label: '充提hash',
    field: 'hash',
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
export const userMoneyrecordIdCardFormSchema: FormSchema[] = [
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
