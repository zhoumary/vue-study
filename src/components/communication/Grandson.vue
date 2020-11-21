<template>
  <div>
    <h3>grandson</h3>
    <p>{{msg}}</p>
    <!-- 使用注入的值 -->
    <p>{{foo}}</p>
  </div>
</template>

<script>
  export default {
    inject: ['foo'],
    props: {
      msg: {
        type: String,
        default: ''
      },
    },
  }
</script>

<style scoped>

</style>