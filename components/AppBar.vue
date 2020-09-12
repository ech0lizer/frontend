<template>
  <div>
    <v-app-bar app flat color="orange lighten-1">
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <v-toolbar-title class="text-uppercase font-weight-black">
        <span class="white--text">Web</span>
        <span>Box</span>
      </v-toolbar-title>
      <v-spacer />
      <UserMenu v-if="this.$auth.loggedIn" />
      <v-btn
        v-else
        outlined
        color="white"
        nuxt
        to="/login"
      >
        <span>Signin</span>
        <v-icon>mdi-login-variant</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      app
      class="grey darken-4"
      dark
      temporary
    >
      <v-list flat>
        <v-subheader>REPORTS</v-subheader>
        <v-list-item-group>
          <v-list-item v-for="link in links" :key="link.title" nuxt :to="link.route">
            <v-list-item-icon>
              <v-icon>{{ link.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ link.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import UserMenu from '@/components/UserAvatarMenu'
export default {
  components: {
    UserMenu
  },
  data () {
    return {
      drawer: false,
      links: [
        { title: 'Home', icon: 'mdi-home', route: '/' },
        { title: 'Dashboard', icon: 'mdi-view-dashboard', route: '/dashboard' }
      ]
    }
  },
  created () {
    if (this.$auth.loggedIn) {
      if (!this.$auth.user.is_staff) {
        this.links.splice(1, 1)
      }
    } else {
      this.links.splice(1, 1)
    }
  }
}
</script>

<style scoped>

</style>
