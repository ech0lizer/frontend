<template>
  <v-container>
    <ArticleList />
  </v-container>
</template>

<script>
import ArticleList from '@/components/ArticleList'
export default {
  auth: 'guest',
  components: {
    ArticleList
  },
  head: {
    title: 'Home'
  }
}
</script>

<style scoped>

</style>
