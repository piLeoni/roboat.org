;(window.webpackJsonp = window.webpackJsonp || []).push([
  [3],
  {
    185: function(e, t, n) {
      let content = n(188)
      typeof content === 'string' && (content = [[e.i, content, '']]),
      content.locals && (e.exports = content.locals)
      ;(0, n(27).default)('6db9aa03', content, !0, { sourceMap: !1 })
    },
    186: function(e, t, n) {
      let content = n(190)
      typeof content === 'string' && (content = [[e.i, content, '']]),
      content.locals && (e.exports = content.locals)
      ;(0, n(27).default)('407c041a', content, !0, { sourceMap: !1 })
    },
    187: function(e, t, n) {
      'use strict'
      const o = n(185)
      n.n(o).a
    },
    188: function(e, t, n) {
      ;(e.exports = n(26)(!1)).push([
        e.i,
        '.background-area[data-v-acc2f390]{width:100%;display:block}.content-area[data-v-acc2f390]{width:70ch;margin:auto;padding:2em}@media only screen and (max-width:600px){.content-area[data-v-acc2f390]{width:100%}}',
        ''
      ])
    },
    189: function(e, t, n) {
      'use strict'
      const o = n(186)
      n.n(o).a
    },
    190: function(e, t, n) {
      ;(e.exports = n(26)(!1)).push([
        e.i,
        '#main-area-container{height:100%;width:100%;position:relative;overflow-y:scroll;scroll-behavior:smooth}.title{font-family:Quicksand,Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;display:block;font-weight:300;font-size:100px;color:#35495e;letter-spacing:1px}.subtitle{font-weight:300;font-size:42px;color:#526488;word-spacing:5px;padding-bottom:15px}.links{padding-top:15px}.fillSpace{height:1000px}',
        ''
      ])
    },
    191: function(e, t, n) {
      'use strict'
      n.r(t)
      n(22), n(17), n(18), n(11), n(19)
      const o = n(5)
      const r = n(13)
      const c = {
        name: 'TreeSections',
        props: ['label', 'nodes', 'depth', 'link']
      }
      const l = n(10)
      const d = Object(l.a)(
        c,
        function() {
          const e = this
          const t = e.$createElement
          const n = e._self._c || t
          return n(
            'div',
            [
              e.label
                ? n(
                    'div',
                    { staticClass: 'doc-section', attrs: { id: e.label } },
                    [
                      n('h1', [e._v(e._s(e.label))]),
                      e._v(' '),
                      n('p', [
                        e._v(
                          '\n      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque\n      eius minus quibusdam cupiditate incidunt, consequatur eligendi fugit\n      nobis assumenda molestias quis doloribus itaque praesentium. Voluptates\n      magnam nihil sit labore modi.\n    '
                        )
                      ])
                    ]
                  )
                : e._e(),
              e._v(' '),
              e._l(e.nodes, function(e) {
                return n('tree-sections', {
                  key: e.label,
                  attrs: { nodes: e.nodes, label: e.label }
                })
              })
            ],
            2
          )
        },
        [],
        !1,
        null,
        null,
        null
      ).exports
      n(187)
      function f(object, e) {
        const t = Object.keys(object)
        if (Object.getOwnPropertySymbols) {
          let n = Object.getOwnPropertySymbols(object)
          e &&
            (n = n.filter(function(e) {
              return Object.getOwnPropertyDescriptor(object, e).enumerable
            })),
          t.push.apply(t, n)
        }
        return t
      }
      const m = {
        layout: function(e) {
          return e.store.isMobile ? 'mobile' : 'default'
        },
        components: {
          TreeSections: d,
          SectionArea: Object(l.a)(
            {},
            function() {
              const e = this.$createElement
              const t = this._self._c || e
              return t('div', [
                t('div', { staticClass: 'background-area' }, [
                  t(
                    'div',
                    { staticClass: 'content-area' },
                    [this._t('default')],
                    2
                  )
                ])
              ])
            },
            [],
            !1,
            null,
            'acc2f390',
            null
          ).exports
        },
        computed: (function(e) {
          for (let i = 1; i < arguments.length; i++) {
            var source = arguments[i] != null ? arguments[i] : {}
            i % 2
              ? f(source, !0).forEach(function(t) {
                  Object(o.a)(e, t, source[t])
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                  e,
                  Object.getOwnPropertyDescriptors(source)
                )
                : f(source).forEach(function(t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(source, t)
                  )
                })
          }
          return e
        })({}, Object(r.b)(['contents', 'isMobile'])),
        mounted: function() {
          const e = this
          const t = this.$refs.mainArea
          t.addEventListener(
            'scroll',
            function(n) {
              const o = t.getBoundingClientRect().top
              const r = Array.prototype.slice.call(
                document.querySelectorAll('.doc-section')
              )
              for (const c in r) {
                if (r[c].getBoundingClientRect().bottom - o >= 0) {
                  e.$store.commit('setCurrentSection', r[c].getAttribute('id'))
                  break
                }
              }
            },
            !0
          )
        }
      }
      const h =
        (n(189),
        {
          components: {
            TheMainArea: Object(l.a)(
              m,
              function() {
                const e = this.$createElement
                const t = this._self._c || e
                return t(
                  'div',
                  { ref: 'mainArea', attrs: { id: 'main-area-container' } },
                  [
                    t('section-area', [
                      t(
                        'div',
                        [
                          t('tree-sections', {
                            attrs: {
                              label: this.contents.label,
                              nodes: this.contents.nodes
                            }
                          })
                        ],
                        1
                      )
                    ]),
                    this._v(' '),
                    t('div', { staticClass: 'fillSpace' })
                  ],
                  1
                )
              },
              [],
              !1,
              null,
              null,
              null
            ).exports
          }
        })
      const v = Object(l.a)(
        h,
        function() {
          const e = this.$createElement
          const t = this._self._c || e
          return t('div', [t('the-main-area')], 1)
        },
        [],
        !1,
        null,
        null,
        null
      )
      t.default = v.exports
    }
  }
])
