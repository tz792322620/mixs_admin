import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
//列表数据
export const columns: BasicColumn[] = [
  {
    title: '平台类型',
    dataIndex: 'platformType',
    sorter: true,
    customRender: ({ text }) => {
      return render.renderDict(text, 'platform_type');
    },
  },
  {
    title: '结算周期类型',
    dataIndex: 'tradeType',
    sorter: true,
    customRender: ({ text }) => {
      return render.renderDict(text, 'income_trade_type');
    },
  },
   {
    title: '币种编号',
    align:"center",
    dataIndex: 'virtualCoinId'
   },
   {
    title: '费率',
    align:"center",
    dataIndex: 'rate'
   },
   {
    title: '结算周期',
    align:"center",
    dataIndex: 'settlementCycle'
   },
  {
    title: '是否开启该项收益',
    dataIndex: 'isOpen',
    sorter: true,
    customRender: ({ text }) => {
      return render.renderDict(text, 'trade_is');
    },
  },
   {
    title: '代理商编号',
    align:"center",
    dataIndex: 'agentId'
   },
  {
    title: '手续费',
    dataIndex: 'type',
    sorter: true,
    customRender: ({ text }) => {
      return render.renderDict(text, 'sx_type');
    },
  },
];
//查询数据
export const searchFormSchema: FormSchema[] = [
];
//表单数据
export const formSchema: FormSchema[] = [
  {
    label: '平台类型',
    field: 'platformType',
    component: 'JDictSelectTag',
    componentProps: {
      dictCode: 'platform_type',
      placeholder: '请选择平台类型',
      stringToNumber: true,
    },
  },
  {
    label: '结算周期类型',
    field: 'tradeType',
    component: 'JDictSelectTag',
    componentProps: {
      dictCode: 'income_trade_type',
      placeholder: '请选择结算周期类型',
      stringToNumber: true,
    },
  },
  {
    label: '币种编号',
    field: 'virtualCoinId',
    component: 'InputNumber',
  },
  {
    label: '费率',
    field: 'rate',
    component: 'Input',
  },
  {
    label: '结算周期',
    field: 'settlementCycle',
    component: 'InputNumber',
  },
  {
    label: '是否开启该项收益',
    field: 'isOpen',
    component: 'JDictSelectTag',
    componentProps: {
      dictCode: 'trade_is',
      placeholder: '请选择是否开启该项收益',
      stringToNumber: true,
    },
  },
  {
    label: '代理商编号',
    field: 'agentId',
    component: 'InputNumber',
  },
  {
    label: '手续费',
    field: 'type',
    component: 'JDictSelectTag',
    componentProps: {
      dictCode: 'sx_type',
      placeholder: '请选择手续费',
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
