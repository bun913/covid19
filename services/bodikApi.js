import { callFetchJsonp } from './fetchJsonp'

const API_ROOT = 'https://data.bodik.jp/api/action/'
const actionDatastoreSearch = 'datastore_search?resource_id='
const baseUrl = API_ROOT + actionDatastoreSearch

const nagasakiPrefectureTestedCasesId = '71e83845-2648-4cb3-a69d-9f5f5412feb2'
const nagasakiPrefectureConfirmedCasesId =
  'de7ce61e-1849-47a1-b758-bca3f809cdf8'
const nagasakiCityNewsId = 'eb0ba50a-7a97-4029-9b75-9c6bab0568f6'

const nagasakiOtherInfoId = '438f03f1-0ee8-466d-a5d9-e874f5367507'

const limit = 1000

export const fetchNagasakiPrefectureTestedCases = () =>
  callFetchJsonp(baseUrl, nagasakiPrefectureTestedCasesId, { limit })
export const fetchNagasakiPrefectureConfirmedCases = () =>
  callFetchJsonp(baseUrl, nagasakiPrefectureConfirmedCasesId, { limit })
export const fetchNagasakiCityNews = () =>
  callFetchJsonp(baseUrl, nagasakiCityNewsId, { limit })
export const fetchNagasakiOtherInfo = () =>
  callFetchJsonp(baseUrl, nagasakiOtherInfoId, { limit })

export const axiosNagasakiPrefectureTestedCases = axios =>
  axios.$get(baseUrl + nagasakiPrefectureTestedCasesId, { params: { limit } })
export const axiosNagasakiPrefectureConfirmedCases = axios =>
  axios.$get(baseUrl + nagasakiPrefectureConfirmedCasesId, {
    params: { limit }
  })
export const axiosNagasakiCityNews = axios =>
  axios.$get(baseUrl + nagasakiCityNewsId, { params: { limit } })
export const axiosNagasakiOtherInfo = axios =>
  axios.$get(baseUrl + nagasakiOtherInfoId, { params: { limit } })
