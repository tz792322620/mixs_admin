<template>
  <div>
    <a-modal v-model:visible="visible" width="1200px" title="详细信息" @ok="handleOk" @cancel="handleOk">
      <div v-if="loading" style="height: 70vh" class="d-flex justify-center align-center">
        <a-spin size="large" />
      </div>
      <div v-else style="max-height: 70vh; overflow-y: scroll">
        <a-row :gutter="[0, 0]">
          <a-col :xs="{ span: 24 }" :md="{ span: 12 }">
            <div class="m-4 p-3 aaa auto-height" style="background-color:#f3f1f1; overflow-y: scroll;">
              <template v-for="(item,index) in InfoList">
                <div v-if="infoData[item.value] !== null && infoData[item.value] !== ''">
                  <div class="d-flex">
                    <span class="width-120">{{item.text}}</span>
                    ：{{ infoData[item.value] }}
                  </div>
                  <hr v-if="InfoList.length != index+1" class="my-2" />
                </div>
              </template>
            </div>
          </a-col>
          <a-col :xs="{ span: 24 }" :md="{ span: 12 }">
            <div class="m-4 p-3 aaa auto-height" style=" background-color:#f3f1f1; overflow-y: scroll;">
              <template v-for="(item,index) in walletTableHeader">
                <!-- <div> -->
                <div v-if="infoData.agentUserUserVirtualWallet[item.value] !== null && infoData.agentUserUserVirtualWallet[item.value] !== ''">
                  <div class="d-flex">
                    <span class="width-120">{{item.text}}</span>
                    ：{{ infoData.agentUserUserVirtualWallet[item.value] }}
                  </div>
                  <hr v-if="InfoList.length != index+1" class="my-2" />
                </div>
              </template>
              <a-image :width="200" :src="infoData.front" />
              <a-image :width="200" :src="infoData.backend" />
            </div>
          </a-col>

          <a-col :xs="{ span: 24 }" :md="{ span: 24 }">
            <div class="mt-4 mx-4 p-2 auto-height" style="background-color:#f3f1f1;">
              <a-tabs v-model:activeKey="activeKey" type="card" class="bg-white aaa" style="border-radius: 10px; overflow-y: scroll;">
                <a-tab-pane key="1" tab="下级代理商">
                  <a-table :dataSource="infoData.parentAgentVos" :columns="infoAgentColum" :pagination="false" :scroll="{ x: 1500 }">
                    <template #bodyCell="{ column, record }">
                      <template v-if="column.dataIndex === 'agentUserUserVirtualWallet.virtualCoinId'">
                        <span>{{record.agentUserUserVirtualWallet.virtualCoinId}} </span>
                      </template>
                      <template v-else-if="column.dataIndex === 'agentUserUserVirtualWallet.numb'">
                        <span>{{record.agentUserUserVirtualWallet.numb}} </span>
                      </template>
                      <template v-else-if="column.dataIndex === 'agentUserUserVirtualWallet.afterFreeze'">
                        <span>{{record.agentUserUserVirtualWallet.afterFreeze}} </span>
                      </template>
                      <template v-else-if="column.dataIndex === 'agentUserUserVirtualWallet.afterBalance'">
                        <span>{{record.agentUserUserVirtualWallet.afterBalance}} </span>
                      </template>
                      <template v-else-if="column.dataIndex === 'agentUserUserVirtualWallet.amount'">
                        <span>{{record.agentUserUserVirtualWallet.amount}} </span>
                      </template>
                    </template>
                  </a-table>
                </a-tab-pane>
              </a-tabs>
            </div>
          </a-col>
        </a-row>

      </div>

    </a-modal>
  </div>
</template>
<script lang="ts" setup>
import {ref, watchEffect} from 'vue';
import {getAgentInfoOne} from "/@/views/agentmanage/agent/Agent.api";
import {infoAgentColum} from "/@/views/agentmanage/agent/Agent.data";
const visible = ref<boolean>(false);
const InfoList = [
  { text: 'ID', value: 'id' },
  { text: '代理等级', value: 'level' },
  { text: '手机号', value: 'phone' },
  { text: '邮箱', value: 'email' },
  { text: '地址', value: 'address' },
  { text: '创建时间', value: 'agCreateTime' },
  { text: '所属用户', value: 'userId' },
  { text: '代理商账号', value: 'name' },
  { text: '上级代理', value: 'parentId' },
  // { text: '下级代理', value: 'parentIds' },
  { text: '真实姓名', value: 'surname' },
  { text: '身份证号', value: 'cardNum' },
  // { text: '身份证照片', value: 'front' },
  // { text: '身份证照片', value: 'backend' },
]


