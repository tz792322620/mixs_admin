<template>
  <div>
    <!--引用表格-->
   <BasicTable @register="registerTable" :rowSelection="rowSelection">
     <!--插槽:table标题-->
      <template #tableTitle>
<!--          <a-button type="primary" @click="handleAdd" preIcon="ant-design:plus-outlined"> 新增</a-button>-->
<!--          <a-button  type="primary" preIcon="ant-design:export-outlined" @click="onExportXls"> 导出</a-button>-->
<!--          <j-upload-button  type="primary" preIcon="ant-design:import-outlined" @click="onImportXls">导入</j-upload-button>-->
          <a-dropdown v-if="selectedRowKeys.length > 0">
              <template #overlay>
                <a-menu>
                  <a-menu-item key="1" @click="batchHandleDelete">
                    <Icon icon="ant-design:delete-outlined"></Icon>
                    删除
                  </a-menu-item>
                </a-menu>
              </template>
              <a-button>批量操作
                <Icon icon="mdi:chevron-down"></Icon>
              </a-button>
        </a-dropdown>
      </template>
       <!--操作栏-->
      <template #action="{ record }">
<!--        <TableAction :actions="getTableAction(record)" :dropDownActions="getDropDownAction(record)"/>-->
        <TableAction :actions="getTableAction(record)" />
      </template>
      <!--字段回显插槽-->
      <template #htmlSlot="{text}">
         <div v-html="text"></div>
      </template>
      <!--省市区字段回显插槽-->
      <template #pcaSlot="{text}">
        {{ getAreaTextByCode(text) }}
      </template>
      <template #fileSlot="{text}">
         <span v-if="!text" style="font-size: 12px;font-style: italic;">无文件</span>
         <a-button v-else :ghost="true" type="primary" preIcon="ant-design:download-outlined" size="small" @click="downloadFile(text)">下载</a-button>
      </template>
    </BasicTable>
    <!-- 表单区域 -->
    <AgentModal @register="registerModal" @success="handleSuccess"></AgentModal>

    <!-- 详情弹窗-->
    <AgentDialog :agentId="infoAgentId" :visible="infoDialogVisible" @handleOk="closeInfoDialog" />

  </div>
</template>

<script lang="ts" name="agent-agent" setup>
  import {ref, computed, unref} from 'vue';
  import {BasicTable, useTable, TableAction} from '/@/components/Table';
  import { useListPage } from '/@/hooks/system/useListPage'
  import {useModal} from '/@/components/Modal';
  import AgentModal from './components/AgentModal.vue'
  import {columns, searchFormSchema} from './Agent.data';
  import {list, deleteOne, batchDelete, getImportUrl,getExportUrl} from './Agent.api';
  import {downloadFile} from '/@/utils/common/renderUtils';
  import AgentDialog from "/@/views/agentmanage/agent/components/AgentDialog.vue";
  const checkedKeys = ref<Array<string | number>>([]);
  //注册model
  const [registerModal, {openModal}] = useModal();
   //注册table数据
  const { prefixCls,tableContext,onExportXls,onImportXls } = useListPage({
      tableProps:{
           title: '代理商列表',
           api: list,
           columns,
           canResize:false,
           formConfig: {
                //labelWidth: 120,
                schemas: searchFormSchema,
                autoSubmitOnEnter:true,
                showAdvancedButton:true,
                fieldMapToNumber: [
                ],
                fieldMapToTime: [
                ],
            },
           actionColumn: {
               width: 180,
               fixed:'right'
           },
        },
        exportConfig: {
            name:"代理商列表",
            url: getExportUrl,
        },
        importConfig: {
            url: getImportUrl,
            success: handleSuccess
        },
    })

  const [registerTable, {reload},{ rowSelection, selectedRowKeys }] = tableContext


   /**
    * 新增事件
    */
  function handleAdd() {
     openModal(true, {
       isUpdate: false,
       showFooter: true,
     });
  }
   /**
    * 编辑事件
    */
  function handleEdit(record: Recordable) {
     openModal(true, {
       record,
       isUpdate: true,
       showFooter: true,
     });
   }


   /**
    * 详情
   */
   let infoDialogVisible = ref<boolean>(false);
   let infoAgentId = ref<string>();
   function handleDetail(record: Recordable) {
    infoAgentId.value = record.id
    infoDialogVisible.value = true
    //  openModal(true, {
    //    record,
    //    isUpdate: true,
    //    showFooter: false,
    //  });
   }

  function closeInfoDialog(){
     infoDialogVisible.value = false
  }
   /**
    * 删除事件
    */
  async function handleDelete(record) {
     await deleteOne({id: record.id}, handleSuccess);
   }
   /**
    * 批量删除事件
    */
  async function batchHandleDelete() {
     await batchDelete({ids: selectedRowKeys.value},handleSuccess);
   }
   /**
    * 成功回调
    */
  function handleSuccess() {
      (selectedRowKeys.value = []) && reload();
   }
   /**
      * 操作栏
      */
  function getTableAction(record){
       return [
         {
           label: '详情',
           onClick: handleDetail.bind(null, record),
         },
         {
           label: '编辑',
           onClick: handleEdit.bind(null, record),
         },
         {
           label: '删除',
           color: 'error',
           popConfirm: {
             title: '是否确认删除',
             confirm: handleDelete.bind(null, record),
           }
         }
       ]
   }


  /**
   * 下拉操作栏
   */
  function getDropDownAction(record){
    return [
      {
        label: '详情',
        onClick: handleDetail.bind(null, record),
      }, {
        label: '删除',
        popConfirm: {
          title: '是否确认删除',
          confirm: handleDelete.bind(null, record),
        }
      }
    ]
  }

</script>

<style scoped>

</style>
