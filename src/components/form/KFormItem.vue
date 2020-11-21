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
  </div>
</template>

<script>
  import Schema from 'async-validator'

  export default {
    inject: ['form'],
    props: {
      label: {
        type: String,
        default: ''
      },
      prop: {
        type: String, 
        defalult: ''
      }
    },
    data() {
      return {
        error: ''
      }
    },
    mounted () {
      this.$on('validate', () => {
        this.validate()
      })
    },
    methods: {
      validate() {
        // 校验方法
        // 1.获取值和校验规则
        const value = this.form.model[this.prop]
        const rules = this.form.rules[this.prop]

        // 2.创建validator实例
        const validator = new Schema({[this.prop]: rules})

        // 3.执行校验
        return validator.validate({[this.prop]: value}, errors => {
          if (errors) {
            this.error = errors[0].message
          } else {
            // 通过
            this.error = ''
          }
        })
      }
    },
  }
</script>

<style scoped>

</style>