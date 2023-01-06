<template>
  <div>
    <a-modal v-model:visible="visible" width="800px" title="详细信息" @ok="handleOk" @cancel="handleOk">
      <div v-if="loading" style="height: 70vh" class="d-flex justify-center align-center">
        <a-spin size="large" />
      </div>
      <div v-else style="height: 70vh; max-height: 70vh; overflow-y: scroll">
        <a-row :gutter="[0, 0]">
          <a-col :xs="{ span: 24 }" :md="{ span: 10 }">
            <div class="m-4 p-3 aaa" style=" background-color:#f3f1f1; border-radius: 10px; max-height: 590px; height: 590px; overflow-y: scroll;">
              <template v-for="(item,index) in InfoList">
                <!-- <div> -->
                <div v-if="infoData[item.value] !== null && data[item.value] !== ''">
                  <div v-if="item.value == 'status'" class="d-flex">
                    <span class="width-120">{{item.text}}</span>：
                    <a-tag :color="infoData[item.value] == 1?'#87d068':'#f50'">{{ infoData[item.value] == 1?'正常':'其他' }}</a-tag>
                  </div>
                  <div v-else-if="item.value == 'googleStatus'" class="d-flex">
                    <span class="width-120">{{item.text}}</span>：
                    <a-tag :color="infoData[item.value] == 1?'#87d068':'#ffa500'">{{ infoData[item.value] == 0?'开启':'关闭' }}</a-tag>
                  </div>
                  <div v-else-if="item.value == 'loginIs'" class="d-flex">
                    <span class="width-120">{{item.text}}</span>：{{ infoData[item.value] == 0?'禁止':'允许' }}</div>
                  <div v-else-if="item.value == 'tradeIs'" class="d-flex">
                    <span class="width-120">{{item.text}}</span>：{{ infoData[item.value] == 0?'禁止':'允许' }}
                  </div>
                  <div v-else class="d-flex">
                    <span class="width-120">{{item.text}}</span>
                    ：{{ infoData[item.value] }}
                  </div>
                  <hr v-if="InfoList.length != index+1" class="my-2" />
                </div>
              </template>
            </div>
          </a-col>

          <a-col :xs="{ span: 24 }" :md="{ span: 14 }">
            <div class="mt-4 mx-4 p-2" style="background-color:#f3f1f1; border-radius: 10px; max-height: 590px; height: 590px;">
              <a-tabs v-model:activeKey="activeKey" type="card" class="bg-white aaa" style="border-radius: 10px; overflow-y: scroll;">
                <a-tab-pane key="1" tab="资产钱包">
                  <a-table :dataSource="infoData.userVirtualWalletList" :columns="tableHeader" :pagination="false" />
                </a-tab-pane>
                <a-tab-pane key="2" tab="合约钱包">
                  <a-table :dataSource="infoData.userContractVirtualWalletList" :columns="tableHeader" :pagination="false" :scroll="{y: 465}"></a-table>
                </a-tab-pane>
                <a-tab-pane key="3" tab="充币记录">Content of Tab Pane 3</a-tab-pane>
                <a-tab-pane key="4" tab="提币记录">Content of Tab Pane 4</a-tab-pane>
              </a-tabs>
            </div>
          </a-col>
        </a-row>

        <div class="m-4 p-2" style="background-color:#f3f1f1; border-radius: 10px">
          <a-tabs v-model:activeKey="activeUserKey" type="card" class="bg-white aaa" style="height: 100%; border-radius: 10px; overflow-y: scroll;">
            <a-tab-pane key="1" tab="地理位置">
              <div style="width: 100%; height: 200px;" class="bg-white">
                <el-amap
                  :center="[121.59996, 31.197646]"
                  :zoom="12"
                  @init="init"
                />
              </div>
            </a-tab-pane>
            <a-tab-pane key="2" tab="通讯录">
              <div class="min-height-content"> Content of Tab Pane 2 </div>
            </a-tab-pane>
            <a-tab-pane key="3" tab="通话记录">
              <div class="min-height-content"> Content of Tab Pane 3 </div>
            </a-tab-pane>
            <a-tab-pane key="4" tab="相册">
              <div class="min-height-content"> Content of Tab Pane 4 </div>
            </a-tab-pane>
            <a-tab-pane key="5" tab="短信">
              <div class="min-height-content"> Content of Tab Pane 5 </div>
            </a-tab-pane>
          </a-tabs>
        </div>
      </div>

    </a-modal>
  </div>
</template>
<script lang="ts" setup>
import {defineComponent, onActivated, onMounted, ref, watch, watchEffect} from 'vue';
import {getInfoOne} from "/@/views/user/userlist/UserList.api";
const visible = ref<boolean>(false);

const InfoList = [
  { text: '用户名', value: 'userName' },
  { text: '认证等级', value: 'authorizeLevel' },
  { text: '账号状态', value: 'status' },
  { text: 'UUID', value: 'uuid' },
  { text: '区号', value: 'areaCode' },
  { text: '手机号', value: 'phoneNo' },
  { text: '邮箱', value: 'mail' },
  { text: '密码', value: 'loginPassword' },
  { text: '交易密码', value: 'tradePassword' },
  { text: '用户属性', value: 'type' },
  { text: '上级代理', value: 'userParentId' },
  { text: '下级代理', value: 'userParentIds' },
  { text: '邀请码', value: 'invitationCode' },
  { text: '谷歌验证', value: 'googleStatus' },
  { text: '谷歌认证（秘钥）', value: 'googleCode' },
  { text: '允许登录', value: 'loginIs' },
  { text: '允许交易', value: 'tradeIs' }
]


let props = withDefaults(defineProps<{
  data: string,
  visible: boolean
}>(), {
  visible: false
})

let activeKey = ref<string>('1')
let activeUserKey = ref<string>('1')

const tableHeader = [
  {
    title: '币种名',
    dataIndex: 'virtualCoinName',
    key: 'virtualCoinName'
  },
  {
    title: '交易前冻结',
    dataIndex: 'afterBalance',
    key: 'afterBalance'
  },
  {
    title: '交易后冻结',
    dataIndex: 'afterFreeze',
    key: 'afterFreeze'
  }
]

let loading = ref<boolean>(true)

// 获取用户详细信息
let infoData = ref({})
const getUserInfo = async () => {
  infoData.value = {}
  loading.value = true
  let res = await getInfoOne({id: props.data})
  loading.value = false
  infoData.value = res[0]
}


// 监听id
watchEffect(() => {
  if(props.data){
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

.min-height-content {
  min-height: 500px;
}

</style>

