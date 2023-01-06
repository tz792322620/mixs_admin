import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
// import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
// import {JVxeTypes,JVxeColumn} from '/@/components/jeecg/JVxeTable/types'
//列表数据
export const columns: BasicColumn[] = [
   {
    title: '付款用户编号',
    align:"center",
    dataIndex: 'payeeUserId'
   },
   {
    title: '收款用户编号',
    align:"center",
    dataIndex: 'paymentUserId'
   },
   {
    title: '钱包编号',
    align:"center",
    dataIndex: 'virtualCoinId'
   },
   {
    title: '发送地址',
    align:"center",
    dataIndex: 'sendAddress'
   },
   {
    title: '接收地址',
    align:"center",
    dataIndex: 'receiveAddress'
   },
   {
    title: '手续费',
    align:"center",
    dataIndex: 'commissionCharge'
   },
   {
    title: '转账金额',
    align:"center",
    dataIndex: 'amount'
   },
   {
    title: '实际到账',
    align:"center",
    dataIndex: 'actualAmount'
   },
  {
    title: '类型',
    dataIndex: 'type',
    sorter: true,
    customRender: ({ text }) => {
      return render.renderDict(text, 'transfer_type');
    },
  },
  {
    title: '状态',
    dataIndex: 'status',
    sorter: true,
    customRender: ({ text }) => {
      return render.renderDict(text, 'transfer_status');
    },
  },
  {
    title: '交易类型',
    dataIndex: 'tradeType',
    sorter: true,
    customRender: ({ text }) => {
      return render.renderDict(text, 'trade_type');
    },
  },
];
//查询数据
export const searchFormSchema: FormSchema[] = [
];
//表单数据
export const formSchema: FormSchema[] = [
  {
    label: '付款用户编号',
    field: 'payeeUserId',
    component: 'InputNumber',
  },
  {
    label: '收款用户编号',
    field: 'paymentUserId',
    component: 'InputNumber',
  },
  {
    label: '钱包编号',
    field: 'virtualCoinId',
    component: 'InputNumber',
  },
  {
    label: '发送地址',
    field: 'sendAddress',
    component: 'Input',
  },
  {
    label: '接收地址',
    field: 'receiveAddress',
    component: 'Input',
  },
  {
    label: '手续费',
    field: 'commissionCharge',
    component: 'InputNumber',
  },
  {
    label: '转账金额',
    field: 'amount',
    component: 'InputNumber',
  },
  {
    label: '实际到账',
    field: 'actualAmount',
    component: 'InputNumber',
  },
  {
    label: '类型',
    field: 'type',
    component: 'JDictSelectTag',
    componentProps: {
      dictCode: 'transfer_type',
      placeholder: '请选择类型',
      stringToNumber: true,
    },
  },
  {
    label: '状态',
    field: 'status',
    component: 'JDictSelectTag',
    componentProps: {
      dictCode: 'transfer_status',
      placeholder: '请选择状态',
      stringToNumber: true,
    },
  },
  {
    label: '交易类型',
    field: 'tradeType',
    component: 'JDictSelectTag',
    componentProps: {
      dictCode: 'trade_type',
      placeholder: '请选择交易类型',
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
//子表单数据
export const idCardFormSchema: FormSchema[] = [

  {
    label: '收款用户名字',
    field: 'name',
    component: 'Input',
  },
  {
    label: '收款用户姓氏',
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
