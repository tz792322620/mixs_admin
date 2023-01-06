<template>
  <div class="chat">
      <div style="width: 15%;background-color: #3a3a3a;margin-right: 0.5rem;height: 100%;padding: 1rem;">
        <div class="kft">咨询用户列表</div>
        <div>
          <el-scrollbar height="700px" style="padding-top: 1rem;" >
            <div v-for="(item, index) in userlist" >

                <div :class="xz == index ? 'yhxz':'yhwxz'" @click="xzyh(index,item)">
                  <el-badge :value="item.unreadNumber" :max="99" class="item">
<!--                  <div><img style="width: 4rem;" src="@/assets/logo.png"></div>-->
                  <div style="width: 11rem;height: 2rem;line-height: 2rem;">{{ item.userName }}</div>
                  </el-badge>
                </div>

            </div>
          </el-scrollbar>
        </div>
      </div>
      <div style="width: 70%;background-color: #3a3a3a;height: 100%;padding: 1rem;">
        <div class="kft">{{dqyh.userName}}</div>
        <div>
          <el-scrollbar height="500px" ref="scrollbarRef">
            <div class="scrollbar-demo-items" >
              <div v-for="item in dqyh.content" >
                <div :class="item.type == 2 ? 'fdrrs' : 'fdrr' " style="color: #fff">{{ item.sendTime }}</div>
                <div  :class="item.type == 2 ? 'fdrrs' : 'fdrr' ">
<!--                  <div style="color: #fff;margin-right: 0.5rem;">{{ item.type }}</div>-->
                  <div class="xxnr" v-if="item.textType == 0" v-html="item.body"></div>
                  <div class="xxnr" v-if="item.textType == 1" >
                    <img style="width: 10rem" :src="item.body">
                  </div>

                </div>
              </div>
            </div>
          </el-scrollbar>
        </div>
        <div style="margin-top: 1rem;height: 6rem;">
          <div style="border: 1px solid #ccc">
            <!-- 工具栏 -->
            <Toolbar
                :editor="editorRef"
                :defaultConfig="toolbarConfig"
                style="border-bottom: 1px solid #ccc"
            />
            <!-- 编辑器 -->
            <Editor
                v-model="valueHtml"
                :defaultConfig="editorConfig"
                style="height: 100px; overflow-y: hidden;"
                @onCreated="handleCreated"
                @keyup.enter="sendxx"
            />
          </div>
          <div style="float: right;">
            <el-button type="primary" @click="sendxx" >发送消息</el-button>
<!--            <el-button type="primary" @click="sendxxs" >获取用户</el-button>-->
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Haschat'
}
</script>

<script setup>
import { useUserStore } from '/@/store/modules/user';
import '@wangeditor/editor/dist/css/style.css' // 引入 css
import { getToken } from '/@/utils/auth';
import { Editor, Toolbar  } from '@wangeditor/editor-for-vue'
// 全量引入格式化工具 请按需保留
import { ref,onMounted ,onBeforeUnmount, shallowRef} from 'vue'

import {otherHttp} from "../../utils/http/axios";
const userStore = useUserStore();
const token = userStore.getUserInfo.id;
const path = ref(import.meta.env.VITE_BASE_API)
const xz = ref(0)
const content = ref([
])

const scrollbarRef = ref()
const userlist = ref([
    {
      "userToken": "749595749888879",
      "userChannel": {
        "address": "127.0.0.1",
        "port": 53933
      },
      "userType": 0,
      "userName": "meimei",
      "unreadNumber":"99"
    },
    {
      "userToken": "55555",
      "userChannel": {
        "address": "127.0.0.1",
        "port": 53933
      },
      "userType": 0,
      "userName": "didi",
      "unreadNumber":"99"
    },
    {
      "userToken": "55555",
      "userChannel": {
        "address": "127.0.0.1",
        "port": 53933
      },
      "userType": 0,
      "userName": "游客749595749888879",
      "unreadNumber":"99"
    }
])
const dqyh = ref({
  userName:'未选中用户聊天',
})
const data = ref({})

