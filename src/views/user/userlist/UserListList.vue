<template>
  <div>
    <!--引用表格-->
    <BasicTable @register="registerTable" :rowSelection="rowSelection">
     <!--插槽:table标题-->
      <template #tableTitle>
<!--          <a-button type="primary" @click="handleAdd" preIcon="ant-design:plus-outlined"> 添加会员</a-button>-->
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
        <TableAction :actions="getTableAction(record)" :dropDownActions="getDropDownAction(record)"/>
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
    <UserListModal @register="registerModal" @success="handleSuccess"></UserListModal>

    <a-modal v-model:visible="visible" title="设为代理" @ok="handleOk">
        <a-select v-model:value="value1" placeholder="请选择代理商等级">
          <a-select-option value="1">1</a-select-option>
          <a-select-option value="2">2</a-select-option>
          <a-select-option value="3">3</a-select-option>
        </a-select>
      <br/>
      <a-select v-model:value="value2" placeholder="请选择返佣类型（手续费/打包/手续费+打包）">
        <a-select-option value="0">手续费</a-select-option>
        <a-select-option value="1">打包</a-select-option>
        <a-select-option value="2">手续费+打包</a-select-option>
      </a-select>

      <a-input v-model:value="value3" placeholder="请输入分佣比(%)" />
      <a-input v-model:value="value4" placeholder="请输入结算周期" />
      <br/>
      <a-select v-model:value="value5" placeholder="请选择结算周期类型（D/T）">
        <a-select-option value="0">D</a-select-option>
        <a-select-option value="1">T</a-select-option>
      </a-select>
    </a-modal>

    <a-modal v-model:visible="visibles" title="地图" >
      <div class="map-page-container">
        <el-amap
          :center="center"
          :zoom="zoom"
          @init="init"
        />
      </div>
<!--      <div class="toolbar">-->
<!--        <button @click="add()">-->
<!--          添加标号-->
<!--        </button>-->
<!--      </div>-->
    </a-modal>

    <!--弹窗-->
    <Dialog :data="infoData" :visible="infoDialog" @handleOk="closeInfoDialog" />

  </div>
</template>

<script lang="ts" name="userlist-userList" setup>
import {ref, computed, unref, onMounted} from 'vue';
  import {BasicTable, useTable, TableAction} from '/@/components/Table';
  import { useListPage } from '/@/hooks/system/useListPage'
  import {useModal} from '/@/components/Modal';
  import UserListModal from './components/UserListModal.vue'
  import {columns, searchFormSchema} from './UserList.data';
  import {list, deleteOne, batchDelete, getImportUrl, getExportUrl, getInfoOne} from './UserList.api';
  import {downloadFile} from '/@/utils/common/renderUtils';
  import {defHttp} from "/@/utils/http/axios";
  import Dialog from "/@/views/user/userlist/components/Dialog.vue";

  const value1 = ref<string>('请选择代理商等级');
  const value2 = ref('请输入返佣类型（手续费/打包/手续费+打包）');
  const value3 = ref('');
  const value4 = ref('');
  const value5 = ref('请选择结算周期类型（D/T）');
  const visible = ref(false);
  const visibles = ref(false);
  const xx: any = ref('');
  const dtxx: any = ref('');
  const zoom = ref(12);
  const center = ref([121.59996, 31.197646]);
  let map = null

  const checkedKeys = ref<Array<string | number>>([]);
  //注册model
  const [registerModal, {openModal}] = useModal();

   //注册table数据
  const { prefixCls,tableContext,onExportXls,onImportXls } = useListPage({
      tableProps:{
           title: '会员列表',
           api: list,
           columns,
           canResize:false,
           formConfig: {
                // labelWidth: 120,
                schemas: searchFormSchema,
                autoSubmitOnEnter:true,
                showAdvancedButton:true,
                fieldMapToNumber: [
                ],
                fieldMapToTime: [
                ],
            },
           actionColumn: {
               width: 120,
               fixed:'right'
           },
        },
        exportConfig: {
            name:"会员列表",
            url: getExportUrl,
        },
        importConfig: {
            url: getImportUrl,
            success: handleSuccess
        },
    })

  const [registerTable, {reload},{ rowSelection, selectedRowKeys }] = tableContext

  const showModal = () => {
    visible.value = true;
  };


  // onMounted(()=>{
  //   getInfo()
  // })
  //
  // const getInfo = async () => {
  //   const res = await getInfoOne()
  //   console.log(res)
  // }


