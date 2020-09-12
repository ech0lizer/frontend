<template>
  <v-app>
    <v-container>
      <v-row align="center" justify="center">
        <v-col cols="6">
          <v-alert type="error" text outlined>
            <h1 v-if="error.statusCode == 404">
              {{ pageNotFound }}
            </h1>
            <h1 v-else>
              Oups... sorry :(
            </h1>
            <v-divider class="mb-6" />
            <p>
              {{ error.message }}
            </p>
            <nuxt-link to="/">
              Back to Home page
            </nuxt-link>
          </v-alert>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      pageNotFound: '404 Not Found'
    }
  },
  head () {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
