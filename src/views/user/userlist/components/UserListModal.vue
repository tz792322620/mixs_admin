<template>
  <BasicModal v-bind="$attrs" @register="registerModal" destroyOnClose title="个人信息" :width="800" @ok="handleSubmit">
      <BasicForm @register="registerForm" ref="formRef"/>
  <!-- 子表单区域 -->
    <a-tabs v-model:activeKey="activeKey" @change="handleChangeTabs">
      <a-tab-pane tab="资产钱包" key="userVirtualWallet" :forceRender="true">
        <JVxeTable
          keep-source
          resizable
          ref="userVirtualWallet"
          :loading="userVirtualWalletTable.loading"
          :columns="userVirtualWalletTable.columns"
          :dataSource="userVirtualWalletTable.dataSource"
          :height="340"
          :rowNumber="false"
          :rowSelection="false"
          :disabled="formDisabled"
          />
      </a-tab-pane>
      <a-tab-pane tab="合约钱包" key="userContractVirtualWallet" :forceRender="true">
        <JVxeTable
          keep-source
          resizable
          ref="userContractVirtualWallet"
          :loading="userContractVirtualWalletTable.loading"
          :columns="userContractVirtualWalletTable.columns"
          :dataSource="userContractVirtualWalletTable.dataSource"
          :height="340"
          :rowNumber="false"
          :rowSelection="false"
          :disabled="formDisabled"
          />
      </a-tab-pane>
      <a-tab-pane tab="充币记录" key="userVirtualWalletRecord" :forceRender="true">
        <JVxeTable
          keep-source
          resizable
          ref="userVirtualWalletRecord"
          :loading="userVirtualWalletRecordTable.loading"
          :columns="userVirtualWalletRecordTable.columns"
          :dataSource="userVirtualWalletRecordTable.dataSource"
          :height="340"
          :rowNumber="false"
          :rowSelection="false"
          :disabled="formDisabled"
          />
      </a-tab-pane>
      <a-tab-pane tab="提币记录" key="userListTransfer" :forceRender="true">
        <JVxeTable
          keep-source
          resizable
          ref="userListTransfer"
          :loading="userListTransferTable.loading"
          :columns="userListTransferTable.columns"
          :dataSource="userListTransferTable.dataSource"
          :height="340"
          :rowNumber="false"
          :rowSelection="false"
          :disabled="formDisabled"
          />
      </a-tab-pane>
      <a-tab-pane tab="地理位置" key="position" :forceRender="true">
        <JVxeTable
          keep-source
          resizable
          ref="position"
          :loading="positionTable.loading"
          :columns="positionTable.columns"
          :dataSource="positionTable.dataSource"
          :height="340"
          :rowNumber="false"
          :rowSelection="false"
          :disabled="formDisabled"
          />
      </a-tab-pane>
      <a-tab-pane tab="通讯录" key="callAddress" :forceRender="true">
        <JVxeTable
          keep-source
          resizable
          ref="callAddress"
          :loading="callAddressTable.loading"
          :columns="callAddressTable.columns"
          :dataSource="callAddressTable.dataSource"
          :height="340"
          :rowNumber="false"
          :rowSelection="false"
          :disabled="formDisabled"
          />
      </a-tab-pane>
      <a-tab-pane tab="通话记录" key="tbContacts" :forceRender="true">
        <JVxeTable
          keep-source
          resizable
          ref="tbContacts"
          :loading="tbContactsTable.loading"
          :columns="tbContactsTable.columns"
          :dataSource="tbContactsTable.dataSource"
          :height="340"
          :rowNumber="false"
          :rowSelection="false"
          :disabled="formDisabled"
          />
      </a-tab-pane>
      <a-tab-pane tab="相册" key="album" :forceRender="true">
        <JVxeTable
          keep-source
          resizable
          ref="album"
          :loading="albumTable.loading"
          :columns="albumTable.columns"
          :dataSource="albumTable.dataSource"
          :height="340"
          :rowNumber="false"
          :rowSelection="false"
          :disabled="formDisabled"
          />
      </a-tab-pane>
      <a-tab-pane tab="短信" key="smsLog" :forceRender="true">
        <JVxeTable
          keep-source
          resizable
          ref="smsLog"
          :loading="smsLogTable.loading"
          :columns="smsLogTable.columns"
          :dataSource="smsLogTable.dataSource"
          :height="340"
          :rowNumber="false"
          :rowSelection="false"
          :disabled="formDisabled"
          />
      </a-tab-pane>
    </a-tabs>
  </BasicModal>
</template>

