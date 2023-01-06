import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
//列表数据
export const columns: BasicColumn[] = [
   {
    title: '代理商编号',
    align:"center",
    dataIndex: 'agentId'
   },
   {
    title: '提现金额(USDT)',
    align:"center",
    dataIndex: 'amount'
   },
   {
    title: '上级代理商编号',
    align:"center",
    dataIndex: 'parentId'
   },
   {
    title: '提现地址',
    align:"center",
    dataIndex: 'virtualAddress'
   },
  {
    title: '状态',
    dataIndex: 'status',
    sorter: true,
    customRender: ({ text }) => {
      return render.renderDict(text, 'withdrawal_status');
    },
  },
];
//查询数据
export const searchFormSchema: FormSchema[] = [
];
//表单数据
export const formSchema: FormSchema[] = [
  {
    label: '代理商编号',
    field: 'agentId',
    component: 'InputNumber',
  },
  {
    label: '提现金额(USDT)',
    field: 'amount',
    component: 'InputNumber',
  },
  {
    label: '上级编号',
    field: 'parentId',
    component: 'InputNumber',
  },
  {
    label: '提现地址',
    field: 'virtualAddress',
    component: 'Input',
  },
  {
    label: '申请提现状态',
    field: 'status',
    component: 'JDictSelectTag',
    componentProps: {
      dictCode: 'withdrawal_status',
      placeholder: '请选择申请提现状态',
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
