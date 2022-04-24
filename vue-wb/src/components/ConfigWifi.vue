<template>
  <div class="contain">
    <div class="header">
      <div class="title">选择2.4GHz Wi-Fi网络并输入密码</div>
      <div class="subTips">如果你的Wi-Fi是5GHz的，请先设置为2.4GHz
        <a class="link">常见路由器的设置方法</a>
      </div>
    </div>
    <div class="round">
      <img :src="imageUrl" class="icon">
    </div>
    <div>
    <van-row>
      <van-cell span="24">
        <van-form @submit="onSubmit">
          <van-field
              v-model="username"
              name="Wi-Fi名称"
              label="Wi-Fi名称"
              placeholder="请输入Wi-Fi名称"
              :rules="[{ required: true, message: '请填写用户名' }]"
          />
          <van-field
              v-model="password"
              type="password"
              name="Wi-Fi密码"
              label="Wi-Fi密码"
              placeholder="请输入Wi-Fi密码"
              :rules="[{ required: true, message: '请填写密码' }]"
          />
          <div style="margin: 16px;">
            <van-button round block type="info" native-type="submit">提交</van-button>
          </div>
        </van-form>
      </van-cell>
    </van-row>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'ConfigWifi',
  data() {
    return {
      imageUrl: require('../assets/addDevice/wifiSelect.png'),
      username: '',
      password: '',
    }
  },
  methods: {
    onSubmit(values) {
      console.log('submit', values);
    },
  },
}
</script>

<style scoped>
.contain{
  font-size: 14px;
  padding: 10px;
}

.title{
  color: black;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
}

.subTips{
  color: gray;
}

.link{
  color: blue;
}

.round{
  width:100%;
  height:240px;
  overflow: hidden;
}

.icon{
  width:100%;
  height:100%;
}
</style>