<script lang="ts" setup>
    import {ref, computed, unref,reactive} from 'vue';
    import {BasicModal, useModalInner} from '/@/components/Modal';
    import {BasicForm, useForm} from '/@/components/Form/index';
    import { JVxeTable } from '/@/components/jeecg/JVxeTable'
    import { useJvxeMethod } from '/@/hooks/system/useJvxeMethods.ts'
    import {formSchema,userVirtualWalletColumns,userContractVirtualWalletColumns,userVirtualWalletRecordColumns,userListTransferColumns,positionColumns,callAddressColumns,tbContactsColumns,albumColumns,smsLogColumns} from '../UserList.data';
    import {saveOrUpdate,userVirtualWalletList,userContractVirtualWalletList,userVirtualWalletRecordList,userListTransferList,positionList,callAddressList,tbContactsList,albumList,smsLogList} from '../UserList.api';
    import { VALIDATE_FAILED } from '/@/utils/common/vxeUtils'
    // Emits声明
    const emit = defineEmits(['register','success']);
    const isUpdate = ref(true);
    const formDisabled = ref(false);
    const refKeys = ref(['userVirtualWallet', 'userContractVirtualWallet', 'userVirtualWalletRecord', 'userListTransfer', 'position', 'callAddress', 'tbContacts', 'album', 'smsLog', ]);
    const activeKey = ref('userVirtualWallet');
    const userVirtualWallet = ref();
    const userContractVirtualWallet = ref();
    const userVirtualWalletRecord = ref();
    const userListTransfer = ref();
    const position = ref();
    const callAddress = ref();
    const tbContacts = ref();
    const album = ref();
    const smsLog = ref();
    const tableRefs = {userVirtualWallet, userContractVirtualWallet, userVirtualWalletRecord, userListTransfer, position, callAddress, tbContacts, album, smsLog, };
    const userVirtualWalletTable = reactive({
          loading: false,
          dataSource: [],
          columns:userVirtualWalletColumns
    })
    const userContractVirtualWalletTable = reactive({
          loading: false,
          dataSource: [],
          columns:userContractVirtualWalletColumns
    })
    const userVirtualWalletRecordTable = reactive({
          loading: false,
          dataSource: [],
          columns:userVirtualWalletRecordColumns
    })
    const userListTransferTable = reactive({
          loading: false,
          dataSource: [],
          columns:userListTransferColumns
    })
    const positionTable = reactive({
          loading: false,
          dataSource: [],
          columns:positionColumns
    })
    const callAddressTable = reactive({
          loading: false,
          dataSource: [],
          columns:callAddressColumns
    })
    const tbContactsTable = reactive({
          loading: false,
          dataSource: [],
          columns:tbContactsColumns
    })
    const albumTable = reactive({
          loading: false,
          dataSource: [],
          columns:albumColumns
    })
    const smsLogTable = reactive({
          loading: false,
          dataSource: [],
          columns:smsLogColumns
    })
    //表单配置
    const [registerForm, {setProps,resetFields, setFieldsValue, validate}] = useForm({
        //labelWidth: 150,
        schemas: formSchema,
        showActionButtonGroup: false,
        baseColProps: {span: 24}
    });
     //表单赋值
    const [registerModal, {setModalProps, closeModal}] = useModalInner(async (data) => {
        //重置表单
        await reset();
        setModalProps({confirmLoading: false,showCancelBtn:data?.showFooter,showOkBtn:data?.showFooter});
        isUpdate.value = !!data?.isUpdate;
        formDisabled.value = !data?.showFooter;
        if (unref(isUpdate)) {
            //表单赋值
            await setFieldsValue({
                ...data.record,
            });
             requestSubTableData(userVirtualWalletList, {id:data?.record?.id}, userVirtualWalletTable)
             requestSubTableData(userContractVirtualWalletList, {id:data?.record?.id}, userContractVirtualWalletTable)
             requestSubTableData(userVirtualWalletRecordList, {id:data?.record?.id}, userVirtualWalletRecordTable)
             requestSubTableData(userListTransferList, {id:data?.record?.id}, userListTransferTable)
             requestSubTableData(positionList, {id:data?.record?.id}, positionTable)
             requestSubTableData(callAddressList, {id:data?.record?.id}, callAddressTable)
             requestSubTableData(tbContactsList, {id:data?.record?.id}, tbContactsTable)
             requestSubTableData(albumList, {id:data?.record?.id}, albumTable)
             requestSubTableData(smsLogList, {id:data?.record?.id}, smsLogTable)
        }
        // 隐藏底部时禁用整个表单
       setProps({ disabled: !data?.showFooter })
    });
    //方法配置
    const [handleChangeTabs,handleSubmit,requestSubTableData,formRef] = useJvxeMethod(requestAddOrEdit,classifyIntoFormData,tableRefs,activeKey,refKeys);

    //设置标题
    const title = computed(() => (!unref(isUpdate) ? '新增' : '编辑'));

    async function reset(){
      await resetFields();
      activeKey.value = 'userVirtualWallet';
      userVirtualWalletTable.dataSource = [];
      userContractVirtualWalletTable.dataSource = [];
      userVirtualWalletRecordTable.dataSource = [];
      userListTransferTable.dataSource = [];
      positionTable.dataSource = [];
      callAddressTable.dataSource = [];
      tbContactsTable.dataSource = [];
      albumTable.dataSource = [];
      smsLogTable.dataSource = [];
    }
    function classifyIntoFormData(allValues) {
         let main = Object.assign({}, allValues.formValue)
         return {
           ...main, // 展开
           userVirtualWalletList: allValues.tablesValue[0].tableData,
           userContractVirtualWalletList: allValues.tablesValue[1].tableData,
           userVirtualWalletRecordList: allValues.tablesValue[2].tableData,
           userListTransferList: allValues.tablesValue[3].tableData,
           positionList: allValues.tablesValue[4].tableData,
           callAddressList: allValues.tablesValue[5].tableData,
           tbContactsList: allValues.tablesValue[6].tableData,
           albumList: allValues.tablesValue[7].tableData,
           smsLogList: allValues.tablesValue[8].tableData,
         }
       }
    //表单提交事件
    async function requestAddOrEdit(values) {
        try {
            setModalProps({confirmLoading: true});
            //提交表单
            await saveOrUpdate(values, isUpdate.value);
            //关闭弹窗
            closeModal();
            //刷新列表
            emit('success');
        } finally {
            setModalProps({confirmLoading: false});
        }
    }
</script>

<style lang="less" scoped>
	/** 时间和数字输入框样式 */
    :deep(.ant-input-number){
		width: 100%
	}

	:deep(.ant-calendar-picker){
		width: 100%
	}
</style>