let props = withDefaults(defineProps<{
  agentId: string,
  visible: boolean,
  info?: any
}>(), {
  visible: false
})

let activeKey = ref<string>('1')

// {
//   "id": "1593085951471120386",
//   "level": 2,
//   "phone": "17336512778",
//   "email": null,
//   "address": null,
//   "agCreateTime": "2022-11-17 11:37:43",
//   "userId": "1592140818907832320",
//   "parentId": "1593065184104550401",
//   "parentIds": "1593096167382106114,1593096480306544641,1593125995762208769",
//   "name": "小李",
//   "surname": "小李",
//   "credentialsType": "0",
//   "cardNum": "430703199910270015",
//   "front": "exchange-6371e3a5e7288d8c92efcbc1",
//   "backend": "exchange-6371e3a5e7288d8c92efcbc1",
//   "agentUserUserVirtualWallet": {
//     "virtualCoinId": null,
//     "afterFreeze": null,
//     "afterBalance": null,
//     "numb": 0,
//     "amount": null
//   },
//   "parentAgentVos": [
//   {
//     "id": "1593096167382106114",
//     "level": null,
//     "phone": "17371851693",
//     "email": "840333433@qq.com",
//     "address": null,
//     "agCreateTime": "2022-11-17 12:17:05",
//     "userId": "1589450536802222080",
//     "parentId": null,
//     "name": "李君仪",
//     "surname": "李君仪",
//     "credentialsType": "0",
//     "cardNum": "430703199910270010",
//     "front": "exchange-6371e3a5e7288d8c92efcbc1",
//     "backend": "exchange-6371e3a5e7288d8c92efcbc1",
//     "agentUserUserVirtualWallet": {
//       "virtualCoinId": null,
//       "afterFreeze": null,
//       "afterBalance": null,
//       "numb": 0,
//       "amount": null
//     }
//   },
//   {
//     "id": "1593096480306544641",
//     "level": null,
//     "phone": "17371851696",
//     "email": "840333433@qq.com",
//     "address": null,
//     "agCreateTime": "2022-11-17 12:19:25",
//     "userId": "1588389532404191232",
//     "parentId": null,
//     "name": "刘艳东",
//     "surname": "刘艳东",
//     "credentialsType": "0",
//     "cardNum": "430703199910270019",
//     "front": "exchange-6371e3a5e7288d8c92efcbc1",
//     "backend": "exchange-6371e3a5e7288d8c92efcbc1",
//     "agentUserUserVirtualWallet": {
//       "virtualCoinId": null,
//       "afterFreeze": null,
//       "afterBalance": null,
//       "numb": 0,
//       "amount": null
//     }
//   },
// ],
//   "userVos": null
// }

const walletTableHeader = [
  {
    text: '币种',
    value: 'virtualCoinId',
  },
  {
    text: '交易后余额',
    value: 'afterBalance',
  },
  {
    text: '交易前余额',
    value: 'afterFreeze'
  },
  {
    text: '提币次数',
    value: 'numb'
  },
  {
    text: '提现金额',
    value: 'amount'
  }
]

let loading = ref<boolean>(true)

// 获取用户详细信息
let infoData = ref({})
const getUserInfo = async () => {
  infoData.value = {}
  loading.value = true
  try {
    let res = await getAgentInfoOne({id: props.agentId})
    console.log(res)
    loading.value = false
    infoData.value = res
  } catch (err) {

  } finally {

  }
}


// 监听id
watchEffect(() => {
  if(props.agentId){
    getUserInfo()
  }
})

// 关闭弹窗
const emit = defineEmits(['handleOk'])

const handleOk = (e: MouseEvent) => {
  emit('handleOk')
};


</script>

<style scoped>

.d-flex {
  display: flex;
}
.width-120 {
  min-width: 70px;
}
.align-center {
  align-items: center;
}

.aaa::-webkit-scrollbar {display: none; /* Chrome Safari */}

@media (max-width: 768px) {
  .auto-height {
    height: auto;
    border-radius: 10px;
  }
}

@media (min-width: 769px) {
  .auto-height {
    height: 400px;
    max-height: 400px;
    border-radius: 10px;
  }
}

:deep(.ant-table-thead tr th) {
  white-space: nowrap !important;
}

</style>

