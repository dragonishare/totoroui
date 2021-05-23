<template>
  <div class="alert">{{ msg }}</div>
</template>
<script>
export default {
  name: "ToAlert",
  data() {
    return {
      msg: "alert组件",
    };
  },
};
</script>
<style lang="scss" scoped>
.alert {
  color: burlywood;
}
</style>
