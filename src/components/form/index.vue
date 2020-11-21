<template>
  <div>
    <!-- <ElementTest></ElementTest> -->

    <!-- KForm -->
    <KForm :model="model" :rules="rules">
      <KFormItem label="用户名">
        <KInput v-model="model.username" placeholder="请输入用户名"></KInput>
      </KFormItem>
    </KForm>
    <!-- value="model.usernmae" @input="model.username=$event" -->
  </div>
</template>

<script>
  import ElementTest from '@/components/form/ElementTest.vue'
  import KInput from '@/components/form/KInput.vue'
  import KFormItem from '@/components/form/KFormItem.vue'
  import KForm from '@/components/form/KForm.vue'
  
  export default {
    components: {
      ElementTest,
      KInput,
      KFormItem,
      KForm
    },
    data() {
      return {
        model: {
          username: 'tom', password: ''
        },
        rules: {
          username: [
            {required: true, message: '请输入用户名'}
          ],
          password: [
            {required: true, message: '请输入密码'}
          ]
        }
      }
    },
  }
</script>

<style scoped>

</style>