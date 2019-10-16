<template>
  <div class="about">
    <!-- <h1>This is an about page</h1> -->
    <p>{{message}}</p>
    <input type="text" v-model="message">
    <br>
    <span @click="getInfo">获取输入框的值</span>
    <!-- <p v-bind:title="test1">345</p> -->
    <!-- <p v-if="bool">今天天气不错</p> -->
    <!-- <div>
      <p
        v-for="(item, index) in list"
        :key="item"
      >
        {{item}}    {{index}}
      </p>
    </div> -->
    <todo-list
      :todoData="todoItemList"
    >
    </todo-list>
  </div>
</template>
<script>
import todoList from '../components/TodoList.vue';

export default {

  data() {
    return {
      list: ['123', '456', '789'],
      todoItemList: [{
        value: '123',
        status: false,
      }, {
        value: '456',
        status: false,
      }, {
        value: '789',
        status: false,
      }],
      message: 'Hello world',
      test1: `zhongyou${new Date().toLocaleString()}`,
      bool: true,
    };
  },
  methods: {
    getInfo() {
      alert(this.message);
    },
    res() {
      alert('我被点击了!');
      this.message = this.message.split('').reverse().join('');
    },
  },
  components: {
    todoList,
  },
  mounted() {
    // let _this = this
    // setTimeout(function () {
    //   _this.bool = false
    // }, 5000)

    // setTimeout(() => {
    //   this.list.push('hello')
    // }, 3000);

    setTimeout(() => {
      this.bool = false;
    }, 5000);
  },
};
</script>
