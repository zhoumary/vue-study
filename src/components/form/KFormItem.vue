<template>
  <div>
    <!-- 1.label -->
    <label v-if="label">{{label}}</label>

    <!-- 2，输入项 -->
    <!--  -->
    <!-- <KFormItem label="">
      <KInput></KInput>
    </KFormItem> -->
    <slot></slot>

    <!-- 3.校验错误信息 -->
    <p v-if="error">{{error}}</p>

    <p>{{form.model}}</p>
    <p>{{form.rules}}</p>
  </div>
</template>

<script>
  export default {
    inject: ['form'],
    props: {
      label: {
        type: String,
        default: ''
      },
    },
    data() {
      return {
        error: ''
      }
    },
  }
</script>

<style scoped>

</style>