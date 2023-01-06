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
    title: '合约委托编号',
    align:"center",
    dataIndex: 'contractEntrustId'
   },
   {
    title: '开仓价格',
    align:"center",
    dataIndex: 'openDepotPrice'
   },
   {
    title: '平仓价格',
    align:"center",
    dataIndex: 'closeDepotPrice'
   },
   {
    title: '平仓方式',
    dataIndex: 'closeDepotType',
    sorter: true,
    customRender: ({ text }) => {
      return render.renderDict(text, 'close_depot_type');
    },
  },
   {
    title: '持仓状态',
    dataIndex: 'depotStatus',
    sorter: true,
    customRender: ({ text }) => {
      return render.renderDict(text, 'depot_status');
    },
  },
   {
    title: '方向',
    dataIndex: 'direction',
    sorter: true,
    customRender: ({ text }) => {
      return render.renderDict(text, 'direction');
    },
  },
   {
    title: '完成盈亏',
    align:"center",
    dataIndex: 'profitLoss'
   },
   {
    title: '平仓费',
    align:"center",
    dataIndex: 'closeDepot'
   },
   {
    title: '平仓费率',
    align:"center",
    dataIndex: 'closeDepotTate'
   },
   {
    title: '止损',
    align:"center",
    dataIndex: 'stopLossPrice'
   },
   {
    title: '止盈',
    align:"center",
    dataIndex: 'takeProfitPrice'
   },
   {
    title: '开仓时行情价',
    align:"center",
    dataIndex: 'marketPrice'
   },
   {
    title: '持仓数量',
    align:"center",
    dataIndex: 'holdAmount'
   },
   {
    title: '合约编号',
    align:"center",
    dataIndex: 'contractId'
   },
   {
    title: '张数',
    align:"center",
    dataIndex: 'unit'
   },
   {
    title: '保证金',
    align:"center",
    dataIndex: 'earnestMoney'
   },
    {
    title: '平仓类型',
    dataIndex: 'depotType',
    sorter: true,
    customRender: ({ text }) => {
      return render.renderDict(text, 'depot_type');
    },
  },
   {
    title: '杠杆倍数',
    align:"center",
    dataIndex: 'multiple'
   },
  {
    title: '购买类型',
    dataIndex: 'tradeType',
    sorter: true,
    customRender: ({ text }) => {
      return render.renderDict(text, 'buy_type');
    },
  },
   {
    title: '已实现盈亏',
    align:"center",
    dataIndex: 'finishedProfitLoss'
   },
   {
    title: '未实现盈亏',
    align:"center",
    dataIndex: 'unfinishedProfitLoss'
   },
   {
    title: '止损数量',
    align:"center",
    dataIndex: 'stopLossAmount'
   },
   {
    title: '止盈数量',
    align:"center",
    dataIndex: 'takeProfitAmount'
   },
   {
    title: '已完成数量',
    align:"center",
    dataIndex: 'finishedHoldAmount'
   },
   {
    title: '未完成数量',
    align:"center",
    dataIndex: 'unfinishedHoldAmount'
   },
   {
    title: '计价类型',
    dataIndex: 'denominatedType',
    sorter: true,
    customRender: ({ text }) => {
      return render.renderDict(text, 'denominated_type');
    },
  },
   {
    title: '计价类型币种委托数量',
    align:"center",
    dataIndex: 'denominatedEntrustAmount'
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
    label: '合约委托编号',
    field: 'contractEntrustId',
    component: 'InputNumber',
  },
  {
    label: '开仓价格',
    field: 'openDepotPrice',
    component: 'InputNumber',
  },
  {
    label: '平仓价格',
    field: 'closeDepotPrice',
    component: 'InputNumber',
  },
  {
    label: '平仓方式',
    field: 'closeDepotType',
    component: 'JDictSelectTag',
    componentProps: {
      dictCode: 'close_depot_type',
      placeholder: '请选择平仓方式',
      stringToNumber: true,
    },
  },
 {
    label: '持仓状态',
    field: 'depotStatus',
    component: 'JDictSelectTag',
    componentProps: {
      dictCode: 'depot_status',
      placeholder: '请选择持仓状态',
      stringToNumber: true,
    },
  },
   {
    label: '方向',
    field: 'direction',
    component: 'JDictSelectTag',
    componentProps: {
      dictCode: 'direction',
      placeholder: '请选择方向',
      stringToNumber: true,
    },
  },
  {
    label: '完成盈亏',
    field: 'profitLoss',
    component: 'InputNumber',
  },
  {
    label: '平仓费',
    field: 'closeDepot',
    component: 'InputNumber',
  },
  {
    label: '平仓费率',
    field: 'closeDepotTate',
    component: 'InputNumber',
  },
  {
    label: '止损',
    field: 'stopLossPrice',
    component: 'InputNumber',
  },
  {
    label: '止盈',
    field: 'takeProfitPrice',
    component: 'InputNumber',
  },
  {
    label: '开仓时行情价',
    field: 'marketPrice',
    component: 'InputNumber',
  },
  {
    label: '持仓数量',
    field: 'holdAmount',
    component: 'InputNumber',
  },
  {
    label: '合约编号',
    field: 'contractId',
    component: 'InputNumber',
  },
  {
    label: '张数',
    field: 'unit',
    component: 'InputNumber',
  },
  {
    label: '保证金',
    field: 'earnestMoney',
    component: 'InputNumber',
  },
  {
    label: '平仓类型',
    field: 'depotType',
    component: 'JDictSelectTag',
    componentProps: {
      dictCode: 'depot_type',
      placeholder: '请选择平仓类型',
      stringToNumber: true,
    },
  },
  {
    label: '杠杆倍数',
    field: 'multiple',
    component: 'InputNumber',
  },
 {
    label: '购买类型',
    field: 'tradeType',
    component: 'JDictSelectTag',
    componentProps: {
      dictCode: 'buy_type',
      placeholder: '请选择购买类型',
      stringToNumber: true,
    },
  },
  {
    label: '已实现盈亏',
    field: 'finishedProfitLoss',
    component: 'InputNumber',
  },
  {
    label: '未实现盈亏',
    field: 'unfinishedProfitLoss',
    component: 'InputNumber',
  },
  {
    label: '止损数量',
    field: 'stopLossAmount',
    component: 'InputNumber',
  },
  {
    label: '止盈数量',
    field: 'takeProfitAmount',
    component: 'InputNumber',
  },
  {
    label: '已完成数量',
    field: 'finishedHoldAmount',
    component: 'InputNumber',
  },
  {
    label: '未完成数量',
    field: 'unfinishedHoldAmount',
    component: 'InputNumber',
  },
   {
    label: '计价类型',
    field: 'denominatedType',
    component: 'JDictSelectTag',
    componentProps: {
      dictCode: 'denominated_type',
      placeholder: '请选择计价类型',
      stringToNumber: true,
    },
  },
  {
    label: '计价类型币种委托数量',
    field: 'denominatedEntrustAmount',
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
export const contractDepotIdCardFormSchema: FormSchema[] = [
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
	{
	  label: '',
	  field: 'id',
	  component: 'Input',
	  show: false
	},
];
//子表表格配置
export const contractDepotUserVirtualWalletColumns: JVxeColumn[] = [
    {
      title: '用户编号',
      key: 'userId',
      type: JVxeTypes.inputNumber,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '钱包编号',
      key: 'virtualCoinId',
      type: JVxeTypes.inputNumber,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '币种名',
      key: 'virtualCoinName',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '交易后冻结',
      key: 'afterFreeze',
      type: JVxeTypes.inputNumber,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '交易前冻结',
      key: 'beforeFreeze',
      type: JVxeTypes.inputNumber,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '交易前余额',
      key: 'beforeBalance',
      type: JVxeTypes.inputNumber,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '交易后余额',
      key: 'afterBalance',
      type: JVxeTypes.inputNumber,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '钱包地址',
      key: 'virtualCoinAddress',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
  ]
export const contractDepotUserContractVirtualWalletColumns: JVxeColumn[] = [
    {
      title: '用户编号',
      key: 'userId',
      type: JVxeTypes.inputNumber,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '币种名',
      key: 'virtualCoinName',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '币种编号',
      key: 'virtualCoinId',
      type: JVxeTypes.inputNumber,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '交易前冻结',
      key: 'beforeFreeze',
      type: JVxeTypes.inputNumber,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '交易后冻结',
      key: 'afterFreeze',
      type: JVxeTypes.inputNumber,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '交易前余额',
      key: 'beforeBalance',
      type: JVxeTypes.inputNumber,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '交易后余额',
      key: 'afterBalance',
      type: JVxeTypes.inputNumber,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
  ]


/**
* 流程表单调用这个方法获取formSchema
* @param param
*/
export function getBpmFormSchema(_formData): FormSchema[]{
// 默认和原始表单保持一致 如果流程中配置了权限数据，这里需要单独处理formSchema
  return formSchema;
}