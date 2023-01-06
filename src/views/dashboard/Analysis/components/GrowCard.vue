<template>
  <div style="padding: 20px">
    <a-row :gutter="[20, 20]">
      <a-col :xs="{ span: 24 }" :md="{ span: 8 }" :lg="{ span: 6 }" :xxl="{ span: 6 }" v-for="item in cardList" :key="item.value">
        <a-card :bordered="false" :hoverable="true" class="border-rounded-10">
          <template #title>
            <div class="d-flex align-center">
              <i class="iconfont mr-2" :class="item.icon" :style="{color: item.color}" style="font-size: 24px;"></i>
<!--              <component style="fontSize: 24px;" :is="$antIcons[item['icon']]" class="mr-2" />-->
              <div>{{item.title}}</div>
            </div>
          </template>
          <p>{{homeData[item.value]}}</p>
        </a-card>
      </a-col>
<!--      <a-col :span="6">-->
<!--        <a-card title="新增用户量" :bordered="false" :hoverable="true" class="border-rounded-10">-->
<!--          <p>{{homeData.userCount}}</p>-->
<!--        </a-card>-->
<!--      </a-col>-->
<!--      <a-col :span="6">-->
<!--        <a-card title="USDT入金额" :bordered="false" class="border-rounded-10">-->
<!--          <p>{{homeData.rjmoneyUSDT}}</p>-->
<!--        </a-card>-->
<!--      </a-col>-->
<!--      <a-col :span="6">-->
<!--        <a-card title="BTC入金额" :bordered="false" class="border-rounded-10">-->
<!--          <p>{{homeData.rjmoneyBTC}}</p>-->
<!--        </a-card>-->
<!--      </a-col>-->
<!--      <a-col :span="6">-->
<!--        <a-card title="ETH入金额" :bordered="false" class="border-rounded-10">-->
<!--          <p>{{homeData.rjmoneyETH}}</p>-->
<!--        </a-card>-->
<!--      </a-col>-->
    </a-row>
  </div>

<!--  <div style="padding: 20px">-->
<!--    <a-row :gutter="16">-->
<!--      <a-col :span="6">-->
<!--        <a-card title="USDT提币额" :bordered="false" class="border-rounded-10">-->
<!--          <p>{{homeData.tbmoneyUSDT}}</p>-->
<!--        </a-card>-->
<!--      </a-col>-->
<!--      <a-col :span="6">-->
<!--        <a-card title="BTC提币额" :bordered="false" class="border-rounded-10">-->
<!--          <p>{{homeData.tbmoneyBTC}}</p>-->
<!--        </a-card>-->
<!--      </a-col>-->
<!--      <a-col :span="6">-->
<!--        <a-card title="ETH提币额" :bordered="false" class="border-rounded-10">-->
<!--          <p>{{homeData.tbmoneyETH}}</p>-->
<!--        </a-card>-->
<!--      </a-col>-->
<!--      <a-col :span="6">-->
<!--        <a-card title="持仓量" :bordered="false" class="border-rounded-10">-->
<!--          <p>{{homeData.chicangCount}}</p>-->
<!--        </a-card>-->
<!--      </a-col>-->
<!--    </a-row>-->
<!--  </div>-->
<!--  <div style="padding: 20px">-->
<!--    <a-row :gutter="16">-->
<!--      <a-col :span="6">-->
<!--        <a-card title="合约成交量" :bordered="false" class="border-rounded-10">-->
<!--          <p>{{homeData.cjCount}}</p>-->
<!--        </a-card>-->
<!--      </a-col>-->
<!--      <a-col :span="6">-->
<!--        <a-card title="日盈亏" :bordered="false" class="border-rounded-10">-->
<!--          <p>{{homeData.profitLoss}}</p>-->
<!--        </a-card>-->
<!--      </a-col>-->
<!--    </a-row>-->
<!--  </div>-->
</template>
<script lang="ts" setup>

  import {  gethomeData } from '../api';
  import { CountTo } from '/@/components/CountTo/index';
  import { Icon } from '/@/components/Icon';
  import { Tag, Card } from 'ant-design-vue';
  import { growCardList } from '../data';
  import {onMounted, ref} from "vue";
  const homeData = ref([]);

  defineProps({
    loading: {
      type: Boolean,
    },
  });

  const cardList = [
    {
      title: '新增用户量',
      value: 'userCount',
      icon: 'icon-xinzengrenshu',
      color: '#ea971b'
    },{
      title: 'USDT入金额',
      value: 'rjmoneyUSDT',
      icon: 'icon-USDT',
      color: '#1BA27A'
    },{
      title: 'BTC入金额',
      value: 'rjmoneyBTC',
      icon: 'icon-BTC',
      color: '#F7931A'
    },{
      title: 'ETH入金额',
      value: 'rjmoneyETH',
      icon: 'icon-ETH',
      color: "#48A3FF"
    },{
      title: 'USDT提币额',
      value: 'tbmoneyUSDT',
      icon: 'icon-USDT',
      color: '#1BA27A'
    },{
      title: 'BTC提币额',
      value: 'tbmoneyBTC',
      icon: 'icon-BTC',
      color: '#F7931A'
    },{
      title: 'ETH提币额',
      value: 'tbmoneyETH',
      icon: 'icon-ETH',
      color: "#48A3FF"
    },{
      title: '持仓量',
      value: 'chicangCount',
      icon: 'icon-chicangshouyi',
      color: '#F0844E'
    },{
      title: '合约成交量',
      value: 'cjCount',
      icon: 'icon-chengjiao',
      color: '#38b432'
    },{
      title: '日盈亏',
      value: 'profitLoss',
      icon: 'icon-jinglirun',
      color: '#FB7895'
    }
  ]

  onMounted(() => {
    getData()
  })


  const getData = async () => {
    let { code, result} = await gethomeData(null)
    if(code == 0){
      homeData.value = result
    }
  }
</script>
<style>
p{
  font-size: 2rem;
  font-weight: 450;
}
.border-rounded-10 {
  border-radius: 10px;
}
.text-666{
  color: #333333;
}
.d-flex {
  display: flex;
}
.align-center {
  align-items: center;
}

</style>
