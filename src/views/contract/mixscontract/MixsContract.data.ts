import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';

export const columns: BasicColumn[] = [
    {
    title: '币对编号',
    dataIndex: 'virtualCoinPairId',
      sorter:true
   },
   {
    title: '币对名：BTC/USDT',
    dataIndex: 'virtualCoinPairName'
   },
   {
    title: '单位/手',
    dataIndex: 'unit'
   },
   {
    title: '开仓上限',
    dataIndex: 'numMax'
   },
   {
    title: '开仓下限',
    dataIndex: 'numMin'
   },
  {
    title: '状态',
    dataIndex: 'isOpen',
    width: 80,
    sorter: true,
    customRender: ({ text }) => {
      return render.renderDict(text, 'contract_status');
    },
  },
   {
    title: '杠杆,例：[10,20,30,50]',
    dataIndex: 'multiples'
   },
   {
    title: '结算时间',
    dataIndex: 'settleTime'
   },
   {
    title: '用户最大持仓量',
    dataIndex: 'holdDepotNum'
   },
   {
    title: '开仓手续费(千分之)',
    dataIndex: 'openCommissionChargeRate'
   },
   {
    title: '平仓手续费(千分之)',
    dataIndex: 'closeCommissionChargeRate'
   },
   {
    title: '过夜费',
    dataIndex: 'overnightFeeRate'
   },
   {
    title: '点差率',
    dataIndex: 'pointDifferenceRate'
   },
   {
    title: '子币编号',
    dataIndex: 'childCoinId'
   },
   {
    title: '母币编号',
    dataIndex: 'motherCoinId'
   },
  {
    title: '类型',
    dataIndex: 'type',
    width: 80,
    sorter: true,
    customRender: ({ text }) => {
      return render.renderDict(text, 'contract_type');
    },
  },
   // {
   //  title: '排序',
   //   // sorter: true,
   //  dataIndex: 'sort'
   // },
];

export const searchFormSchema: FormSchema[] = [
 {
    label: '币对编号',
    field: 'virtualCoinPairId',
    component: 'Input'
  },
 {
    label: '币对名：BTC/USDT',
    field: 'virtualCoinPairName',
    component: 'Input'
  },
];

export const formSchema: FormSchema[] = [
  // TODO 主键隐藏字段，目前写死为ID
  {label: '', field: 'id', component: 'Input', show: false},
  {
    label: '币对编号',
    field: 'virtualCoinPairId',
    component: 'Input',
  },
  {
    label: '币对名：BTC/USDT',
    field: 'virtualCoinPairName',
    component: 'Input',
  },
  {
    label: '单位/手',
    field: 'unit',
    component: 'Input',
  },
  {
    label: '开仓上限',
    field: 'numMax',
    component: 'Input',
  },
  {
    label: '开仓下限',
    field: 'numMin',
    component: 'Input',
  },
  {
    label: '状态',
    field: 'isOpen',
    component: 'JDictSelectTag',
    componentProps: {
      dictCode: 'contract_status',
      placeholder: '请选择状态',
      stringToNumber: true,
    },
  },
  {
    label: '杠杆,例：[10,20,30,50]',
    field: 'multiples',
    component: 'Input',
  },
  // {
  //   label: '结算时间',
  //   field: 'settleTime',
  //   component: 'DatePicker',
  //   componentProps: {
  //     showTime: true,
  //     valueFormat: 'YYYY-MM-DD hh:mm:ss',
  //   },
  // },
  {
    label: '用户最大持仓量',
    field: 'holdDepotNum',
    component: 'InputNumber',
  },
  {
    label: '开仓手续费(千分之)',
    field: 'openCommissionChargeRate',
    component: 'InputNumber',
  },
  {
    label: '平仓手续费(千分之)',
    field: 'closeCommissionChargeRate',
    component: 'InputNumber',
  },
  {
    label: '过夜费',
    field: 'overnightFeeRate',
    component: 'InputNumber',
  },
  {
    label: '点差率',
    field: 'pointDifferenceRate',
    component: 'InputNumber',
  },
  {
    label: '子币编号',
    field: 'childCoinId',
    component: 'Input',
  },
  {
    label: '母币编号',
    field: 'motherCoinId',
    component: 'Input',
  },
  {
    label: '合约类型',
    field: 'type',
    component: 'JDictSelectTag',
    componentProps: {
      dictCode: 'contract_type',
      placeholder: '请选择合约类型',
      stringToNumber: true,
    },
  },
  {
    label: '排序',
    field: 'sort',
    component: 'InputNumber',
  },
];
