import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
import {text} from "stream/consumers";
//列表数据
export const columns: BasicColumn[] = [
   {
    title: '标题编号',
    align:"center",
    dataIndex: 'parentId'
   },
   {
    title: '标题',
    align:"center",
    dataIndex: 'title'
   },
   {
    title: '内容',
    align:"center",
    dataIndex: 'content',
     // format:
   },
   {
    title: '等级',
    align:"center",
    dataIndex: 'level'
   },
  {
    title: '类型',
    dataIndex: 'type',
    sorter: true,
    customRender: ({ text }) => {
      return render.renderDict(text, 'bulletin_type');
    },
  },
];
//查询数据
export const searchFormSchema: FormSchema[] = [
];
//表单数据
export const formSchema: FormSchema[] = [
  {
    label: '标题编号',
    field: 'parentId',
    component: 'InputNumber',
  },
  {
    label: '标题',
    field: 'title',
    component: 'Input',
  },
  {
    label: '内容',
    field: 'content',
    component: 'InputTextArea',
  },
  {
    label: '等级',
    field: 'level',
    component: 'InputNumber',
  },
  {
    label: '类型',
    field: 'type',
    component: 'JDictSelectTag',
    componentProps: {
      dictCode: 'bulletin_type',
      placeholder: '类型',
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
