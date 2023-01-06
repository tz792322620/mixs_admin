import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
// import { rules} from '/@/utils/helper/validator';
// import { render } from '/@/utils/common/renderUtils';
import {JVxeTypes,JVxeColumn} from '/@/components/jeecg/JVxeTable/types'
//列表数据
export const columns: BasicColumn[] = [
   {
    title: '代理商账号',
    align:"center",
    dataIndex: 'name'
   },
   // {
   //  title: '代理商地址',
   //  align:"center",
   //  dataIndex: 'address'
   // },
   {
    title: '所属用户',
    align:"center",
    dataIndex: 'userId'
   },

   {
    title: '等级',
    align:"center",
    dataIndex: 'level'
   },
   {
    title: '手机',
    align:"center",
    dataIndex: 'phone'
   },
   {
    title: '邮箱',
    align:"center",
    dataIndex: 'email'
   },
];
//查询数据
export const searchFormSchema: FormSchema[] = [
];
//表单数据
export const formSchema: FormSchema[] = [
  {
    label: '代理商账号',
    field: 'name',
    component: 'Input',
  },
  {
    label: '密码',
    field: 'password',
    component: 'Input',
  },
  {
    label: '代理商地址',
    field: 'address',
    component: 'Input',
  },
  {
    label: '用户id',
    field: 'userId',
    component: 'Input',
  },
  {
    label: '上级代理',
    field: 'parentId',
    component: 'Input',
  },
  {
    label: '下级代理',
    field: 'parentIds',
    component: 'Input',
  },
  {
    label: '等级',
    field: 'level',
    component: 'InputNumber',
  },
  {
    label: '手机',
    field: 'phone',
    component: 'Input',
  },
  {
    label: '邮箱',
    field: 'email',
    component: 'Input',
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
//子表表格配置
export const agentVirtualWalletColumns: JVxeColumn[] = [
    {
      title: '代理商用户编号',
      key: 'agentId',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '币种编号',
      key: 'virtualCoinId',
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
  ]
export const agentWithdrawalColumns: JVxeColumn[] = [
    {
      title: '代理商编号',
      key: 'agentId',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '提现金额',
      key: 'amount',
      type: JVxeTypes.inputNumber,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '上级编号',
      key: 'parentId',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '提现地址',
      key: 'virtualAddress',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '状态',
      key: 'status',
      type: JVxeTypes.inputNumber,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
      dictCode:'withdrawal_status'
    },
  ]


// 详情的代理商表头
export const infoAgentColum = [
  {
    title: 'ID',
    key:"id",
    dataIndex: 'id'
  },
  {
    title: '手机',
    key:"phone",
    dataIndex: 'phone'
  },
  {
    title: '代理商账号',
    key:"name",
    dataIndex: 'name'
  },
  {
    title: '代理等级',
    key:"level",
    dataIndex: 'level'
  },
  {
    title: '代理商地址',
    key:"address",
    dataIndex: 'address'
  },
  {
    title: '创建时间',
    key:"agCreateTime",
    dataIndex: 'agCreateTime'
  },
  {
   title: '所属用户',
    key:"userId",
   dataIndex: 'userId'
  },
  {
    title: '上级代理',
    key:"parentId",
    dataIndex: 'parentId'
  },
  {
    title: '下级代理',
    key:"parentIds",
    dataIndex: 'parentIds'
  },
  {
    title: '真实姓名',
    key:"surname",
    dataIndex: 'surname'
  },
  {
    title: '证件类型',
    key:"credentialsType",
    dataIndex: 'credentialsType'
  },
  {
    title: '身份证号',
    key:"cardNum",
    dataIndex: 'cardNum'
  },
  {
    title: '正面照片',
    key:"front",
    dataIndex: 'front'
  },
  {
    title: '背面照片',
    key:"backend",
    dataIndex: 'backend'
  },
  {
    title: '币种',
    key:"agentUserUserVirtualWallet.virtualCoinId",
    dataIndex: 'agentUserUserVirtualWallet.virtualCoinId'
  },
  {
    title: '交易前冻结',
    key:"agentUserUserVirtualWallet.afterFreeze",
    dataIndex: 'agentUserUserVirtualWallet.afterFreeze'
  },
  {
    title: '交易后余额',
    key:"agentUserUserVirtualWallet.afterBalance",
    dataIndex: 'agentUserUserVirtualWallet.afterBalance'
  },
  {
    title: '提币次数',
    key:"agentUserUserVirtualWallet.numb",
    dataIndex: 'agentUserUserVirtualWallet.numb'
  },
  {
    title: '提现金额',
    key:"agentUserUserVirtualWallet.amount",
    dataIndex: 'agentUserUserVirtualWallet.amount'
  }
]


/**
* 流程表单调用这个方法获取formSchema
* @param param
*/
export function getBpmFormSchema(_formData): FormSchema[]{
// 默认和原始表单保持一致 如果流程中配置了权限数据，这里需要单独处理formSchema
  return formSchema;
}
