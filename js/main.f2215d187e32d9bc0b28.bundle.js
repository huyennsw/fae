! function(e) {
    function t(t) {
        for (var n, o, i = t[0], c = t[1], a = 0, u = []; a < i.length; a++) o = i[a], Object.prototype.hasOwnProperty.call(r, o) && r[o] && u.push(r[o][0]), r[o] = 0;
        for (n in c) Object.prototype.hasOwnProperty.call(c, n) && (e[n] = c[n]);
        for (s && s(t); u.length;) u.shift()()
    }
    var n = {},
        r = {
            3: 0
        };

    function o(t) {
        if (n[t]) return n[t].exports;
        var r = n[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(r.exports, r, r.exports, o), r.l = !0, r.exports
    }
    o.e = function(e) {
        var t = [],
            n = r[e];
        if (0 !== n)
            if (n) t.push(n[2]);
            else {
                var i = new Promise((function(t, o) {
                    n = r[e] = [t, o]
                }));
                t.push(n[2] = i);
                var c, a = document.createElement("script");
                a.charset = "utf-8", a.timeout = 120, o.nc && a.setAttribute("nonce", o.nc), a.src = function(e) {
                    return o.p + "" + ({} [e] || e) + ".f2215d187e32d9bc0b28.bundle.mjs"
                }(e);
                var s = new Error;
                c = function(t) {
                    a.onerror = a.onload = null, clearTimeout(u);
                    var n = r[e];
                    if (0 !== n) {
                        if (n) {
                            var o = t && ("load" === t.type ? "missing" : t.type),
                                i = t && t.target && t.target.src;
                            s.message = "Loading chunk " + e + " failed.\n(" + o + ": " + i + ")", s.name = "ChunkLoadError", s.type = o, s.request = i, n[1](s)
                        }
                        r[e] = void 0
                    }
                };
                var u = setTimeout((function() {
                    c({
                        type: "timeout",
                        target: a
                    })
                }), 12e4);
                a.onerror = a.onload = c, document.head.appendChild(a)
            } return Promise.all(t)
    }, o.m = e, o.c = n, o.d = function(e, t, n) {
        o.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }, o.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, o.t = function(e, t) {
        if (1 & t && (e = o(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (o.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var r in e) o.d(n, r, function(t) {
                return e[t]
            }.bind(null, r));
        return n
    }, o.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return o.d(t, "a", t), t
    }, o.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, o.p = "/static/dist/social-ux/", o.oe = function(e) {
        throw console.error(e), e
    };
    var i = window.webpackJsonp = window.webpackJsonp || [],
        c = i.push.bind(i);
    i.push = t, i = i.slice();
    for (var a = 0; a < i.length; a++) t(i[a]);
    var s = c;
    o(o.s = 31)
}([function(e, t, n) {
    "use strict";

    function r(e, t, n) {
        const r = new Set([]);
        let o = !1;
        document.querySelectorAll(e).forEach(e => {
            n && o || (o = !0, t(e), r.add(e))
        });
        const i = new MutationObserver(() => {
            document.querySelectorAll(e).forEach(e => {
                n && o || r.has(e) || (o = !0, t(e), r.add(e), n && i.disconnect())
            })
        });
        n && o || i.observe(document.body, {
            childList: !0,
            subtree: !0
        })
    }
    n.d(t, "a", (function() {
        return r
    }))
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return s
    }));
    var r = n(17);
    const o = [],
        i = Object(r.a)();

    function c() {
        o.forEach(i), o.length = 0
    }

    function a() {
        window.removeEventListener("scroll", a), setTimeout(c, 0)
    }

    function s(e) {
        o.push(e), 1 == o.length && window.addEventListener("scroll", a, {
            passive: !0
        })
    }
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return s
    }));
    var r = n(1),
        o = n(8),
        i = n(0);
    const c = {
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

    function a() {}

    function s(e, {
        dependencySrc: t,
        selector: n,
        onIntersect: o,
        onAppear: s,
        beforeDependencyLoad: h = a,
        onDependencyLoad: p = a,
        oneTime: m = !0,
        initialThreshold: g = 500,
        thresholdCalculator: v = {}
    }) {
        const b = function({
                dependencySrc: e,
                onDependencyLoad: t,
                beforeDependencyLoad: n
            }) {
                let r = !1,
                    o = !1;
                return {
                    dependencySrc: e,
                    onDependencyLoad() {
                        r || (r = !0, t())
                    },
                    beforeDependencyLoad() {
                        o || (o = !0, n())
                    },
                    needsDependency: null != e,
                    hasLoadedDependency: null == e
                }
            }({
                dependencySrc: t,
                onDependencyLoad: p,
                beforeDependencyLoad: h
            }),
            w = function(e, t) {
                if (e.needsDependency) return function(e, t) {
                    return function(n) {
                        if (e.hasLoadedDependency) return void t(n);
                        f(e, (function() {
                            t(n)
                        }))()
                    }
                }(e, t);
                return t
            }(b, o),
            y = {
                ...c,
                ...v
            },
            E = function e(t, n, r, o, i, c, a, s) {
                return function() {
                    const f = function(e, t) {
                        const n = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
                        if (n && n.effectiveType in t) return t[n.effectiveType]();
                        return e
                    }(n, r);
                    let h = t;
                    f !== n && (t.observers.flatMap(u).forEach(d), h = l(o, f, i, c, a, s, t.task));
                    const p = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
                    if (p) {
                        const t = e(h, f, r, o, i, c, a, s);
                        p.addEventListener("change", t, {
                            once: !0
                        })
                    }
                }
            }(l(e, g, n, w, s, m), g, y, e, n, w, s, m);
        Object(r.a)(E), t && Object(r.a)(function(e, t) {
            return function() {
                e.needsDependency && !e.hasLoadedDependency && Object(i.a)(t, f(e, e.onDependencyLoad), !0)
            }
        }(b, n))
    }

    function u(e) {
        return e
    }

    function d(e) {
        e.disconnect()
    }

    function l(e, t, n, r, o, i, c = {}) {
        const a = {
            ...c,
            selector: n,
            threshold: t,
            onAppear: o,
            oneTime: i,
            onIntersect: r
        };
        return {
            task: a,
            observers: e.addTask(a)
        }
    }

    function f(e, t) {
        return function() {
            e.beforeDependencyLoad(), Object(o.a)(e.dependencySrc, (function() {
                e.hasLoadedDependency = !0, e.onDependencyLoad(), t()
            }))
        }
    }
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return p
    })), n.d(t, "b", (function() {
        return w
    })), n.d(t, "c", (function() {
        return T
    })), n.d(t, "d", (function() {
        return j
    })), n.d(t, "e", (function() {
        return _
    }));
    var r, o, i, c, a = function(e, t) {
            return {
                name: e,
                value: void 0 === t ? -1 : t,
                delta: 0,
                entries: [],
                id: "v1-".concat(Date.now(), "-").concat(Math.floor(8999999999999 * Math.random()) + 1e12)
            }
        },
        s = function(e, t) {
            try {
                if (PerformanceObserver.supportedEntryTypes.includes(e)) {
                    var n = new PerformanceObserver((function(e) {
                        return e.getEntries().map(t)
                    }));
                    return n.observe({
                        type: e,
                        buffered: !0
                    }), n
                }
            } catch (e) {}
        },
        u = !1,
        d = function(e, t) {
            u || "undefined" != typeof InstallTrigger || (addEventListener("beforeunload", (function() {})), u = !0), addEventListener("visibilitychange", (function n(r) {
                "hidden" === document.visibilityState && (e(r), t && removeEventListener("visibilitychange", n, !0))
            }), !0)
        },
        l = function(e) {
            addEventListener("pageshow", (function(t) {
                t.persisted && e(t)
            }), !0)
        },
        f = "function" == typeof WeakSet ? new WeakSet : new Set,
        h = function(e, t, n) {
            var r;
            return function() {
                t.value >= 0 && (n || f.has(t) || "hidden" === document.visibilityState) && (t.delta = t.value - (r || 0), (t.delta || void 0 === r) && (r = t.value, e(t)))
            }
        },
        p = function(e, t) {
            var n, r = a("CLS", 0),
                o = function(e) {
                    e.hadRecentInput || (r.value += e.value, r.entries.push(e), n())
                },
                i = s("layout-shift", o);
            i && (n = h(e, r, t), d((function() {
                i.takeRecords().map(o), n()
            })), l((function() {
                r = a("CLS", 0), n = h(e, r, t)
            })))
        },
        m = -1,
        g = function() {
            return "hidden" === document.visibilityState ? 0 : 1 / 0
        },
        v = function() {
            d((function(e) {
                var t = e.timeStamp;
                m = t
            }), !0)
        },
        b = function() {
            return m < 0 && (m = g(), v(), l((function() {
                setTimeout((function() {
                    m = g(), v()
                }), 0)
            }))), {
                get timeStamp() {
                    return m
                }
            }
        },
        w = function(e, t) {
            var n, r = b(),
                o = a("FCP"),
                i = s("paint", (function(e) {
                    "first-contentful-paint" === e.name && (i && i.disconnect(), e.startTime < r.timeStamp && (o.value = e.startTime, o.entries.push(e), f.add(o), n()))
                }));
            i && (n = h(e, o, t), l((function(r) {
                o = a("FCP"), n = h(e, o, t), requestAnimationFrame((function() {
                    requestAnimationFrame((function() {
                        o.value = performance.now() - r.timeStamp, f.add(o), n()
                    }))
                }))
            })))
        },
        y = {
            passive: !0,
            capture: !0
        },
        E = new Date,
        O = function(e, t) {
            r || (r = t, o = e, i = new Date, L(removeEventListener), S())
        },
        S = function() {
            if (o >= 0 && o < i - E) {
                var e = {
                    entryType: "first-input",
                    name: r.type,
                    target: r.target,
                    cancelable: r.cancelable,
                    startTime: r.timeStamp,
                    processingStart: r.timeStamp + o
                };
                c.forEach((function(t) {
                    t(e)
                })), c = []
            }
        },
        k = function(e) {
            if (e.cancelable) {
                var t = (e.timeStamp > 1e12 ? new Date : performance.now()) - e.timeStamp;
                "pointerdown" == e.type ? function(e, t) {
                    var n = function() {
                            O(e, t), o()
                        },
                        r = function() {
                            o()
                        },
                        o = function() {
                            removeEventListener("pointerup", n, y), removeEventListener("pointercancel", r, y)
                        };
                    addEventListener("pointerup", n, y), addEventListener("pointercancel", r, y)
                }(t, e) : O(t, e)
            }
        },
        L = function(e) {
            ["mousedown", "keydown", "touchstart", "pointerdown"].forEach((function(t) {
                return e(t, k, y)
            }))
        },
        T = function(e, t) {
            var n, i = b(),
                u = a("FID"),
                p = function(e) {
                    e.startTime < i.timeStamp && (u.value = e.processingStart - e.startTime, u.entries.push(e), f.add(u), n())
                },
                m = s("first-input", p);
            n = h(e, u, t), m && d((function() {
                m.takeRecords().map(p), m.disconnect()
            }), !0), m && l((function() {
                var i;
                u = a("FID"), n = h(e, u, t), c = [], o = -1, r = null, L(addEventListener), i = p, c.push(i), S()
            }))
        },
        j = function(e, t) {
            var n, r = b(),
                o = a("LCP"),
                i = function(e) {
                    var t = e.startTime;
                    t < r.timeStamp && (o.value = t, o.entries.push(e)), n()
                },
                c = s("largest-contentful-paint", i);
            if (c) {
                n = h(e, o, t);
                var u = function() {
                    f.has(o) || (c.takeRecords().map(i), c.disconnect(), f.add(o), n())
                };
                ["keydown", "click"].forEach((function(e) {
                    addEventListener(e, u, {
                        once: !0,
                        capture: !0
                    })
                })), d(u, !0), l((function(r) {
                    o = a("LCP"), n = h(e, o, t), requestAnimationFrame((function() {
                        requestAnimationFrame((function() {
                            o.value = performance.now() - r.timeStamp, f.add(o), n()
                        }))
                    }))
                }))
            }
        },
        _ = function(e) {
            var t, n = a("TTFB");
            t = function() {
                try {
                    var t = performance.getEntriesByType("navigation")[0] || function() {
                        var e = performance.timing,
                            t = {
                                entryType: "navigation",
                                startTime: 0
                            };
                        for (var n in e) "navigationStart" !== n && "toJSON" !== n && (t[n] = Math.max(e[n] - e.navigationStart, 0));
                        return t
                    }();
                    n.value = n.delta = t.responseStart, n.entries = [t], e(n)
                } catch (e) {}
            }, "complete" === document.readyState ? setTimeout(t, 0) : addEventListener("pageshow", t)
        }
}, function(e, t, n) {
    "use strict";

    function r(e) {
        const t = e.length;
        return function(...n) {
            return n.length === t ? e.call(null, ...n) : e.bind(null, ...n)
        }
    }
    n.d(t, "a", (function() {
        return r
    }))
}, function(e, t, n) {
    "use strict";
    n.d(t, "d", (function() {
        return r
    })), n.d(t, "e", (function() {
        return o
    })), n.d(t, "a", (function() {
        return i
    })), n.d(t, "c", (function() {
        return c
    })), n.d(t, "b", (function() {
        return a
    }));
    const r = "url:change",
        o = "url:scrolled",
        i = "page:loaded",
        c = "read-article:click",
        a = "post:shared"
}, function(e, t, n) {
    "use strict";

    function r(...e) {
        return t => e.reduce((e, t) => t(e), t)
    }
    n.d(t, "a", (function() {
        return r
    }))
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return o
    }));
    const r = {};

    function o(e, t) {
        if (r[e]) return r[e]; {
            const n = (t || document).querySelector(e);
            return r[e] = n ? JSON.parse(n.text) : {}
        }
    }
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return s
    }));
    var r = n(18);
    const o = {},
        i = {};

    function c(e) {
        try {
            e()
        } catch (e) {
            console.log("Error on user JS", e)
        }
        return null
    }

    function a(e) {
        return function() {
            setTimeout(function(e) {
                return function() {
                    o[e] = !0, i[e].forEach(c)
                }
            }(e), 1)
        }
    }

    function s(e, t) {
        if (e in o) return c(t);
        if (e in i) return void i[e].push(t);
        if (document.querySelector(`script[src="${e}"]`)) return o[e] = !0, c(t);
        i[e] = [t];
        const n = document.createElement("script");
        n.src = e, Object(r.a)(n, !1, a(e))
    }
}, function(e, t, n) {
    "use strict";
    t.a = e => t => t.then(e)
}, function(e, t, n) {
    "use strict";
    var r = n(11);
    t.a = e => t => Object(r.a)(t.querySelector(e))
}, function(e, t, n) {
    "use strict";
    t.a = e => new Promise((t, n) => null == e ? n(e) : t(e))
}, function(e, t, n) {
    "use strict";
    const r = {};
    t.a = {
        subscribe: function(e, t) {
            r[e] = r[e] || [], r[e].push(t)
        },
        publish: function(e, t) {
            (r[e] || []).forEach(e => {
                e(t)
            })
        }
    }
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return document.querySelector(".live-updates-wrapper") && Promise.all([n.e(10), n.e(6)]).then(n.bind(null, 26)).then(t => {
            t.default(e)
        }), e
    }
    n.d(t, "a", (function() {
        return r
    }))
}, function(e, t, n) {
    "use strict";
    var r = n(4);
    var o = e => t => (t.then && t.catch(e), t),
        i = n(6),
        c = n(10),
        a = n(9);

    function s(e, t) {
        return e.style.backgroundImage = `url(${t})`, requestAnimationFrame(() => {
            e.style.filter = ""
        }), e
    }

    function u(e, t) {
        return e.src = t, e.onload = () => {
            e.style.filter = ""
        }, e
    }
    const d = (e, t) => ("DIV" == e.tagName ? s : u)(e, t),
        l = Object(r.a)((e, t, n) => function r() {
            d(e, t), window.removeEventListener(n, r)
        }),
        f = Object(r.a)((e, t) => {
            const n = l(e, t),
                r = n("click"),
                o = n("scroll");
            return window.addEventListener("click", r), window.addEventListener("scroll", o, {
                passive: !0
            }), window.setTimeout(() => d(e, t), 1500), e
        }),
        h = Object(r.a)((e, {
            target: t
        }) => Object(i.a)(m, f(e))(t));

    function p(e) {
        const t = new Image;
        t.src = e.dataset.replaceImage, t.crossOrigin = "Anonymous", t.onload = h(e)
    }

    function m(e) {
        const t = document.createElement("canvas"),
            n = t.getContext("2d");
        return t.width = e.width, t.height = e.height, n.drawImage(e, 0, 0), t.toDataURL("image/jpeg")
    }
    t.a = () => requestAnimationFrame(() => Object(i.a)(Object(c.a)("[data-replace-image]"), Object(a.a)(p), o(() => null))(document.body))
}, function(e, t, n) {
    "use strict";

    function r() {
        const e = navigator.userAgent;
        return /Android|webOS|iPhone|iPod|BlackBerry/i.test(e) ? "mobile" : /iPad/i.test(e) ? "tablet" : "desktop"
    }
    n.d(t, "a", (function() {
        return r
    }))
}, function(e, t, n) {
    "use strict";

    function r(e) {
        const t = {},
            n = [];
        let r = e,
            o = 0;

        function i(e) {
            t[e] && (o--, t[e] = !1, function() {
                const e = n.shift();
                if (e) {
                    c(e.timeout)(e.resolve)
                }
            }())
        }

        function c(e) {
            return function(n) {
                o++;
                const r = !(c = o) in t || !t[c] ? c : Object.entries(t).find(([e, t]) => !t)[0];
                var c;
                if (t[r] = !0, n(r), e) {
                    setTimeout((function() {
                        i(r)
                    }), e)
                }
            }
        }
        return {
            release: i,
            request: function(e) {
                return new Promise(o < r ? c(e) : function(e) {
                    return function(t, r) {
                        n.push({
                            resolve: t,
                            reject: r,
                            timeout: e
                        })
                    }
                }(e))
            },
            changeSettings: function(e) {
                r = e
            }
        }
    }
    n.d(t, "a", (function() {
        return r
    }))
}, function(e, t, n) {
    "use strict";

    function r(...e) {
        return function(t) {
            return t.call(null, ...e)
        }
    }
    n.d(t, "a", (function() {
        return r
    }))
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return d
    }));
    var r = n(16);
    const {
        request: o,
        release: i,
        changeSettings: c
    } = Object(r.a)(2), a = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    if (a) {
        function s() {
            switch (a.effectiveType) {
                case "4g":
                    c(5);
                    break;
                case "slow-2g":
                case "2g":
                    c(1);
                    break;
                default:
                    c(3)
            }
        }
        a.addEventListener("change", s), s()
    }

    function u(e, t, n, r) {
        const o = function(e, t) {
            return function(n) {
                if (t.loaded) return null;
                i(e), t.loaded = !0, t.callback()
            }
        }(r, {
            callback: n,
            loaded: !1
        });
        e.addEventListener("load", o), document.head.insertBefore(e, document.head.firstChild), t && setTimeout(o, t)
    }

    function d(e, t, n) {
        o().then((function(r) {
            u(e, t, n, r)
        }))
    }
}, function(e, t, n) {
    "use strict";
    n.d(t, "e", (function() {
        return r
    })), n.d(t, "b", (function() {
        return o
    })), n.d(t, "a", (function() {
        return i
    })), n.d(t, "d", (function() {
        return c
    })), n.d(t, "c", (function() {
        return a
    }));
    const r = (e, t = {}) => (e = (window.REBELMOUSE_BASE_SSL_DOMAIN || "https://" + location.host) + e, t.credentials = "include", [e, t]),
        o = {
            "X-Requested-With": "XMLHttpRequest"
        },
        i = {
            "Content-Type": "application/json"
        };

    function c(e) {
        return e.json().then(t => {
            if (!e.ok) throw t;
            return t
        })
    }
    const a = {
        message: "There was a network error, please try again"
    }
}, function(e, t, n) {
    "use strict";

    function r(e, t) {
        e.addEventListener("click", e => {
            e.preventDefault(), t(e)
        })
    }

    function o(e, t) {
        e.forEach(e => r(e, t))
    }
    n.d(t, "a", (function() {
        return r
    })), n.d(t, "b", (function() {
        return o
    }))
}, function(e, t, n) {
    "use strict";

    function r(e) {
        var t = document.createElement("textarea");
        return t.innerHTML = e, 0 === t.childNodes.length ? "" : t.childNodes[0].nodeValue
    }
    n.d(t, "a", (function() {
        return r
    }))
}, function(e, t, n) {
    "use strict";

    function r(e, t, n) {
        let r = document.querySelector("#notification"),
            o = document.createElement("li");
        t = t || "", n = n || 5e3, o.innerText = e, o.classList.add(t), r.append(o), r.style.display = "block", setTimeout(() => {
            r.removeChild(o)
        }, n)
    }
    n.d(t, "a", (function() {
        return r
    }))
}, function(e, t, n) {
    "use strict";

    function r(e) {
        let t = !1;
        return function() {
            t || (t = !0, requestAnimationFrame(() => {
                e(), t = !1
            }))
        }
    }
    n.d(t, "a", (function() {
        return r
    }))
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return o
    }));
    var r = n(18);

    function o(e, t) {
        const n = document.createElement("link");
        n.href = e, n.rel = "stylesheet", Object(r.a)(n, 750, t)
    }
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return o
    }));
    const r = {
        twitter: [450, 240],
        pinterest: [750, 546],
        default: [550, 425]
    };

    function o(e, t) {
        const [n, o] = r[t] || r.default, i = `width=${n},height=${o},left=${Math.max((window.innerWidth-n)/2,0)},top=${Math.max((window.innerHeight-o)/2,0)},resizable=yes,scrollbars=yes`;
        return window.open(e, "_blank", i)
    }
}, , , , , , function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n(12),
        o = n(19);
    var i = {
        addTask: function(e) {
            function t(t) {
                const {
                    target: n
                } = t;
                return t.isIntersecting ? e.firstOnly && e._reportedIntersections > 0 ? null : (e._reportedIntersections++, e.firstOnly ? (e.observer.disconnect(), e.mutationObserver.disconnect()) : e.oneTime && (e.observer.unobserve(n), e.finished.add(n)), void(e.onIntersect && e.onIntersect(t))) : (function(t) {
                    if (e.onBellowViewport || e.onAboveViewport) {
                        const {
                            top: n
                        } = t.getBoundingClientRect();
                        n < 0 && e.onAboveViewport && e.onAboveViewport(t), n >= 0 && e.onBellowViewport && e.onBellowViewport(t)
                    }
                }(n), null)
            }

            function n(t) {
                e.observer.observe(t)
            }
            if (e._reportedIntersections = e._reportedIntersections || 0, e.threshold = e.threshold || 0, e.finished = e.finished || new Set([]), e.observer = new IntersectionObserver(e => {
                    e.forEach(t)
                }, {
                    rootMargin: `0px 0px ${e.threshold}px 0px`
                }), e.selector) {
                document.querySelectorAll(e.selector).forEach(n), e.mutationObserver = function(e) {
                    const t = new MutationObserver(t => {
                        t.forEach(t => {
                            const {
                                target: n,
                                type: r
                            } = t;
                            "childList" === r && n.querySelectorAll(e.selector).forEach(t => {
                                e.finished.has(t) || (e.onAppear && e.onAppear(t), e.observer.observe(t))
                            })
                        })
                    });
                    return t.observe(document.body, {
                        childList: !0,
                        subtree: !0
                    }), t
                }(e)
            }
            return e.rawNodes && e.rawNodes.forEach(n), [e.observer, e.mutationObserver]
        }
    };

    function c(e) {
        return e.substr(1).split("&").map(e => e.split("=")).reduce((e, [t, n]) => ({
            ...e,
            [t]: n
        }), {})
    }
    var a = n(5),
        s = n(0);

    function u(e) {
        return Object(s.a)(".listicle-slideshow", t => {
            n.e(22).then(n.bind(null, 71)).then(n => {
                n.default(t, e.eventBus)
            })
        }), Object(s.a)(".js--fullscreen-preview", t => {
            n.e(15).then(n.bind(null, 60)).then(n => {
                n.default(t, e.eventBus)
            })
        }), Object(s.a)(".js-listicle-switch-page", t => {
            n.e(21).then(n.bind(null, 72)).then(n => {
                n.default(t, e.eventBus)
            })
        }), Object(s.a)(".listicle-voting", t => {
            n.e(14).then(n.bind(null, 68)).then(n => {
                n.default(t, e)
            })
        }), e
    }
    var d = n(1);

    function l(e) {
        return Object(d.a)(() => {
            n.e(12).then(n.bind(null, 57)).then(t => t.default(e.settings))
        }), e
    }

    function f(e) {
        return Object(d.a)(() => {
            n.e(23).then(n.bind(null, 59)).then(t => {
                t.default(e)
            })
        }), e
    }

    function h(e) {
        return Object(d.a)(() => {
            const e = document.querySelectorAll(".js-hidden-panel");
            e.length && n.e(24).then(n.bind(null, 61)).then(t => {
                t.default(e)
            })
        }), e
    }
    var p = n(15),
        m = n(21),
        g = n(8),
        v = n(24),
        b = n(17);
    const w = [],
        y = Object(b.a)();
    let E = !1;

    function O() {
        E = !0, w.forEach(y), w.length = 0
    }

    function S() {
        setTimeout(O, 3100)
    }

    function k(e) {
        if (!E) return w.push(e), 1 === w.length ? "complete" !== document.readyState ? window.addEventListener("load", S) : S() : void 0;
        e()
    }

    function L(e) {
        document.fonts.add(e),
            function(e) {
                const t = `rm-fl-${e.family.toLowerCase().replace(/ /g,"_")}-${e.weight}`;
                document.body.classList.add(t)
            }(e)
    }

    function T(e, t, {
        weight: n,
        style: r,
        unicodeRange: o
    }) {
        return function() {
            const i = n.split(",").map((function(n) {
                return new FontFace(e, `url(${t})`, {
                    style: r,
                    unicodeRange: o,
                    display: "swap",
                    weight: n
                })
            }));
            i[0].load().then((function() {
                ! function(e) {
                    localStorage.setItem(`rmFont-${e}`, "1")
                }(t), i.forEach(L)
            }))
        }
    }

    function j(e, t, {
        selector: n,
        ...r
    }) {
        const o = T(e, t, r);
        n ? i.addTask({
            selector: n,
            firstOnly: !0,
            oneTime: !0,
            threshold: 200,
            onIntersect: o
        }) : ! function(e) {
            return "1" === localStorage.getItem(`rmFont-${e}`)
        }(t) ? k(o) : o()
    }
    var _ = n(20);

    function P(e) {
        return Object(s.a)(".like-button", e => {
            const t = `<span class="like-label"><span class="like-count"> ${e.dataset.postLikes>=1?e.dataset.postLikes:""} </span></span>`;
            e.innerHTML = '<a class="like-btn like" href="/login"><i class="heart fa fa-heart-o"></i></a>' + t
        }), Object(s.a)(".follow-button", e => {
            e.classList.add("loaded"), e.innerHTML = '<a class="color-inherit" href="/login"><span class="follow-button-label follow-button-label--follow">Follow</span></a>'
        }), e
    }

    function A(e) {
        const t = document.querySelector(".rebelbar__menu-toggle");
        if (!t) return e;
        t.addEventListener("click", e => {
            document.body.classList.toggle("menu-opened")
        });
        const n = document.querySelector(".menu-overlay");
        return n && n.addEventListener("click", () => {
            document.body.classList.remove("menu-opened")
        }), e
    }

    function I(e) {
        return Object(s.a)('img[usemap ^="#image-map-"]', e => {
            n.e(11).then(n.bind(null, 73)).then(t => t.default(e))
        }), e
    }

    function C(e) {
        return Object(s.a)(".js-keep-reading", function(e) {
            return function() {
                n.e(20).then(n.bind(null, 55)).then(t => t.default(e))
            }
        }(e), !0), e
    }

    function D(e) {
        const t = document.querySelectorAll(".live-section-update");
        return t.length && n.e(7).then(n.bind(null, 62)).then(n => {
            t.forEach(t => {
                n.default(e, t)
            })
        }), e
    }
    var x = n(13),
        B = n(7),
        q = n(2),
        M = n(16);
    const R = Object(M.a)(9),
        U = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    if (U) {
        function $() {
            switch (U.effectiveType) {
                case "4g":
                    R.changeSettings(15);
                    break;
                case "slow-2g":
                case "2g":
                    R.changeSettings(3);
                    break;
                default:
                    R.changeSettings(6)
            }
        }
        U.addEventListener("change", $), $()
    }
    const V = R.release,
        F = R.request;

    function W(e) {
        F(1500).then((function(t) {
            const n = e.target;
            window.FB.XFBML.parse(n.parentElement, (function() {
                V(t)
            }))
        }))
    }

    function H() {
        const e = window.REBELMOUSE_BOOTSTRAP_DATA;
        window.FB.init({
            appId: e.fbId,
            version: e.fbAppVersion,
            status: !0,
            cookie: !0
        })
    }

    function z(e) {
        F(1500).then((function(t) {
            const {
                target: n
            } = e;
            n.addEventListener("load", (function() {
                V(t)
            })), n.src = n.dataset.runnerSrc, delete n.dataset.runnerSrc
        }))
    }

    function N(e) {
        const t = e.closest(".rebellt-item");
        if (t && t.offsetWidth > 0) return t;
        const n = e.closest(".body-description");
        if (n && n.offsetWidth > 0) return n;
        const r = e.closest("article");
        return r && r.offsetWidth > 0 ? r : null
    }

    function J(e, t, n, r) {
        if (n > e) return {
            maxWidth: e,
            maxHeight: t
        };
        let o = n,
            i = parseInt(o * t / e, 10);
        return r && i > r && (i = r, o = parseInt(i * e / t, 10)), {
            maxWidth: o,
            maxHeight: i
        }
    }

    function Q(e) {
        return e.split("=")
    }

    function K([e, t]) {
        return `${e}=${t}`
    }

    function Y(e) {
        return `?${Object.entries(e).map(K).join("&")}`
    }

    function X() {
        const e = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
        if (!e) return 75;
        switch (e.effectiveType) {
            case "4g":
                return 80;
            case "2g":
            case "slow-2g":
                return 60;
            default:
                return 75
        }
    }

    function G(e, t, n) {
        return parseInt(e in t ? t[e] : n[e], 10)
    }

    function Z(e, t, n, r) {
        const o = parseInt(n, 10),
            i = r ? parseInt(r, 10) : null,
            c = function() {
                const e = window.devicePixelRatio ? parseInt(window.devicePixelRatio, 10) : 1;
                return Math.min(3, Math.max(e, 1))
            }(),
            a = new URL(e),
            s = Object.fromEntries(a.search.substring(1).split("&").map(Q));
        if ("coordinates" in s && "height" in s && "width" in s) {
            const {
                width: e,
                height: n,
                queryString: r
            } = function(e, t, n, r, o, i) {
                const {
                    maxWidth: c,
                    maxHeight: a
                } = J(n, t, o, i);
                return {
                    width: c,
                    height: a,
                    queryString: Y({
                        coordinates: e,
                        quality: X(),
                        width: parseInt(c * r),
                        height: parseInt(a * r)
                    })
                }
            }(s.coordinates, G("height", t, s), G("width", t, s), c, o, i);
            return a.search = r, {
                src: a.href,
                height: n,
                width: e
            }
        }
        if ("width" in s) {
            const {
                width: e,
                height: n,
                queryString: r
            } = function(e, t, n, r, o) {
                const {
                    maxWidth: i,
                    maxHeight: c
                } = J(t, e, r, o);
                return {
                    width: i,
                    height: c,
                    queryString: Y({
                        quality: X(),
                        width: i * n
                    })
                }
            }(G("height", t, s), G("width", t, s), c, o, i);
            return a.search = r, {
                src: a.href,
                height: n,
                width: e
            }
        }
        return null
    }

    function ee(e) {
        const t = N(e);
        if (t) {
            const n = Z(e.dataset.runnerSrc, e.dataset, t.offsetWidth);
            n && (! function(e, t, n) {
                t && n && (e.width = t, e.height = n)
            }(e, n.width, n.height), e.dataset.runnerSrc = n.src)
        } else;
    }

    function te(e) {
        return function() {
            V(e)
        }
    }

    function ne(e) {
        F(1e3).then((function(t) {
            const n = e.target,
                r = n.dataset.runnerSrc,
                o = te(t);
            n.addEventListener("load", o), n.src = r, n.removeAttribute("data-runner-src"), n.removeAttribute("type")
        }))
    }

    function re(e) {
        F(1e3).then((function(t) {
            const n = e.target;
            let r = n.dataset.runnerImgHd;
            if (window.REBELMOUSE_BOOTSTRAP_DATA.engine.lazyLoadShortcodeImages) {
                const e = Z(r, {}, n.offsetWidth, n.offsetHeight);
                e && (r = e.src)
            }
            const o = te(t),
                i = new Image;
            i.addEventListener("load", o), i.src = r, n.style.backgroundImage = `url(${r})`
        }))
    }
    const oe = {
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
    const ie = [];

    function ce(e) {
        const t = ie.shift();
        t && V(t)
    }

    function ae(e) {
        F(1700).then((function(t) {
            e.target.classList.add("instagram-media"), e.target.classList.remove("lazy-instagram-media"), window.instgrm.Embeds.process(), ie.push(t)
        }))
    }

    function se(e) {
        e.classList.remove("instagram-media"), e.classList.add("lazy-instagram-media")
    }

    function ue() {
        window.__igEmbedLoaded = ce, document.querySelectorAll("blockquote.instagram-media").forEach(se)
    }

    function de() {}
    const le = [];

    function fe() {
        const e = le.shift();
        e && V(e)
    }

    function he(e) {
        F(1200).then((function(t) {
            const n = e.target,
                r = n.closest(".rm-embed-container.rm-loading");
            r && (r.classList.remove("rm-loading"), r.classList.add("rm-loaded")), n.dataset.twitterTweetId || (n.classList.add("twitter-tweet"), n.dataset.twitterTweetId = n.dataset.lazyTweetId), le.push(t), window.twttr.widgets.load(n.parentElement)
        }))
    }

    function pe() {
        twttr.ready((function() {
            twttr.events.bind("rendered", fe)
        }))
    }

    function me(e) {
        e.classList.remove("twitter-tweet"), e.dataset.lazyTweetId = e.dataset.twitterTweetId, delete e.dataset.twitterTweetId
    }

    function ge() {
        document.querySelectorAll("blockquote.twitter-custom-tweet").forEach(me)
    }
    let ve = !1,
        be = [];

    function we(e) {
        e.target.classList.add("tiktok-embed"), be.push(e.target), ve || (ve = !0, Object(g.a)(`https://www.tiktok.com/embed.js?bust=${Date.now()}`, ye))
    }

    function ye() {
        ve = !1, setTimeout(Ee, 5e3)
    }

    function Ee() {
        be.forEach(Oe), be.length = 0
    }

    function Oe(e) {
        e.style.minWidth = "auto", e.style.minHeight = "auto"
    }

    function Se(e) {
        const t = N(e),
            {
                maxWidth: n,
                maxHeight: r
            } = J(542, 728, t.offsetWidth);
        e.style.display = "block", e.style.minWidth = `${n}px`, e.style.minHeight = `${r}px`
    }

    function ke(e) {
        const t = document.createElement("script"),
            n = e.getAttribute("data-src");
        n ? t.src = n : t.text = e.text, e.replaceWith(t)
    }
    var Le = n(14);

    function Te(e) {
        const t = document.querySelector(`script#_${e.target.dataset.id}.lazy-style`),
            n = document.createElement("style");
        n.type = "text/css", n.classList.add("lazy-style"), n.id = `#_${e.target.dataset.id}`, n.textContent = t.textContent, document.head.appendChild(n), t.remove()
    }

    function je(e) {
        var t;
        return Object(Le.a)(), t = e.intersectionObserverProvider, window.REBELMOUSE_BOOTSTRAP_DATA.engine.lazyLoadShortcodeImages && Object(s.a)("img[data-runner-src]", ee), Object(q.a)(t, {
                treshholdCalculator: oe,
                initialThreshold: 50,
                selector: "img[data-runner-src]",
                onIntersect: ne
            }), Object(q.a)(t, {
                treshholdCalculator: oe,
                initialThreshold: 50,
                selector: "[data-runner-img-hd]",
                onIntersect: re
            }),
            function(e) {
                Object(q.a)(e, {
                    onIntersect: z,
                    selector: "iframe[data-runner-src]",
                    initialThreshold: 500
                })
            }(e.intersectionObserverProvider),
            function(e) {
                Object(q.a)(e, {
                    onIntersect: ae,
                    beforeDependencyLoad: ue,
                    onAppear: se,
                    initialThreshold: 300,
                    selector: "blockquote.instagram-media,blockquote.lazy-instagram-media",
                    dependencySrc: "https://www.instagram.com/embed.js"
                })
            }(e.intersectionObserverProvider),
            function(e) {
                Object(q.a)(e, {
                    onIntersect: W,
                    onDependencyLoad: H,
                    initialThreshold: 500,
                    selector: ".fb-post, .fb-page, .fb-video, .fb-comments",
                    dependencySrc: "https://connect.facebook.net/en_US/sdk.js"
                })
            }(e.intersectionObserverProvider),
            function(e) {
                Object(q.a)(e, {
                    onIntersect: de,
                    initialThreshold: 500,
                    dependencySrc: "https://embed.redditmedia.com/widgets/platform.js",
                    selector: "blockquote.reddit-card"
                })
            }(e.intersectionObserverProvider),
            function(e) {
                Object(q.a)(e, {
                    onIntersect: he,
                    onDependencyLoad: pe,
                    beforeDependencyLoad: ge,
                    selector: "blockquote.twitter-custom-tweet",
                    dependencySrc: "https://platform.twitter.com/widgets.js",
                    initialThreshold: 400
                })
            }(e.intersectionObserverProvider),
            function(e) {
                Object(q.a)(e, {
                    onIntersect: we,
                    onAppear: Se,
                    initialThreshold: 400,
                    selector: ".tiktok_lazy_shortcode"
                })
            }(e.intersectionObserverProvider),
            function(e) {
                Object(q.a)(e, {
                    onIntersect: Te,
                    initialThreshold: 500,
                    selector: ".viewport-css-anchor"
                })
            }(e.intersectionObserverProvider), Object(d.a)(() => {
                n.e(25).then(n.bind(null, 54)).then(e => {
                    e.default()
                })
            }), Object(s.a)('[type="text/lazy-javascript"]', ke), e
    }

    function _e(e) {
        return Object(s.a)(".login-signup-wrapper", t => {
            n.e(0).then(n.bind(null, 52)).then(n => {
                n.default(t, e)
            })
        }), e
    }

    function Pe(e) {
        return Object(s.a)(".community-native-wrp", t => {
            Promise.all([n.e(9), n.e(0), n.e(19)]).then(n.bind(null, 69)).then(n => {
                n.default(t, e)
            })
        }), e
    }

    function Ae(e) {
        return Object(d.a)(() => {
            n.e(8).then(n.bind(null, 56)).then(t => t.default(e))
        }), e
    }
    var Ie = n(6),
        Ce = n(25),
        De = n(22);

    function xe(e, t) {
        return e.dataset.clipboardText ? function(e) {
            e.href = "javascript:void(0)", e.addEventListener("click", e => {
                e.preventDefault(), navigator.clipboard.writeText(e.currentTarget.dataset.clipboardText), Object(De.a)("copied to clipboard", "success")
            })
        }(e) : e.classList.contains("share-plus") ? function(e) {
            const t = e.parentElement.children;
            let n = !1;
            const r = Array.from(t).reduce((t, r) => (n && t.push(r), n = n || r === e, t), []);
            r.forEach(e => e.style.display = "none"), e.addEventListener("click", e => {
                e.currentTarget.remove(), r.forEach(e => e.style.display = "inline-block")
            })
        }(e) : function(e, t) {
            e.addEventListener("click", e => {
                const {
                    currentTarget: n
                } = e, {
                    trackShare: r
                } = n.dataset, o = n.href;
                return "Email" != r && "Sms" != r && (e.preventDefault(), e.stopPropagation()), Object(Ce.a)(o, (r || "").toLowerCase()), t.publish(a.b, {
                    url: o,
                    provider: (r || "").toLowerCase()
                }), !1
            }, !0)
        }(e, t)
    }

    function Be(e) {
        return Object(s.a)(".share-panel a", t => {
            xe(t, e.eventBus)
        }), e
    }

    function qe(e) {
        n.e(16).then(n.bind(null, 70)).then(t => {
            t.default(e)
        })
    }

    function Me(e) {
        return window.addEventListener("load", () => {
            const e = `[data-href="https://${location.host}${location.pathname}"]`,
                t = document.querySelector(e);
            t && t.scrollIntoView(!0)
        }), e
    }

    function Re(e) {
        return Object(s.a)(".js-scroll-trigger[data-toggle-class], .js-scroll-trigger[data-triggers]", t => {
            n.e(26).then(n.bind(null, 58)).then(n => {
                n.default(e, t)
            })
        }), e
    }

    function Ue(e) {
        const t = document.querySelector(".search-form__open"),
            n = document.querySelector(".search-form");
        return n && t && t.addEventListener("click", () => {
            n.classList.toggle("show-search")
        }), document.addEventListener("keypress", e => {
            13 === e.keyCode && document.body.classList.contains("show-search") && document.querySelector(".search-form > form").submit()
        }), e
    }
    var $e = {
        trackPageView: function({
            url: e,
            customDimensions: t,
            headline: n,
            id: r
        }) {
            const o = document.querySelector(`[elid="${r}"] .headline`),
                i = {
                    page_title: o ? o.innerText : n,
                    page_location: e
                };
            Fe(t, (e, t, n, r) => e(t, "page_view", {
                ...i,
                ...r
            }))
        },
        trackEvent: We,
        trackPostCardClick: function(e) {
            We({
                ...e,
                eventType: "post_interaction",
                action: "post_card_click"
            })
        }
    };

    function Ve(e) {
        "function" == typeof window.gtag ? e(window.gtag) : setTimeout(() => {
            Ve(e)
        }, 100)
    }

    function Fe(e, t) {
        Ve(n => {
            const r = e ? (o = e, Object.entries(o).reduce((e, [t, n]) => ({
                ...e,
                [`dimension${t}`]: n.toString()
            }), {})) : {};
            var o;
            t(n, "event", "send", r)
        })
    }

    function We({
        eventType: e,
        action: t,
        customDimensions: n
    }) {
        Fe(n, (n, r, o, i) => n(r, t, {
            event_category: e,
            ...i
        }))
    }
    const He = {
            "page-view": "user"
        },
        ze = {
            dp: "post",
            pp: "post",
            fp: "section",
            sp: "section",
            tp: "tag"
        };

    function Ne() {
        const [e] = window.REBELMOUSE_BOOTSTRAP_DATA.resourceId.split("_");
        return ze[e] || "public"
    }

    function Je() {
        const e = Object(p.a)();
        return {
            site_id: window.REBELMOUSE_BOOTSTRAP_DATA.site.id,
            roar_id: window.REBELMOUSE_BOOTSTRAP_DATA.runner.id,
            client: "tablet" !== e ? e : "other",
            referrer: document.referrer
        }
    }

    function Qe(e, t) {
        const n = {
                event: e,
                version: 1,
                format: "json",
                data: JSON.stringify({
                    ...Je(),
                    ...t
                })
            },
            r = He[e] || "pages",
            o = new URLSearchParams(n).toString();
        fetch(`https://${r}-stats.rbl.ms/spacer.gif?${Date.now()}&${o}`)
    }

    function Ke() {
        return new Promise((e, t) => {
            const n = sessionStorage.getItem("userTrackingId");
            var r, o;
            n ? e(n) : (r = "https://res.rbl.ms/core/users/tracking/", o = {
                user_tracking_id: null,
                last_page_view_timestamp: null,
                user_type: "casual"
            }, fetch(r, {
                method: "POST",
                body: JSON.stringify(o)
            }).then(e => e.json())).then(t => {
                const {
                    user_tracking_id: n
                } = t;
                sessionStorage.setItem("userTrackingId", n), e(n)
            }).catch(e => t(e))
        })
    }
    var Ye = {
        trackPageView: function(e) {
            const {
                post: t
            } = e, n = t ? {
                post_id: e.id,
                provider_id: t.providerId,
                sections: t.sections,
                buckets: t.buckets,
                authors: t.authors
            } : {
                section_id: 0,
                sections: [0]
            };
            Qe(e.id ? "post-page-view" : "section-page-view", n)
        },
        trackTimeOnPage: function({
            timeMarker: e
        }) {
            Qe(`${Ne()}-page-view-duration`, {
                duration: e
            })
        },
        trackUser: function() {
            const e = window.REBELMOUSE_BOOTSTRAP_DATA.post;
            Ke().then(t => {
                Qe("page-view", {
                    post_id: e.id,
                    sections: e.sections,
                    user_tracking_id: t
                })
            })
        },
        trackPostCardClick: function({
            id: e,
            post: t
        }) {
            Qe("post-card-click", {
                post_id: e,
                provider_id: t.providerId,
                sections: t.sections
            })
        }
    };

    function Xe(e) {
        window.PARSELY && window.PARSELY.beacon && "function" == typeof window.PARSELY.beacon.trackPageView && window.PARSELY.beacon.trackPageView({
            ...e,
            url: document.URL,
            urlref: document.referrer
        })
    }

    function Ge(e, t) {
        var n;
        Xe({
            action: e,
            data: (n = t, "object" != typeof n ? {} : Object.keys(n).reduce((e, t) => (e[`_${t}`] = n[t], e), {}))
        })
    }
    var Ze = {
        trackPageView: function() {
            Xe({
                js: 1
            })
        },
        trackPageLoad: function(e) {
            Ge("_pageLoad", e)
        },
        trackPostMouseOver: function(e) {
            Ge("_post_mouse_over", e)
        },
        trackTimeOnPage: function({
            timeMarker: e
        }) {
            Ge("_page-view-duration", e)
        },
        trackPostCardClick: function(e) {
            Ge("_post_card_click", e)
        }
    };
    const et = [Ye, $e, Ze];
    var tt = {
        trackPageView(e) {
            const t = Object(B.a)(`#post-context-${e.id}`);
            et.forEach(n => {
                n.trackPageView({
                    ...e,
                    ...t
                })
            })
        },
        trackPageLoad(e) {
            const t = Object(B.a)(`#post-context-${e.id}`);
            Ye.trackPageView({
                ...e,
                ...t
            }), Ze.trackPageLoad({
                ...e,
                ...t
            })
        },
        trackTimeOnPage(e) {
            Ye.trackTimeOnPage({
                timeMarker: e
            }), Ze.trackTimeOnPage({
                timeMarker: e
            })
        },
        trackUser(e) {
            Ye.trackUser({
                ...e
            })
        },
        trackPostCardClick(e) {
            et.forEach(t => {
                t.trackPostCardClick(function(e) {
                    const t = e.getAttribute("elid");
                    return {
                        id: t,
                        ...Object(B.a)(`#post-context-${t}`)
                    }
                }(e))
            })
        },
        trackEvent(e) {
            const t = Object(B.a)(`#post-context-${e.id}`);
            $e.trackEvent({
                ...e,
                ...t
            })
        }
    };
    var nt = n(3),
        rt = n(4);
    const ot = Object(rt.a)((function({
        name: e,
        delta: t,
        id: n
    }, r) {
        r("event", e, {
            event_category: "Web Vitals",
            event_label: n,
            value: Math.round("CLS" === e ? 1e3 * t : t),
            non_interaction: !0
        })
    }));

    function it(e) {
        Ve(ot(e))
    }

    function ct() {
        Object(s.a)("[elid]", e => {
            ! function(e) {
                e.querySelectorAll("a[href]").forEach(t => {
                    /^(https?:)?\/\/\w+/.exec(t.href) && t.addEventListener("click", t => {
                        const n = t.currentTarget,
                            r = "_blank" === n.getAttribute("target"),
                            o = n.classList.contains("js-listicle-switch-page");
                        r || t.preventDefault(), tt.trackPostCardClick(e), r || o || (document.location.href = n.href)
                    })
                })
            }(e)
        })
    }

    function at() {
        const e = [1, 2, 5, 10, 20, 30].map(e => 1e3 * e),
            t = function(e, t, n) {
                const r = +new Date;
                let o, i = 0,
                    c = t[0];
                const a = () => {
                        clearTimeout(o)
                    },
                    s = a => {
                        i = +new Date, o = setTimeout(() => {
                            a = a || 0, i - r > n || (e(c), c = t[a += 1] || t[t.length - 1], s(a))
                        }, c)
                    };
                return {
                    start: s,
                    pause: () => {
                        a(), c -= new Date - i
                    },
                    stop: a
                }
            }(tt.trackTimeOnPage, e, 18e5);
        t.start(), document.addEventListener("visibilitychange", () => {
            "visible" === document.visibilityState ? t.start() : t.pause()
        })
    }
    var st = n(23);

    function ut(e) {
        return Object(d.a)(() => {
            const e = document.querySelector("[data-toggle-class=with-fixed-header]");
            var t;
            e && document.addEventListener("scroll", (t = e, Object(st.a)(() => {
                const {
                    toggleClass: e
                } = t.dataset;
                t.getBoundingClientRect().top <= 0 ? document.body.classList.add(e) : document.body.classList.remove(e)
            })), {
                passive: !0
            })
        }), e
    }

    function dt(e) {
        return Object(s.a)(".get-alerts", t => {
            n.e(17).then(n.bind(null, 63)).then(n => {
                n.default(t, e.settings)
            })
        }), e
    }

    function lt(e) {
        return Object(s.a)(".tabs", e => {
            n.e(27).then(n.bind(null, 66)).then(t => t.default(e))
        }), e
    }

    function ft(e) {
        return Object(s.a)(".js-show-video", e => {
            n.e(29).then(n.bind(null, 64)).then(t => {
                t.default(e)
            })
        }), e
    }

    function ht(e) {
        e.addEventListener("click", (function t() {
            e.removeEventListener("click", t, !1), e.removeChild(e.firstElementChild), "theo" === window.REBELMOUSE_BOOTSTRAP_DATA.engine.defaultVideoPlayer && n.e(28).then(n.bind(null, 65)).then(t => t.default(e))
        }), !1)
    }

    function pt(e) {
        Object(s.a)(".uplynk-container", ht, !1)
    }

    function mt(e) {
        return Object(s.a)(".rebellt-item.has_voting", e => {
            n.e(18).then(n.bind(null, 74)).then(t => {
                t.default(e)
            })
        }), e
    }

    function gt(e) {
        return window.localStorage.getItem("gdpr-cookie") || (Object(s.a)(".gdpr-cookie", e => {
            e.classList.remove("hidden")
        }), Object(s.a)(".gdpr-cookie-accept", e => {
            e.addEventListener("click", () => {
                window.localStorage.setItem("gdpr-cookie", "accepted"), document.querySelectorAll(".gdpr-cookie").forEach(e => {
                    e.classList.add("hidden")
                })
            })
        })), e
    }

    function vt(e, t) {
        return function(n) {
            return e.pushTask(n, {
                timeout: t
            })
        }
    }

    function bt(e, t, n) {
        return function() {
            const r = document.querySelector(n);
            if (r && r.textContent) {
                const e = document.createElement("script");
                e.textContent = r.textContent, document.head.appendChild(e), r.remove()
            }
            t.length && (t.forEach(vt(e, 200)), t.length = 0)
        }
    }

    function wt() {
        const e = [],
            t = window.requestIdleCallback ? window.requestIdleCallback : function(e) {
                return setTimeout(e, 0)
            };

        function n() {
            const r = e.shift();
            if (!r) return;
            const {
                timeout: o,
                fun: i
            } = r;
            t(function(e) {
                return function() {
                    return e(), n(), null
                }
            }(i), {
                timeout: o
            })
        }
        return {
            pushTask: function(t, {
                timeout: r
            }) {
                e.push({
                    fun: t,
                    timeout: r
                }), 1 === e.length && n()
            }
        }
    }
    const yt = (e, t, n, r) => o => {
        const i = wt();
        e.forEach(vt(i, 200));
        const c = bt(i, r, "script#user-javascript-active");
        return Object(d.a)(c), t.push(c), t.push(bt(i, n, "script#user-javascript-lowest")), k(function(e, t) {
            return function() {
                t.forEach(vt(e, 1e3))
            }
        }(i, t)), o
    };
    const Et = () => [Me, P, A, je, ut, Ue, Be, C, Ae, l, Re, f, u, h, D, dt, ft, pt, Pe, x.a, _e, lt, I, mt, gt],
        Ot = () => [...Et(), n.e(13).then(n.bind(null, 67))],
        St = ({
            settings: e
        }) => (e.isUserLoggedIn ? Ot : Et)();
    var kt = Object(Ie.a)((function(e) {
        return function(e) {
            const {
                eventBus: t
            } = e;
            let n = "";
            t.subscribe(a.c, e => {
                e.trackPageView ? tt.trackPageView(e) : tt.trackEvent({
                    ...e,
                    eventType: "keep_reading",
                    action: "view_more"
                })
            }), t.subscribe(a.a, e => {
                tt.trackPageLoad(e, !0), tt.trackUser(e), n = e.url
            }), t.subscribe(a.d, e => {
                e.url !== n && e.trackPageView && tt.trackPageView(e)
            })
        }(e), ct(), at(), Object(nt.a)(it, !0), Object(nt.b)(it), Object(nt.c)(it), Object(nt.d)(it), Object(nt.e)(it), e
    }), (function(e) {
        let t = {
            url: location.href
        };
        return e.settings.post && (t.id = e.settings.post.id), e.eventBus.publish(a.a, t), e
    }), (function(e) {
        return e.eventBus.subscribe(a.d, t => {
            const n = new CustomEvent("rebelmouse.urlChange", {
                detail: t
            });
            document.dispatchEvent(n), e.settings.engine.backButtonGoToPage ? window.history.replaceState({}, t.headline || "", t.url) : window.history.pushState({}, t.headline || "", t.url)
        }), e.eventBus.subscribe(a.e, e => {
            const t = new CustomEvent("rebelmouse.urlScrolled", {
                detail: e
            });
            document.dispatchEvent(t)
        }), e.eventBus.subscribe(a.b, e => {
            const t = new CustomEvent("rebelmouse.postShared", {
                detail: e
            });
            document.dispatchEvent(t)
        }), e
    }), (function(e) {
        return window.REBELMOUSE_STDLIB = {
            getDevice: p.a,
            loadContextData: B.a,
            initClickHandler: _.a,
            htmlDecode: m.a,
            onElementInViewport: e.intersectionObserverProvider.addTask,
            createElementChangeListener: s.a,
            rebelSlider: qe,
            loadExternalScript: g.a,
            loadExternalStylesheet: v.a,
            loadFontFace: j
        }, window.REBELMOUSE_INIT_IDLE_QUEUE = yt, e
    }), yt(window.REBELMOUSE_TASKS_QUEUE, window.REBELMOUSE_LOW_TASKS_QUEUE, window.REBELMOUSE_LOWEST_TASKS_QUEUE, window.REBELMOUSE_ACTIVE_TASKS_QUEUE), e => St(e).map(t => t.then ? t.then(t => t.default(e)) : t(e)));

    function Lt(e, t) {
        const n = {
            intersectionObserverProvider: i,
            eventBus: r.a,
            settings: t,
            pathParams: c(e)
        };
        return new Promise(e => function(e, t) {
            if (!e.settings.isUserLoggedIn) return t(e);
            const [n] = Object(o.e)(`/core/users/settings.js?v=${+new Date}`);
            fetch(n, {
                method: "GET"
            }).then(e => e.json()).then(n => t({
                runnerSite: n.parent_site,
                profileSite: n.user_site,
                ...e
            })).catch(() => t(e))
        }(n, e))
    }

    function Tt() {
        Lt(window.location.search, window.REBELMOUSE_BOOTSTRAP_DATA).then(kt)
    }
    n.p = window.REBELMOUSE_BASE_ASSETS_URL, "loading" !== document.readyState ? Tt() : window.addEventListener("DOMContentLoaded", Tt)
}]);
//# sourceMappingURL=main.f2215d187e32d9bc0b28.bundle.mjs.map