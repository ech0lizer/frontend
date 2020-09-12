export default function ({ $axios }) {
  $axios.onError((error) => {
    return error.response.data
  })
  $axios.onResponse((response) => {
    return response
  })
}
