import Api from '@/api/Api'

export default {
  getArticles( query ) {
    let url = `/articles`
    if ( Object.keys(query).length > 0 ) {
      let queryUrl = []
      for (var key in query) {
        queryUrl.push(`${key}=${query[key]}`)
      }
      queryUrl = queryUrl.join('&');
      url += `?${queryUrl}`
    }
    console.log(url)
    return Api().get(url)
  },

  getArticle( id ) {
    let url = `/articles/${id}`;
    return Api().get(url)
  }
}
