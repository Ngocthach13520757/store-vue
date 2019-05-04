<template>
  <div>Edit product page</div>
</template>
<script>
export default {
  created() {
    console.log(this.$route.params.id);
  }
};
</script>
