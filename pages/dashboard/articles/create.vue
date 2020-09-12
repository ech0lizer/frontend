<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="6">
        <v-card>
          <v-card-title class="primary white--text">
            Article Create
          </v-card-title>
          <v-card-text class="pa-5">
            <v-form ref="form" @submit.prevent="createArticle">
              <v-text-field v-model="article.title" label="Title" />
              <ckeditor v-model="article.text" :config="editorConfig" :editor="editor" />
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
      editor: ClassicEditor,
      editorConfig: {
        // editor config
      },
      article: {
        title: null,
        text: null,
        author: this.$auth.user.uid
      },
      loading: false,
      disabled: false
    }
  },
  methods: {
    createArticle () {
      this.loading = true
      this.disabled = true
      this.$store.dispatch('articles/createArticle', this.article)
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