const init = (e) => {

    map = e;
    console.log('MAP',map)
  };
  const handleOk = e => {
    let adta ={
      'id':xx.value.id,
      'type':xx.value.type,
      'phoneNo':xx.value.phoneNo,
      'userName':xx.value.userName,
      'mail':xx.value.mail,
      'level':value1.value,
      'fyType':value2.value,
      'fyb':value3.value,
      'zhouqi':value4.value,
      'zhouqiType':value5.value,
    }
    defHttp.post({url: '/userlist/userList/editAgent', params:adta}).then(res=> {
      reload();
    });
    visible.value = false;
  };

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
  function handleDetail(record: Recordable) {
     // console.log(record)
     openInfoDialog(record)
     // openModal(true, {
     //   record,
     //   isUpdate: true,
     //   showFooter: false,
     // });
   }


    let infoDialog = ref<boolean>(false)
    let infoData = ref<Recordable>({})
    /**
   * 打开弹窗
   */
    function openInfoDialog(record: Recordable){
      // console.log('999', record)

      // getInfoOne({id: record.id}).then(res => {
      //   console.log(res)
      // })
      infoDialog.value = true
      infoData.value = record.id
    }
    /**
     * 关闭弹窗
    */
    function closeInfoDialog(){
      infoDialog.value = false
    }


  /**
   * 设为代理
   */
  function handleAgent(record: Recordable) {
    xx.value = record
    visible.value = true;
  }

  /**
   * 取消代理
   */
  function cancelAgent(record: Recordable) {
    defHttp.post({url: '/userlist/userList/cancelAgent', params:record}).then(res=>{
        reload()
    });
  }

  /**
   * 查看地理位置
   */
   function showPosition(record: Recordable) {
    visibles.value = true
    console.log(record);
     defHttp.post({url: '/userlist/userList/showPosition', params:record}).then(res=>{
      console.log(res)
       dtxx.value = res
       res.map(item => {
         let dt = [item.longitude,item.latitude]
         console.log('dt',dt)
         const marker = new AMap.Marker({
           position: dt
         });
         map.add(marker);
         center.value = dt
       })
    });

  }
   const add = () => {

    dtxx.value.map(item => {
      let dt = [item.longitude,item.latitude]
      console.log('dt',dt)
      const marker = new AMap.Marker({
        position: dt
      });
      map.add(marker);
    })

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
       ]
   }



  /**
   * 下拉操作栏
   */
  function getDropDownAction(record){
    return [
      // {
      //   label: '详情',
      //   onClick: handleDetail.bind(null, record),
      // },
      {
        label: '修改',
        onClick: handleEdit.bind(null, record),
      },
      {
        label: '设为代理',
        onClick: handleAgent.bind(null, record),
      },
      {
        label: '取消代理',
        onClick: cancelAgent.bind(null, record),
      },
      {
        label: '查看地理位置',
        onClick: showPosition.bind(null, record),
      },

      // {
      //   label: '删除',
      //   popConfirm: {
      //     title: '是否确认删除',
      //     confirm: handleDelete.bind(null, record),
      //   }
      // },

    ]
  }

</script>

<style scoped>
.map-page-container{
  height: 50rem;
  width: 100%;
}
.ant-select {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.85);
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5715;
  list-style: none;
  font-feature-settings: tnum;
  position: relative;
  display: inline-block;
  cursor: pointer;
  width: 100%;
}

</style>
