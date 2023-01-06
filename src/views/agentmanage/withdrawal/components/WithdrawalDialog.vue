<template>
  <div>
    <a-modal v-model:visible="visible" width="500px" title="详细信息" @ok="handleOk" @cancel="handleOk">
      <div v-if="loading" style="height: 70vh" class="d-flex justify-center align-center">
        <a-spin size="large" />
      </div>
      <div v-else style="max-height: 70vh; overflow-y: scroll">
        <div class="m-4 p-3 aaa auto-height" style=" background-color:#f3f1f1;">
          <template v-for="(item,index) in InfoList">
            <!-- <div> -->
            <div v-if="infoData[item.value] !== null && data[item.value] !== ''">
              <div class="d-flex">
                <span class="width-120">{{item.text}}</span>
                ：{{ infoData[item.value] }}
              </div>
              <hr v-if="InfoList.length != index+1" class="my-2" />
            </div>
          </template>
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
  { text: '代理商编号', value: 'agentId' },
  { text: '提现金额', value: 'amount' },
  { text: '上级编号', value: 'parentId' },
  { text: '提现地址', value: 'virtualAddress' },
  { text: '申请提现状态', value: 'status' },
  { text: '下级代理', value: 'status' },
  { text: '下级用户量', value: 'status' },
]


let data = {
  "id": "5",
  "agentId": "3",
  "amount": 22,
  "parentId": "1",
  "virtualAddress": "0xa13s1af645s6a",
  "status": 2,
  "createTime": "Mon Nov 07 19:36:18 CST 2022",
  "updateTime": null
}

let props = withDefaults(defineProps<{
  agentId: string,
  visible: boolean,
  info?: any
}>(), {
  visible: false
})

let activeKey = ref<string>('1')

const tableHeader = [
  {
    title: '钱包余额',
    dataIndex: 'virtualCoinId',
    key: 'virtualCoinId'
  },
  {
    title: '币种编号',
    dataIndex: 'afterBalance',
    key: 'afterBalance'
  },
  {
    title: '交易后冻结',
    dataIndex: 'afterFreeze',
    key: 'afterFreeze'
  },
  {
    title: '交易前冻结',
    dataIndex: 'afterFreeze',
    key: 'afterFreeze'
  },
  {
    title: '交易前金额',
    dataIndex: 'afterFreeze',
    key: 'afterFreeze'
  },
  {
    title: '交易前金额',
    dataIndex: 'afterFreeze',
    key: 'afterFreeze'
  }
]

// let loading = ref<boolean>(true)

// 获取用户详细信息
let infoData = ref(data)
const getUserInfo = async () => {
  console.log('获取信息', props.agentId)
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
  min-width: 90px;
}
.align-center {
  align-items: center;
}

.aaa::-webkit-scrollbar {display: none; /* Chrome Safari */}

@media (max-width: 768px) {
  .auto-height {
    /*height: auto;*/
    border-radius: 10px;
  }
}

@media (min-width: 769px) {
  .auto-height {
    /*height: 500px;*/
    /*max-height: 500px;*/
    border-radius: 10px;
  }
}

</style>

