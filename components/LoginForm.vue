<template>
  <v-card width="500" class="mt-7" elevation="12">
    <v-card-title class="primary white--text">
      Login
    </v-card-title>
    <v-card-text>
      <v-alert v-if="alert !== null" text :type="alert.type" class="mt-2">
        {{ alert.message }}
      </v-alert>
      <div class="d-flex justify-center mt-8">
        <v-avatar
          color="grey lighten-2"
          size="128"
        >
          <v-icon size="80">
            mdi-account-circle
          </v-icon>
        </v-avatar>
      </div>
      <v-form id="form" ref="form" v-model="valid" class="px-10 mt-8" @submit.prevent="userLogin">
        <v-text-field
          v-model="user_data.username"
          label="Username"
          outlined
          prepend-inner-icon="mdi-account"
          required
        />
        <v-text-field
          v-model="user_data.password"
          label="Password"
          type="password"
          outlined
          prepend-inner-icon="mdi-lock"
          required
        />
        <v-btn
          color="primary"
          block
          depressed
          :loading="loading"
          :disabled="disabled"
          large
          type="submit"
        >
          submit
        </v-btn>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <nuxt-link class="mx-auto" to="/register">
        Don`t have account? Sign Up
      </nuxt-link>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data () {
    return {
      valid: true,
      user_data: {
        username: '',
        password: ''
      },
      loading: false,
      disabled: false,
      alert: null
    }
  },
  methods: {
    async userLogin () {
      this.disabled = true
      this.loading = true
      await setTimeout(() => {
        this.loading = false
        this.disabled = false
      }, 1000)
      try {
        const response = await this.$auth.loginWith('local', { data: this.user_data })
        this.alert = response
      } catch (err) {
        this.alert = err
        console.log(err)
      }
    }
  }
}
</script>

<style scoped>

</style>
