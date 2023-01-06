<template>
  <div>
    <a-modal v-model:visible="visible" width="500px" title="详细信息" @ok="handleOk" @cancel="handleOk">
      <div v-if="loading" style="height: 70vh" class="d-flex justify-center align-center">
        <a-spin size="large" />
      </div>
      <div v-else style="max-height: 70vh; overflow-y: scroll">
        <div class="m-4 p-3 aaa auto-height" style=" background-color:#f3f1f1;">
          <template v-for="(item,index) in InfoList">
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
import { ref, watchEffect} from 'vue';
const visible = ref<boolean>(false);
const InfoList = [
  { text: '平台类型', value: 'platformType' },
  { text: '结算周期类型', value: 'tradeType' },
  { text: '币种编号', value: 'virtualCoinId' },
  { text: '费率', value: 'rate' },
  { text: '结算周期', value: 'settlementCycle' },
  { text: '开启权益', value: 'isOpen' },
  { text: '代理商编号', value: 'agentId' },
  { text: '手续费', value: 'type' }
]


let data = {
  "id": "1593096481292206081",
  "platformType": 1,
  "tradeType": 1,
  "virtualCoinId": 1,
  "rate": "10",
  "settlementCycle": 0,
  "isOpen": 1,
  "agentId": "1593096480306544641",
  "type": 1,
  "createTime": null
}

let props = withDefaults(defineProps<{
  agentId: string,
  visible: boolean,
  info?: any
}>(), {
  visible: false
})


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

