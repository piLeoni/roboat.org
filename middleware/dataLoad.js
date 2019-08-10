import inputContents from '@/static/contents.js'

export default ({ store }) => {
  console.log('loading data')
  store.dispatch('loadContents', inputContents)
}
