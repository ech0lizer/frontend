<template>
  <v-container>
    <RegisterForm class="mx-auto" />
  </v-container>
</template>

<script>
import RegisterForm from '@/components/RegisterForm'
export default {
  auth: 'guest',
  components: {
    RegisterForm
  },
  head: {
    title: 'Register'
  }
}
</script>

<style scoped>

</style>
