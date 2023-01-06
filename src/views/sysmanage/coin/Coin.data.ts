import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';

export const columns: BasicColumn[] = [
    {
    title: '名字',
    dataIndex: 'name'
   },
   {
    title: '简称',
    dataIndex: 'nickName'
   },
   {
    title: '符号',
    dataIndex: 'symbol'
   },
];

export const searchFormSchema: FormSchema[] = [
 {
    label: '名字',
    field: 'name',
    component: 'Input'
  },
 {
    label: '简称',
    field: 'nickName',
    component: 'Input'
  },
];

export const formSchema: FormSchema[] = [
  // TODO 主键隐藏字段，目前写死为ID
  {label: '', field: 'id', component: 'Input', show: false},
  {
    label: '名字',
    field: 'name',
    component: 'Input',
  },
  {
    label: '简称',
    field: 'nickName',
    component: 'Input',
  },
  {
    label: '符号',
    field: 'symbol',
    component: 'Input',
  },
];
