<template>
  <v-container>
    <v-row>
      <v-col v-for="article in articles" :key="article.id" sm="12" md="6" lg="3">
        <v-card>
          <nuxt-link :to="`/articles/${article.id}`">
            <v-card-title class="primary white--text">
              {{ article.title }}
            </v-card-title>
          </nuxt-link>
          <v-card-text class="mt-5" v-html="article.text.slice(0,150) + '...'" />
          <v-card-actions class="grey lighten-3">
            Author: {{ article.author }}
            <v-spacer />
            Published: {{ article.published }}
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      articles: 'articles/get_articles'
    })
  },
  mounted () {
    this.$store.dispatch('articles/getArticles')
  }
}
</script>

<style scoped>

</style>
