<template>
  <v-app>
    <AppBar />
    <v-main>
      <nuxt />
    </v-main>
  </v-app>
</template>

<script>
import AppBar from '@/components/AppBar'
export default {
  components: {
    AppBar
  }
}
</script>

<style scoped>

</style>
