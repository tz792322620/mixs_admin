<template>
  <BasicModal v-bind="$attrs" @register="registerModal" destroyOnClose title="信息" :width="800" @ok="handleSubmit">
      <BasicForm @register="registerForm" ref="formRef"/>
  <!-- 子表单区域 -->
    <a-tabs v-model:activeKey="activeKey" @change="handleChangeTabs">
      <a-tab-pane tab="代理商钱包余额" key="agentVirtualWallet" :forceRender="true">
        <JVxeTable
          keep-source
          resizable
          ref="agentVirtualWallet"
          :loading="agentVirtualWalletTable.loading"
          :columns="agentVirtualWalletTable.columns"
          :dataSource="agentVirtualWalletTable.dataSource"
          :height="340"
          :rowNumber="false"
          :rowSelection="false"
          :disabled="formDisabled"
          />
      </a-tab-pane>
      <a-tab-pane tab="提币记录" key="agentWithdrawal" :forceRender="true">
        <JVxeTable
          keep-source
          resizable
          ref="agentWithdrawal"
          :loading="agentWithdrawalTable.loading"
          :columns="agentWithdrawalTable.columns"
          :dataSource="agentWithdrawalTable.dataSource"
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
    import {formSchema,agentVirtualWalletColumns,agentWithdrawalColumns} from '../Agent.data';
    import {saveOrUpdate,agentVirtualWalletList,agentWithdrawalList} from '../Agent.api';
    import { VALIDATE_FAILED } from '/@/utils/common/vxeUtils'
    // Emits声明
    const emit = defineEmits(['register','success']);
    const isUpdate = ref(true);
    const formDisabled = ref(false);
    const refKeys = ref(['agentVirtualWallet', 'agentWithdrawal', ]);
    const activeKey = ref('agentVirtualWallet');
    const agentVirtualWallet = ref();
    const agentWithdrawal = ref();
    const tableRefs = {agentVirtualWallet, agentWithdrawal, };
    const agentVirtualWalletTable = reactive({
          loading: false,
          dataSource: [],
          columns:agentVirtualWalletColumns
    })
    const agentWithdrawalTable = reactive({
          loading: false,
          dataSource: [],
          columns:agentWithdrawalColumns
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
             requestSubTableData(agentVirtualWalletList, {id:data?.record?.id}, agentVirtualWalletTable)
             requestSubTableData(agentWithdrawalList, {id:data?.record?.id}, agentWithdrawalTable)
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
      activeKey.value = 'agentVirtualWallet';
      agentVirtualWalletTable.dataSource = [];
      agentWithdrawalTable.dataSource = [];
    }
    function classifyIntoFormData(allValues) {
         let main = Object.assign({}, allValues.formValue)
         return {
           ...main, // 展开
           agentVirtualWalletList: allValues.tablesValue[0].tableData,
           agentWithdrawalList: allValues.tablesValue[1].tableData,
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
