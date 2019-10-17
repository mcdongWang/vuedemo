<template>
  <div class="home">
    <query-comp :queryOption="queryData"></query-comp>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
import queryComp from '@/components/Query.vue';

export default {
  name: 'home',
  data() {
    return {
      queryData: [{
        title: '筛选内容1',
        value: 'hello world',
        type: 'input', // select input switch
        ext: {},
      }, {
        title: '筛选内容2',
        value: 'FPX NO1!',
        type: 'input', // select input switch
        ext: {},
      }, {
        title: '筛选类型',
        value: '333',
        type: 'select', // select input switch
        ext: {
          options: ['222', '333', '555'], // select needs
        },
      }, {
        title: '筛选开关',
        value: true, // switch value support bool
        type: 'switch', // select input switch
        ext: {},
      }],
    };
  },
  components: {
    // HelloWorld,
    queryComp,
  },
};
</script>
