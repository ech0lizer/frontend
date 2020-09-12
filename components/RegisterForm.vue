<template>
  <v-card width="500" class="mt-7" elevation="12">
    <v-card-title class="primary white--text">
      Register new account
    </v-card-title>
    <v-card-text>
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
      <v-form id="form" ref="form" v-model="valid" class="px-10 mt-8" @submit.prevent="validate">
        <v-text-field
          v-model="user_data.username"
          label="Username"
          filled
          prepend-inner-icon="mdi-account"
          required
        />
        <v-text-field
          v-model="user_data.email"
          label="Email"
          filled
          type="email"
          prepend-inner-icon="mdi-email"
          required
        />
        <v-text-field
          v-model="user_data.first_name"
          label="First name"
          filled
          prepend-inner-icon="mdi-account"
        />
        <v-text-field
          v-model="user_data.last_name"
          label="Last name"
          filled
          prepend-inner-icon="mdi-account"
        />
        <v-text-field
          v-model="user_data.password"
          label="Password"
          filled
          type="password"
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
      <v-alert
        id="alert"
        text
        color="info"
        type="info"
        class="mt-6 d-none"
      >
        <h3 class="headline">
          Register the new account
        </h3>
        <div>
          Congratulations the register was successfully!
        </div>

        <v-divider
          class="my-4 info"
          style="opacity: 0.22"
        />

        <v-row
          align="center"
          no-gutters
        >
          <v-col class="grow">
            You need to verify your email. We send letter to <b>{{ user_data.email }}</b>. Please watch your mails and verify your account.
          </v-col>
          <v-spacer />
          <v-col class="shrink">
            <v-btn
              color="info"
              outlined
              nuxt
              to="/"
            >
              Okay
            </v-btn>
          </v-col>
        </v-row>
      </v-alert>
    </v-card-text>
    <v-card-actions id="actions">
      <nuxt-link to="/login" class="mx-auto">
        Allready have account? Sign In
      </nuxt-link>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data () {
    return {
      valid: true,
      loading: false,
      disabled: false,
      user_data: {
        username: null,
        email: null,
        password: null,
        first_name: null,
        last_name: null
      }
    }
  },
  methods: {
    async validate () {
      if (this.$refs.form.validate) {
        this.loading = true
        this.disabled = true
        setTimeout(() => {
          this.loading = false
          this.disabled = false
        }, 3000)
        await this.$axios.post('/auth/register/', this.user_data)

        const form = document.getElementById('form')
        const alert = document.getElementById('alert')
        const actions = document.getElementById('actions')
        form.classList.add('d-none')
        actions.classList.add('d-none')
        alert.classList.remove('d-none')
      }
    }
  }
}
</script>

<style scoped>

</style>
