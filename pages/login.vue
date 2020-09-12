<template>
  <v-container>
    <LoginForm class="mx-auto" />
  </v-container>
</template>

<script>
import LoginForm from '@/components/LoginForm'
export default {
  auth: 'guest',
  components: {
    LoginForm
  },
  head: {
    title: 'Login'
  }
}
</script>
