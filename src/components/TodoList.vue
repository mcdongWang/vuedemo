<template>
    <div class="ccc">
        <p
            v-for="(item, index) in list"
            :class="{'done': item.status}"
            :key="item.value"
            @click="toggleList(index)"
        >
            {{item.value}}
        </p>
    </div>
</template>

<script>
export default {
  data() {
    return {
      list: this.todoData,
    };
  },
  methods: {
    toggleList(index) {
      console.log(index);
      this.list[index].status = !this.list[index].status;
    //   this.$set(this.list[index], 'status', !this.list[index].status);
    },
  },
  props: ['todoData'],
};
</script>

<style lang="less" scoped>

@baseBlack: #333;

.done{
    background-color: yellow;
    p{
        font-size: 20px;
    }
}
</style>
