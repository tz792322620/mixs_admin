import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
import {JVxeTypes,JVxeColumn} from '/@/components/jeecg/JVxeTable/types'
//列表数据
export const columns: BasicColumn[] = [
   {
    title: '用户id',
    align:"center",
    dataIndex: 'userId'
   },
   {
    title: '合约id',
    align:"center",
    dataIndex: 'contractId'
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
    title: '购买类型',
    dataIndex: 'tradeType',
    sorter: true,
    customRender: ({ text }) => {
      return render.renderDict(text, 'buy_type');
    },
  },
   {
    title: '止盈价',
    align:"center",
    dataIndex: 'takeProfitPrice'
   },
   {
    title: '止损价',
    align:"center",
    dataIndex: 'stopLossPrice'
   },
   {
    title: '委托价',
    align:"center",
    dataIndex: 'entrustPrice'
   },
   {
    title: '委托数量',
    align:"center",
    dataIndex: 'entrustAmount'
   },
  {
    title: '是否止盈止损',
    dataIndex: 'limitIs',
    sorter: true,
    customRender: ({ text }) => {
      return render.renderDict(text, 'limit_is');
    },
  },
   {
    title: '杠杆倍数',
    align:"center",
    dataIndex: 'multiple'
   },
    {
    title: '状态',
    dataIndex: 'tradeStatus',
    sorter: true,
    customRender: ({ text }) => {
      return render.renderDict(text, 'trade_status');
    },
  },
   {
    title: '手续费',
    align:"center",
    dataIndex: 'commissionCharge'
   },
   {
    title: '交易总额',
    align:"center",
    dataIndex: 'totalTransaction'
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
    title: '张数',
    align:"center",
    dataIndex: 'unit'
   },
   {
    title: '市价',
    align:"center",
    dataIndex: 'marketPrice'
   },
 {
    title: '委托类型',
    dataIndex: 'entrustType',
    sorter: true,
    customRender: ({ text }) => {
      return render.renderDict(text, 'entrust_type');
    },
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
    label: '用户id',
    field: 'userId',
    component: 'InputNumber',
  },
  {
    label: '合约id',
    field: 'contractId',
    component: 'InputNumber',
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
    label: '止盈价',
    field: 'takeProfitPrice',
    component: 'InputNumber',
  },
  {
    label: '止损价',
    field: 'stopLossPrice',
    component: 'InputNumber',
  },
  {
    label: '委托价',
    field: 'entrustPrice',
    component: 'InputNumber',
  },
  {
    label: '委托数量',
    field: 'entrustAmount',
    component: 'InputNumber',
  },
 {
    label: '是否止盈止损',
    field: 'limitIs',
    component: 'JDictSelectTag',
    componentProps: {
      dictCode: 'limit_is',
      placeholder: '请选择是否止盈止损',
      stringToNumber: true,
    },
  },
  {
    label: '杠杆倍数',
    field: 'multiple',
    component: 'InputNumber',
  },
 {
    label: '状态',
    field: 'tradeStatus',
    component: 'JDictSelectTag',
    componentProps: {
      dictCode: 'trade_status',
      placeholder: '请选择状态',
      stringToNumber: true,
    },
  },
  {
    label: '手续费',
    field: 'commissionCharge',
    component: 'InputNumber',
  },
  {
    label: '交易总额',
    field: 'totalTransaction',
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
    label: '张数',
    field: 'unit',
    component: 'InputNumber',
  },
  {
    label: '市价',
    field: 'marketPrice',
    component: 'InputNumber',
  },
  {
    label: '委托类型',
    field: 'entrustType',
    component: 'JDictSelectTag',
    componentProps: {
      dictCode: 'entrust_type',
      placeholder: '请选择委托类型',
      stringToNumber: true,
    },
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
export const contractEntrustIdCardFormSchema: FormSchema[] = [
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
    label: '名字',
    field: 'name',
    component: 'Input',
  },
  {
    label: '姓氏',
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
