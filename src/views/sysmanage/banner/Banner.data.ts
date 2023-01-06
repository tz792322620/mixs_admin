import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';


export const columns: BasicColumn[] = [
    {
    title: '标题',
      width: 100,
    dataIndex: 'title'
   },

  {
    title: '图片',
    dataIndex: 'imageUrl',
    width: 80,
    customRender: render.renderImage,
  },
   {
    title: '描述',
     width: 300,
    dataIndex: 'bannerDesc'
   },
   {
    title: '跳转链接',
     width: 200,
    dataIndex: 'linkUrl'
   },
   {
    title: '排序',
     width: 80,
    dataIndex: 'sort'
   },
];

export const searchFormSchema: FormSchema[] = [
 {
    label: '标题',
    field: 'title',
    component: 'Input'
  },
 {
    label: '图片链接',
    field: 'imageUrl',
    component: 'Input'
  },
];

export const formSchema: FormSchema[] = [
  // TODO 主键隐藏字段，目前写死为ID
  {label: '', field: 'id', component: 'Input', show: false},
  {
    label: '标题',
    field: 'title',
    component: 'Input',
  },
  // {
  //   label: '图片链接',
  //   field: 'imageUrl',
  //   component: 'Input',
  // },
  {
    label: '图片',
    field: 'imageUrl',
    component: 'JImageUpload',
    componentProps: {
      fileMax: 1,
    },
  },
  {
    label: '描述',
    field: 'bannerDesc',
    component: 'Input',
  },
  {
    label: '跳转链接',
    field: 'linkUrl',
    component: 'Input',
  },
  {
    label: '排序',
    field: 'sort',
    component: 'InputNumber',
  },
];