let websocket
const getBoardData = (function () {
  websocket = new WebSocket("ws://192.168.31.176:668/chat")
  // 链接发生错误的回调方法
  websocket.onerror = function() {
    console.log('websocket链接错误')
  }

  // 链接成功建立的回调方法
  websocket.onopen = function() {
    console.log(userStore.getUserInfo.id)
    let kftoken =userStore.getUserInfo.id;
    let message = {"token":kftoken,"type":"2","body":{"token":"","type":"","textType":"0","message":"上线"}}
    send(message)
    console.log('websocket链接成功')
    console.log('获取')
    let messages = {"token":kftoken,"type":"3","body":{}}
    send(messages)
    // let messages = {"token":kftoken,"type":"3","body":{}}
    // send(messages)

  }

  // 接受到消息的回调方法
  websocket.onmessage = function(event) {
    // {
    //   "body": "我再发再发",
    //   "chatId": "e9ca23d68d884d4ebb19d07889727dae",
    //   "sederId": "749595749888879",
    //   "sendTime": 1668755836263,
    //   "textType": 0,
    //   "type": 0
    // }
    console.log(event)
    data.value = JSON.parse(event.data)
    let js = JSON.parse(event.data)
    console.log(js)
    if(js.type == 0 ){
      dqyh.value.content.push(js)
      console.log('content.value',content.body)
      scrollbarRef.value.setScrollTop(0)
    }else if (Array.isArray(js)){
      userlist.value = js
    }
  }

  // 链接关闭的回调方法
  websocket.onclose = function() {
    console.log('websocket链接关闭')
  }

  // 监听窗口关闭事件， 当窗口关闭时，主动去关闭websocket链接, 防止链接还没断开就关闭窗口, server端会炮异常
  window.onbeforeunload = function() {
    websocket.close();
  }

})
getBoardData()

const send = (message) => {
  websocket.send(JSON.stringify(message))
}
const sendxxs = () => {

  // [
  //   {
  //     "userToken": "749595749888879",
  //     "userChannel": {
  //       "address": "127.0.0.1",
  //       "port": 53933
  //     },
  //     "userType": 0,
  //     "userName": "游客749595749888879"
  //   }
  // ]

  // {
  //   "body": "我再发再发",
  //   "chatId": "e9ca23d68d884d4ebb19d07889727dae",
  //   "sederId": "749595749888879",
  //   "sendTime": 1668755836263,
  //   "textType": 0,
  //   "type": 0
  // }
  console.log('获取')
  let kftoken =userStore.getUserInfo.id;
  let messages = {"token":kftoken,"type":"3","body":{}}
  send(messages)

}
const sendxx = () => {
  let date = getCurrentTime();
  console.log("date",date)
  valueHtml.value = valueHtml.value.replace(/<xml>[\s\S]*?<\/xml>/ig, '');
  valueHtml.value = valueHtml.value.replace(/<style>[\s\S]*?<\/style>/ig, '');
  valueHtml.value = valueHtml.value.replace(/<\/?[^>]*>/g, '');
  valueHtml.value = valueHtml.value.replace(/[ | ]*\n/g, '\n');
  valueHtml.value = valueHtml.value.replace(/&nbsp;/ig, '');
  console.log("valueHtml",valueHtml.value,valueHtml.value.length)
    if(valueHtml.value != '<p><br></p>' && valueHtml.value !=''){
      let kftoken =userStore.getUserInfo.id;
      let message = {"token":kftoken,"type":"2","body":{"token":dqyh.value.userToken,"type":"0","textType":"0","message":valueHtml.value}}
      send(message)
      let kfmessage =  {
        body: valueHtml.value,
        chatId: "80b4fCtO2f0ylpJ8rMo7uIdXW0ukZESrtoKqsjhhFaki2fUc7v5xLWZ450pDmoLZygNz1QSfoPxSMEPMfBIfzrzZG7xLPfULNNbVEsSvjJLLvwBgcXRCAen9v1esg4Mj",
        sederId: "1527563394641694720",
        sendTime: date,
        textType: 0,
        type: 2
      }
      dqyh.value.content.push(kfmessage)
      valueHtml.value = '<p></p>'
      console.log("sendxx");
      scrollbarRef.value.setScrollTop(0)
  }
}
// async function xzyh(index) {
//   xz.value = index
//   console.log("xzyh",index);
//   let params = {
//     page:1,
//     rows:10,
//     chatId: "e9ca23d68d884d4ebb19d07889727dae",
//     sederId: "749595749888879",
//   }
//   await otherHttp.get({url: 'message/touristsMessageList', params}).then(function (response) {
//     console.log(response)
//   });
//
//
// }
//选中用户
 const  xzyh = (index,item) => {
    xz.value = index
    console.log("xzyh",item);
    dqyh.value = item
    let params = {
      page:1,
      rows:10,
      chatId: dqyh.value.userToken,
      // chatId: dqyh.value.userToken,
      // sederId: dqyh.value.userToken,
    }
     otherHttp.get({url: 'message/touristsMessageList', params}).then(res=>{
       userlist.value.map((item) => {
         if (item.userToken == dqyh.value.userToken){
           let xx = res.data;
           item.content = xx
         }
       })

    })
   console.log("userlist",userlist.value)
   let kftoken =userStore.getUserInfo.id;
   let param = {
     chatId: kftoken,
     sederId: dqyh.value.userToken,
   }
   console.log("param",param)
   otherHttp.post({url: 'message/readMessage', params:param}).then(res=>{
     console.log("readMessage",res)
   })
   console.log('获取')
   let messages = {"token":kftoken,"type":"3","body":{}}
   send(messages)

}

