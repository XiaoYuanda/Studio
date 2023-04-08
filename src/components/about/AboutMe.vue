<template>
  <div id="aboutme">
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
#aboutme {
  width:90%;
  max-width: 820px;
  margin: 0 auto;

}
</style>
