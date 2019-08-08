import inputContents from '@/static/contents.js'

export default ({ store }) => {
  store.dispatch('loadContents', inputContents)
}
