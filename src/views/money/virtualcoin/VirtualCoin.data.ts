import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';

export const columns: BasicColumn[] = [
  {
    title: '图标',
    width:100,
    dataIndex: 'imgUrl2',
    customRender: render.renderImage,
  },
  {
    title: '币种名',
    dataIndex: 'virtualCoinName'
   },
   {
    title: '协议(多个以,隔开)',
     width:200,
    dataIndex: 'protocols'
   },

  {
    title: '币种类型',
    dataIndex: 'type',
    sorter: true,
    customRender: ({ text }) => {
      return render.renderDict(text, 'coin_type');
    },
  },


   {
    title: '币种公链地址',
    dataIndex: 'virtualWalletPublicAddress'
   },
   {
    title: '每次可提上限',
    dataIndex: 'withdrawMin'
   },
   {
    title: '每次可提下限',
    dataIndex: 'withdrawMax'
   },
   {
    title: '提现手续费(单笔固定)',
    dataIndex: 'withdrawCommissionCharge'
   },
   {
    title: '每日允许提币次数',
    dataIndex: 'allowCount'
   },
   {
    title: '每日允许提币额度',
    dataIndex: 'allowAmount'
   },

  {
    title: '币种设置',
    dataIndex: 'capitalIsShow',
    sorter: true,
    customRender: ({ text }) => {
      return render.renderDict(text, 'capital_is_show');
    },
  },
  {
    title: '是否支持充提币',
    dataIndex: 'isInOut',
    sorter: true,
    customRender: ({ text }) => {
      return render.renderDict(text, 'is_in_out');
    },
  },
];

export const searchFormSchema: FormSchema[] = [
 {
    label: '币种名',
    field: 'virtualCoinName',
    component: 'Input'
  },
 {
    label: '协议(多个以,隔开)',
    field: 'protocols',
    component: 'Input'
  },
];

export const formSchema: FormSchema[] = [
  // TODO 主键隐藏字段，目前写死为ID
  {label: '', field: 'id', component: 'Input', show: false},
  {
    label: '币种名',
    field: 'virtualCoinName',
    component: 'Input',
  },
  {
    label: '协议(多个以,隔开)',
    field: 'protocols',
    component: 'Input',
  },

  {
    label: '币种类型',
    field: 'type',
    component: 'JDictSelectTag',
    componentProps: {
      dictCode: 'coin_type',
      placeholder: '请选择币种类型',
      stringToNumber: true,
    },
  },
  {
    label: '币种图片路径',
    field: 'imgUrl',
    component: 'Input',
  },
  {
    label: '图标',
    field: 'imgUrl2',
    component: 'Input',
  },
  {
    label: '币种公链地址',
    field: 'virtualWalletPublicAddress',
    component: 'Input',
  },
  {
    label: '每次可提上限',
    field: 'withdrawMin',
    component: 'InputNumber',
  },
  {
    label: '每次可提下限',
    field: 'withdrawMax',
    component: 'InputNumber',
  },
  {
    label: '提现手续费(单笔固定)',
    field: 'withdrawCommissionCharge',
    component: 'InputNumber',
  },
  {
    label: '每日允许提币次数',
    field: 'allowCount',
    component: 'InputNumber',
  },
  {
    label: '每日允许提币额度',
    field: 'allowAmount',
    component: 'InputNumber',
  },

  {
    label: '币种设置',
    field: 'capitalIsShow',
    component: 'JDictSelectTag',
    componentProps: {
      dictCode: 'capital_is_show',
      placeholder: '请选择币种设置',
      stringToNumber: true,
    },
  },

  {
    label: '是否支持充提币',
    field: 'isInOut',
    component: 'JDictSelectTag',
    componentProps: {
      dictCode: 'is_in_out',
      placeholder: '请选择是否支持充提币',
      stringToNumber: true,
    },
  },
];
