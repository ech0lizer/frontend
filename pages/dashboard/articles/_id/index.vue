<template>
  <div />
</template>

<script>
export default {
  data () {
    return {
      article: null
    }
  },
  mounted () {
    this.$axios.get('articles/' + this.$route.params.id).then((response) => {
      this.article = response.data
      console.log(this.article)
    })
  }
}
</script>

<style scoped>

</style>
