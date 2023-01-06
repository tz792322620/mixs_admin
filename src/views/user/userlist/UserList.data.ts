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
    dataIndex: 'id'
  },
   {
    title: '用户名',
    align:"center",
    dataIndex: 'userName'
   },
   {
    title: '手机号',
    align:"center",
    dataIndex: 'phoneNo'
   },
  {
    title: '邮箱',
    align:"center",
    dataIndex: 'mail'
  },
  {
    title: '用户属性',
    dataIndex: 'type',
    sorter: true,
    customRender: ({ text }) => {
      return render.renderDict(text, 'type');
    },
  },
  // {
  //   title: '认证等级',
  //   dataIndex: 'authorizeLevel',
  //
  //   sorter: true,
  //   customRender: ({ text }) => {
  //     return render.renderDict(text, 'authorize_level');
  //   },
  // },
  // {
  //   title: '邀请码',
  //   align:"center",
  //   dataIndex: 'invitationCode'
  // },
  // {
  //   title: 'uuid',
  //   align:"center",
  //   dataIndex: 'uuid'
  // },

];
//查询数据
export const searchFormSchema: FormSchema[] = [
];
//表单数据
export const formSchema: FormSchema[] = [
  {
    label: '用户名',
    field: 'userName',
    component: 'Input',
  },
  {
    label: '认证等级',
    field: 'authorizeLevel',
    component: 'JDictSelectTag',
    componentProps: {
      dictCode: 'authorize_level',
      placeholder: '请选择认证等级',
      stringToNumber: true,
    },
  },

  {
    label: '账号状态',
    field: 'status',
    component: 'JDictSelectTag',
    componentProps: {
      dictCode: 'account_status',
      placeholder: '请选择账号状态',
      stringToNumber: true,
    },
  },
  {
    label: 'UUID',
    field: 'uuid',
    component: 'Input',
  },
  {
    label: '区号',
    field: 'areaCode',
    component: 'Input',
  },
  {
    label: '手机号',
    field: 'phoneNo',
    component: 'Input',
  },
  {
    label: '邮箱',
    field: 'mail',
    component: 'Input',
  },
  {
    label: '密码',
    field: 'loginPassword',
    component: 'Input',
  },
  {
    label: '交易密码',
    field: 'tradePassword',
    component: 'Input',
  },
  // {
  //   label: '头像链接',
  //   field: 'headPortraitUrl',
  //   component: 'JImageUpload',
  //   componentProps: {
  //     fileMax: 1,
  //   },
  // },
  {
    label: '用户属性',
    field: 'type',
    component: 'JDictSelectTag',
    componentProps: {
      dictCode: 'type',
      placeholder: '请选择推荐类型',
      stringToNumber: true,
    },
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
    label: '邀请码',
    field: 'invitationCode',
    component: 'Input',
  },
  {
    label: '谷歌验证是否开启',
    field: 'googleStatus',
    component: 'JDictSelectTag',
    componentProps: {
      dictCode: 'google_status',
      placeholder: '请选择谷歌验证是否开启',
      stringToNumber: true,
    },
  },
  {
    label: '谷歌认证（秘钥）',
    field: 'googleCode',
    component: 'Input',
  },

  {
    label: '是否允许登录',
    field: 'loginIs',
    component: 'JDictSelectTag',
    componentProps: {
      dictCode: 'login_is',
      placeholder: '请选择是否允许登录',
      stringToNumber: true,
    },
  },
  {
    label: '是否允许交易',
    field: 'tradeIs',
    component: 'JDictSelectTag',
    componentProps: {
      dictCode: 'trade_is',
      placeholder: '请选择是否允许交易',
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
//子表单数据
//子表表格配置
export const userVirtualWalletColumns: JVxeColumn[] = [
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
export const userContractVirtualWalletColumns: JVxeColumn[] = [

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
export const userVirtualWalletRecordColumns: JVxeColumn[] = [

    {
      title: '用户钱包编号',
      key: 'userVirtualWalletId',
      type: JVxeTypes.inputNumber,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '记录名',
      key: 'recordName',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '交易数量',
      key: 'amount',
      type: JVxeTypes.inputNumber,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '进账类型',
      key: 'type',
      type: JVxeTypes.inputNumber,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
      dictCode:'income_type'
    },
    {
      title: '描述',
      key: 'description',
      type: JVxeTypes.input,
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
      title: '交易前余额',
      key: 'beforeBalance',
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
      title: '手续费',
      key: 'commissionCharge',
      type: JVxeTypes.inputNumber,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '充提hash',
      key: 'hash',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
  ]
export const userListTransferColumns: JVxeColumn[] = [
    {
      title: '付款用户编号',
      key: 'payeeUserId',
      type: JVxeTypes.inputNumber,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '收款用户编号',
      key: 'paymentUserId',
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
      title: '发送地址',
      key: 'sendAddress',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '接收地址',
      key: 'receiveAddress',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '手续费',
      key: 'commissionCharge',
      type: JVxeTypes.inputNumber,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '转账金额',
      key: 'amount',
      type: JVxeTypes.inputNumber,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '实际到账',
      key: 'actualAmount',
      type: JVxeTypes.inputNumber,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '类型',
      key: 'type',
      type: JVxeTypes.inputNumber,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
      dictCode:'transfer_type'
    },
    {
      title: '状态',
      key: 'status',
      type: JVxeTypes.inputNumber,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
      dictCode:'transfer_status'
    },
    {
      title: '交易类型',
      key: 'tradeType',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
      dictCode:'trade_type'
    },
  ]
export const positionColumns: JVxeColumn[] = [

    {
      title: '经度',
      key: 'longitude',
      type: JVxeTypes.inputNumber,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '纬度',
      key: 'latitude',
      type: JVxeTypes.inputNumber,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
  ]
export const callAddressColumns: JVxeColumn[] = [
    {
      title: '手机号码',
      key: 'mobilephonelist',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '联系人',
      key: 'name',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
  ]
export const tbContactsColumns: JVxeColumn[] = [
    {
      title: '时间',
      key: 'date',
      type: JVxeTypes.inputNumber,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '时长',
      key: 'duration',
      type: JVxeTypes.inputNumber,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '手机号码',
      key: 'number',
      type: JVxeTypes.inputNumber,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '联系人',
      key: 'name',
      type: JVxeTypes.inputNumber,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '接听状态',
      key: 'type',
      type: JVxeTypes.inputNumber,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
  ]
export const albumColumns: JVxeColumn[] = [

    {
      title: '路径',
      key: 'url',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
  ]
export const smsLogColumns: JVxeColumn[] = [

    {
      title: '发送人',
      key: 'senderId',
      type: JVxeTypes.inputNumber,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '手机号码',
      key: 'phone',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '内容',
      key: 'content',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '创建时间',
      key: 'date',
      type: JVxeTypes.date,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
        validateRules: [
          { required: true, message: '${title}不能为空' },
        ],
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
