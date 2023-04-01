<template>
  <div>
    <AvatorInof></AvatorInof>
    <DescribeMe></DescribeMe>
  </div>
</template>

<script>
import AvatorInof from './AvatorInof.vue'
import DescribeMe from './DescribeMe.vue'
export default {
    name: "AboutMe",
    components: { AvatorInof, DescribeMe }
}
</script>
<style scoped>
div {
  width:800px;
  margin: 0 auto;
}
</style>
