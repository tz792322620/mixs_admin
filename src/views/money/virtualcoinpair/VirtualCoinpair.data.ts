import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';

export const columns: BasicColumn[] = [
    {
    title: '子币',
      sorter: true,
    dataIndex: 'childCoinId'
   },
   {
    title: '母币',
    dataIndex: 'motherCoinId'
   },
   {
    title: '子币名称',
    dataIndex: 'childCoinName'
   },
   {
    title: '母币名称',
    dataIndex: 'motherCoinName'
   },
  {
    title: '子币类型',
    dataIndex: 'childCoinType',
    sorter: true,
    customRender: ({ text }) => {
      return render.renderDict(text, 'coin_type');
    },
  },
  {
    title: '母币类型',
    dataIndex: 'motherCoinType',
    sorter: true,
    customRender: ({ text }) => {
      return render.renderDict(text, 'coin_type');
    },
  },
   {
    title: '买入上限',
    dataIndex: 'buyerMax'
   },
   {
    title: '买入下限',
    dataIndex: 'buyerMin'
   },
   {
    title: '卖出上限',
    dataIndex: 'sellerMax'
   },
   {
    title: '卖出下限',
    dataIndex: 'sellerMin'
   },

  {
    title: '区',
    dataIndex: 'area',
    sorter: true,
    customRender: ({ text }) => {
      return render.renderDict(text, 'area');
    },
  },

  {
    title: '币对状态',
    dataIndex: 'status',
    sorter: true,
    customRender: ({ text }) => {
      return render.renderDict(text, 'pair_status');
    },
  },

  {
    title: '锁仓状态',
    dataIndex: 'lockedWarehouseStatus',
    sorter: true,
    customRender: ({ text }) => {
      return render.renderDict(text, 'locked_warehouse_status');
    },
  },
   {
    title: '锁仓开始时间',
    dataIndex: 'lockedWarehouseStartTime'
   },
   {
    title: '锁仓结束时间',
    dataIndex: 'lockedWarehouseEndTime'
   },
   {
    title: '币对名（BTC/USDT）',
    dataIndex: 'pairName'
   },
   {
    title: '排序',
    dataIndex: 'sort'
   },
];

export const searchFormSchema: FormSchema[] = [
 {
    label: '子币',
    field: 'childCoinId',
    component: 'Input'
  },
 {
    label: '母币',
    field: 'motherCoinId',
    component: 'Input'
  },
];

export const formSchema: FormSchema[] = [
  // TODO 主键隐藏字段，目前写死为ID
  {label: '', field: 'id', component: 'Input', show: false},
  {
    label: '子币',
    field: 'childCoinId',
    component: 'Input',
  },
  {
    label: '母币',
    field: 'motherCoinId',
    component: 'Input',
  },
  {
    label: '子币名称',
    field: 'childCoinName',
    component: 'Input',
  },
  {
    label: '母币名称',
    field: 'motherCoinName',
    component: 'Input',
  },
  {
    label: '子币类型',
    field: 'childCoinType',
    component: 'JDictSelectTag',
    componentProps: {
      dictCode: 'coin_type',
      placeholder: '请选择子币类型',
      stringToNumber: true,
    },
  },
  {
    label: '母币类型',
    field: 'motherCoinType',
    component: 'JDictSelectTag',
    componentProps: {
      dictCode: 'coin_type',
      placeholder: '请选择母币类型',
      stringToNumber: true,
    },
  },
  {
    label: '买入上限',
    field: 'buyerMax',
    component: 'InputNumber',
  },
  {
    label: '买入下限',
    field: 'buyerMin',
    component: 'InputNumber',
  },
  {
    label: '卖出上限',
    field: 'sellerMax',
    component: 'InputNumber',
  },
  {
    label: '卖出下限',
    field: 'sellerMin',
    component: 'InputNumber',
  },
  {
    label: '区',
    field: 'area',
    component: 'JDictSelectTag',
    componentProps: {
      dictCode: 'area',
      placeholder: '请选择区',
      stringToNumber: true,
    },
  },
  {
    label: '币对状态',
    field: 'status',
    component: 'JDictSelectTag',
    componentProps: {
      dictCode: 'pair_status',
      placeholder: '请选择币对状态',
      stringToNumber: true,
    },
  },
  {
    label: '锁仓状态',
    field: 'lockedWarehouseStatus',
    component: 'JDictSelectTag',
    componentProps: {
      dictCode: 'locked_warehouse_status',
      placeholder: '请选择锁仓状态',
      stringToNumber: true,
    },
  },
  {
    label: '锁仓开始时间',
    field: 'lockedWarehouseStartTime',
    component: 'DatePicker',
    componentProps: {
      showTime: true,
      valueFormat: 'YYYY-MM-DD hh:mm:ss',
    },
  },
  {
    label: '锁仓结束时间',
    field: 'lockedWarehouseEndTime',
    component: 'DatePicker',
    componentProps: {
      showTime: true,
      valueFormat: 'YYYY-MM-DD hh:mm:ss',
    },
  },
  {
    label: '币对名（BTC/USDT）',
    field: 'pairName',
    component: 'Input',
  },
  {
    label: '排序',
    field: 'sort',
    component: 'InputNumber',
  },
];
