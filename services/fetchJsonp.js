import fetchJsonp from 'fetch-jsonp'

export function callFetchJsonp(baseUrl, endpoint, params = {}) {
  let fullUrl = !endpoint.includes(baseUrl) ? baseUrl + endpoint : endpoint
  fullUrl +=
    '&' +
    Object.entries(params)
      .map(([key, value]) => `${key}=${value}`)
      .join('&')

  return fetchJsonp(fullUrl)
    .then(res => {
      // console.log('get response', response)
      return res.json()
    })
    .then(json => {
      // console.log('json', json)
      const result = json.result
      // console.log('parsed result', result)
      // this.$store.commit('setBodicData1', result)
      return result // 返して代入する変数名と合わせる
    })
    .catch(err => {
      return { err }
    })
}
