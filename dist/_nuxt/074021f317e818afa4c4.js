/*! For license information please see LICENSES */
;(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    1: function(e, t, n) {
      'use strict'
      n.d(t, 'i', function() {
        return m
      }),
        n.d(t, 'j', function() {
          return v
        }),
        n.d(t, 'a', function() {
          return y
        }),
        n.d(t, 'o', function() {
          return x
        }),
        n.d(t, 'e', function() {
          return w
        }),
        n.d(t, 'f', function() {
          return O
        }),
        n.d(t, 'c', function() {
          return _
        }),
        n.d(t, 'n', function() {
          return j
        }),
        n.d(t, 'h', function() {
          return k
        }),
        n.d(t, 'p', function() {
          return $
        }),
        n.d(t, 'k', function() {
          return P
        }),
        n.d(t, 'm', function() {
          return E
        }),
        n.d(t, 'd', function() {
          return R
        }),
        n.d(t, 'b', function() {
          return T
        }),
        n.d(t, 'g', function() {
          return M
        }),
        n.d(t, 'l', function() {
          return N
        })
      n(22), n(17)
      const r = n(41)
        var o = (n(94), n(142), n(143), n(33))
        var c = (n(145), n(147), n(148), n(151), n(54), n(48), n(6))
        var l = (n(73), n(18), n(11), n(19), n(53), n(5))
        var d = n(0)
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
      function h(e) {
        for (let i = 1; i < arguments.length; i++) {
          var source = arguments[i] != null ? arguments[i] : {}
          i % 2
            ? f(source, !0).forEach(function(t) {
                Object(l.a)(e, t, source[t])
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
      }
      function m(e) {
        d.a.config.errorHandler && d.a.config.errorHandler(e)
      }
      function v(e) {
        return e.then(function(e) {
          return e.default || e
        })
      }
      function y(e, t) {
        if (t || !e.options.__hasNuxtData) {
          const n =
            e.options._originDataFn ||
            e.options.data ||
            function() {
              return {}
            }
          ;(e.options._originDataFn = n),
            (e.options.data = function() {
              let data = n.call(this)
              return (
                this.$ssrContext && (t = this.$ssrContext.asyncData[e.cid]),
                h({}, data, {}, t)
              )
            }),
            (e.options.__hasNuxtData = !0),
            e._Ctor &&
              e._Ctor.options &&
              (e._Ctor.options.data = e.options.data)
        }
      }
      function x(e) {
        return e.options && e._Ctor === e
          ? e
          : (e.options
              ? ((e._Ctor = e), (e.extendOptions = e.options))
              : ((e = d.a.extend(e))._Ctor = e),
            !e.options.name &&
              e.options.__file &&
              (e.options.name = e.options.__file),
            e)
      }
      function w(e) {
        const t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
        return Array.prototype.concat.apply(
          [],
          e.matched.map(function(e, n) {
            return Object.keys(e.components).map(function(r) {
              return t && t.push(n), e.components[r]
            })
          })
        )
      }
      function O(e) {
        const t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
        return Array.prototype.concat.apply(
          [],
          e.matched.map(function(e, n) {
            return Object.keys(e.instances).map(function(r) {
              return t && t.push(n), e.instances[r]
            })
          })
        )
      }
      function _(e, t) {
        return Array.prototype.concat.apply(
          [],
          e.matched.map(function(e, n) {
            return Object.keys(e.components).reduce(function(r, o) {
              return (
                e.components[o]
                  ? r.push(t(e.components[o], e.instances[o], e, o, n))
                  : delete e.components[o],
                r
              )
            }, [])
          })
        )
      }
      function j(e) {
        return Promise.all(
          _(
            e,
            (function() {
              const e = Object(c.a)(
                regeneratorRuntime.mark(function e(t, n, r, o) {
                  return regeneratorRuntime.wrap(function(e) {
                    for (;;) {
                    { switch ((e.prev = e.next)) {
                      case 0:
                        if (typeof t != 'function' || t.options) {
                          e.next = 4
                          break
                        }
                        return (e.next = 3), t()
                      case 3:
                        t = e.sent
                      case 4:
                        return (
                          (r.components[o] = x(t)),
                          e.abrupt('return', r.components[o])
                        )
                      case 6:
                      case 'end':
                        return e.stop()
                    }
                    }
                  }, e)
                })
              )
              return function(t, n, r, o) {
                return e.apply(this, arguments)
              }
            })()
          )
        )
      }
      function k(e) {
        return C.apply(this, arguments)
      }
      function C() {
        return (C = Object(c.a)(
          regeneratorRuntime.mark(function e(t) {
            return regeneratorRuntime.wrap(function(e) {
              for (;;) {
              { switch ((e.prev = e.next)) {
                case 0:
                  if (t) {
                    e.next = 2
                    break
                  }
                  return e.abrupt('return')
                case 2:
                  return (e.next = 4), j(t)
                case 4:
                  return e.abrupt(
                    'return',
                    h({}, t, {
                      meta: w(t).map(function(e, n) {
                        return h(
                          {},
                          e.options.meta,
                          {},
                          (t.matched[n] || {}).meta
                        )
                      })
                    })
                  )
                case 5:
                case 'end':
                  return e.stop()
              }
              }
            }, e)
          })
        )).apply(this, arguments)
      }
      function $(e, t) {
        return S.apply(this, arguments)
      }
      function S() {
        return (S = Object(c.a)(
          regeneratorRuntime.mark(function e(t, n) {
            let c, l, d, f
            return regeneratorRuntime.wrap(function(e) {
              for (;;) {
              { switch ((e.prev = e.next)) {
                case 0:
                  return (
                    t.context ||
                        ((t.context = {
                          isStatic: !0,
                          isDev: !1,
                          isHMR: !1,
                          app: t,
                          store: t.store,
                          payload: n.payload,
                          error: n.error,
                          base: '/wip/danceflood/dist/',
                          env: {}
                        }),
                        n.req && (t.context.req = n.req),
                        n.res && (t.context.res = n.res),
                        n.ssrContext && (t.context.ssrContext = n.ssrContext),
                        (t.context.redirect = function(e, path, n) {
                          if (e) {
                            t.context._redirected = !0
                            let r = Object(o.a)(path)
                            if (
                              (typeof e == 'number' ||
                                (r !== 'undefined' && r !== 'object') ||
                                ((n = path || {}),
                                (path = e),
                                (r = Object(o.a)(path)),
                                (e = 302)),
                              r === 'object' &&
                                (path = t.router.resolve(path).route.fullPath),
                              !/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path))
                            )
                              {throw ((path = U(path, n)),
                              window.location.replace(path),
                              new Error('ERR_REDIRECT'))}
                            t.context.next({ path: path, query: n, status: e })
                          }
                        }),
                        (t.context.nuxtState = window.__NUXT__)),
                    (e.next = 3),
                    Promise.all([k(n.route), k(n.from)])
                  )
                case 3:
                  ;(c = e.sent),
                  (l = Object(r.a)(c, 2)),
                  (d = l[0]),
                  (f = l[1]),
                  n.route && (t.context.route = d),
                  n.from && (t.context.from = f),
                  (t.context.next = n.next),
                  (t.context._redirected = !1),
                  (t.context._errored = !1),
                  (t.context.isHMR = Boolean(n.isHMR)),
                  (t.context.params = t.context.route.params || {}),
                  (t.context.query = t.context.route.query || {})
                case 15:
                case 'end':
                  return e.stop()
              }
              }
            }, e)
          })
        )).apply(this, arguments)
      }
      function P(e, t) {
        return !e.length || t._redirected || t._errored
          ? Promise.resolve()
          : E(e[0], t).then(function() {
              return P(e.slice(1), t)
            })
      }
      function E(e, t) {
        let n
        return (
          ((n =
            e.length === 2
              ? new Promise(function(n) {
                  e(t, function(e, data) {
                    e && t.error(e), n((data = data || {}))
                  })
                })
              : e(t)) &&
            (n instanceof Promise || typeof n.then === 'function')) ||
            (n = Promise.resolve(n)),
          n
        )
      }
      function R(base, e) {
        let path = decodeURI(window.location.pathname)
        return e === 'hash'
          ? window.location.hash.replace(/^#\//, '')
          : (base &&
              path.indexOf(base) === 0 &&
              (path = path.slice(base.length)),
            (path || '/') + window.location.search + window.location.hash)
      }
      function T(e, t) {
        return (function(e) {
          for (var t = new Array(e.length), i = 0; i < e.length; i++)
            {Object(o.a)(e[i]) === 'object' &&
              (t[i] = new RegExp('^(?:' + e[i].pattern + ')$'))}
          return function(n, r) {
            for (
              var path = '',
                data = n || {},
                o = r || {},
                c = o.pretty ? B : encodeURIComponent,
                l = 0;
              l < e.length;
              l++
            ) {
              const d = e[l]
              if (typeof d !== 'string') {
                const f = data[d.name || 'pathMatch']
                  var h = void 0
                if (f == null) {
                  if (d.optional) {
                    d.partial && (path += d.prefix)
                    continue
                  }
                  throw new TypeError('Expected "' + d.name + '" to be defined')
                }
                if (Array.isArray(f)) {
                  if (!d.repeat) {
                  { throw new TypeError(
                    'Expected "' +
                        d.name +
                        '" to not repeat, but received `' +
                        JSON.stringify(f) +
                        '`'
                  )
                  }
                  if (f.length === 0) {
                    if (d.optional) continue
                    throw new TypeError(
                      'Expected "' + d.name + '" to not be empty'
                    )
                  }
                  for (let m = 0; m < f.length; m++) {
                    if (((h = c(f[m])), !t[l].test(h))) {
                    { throw new TypeError(
                      'Expected all "' +
                          d.name +
                          '" to match "' +
                          d.pattern +
                          '", but received `' +
                          JSON.stringify(h) +
                          '`'
                    )
                    }
                    path += (m === 0 ? d.prefix : d.delimiter) + h
                  }
                } else {
                  if (
                    ((h = d.asterisk
                      ? encodeURI(f).replace(/[?#]/g, function(e) {
                          return (
                            '%' +
                            e
                              .charCodeAt(0)
                              .toString(16)
                              .toUpperCase()
                          )
                        })
                      : c(f)),
                    !t[l].test(h))
                  ) {
                  { throw new TypeError(
                    'Expected "' +
                        d.name +
                        '" to match "' +
                        d.pattern +
                        '", but received "' +
                        h +
                        '"'
                  )
                  }
                  path += d.prefix + h
                }
              } else path += d
            }
            return path
          }
        })(
          (function(e, t) {
            let n
              var r = []
              var o = 0
              var c = 0
              var path = ''
              var l = (t && t.delimiter) || '/'
            for (; (n = D.exec(e)) != null; ) {
              const d = n[0]
                var f = n[1]
                var h = n.index
              if (((path += e.slice(c, h)), (c = h + d.length), f)) path += f[1]
              else {
                const m = e[c]
                  var v = n[2]
                  var y = n[3]
                  var x = n[4]
                  var w = n[5]
                  var O = n[6]
                  var _ = n[7]
                path && (r.push(path), (path = ''))
                const j = v != null && m != null && m !== v
                  var k = O === '+' || O === '*';
                var C = O === '?' || O === '*';
                var $ = n[2] || l
                  var pattern = x || w
                r.push({
                  name: y || o++,
                  prefix: v || '',
                  delimiter: $,
                  optional: C,
                  repeat: k,
                  partial: j,
                  asterisk: Boolean(_),
                  pattern: pattern ? A(pattern) : _ ? '.*' : '[^' + L($) + ']+?'
                })
              }
            }
            c < e.length && (path += e.substr(c))
            path && r.push(path)
            return r
          })(e, t)
        )
      }
      function M(e, t) {
        const n = {}
          var r = h({}, e, {}, t)
        for (const o in r) String(e[o]) !== String(t[o]) && (n[o] = !0)
        return n
      }
      function N(e) {
        let t
        if (e.message || typeof e === 'string') t = e.message || e
        else {
        { try {
          t = JSON.stringify(e, null, 2)
        } catch (n) {
          t = '['.concat(e.constructor.name, ']')
        }
        }
        return h({}, e, {
          message: t,
          statusCode:
            e.statusCode || e.status || (e.response && e.response.status) || 500
        })
      }
      ;(window.onNuxtReadyCbs = []),
        (window.onNuxtReady = function(e) {
          window.onNuxtReadyCbs.push(e)
        })
      var D = new RegExp(
        [
          '(\\\\.)',
          '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
        ].join('|'),
        'g'
      )
      function B(e) {
        return encodeURI(e).replace(/[\/?#]/g, function(e) {
          return (
            '%' +
            e
              .charCodeAt(0)
              .toString(16)
              .toUpperCase()
          )
        })
      }
      function L(e) {
        return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
      }
      function A(e) {
        return e.replace(/([=!:$\/()])/g, '\\$1')
      }
      function U(e, t) {
        let n
          var o = e.indexOf('://')
        o !== -1
          ? ((n = e.substring(0, o)), (e = e.substring(o + 3)))
          : e.startsWith('//') && (e = e.substring(2))
        let c
          var l = e.split('/')
          var d = (n ? n + '://' : '//') + l.shift()
          var path = l.filter(Boolean).join('/')
        if ((l = path.split('#')).length === 2) {
          const f = l
            var h = Object(r.a)(f, 2)
          ;(path = h[0]), (c = h[1])
        }
        return (
          (d += path ? '/' + path : ''),
          t &&
            JSON.stringify(t) !== '{}' &&
            (d +=
              (e.split('?').length === 2 ? '&' : '?') +
              (function(e) {
                return Object.keys(e)
                  .sort()
                  .map(function(t) {
                    const n = e[t]
                    return n == null
                      ? ''
                      : Array.isArray(n)
                      ? n
                          .slice()
                          .map(function(e) {
                            return [t, '=', e].join('')
                          })
                          .join('&')
                      : t + '=' + n
                  })
                  .filter(Boolean)
                  .join('&')
              })(t)),
          (d += c ? '#' + c : '')
        )
      }
    },
    104: function(e, t, n) {
      'use strict'
      t.a = function(e, t) {
        return (
          (t = t || {}),
          new Promise(function(n, r) {
            let s = new XMLHttpRequest()
              var o = []
              var u = []
              var i = {}
              var a = function() {
              return {
                ok: ((s.status / 100) | 0) == 2,
                statusText: s.statusText,
                status: s.status,
                url: s.responseURL,
                text: function() {
                  return Promise.resolve(s.responseText)
                },
                json: function() {
                  return Promise.resolve(JSON.parse(s.responseText))
                },
                blob: function() {
                  return Promise.resolve(new Blob([s.response]))
                },
                clone: a,
                headers: {
                  keys: function() {
                    return o
                  },
                  entries: function() {
                    return u
                  },
                  get: function(e) {
                    return i[e.toLowerCase()]
                  },
                  has: function(e) {
                    return e.toLowerCase() in i
                  }
                }
              }
            }
            for (const c in (s.open(t.method || 'get', e, !0),
            (s.onload = function() {
              s
                .getAllResponseHeaders()
                .replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, function(e, t, n) {
                  o.push((t = t.toLowerCase())),
                    u.push([t, n]),
                    (i[t] = i[t] ? i[t] + ',' + n : n)
                }),
                n(a())
            }),
            (s.onerror = r),
            (s.withCredentials = t.credentials == 'include'),
            t.headers)) {
            { s.setRequestHeader(c, t.headers[c]) }
            s.send(t.body || null)
          })
        )
      }
    },
    106: function(e, t, n) {
      'use strict'
      const r = {
        name: 'NoSsr',
        functional: !0,
        props: {
          placeholder: String,
          placeholderTag: { type: String, default: 'div' }
        },
        render: function(e, t) {
          const n = t.parent
            var r = t.slots
            var o = t.props
            var c = r()
            var l = c.default
          void 0 === l && (l = [])
          const d = c.placeholder
          return n._isMounted
            ? l
            : (n.$once('hook:mounted', function() {
                n.$forceUpdate()
              }),
              o.placeholderTag && (o.placeholder || d)
                ? e(
                    o.placeholderTag,
                    { class: ['no-ssr-placeholder'] },
                    o.placeholder || d
                  )
                : l.length > 0
                ? l.map(function() {
                    return e(!1)
                  })
                : e(!1))
        }
      }
      e.exports = r
    },
    108: function(e, t, n) {
      e.exports = n(109)
    },
    109: function(e, t, n) {
      'use strict'
      n.r(t),
        function(e) {
          n(73), n(82), n(17)
          var t = n(33)
        var r = (n(48), n(119), n(6))
            var o =
            (n(85),
            n(121),
            n(18),
            n(11),
            n(19),
            n(53),
            n(89),
            n(124),
            n(136),
            n(138),
            n(0))
        var c = n(104)
            var l = n(70)
            var d = n(1)
            var f = n(25)
            var h = n(60)
          o.a.component(h.a.name, h.a),
            o.a.component('NLink', h.a),
            e.fetch || (e.fetch = c.a)
        let m
            var v
            var y = []
            var x = window.__NUXT__ || {}
          Object.assign(o.a.config, { silent: !0, performance: !1 })
          var w = o.a.config.errorHandler || console.error
          function O(e, t, n) {
            let r = function(component) {
              var e =
                (function(component, e) {
                  if (
                    !component ||
                    !component.options ||
                    !component.options[e]
                  ) {
                  { return {} }
                  const option = component.options[e]
                  if (typeof option === 'function') {
                    for (
                      var t = arguments.length,
                        n = new Array(t > 2 ? t - 2 : 0),
                        r = 2;
                      r < t;
                      r++
                    ) {
                    { n[r - 2] = arguments[r] }
                    return option.apply(void 0, n)
                  }
                  return option
                })(component, 'transition', t, n) || {}
              return typeof e === 'string' ? { name: e } : e
            }
            return e.map(function(e) {
              let t = Object.assign({}, r(e))
              if (n && n.matched.length && n.matched[0].components.default) {
                let o = r(n.matched[0].components.default)
                Object.keys(o)
                  .filter(function(e) {
                    return o[e] && e.toLowerCase().includes('leave')
                  })
                  .forEach(function(e) {
                    t[e] = o[e]
                  })
              }
              return t
            })
          }
          function _(e, t, n) {
            return j.apply(this, arguments)
          }
          function j() {
            return (j = Object(r.a)(
              regeneratorRuntime.mark(function e(t, n, r) {
              let o
                  var c
                  var l
                  var f
                  var h = this
                return regeneratorRuntime.wrap(
                  function(e) {
                    for (;;)
                      {switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (this._pathChanged =
                              Boolean(m.nuxt.err) || n.path !== t.path),
                          (this._queryChanged =
                              JSON.stringify(t.query) !==
                              JSON.stringify(n.query)),
                          (this._diffQuery = this._queryChanged
                            ? Object(d.g)(t.query, n.query)
                            : []),
                          this._pathChanged &&
                              this.$loading.start &&
                              !this.$loading.manual &&
                              this.$loading.start(),
                          (e.prev = 4),
                          (e.next = 7),
                          Object(d.n)(t)
                        )
                      case 7:
                        ;(o = e.sent),
                        !this._pathChanged &&
                              this._queryChanged &&
                              o.some(function(e) {
                                let t = e.options.watchQuery
                                return (
                                  !0 === t ||
                                  (!!Array.isArray(t) &&
                                    t.some(function(e) {
                                      return h._diffQuery[e]
                                    }))
                                )
                              }) &&
                              this.$loading.start &&
                              !this.$loading.manual &&
                              this.$loading.start(),
                        r(),
                        (e.next = 23)
                        break
                      case 12:
                        if (
                          ((e.prev = 12),
                          (e.t0 = e.catch(4)),
                          (c = e.t0 || {}),
                          (l =
                              c.statusCode ||
                              c.status ||
                              (c.response && c.response.status) ||
                              500),
                          (f = c.message || ''),
                          !/^Loading( CSS)? chunk (\d)+ failed\./.test(f))
                        ) {
                          e.next = 20
                          break
                        }
                        return window.location.reload(!0), e.abrupt('return')
                      case 20:
                        this.error({ statusCode: l, message: f }),
                        this.$nuxt.$emit('routeChanged', t, n, c),
                        r()
                      case 23:
                      case 'end':
                        return e.stop()
                    }}
                  },
                  e,
                  this,
                  [[4, 12]]
                )
              })
            )).apply(this, arguments)
          }
          function k(e, t) {
            return x.serverRendered && t && Object(d.a)(e, t), (e._Ctor = e), e
          }
          function C(e) {
            let path = Object(d.d)(e.options.base, e.options.mode)
            return Object(d.c)(
              e.match(path),
              (function() {
                let e = Object(r.a)(
                  regeneratorRuntime.mark(function e(t, n, r, o, c) {
                    var l
                    return regeneratorRuntime.wrap(function(e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (typeof t !== 'function' || t.options) {
                              e.next = 4
                              break
                            }
                            return (e.next = 3), t()
                          case 3:
                            t = e.sent
                          case 4:
                            return (
                              (l = k(
                                Object(d.o)(t),
                                x.data ? x.data[c] : null
                              )),
                              (r.components[o] = l),
                              e.abrupt('return', l)
                            )
                          case 7:
                          case 'end':
                            return e.stop()
                        }
                    }, e)
                  })
                )
                return function(t, n, r, o, c) {
                  return e.apply(this, arguments)
                }
              })()
            )
          }
          function $(e, t, n) {
          let r = this
              var o = []
              var c = !1
            if (
              (void 0 !== n &&
                ((o = []),
                (n = Object(d.o)(n)).options.middleware &&
                  (o = o.concat(n.options.middleware)),
                e.forEach(function(e) {
                  e.options.middleware && (o = o.concat(e.options.middleware))
                })),
              (o = o.map(function(e) {
                return typeof e === 'function'
                  ? e
                  : (typeof l.a[e] !== 'function' &&
                      ((c = !0),
                      r.error({
                        statusCode: 500,
                        message: 'Unknown middleware ' + e
                      })),
                    l.a[e])
              })),
              !c)
            )
              return Object(d.k)(o, t)
          }
          function S(e, t, n) {
            return P.apply(this, arguments)
          }
          function P() {
            return (P = Object(r.a)(
              regeneratorRuntime.mark(function e(t, n, r) {
                var o
              var c
                  var l
                  var h
                  var v
                  var x
                  var w
                  var _
                  var j
                  var k
                  var C
                  var S
                  var P
                  var E
                  var R
                  var T
                  var M = this
                return regeneratorRuntime.wrap(
                  function(e) {
                    for (;;)
                      {switch ((e.prev = e.next)) {
                      case 0:
                        if (
                          !1 !== this._pathChanged ||
                            !1 !== this._queryChanged
                        ) {
                          e.next = 2
                          break
                        }
                        return e.abrupt('return', r())
                      case 2:
                        return (
                          t === n
                            ? (y = [])
                            : ((o = []),
                            (y = Object(d.e)(n, o).map(function(e, i) {
                              return Object(
                                d.b
                              )(n.matched[o[i]].path)(n.params)
                            }))),
                          (c = !1),
                          (l = function(path) {
                            n.path === path.path &&
                                M.$loading.finish &&
                                M.$loading.finish(),
                            n.path !== path.path &&
                                  M.$loading.pause &&
                                  M.$loading.pause(),
                            c || ((c = !0), r(path))
                          }),
                          (e.next = 7),
                          Object(d.p)(m, {
                            route: t,
                            from: n,
                            next: l.bind(this)
                          })
                        )
                      case 7:
                        if (
                          ((this._dateLastError = m.nuxt.dateErr),
                          (this._hadError = Boolean(m.nuxt.err)),
                          (h = []),
                          (v = Object(d.e)(t, h)).length)
                        ) {
                          e.next = 25
                          break
                        }
                        return (e.next = 14), $.call(this, v, m.context)
                      case 14:
                        if (!c) {
                          e.next = 16
                          break
                        }
                        return e.abrupt('return')
                      case 16:
                        return (
                          (e.next = 18),
                          this.loadLayout(
                            'function' === typeof f.a.layout
                              ? f.a.layout(m.context)
                              : f.a.layout
                          )
                        )
                      case 18:
                        return (
                          (x = e.sent),
                          (e.next = 21),
                          $.call(this, v, m.context, x)
                        )
                      case 21:
                        if (!c) {
                          e.next = 23
                          break
                        }
                        return e.abrupt('return')
                      case 23:
                        return (
                          m.context.error({
                            statusCode: 404,
                            message: 'This page could not be found'
                          }),
                          e.abrupt('return', r())
                        )
                      case 25:
                        return (
                          v.forEach(function(e) {
                            e._Ctor &&
                                e._Ctor.options &&
                                ((e.options.asyncData =
                                  e._Ctor.options.asyncData),
                                (e.options.fetch = e._Ctor.options.fetch))
                          }),
                          this.setTransitions(O(v, t, n)),
                          (e.prev = 27),
                          (e.next = 30),
                          $.call(this, v, m.context)
                        )
                      case 30:
                        if (!c) {
                          e.next = 32
                          break
                        }
                        return e.abrupt('return')
                      case 32:
                        if (!m.context._errored) {
                          e.next = 34
                          break
                        }
                        return e.abrupt('return', r())
                      case 34:
                        return (
                          'function' === typeof (w = v[0].options.layout) &&
                              (w = w(m.context)),
                          (e.next = 38),
                          this.loadLayout(w)
                        )
                      case 38:
                        return (
                          (w = e.sent),
                          (e.next = 41),
                          $.call(this, v, m.context, w)
                        )
                      case 41:
                        if (!c) {
                          e.next = 43
                          break
                        }
                        return e.abrupt('return')
                      case 43:
                        if (!m.context._errored) {
                          e.next = 45
                          break
                        }
                        return e.abrupt('return', r())
                      case 45:
                        ;(_ = !0),
                        (e.prev = 46),
                        (j = !0),
                        (k = !1),
                        (C = void 0),
                        (e.prev = 50),
                        (S = v[Symbol.iterator]())
                      case 52:
                        if ((j = (P = S.next()).done)) {
                          e.next = 64
                          break
                        }
                        if (
                          'function' === typeof (E = P.value).options.validate
                        ) {
                          e.next = 56
                          break
                        }
                        return e.abrupt('continue', 61)
                      case 56:
                        return (e.next = 58), E.options.validate(m.context)
                      case 58:
                        if ((_ = e.sent)) {
                          e.next = 61
                          break
                        }
                        return e.abrupt('break', 64)
                      case 61:
                        ;(j = !0), (e.next = 52)
                        break
                      case 64:
                        e.next = 70
                        break
                      case 66:
                        ;(e.prev = 66),
                        (e.t0 = e.catch(50)),
                        (k = !0),
                        (C = e.t0)
                      case 70:
                        ;(e.prev = 70),
                        (e.prev = 71),
                        j || S.return == null || S.return()
                      case 73:
                        if (((e.prev = 73), !k)) {
                          e.next = 76
                          break
                        }
                        throw C
                      case 76:
                        return e.finish(73)
                      case 77:
                        return e.finish(70)
                      case 78:
                        e.next = 84
                        break
                      case 80:
                        return (
                          (e.prev = 80),
                          (e.t1 = e.catch(46)),
                          this.error({
                            statusCode: e.t1.statusCode || '500',
                            message: e.t1.message
                          }),
                          e.abrupt('return', r())
                        )
                      case 84:
                        if (_) {
                          e.next = 87
                          break
                        }
                        return (
                          this.error({
                            statusCode: 404,
                            message: 'This page could not be found'
                          }),
                          e.abrupt('return', r())
                        )
                      case 87:
                        return (
                          (e.next = 89),
                          Promise.all(
                            v.map(function(e, i) {
                              if (
                                ((e._path = Object(d.b)(t.matched[h[i]].path)(
                                  t.params
                                )),
                                (e._dataRefresh = !1),
                                (M._pathChanged && M._queryChanged) ||
                                    e._path !== y[i])
                              )
                                e._dataRefresh = !0
                              else if (!M._pathChanged && M._queryChanged) {
                                var n = e.options.watchQuery
                                !0 === n
                                  ? (e._dataRefresh = !0)
                                  : Array.isArray(n) &&
                                      (e._dataRefresh = n.some(function(e) {
                                        return M._diffQuery[e]
                                      }))
                              }
                              if (
                                !M._hadError &&
                                  M._isMounted &&
                                  !e._dataRefresh
                              )
                                return Promise.resolve()
                              var r = [];
                                  var o =
                                    e.options.asyncData &&
                                    'function' == typeof e.options.asyncData;
                                  var c = Boolean(e.options.fetch);
                                  var l = o && c ? 30 : 45
                              if (o) {
                                var f = Object(d.m)(
                                  e.options.asyncData,
                                  m.context
                                ).then(function(t) {
                                  Object(d.a)(e, t),
                                  M.$loading.increase &&
                                        M.$loading.increase(l)
                                })
                                r.push(f)
                              }
                              if (
                                ((M.$loading.manual =
                                    !1 === e.options.loading),
                                c)
                              ) {
                                var p = e.options.fetch(m.context)
                                  ;(p &&
                                    (p instanceof Promise ||
                                      typeof p.then == 'function')) ||
                                    (p = Promise.resolve(p)),
                                p.then(function(e) {
                                  M.$loading.increase &&
                                        M.$loading.increase(l)
                                }),
                                r.push(p)
                              }
                              return Promise.all(r)
                            })
                          )
                        )
                      case 89:
                        c ||
                            (this.$loading.finish &&
                              !this.$loading.manual &&
                              this.$loading.finish(),
                            r()),
                        (e.next = 106)
                        break
                      case 92:
                        if (
                          ((e.prev = 92),
                          (e.t2 = e.catch(27)),
                          'ERR_REDIRECT' !== (R = e.t2 || {}).message)
                        ) {
                          e.next = 97
                          break
                        }
                        return e.abrupt(
                          'return',
                          this.$nuxt.$emit('routeChanged', t, n, R)
                        )
                      case 97:
                        return (
                          (y = []),
                          Object(d.i)(R),
                          'function' === typeof (T = f.a.layout) &&
                              (T = T(m.context)),
                          (e.next = 103),
                          this.loadLayout(T)
                        )
                      case 103:
                        this.error(R),
                        this.$nuxt.$emit('routeChanged', t, n, R),
                        r()
                      case 106:
                      case 'end':
                        return e.stop()
                    }}
                  },
                  e,
                  this,
                  [[27, 92], [46, 80], [50, 66, 70, 78], [71, , 73, 77]]
                )
              })
            )).apply(this, arguments)
          }
          function E(e, n) {
            Object(d.c)(e, function(e, n, r, c) {
              return (
                Object(t.a)(e) !== 'object' ||
                  e.options ||
                  (((e = o.a.extend(e))._Ctor = e), (r.components[c] = e)),
                e
              )
            })
          }
          function R(e) {
            this._hadError &&
              this._dateLastError === this.$options.nuxt.dateErr &&
              this.error()
            var t = this.$options.nuxt.err
              ? f.a.layout
              : e.matched[0].components.default.options.layout
            typeof t === 'function' && (t = t(m.context)), this.setLayout(t)
          }
          function T(e, t) {
            var n = this
            if (!1 !== this._pathChanged || !1 !== this._queryChanged) {
              var r = []
            var c = Object(d.f)(e, r)
                var l = Object(d.e)(e, r)
              o.a.nextTick(function() {
                c.forEach(function(e, i) {
                  if (
                    e &&
                    !e._isDestroyed &&
                    e.constructor._dataRefresh &&
                    l[i] === e.constructor &&
                    !0 !== e.$vnode.data.keepAlive &&
                    typeof e.constructor.options.data === 'function'
                  ) {
                    var t = e.constructor.options.data.call(e)
                    for (const n in t) o.a.set(e.$data, n, t[n])
                    window.$nuxt.$nextTick(function() {
                      window.$nuxt.$emit('triggerScroll')
                    })
                  }
                }),
                  R.call(n, e)
              })
            }
          }
          function M(e) {
            window.onNuxtReadyCbs.forEach(function(t) {
              'function' === typeof t && t(e)
            }),
              'function' === typeof window._onNuxtLoaded &&
                window._onNuxtLoaded(e),
              v.afterEach(function(t, n) {
                o.a.nextTick(function() {
                  return e.$nuxt.$emit('routeChanged', t, n)
                })
              })
          }
          function N() {
            return (N = Object(r.a)(
              regeneratorRuntime.mark(function e(t) {
                var n, r, c, l, f
                return regeneratorRuntime.wrap(function(e) {
                  for (;;)
                    {switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (m = t.app),
                        (v = t.router),
                        t.store,
                        (e.next = 5),
                        Promise.all(C(v))
                      )
                    case 5:
                      return (
                        (n = e.sent),
                        (r = new o.a(m)),
                        (c = x.layout || 'default'),
                        (e.next = 10),
                        r.loadLayout(c)
                      )
                    case 10:
                      if (
                        (r.setLayout(c),
                        (l = function() {
                          r.$mount('#__nuxt'),
                          v.afterEach(E),
                          v.afterEach(T.bind(r)),
                          o.a.nextTick(function() {
                            M(r)
                          })
                        }),
                        (r.setTransitions = r.$options.nuxt.setTransitions.bind(
                          r
                        )),
                        n.length &&
                            (r.setTransitions(O(n, v.currentRoute)),
                            (y = v.currentRoute.matched.map(function(e) {
                              return Object(d.b)(e.path)(v.currentRoute.params)
                            }))),
                        (r.$loading = {}),
                        x.error && r.error(x.error),
                        v.beforeEach(_.bind(r)),
                        v.beforeEach(S.bind(r)),
                        !x.serverRendered)
                      ) {
                        e.next = 21
                        break
                      }
                      return l(), e.abrupt('return')
                    case 21:
                      ;(f = function() {
                        E(v.currentRoute, v.currentRoute),
                        R.call(r, v.currentRoute),
                        l()
                      }),
                      S.call(r, v.currentRoute, v.currentRoute, function(
                        path
                      ) {
                        if (path) {
                          var e = v.afterEach(function(t, n) {
                            e(), f()
                          })
                          v.push(path, void 0, function(e) {
                            e && w(e)
                          })
                        } else f()
                      })
                    case 23:
                    case 'end':
                      return e.stop()
                  }}
                }, e)
              })
            )).apply(this, arguments)
          }
          Object(f.b)()
            .then(function(e) {
              return N.apply(this, arguments)
            })
            .catch(w)
        }.call(this, n(28))
    },
    139: function(e, t, n) {
      'use strict'
      n.r(t),
        (t.default = function(e) {
          let t = e.app
          e.store
          console.log('checking for mobile', t)
        })
    },
    155: function(e, t, n) {
      'use strict'
      const r = n(55)
      n.n(r).a
    },
    156: function(e, t, n) {
      ;(e.exports = n(26)(!1)).push([
        e.i,
        '.__nuxt-error-page{padding:1rem;background:#f7f8fb;color:#47494e;text-align:center;display:flex;justify-content:center;align-items:center;flex-direction:column;font-family:sans-serif;font-weight:100!important;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased;position:absolute;top:0;left:0;right:0;bottom:0}.__nuxt-error-page .error{max-width:450px}.__nuxt-error-page .title{font-size:1.5rem;margin-top:15px;color:#47494e;margin-bottom:8px}.__nuxt-error-page .description{color:#7f828b;line-height:21px;margin-bottom:10px}.__nuxt-error-page a{color:#7f828b!important;text-decoration:none}.__nuxt-error-page .logo{position:fixed;left:12px;bottom:12px}',
        ''
      ])
    },
    157: function(e, t, n) {
      'use strict'
      const r = n(56)
      n.n(r).a
    },
    158: function(e, t, n) {
      ;(e.exports = n(26)(!1)).push([
        e.i,
        '.nuxt-progress{position:fixed;top:0;left:0;right:0;height:2px;width:0;opacity:1;transition:width .1s,opacity .4s;background-color:#fff;z-index:999999}.nuxt-progress.nuxt-progress-notransition{transition:none}.nuxt-progress-failed{background-color:red}',
        ''
      ])
    },
    159: function(e, t, n) {
      let content = n(160)
      typeof content === 'string' && (content = [[e.i, content, '']]),
        content.locals && (e.exports = content.locals)
      ;(0, n(27).default)('5ff0c5d0', content, !0, { sourceMap: !1 })
    },
    160: function(e, t, n) {
      ;(t = e.exports = n(26)(!1)).push([
        e.i,
        '@import url(https://fonts.googleapis.com/css?family=IBM+Plex+Sans:200,400,700&display=swap);',
        ''
      ]),
        t.push([
          e.i,
          'a{text-decoration:none;color:inherit}:root{--main-bg-color:#ddd;--main-fg-color:#00a6f0;--main-fg-color-light:#85c6e5;--main-title-font:"IBM Plex Sans"}*{box-sizing:border-box}body,html{margin:0;padding:0;height:100%;width:100%}h1{font-weight:700;font-size:2rem;margin:0}h1,h2{font-family:IBM Plex Sans,sans-serif;color:#00a6f0;color:var(--main-fg-color)}h2{font-weight:200;font-size:1.5rem}h3{font-weight:200;font-size:1.2rem}a,h3{font-family:IBM Plex Sans,sans-serif;color:#00a6f0;color:var(--main-fg-color)}a{font-weight:700;transition:all .2s}a:hover{text-decoration:underline}b{font-weight:400}b,p{font-family:IBM Plex Sans,sans-serif;color:#00a6f0;color:var(--main-fg-color);font-size:1rem}p{font-weight:200;margin:0}.tree-menu{border-bottom:.5px solid #00a6f0;border-bottom:.5px solid var(--main-fg-color);padding-top:.2em;padding-bottom:.3em;color:#00a6f0;color:var(--main-fg-color);font-family:IBM Plex Sans,sans-serif;font-family:var(--main-title-font),sans-serif;transition:background .2s;font-weight:400;text-transform:uppercase;font-size:.85em}.tree-menu:hover:not(.tree-menu-active){background:#85c6e5;background:var(--main-fg-color-light)}.tree-menu-active{background:#00a6f0;background:var(--main-fg-color);color:#ddd;color:var(--main-bg-color)}.tree-menu-active a{color:#fff}',
          ''
        ])
    },
    161: function(e, t, n) {
      'use strict'
      const r = n(57)
      n.n(r).a
    },
    162: function(e, t, n) {
      ;(e.exports = n(26)(!1)).push([
        e.i,
        '#header-panel[data-v-21ea6eb6]{display:flex;flex-direction:row;position:relative;width:100%;justify-content:space-between}#header-panel[data-v-21ea6eb6],.header-button[data-v-21ea6eb6]{height:100%;align-items:center}.header-button[data-v-21ea6eb6]{display:inline-flex;justify-content:center;padding:0 1em;background:var(--main-fg-color);color:#fff;font-family:var(--main-title-font),sans-serif;transition:all .2s;font-weight:700;text-transform:uppercase;font-size:.85em;width:10vh}.header-button[data-v-21ea6eb6]:hover{width:12vh}.header-text[data-v-21ea6eb6]{display:inline-flex;height:100%;align-items:center;padding-right:2em;font-size:.85em;font-weight:400;text-transform:uppercase}',
        ''
      ])
    },
    163: function(e, t, n) {
      'use strict'
      const r = n(58)
      n.n(r).a
    },
    164: function(e, t, n) {
      ;(e.exports = n(26)(!1)).push([
        e.i,
        '.theSideBar[data-v-10e2b139]{display:block}.sidebarPanel[data-v-10e2b139],.theSideBar[data-v-10e2b139]{position:relative;height:100%;width:100%}.sidebarPanel[data-v-10e2b139]{background:var(--main-bg-color);border-right:2px solid var(--main-fg-color)}#toggleButton[data-v-10e2b139]{position:absolute;top:5px;left:5px;z-index:2}@media only screen and (max-width:600px){.sidebarPanel[data-v-10e2b139]{border:none}}',
        ''
      ])
    },
    165: function(e, t, n) {
      'use strict'
      const r = n(59)
      n.n(r).a
    },
    166: function(e, t, n) {
      ;(e.exports = n(26)(!1)).push([
        e.i,
        '.sidebarSlide-enter-active[data-v-11bb9c51],.sidebarSlide-leave-active[data-v-11bb9c51]{transition:all .5s}.sidebarSlide-enter[data-v-11bb9c51],.sidebarSlide-leave-to[data-v-11bb9c51]{opacity:0;transform:translateX(-200px)}.flip-list-move[data-v-11bb9c51]{transition:transform 1s}#app-container[data-v-11bb9c51]{display:grid;grid-template-rows:2rem auto;position:relative;height:100vh;width:100vw;background:var(--main-bg-color);transition:all 1s}#page-header[data-v-11bb9c51]{box-sizing:border-box;grid-row-start:1;display:block;border-bottom:2px solid var(--main-fg-color)}#page-body[data-v-11bb9c51],#page-header[data-v-11bb9c51]{height:100%;width:100%;overflow:hidden;position:relative}#page-body[data-v-11bb9c51]{display:flex;flex-direction:row;grid-row-start:2}.sidebar-placeholder[data-v-11bb9c51]{position:relative;overflow:visible;top:0;left:0;width:300px;flex:none;z-index:2}.sidebar[data-v-11bb9c51],.sidebar-placeholder[data-v-11bb9c51]{margin:0;height:100%;transition:all 1s}.sidebar[data-v-11bb9c51]{position:absolute;width:100%;grid-row-start:2}.collapsed[data-v-11bb9c51]{width:0!important}#main-area[data-v-11bb9c51]{flex-basis:shrink;width:100%;position:relative;overflow:hidden;margin:0}@media only screen and (max-width:600px){#page-body[data-v-11bb9c51],.sidebar-placeholder[data-v-11bb9c51]{height:100%;width:100%;position:absolute}#main-area[data-v-11bb9c51]{position:relative;height:100%;width:100%;overflow-y:visible}}',
        ''
      ])
    },
    167: function(e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'state', function() {
          return r
        }),
        n.d(t, 'mutations', function() {
          return o
        }),
        n.d(t, 'actions', function() {
          return c
        })
      var r = function() {
        return {
          sidebarOpen: !0,
          contents: null,
          isMobile: !1,
          currentSection: ''
        }
      };
      var o = {
        toggleSidebar: function(e) {
          e.sidebarOpen = !e.sidebarOpen
        },
        loadContents: function(e, t) {
          e.contents = t
        },
        setMobile: function(e, t) {
          e.isMobile = t
        },
        setCurrentSection: function(e, t) {
          console.log('received', t), (e.currentSection = t)
        }
      };
      var c = {
        toggleSidebar: function(e) {
          ;(0, e.commit)('toggleSidebar')
        },
        loadContents: function(e, t) {
          ;(0, e.commit)('loadContents', t)
        }
      }
    },
    184: function(e, t, n) {
      'use strict'
      n.r(t)
      const r = {
        nodes: [
          { label: 'about', link: '#about' },
          { label: 'content', link: '#content' },
          { label: 'boat', link: '#boat' },
          {
            label: 'coreography',
            link: '#coreography',
            nodes: [
              { label: 'movements', link: '#movements' },
              { label: 'strategies', link: '#strategies' },
              { label: 'light system', link: '#lightsystem' },
              { label: 'control', link: '#control' }
            ]
          },
          { label: 'dance', link: '#dance' }
        ]
      }
      t.default = function(e) {
        const t = e.store
        console.log('loading data'), t.dispatch('loadContents', r)
      }
    },
    25: function(e, t, n) {
      'use strict'
      n(22), n(17), n(18), n(19), n(11)
      const r = n(5)
        var o = (n(48), n(6))
        var c = (n(53), n(0))
        var l = n(105)
        var d = n.n(l)
        var f = n(71)
        var h = n(1)
        var m = function() {
        return Object(h.j)(n.e(3).then(n.bind(null, 191)))
      };
      var v = function() {
        return Object(h.j)(n.e(2).then(n.bind(null, 192)))
      }
      c.a.use(f.a),
        'scrollRestoration' in window.history &&
          ((window.history.scrollRestoration = 'manual'),
          window.addEventListener('beforeunload', function() {
            window.history.scrollRestoration = 'auto'
          }),
          window.addEventListener('load', function() {
            window.history.scrollRestoration = 'manual'
          }))
      const y = function(e, t, n) {
        let r = !1
        return (
          e.matched.length < 2 &&
          e.matched.every(function(e) {
            return !1 !== e.components.default.options.scrollToTop
          })
            ? (r = { x: 0, y: 0 })
            : e.matched.some(function(e) {
                return e.components.default.options.scrollToTop
              }) && (r = { x: 0, y: 0 }),
          n && (r = n),
          new Promise(function(t) {
            window.$nuxt.$once('triggerScroll', function() {
              if (e.hash) {
                let n = e.hash
                void 0 !== window.CSS &&
                  void 0 !== window.CSS.escape &&
                  (n = '#' + window.CSS.escape(n.substr(1)))
                try {
                  document.querySelector(n) && (r = { selector: n })
                } catch (e) {
                  console.warn(
                    'Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).'
                  )
                }
              }
              t(r)
            })
          })
        )
      }
      const x = n(106)
      function w(object, e) {
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
      let O = (function(e) {
        for (let i = 1; i < arguments.length; i++) {
          var source = arguments[i] != null ? arguments[i] : {}
          i % 2
            ? w(source, !0).forEach(function(t) {
              Object(r.a)(e, t, source[t])
            })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(
                e,
                Object.getOwnPropertyDescriptors(source)
              )
              : w(source).forEach(function(t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(source, t)
                )
              })
        }
        return e
      })({}, n.n(x).a, { name: 'NoSsr' })
        var _ = {
        name: 'NuxtChild',
        functional: !0,
        props: {
          nuxtChildKey: { type: String, default: '' },
          keepAlive: Boolean,
          keepAliveProps: { type: Object, default: void 0 }
        },
        render: function(e, t) {
          let n = t.parent;
              var data = t.data;
              var r = t.props
          data.nuxtChild = !0
          for (
            var o = n,
              c = n.$nuxt.nuxt.transitions,
              l = n.$nuxt.nuxt.defaultTransition,
              d = 0;
            n;

          )
            {n.$vnode && n.$vnode.data.nuxtChild && d++, (n = n.$parent)}
          data.nuxtChildDepth = d
          var f = c[d] || l;
              var h = {}
          j.forEach(function(e) {
            void 0 !== f[e] && (h[e] = f[e])
          })
          var m = {}
          k.forEach(function(e) {
            typeof f[e] == 'function' && (m[e] = f[e].bind(o))
          })
          var v = m.beforeEnter
          m.beforeEnter = function(e) {
            if (
              (window.$nuxt.$nextTick(function() {
                window.$nuxt.$emit('triggerScroll')
              }),
              v)
            )
              return v.call(o, e)
          }
          let y = [e('router-view', data)]
          return (
            r.keepAlive &&
              (y = [e('keep-alive', { props: r.keepAliveProps }, y)]),
            e('transition', { props: h, on: m }, y)
          )
        }
      };
      var j = [
        'name',
        'mode',
        'appear',
        'css',
        'type',
        'duration',
        'enterClass',
        'leaveClass',
        'appearClass',
        'enterActiveClass',
        'enterActiveClass',
        'leaveActiveClass',
        'appearActiveClass',
        'enterToClass',
        'leaveToClass',
        'appearToClass'
      ];
      var k = [
        'beforeEnter',
        'enter',
        'afterEnter',
        'enterCancelled',
        'beforeLeave',
        'leave',
        'afterLeave',
        'leaveCancelled',
        'beforeAppear',
        'appear',
        'afterAppear',
        'appearCancelled'
      ];
      let C = {
        name: 'NuxtError',
        props: { error: { type: Object, default: null } },
        head: function() {
          return {
            title: this.message,
            meta: [
              {
                name: 'viewport',
                content:
                  'width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no'
              }
            ]
          }
        },
        computed: {
          statusCode: function() {
            return (this.error && this.error.statusCode) || 500
          },
          message: function() {
            return this.error.message || 'Error'
          }
        }
      };
      var $ = (n(155), n(10))
        var S = Object($.a)(
        C,
        function() {
          var e = this;
              var t = e.$createElement;
              var n = e._self._c || t
          return n('div', { staticClass: '__nuxt-error-page' }, [
            n('div', { staticClass: 'error' }, [
              n(
                'svg',
                {
                  attrs: {
                    xmlns: 'http://www.w3.org/2000/svg',
                    width: '90',
                    height: '90',
                    fill: '#DBE1EC',
                    viewBox: '0 0 48 48'
                  }
                },
                [
                  n('path', {
                    attrs: {
                      d:
                        'M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z'
                    }
                  })
                ]
              ),
              e._v(' '),
              n('div', { staticClass: 'title' }, [e._v(e._s(e.message))]),
              e._v(' '),
              e.statusCode === 404
                ? n(
                  'p',
                    { staticClass: 'description' },
                  [
                      n(
                        'NuxtLink',
                        { staticClass: 'error-link', attrs: { to: '/' } },
                      [e._v('Back to the home page')]
                    )
                    ],
                    1
                )
                : e._e(),
              e._v(' '),
              e._m(0)
            ])
          ])
        },
        [
          function() {
            var e = this.$createElement;
                var t = this._self._c || e
            return t('div', { staticClass: 'logo' }, [
              t(
                'a',
                {
                  attrs: {
                    href: 'https://nuxtjs.org',
                    target: '_blank',
                    rel: 'noopener'
                  }
                },
                [this._v('Nuxt.js')]
              )
            ])
          }
        ],
        !1,
        null,
        null,
        null
      ).exports
        var P = (n(54), n(41))
        var E = {
        name: 'Nuxt',
        components: { NuxtChild: _, NuxtError: S },
        props: {
          nuxtChildKey: { type: String, default: void 0 },
          keepAlive: Boolean,
          keepAliveProps: { type: Object, default: void 0 },
          name: { type: String, default: 'default' }
        },
        computed: {
          routerViewKey: function() {
            if (
              void 0 !== this.nuxtChildKey ||
                this.$route.matched.length > 1
            )
              {return (
                  this.nuxtChildKey ||
                  Object(h.b)(this.$route.matched[0].path)(this.$route.params)
                )}
            let e = Object(P.a)(this.$route.matched, 1)[0]
            if (!e) return this.$route.path
            var t = e.components.default
            if (t && t.options) {
              var n = t.options
              if (n.key)
                return typeof n.key == 'function' ? n.key(this.$route) : n.key
            }
            return /\/$/.test(e.path)
              ? this.$route.path
              : this.$route.path.replace(/\/$/, '')
          }
        },
        beforeCreate: function() {
          c.a.util.defineReactive(this, 'nuxt', this.$root.$options.nuxt)
        },
        render: function(e) {
          return this.nuxt.err
            ? e('NuxtError', { props: { error: this.nuxt.err } })
            : e('NuxtChild', { key: this.routerViewKey, props: this.$props })
        }
      };
      let R = {
        name: 'NuxtLoading',
        data: function() {
          return {
            percent: 0,
            show: !1,
            canSucceed: !0,
            reversed: !1,
            skipTimerCount: 0,
            rtl: !1,
            throttle: 200,
            duration: 5e3,
            continuous: !1
          }
        },
        computed: {
          left: function() {
            return (
              !(!this.continuous && !this.rtl) &&
              (this.rtl
                ? this.reversed
                  ? '0px'
                  : 'auto'
                : this.reversed
                ? 'auto'
                : '0px')
            )
          }
        },
        beforeDestroy: function() {
          this.clear()
        },
        methods: {
          clear: function() {
            clearInterval(this._timer),
            clearTimeout(this._throttle),
              (this._timer = null)
          },
          start: function() {
            var e = this
            return (
              this.clear(),
              (this.percent = 0),
              (this.reversed = !1),
              (this.skipTimerCount = 0),
              (this.canSucceed = !0),
              this.throttle
                ? (this._throttle = setTimeout(function() {
                  return e.startTimer()
                  }, this.throttle))
                : this.startTimer(),
              this
            )
          },
          set: function(e) {
            return (
              (this.show = !0),
              (this.canSucceed = !0),
              (this.percent = Math.min(100, Math.max(0, Math.floor(e)))),
              this
            )
          },
          get: function() {
            return this.percent
          },
          increase: function(e) {
            return (
              (this.percent = Math.min(100, Math.floor(this.percent + e))),
              this
            )
          },
          decrease: function(e) {
            return (
              (this.percent = Math.max(0, Math.floor(this.percent - e))), this
            )
          },
          pause: function() {
            return clearInterval(this._timer), this
          },
          resume: function() {
            return this.startTimer(), this
          },
          finish: function() {
            return (this.percent = this.reversed ? 0 : 100), this.hide(), this
          },
          hide: function() {
            var e = this
            return (
              this.clear(),
              setTimeout(function() {
                ;(e.show = !1),
                  e.$nextTick(function() {
                    ;(e.percent = 0), (e.reversed = !1)
                })
              }, 500),
              this
            )
          },
          fail: function() {
            return (this.canSucceed = !1), this
          },
          startTimer: function() {
            var e = this
            this.show || (this.show = !0),
              void 0 === this._cut &&
                (this._cut = 1e4 / Math.floor(this.duration)),
              (this._timer = setInterval(function() {
              e.skipTimerCount > 0
                  ? e.skipTimerCount--
                  : (e.reversed ? e.decrease(e._cut) : e.increase(e._cut),
                e.continuous &&
                      (e.percent >= 100
                        ? ((e.skipTimerCount = 1), (e.reversed = !e.reversed))
                        : e.percent <= 0 &&
                          ((e.skipTimerCount = 1), (e.reversed = !e.reversed))))
              }, 100))
          }
        },
        render: function(e) {
          let t = e(!1)
          return (
            this.show &&
              (t = e('div', {
                staticClass: 'nuxt-progress',
                class: {
                  'nuxt-progress-notransition': this.skipTimerCount > 0,
                  'nuxt-progress-failed': !this.canSucceed
                },
                style: { width: this.percent + '%', left: this.left }
              })),
            t
          )
        }
      };
      var T =
        (n(157), Object($.a)(R, void 0, void 0, !1, null, null, null).exports)
      let M = (n(159), n(13))
      function N(object, e) {
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
      const D = {
        computed: (function(e) {
          for (let i = 1; i < arguments.length; i++) {
            var source = arguments[i] != null ? arguments[i] : {}
            i % 2
              ? N(source, !0).forEach(function(t) {
                Object(r.a)(e, t, source[t])
              })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                  e,
                  Object.getOwnPropertyDescriptors(source)
                )
              : N(source).forEach(function(t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(source, t)
                  )
                })
          }
          return e
        })({}, Object(M.b)(['contents', 'sidebarOpen'])),
        methods: {
          toggleBar: function() {
            console.log('toggle'), this.$store.commit('toggleSidebar')
          }
        }
      };
      let B =
        (n(161),
        Object($.a)(
          D,
          function() {
            let e = this.$createElement
            var t = this._self._c || e
            return t('div', [
              t('div', { attrs: { id: 'header-panel' } }, [
                t(
                  'div',
                  {
                    staticClass: 'header-button',
                    on: { click: this.toggleBar }
                  },
                  [this._v('\n      index\n    ')]
                ),
                this._v(' '),
                this._m(0)
              ])
            ])
          },
          [
            function() {
              let e = this.$createElement
              var t = this._self._c || e
              return t('p', { staticClass: 'header-text' }, [
                this._v('\n      danceFlood is a part of the  \n      '),
                t(
                  'a',
                  { attrs: { href: 'http://roboat.org', target: 'blank' } },
                  [this._v('roboat project')]
                ),
                this._v(' '),
                t('b', [this._v(' | ')]),
                this._v('\n      MIT '),
                t(
                  'a',
                  {
                    attrs: {
                      href: 'http://senseable.mit.edu',
                      target: 'blank'
                    }
                  },
                  [this._v('\n        senseable city lab\n      ')]
                ),
                this._v('\n       2019\n    ')
              ])
            }
          ],
          !1,
          null,
          '21ea6eb6',
          null
        ).exports)
      function L(object, e) {
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
      const A = {
        name: 'TreeMenu',
        props: ['label', 'nodes', 'depth', 'link'],
        computed: (function(e) {
          for (let i = 1; i < arguments.length; i++) {
            var source = arguments[i] != null ? arguments[i] : {}
            i % 2
              ? L(source, !0).forEach(function(t) {
                  Object(r.a)(e, t, source[t])
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(
                  e,
                  Object.getOwnPropertyDescriptors(source)
                )
              : L(source).forEach(function(t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(source, t)
                  )
                })
          }
          return e
        })({}, Object(M.b)(['isMobile', 'currentSection']), {
          indent: function() {
            return { transform: 'translate('.concat(10 * this.depth, 'px)') }
          }
        }),
        methods: {
          setSelection: function(data) {
            this.isMobile && this.$store.commit('toggleSidebar')
          }
        }
      }
      function U(object, e) {
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
      const z = {
        components: {
          TreeMenu: Object($.a)(
            A,
            function() {
              const e = this
                var t = e.$createElement
                var n = e._self._c || t
              return n(
                'div',
                [
                  e.label
                    ? n(
                        'div',
                        {
                          staticClass: 'tree-menu',
                          class: {
                            'tree-menu-active': e.label === e.currentSection
                          }
                        },
                        [
                          n('div', [
                            n('a', { attrs: { href: '' + e.link } }, [
                              n(
                                'div',
                                {
                                  style: e.indent,
                                  on: {
                                    click: function(t) {
                                      return e.setSelection(e.label)
                                    }
                                  }
                                },
                                [
                                  e._v(
                                    '\n          ' +
                                      e._s(e.label) +
                                      '\n        '
                                  )
                                ]
                              )
                            ])
                          ])
                        ]
                      )
                    : e._e(),
                  e._v(' '),
                  e._l(e.nodes, function(t) {
                    return n('tree-menu', {
                      key: t.label,
                      attrs: {
                        nodes: t.nodes,
                        label: t.label,
                        link: t.link,
                        depth: e.depth + 1
                      }
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
        },
        computed: (function(e) {
          for (let i = 1; i < arguments.length; i++) {
            var source = arguments[i] != null ? arguments[i] : {}
            i % 2
              ? U(source, !0).forEach(function(t) {
                  Object(r.a)(e, t, source[t])
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(
                  e,
                  Object.getOwnPropertyDescriptors(source)
                )
              : U(source).forEach(function(t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(source, t)
                  )
                })
          }
          return e
        })({}, Object(M.b)(['contents', 'sidebarOpen', 'currentSection'])),
        watch: { sidebarOpen: function() {} },
        methods: {
          toggleBar: function() {
            console.log('toggle'), this.$store.commit('toggleSidebar')
          }
        }
      }
      n(163)
      function I(object, e) {
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
      const Q = {
        components: {
          TheSidebar: Object($.a)(
            z,
            function() {
              let e = this.$createElement
                  var t = this._self._c || e
              return t('div', { staticClass: 'theSideBar' }, [
                t(
                  'div',
                  { ref: 'sideBar', staticClass: 'sidebarPanel' },
                  [
                    this.contents
                      ? t('tree-menu', {
                        staticClass: 'tree-menu-element',
                        attrs: {
                          label: this.contents.label,
                          link: this.contents.link,
                          nodes: this.contents.nodes,
                          depth: 0
                        }
                      })
                      : this._e()
                  ],
                  1
                )
              ])
            },
            [],
            !1,
            null,
            '10e2b139',
            null
          ).exports,
          TheHeader: B
        },
        computed: (function(e) {
          for (let i = 1; i < arguments.length; i++) {
            var source = arguments[i] != null ? arguments[i] : {}
            i % 2
              ? I(source, !0).forEach(function(t) {
                Object(r.a)(e, t, source[t])
              })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                  e,
                  Object.getOwnPropertyDescriptors(source)
                )
              : I(source).forEach(function(t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(source, t)
                  )
                })
          }
          return e
        })({}, Object(M.b)(['isMobile', 'sidebarOpen'])),
        middleware: ['dataLoad'],
        watch: {
          isMobile: function() {
            console.log('is mobile:', this.isMobile)
          }
        },
        mounted: function() {
          let e = this
          this.$mobileCheck(this.$store),
          (window.onresize = function() {
            console.log('resize'), e.$mobileCheck(e.$store)
          })
        }
      };
      let H =
        (n(165),
        {
          _default: Object($.a)(
            Q,
            function() {
              let e = this.$createElement;
                  var t = this._self._c || e
              return t('div', [
                t(
                  'div',
                  { attrs: { id: 'app-container' } },
                  [
                    t('the-header', { attrs: { id: 'page-header' } }),
                    this._v(' '),
                    t(
                      'div',
                      { ref: 'pageBody', attrs: { id: 'page-body' } },
                      [
                        t(
                          'div',
                          {
                            staticClass: 'sidebar-placeholder',
                            class: { collapsed: !this.sidebarOpen }
                          },
                          [
                            t(
                              'transition',
                              {
                                attrs: {
                                  name: 'sidebarSlide',
                                  mode: 'in-out'
                                }
                              },
                              [
                                this.sidebarOpen
                                  ? t('the-sidebar', {
                                      staticClass: 'sidebar'
                                    })
                                  : this._e()
                              ],
                              1
                            )
                          ],
                          1
                        ),
                        this._v(' '),
                        t('nuxt', { attrs: { id: 'main-area' } })
                      ],
                      1
                    )
                  ],
                  1
                )
              ])
            },
            [],
            !1,
            null,
            '11bb9c51',
            null
          ).exports
        })
      var V = {
        head: {
          title: 'danceflood',
          meta: [
            { charset: 'utf-8' },
            {
              name: 'viewport',
              content: 'width=device-width, initial-scale=1'
            },
            {
              hid: 'description',
              name: 'description',
              content: 'My first-class Nuxt.js project'
            },
            {
              hid: 'mobile-web-app-capable',
              name: 'mobile-web-app-capable',
              content: 'yes'
            },
            {
              hid: 'apple-mobile-web-app-title',
              name: 'apple-mobile-web-app-title',
              content: 'danceflood'
            },
            { hid: 'author', name: 'author', content: 'pileoni' },
            { hid: 'theme-color', name: 'theme-color', content: '#fff' },
            {
              hid: 'og:type',
              name: 'og:type',
              property: 'og:type',
              content: 'website'
            },
            {
              hid: 'og:title',
              name: 'og:title',
              property: 'og:title',
              content: 'danceflood'
            },
            {
              hid: 'og:site_name',
              name: 'og:site_name',
              property: 'og:site_name',
              content: 'danceflood'
            },
            {
              hid: 'og:description',
              name: 'og:description',
              property: 'og:description',
              content: 'My first-class Nuxt.js project'
            }
          ],
          link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            {
              rel: 'manifest',
              href: '/wip/danceflood/dist/_nuxt/manifest.3bc56c6c.json'
            },
            {
              rel: 'shortcut icon',
              href: '/wip/danceflood/dist/_nuxt/icons/icon_64.9mld2VBMsQ$.png'
            },
            {
              rel: 'apple-touch-icon',
              href:
                  '/wip/danceflood/dist/_nuxt/icons/icon_512.9mld2VBMsQ$.png',
              sizes: '512x512'
            }
          ],
          style: [],
          script: [],
          htmlAttrs: { lang: 'en' }
        },
        render: function(e, t) {
          let n = e('NuxtLoading', { ref: 'loading' })
              var r = e(this.layout || 'nuxt')
              var o = e(
            'div',
            { domProps: { id: '__layout' }, key: this.layoutName },
            [r]
          );
          let c = e(
            'transition',
            {
              props: { name: 'layout', mode: 'out-in' },
              on: {
                beforeEnter: function(e) {
                  window.$nuxt.$nextTick(function() {
                    window.$nuxt.$emit('triggerScroll')
                  })
                }
              }
            },
            [o]
          )
          return e('div', { domProps: { id: '__nuxt' } }, [n, c])
        },
        data: function() {
          return { isOnline: !0, layout: null, layoutName: '' }
        },
        beforeCreate: function() {
          c.a.util.defineReactive(this, 'nuxt', this.$options.nuxt)
        },
        created: function() {
          ;(c.a.prototype.$nuxt = this),
          (window.$nuxt = this),
          this.refreshOnlineStatus(),
          window.addEventListener('online', this.refreshOnlineStatus),
          window.addEventListener('offline', this.refreshOnlineStatus),
          (this.error = this.nuxt.error)
        },
        mounted: function() {
          this.$loading = this.$refs.loading
        },
        watch: { 'nuxt.err': 'errorChanged' },
        computed: {
          isOffline: function() {
            return !this.isOnline
          }
        },
        methods: {
          refreshOnlineStatus: function() {
            void 0 === window.navigator.onLine
              ? (this.isOnline = !0)
              : (this.isOnline = window.navigator.onLine)
          },
          errorChanged: function() {
            this.nuxt.err &&
              this.$loading &&
              (this.$loading.fail && this.$loading.fail(),
              this.$loading.finish && this.$loading.finish())
          },
          setLayout: function(e) {
            return (
              (e && H['_' + e]) || (e = 'default'),
              (this.layoutName = e),
              (this.layout = H['_' + e]),
              this.layout
            )
          },
          loadLayout: function(e) {
            return (
              (e && H['_' + e]) || (e = 'default'),
              Promise.resolve(H['_' + e])
            )
          }
        },
        components: { NuxtLoading: T }
      }
      n(85), n(94)
      c.a.use(M.a)
      let J = {}
      ;(J = (function(e, t) {
        if ((e = e.default || e).commit) {
        { throw new Error(
          '[nuxt] '.concat(
            t,
            ' should export a method that returns a Vuex instance.'
          )
        )
        }
        return typeof e !== 'function' && (e = Object.assign({}, e)), K(e, t)
      })(n(167), 'store/index.js')).modules = J.modules || {}
      const F =
        J instanceof Function
          ? J
          : function() {
              return new M.a.Store(Object.assign({ strict: !1 }, J))
            }
      function K(e, t) {
        if (e.state && typeof e.state !== 'function') {
          console.warn(
            "'state' should be a method that returns an object in ".concat(t)
          )
          const n = Object.assign({}, e.state)
          e = Object.assign({}, e, {
            state: function() {
              return n
            }
          })
        }
        return e
      }
      const X = n(72)
        var W = n.n(X)
        var G = function(e, t) {
        return Y.apply(this, arguments)
      }
      function Y() {
        return (Y = Object(o.a)(
          regeneratorRuntime.mark(function e(t, n) {
            let r
            return regeneratorRuntime.wrap(function(e) {
              for (;;) {
              { switch ((e.prev = e.next)) {
                case 0:
                  n(
                    (r = {
                      accessibleIcons: !0,
                      iconProperty: '$icon',
                      icons: {
                        64: '/wip/danceflood/dist/_nuxt/icons/icon_64.9mld2VBMsQ$.png',
                        120: '/wip/danceflood/dist/_nuxt/icons/icon_120.9mld2VBMsQ$.png',
                        144: '/wip/danceflood/dist/_nuxt/icons/icon_144.9mld2VBMsQ$.png',
                        152: '/wip/danceflood/dist/_nuxt/icons/icon_152.9mld2VBMsQ$.png',
                        192: '/wip/danceflood/dist/_nuxt/icons/icon_192.9mld2VBMsQ$.png',
                        384: '/wip/danceflood/dist/_nuxt/icons/icon_384.9mld2VBMsQ$.png',
                        512: '/wip/danceflood/dist/_nuxt/icons/icon_512.9mld2VBMsQ$.png'
                      }
                    }).iconProperty.replace('$', ''),
                    Z(r.icons)
                  )
                case 2:
                case 'end':
                  return e.stop()
              }
              }
            }, e)
          })
        )).apply(this, arguments)
      }
      for (
        var Z = function(e) {
            return function(t) {
              return e[t] || ''
            }
          },
          ee = (n(82), n(107)),
          te = n.n(ee),
          ne = {
            setHeader: function(e, t) {
              const n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : 'common'
              var r = !0
                var o = !1
                var c = void 0
              try {
                for (
                  var l, d = (Array.isArray(n) ? n : [n])[Symbol.iterator]();
                  !(r = (l = d.next()).done);
                  r = !0
                ) {
                  const f = l.value
                  if (!t) return void delete this.defaults.headers[f][e]
                  this.defaults.headers[f][e] = t
                }
              } catch (e) {
                ;(o = !0), (c = e)
              } finally {
                try {
                  r || d.return == null || d.return()
                } finally {
                  if (o) throw c
                }
              }
            },
            setToken: function(e, t) {
              const n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : 'common'
              let r = e ? (t ? t + ' ' : '') + e : null
              this.setHeader('Authorization', r, n)
            },
            onRequest: function(e) {
              this.interceptors.request.use(function(t) {
                return e(t) || t
              })
            },
            onResponse: function(e) {
              this.interceptors.response.use(function(t) {
                return e(t) || t
              })
            },
            onRequestError: function(e) {
              this.interceptors.request.use(void 0, function(t) {
                return e(t) || Promise.reject(t)
              })
            },
            onResponseError: function(e) {
              this.interceptors.response.use(void 0, function(t) {
                return e(t) || Promise.reject(t)
              })
            },
            onError: function(e) {
              this.onRequestError(e), this.onResponseError(e)
            }
          },
          re = function() {
            const e = ie[oe]
            ne['$' + e] = function() {
              return this[e].apply(this, arguments).then(function(e) {
                return e && e.data
              })
            }
          },
          oe = 0,
          ie = [
            'request',
            'delete',
            'get',
            'head',
            'options',
            'post',
            'put',
            'patch'
          ];
        oe < ie.length;
        oe++
      ) {
      { re() }
      const ae = function(e, t) {
        const n = {
          baseURL: 'http://localhost:3000/',
          headers: {
            common: { Accept: 'application/json, text/plain, */*' },
            delete: {},
            get: {},
            head: {},
            post: {},
            put: {},
            patch: {}
          }
        }
        ;(n.headers.common =
          e.req && e.req.headers ? Object.assign({}, e.req.headers) : {}),
        delete n.headers.common.accept,
        delete n.headers.common.host,
        delete n.headers.common['cf-ray'],
        delete n.headers.common['cf-connecting-ip'],
        delete n.headers.common['content-length']
        let r = te.a.create(n)
        !(function(e) {
          for (const t in ne) e[t] = ne[t].bind(e)
        })(r),
        (function(e, t) {
          var n = {
            finish: function() {},
              start: function() {},
            fail: function() {},
              set: function() {}
          };
            var r = function() {
              return window.$nuxt &&
                window.$nuxt.$loading &&
                window.$nuxt.$loading.set
                ? window.$nuxt.$loading
              : n
          };
            let o = 0
          e.onRequest(function(e) {
            ;(e && !1 === e.progress) || o++
          }),
          e.onResponse(function(e) {
                ;(e && e.config && !1 === e.config.progress) ||
                  (--o <= 0 && ((o = 0), r().finish()))
          }),
              e.onError(function(e) {
            ;(e && e.config && !1 === e.config.progress) ||
                  (o--, r().fail(), r().finish())
              })
          var c = function(e) {
            if (o) {
              var progress = (100 * e.loaded) / (e.total * o)
              r().set(Math.min(100, progress))
            }
          }
            ;(e.defaults.onUploadProgress = c),
              (e.defaults.onDownloadProgress = c)
        })(r),
        (e.$axios = r),
        t('axios', r)
      };
      let se = {}
      function ce(object, e) {
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
      function ue(e) {
        for (let i = 1; i < arguments.length; i++) {
          var source = arguments[i] != null ? arguments[i] : {}
          i % 2
            ? ce(source, !0).forEach(function(t) {
                Object(r.a)(e, t, source[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(
                e,
                Object.getOwnPropertyDescriptors(source)
              )
            : ce(source).forEach(function(t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(source, t)
                )
              })
        }
        return e
      }
      ;(se.install = function(e, t) {
        e.prototype.$mobileCheck = function(e) {
          console.log('inner width'),
            window.innerWidth <= 600
              ? e.commit('setMobile', !0)
              : e.commit('setMobile', !1)
        }
      }),
        c.a.use(se),
        n.d(t, 'b', function() {
          return de
        }),
        n.d(t, 'a', function() {
          return S
        }),
        c.a.component(O.name, O),
        c.a.component(_.name, _),
        c.a.component('NChild', _),
        c.a.component(E.name, E),
        c.a.use(d.a, {
          keyName: 'head',
          attribute: 'data-n-head',
          ssrAttribute: 'data-n-head-ssr',
          tagIDKeyName: 'hid'
        })
      const le = {
        name: 'page',
        mode: 'out-in',
        appear: !1,
        appearClass: 'appear',
        appearActiveClass: 'appear-active',
        appearToClass: 'appear-to'
      }
      function de(e) {
        return pe.apply(this, arguments)
      }
      function pe() {
        return (pe = Object(o.a)(
          regeneratorRuntime.mark(function e(t) {
            let n, r, o, l, d, x, path, w
            return regeneratorRuntime.wrap(function(e) {
              for (;;) {
              { switch ((e.prev = e.next)) {
                case 0:
                  return (
                    (e.next = 2),
                    new f.a({
                      mode: 'history',
                      base: decodeURI('/wip/danceflood/dist/'),
                      linkActiveClass: 'nuxt-link-active',
                      linkExactActiveClass: 'nuxt-link-exact-active',
                      scrollBehavior: y,
                      routes: [
                        { path: '/', component: m, name: 'index' },
                        { path: '/:section', component: v, name: 'section' }
                      ],
                      fallback: !1
                    })
                  )
                case 2:
                  return (
                    (n = e.sent),
                    ((r = F(t)).$router = n),
                    (o = r.registerModule),
                    (r.registerModule = function(path, e, t) {
                      return o.call(
                        r,
                        path,
                        e,
                        Object.assign({ preserveState: !0 }, t)
                      )
                    }),
                    (l = ue(
                      {
                        router: n,
                        store: r,
                        nuxt: {
                          defaultTransition: le,
                          transitions: [le],
                          setTransitions: function(e) {
                            return (
                              Array.isArray(e) || (e = [e]),
                              (e = e.map(function(e) {
                                return (e = e
                                  ? typeof e == 'string'
                                    ? Object.assign({}, le, { name: e })
                                    : Object.assign({}, le, e)
                                  : le)
                              })),
                              (this.$options.nuxt.transitions = e),
                              e
                            )
                          },
                          err: null,
                          dateErr: null,
                          error: function(e) {
                            ;(e = e || null),
                            (l.context._errored = Boolean(e)),
                            (e = e ? Object(h.l)(e) : null)
                            var n = this.nuxt || this.$options.nuxt
                            return (
                              (n.dateErr = Date.now()),
                              (n.err = e),
                              t && (t.nuxt.error = e),
                              e
                            )
                          }
                        }
                      },
                      V
                    )),
                    (r.app = l),
                    (d = t
                      ? t.next
                      : function(e) {
                        return l.router.push(e)
                      }),
                    t
                      ? (x = n.resolve(t.url).route)
                      : ((path = Object(h.d)(n.options.base)),
                      (x = n.resolve(path).route)),
                    (e.next = 13),
                    Object(h.p)(l, {
                      route: x,
                      next: d,
                      error: l.nuxt.error.bind(l),
                      store: r,
                      payload: t ? t.payload : void 0,
                      req: t ? t.req : void 0,
                      res: t ? t.res : void 0,
                      beforeRenderFns: t ? t.beforeRenderFns : void 0,
                      ssrContext: t
                    })
                  )
                case 13:
                  if (
                    ((w = function(e, t) {
                      if (!e)
                        throw new Error(
                          'inject(key, value) has no key provided'
                        )
                      if (void 0 === t)
                        throw new Error(
                          'inject(key, value) has no value provided'
                        )
                        ;(l[(e = '$' + e)] = t), (r[e] = l[e])
                      var n = '__nuxt_' + e + '_installed__'
                      c.a[n] ||
                          ((c.a[n] = !0),
                          c.a.use(function() {
                            c.a.prototype.hasOwnProperty(e) ||
                              Object.defineProperty(c.a.prototype, e, {
                                get: function() {
                                  return this.$root.$options[e]
                                }
                              })
                          }))
                    }),
                    window.__NUXT__ &&
                        window.__NUXT__.state &&
                        r.replaceState(window.__NUXT__.state),
                    'function' !== typeof W.a)
                  ) {
                    e.next = 18
                    break
                  }
                  return (e.next = 18), W()(l.context, w)
                case 18:
                  if (typeof G != 'function') {
                    e.next = 21
                    break
                  }
                  return (e.next = 21), G(l.context, w)
                case 21:
                  if (typeof ae != 'function') {
                    e.next = 24
                    break
                  }
                  return (e.next = 24), ae(l.context, w)
                case 24:
                  e.next = 27
                  break
                case 27:
                  e.next = 30
                  break
                case 30:
                  return e.abrupt('return', { app: l, store: r, router: n })
                case 31:
                case 'end':
                  return e.stop()
              }
              }
            }, e)
          })
        )).apply(this, arguments)
      }
    },
    26: function(e, t, n) {
      'use strict'
      e.exports = function(e) {
        const t = []
        return (
          (t.toString = function() {
            return this.map(function(t) {
              const content = (function(e, t) {
                const content = e[1] || ''
                  var n = e[3]
                if (!n) return content
                if (t && typeof btoa === 'function') {
                  const r =
                    ((c = n),
                    '/*# sourceMappingURL=data:application/json;charset=utf-8;base64,' +
                      btoa(unescape(encodeURIComponent(JSON.stringify(c)))) +
                      ' */')
                  let o = n.sources.map(function(source) {
                    return '/*# sourceURL=' + n.sourceRoot + source + ' */'
                  })
                  return [content]
                    .concat(o)
                    .concat([r])
                    .join('\n')
                }
                let c
                return [content].join('\n')
              })(t, e)
              return t[2] ? '@media ' + t[2] + '{' + content + '}' : content
            }).join('')
          }),
          (t.i = function(e, n) {
            typeof e === 'string' && (e = [[null, e, '']])
            for (var r = {}, i = 0; i < this.length; i++) {
              const o = this[i][0]
              o != null && (r[o] = !0)
            }
            for (i = 0; i < e.length; i++) {
              const c = e[i]
              ;(c[0] != null && r[c[0]]) ||
                (n && !c[2]
                  ? (c[2] = n)
                  : n && (c[2] = '(' + c[2] + ') and (' + n + ')'),
                t.push(c))
            }
          }),
          t
        )
      }
    },
    27: function(e, t, n) {
      'use strict'
      function r(e, t) {
        for (var n = [], r = {}, i = 0; i < t.length; i++) {
          const o = t[i]
            var c = o[0]
            var l = { id: e + ':' + i, css: o[1], media: o[2], sourceMap: o[3] }
          r[c] ? r[c].parts.push(l) : n.push((r[c] = { id: c, parts: [l] }))
        }
        return n
      }
      n.r(t),
        n.d(t, 'default', function() {
          return x
        })
      const o = typeof document !== 'undefined'
      if (typeof DEBUG !== 'undefined' && DEBUG && !o) {
      { throw new Error(
        "vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
      )
      }
      const c = {}
        var head = o && (document.head || document.getElementsByTagName('head')[0])
        var l = null
        var d = 0
        var f = !1
        var h = function() {}
        var m = null
        var v = 'data-vue-ssr-id'
        var y =
        typeof navigator !== 'undefined' &&
        /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())
      function x(e, t, n, o) {
        ;(f = n), (m = o || {})
        let l = r(e, t)
        return (
          w(l),
          function(t) {
            for (var n = [], i = 0; i < l.length; i++) {
              const o = l[i]
              ;(d = c[o.id]).refs--, n.push(d)
            }
            t ? w((l = r(e, t))) : (l = [])
            for (i = 0; i < n.length; i++) {
              var d
              if ((d = n[i]).refs === 0) {
                for (let f = 0; f < d.parts.length; f++) d.parts[f]()
                delete c[d.id]
              }
            }
          }
        )
      }
      function w(e) {
        for (let i = 0; i < e.length; i++) {
          const t = e[i]
            var n = c[t.id]
          if (n) {
            n.refs++
            for (var r = 0; r < n.parts.length; r++) n.parts[r](t.parts[r])
            for (; r < t.parts.length; r++) n.parts.push(_(t.parts[r]))
            n.parts.length > t.parts.length && (n.parts.length = t.parts.length)
          } else {
            const o = []
            for (r = 0; r < t.parts.length; r++) o.push(_(t.parts[r]))
            c[t.id] = { id: t.id, refs: 1, parts: o }
          }
        }
      }
      function O() {
        const e = document.createElement('style')
        return (e.type = 'text/css'), head.appendChild(e), e
      }
      function _(e) {
        let t
          var n
          var r = document.querySelector('style[' + v + '~="' + e.id + '"]')
        if (r) {
          if (f) return h
          r.parentNode.removeChild(r)
        }
        if (y) {
          const o = d++
          ;(r = l || (l = O())),
            (t = C.bind(null, r, o, !1)),
            (n = C.bind(null, r, o, !0))
        } else {
        { (r = O()),
        (t = function(e, t) {
          var n = t.css;
                var r = t.media;
                var o = t.sourceMap
          r && e.setAttribute('media', r)
          m.ssrId && e.setAttribute(v, t.id)
          o &&
                ((n += '\n/*# sourceURL=' + o.sources[0] + ' */'),
                (n +=
                  '\n/*# sourceMappingURL=data:application/json;base64,' +
                  btoa(unescape(encodeURIComponent(JSON.stringify(o)))) +
                  ' */'))
          if (e.styleSheet) e.styleSheet.cssText = n
          else {
            for (; e.firstChild;) e.removeChild(e.firstChild)
            e.appendChild(document.createTextNode(n))
          }
        }.bind(null, r)),
        (n = function() {
          r.parentNode.removeChild(r)
        })
        }
        return (
          t(e),
          function(r) {
            if (r) {
              if (
                r.css === e.css &&
                r.media === e.media &&
                r.sourceMap === e.sourceMap
              ) {
              { return }
              t((e = r))
            } else n()
          }
        )
      }
      let j
        var k =
        ((j = []),
        function(e, t) {
          return (j[e] = t), j.filter(Boolean).join('\n')
        })
      function C(e, t, n, r) {
        const o = n ? '' : r.css
        if (e.styleSheet) e.styleSheet.cssText = k(t, o)
        else {
          const c = document.createTextNode(o)
            var l = e.childNodes
          l[t] && e.removeChild(l[t]),
            l.length ? e.insertBefore(c, l[t]) : e.appendChild(c)
        }
      }
    },
    55: function(e, t, n) {
      let content = n(156)
      typeof content === 'string' && (content = [[e.i, content, '']]),
        content.locals && (e.exports = content.locals)
      ;(0, n(27).default)('b675d82e', content, !0, { sourceMap: !1 })
    },
    56: function(e, t, n) {
      let content = n(158)
      typeof content === 'string' && (content = [[e.i, content, '']]),
        content.locals && (e.exports = content.locals)
      ;(0, n(27).default)('17cfdfa9', content, !0, { sourceMap: !1 })
    },
    57: function(e, t, n) {
      let content = n(162)
      typeof content === 'string' && (content = [[e.i, content, '']]),
        content.locals && (e.exports = content.locals)
      ;(0, n(27).default)('6829835c', content, !0, { sourceMap: !1 })
    },
    58: function(e, t, n) {
      let content = n(164)
      typeof content === 'string' && (content = [[e.i, content, '']]),
        content.locals && (e.exports = content.locals)
      ;(0, n(27).default)('1c033b25', content, !0, { sourceMap: !1 })
    },
    59: function(e, t, n) {
      let content = n(166)
      typeof content === 'string' && (content = [[e.i, content, '']]),
        content.locals && (e.exports = content.locals)
      ;(0, n(27).default)('415b8583', content, !0, { sourceMap: !1 })
    },
    60: function(e, t, n) {
      'use strict'
      const r = n(0)
      t.a = {
        name: 'NuxtLink',
        extends: r.a.component('RouterLink'),
        props: { noPrefetch: { type: Boolean, default: !1 } }
      }
    },
    70: function(e, t, n) {
      'use strict'
      const r = {}
      ;(r.dataLoad = n(184)),
        (r.dataLoad = r.dataLoad.default || r.dataLoad),
        (r.mobileCheck = n(139)),
        (r.mobileCheck = r.mobileCheck.default || r.mobileCheck),
        (t.a = r)
    },
    72: function(e, t) {
      'serviceWorker' in navigator
        ? navigator.serviceWorker
            .register('/wip/danceflood/dist/sw.js', {
              scope: '/wip/danceflood/dist/'
            })
            .then(function(e) {
              window.$sw = e
            })
            .catch(function(e) {
              console.error('Service worker registration failed:', e)
            })
        : console.warn('Service workers are not supported.')
    }
  },
  [[108, 4, 1]]
])
