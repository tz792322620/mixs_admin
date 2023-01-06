import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';

export const columns: BasicColumn[] = [
    {
    title: '接收地址（手机号/邮箱）',
    dataIndex: 'receivingAddress'
   },
   {
    title: '验证码',
    dataIndex: 'code'
   },
   {
    title: '发送内容',
    dataIndex: 'content'
   },

  {
    title: '类型',
    dataIndex: 'type',
    sorter: true,
    customRender: ({ text }) => {
      return render.renderDict(text, 'captcha_type');
    },
  },
];

export const searchFormSchema: FormSchema[] = [
 {
    label: '接收地址（手机号/邮箱）',
    field: 'receivingAddress',
    component: 'Input'
  },
 {
    label: '验证码',
    field: 'code',
    component: 'Input'
  },
];

export const formSchema: FormSchema[] = [
  // TODO 主键隐藏字段，目前写死为ID
  {label: '', field: 'id', component: 'Input', show: false},
  {
    label: '接收地址（手机号/邮箱）',
    field: 'receivingAddress',
    component: 'Input',
  },
  {
    label: '验证码',
    field: 'code',
    component: 'Input',
  },
  {
    label: '发送内容',
    field: 'content',
    component: 'Input',
  },
  {
    label: '类型',
    field: 'type',
    component: 'JDictSelectTag',
    componentProps: {
      dictCode: 'captcha_type',
      placeholder: '请选择类型',
      stringToNumber: true,
    },
  },
];
