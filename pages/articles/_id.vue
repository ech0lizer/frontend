<template>
  <v-row align="center" justify="center">
    <v-col cols="8">
      <v-container>
        <v-card>
          <v-card-title v-text="article.title" />
          <v-card-text v-html="article.text" />
          <v-card-actions>
            <v-btn text nuxt to="/">
              Back
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-container>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data () {
    return {
      article: {}
    }
  },
  created () {
    this.$axios.get('articles/' + this.$route.params.id).then((response) => { this.article = response.data })
  }
}
</script>

<style scoped>

</style>
