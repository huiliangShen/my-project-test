<template>
  <div class="hello">
    <h1></h1>
    <ul>
      <li><a href="https://github.com/joneqian/vue2-express" target="_blank">打个广告，看不看，你随意！！！</a></li>
      <li><a href="#" @click.prevent="jump('http://www.baidu.com')">jump 测试！！！</a></li>
    </ul>
    <div>
      <h1>Post请求</h1>
      <div>
        <span>请输入你的token</span>
        <input type="text" v-model="token" style="width: 200px">
      </div>
      <button @click="getInfo">点击请求</button>
      <div>
        <p>你的昵称：{{message.loginname}}</p>
        <span>你的头像：</span>
        <img :src="message.avatar_url" alt="">
      </div>
    </div>
  </div>
</template>

<script>
  import {mapMutations} from 'vuex';

  export default {
    name: 'hello',
    data () {
      return {
        msg: '少年，把你的代码撸起来，不要停！！！',
        message: '',
        token: ''
      };
    },
    methods: {
      ...mapMutations([
        'UPDATE_CUSTOMER_INFO'
      ]),
      getCustomerInfo () {
        this.UPDATE_CUSTOMER_INFO({});
      },
      getInfo () {
        let vm = this;
        if (!vm.token) {
            alert('请输入token');
            return false;
        }
        this.$http('/common/getInfo', {token: vm.token})
          .then((data) => {
            vm.message = data;
            console.log(JSON.stringify(data));
          })
          .catch(error => {
            vm.message = {};
            if (error.indexOf('403') > -1) {
                alert('未找到你的信息');
            } else {
                alert(error);
            }
          });
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
