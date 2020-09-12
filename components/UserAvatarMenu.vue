<template>
  <v-menu
    v-model="menu"
    :close-on-content-click="false"
    :nudge-width="200"
    offset-y
    transition="slide-y-transition"
  >
    <template v-slot:activator="{ on, attrs }" template>
      <v-avatar
        color="indigo"
        size="35"
        class="mr-5"
        v-bind="attrs"
        v-on="on"
      >
        <v-icon dark>
          mdi-account-circle
        </v-icon>
      </v-avatar>
    </template>

    <v-card>
      <v-list>
        <v-list-item>
          <v-list-item-avatar>
            <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="font-weight-bold">
              {{ this.$auth.user.username }}
            </v-list-item-title>
            <v-list-item-subtitle>{{ this.$auth.user.email }}</v-list-item-subtitle>
            <v-list-item-subtitle>Admin: {{ this.$auth.user.is_staff }}</v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-action>
            <v-btn icon nuxt to="/user" @click="menu = false">
              <v-icon>mdi-cog</v-icon>
            </v-btn>
          </v-list-item-action>
        </v-list-item>
      </v-list>
      <v-divider />
      <v-list>
        <v-list-item>
          <v-list-item-action>
            <v-switch v-model="message" color="purple" />
          </v-list-item-action>
          <v-list-item-title>Enable messages</v-list-item-title>
        </v-list-item>
      </v-list>
      <v-card-actions>
        <v-spacer />

        <v-btn text @click="menu = false">
          Cancel
        </v-btn>
        <v-btn color="primary" text @click="logout">
          Logout
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-menu>
</template>

<script>
export default {
  data () {
    return {
      message: false,
      menu: false
    }
  },
  methods: {
    async logout () {
      this.menu = false
      await this.$auth.logout()
    }
  }
}
</script>

<style scoped>

</style>
