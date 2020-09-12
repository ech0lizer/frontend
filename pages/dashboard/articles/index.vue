<template>
  <v-container class="my-5">
    <v-row align="center" justify="center">
      <v-col cols="10">
        <v-card>
          <v-card-title class="deep-purple darken-1 white--text">
            Dashboard - Articles Table
          </v-card-title>
          <v-card-text class="pa-3">
            <v-btn outlined color="primary" nuxt to="/dashboard/articles/create">
              Create
              <v-icon>mdi-plus-thick</v-icon>
            </v-btn>
            <v-simple-table>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Published</th>
                    <th>Author</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="article in articles" :key="article.id">
                    <td>{{ article.title }}</td>
                    <td>{{ article.published }}</td>
                    <td>{{ article.author }}</td>
                    <td>
                      <v-btn color="success" icon nuxt :to="article.id + '/edit'">
                        <v-icon>mdi-pencil-outline</v-icon>
                      </v-btn>
                      <v-btn color="error" icon @click="dialogDelete(article.id)">
                        <v-icon>mdi-trash-can-outline</v-icon>
                      </v-btn>
                    </td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-dialog v-model="deleteDialog" width="300" persistent>
      <v-card>
        <v-card-title class="headline grey lighten-2">
          Attention
        </v-card-title>
        <v-card-text class="mt-3">
          Are you sure to delete this Article?
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn outlined @click="deleteDialog = false">
            Cancel
          </v-btn>
          <v-btn color="error" outlined @click="deleteSubmit = true">
            Delete
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  middleware: 'is_admin',
  data () {
    return {
      deleteDialog: false,
      deleteSubmit: false
    }
  },
  computed: {
    ...mapGetters({
      articles: 'articles/get_articles'
    })
  },
  mounted () {
    this.$store.dispatch('articles/getArticles')
  },
  methods: {
    removeArticle (id) {
      this.$store.dispatch('articles/deleteArticle', id)
    },
    dialogDelete (id) {
      this.deleteDialog = true
      while (this.deleteSubmit) {
        this.deleteDialog = false
        this.$store.dispatch('articles/deleteArticle', id)
        this.deleteSubmit = false
      }
    }
  },
  head: {
    title: 'Dashboard'
  }
}
</script>

<style scoped>

</style>
