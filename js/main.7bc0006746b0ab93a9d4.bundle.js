! function(t) {
    function e(e) {
        for (var n, o, i = e[0], c = e[1], a = 0, s = []; a < i.length; a++) o = i[a], Object.prototype.hasOwnProperty.call(r, o) && r[o] && s.push(r[o][0]), r[o] = 0;
        for (n in c) Object.prototype.hasOwnProperty.call(c, n) && (t[n] = c[n]);
        for (u && u(e); s.length;) s.shift()()
    }
    var n = {},
        r = {
            3: 0
        };

    function o(e) {
        if (n[e]) return n[e].exports;
        var r = n[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(r.exports, r, r.exports, o), r.l = !0, r.exports
    }
    o.e = function(t) {
        var e = [],
            n = r[t];
        if (0 !== n)
            if (n) e.push(n[2]);
            else {
                var i = new Promise((function(e, o) {
                    n = r[t] = [e, o]
                }));
                e.push(n[2] = i);
                var c, a = document.createElement("script");
                a.charset = "utf-8", a.timeout = 120, o.nc && a.setAttribute("nonce", o.nc), a.src = function(t) {
                    return o.p + "" + ({} [t] || t) + ".7bc0006746b0ab93a9d4.bundle.js"
                }(t);
                var u = new Error;
                c = function(e) {
                    a.onerror = a.onload = null, clearTimeout(s);
                    var n = r[t];
                    if (0 !== n) {
                        if (n) {
                            var o = e && ("load" === e.type ? "missing" : e.type),
                                i = e && e.target && e.target.src;
                            u.message = "Loading chunk " + t + " failed.\n(" + o + ": " + i + ")", u.name = "ChunkLoadError", u.type = o, u.request = i, n[1](u)
                        }
                        r[t] = void 0
                    }
                };
                var s = setTimeout((function() {
                    c({
                        type: "timeout",
                        target: a
                    })
                }), 12e4);
                a.onerror = a.onload = c, document.head.appendChild(a)
            } return Promise.all(e)
    }, o.m = t, o.c = n, o.d = function(t, e, n) {
        o.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: n
        })
    }, o.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, o.t = function(t, e) {
        if (1 & e && (t = o(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (o.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var r in t) o.d(n, r, function(e) {
                return t[e]
            }.bind(null, r));
        return n
    }, o.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return o.d(e, "a", e), e
    }, o.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, o.p = "/static/dist/social-ux/", o.oe = function(t) {
        throw console.error(t), t
    };
    var i = window.webpackJsonp = window.webpackJsonp || [],
        c = i.push.bind(i);
    i.push = e, i = i.slice();
    for (var a = 0; a < i.length; a++) e(i[a]);
    var u = c;
    o(o.s = 31)
}([function(t, e, n) {
    "use strict";

    function r(t, e, n) {
        var r = new Set([]),
            o = !1;
        document.querySelectorAll(t).forEach((function(t) {
            n && o || (o = !0, e(t), r.add(t))
        }));
        var i = new MutationObserver((function() {
            document.querySelectorAll(t).forEach((function(t) {
                n && o || r.has(t) || (o = !0, e(t), r.add(t), n && i.disconnect())
            }))
        }));
        n && o || i.observe(document.body, {
            childList: !0,
            subtree: !0
        })
    }
    n.d(e, "a", (function() {
        return r
    }))
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return u
    }));
    var r = n(17),
        o = [],
        i = Object(r.a)();

    function c() {
        o.forEach(i), o.length = 0
    }

    function a() {
        window.removeEventListener("scroll", a), setTimeout(c, 0)
    }

    function u(t) {
        o.push(t), 1 == o.length && window.addEventListener("scroll", a, {
            passive: !0
        })
    }
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return l
    }));
    var r = n(1),
        o = n(8),
        i = n(0);

    function c(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            e && (r = r.filter((function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function a(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2 ? c(Object(n), !0).forEach((function(e) {
                u(t, e, n[e])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach((function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }))
        }
        return t
    }

    function u(t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n, t
    }
    var s = {
        "4g": function() {
            return Math.max(1.5 * window.innerHeight, 700)
        },
        "3g": function() {
            return Math.max(2 * window.innerHeight, 900)
        },
        "2g": function() {
            return 3 * window.innerHeight
        },
        "slow-2g": function() {
            return 3 * window.innerHeight
        }
    };

    function f() {}

    function l(t, e) {
        var n = e.dependencySrc,
            o = e.selector,
            c = e.onIntersect,
            u = e.onAppear,
            l = e.beforeDependencyLoad,
            h = void 0 === l ? f : l,
            m = e.onDependencyLoad,
            y = void 0 === m ? f : m,
            g = e.oneTime,
            w = void 0 === g || g,
            O = e.initialThreshold,
            j = void 0 === O ? 500 : O,
            E = e.thresholdCalculator,
            S = void 0 === E ? {} : E,
            L = function(t) {
                var e = t.dependencySrc,
                    n = t.onDependencyLoad,
                    r = t.beforeDependencyLoad,
                    o = !1,
                    i = !1;
                return {
                    dependencySrc: e,
                    onDependencyLoad: function() {
                        o || (o = !0, n())
                    },
                    beforeDependencyLoad: function() {
                        i || (i = !0, r())
                    },
                    needsDependency: null != e,
                    hasLoadedDependency: null == e
                }
            }({
                dependencySrc: n,
                onDependencyLoad: y,
                beforeDependencyLoad: h
            }),
            P = function(t, e) {
                if (t.needsDependency) return function(t, e) {
                    return function(n) {
                        t.hasLoadedDependency ? e(n) : b(t, (function() {
                            e(n)
                        }))()
                    }
                }(t, e);
                return e
            }(L, c),
            k = a(a({}, s), S),
            T = function t(e, n, r, o, i, c, a, u) {
                return function() {
                    var s = function(t, e) {
                            var n = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
                            if (n && n.effectiveType in e) return e[n.effectiveType]();
                            return t
                        }(n, r),
                        f = e;
                    s !== n && (e.observers.flatMap(d).forEach(p), f = v(o, s, i, c, a, u, e.task));
                    var l = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
                    if (l) {
                        var b = t(f, s, r, o, i, c, a, u);
                        l.addEventListener("change", b, {
                            once: !0
                        })
                    }
                }
            }(v(t, j, o, P, u, w), j, k, t, o, P, u, w);
        Object(r.a)(T), n && Object(r.a)(function(t, e) {
            return function() {
                t.needsDependency && !t.hasLoadedDependency && Object(i.a)(e, b(t, t.onDependencyLoad), !0)
            }
        }(L, o))
    }

    function d(t) {
        return t
    }

    function p(t) {
        t.disconnect()
    }

    function v(t, e, n, r, o, i) {
        var c = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : {},
            u = a(a({}, c), {}, {
                selector: n,
                threshold: e,
                onAppear: o,
                oneTime: i,
                onIntersect: r
            });
        return {
            task: u,
            observers: t.addTask(u)
        }
    }

    function b(t, e) {
        return function() {
            t.beforeDependencyLoad(), Object(o.a)(t.dependencySrc, (function() {
                t.hasLoadedDependency = !0, t.onDependencyLoad(), e()
            }))
        }
    }
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return v
    })), n.d(e, "b", (function() {
        return g
    })), n.d(e, "c", (function() {
        return P
    })), n.d(e, "d", (function() {
        return k
    })), n.d(e, "e", (function() {
        return T
    }));
    var r, o, i, c, a = function(t, e) {
            return {
                name: t,
                value: void 0 === e ? -1 : e,
                delta: 0,
                entries: [],
                id: "v1-".concat(Date.now(), "-").concat(Math.floor(8999999999999 * Math.random()) + 1e12)
            }
        },
        u = function(t, e) {
            try {
                if (PerformanceObserver.supportedEntryTypes.includes(t)) {
                    var n = new PerformanceObserver((function(t) {
                        return t.getEntries().map(e)
                    }));
                    return n.observe({
                        type: t,
                        buffered: !0
                    }), n
                }
            } catch (t) {}
        },
        s = !1,
        f = function(t, e) {
            s || "undefined" != typeof InstallTrigger || (addEventListener("beforeunload", (function() {})), s = !0), addEventListener("visibilitychange", (function n(r) {
                "hidden" === document.visibilityState && (t(r), e && removeEventListener("visibilitychange", n, !0))
            }), !0)
        },
        l = function(t) {
            addEventListener("pageshow", (function(e) {
                e.persisted && t(e)
            }), !0)
        },
        d = "function" == typeof WeakSet ? new WeakSet : new Set,
        p = function(t, e, n) {
            var r;
            return function() {
                e.value >= 0 && (n || d.has(e) || "hidden" === document.visibilityState) && (e.delta = e.value - (r || 0), (e.delta || void 0 === r) && (r = e.value, t(e)))
            }
        },
        v = function(t, e) {
            var n, r = a("CLS", 0),
                o = function(t) {
                    t.hadRecentInput || (r.value += t.value, r.entries.push(t), n())
                },
                i = u("layout-shift", o);
            i && (n = p(t, r, e), f((function() {
                i.takeRecords().map(o), n()
            })), l((function() {
                r = a("CLS", 0), n = p(t, r, e)
            })))
        },
        b = -1,
        h = function() {
            return "hidden" === document.visibilityState ? 0 : 1 / 0
        },
        m = function() {
            f((function(t) {
                var e = t.timeStamp;
                b = e
            }), !0)
        },
        y = function() {
            return b < 0 && (b = h(), m(), l((function() {
                setTimeout((function() {
                    b = h(), m()
                }), 0)
            }))), {
                get timeStamp() {
                    return b
                }
            }
        },
        g = function(t, e) {
            var n, r = y(),
                o = a("FCP"),
                i = u("paint", (function(t) {
                    "first-contentful-paint" === t.name && (i && i.disconnect(), t.startTime < r.timeStamp && (o.value = t.startTime, o.entries.push(t), d.add(o), n()))
                }));
            i && (n = p(t, o, e), l((function(r) {
                o = a("FCP"), n = p(t, o, e), requestAnimationFrame((function() {
                    requestAnimationFrame((function() {
                        o.value = performance.now() - r.timeStamp, d.add(o), n()
                    }))
                }))
            })))
        },
        w = {
            passive: !0,
            capture: !0
        },
        O = new Date,
        j = function(t, e) {
            r || (r = e, o = t, i = new Date, L(removeEventListener), E())
        },
        E = function() {
            if (o >= 0 && o < i - O) {
                var t = {
                    entryType: "first-input",
                    name: r.type,
                    target: r.target,
                    cancelable: r.cancelable,
                    startTime: r.timeStamp,
                    processingStart: r.timeStamp + o
                };
                c.forEach((function(e) {
                    e(t)
                })), c = []
            }
        },
        S = function(t) {
            if (t.cancelable) {
                var e = (t.timeStamp > 1e12 ? new Date : performance.now()) - t.timeStamp;
                "pointerdown" == t.type ? function(t, e) {
                    var n = function() {
                            j(t, e), o()
                        },
                        r = function() {
                            o()
                        },
                        o = function() {
                            removeEventListener("pointerup", n, w), removeEventListener("pointercancel", r, w)
                        };
                    addEventListener("pointerup", n, w), addEventListener("pointercancel", r, w)
                }(e, t) : j(e, t)
            }
        },
        L = function(t) {
            ["mousedown", "keydown", "touchstart", "pointerdown"].forEach((function(e) {
                return t(e, S, w)
            }))
        },
        P = function(t, e) {
            var n, i = y(),
                s = a("FID"),
                v = function(t) {
                    t.startTime < i.timeStamp && (s.value = t.processingStart - t.startTime, s.entries.push(t), d.add(s), n())
                },
                b = u("first-input", v);
            n = p(t, s, e), b && f((function() {
                b.takeRecords().map(v), b.disconnect()
            }), !0), b && l((function() {
                var i;
                s = a("FID"), n = p(t, s, e), c = [], o = -1, r = null, L(addEventListener), i = v, c.push(i), E()
            }))
        },
        k = function(t, e) {
            var n, r = y(),
                o = a("LCP"),
                i = function(t) {
                    var e = t.startTime;
                    e < r.timeStamp && (o.value = e, o.entries.push(t)), n()
                },
                c = u("largest-contentful-paint", i);
            if (c) {
                n = p(t, o, e);
                var s = function() {
                    d.has(o) || (c.takeRecords().map(i), c.disconnect(), d.add(o), n())
                };
                ["keydown", "click"].forEach((function(t) {
                    addEventListener(t, s, {
                        once: !0,
                        capture: !0
                    })
                })), f(s, !0), l((function(r) {
                    o = a("LCP"), n = p(t, o, e), requestAnimationFrame((function() {
                        requestAnimationFrame((function() {
                            o.value = performance.now() - r.timeStamp, d.add(o), n()
                        }))
                    }))
                }))
            }
        },
        T = function(t) {
            var e, n = a("TTFB");
            e = function() {
                try {
                    var e = performance.getEntriesByType("navigation")[0] || function() {
                        var t = performance.timing,
                            e = {
                                entryType: "navigation",
                                startTime: 0
                            };
                        for (var n in t) "navigationStart" !== n && "toJSON" !== n && (e[n] = Math.max(t[n] - t.navigationStart, 0));
                        return e
                    }();
                    n.value = n.delta = e.responseStart, n.entries = [e], t(n)
                } catch (t) {}
            }, "complete" === document.readyState ? setTimeout(e, 0) : addEventListener("pageshow", e)
        }
}, function(t, e, n) {
    "use strict";

    function r(t) {
        var e = t.length;
        return function() {
            for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
            return r.length === e ? t.call.apply(t, [null].concat(r)) : t.bind.apply(t, [null].concat(r))
        }
    }
    n.d(e, "a", (function() {
        return r
    }))
}, function(t, e, n) {
    "use strict";
    n.d(e, "d", (function() {
        return r
    })), n.d(e, "e", (function() {
        return o
    })), n.d(e, "a", (function() {
        return i
    })), n.d(e, "c", (function() {
        return c
    })), n.d(e, "b", (function() {
        return a
    }));
    var r = "url:change",
        o = "url:scrolled",
        i = "page:loaded",
        c = "read-article:click",
        a = "post:shared"
}, function(t, e, n) {
    "use strict";

    function r() {
        for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
        return function(t) {
            return e.reduce((function(t, e) {
                return e(t)
            }), t)
        }
    }
    n.d(e, "a", (function() {
        return r
    }))
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return o
    }));
    var r = {};

    function o(t, e) {
        if (r[t]) return r[t];
        var n = (e || document).querySelector(t);
        return r[t] = n ? JSON.parse(n.text) : {}
    }
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return u
    }));
    var r = n(18),
        o = {},
        i = {};

    function c(t) {
        try {
            t()
        } catch (t) {
            console.log("Error on user JS", t)
        }
        return null
    }

    function a(t) {
        return function() {
            setTimeout(function(t) {
                return function() {
                    o[t] = !0, i[t].forEach(c)
                }
            }(t), 1)
        }
    }

    function u(t, e) {
        if (t in o) return c(e);
        if (t in i) i[t].push(e);
        else {
            if (document.querySelector('script[src="'.concat(t, '"]'))) return o[t] = !0, c(e);
            i[t] = [e];
            var n = document.createElement("script");
            n.src = t, Object(r.a)(n, !1, a(t))
        }
    }
}, function(t, e, n) {
    "use strict";
    e.a = function(t) {
        return function(e) {
            return e.then(t)
        }
    }
}, function(t, e, n) {
    "use strict";
    var r = n(11);
    e.a = function(t) {
        return function(e) {
            return Object(r.a)(e.querySelector(t))
        }
    }
}, function(t, e, n) {
    "use strict";
    e.a = function(t) {
        return new Promise((function(e, n) {
            return null == t ? n(t) : e(t)
        }))
    }
}, function(t, e, n) {
    "use strict";
    var r = {};
    e.a = {
        subscribe: function(t, e) {
            r[t] = r[t] || [], r[t].push(e)
        },
        publish: function(t, e) {
            (r[t] || []).forEach((function(t) {
                t(e)
            }))
        }
    }
}, function(t, e, n) {
    "use strict";

    function r(t) {
        return document.querySelector(".live-updates-wrapper") && Promise.all([n.e(10), n.e(6)]).then(n.bind(null, 26)).then((function(e) {
            e.default(t)
        })), t
    }
    n.d(e, "a", (function() {
        return r
    }))
}, function(t, e, n) {
    "use strict";
    var r = n(4),
        o = function(t) {
            return function(e) {
                return e.then && e.catch(t), e
            }
        },
        i = n(6),
        c = n(10),
        a = n(9);

    function u(t, e) {
        return t.style.backgroundImage = "url(".concat(e, ")"), requestAnimationFrame((function() {
            t.style.filter = ""
        })), t
    }

    function s(t, e) {
        return t.src = e, t.onload = function() {
            t.style.filter = ""
        }, t
    }
    var f = function(t, e) {
            return ("DIV" == t.tagName ? u : s)(t, e)
        },
        l = Object(r.a)((function(t, e, n) {
            return function r() {
                f(t, e), window.removeEventListener(n, r)
            }
        })),
        d = Object(r.a)((function(t, e) {
            var n = l(t, e),
                r = n("click"),
                o = n("scroll");
            return window.addEventListener("click", r), window.addEventListener("scroll", o, {
                passive: !0
            }), window.setTimeout((function() {
                return f(t, e)
            }), 1500), t
        })),
        p = Object(r.a)((function(t, e) {
            var n = e.target;
            return Object(i.a)(b, d(t))(n)
        }));

    function v(t) {
        var e = new Image;
        e.src = t.dataset.replaceImage, e.crossOrigin = "Anonymous", e.onload = p(t)
    }

    function b(t) {
        var e = document.createElement("canvas"),
            n = e.getContext("2d");
        return e.width = t.width, e.height = t.height, n.drawImage(t, 0, 0), e.toDataURL("image/jpeg")
    }
    e.a = function() {
        return requestAnimationFrame((function() {
            return Object(i.a)(Object(c.a)("[data-replace-image]"), Object(a.a)(v), o((function() {
                return null
            })))(document.body)
        }))
    }
}, function(t, e, n) {
    "use strict";

    function r() {
        var t = navigator.userAgent;
        return /Android|webOS|iPhone|iPod|BlackBerry/i.test(t) ? "mobile" : /iPad/i.test(t) ? "tablet" : "desktop"
    }
    n.d(e, "a", (function() {
        return r
    }))
}, function(t, e, n) {
    "use strict";

    function r(t, e) {
        return function(t) {
            if (Array.isArray(t)) return t
        }(t) || function(t, e) {
            if (!(Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t))) return;
            var n = [],
                r = !0,
                o = !1,
                i = void 0;
            try {
                for (var c, a = t[Symbol.iterator](); !(r = (c = a.next()).done) && (n.push(c.value), !e || n.length !== e); r = !0);
            } catch (t) {
                o = !0, i = t
            } finally {
                try {
                    r || null == a.return || a.return()
                } finally {
                    if (o) throw i
                }
            }
            return n
        }(t, e) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }()
    }

    function o(t) {
        var e = {},
            n = [],
            o = t,
            i = 0;

        function c(t) {
            e[t] && (i--, e[t] = !1, function() {
                var t = n.shift();
                if (t) {
                    a(t.timeout)(t.resolve)
                }
            }())
        }

        function a(t) {
            return function(n) {
                i++;
                var o, a = !(o = i) in e || !e[o] ? o : Object.entries(e).find((function(t) {
                    var e = r(t, 2);
                    return e[0], !e[1]
                }))[0];
                if (e[a] = !0, n(a), t) {
                    setTimeout((function() {
                        c(a)
                    }), t)
                }
            }
        }
        return {
            release: c,
            request: function(t) {
                return new Promise(i < o ? a(t) : function(t) {
                    return function(e, r) {
                        n.push({
                            resolve: e,
                            reject: r,
                            timeout: t
                        })
                    }
                }(t))
            },
            changeSettings: function(t) {
                o = t
            }
        }
    }
    n.d(e, "a", (function() {
        return o
    }))
}, function(t, e, n) {
    "use strict";

    function r() {
        for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
        return function(t) {
            return t.call.apply(t, [null].concat(e))
        }
    }
    n.d(e, "a", (function() {
        return r
    }))
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return l
    }));
    var r = n(16),
        o = Object(r.a)(2),
        i = o.request,
        c = o.release,
        a = o.changeSettings,
        u = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    if (u) {
        var s = function() {
            switch (u.effectiveType) {
                case "4g":
                    a(5);
                    break;
                case "slow-2g":
                case "2g":
                    a(1);
                    break;
                default:
                    a(3)
            }
        };
        u.addEventListener("change", s), s()
    }

    function f(t, e, n, r) {
        var o = function(t, e) {
            return function(n) {
                if (e.loaded) return null;
                c(t), e.loaded = !0, e.callback()
            }
        }(r, {
            callback: n,
            loaded: !1
        });
        t.addEventListener("load", o), document.head.insertBefore(t, document.head.firstChild), e && setTimeout(o, e)
    }

    function l(t, e, n) {
        i().then((function(r) {
            f(t, e, n, r)
        }))
    }
}, function(t, e, n) {
    "use strict";
    n.d(e, "e", (function() {
        return r
    })), n.d(e, "b", (function() {
        return o
    })), n.d(e, "a", (function() {
        return i
    })), n.d(e, "d", (function() {
        return c
    })), n.d(e, "c", (function() {
        return a
    }));
    var r = function(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = window.REBELMOUSE_BASE_SSL_DOMAIN;
            return t = (n || "https://" + location.host) + t, e.credentials = "include", [t, e]
        },
        o = {
            "X-Requested-With": "XMLHttpRequest"
        },
        i = {
            "Content-Type": "application/json"
        };

    function c(t) {
        return t.json().then((function(e) {
            if (!t.ok) throw e;
            return e
        }))
    }
    var a = {
        message: "There was a network error, please try again"
    }
}, function(t, e, n) {
    "use strict";

    function r(t, e) {
        t.addEventListener("click", (function(t) {
            t.preventDefault(), e(t)
        }))
    }

    function o(t, e) {
        t.forEach((function(t) {
            return r(t, e)
        }))
    }
    n.d(e, "a", (function() {
        return r
    })), n.d(e, "b", (function() {
        return o
    }))
}, function(t, e, n) {
    "use strict";

    function r(t) {
        var e = document.createElement("textarea");
        return e.innerHTML = t, 0 === e.childNodes.length ? "" : e.childNodes[0].nodeValue
    }
    n.d(e, "a", (function() {
        return r
    }))
}, function(t, e, n) {
    "use strict";

    function r(t, e, n) {
        var r = document.querySelector("#notification"),
            o = document.createElement("li");
        e = e || "", n = n || 5e3, o.innerText = t, o.classList.add(e), r.append(o), r.style.display = "block", setTimeout((function() {
            r.removeChild(o)
        }), n)
    }
    n.d(e, "a", (function() {
        return r
    }))
}, function(t, e, n) {
    "use strict";

    function r(t) {
        var e = !1;
        return function() {
            e || (e = !0, requestAnimationFrame((function() {
                t(), e = !1
            })))
        }
    }
    n.d(e, "a", (function() {
        return r
    }))
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return o
    }));
    var r = n(18);

    function o(t, e) {
        var n = document.createElement("link");
        n.href = t, n.rel = "stylesheet", Object(r.a)(n, 750, e)
    }
}, function(t, e, n) {
    "use strict";

    function r(t, e) {
        return function(t) {
            if (Array.isArray(t)) return t
        }(t) || function(t, e) {
            if (!(Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t))) return;
            var n = [],
                r = !0,
                o = !1,
                i = void 0;
            try {
                for (var c, a = t[Symbol.iterator](); !(r = (c = a.next()).done) && (n.push(c.value), !e || n.length !== e); r = !0);
            } catch (t) {
                o = !0, i = t
            } finally {
                try {
                    r || null == a.return || a.return()
                } finally {
                    if (o) throw i
                }
            }
            return n
        }(t, e) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }()
    }
    n.d(e, "a", (function() {
        return i
    }));
    var o = {
        twitter: [450, 240],
        pinterest: [750, 546],
        default: [550, 425]
    };

    function i(t, e) {
        var n = r(o[e] || o.default, 2),
            i = n[0],
            c = n[1],
            a = Math.max((window.innerWidth - i) / 2, 0),
            u = Math.max((window.innerHeight - c) / 2, 0),
            s = "width=".concat(i, ",height=").concat(c, ",left=").concat(a, ",top=").concat(u, ",resizable=yes,scrollbars=yes");
        return window.open(t, "_blank", s)
    }
}, , , , , , function(t, e, n) {
    "use strict";
    n.r(e);
    var r = n(12),
        o = n(19);

    function i(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            e && (r = r.filter((function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function c(t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n, t
    }

    function a(t, e) {
        return function(t) {
            if (Array.isArray(t)) return t
        }(t) || function(t, e) {
            if (!(Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t))) return;
            var n = [],
                r = !0,
                o = !1,
                i = void 0;
            try {
                for (var c, a = t[Symbol.iterator](); !(r = (c = a.next()).done) && (n.push(c.value), !e || n.length !== e); r = !0);
            } catch (t) {
                o = !0, i = t
            } finally {
                try {
                    r || null == a.return || a.return()
                } finally {
                    if (o) throw i
                }
            }
            return n
        }(t, e) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }()
    }

    function u(t, e) {
        if (!t.settings.isUserLoggedIn) return e(t);
        var n = a(Object(o.e)("/core/users/settings.js?v=".concat(+new Date)), 1)[0];
        fetch(n, {
            method: "GET"
        }).then((function(t) {
            return t.json()
        })).then((function(n) {
            return e(function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? i(Object(n), !0).forEach((function(e) {
                        c(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }({
                runnerSite: n.parent_site,
                profileSite: n.user_site
            }, t))
        })).catch((function() {
            return e(t)
        }))
    }
    var s = {
        addTask: function(t) {
            function e(e) {
                var n = e.target;
                return e.isIntersecting ? t.firstOnly && t._reportedIntersections > 0 ? null : (t._reportedIntersections++, t.firstOnly ? (t.observer.disconnect(), t.mutationObserver.disconnect()) : t.oneTime && (t.observer.unobserve(n), t.finished.add(n)), void(t.onIntersect && t.onIntersect(e))) : (function(e) {
                    if (t.onBellowViewport || t.onAboveViewport) {
                        var n = e.getBoundingClientRect().top;
                        n < 0 && t.onAboveViewport && t.onAboveViewport(e), n >= 0 && t.onBellowViewport && t.onBellowViewport(e)
                    }
                }(n), null)
            }

            function n(e) {
                t.observer.observe(e)
            }
            return t._reportedIntersections = t._reportedIntersections || 0, t.threshold = t.threshold || 0, t.finished = t.finished || new Set([]), t.observer = new IntersectionObserver((function(t) {
                t.forEach(e)
            }), {
                rootMargin: "0px 0px ".concat(t.threshold, "px 0px")
            }), t.selector && (document.querySelectorAll(t.selector).forEach(n), t.mutationObserver = function(t) {
                var e = new MutationObserver((function(e) {
                    e.forEach((function(e) {
                        var n = e.target;
                        "childList" === e.type && n.querySelectorAll(t.selector).forEach((function(e) {
                            t.finished.has(e) || (t.onAppear && t.onAppear(e), t.observer.observe(e))
                        }))
                    }))
                }));
                return e.observe(document.body, {
                    childList: !0,
                    subtree: !0
                }), e
            }(t)), t.rawNodes && t.rawNodes.forEach(n), [t.observer, t.mutationObserver]
        }
    };

    function f(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            e && (r = r.filter((function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function l(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2 ? f(Object(n), !0).forEach((function(e) {
                d(t, e, n[e])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : f(Object(n)).forEach((function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }))
        }
        return t
    }

    function d(t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n, t
    }

    function p(t, e) {
        return function(t) {
            if (Array.isArray(t)) return t
        }(t) || function(t, e) {
            if (!(Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t))) return;
            var n = [],
                r = !0,
                o = !1,
                i = void 0;
            try {
                for (var c, a = t[Symbol.iterator](); !(r = (c = a.next()).done) && (n.push(c.value), !e || n.length !== e); r = !0);
            } catch (t) {
                o = !0, i = t
            } finally {
                try {
                    r || null == a.return || a.return()
                } finally {
                    if (o) throw i
                }
            }
            return n
        }(t, e) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }()
    }

    function v(t) {
        return t.substr(1).split("&").map((function(t) {
            return t.split("=")
        })).reduce((function(t, e) {
            var n = p(e, 2),
                r = n[0],
                o = n[1];
            return l(l({}, t), {}, d({}, r, o))
        }), {})
    }
    var b = n(5),
        h = n(0);

    function m(t) {
        return Object(h.a)(".listicle-slideshow", (function(e) {
            n.e(22).then(n.bind(null, 71)).then((function(n) {
                n.default(e, t.eventBus)
            }))
        })), Object(h.a)(".js--fullscreen-preview", (function(e) {
            n.e(15).then(n.bind(null, 60)).then((function(n) {
                n.default(e, t.eventBus)
            }))
        })), Object(h.a)(".js-listicle-switch-page", (function(e) {
            n.e(21).then(n.bind(null, 72)).then((function(n) {
                n.default(e, t.eventBus)
            }))
        })), Object(h.a)(".listicle-voting", (function(e) {
            n.e(14).then(n.bind(null, 68)).then((function(n) {
                n.default(e, t)
            }))
        })), t
    }
    var y = n(1);

    function g(t) {
        return Object(y.a)((function() {
            n.e(12).then(n.bind(null, 57)).then((function(e) {
                return e.default(t.settings)
            }))
        })), t
    }

    function w(t) {
        return Object(y.a)((function() {
            n.e(23).then(n.bind(null, 59)).then((function(e) {
                e.default(t)
            }))
        })), t
    }

    function O(t) {
        return Object(y.a)((function() {
            var t = document.querySelectorAll(".js-hidden-panel");
            t.length && n.e(24).then(n.bind(null, 61)).then((function(e) {
                e.default(t)
            }))
        })), t
    }
    var j = n(15),
        E = n(21),
        S = n(8),
        L = n(24),
        P = n(17),
        k = [],
        T = Object(P.a)(),
        A = !1;

    function _() {
        A = !0, k.forEach(T), k.length = 0
    }

    function D() {
        setTimeout(_, 3100)
    }

    function I(t) {
        if (!A) return k.push(t), 1 === k.length ? "complete" !== document.readyState ? window.addEventListener("load", D) : D() : void 0;
        t()
    }

    function x(t, e) {
        if (null == t) return {};
        var n, r, o = function(t, e) {
            if (null == t) return {};
            var n, r, o = {},
                i = Object.keys(t);
            for (r = 0; r < i.length; r++) n = i[r], e.indexOf(n) >= 0 || (o[n] = t[n]);
            return o
        }(t, e);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(t);
            for (r = 0; r < i.length; r++) n = i[r], e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n])
        }
        return o
    }

    function C(t) {
        document.fonts.add(t),
            function(t) {
                var e = "rm-fl-".concat(t.family.toLowerCase().replace(/ /g, "_"), "-").concat(t.weight);
                document.body.classList.add(e)
            }(t)
    }

    function B(t, e, n) {
        var r = n.weight,
            o = n.style,
            i = n.unicodeRange;
        return function() {
            var n = r.split(",").map((function(n) {
                return new FontFace(t, "url(".concat(e, ")"), {
                    style: o,
                    unicodeRange: i,
                    display: "swap",
                    weight: n
                })
            }));
            n[0].load().then((function() {
                ! function(t) {
                    localStorage.setItem("rmFont-".concat(t), "1")
                }(e), n.forEach(C)
            }))
        }
    }

    function q(t, e, n) {
        var r = n.selector,
            o = B(t, e, x(n, ["selector"]));
        r ? s.addTask({
            selector: r,
            firstOnly: !0,
            oneTime: !0,
            threshold: 200,
            onIntersect: o
        }) : ! function(t) {
            return "1" === localStorage.getItem("rmFont-".concat(t))
        }(e) ? I(o) : o()
    }
    var M = n(20);

    function R(t) {
        return Object(h.a)(".like-button", (function(t) {
            var e = t.dataset.postLikes >= 1 ? t.dataset.postLikes : "",
                n = '<span class="like-label"><span class="like-count"> '.concat(e, " </span></span>");
            t.innerHTML = '<a class="like-btn like" href="/login"><i class="heart fa fa-heart-o"></i></a>' + n
        })), Object(h.a)(".follow-button", (function(t) {
            t.classList.add("loaded"), t.innerHTML = '<a class="color-inherit" href="/login"><span class="follow-button-label follow-button-label--follow">Follow</span></a>'
        })), t
    }

    function U(t) {
        var e = document.querySelector(".rebelbar__menu-toggle");
        if (!e) return t;
        e.addEventListener("click", (function(t) {
            document.body.classList.toggle("menu-opened")
        }));
        var n = document.querySelector(".menu-overlay");
        return n && n.addEventListener("click", (function() {
            document.body.classList.remove("menu-opened")
        })), t
    }

    function F(t) {
        return Object(h.a)('img[usemap ^="#image-map-"]', (function(t) {
            n.e(11).then(n.bind(null, 73)).then((function(e) {
                return e.default(t)
            }))
        })), t
    }

    function V(t) {
        return Object(h.a)(".js-keep-reading", function(t) {
            return function() {
                n.e(20).then(n.bind(null, 55)).then((function(e) {
                    return e.default(t)
                }))
            }
        }(t), !0), t
    }

    function W(t) {
        var e = document.querySelectorAll(".live-section-update");
        return e.length && n.e(7).then(n.bind(null, 62)).then((function(n) {
            e.forEach((function(e) {
                n.default(t, e)
            }))
        })), t
    }
    var H = n(13),
        z = n(7),
        N = n(2),
        J = n(16),
        Q = Object(J.a)(9),
        K = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    if (K) {
        var Y = function() {
            switch (K.effectiveType) {
                case "4g":
                    Q.changeSettings(15);
                    break;
                case "slow-2g":
                case "2g":
                    Q.changeSettings(3);
                    break;
                default:
                    Q.changeSettings(6)
            }
        };
        K.addEventListener("change", Y), Y()
    }
    var X = Q.release,
        G = Q.request;

    function Z(t) {
        G(1500).then((function(e) {
            var n = t.target;
            window.FB.XFBML.parse(n.parentElement, (function() {
                X(e)
            }))
        }))
    }

    function $() {
        var t = window.REBELMOUSE_BOOTSTRAP_DATA;
        window.FB.init({
            appId: t.fbId,
            version: t.fbAppVersion,
            status: !0,
            cookie: !0
        })
    }

    function tt(t) {
        G(1500).then((function(e) {
            var n = t.target;
            n.addEventListener("load", (function() {
                X(e)
            })), n.src = n.dataset.runnerSrc, delete n.dataset.runnerSrc
        }))
    }

    function et(t) {
        var e = t.closest(".rebellt-item");
        if (e && e.offsetWidth > 0) return e;
        var n = t.closest(".body-description");
        if (n && n.offsetWidth > 0) return n;
        var r = t.closest("article");
        return r && r.offsetWidth > 0 ? r : null
    }

    function nt(t, e, n, r) {
        if (n > t) return {
            maxWidth: t,
            maxHeight: e
        };
        var o = n,
            i = parseInt(o * e / t, 10);
        return r && i > r && (i = r, o = parseInt(i * t / e, 10)), {
            maxWidth: o,
            maxHeight: i
        }
    }

    function rt(t, e) {
        return function(t) {
            if (Array.isArray(t)) return t
        }(t) || function(t, e) {
            if (!(Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t))) return;
            var n = [],
                r = !0,
                o = !1,
                i = void 0;
            try {
                for (var c, a = t[Symbol.iterator](); !(r = (c = a.next()).done) && (n.push(c.value), !e || n.length !== e); r = !0);
            } catch (t) {
                o = !0, i = t
            } finally {
                try {
                    r || null == a.return || a.return()
                } finally {
                    if (o) throw i
                }
            }
            return n
        }(t, e) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }()
    }

    function ot(t) {
        return t.split("=")
    }

    function it(t) {
        var e = rt(t, 2),
            n = e[0],
            r = e[1];
        return "".concat(n, "=").concat(r)
    }

    function ct(t) {
        return "?".concat(Object.entries(t).map(it).join("&"))
    }

    function at() {
        var t = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
        if (!t) return 75;
        switch (t.effectiveType) {
            case "4g":
                return 80;
            case "2g":
            case "slow-2g":
                return 60;
            default:
                return 75
        }
    }

    function ut(t, e, n) {
        return parseInt(t in e ? e[t] : n[t], 10)
    }

    function st(t, e, n, r) {
        var o, i = parseInt(n, 10),
            c = r ? parseInt(r, 10) : null,
            a = (o = window.devicePixelRatio ? parseInt(window.devicePixelRatio, 10) : 1, Math.min(3, Math.max(o, 1))),
            u = new URL(t),
            s = Object.fromEntries(u.search.substring(1).split("&").map(ot));
        if ("coordinates" in s && "height" in s && "width" in s) {
            var f = function(t, e, n, r, o, i) {
                    var c = nt(n, e, o, i),
                        a = c.maxWidth,
                        u = c.maxHeight;
                    return {
                        width: a,
                        height: u,
                        queryString: ct({
                            coordinates: t,
                            quality: at(),
                            width: parseInt(a * r),
                            height: parseInt(u * r)
                        })
                    }
                }(s.coordinates, ut("height", e, s), ut("width", e, s), a, i, c),
                l = f.width,
                d = f.height,
                p = f.queryString;
            return u.search = p, {
                src: u.href,
                height: d,
                width: l
            }
        }
        if ("width" in s) {
            var v = function(t, e, n, r, o) {
                    var i = nt(e, t, r, o),
                        c = i.maxWidth;
                    return {
                        width: c,
                        height: i.maxHeight,
                        queryString: ct({
                            quality: at(),
                            width: c * n
                        })
                    }
                }(ut("height", e, s), ut("width", e, s), a, i, c),
                b = v.width,
                h = v.height,
                m = v.queryString;
            return u.search = m, {
                src: u.href,
                height: h,
                width: b
            }
        }
        return null
    }

    function ft(t) {
        var e = et(t);
        if (e) {
            var n = st(t.dataset.runnerSrc, t.dataset, e.offsetWidth);
            n && (! function(t, e, n) {
                e && n && (t.width = e, t.height = n)
            }(t, n.width, n.height), t.dataset.runnerSrc = n.src)
        } else;
    }

    function lt(t) {
        return function() {
            X(t)
        }
    }

    function dt(t) {
        G(1e3).then((function(e) {
            var n = t.target,
                r = n.dataset.runnerSrc,
                o = lt(e);
            n.addEventListener("load", o), n.src = r, n.removeAttribute("data-runner-src"), n.removeAttribute("type")
        }))
    }

    function pt(t) {
        G(1e3).then((function(e) {
            var n = t.target,
                r = n.dataset.runnerImgHd;
            if (window.REBELMOUSE_BOOTSTRAP_DATA.engine.lazyLoadShortcodeImages) {
                var o = st(r, {}, n.offsetWidth, n.offsetHeight);
                o && (r = o.src)
            }
            var i = lt(e),
                c = new Image;
            c.addEventListener("load", i), c.src = r, n.style.backgroundImage = "url(".concat(r, ")")
        }))
    }
    var vt = {
        "4g": function() {
            return 300
        },
        "3g": function() {
            return 700
        },
        "2g": function() {
            return 900
        },
        "slow-2g": function() {
            return 900
        }
    };
    var bt = [];

    function ht(t) {
        var e = bt.shift();
        e && X(e)
    }

    function mt(t) {
        G(1700).then((function(e) {
            t.target.classList.add("instagram-media"), t.target.classList.remove("lazy-instagram-media"), window.instgrm.Embeds.process(), bt.push(e)
        }))
    }

    function yt(t) {
        t.classList.remove("instagram-media"), t.classList.add("lazy-instagram-media")
    }

    function gt() {
        window.__igEmbedLoaded = ht, document.querySelectorAll("blockquote.instagram-media").forEach(yt)
    }

    function wt() {}
    var Ot = [];

    function jt() {
        var t = Ot.shift();
        t && X(t)
    }

    function Et(t) {
        G(1200).then((function(e) {
            var n = t.target,
                r = n.closest(".rm-embed-container.rm-loading");
            r && (r.classList.remove("rm-loading"), r.classList.add("rm-loaded")), n.dataset.twitterTweetId || (n.classList.add("twitter-tweet"), n.dataset.twitterTweetId = n.dataset.lazyTweetId), Ot.push(e), window.twttr.widgets.load(n.parentElement)
        }))
    }

    function St() {
        twttr.ready((function() {
            twttr.events.bind("rendered", jt)
        }))
    }

    function Lt(t) {
        t.classList.remove("twitter-tweet"), t.dataset.lazyTweetId = t.dataset.twitterTweetId, delete t.dataset.twitterTweetId
    }

    function Pt() {
        document.querySelectorAll("blockquote.twitter-custom-tweet").forEach(Lt)
    }
    var kt = !1,
        Tt = [];

    function At(t) {
        t.target.classList.add("tiktok-embed"), Tt.push(t.target), kt || (kt = !0, Object(S.a)("https://www.tiktok.com/embed.js?bust=".concat(Date.now()), _t))
    }

    function _t() {
        kt = !1, setTimeout(Dt, 5e3)
    }

    function Dt() {
        Tt.forEach(It), Tt.length = 0
    }

    function It(t) {
        t.style.minWidth = "auto", t.style.minHeight = "auto"
    }

    function xt(t) {
        var e = nt(542, 728, et(t).offsetWidth),
            n = e.maxWidth,
            r = e.maxHeight;
        t.style.display = "block", t.style.minWidth = "".concat(n, "px"), t.style.minHeight = "".concat(r, "px")
    }

    function Ct(t) {
        var e = document.createElement("script"),
            n = t.getAttribute("data-src");
        n ? e.src = n : e.text = t.text, t.replaceWith(e)
    }
    var Bt = n(14);

    function qt(t) {
        var e = document.querySelector("script#_".concat(t.target.dataset.id, ".lazy-style")),
            n = document.createElement("style");
        n.type = "text/css", n.classList.add("lazy-style"), n.id = "#_".concat(t.target.dataset.id), n.textContent = e.textContent, document.head.appendChild(n), e.remove()
    }

    function Mt(t) {
        var e;
        return Object(Bt.a)(), e = t.intersectionObserverProvider, window.REBELMOUSE_BOOTSTRAP_DATA.engine.lazyLoadShortcodeImages && Object(h.a)("img[data-runner-src]", ft), Object(N.a)(e, {
                treshholdCalculator: vt,
                initialThreshold: 50,
                selector: "img[data-runner-src]",
                onIntersect: dt
            }), Object(N.a)(e, {
                treshholdCalculator: vt,
                initialThreshold: 50,
                selector: "[data-runner-img-hd]",
                onIntersect: pt
            }),
            function(t) {
                Object(N.a)(t, {
                    onIntersect: tt,
                    selector: "iframe[data-runner-src]",
                    initialThreshold: 500
                })
            }(t.intersectionObserverProvider),
            function(t) {
                Object(N.a)(t, {
                    onIntersect: mt,
                    beforeDependencyLoad: gt,
                    onAppear: yt,
                    initialThreshold: 300,
                    selector: "blockquote.instagram-media,blockquote.lazy-instagram-media",
                    dependencySrc: "https://www.instagram.com/embed.js"
                })
            }(t.intersectionObserverProvider),
            function(t) {
                Object(N.a)(t, {
                    onIntersect: Z,
                    onDependencyLoad: $,
                    initialThreshold: 500,
                    selector: ".fb-post, .fb-page, .fb-video, .fb-comments",
                    dependencySrc: "https://connect.facebook.net/en_US/sdk.js"
                })
            }(t.intersectionObserverProvider),
            function(t) {
                Object(N.a)(t, {
                    onIntersect: wt,
                    initialThreshold: 500,
                    dependencySrc: "https://embed.redditmedia.com/widgets/platform.js",
                    selector: "blockquote.reddit-card"
                })
            }(t.intersectionObserverProvider),
            function(t) {
                Object(N.a)(t, {
                    onIntersect: Et,
                    onDependencyLoad: St,
                    beforeDependencyLoad: Pt,
                    selector: "blockquote.twitter-custom-tweet",
                    dependencySrc: "https://platform.twitter.com/widgets.js",
                    initialThreshold: 400
                })
            }(t.intersectionObserverProvider),
            function(t) {
                Object(N.a)(t, {
                    onIntersect: At,
                    onAppear: xt,
                    initialThreshold: 400,
                    selector: ".tiktok_lazy_shortcode"
                })
            }(t.intersectionObserverProvider),
            function(t) {
                Object(N.a)(t, {
                    onIntersect: qt,
                    initialThreshold: 500,
                    selector: ".viewport-css-anchor"
                })
            }(t.intersectionObserverProvider), Object(y.a)((function() {
                n.e(25).then(n.bind(null, 54)).then((function(t) {
                    t.default()
                }))
            })), Object(h.a)('[type="text/lazy-javascript"]', Ct), t
    }

    function Rt(t) {
        return Object(h.a)(".login-signup-wrapper", (function(e) {
            n.e(0).then(n.bind(null, 52)).then((function(n) {
                n.default(e, t)
            }))
        })), t
    }

    function Ut(t) {
        return Object(h.a)(".community-native-wrp", (function(e) {
            Promise.all([n.e(9), n.e(0), n.e(19)]).then(n.bind(null, 69)).then((function(n) {
                n.default(e, t)
            }))
        })), t
    }

    function Ft(t) {
        return Object(y.a)((function() {
            n.e(8).then(n.bind(null, 56)).then((function(e) {
                return e.default(t)
            }))
        })), t
    }
    var Vt = n(6),
        Wt = n(25),
        Ht = n(22);

    function zt(t, e) {
        return t.dataset.clipboardText ? function(t) {
            t.href = "javascript:void(0)", t.addEventListener("click", (function(t) {
                t.preventDefault(), navigator.clipboard.writeText(t.currentTarget.dataset.clipboardText), Object(Ht.a)("copied to clipboard", "success")
            }))
        }(t) : t.classList.contains("share-plus") ? function(t) {
            var e = t.parentElement.children,
                n = !1,
                r = Array.from(e).reduce((function(e, r) {
                    return n && e.push(r), n = n || r === t, e
                }), []);
            r.forEach((function(t) {
                return t.style.display = "none"
            })), t.addEventListener("click", (function(t) {
                t.currentTarget.remove(), r.forEach((function(t) {
                    return t.style.display = "inline-block"
                }))
            }))
        }(t) : function(t, e) {
            t.addEventListener("click", (function(t) {
                var n = t.currentTarget,
                    r = n.dataset.trackShare,
                    o = n.href;
                return "Email" != r && "Sms" != r && (t.preventDefault(), t.stopPropagation()), Object(Wt.a)(o, (r || "").toLowerCase()), e.publish(b.b, {
                    url: o,
                    provider: (r || "").toLowerCase()
                }), !1
            }), !0)
        }(t, e)
    }

    function Nt(t) {
        return Object(h.a)(".share-panel a", (function(e) {
            zt(e, t.eventBus)
        })), t
    }

    function Jt(t) {
        n.e(16).then(n.bind(null, 70)).then((function(e) {
            e.default(t)
        }))
    }

    function Qt(t) {
        return window.addEventListener("load", (function() {
            var t = '[data-href="https://'.concat(location.host).concat(location.pathname, '"]'),
                e = document.querySelector(t);
            e && e.scrollIntoView(!0)
        })), t
    }

    function Kt(t) {
        return Object(h.a)(".js-scroll-trigger[data-toggle-class], .js-scroll-trigger[data-triggers]", (function(e) {
            n.e(26).then(n.bind(null, 58)).then((function(n) {
                n.default(t, e)
            }))
        })), t
    }

    function Yt(t) {
        var e = document.querySelector(".search-form__open"),
            n = document.querySelector(".search-form");
        return n && e && e.addEventListener("click", (function() {
            n.classList.toggle("show-search")
        })), document.addEventListener("keypress", (function(t) {
            13 === t.keyCode && document.body.classList.contains("show-search") && document.querySelector(".search-form > form").submit()
        })), t
    }

    function Xt(t, e) {
        return function(t) {
            if (Array.isArray(t)) return t
        }(t) || function(t, e) {
            if (!(Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t))) return;
            var n = [],
                r = !0,
                o = !1,
                i = void 0;
            try {
                for (var c, a = t[Symbol.iterator](); !(r = (c = a.next()).done) && (n.push(c.value), !e || n.length !== e); r = !0);
            } catch (t) {
                o = !0, i = t
            } finally {
                try {
                    r || null == a.return || a.return()
                } finally {
                    if (o) throw i
                }
            }
            return n
        }(t, e) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }()
    }

    function Gt(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            e && (r = r.filter((function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function Zt(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2 ? Gt(Object(n), !0).forEach((function(e) {
                $t(t, e, n[e])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Gt(Object(n)).forEach((function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }))
        }
        return t
    }

    function $t(t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n, t
    }
    var te = {
        trackPageView: function(t) {
            var e = t.url,
                n = t.customDimensions,
                r = t.headline,
                o = t.id,
                i = document.querySelector('[elid="'.concat(o, '"] .headline')),
                c = {
                    page_title: i ? i.innerText : r,
                    page_location: e
                };
            ne(n, (function(t, e, n, r) {
                return t(e, "page_view", Zt(Zt({}, c), r))
            }))
        },
        trackEvent: re,
        trackPostCardClick: function(t) {
            re(Zt(Zt({}, t), {}, {
                eventType: "post_interaction",
                action: "post_card_click"
            }))
        }
    };

    function ee(t) {
        "function" == typeof window.gtag ? t(window.gtag) : setTimeout((function() {
            ee(t)
        }), 100)
    }

    function ne(t, e) {
        ee((function(n) {
            var r, o = t ? (r = t, Object.entries(r).reduce((function(t, e) {
                var n = Xt(e, 2),
                    r = n[0],
                    o = n[1];
                return Zt(Zt({}, t), $t({}, "dimension".concat(r), o.toString()))
            }), {})) : {};
            e(n, "event", "send", o)
        }))
    }

    function re(t) {
        var e = t.eventType,
            n = t.action;
        ne(t.customDimensions, (function(t, r, o, i) {
            return t(r, n, Zt({
                event_category: e
            }, i))
        }))
    }

    function oe(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            e && (r = r.filter((function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function ie(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2 ? oe(Object(n), !0).forEach((function(e) {
                ce(t, e, n[e])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : oe(Object(n)).forEach((function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }))
        }
        return t
    }

    function ce(t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n, t
    }

    function ae(t, e) {
        return function(t) {
            if (Array.isArray(t)) return t
        }(t) || function(t, e) {
            if (!(Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t))) return;
            var n = [],
                r = !0,
                o = !1,
                i = void 0;
            try {
                for (var c, a = t[Symbol.iterator](); !(r = (c = a.next()).done) && (n.push(c.value), !e || n.length !== e); r = !0);
            } catch (t) {
                o = !0, i = t
            } finally {
                try {
                    r || null == a.return || a.return()
                } finally {
                    if (o) throw i
                }
            }
            return n
        }(t, e) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }()
    }
    var ue = {
            "page-view": "user"
        },
        se = {
            dp: "post",
            pp: "post",
            fp: "section",
            sp: "section",
            tp: "tag"
        };

    function fe() {
        var t = ae(window.REBELMOUSE_BOOTSTRAP_DATA.resourceId.split("_"), 1)[0];
        return se[t] || "public"
    }

    function le(t, e) {
        var n, r = {
                event: t,
                version: 1,
                format: "json",
                data: JSON.stringify(ie(ie({}, (n = Object(j.a)(), {
                    site_id: window.REBELMOUSE_BOOTSTRAP_DATA.site.id,
                    roar_id: window.REBELMOUSE_BOOTSTRAP_DATA.runner.id,
                    client: "tablet" !== n ? n : "other",
                    referrer: document.referrer
                })), e))
            },
            o = ue[t] || "pages",
            i = new URLSearchParams(r).toString();
        fetch("https://".concat(o, "-stats.rbl.ms/spacer.gif?").concat(Date.now(), "&").concat(i))
    }

    function de() {
        return new Promise((function(t, e) {
            var n, r, o = sessionStorage.getItem("userTrackingId");
            o ? t(o) : (n = "https://res.rbl.ms/core/users/tracking/", r = {
                user_tracking_id: null,
                last_page_view_timestamp: null,
                user_type: "casual"
            }, fetch(n, {
                method: "POST",
                body: JSON.stringify(r)
            }).then((function(t) {
                return t.json()
            }))).then((function(e) {
                var n = e.user_tracking_id;
                sessionStorage.setItem("userTrackingId", n), t(n)
            })).catch((function(t) {
                return e(t)
            }))
        }))
    }
    var pe = {
        trackPageView: function(t) {
            var e = t.post,
                n = e ? {
                    post_id: t.id,
                    provider_id: e.providerId,
                    sections: e.sections,
                    buckets: e.buckets,
                    authors: e.authors
                } : {
                    section_id: 0,
                    sections: [0]
                };
            le(t.id ? "post-page-view" : "section-page-view", n)
        },
        trackTimeOnPage: function(t) {
            var e = t.timeMarker;
            le("".concat(fe(), "-page-view-duration"), {
                duration: e
            })
        },
        trackUser: function() {
            var t = window.REBELMOUSE_BOOTSTRAP_DATA.post;
            de().then((function(e) {
                le("page-view", {
                    post_id: t.id,
                    sections: t.sections,
                    user_tracking_id: e
                })
            }))
        },
        trackPostCardClick: function(t) {
            var e = t.id,
                n = t.post;
            le("post-card-click", {
                post_id: e,
                provider_id: n.providerId,
                sections: n.sections
            })
        }
    };

    function ve(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            e && (r = r.filter((function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function be(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2 ? ve(Object(n), !0).forEach((function(e) {
                he(t, e, n[e])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : ve(Object(n)).forEach((function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }))
        }
        return t
    }

    function he(t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n, t
    }

    function me(t) {
        return (me = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function ye(t) {
        window.PARSELY && window.PARSELY.beacon && "function" == typeof window.PARSELY.beacon.trackPageView && window.PARSELY.beacon.trackPageView(be(be({}, t), {}, {
            url: document.URL,
            urlref: document.referrer
        }))
    }

    function ge(t, e) {
        var n;
        ye({
            action: t,
            data: (n = e, "object" !== me(n) ? {} : Object.keys(n).reduce((function(t, e) {
                return t["_".concat(e)] = n[e], t
            }), {}))
        })
    }
    var we = {
        trackPageView: function() {
            ye({
                js: 1
            })
        },
        trackPageLoad: function(t) {
            ge("_pageLoad", t)
        },
        trackPostMouseOver: function(t) {
            ge("_post_mouse_over", t)
        },
        trackTimeOnPage: function(t) {
            ge("_page-view-duration", t.timeMarker)
        },
        trackPostCardClick: function(t) {
            ge("_post_card_click", t)
        }
    };

    function Oe(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            e && (r = r.filter((function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function je(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2 ? Oe(Object(n), !0).forEach((function(e) {
                Ee(t, e, n[e])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Oe(Object(n)).forEach((function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }))
        }
        return t
    }

    function Ee(t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n, t
    }
    var Se = [pe, te, we];
    var Le = function(t) {
            var e = Object(z.a)("#post-context-".concat(t.id));
            Se.forEach((function(n) {
                n.trackPageView(je(je({}, t), e))
            }))
        },
        Pe = function(t) {
            var e = Object(z.a)("#post-context-".concat(t.id));
            pe.trackPageView(je(je({}, t), e)), we.trackPageLoad(je(je({}, t), e))
        },
        ke = function(t) {
            pe.trackTimeOnPage({
                timeMarker: t
            }), we.trackTimeOnPage({
                timeMarker: t
            })
        },
        Te = function(t) {
            pe.trackUser(je({}, t))
        },
        Ae = function(t) {
            Se.forEach((function(e) {
                e.trackPostCardClick(function(t) {
                    var e = t.getAttribute("elid");
                    return je({
                        id: e
                    }, Object(z.a)("#post-context-".concat(e)))
                }(t))
            }))
        },
        _e = function(t) {
            var e = Object(z.a)("#post-context-".concat(t.id));
            te.trackEvent(je(je({}, t), e))
        };
    var De = n(3),
        Ie = n(4),
        xe = Object(Ie.a)((function(t, e) {
            var n = t.name,
                r = t.delta;
            e("event", n, {
                event_category: "Web Vitals",
                event_label: t.id,
                value: Math.round("CLS" === n ? 1e3 * r : r),
                non_interaction: !0
            })
        }));

    function Ce(t) {
        ee(xe(t))
    }

    function Be(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            e && (r = r.filter((function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function qe(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2 ? Be(Object(n), !0).forEach((function(e) {
                Me(t, e, n[e])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Be(Object(n)).forEach((function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }))
        }
        return t
    }

    function Me(t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n, t
    }

    function Re() {
        Object(h.a)("[elid]", (function(t) {
            ! function(t) {
                t.querySelectorAll("a[href]").forEach((function(e) {
                    /^(https?:)?\/\/\w+/.exec(e.href) && e.addEventListener("click", (function(e) {
                        var n = e.currentTarget,
                            r = "_blank" === n.getAttribute("target"),
                            o = n.classList.contains("js-listicle-switch-page");
                        r || e.preventDefault(), Ae(t), r || o || (document.location.href = n.href)
                    }))
                }))
            }(t)
        }))
    }

    function Ue() {
        var t = [1, 2, 5, 10, 20, 30].map((function(t) {
                return 1e3 * t
            })),
            e = function(t, e, n) {
                var r, o = +new Date,
                    i = 0,
                    c = e[0],
                    a = function() {
                        clearTimeout(r)
                    };
                return {
                    start: function a(u) {
                        i = +new Date, r = setTimeout((function() {
                            u = u || 0, i - o > n || (t(c), c = e[u += 1] || e[e.length - 1], a(u))
                        }), c)
                    },
                    pause: function() {
                        a(), c -= new Date - i
                    },
                    stop: a
                }
            }(ke, t, 18e5);
        e.start(), document.addEventListener("visibilitychange", (function() {
            "visible" === document.visibilityState ? e.start() : e.pause()
        }))
    }
    var Fe = n(23);

    function Ve(t) {
        return Object(y.a)((function() {
            var t, e = document.querySelector("[data-toggle-class=".concat("with-fixed-header", "]"));
            e && document.addEventListener("scroll", (t = e, Object(Fe.a)((function() {
                var e = t.dataset.toggleClass;
                t.getBoundingClientRect().top <= 0 ? document.body.classList.add(e) : document.body.classList.remove(e)
            }))), {
                passive: !0
            })
        })), t
    }

    function We(t) {
        return Object(h.a)(".get-alerts", (function(e) {
            n.e(17).then(n.bind(null, 63)).then((function(n) {
                n.default(e, t.settings)
            }))
        })), t
    }

    function He(t) {
        return Object(h.a)(".tabs", (function(t) {
            n.e(27).then(n.bind(null, 66)).then((function(e) {
                return e.default(t)
            }))
        })), t
    }

    function ze(t) {
        return Object(h.a)(".js-show-video", (function(t) {
            n.e(29).then(n.bind(null, 64)).then((function(e) {
                e.default(t)
            }))
        })), t
    }

    function Ne(t) {
        t.addEventListener("click", (function e() {
            t.removeEventListener("click", e, !1), t.removeChild(t.firstElementChild), "theo" === window.REBELMOUSE_BOOTSTRAP_DATA.engine.defaultVideoPlayer && n.e(28).then(n.bind(null, 65)).then((function(e) {
                return e.default(t)
            }))
        }), !1)
    }

    function Je(t) {
        Object(h.a)(".uplynk-container", Ne, !1)
    }

    function Qe(t) {
        return Object(h.a)(".rebellt-item.has_voting", (function(t) {
            n.e(18).then(n.bind(null, 74)).then((function(e) {
                e.default(t)
            }))
        })), t
    }

    function Ke(t) {
        return window.localStorage.getItem("gdpr-cookie") || (Object(h.a)(".gdpr-cookie", (function(t) {
            t.classList.remove("hidden")
        })), Object(h.a)(".gdpr-cookie-accept", (function(t) {
            t.addEventListener("click", (function() {
                window.localStorage.setItem("gdpr-cookie", "accepted"), document.querySelectorAll(".gdpr-cookie").forEach((function(t) {
                    t.classList.add("hidden")
                }))
            }))
        }))), t
    }

    function Ye(t) {
        return function(t) {
            if (Array.isArray(t)) {
                for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
                return n
            }
        }(t) || function(t) {
            if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
        }(t) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance")
        }()
    }

    function Xe(t, e) {
        return function(n) {
            return t.pushTask(n, {
                timeout: e
            })
        }
    }

    function Ge(t, e, n) {
        return function() {
            var r = document.querySelector(n);
            if (r && r.textContent) {
                var o = document.createElement("script");
                o.textContent = r.textContent, document.head.appendChild(o), r.remove()
            }
            e.length && (e.forEach(Xe(t, 200)), e.length = 0)
        }
    }

    function Ze() {
        var t = [],
            e = window.requestIdleCallback ? window.requestIdleCallback : function(t) {
                return setTimeout(t, 0)
            };

        function n() {
            var r = t.shift();
            if (r) {
                var o = r.timeout,
                    i = r.fun;
                e(function(t) {
                    return function() {
                        return t(), n(), null
                    }
                }(i), {
                    timeout: o
                })
            }
        }
        return {
            pushTask: function(e, r) {
                var o = r.timeout;
                t.push({
                    fun: e,
                    timeout: o
                }), 1 === t.length && n()
            }
        }
    }
    var $e = function(t, e, n, r) {
        return function(o) {
            var i = Ze();
            t.forEach(Xe(i, 200));
            var c = Ge(i, r, "script#user-javascript-active");
            return Object(y.a)(c), e.push(c), e.push(Ge(i, n, "script#user-javascript-lowest")), I(function(t, e) {
                return function() {
                    e.forEach(Xe(t, 1e3))
                }
            }(i, e)), o
        }
    };
    var tn = function() {
            return [Qt, R, U, Mt, Ve, Yt, Nt, V, Ft, g, Kt, w, m, O, W, We, ze, Je, Ut, H.a, Rt, He, F, Qe, Ke]
        },
        en = function() {
            return [].concat(Ye(tn()), [n.e(13).then(n.bind(null, 67))])
        },
        nn = function(t) {
            return (t.settings.isUserLoggedIn ? en : tn)()
        },
        rn = Object(Vt.a)((function(t) {
            return function(t) {
                var e = t.eventBus,
                    n = "";
                e.subscribe(b.c, (function(t) {
                    t.trackPageView ? Le(t) : _e(qe(qe({}, t), {}, {
                        eventType: "keep_reading",
                        action: "view_more"
                    }))
                })), e.subscribe(b.a, (function(t) {
                    Pe(t, !0), Te(t), n = t.url
                })), e.subscribe(b.d, (function(t) {
                    t.url !== n && t.trackPageView && Le(t)
                }))
            }(t), Re(), Ue(), Object(De.a)(Ce, !0), Object(De.b)(Ce), Object(De.c)(Ce), Object(De.d)(Ce), Object(De.e)(Ce), t
        }), (function(t) {
            var e = {
                url: location.href
            };
            return t.settings.post && (e.id = t.settings.post.id), t.eventBus.publish(b.a, e), t
        }), (function(t) {
            return t.eventBus.subscribe(b.d, (function(e) {
                var n = new CustomEvent("rebelmouse.urlChange", {
                    detail: e
                });
                document.dispatchEvent(n), t.settings.engine.backButtonGoToPage ? window.history.replaceState({}, e.headline || "", e.url) : window.history.pushState({}, e.headline || "", e.url)
            })), t.eventBus.subscribe(b.e, (function(t) {
                var e = new CustomEvent("rebelmouse.urlScrolled", {
                    detail: t
                });
                document.dispatchEvent(e)
            })), t.eventBus.subscribe(b.b, (function(t) {
                var e = new CustomEvent("rebelmouse.postShared", {
                    detail: t
                });
                document.dispatchEvent(e)
            })), t
        }), (function(t) {
            return window.REBELMOUSE_STDLIB = {
                getDevice: j.a,
                loadContextData: z.a,
                initClickHandler: M.a,
                htmlDecode: E.a,
                onElementInViewport: t.intersectionObserverProvider.addTask,
                createElementChangeListener: h.a,
                rebelSlider: Jt,
                loadExternalScript: S.a,
                loadExternalStylesheet: L.a,
                loadFontFace: q
            }, window.REBELMOUSE_INIT_IDLE_QUEUE = $e, t
        }), $e(window.REBELMOUSE_TASKS_QUEUE, window.REBELMOUSE_LOW_TASKS_QUEUE, window.REBELMOUSE_LOWEST_TASKS_QUEUE, window.REBELMOUSE_ACTIVE_TASKS_QUEUE), (function(t) {
            return nn(t).map((function(e) {
                return e.then ? e.then((function(e) {
                    return e.default(t)
                })) : e(t)
            }))
        }));

    function on() {
        var t, e, n;
        (t = window.location.search, e = window.REBELMOUSE_BOOTSTRAP_DATA, n = {
            intersectionObserverProvider: s,
            eventBus: r.a,
            settings: e,
            pathParams: v(t)
        }, new Promise((function(t) {
            return u(n, t)
        }))).then(rn)
    }
    n.p = window.REBELMOUSE_BASE_ASSETS_URL;
    var cn = 0;

    function an() {
        "loading" !== document.readyState ? on() : window.addEventListener("DOMContentLoaded", on)
    }

    function un() {
        0 === --cn && an()
    }

    function sn(t, e) {
        if (!t) {
            cn++;
            var n = document.createElement("script");
            n.src = "".concat(window.REBELMOUSE_BASE_SSL_DOMAIN, "/static/polyfills/").concat(e, ".js"), n.addEventListener("load", un), document.head.appendChild(n)
        }
    }
    sn(window.requestAnimationFrame, "requestAnimationFrame"), sn(window.MutationObserver, "mutationobserver-polyfill"), sn(window.IntersectionObserver, "intersection-observer"), sn("function" == typeof URL, "url-polyfill"), sn(window.URLSearchParams, "urlsearchparams-polyfill"), sn(window.Array.from, "arrayfrom-polyfill"), sn(window.Array.prototype.find, "find-polyfill"), sn(Element.prototype.replaceWith, "replace-with-polyfill"), sn("content" in document.createElement("template"), "template-v2"), sn(window.NodeList.prototype.forEach, "polyfill-ie11-nodelist-foreach"), sn("function" == typeof window.CustomEvent, "event-polyfill"), sn(Element.prototype.closest && Element.prototype.matches, "closest-polyfill"), sn(Object.entries, "entries-polyfill"), sn(Object.fromEntries, "fromEntries-polyfill"), sn(Element.prototype.remove, "remove-polyfill"), sn("classList" in Element.prototype, "classList-polyfill"), sn(window.Promise, "promise-polyfill"), sn(window.fetch, "fetch-polyfill-v3"), sn(Array.prototype.flatMap, "flatMap-polyfill"), 0 === cn && an()
}]);
//# sourceMappingURL=main.7bc0006746b0ab93a9d4.bundle.js.map