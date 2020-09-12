<template>
  <v-container>
    <v-row class="d-flex justify-space-around">
      <v-col cols="6">
        <v-alert
          :color="response.type"
          outlined
          text
        >
          <h3>Email Verification</h3>
          <p>
            {{ response.message }}
          </p>
        </v-alert>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  middleware: 'verify-email',
  auth: 'guest',
  data ({ $route }) {
    return {
      token: $route.query.token,
      response: {}
    }
  },
  mounted () {
    this.getResponse(this.token)
  },
  methods: {
    async getResponse (verifyToken) {
      try {
        await this.$axios.post('/auth/verify-email/', { token: verifyToken })
          .then((response) => {
            this.response = response.data
            console.log(response)
          })
      } catch (error) {
        console.log(error)
      }
    }
  },
  head: {
    title: 'Email verification'
  }
}
</script>

<style scoped>

</style>
