import Api from '@/api/Api'

export default {
  getArticles( category ) {
    let url = `/articles?category=${category}`
    return Api().get(url)
  },
  getArticle( id ) {
    let url = `/articles/${id}`;
    return Api().get(url)
  }
}
