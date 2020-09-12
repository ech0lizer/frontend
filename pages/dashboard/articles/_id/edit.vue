<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="6">
        <v-card>
          <v-card-title class="primary white--text">
            Article Edit
          </v-card-title>
          <v-card-text class="pa-5">
            <v-form ref="form" @submit.prevent="editArticle">
              <v-text-field v-model="article.title" label="Title" />
              <div><ckeditor v-model="article.text" :config="editorConfig" :editor="editor" /></div>
              <v-btn type="submit" color="primary" :disabled="disabled" :loading="loading" class="mt-5">
                Submit
              </v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
let ClassicEditor
if (process.browser) {
  ClassicEditor = require('@ckeditor/ckeditor5-build-classic')
}
export default {
  data () {
    return {
      article: {},
      editor: ClassicEditor,
      editorConfig: {
        // editor config
      },
      rules: [],
      loading: false,
      disabled: false,
      text: 'Hello'
    }
  },
  mounted () {
    this.$axios.get('articles/' + this.$route.params.id).then((response) => { this.article = response.data })
  },
  methods: {
    editArticle () {
      this.loading = true
      this.disabled = true
      this.$store.dispatch('articles/editArticle', this.article)
      setTimeout(() => {
        this.loading = false
        this.disabled = false
        this.$router.push({ path: '/dashboard/articles/' })
      }, 1000)
    }
  }
}
</script>

<style scoped>

</style>