function getCurrentTime() {
  //获取当前时间并打印

  let yy = new Date().getFullYear();
  let mm = new Date().getMonth()+1;
  let dd = new Date().getDate();
  let hh = new Date().getHours();
  let mf = new Date().getMinutes()<10 ? '0'+new Date().getMinutes() : new Date().getMinutes();
  let ss = new Date().getSeconds()<10 ? '0'+new Date().getSeconds() : new Date().getSeconds();
  let gettime = yy+'-'+mm+'-'+dd+' '+hh+':'+mf+':'+ss;
  console.log(gettime)
  return gettime
}

// 编辑器实例，必须用 shallowRef
const editorRef = shallowRef()

// 内容 HTML
const valueHtml = ref('<p>hello</p>')

// 模拟 ajax 异步获取内容
onMounted(() => {
  setTimeout(() => {
    valueHtml.value = '<p></p>'
  }, 1500)
})

const toolbarConfig = {}
const editorConfig = { placeholder: '请输入内容...' }
toolbarConfig.toolbarKeys = [
    'emotion',
]

// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
  const editor = editorRef.value
  if (editor == null) return
  editor.destroy()
})

const handleCreated = (editor) => {
  editorRef.value = editor // 记录 editor 实例，重要！
}

</script>

<style>
.fdrr{
  margin-top: 0.5rem;display: flex;
}
.fdrrs{
  margin-top: 0.5rem;display: flex;
  flex-direction: row-reverse;
}
.ql-bubble {
  box-sizing: border-box;
  background-color: #fff;
}
.kft{
  font-size: 1rem;
  color: #fff;
  padding: 0.5rem;
  background-color: #4d70ff;
}
.yhwxz {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin: 10px;
  text-align: center;
  border-radius: 4px;
  background: var(--el-color-primary-light-9);
  color: var(--el-color-primary);
  cursor: pointer;
  width: 10rem;
}
.yhxz {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin: 10px;
  text-align: center;
  border-radius: 4px;
  background: #1e2732;
  color: var(--el-color-primary);
  cursor: pointer;
  width: 10rem;
}
.scrollbar-demo-items {
  height: 50px;
  margin: 10px;
  text-align: right;
  border-radius: 4px;
  color: var(--el-color-primary);
  justify-content: end;
}
.xxnr{
  background-color: #fff;
  padding: 1rem;
  border-radius: 0.5rem;
  width: auto;
  height: auto;
}
.chat {
  width: 100%;
  display: flex;
  background: #eef0f3;
}
.el-scrollbar {
  overflow: hidden;
  position: relative;
  height: 100%;
}
.el-badge__content.is-fixed {
  position: absolute;
  top: 0;
  right: calc(1px + var(--el-badge-size)/ 1);
  transform: translateY(-50%) translateX(100%);
}
</style>
