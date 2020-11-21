<template>
  <div>
    <!-- 1.数据显示和输入 -->
    <input type="text" :value="value" @input="onInput"
      v-bind="$attrs">
  </div>
</template>

<script>
  export default {
    inheritAttrs: false,
    props: {
      value: {
        type: String,
        default: ''
      },
    },
    methods: {
      onInput(e) {
        this.$emit('input', e.target.value)

        // 使用FormItem派发校验事件
        this.$parent.$emit('validate')

      }
    },
  }
</script>

<style scoped>

</style>