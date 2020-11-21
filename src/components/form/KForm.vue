<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
//
export default {
  provide() {
    return {
      form: this,
    };
  },
  props: {
    model: {
      type: Object,
      required: true,
    },
    rules: Object,
  },
  methods: {
    validate(cb) {
      // 全局校验方法
      // 1.执行全局校验
      const tasks = this.$children
        .filter((item) => item.prop)
        .map((item) => item.validate());

      // 2.返回结果
      Promise.all(tasks)
        .then(() => cb(true))
        .catch(() => cb(false));
    },
  },
};
</script>

<style scoped></style>
