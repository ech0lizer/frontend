export const state = () => ({
  articles: []
})

export const mutations = {
  add (state, data) {
    state.articles = data
  },
  delete (state, id) {
    if (state.articles[id] !== null) {
      state.articles = state.articles.filter(a => a.id !== id)
    } else {
      alert('No element')
    }
  },
  create (state, data) {
    state.articles.push(data)
  }
}

export const actions = {
  async getArticles ({ commit }) {
    const response = await this.$axios.get('/articles/')
    commit('add', response.data)
  },
  async deleteArticle ({ commit }, id) {
    await this.$axios.delete(`/articles/${id}`)
    commit('delete', id)
  },
  async createArticle ({ commit }, data) {
    await this.$axios.post('/articles/create/', data)
    commit('create', data)
  },
  async editArticle ({ commit }, data) {
    // await console.log(`id = ${data.id}\ndata = ${data}`)
    await this.$axios.put(`/articles/${data.id}`, data)
  }
}

export const getters = {
  get_articles: (state) => {
    return state.articles
  },
  get_article_by_id: state => (id) => {
    return state.articles.find(article => article.id === id)
  }
}
