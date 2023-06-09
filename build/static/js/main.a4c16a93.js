/*! For license information please see main.a4c16a93.js.LICENSE.txt */
(function () {
    var __webpack_modules__ = {
        988: function (e, t, r) {
            "use strict";
            var n = r(704).default;
            e.exports = function e(t, r) {
                if (t === r) return !0;
                if (t && r && "object" == typeof t && "object" == typeof r) {
                    if (t.constructor !== r.constructor) return !1;
                    var i, a, s;
                    if (Array.isArray(t)) {
                        if ((i = t.length) != r.length) return !1;
                        for (a = i; 0 !== a--;) if (!e(t[a], r[a])) return !1;
                        return !0
                    }
                    if (t instanceof Map && r instanceof Map) {
                        if (t.size !== r.size) return !1;
                        var o, l = n(t.entries());
                        try {
                            for (l.s(); !(o = l.n()).done;) if (a = o.value, !r.has(a[0])) return !1
                        } catch (d) {
                            l.e(d)
                        } finally {
                            l.f()
                        }
                        var h, u = n(t.entries());
                        try {
                            for (u.s(); !(h = u.n()).done;) if (!e((a = h.value)[1], r.get(a[0]))) return !1
                        } catch (d) {
                            u.e(d)
                        } finally {
                            u.f()
                        }
                        return !0
                    }
                    if (t instanceof Set && r instanceof Set) {
                        if (t.size !== r.size) return !1;
                        var c, p = n(t.entries());
                        try {
                            for (p.s(); !(c = p.n()).done;) if (a = c.value, !r.has(a[0])) return !1
                        } catch (d) {
                            p.e(d)
                        } finally {
                            p.f()
                        }
                        return !0
                    }
                    if (ArrayBuffer.isView(t) && ArrayBuffer.isView(r)) {
                        if ((i = t.length) != r.length) return !1;
                        for (a = i; 0 !== a--;) if (t[a] !== r[a]) return !1;
                        return !0
                    }
                    if (t.constructor === RegExp) return t.source === r.source && t.flags === r.flags;
                    if (t.valueOf !== Object.prototype.valueOf) return t.valueOf() === r.valueOf();
                    if (t.toString !== Object.prototype.toString) return t.toString() === r.toString();
                    if ((i = (s = Object.keys(t)).length) !== Object.keys(r).length) return !1;
                    for (a = i; 0 !== a--;) if (!Object.prototype.hasOwnProperty.call(r, s[a])) return !1;
                    for (a = i; 0 !== a--;) {
                        var f = s[a];
                        if (("_owner" !== f || !t.$$typeof) && !e(t[f], r[f])) return !1
                    }
                    return !0
                }
                return t !== t && r !== r
            }
        }, 451: function (module, exports, __webpack_require__) {
            var factory;
            "undefined" !== typeof navigator && (factory = function () {
                "use strict";
                var svgNS = "http://www.w3.org/2000/svg", locationHref = "", _useWebWorker = !1,
                    initialDefaultFrame = -999999, setWebWorker = function (e) {
                        _useWebWorker = !!e
                    }, getWebWorker = function () {
                        return _useWebWorker
                    }, setLocationHref = function (e) {
                        locationHref = e
                    }, getLocationHref = function () {
                        return locationHref
                    };

                function createTag(e) {
                    return document.createElement(e)
                }

                function extendPrototype(e, t) {
                    var r, n, i = e.length;
                    for (r = 0; r < i; r += 1) for (var a in n = e[r].prototype) Object.prototype.hasOwnProperty.call(n, a) && (t.prototype[a] = n[a])
                }

                function getDescriptor(e, t) {
                    return Object.getOwnPropertyDescriptor(e, t)
                }

                function createProxyFunction(e) {
                    function t() {
                    }

                    return t.prototype = e, t
                }

                var audioControllerFactory = function () {
                    function e(e) {
                        this.audios = [], this.audioFactory = e, this._volume = 1, this._isMuted = !1
                    }

                    return e.prototype = {
                        addAudio: function (e) {
                            this.audios.push(e)
                        }, pause: function () {
                            var e, t = this.audios.length;
                            for (e = 0; e < t; e += 1) this.audios[e].pause()
                        }, resume: function () {
                            var e, t = this.audios.length;
                            for (e = 0; e < t; e += 1) this.audios[e].resume()
                        }, setRate: function (e) {
                            var t, r = this.audios.length;
                            for (t = 0; t < r; t += 1) this.audios[t].setRate(e)
                        }, createAudio: function (e) {
                            return this.audioFactory ? this.audioFactory(e) : window.Howl ? new window.Howl({src: [e]}) : {
                                isPlaying: !1,
                                play: function () {
                                    this.isPlaying = !0
                                },
                                seek: function () {
                                    this.isPlaying = !1
                                },
                                playing: function () {
                                },
                                rate: function () {
                                },
                                setVolume: function () {
                                }
                            }
                        }, setAudioFactory: function (e) {
                            this.audioFactory = e
                        }, setVolume: function (e) {
                            this._volume = e, this._updateVolume()
                        }, mute: function () {
                            this._isMuted = !0, this._updateVolume()
                        }, unmute: function () {
                            this._isMuted = !1, this._updateVolume()
                        }, getVolume: function () {
                            return this._volume
                        }, _updateVolume: function () {
                            var e, t = this.audios.length;
                            for (e = 0; e < t; e += 1) this.audios[e].volume(this._volume * (this._isMuted ? 0 : 1))
                        }
                    }, function () {
                        return new e
                    }
                }(), createTypedArray = function () {
                    function e(e, t) {
                        var r, n = 0, i = [];
                        switch (e) {
                            case"int16":
                            case"uint8c":
                                r = 1;
                                break;
                            default:
                                r = 1.1
                        }
                        for (n = 0; n < t; n += 1) i.push(r);
                        return i
                    }

                    return "function" === typeof Uint8ClampedArray && "function" === typeof Float32Array ? function (t, r) {
                        return "float32" === t ? new Float32Array(r) : "int16" === t ? new Int16Array(r) : "uint8c" === t ? new Uint8ClampedArray(r) : e(t, r)
                    } : e
                }();

                function createSizedArray(e) {
                    return Array.apply(null, {length: e})
                }

                function _typeof$6(e) {
                    return _typeof$6 = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
                        return typeof e
                    } : function (e) {
                        return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    }, _typeof$6(e)
                }

                var subframeEnabled = !0, expressionsPlugin = null, expressionsInterfaces = null, idPrefix$1 = "",
                    isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent), _shouldRoundValues = !1,
                    bmPow = Math.pow, bmSqrt = Math.sqrt, bmFloor = Math.floor, bmMax = Math.max, bmMin = Math.min,
                    BMMath = {};

                function ProjectInterface$1() {
                    return {}
                }

                !function () {
                    var e,
                        t = ["abs", "acos", "acosh", "asin", "asinh", "atan", "atanh", "atan2", "ceil", "cbrt", "expm1", "clz32", "cos", "cosh", "exp", "floor", "fround", "hypot", "imul", "log", "log1p", "log2", "log10", "max", "min", "pow", "random", "round", "sign", "sin", "sinh", "sqrt", "tan", "tanh", "trunc", "E", "LN10", "LN2", "LOG10E", "LOG2E", "PI", "SQRT1_2", "SQRT2"],
                        r = t.length;
                    for (e = 0; e < r; e += 1) BMMath[t[e]] = Math[t[e]]
                }(), BMMath.random = Math.random, BMMath.abs = function (e) {
                    if ("object" === _typeof$6(e) && e.length) {
                        var t, r = createSizedArray(e.length), n = e.length;
                        for (t = 0; t < n; t += 1) r[t] = Math.abs(e[t]);
                        return r
                    }
                    return Math.abs(e)
                };
                var defaultCurveSegments = 150, degToRads = Math.PI / 180, roundCorner = .5519;

                function roundValues(e) {
                    _shouldRoundValues = !!e
                }

                function bmRnd(e) {
                    return _shouldRoundValues ? Math.round(e) : e
                }

                function styleDiv(e) {
                    e.style.position = "absolute", e.style.top = 0, e.style.left = 0, e.style.display = "block", e.style.transformOrigin = "0 0", e.style.webkitTransformOrigin = "0 0", e.style.backfaceVisibility = "visible", e.style.webkitBackfaceVisibility = "visible", e.style.transformStyle = "preserve-3d", e.style.webkitTransformStyle = "preserve-3d", e.style.mozTransformStyle = "preserve-3d"
                }

                function BMEnterFrameEvent(e, t, r, n) {
                    this.type = e, this.currentTime = t, this.totalTime = r, this.direction = n < 0 ? -1 : 1
                }

                function BMCompleteEvent(e, t) {
                    this.type = e, this.direction = t < 0 ? -1 : 1
                }

                function BMCompleteLoopEvent(e, t, r, n) {
                    this.type = e, this.currentLoop = r, this.totalLoops = t, this.direction = n < 0 ? -1 : 1
                }

                function BMSegmentStartEvent(e, t, r) {
                    this.type = e, this.firstFrame = t, this.totalFrames = r
                }

                function BMDestroyEvent(e, t) {
                    this.type = e, this.target = t
                }

                function BMRenderFrameErrorEvent(e, t) {
                    this.type = "renderFrameError", this.nativeError = e, this.currentTime = t
                }

                function BMConfigErrorEvent(e) {
                    this.type = "configError", this.nativeError = e
                }

                function BMAnimationConfigErrorEvent(e, t) {
                    this.type = e, this.nativeError = t
                }

                var createElementID = function () {
                    var e = 0;
                    return function () {
                        return idPrefix$1 + "__lottie_element_" + (e += 1)
                    }
                }();

                function HSVtoRGB(e, t, r) {
                    var n, i, a, s, o, l, h, u;
                    switch (l = r * (1 - t), h = r * (1 - (o = 6 * e - (s = Math.floor(6 * e))) * t), u = r * (1 - (1 - o) * t), s % 6) {
                        case 0:
                            n = r, i = u, a = l;
                            break;
                        case 1:
                            n = h, i = r, a = l;
                            break;
                        case 2:
                            n = l, i = r, a = u;
                            break;
                        case 3:
                            n = l, i = h, a = r;
                            break;
                        case 4:
                            n = u, i = l, a = r;
                            break;
                        case 5:
                            n = r, i = l, a = h
                    }
                    return [n, i, a]
                }

                function RGBtoHSV(e, t, r) {
                    var n, i = Math.max(e, t, r), a = Math.min(e, t, r), s = i - a, o = 0 === i ? 0 : s / i,
                        l = i / 255;
                    switch (i) {
                        case a:
                            n = 0;
                            break;
                        case e:
                            n = t - r + s * (t < r ? 6 : 0), n /= 6 * s;
                            break;
                        case t:
                            n = r - e + 2 * s, n /= 6 * s;
                            break;
                        case r:
                            n = e - t + 4 * s, n /= 6 * s
                    }
                    return [n, o, l]
                }

                function addSaturationToRGB(e, t) {
                    var r = RGBtoHSV(255 * e[0], 255 * e[1], 255 * e[2]);
                    return r[1] += t, r[1] > 1 ? r[1] = 1 : r[1] <= 0 && (r[1] = 0), HSVtoRGB(r[0], r[1], r[2])
                }

                function addBrightnessToRGB(e, t) {
                    var r = RGBtoHSV(255 * e[0], 255 * e[1], 255 * e[2]);
                    return r[2] += t, r[2] > 1 ? r[2] = 1 : r[2] < 0 && (r[2] = 0), HSVtoRGB(r[0], r[1], r[2])
                }

                function addHueToRGB(e, t) {
                    var r = RGBtoHSV(255 * e[0], 255 * e[1], 255 * e[2]);
                    return r[0] += t / 360, r[0] > 1 ? r[0] -= 1 : r[0] < 0 && (r[0] += 1), HSVtoRGB(r[0], r[1], r[2])
                }

                var rgbToHex = function () {
                    var e, t, r = [];
                    for (e = 0; e < 256; e += 1) t = e.toString(16), r[e] = 1 === t.length ? "0" + t : t;
                    return function (e, t, n) {
                        return e < 0 && (e = 0), t < 0 && (t = 0), n < 0 && (n = 0), "#" + r[e] + r[t] + r[n]
                    }
                }(), setSubframeEnabled = function (e) {
                    subframeEnabled = !!e
                }, getSubframeEnabled = function () {
                    return subframeEnabled
                }, setExpressionsPlugin = function (e) {
                    expressionsPlugin = e
                }, getExpressionsPlugin = function () {
                    return expressionsPlugin
                }, setExpressionInterfaces = function (e) {
                    expressionsInterfaces = e
                }, getExpressionInterfaces = function () {
                    return expressionsInterfaces
                }, setDefaultCurveSegments = function (e) {
                    defaultCurveSegments = e
                }, getDefaultCurveSegments = function () {
                    return defaultCurveSegments
                }, setIdPrefix = function (e) {
                    idPrefix$1 = e
                }, getIdPrefix = function () {
                    return idPrefix$1
                };

                function createNS(e) {
                    return document.createElementNS(svgNS, e)
                }

                function _typeof$5(e) {
                    return _typeof$5 = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
                        return typeof e
                    } : function (e) {
                        return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    }, _typeof$5(e)
                }

                var dataManager = function () {
                    var e, t, r = 1, n = [], i = {
                        onmessage: function () {
                        }, postMessage: function (t) {
                            e({data: t})
                        }
                    }, a = {
                        postMessage: function (e) {
                            i.onmessage({data: e})
                        }
                    };

                    function s() {
                        t || (t = function (t) {
                            if (window.Worker && window.Blob && getWebWorker()) {
                                var r = new Blob(["var _workerSelf = self; self.onmessage = ", t.toString()], {type: "text/javascript"}),
                                    n = URL.createObjectURL(r);
                                return new Worker(n)
                            }
                            return e = t, i
                        }((function (e) {
                            if (a.dataManager || (a.dataManager = function () {
                                function e(i, a) {
                                    var s, o, l, h, c, p, f = i.length;
                                    for (o = 0; o < f; o += 1) if ("ks" in (s = i[o]) && !s.completed) {
                                        if (s.completed = !0, s.hasMask) {
                                            var d = s.masksProperties;
                                            for (h = d.length, l = 0; l < h; l += 1) if (d[l].pt.k.i) n(d[l].pt.k); else for (p = d[l].pt.k.length, c = 0; c < p; c += 1) d[l].pt.k[c].s && n(d[l].pt.k[c].s[0]), d[l].pt.k[c].e && n(d[l].pt.k[c].e[0])
                                        }
                                        0 === s.ty ? (s.layers = t(s.refId, a), e(s.layers, a)) : 4 === s.ty ? r(s.shapes) : 5 === s.ty && u(s)
                                    }
                                }

                                function t(e, t) {
                                    var r = function (e, t) {
                                        for (var r = 0, n = t.length; r < n;) {
                                            if (t[r].id === e) return t[r];
                                            r += 1
                                        }
                                        return null
                                    }(e, t);
                                    return r ? r.layers.__used ? JSON.parse(JSON.stringify(r.layers)) : (r.layers.__used = !0, r.layers) : null
                                }

                                function r(e) {
                                    var t, i, a;
                                    for (t = e.length - 1; t >= 0; t -= 1) if ("sh" === e[t].ty) if (e[t].ks.k.i) n(e[t].ks.k); else for (a = e[t].ks.k.length, i = 0; i < a; i += 1) e[t].ks.k[i].s && n(e[t].ks.k[i].s[0]), e[t].ks.k[i].e && n(e[t].ks.k[i].e[0]); else "gr" === e[t].ty && r(e[t].it)
                                }

                                function n(e) {
                                    var t, r = e.i.length;
                                    for (t = 0; t < r; t += 1) e.i[t][0] += e.v[t][0], e.i[t][1] += e.v[t][1], e.o[t][0] += e.v[t][0], e.o[t][1] += e.v[t][1]
                                }

                                function i(e, t) {
                                    var r = t ? t.split(".") : [100, 100, 100];
                                    return e[0] > r[0] || !(r[0] > e[0]) && (e[1] > r[1] || !(r[1] > e[1]) && (e[2] > r[2] || !(r[2] > e[2]) && null))
                                }

                                var a = function () {
                                    var e = [4, 4, 14];

                                    function t(e) {
                                        var t = e.t.d;
                                        e.t.d = {k: [{s: t, t: 0}]}
                                    }

                                    function r(e) {
                                        var r, n = e.length;
                                        for (r = 0; r < n; r += 1) 5 === e[r].ty && t(e[r])
                                    }

                                    return function (t) {
                                        if (i(e, t.v) && (r(t.layers), t.assets)) {
                                            var n, a = t.assets.length;
                                            for (n = 0; n < a; n += 1) t.assets[n].layers && r(t.assets[n].layers)
                                        }
                                    }
                                }(), s = function () {
                                    var e = [4, 7, 99];
                                    return function (t) {
                                        if (t.chars && !i(e, t.v)) {
                                            var n, a = t.chars.length;
                                            for (n = 0; n < a; n += 1) {
                                                var s = t.chars[n];
                                                s.data && s.data.shapes && (r(s.data.shapes), s.data.ip = 0, s.data.op = 99999, s.data.st = 0, s.data.sr = 1, s.data.ks = {
                                                    p: {
                                                        k: [0, 0],
                                                        a: 0
                                                    },
                                                    s: {k: [100, 100], a: 0},
                                                    a: {k: [0, 0], a: 0},
                                                    r: {k: 0, a: 0},
                                                    o: {k: 100, a: 0}
                                                }, t.chars[n].t || (s.data.shapes.push({ty: "no"}), s.data.shapes[0].it.push({
                                                    p: {
                                                        k: [0, 0],
                                                        a: 0
                                                    },
                                                    s: {k: [100, 100], a: 0},
                                                    a: {k: [0, 0], a: 0},
                                                    r: {k: 0, a: 0},
                                                    o: {k: 100, a: 0},
                                                    sk: {k: 0, a: 0},
                                                    sa: {k: 0, a: 0},
                                                    ty: "tr"
                                                })))
                                            }
                                        }
                                    }
                                }(), o = function () {
                                    var e = [5, 7, 15];

                                    function t(e) {
                                        var t = e.t.p;
                                        "number" === typeof t.a && (t.a = {
                                            a: 0,
                                            k: t.a
                                        }), "number" === typeof t.p && (t.p = {
                                            a: 0,
                                            k: t.p
                                        }), "number" === typeof t.r && (t.r = {a: 0, k: t.r})
                                    }

                                    function r(e) {
                                        var r, n = e.length;
                                        for (r = 0; r < n; r += 1) 5 === e[r].ty && t(e[r])
                                    }

                                    return function (t) {
                                        if (i(e, t.v) && (r(t.layers), t.assets)) {
                                            var n, a = t.assets.length;
                                            for (n = 0; n < a; n += 1) t.assets[n].layers && r(t.assets[n].layers)
                                        }
                                    }
                                }(), l = function () {
                                    var e = [4, 1, 9];

                                    function t(e) {
                                        var r, n, i, a = e.length;
                                        for (r = 0; r < a; r += 1) if ("gr" === e[r].ty) t(e[r].it); else if ("fl" === e[r].ty || "st" === e[r].ty) if (e[r].c.k && e[r].c.k[0].i) for (i = e[r].c.k.length, n = 0; n < i; n += 1) e[r].c.k[n].s && (e[r].c.k[n].s[0] /= 255, e[r].c.k[n].s[1] /= 255, e[r].c.k[n].s[2] /= 255, e[r].c.k[n].s[3] /= 255), e[r].c.k[n].e && (e[r].c.k[n].e[0] /= 255, e[r].c.k[n].e[1] /= 255, e[r].c.k[n].e[2] /= 255, e[r].c.k[n].e[3] /= 255); else e[r].c.k[0] /= 255, e[r].c.k[1] /= 255, e[r].c.k[2] /= 255, e[r].c.k[3] /= 255
                                    }

                                    function r(e) {
                                        var r, n = e.length;
                                        for (r = 0; r < n; r += 1) 4 === e[r].ty && t(e[r].shapes)
                                    }

                                    return function (t) {
                                        if (i(e, t.v) && (r(t.layers), t.assets)) {
                                            var n, a = t.assets.length;
                                            for (n = 0; n < a; n += 1) t.assets[n].layers && r(t.assets[n].layers)
                                        }
                                    }
                                }(), h = function () {
                                    var e = [4, 4, 18];

                                    function t(e) {
                                        var r, n, i;
                                        for (r = e.length - 1; r >= 0; r -= 1) if ("sh" === e[r].ty) if (e[r].ks.k.i) e[r].ks.k.c = e[r].closed; else for (i = e[r].ks.k.length, n = 0; n < i; n += 1) e[r].ks.k[n].s && (e[r].ks.k[n].s[0].c = e[r].closed), e[r].ks.k[n].e && (e[r].ks.k[n].e[0].c = e[r].closed); else "gr" === e[r].ty && t(e[r].it)
                                    }

                                    function r(e) {
                                        var r, n, i, a, s, o, l = e.length;
                                        for (n = 0; n < l; n += 1) {
                                            if ((r = e[n]).hasMask) {
                                                var h = r.masksProperties;
                                                for (a = h.length, i = 0; i < a; i += 1) if (h[i].pt.k.i) h[i].pt.k.c = h[i].cl; else for (o = h[i].pt.k.length, s = 0; s < o; s += 1) h[i].pt.k[s].s && (h[i].pt.k[s].s[0].c = h[i].cl), h[i].pt.k[s].e && (h[i].pt.k[s].e[0].c = h[i].cl)
                                            }
                                            4 === r.ty && t(r.shapes)
                                        }
                                    }

                                    return function (t) {
                                        if (i(e, t.v) && (r(t.layers), t.assets)) {
                                            var n, a = t.assets.length;
                                            for (n = 0; n < a; n += 1) t.assets[n].layers && r(t.assets[n].layers)
                                        }
                                    }
                                }();

                                function u(e) {
                                    0 === e.t.a.length && e.t.p
                                }

                                var c = {
                                    completeData: function (r) {
                                        r.__complete || (l(r), a(r), s(r), o(r), h(r), e(r.layers, r.assets), function (r, n) {
                                            if (r) {
                                                var i = 0, a = r.length;
                                                for (i = 0; i < a; i += 1) 1 === r[i].t && (r[i].data.layers = t(r[i].data.refId, n), e(r[i].data.layers, n))
                                            }
                                        }(r.chars, r.assets), r.__complete = !0)
                                    }
                                };
                                return c.checkColors = l, c.checkChars = s, c.checkPathProperties = o, c.checkShapes = h, c.completeLayers = e, c
                            }()), a.assetLoader || (a.assetLoader = function () {
                                function e(e) {
                                    var t = e.getResponseHeader("content-type");
                                    return t && "json" === e.responseType && -1 !== t.indexOf("json") || e.response && "object" === _typeof$5(e.response) ? e.response : e.response && "string" === typeof e.response ? JSON.parse(e.response) : e.responseText ? JSON.parse(e.responseText) : null
                                }

                                return {
                                    load: function (t, r, n, i) {
                                        var a, s = new XMLHttpRequest;
                                        try {
                                            s.responseType = "json"
                                        } catch (o) {
                                        }
                                        s.onreadystatechange = function () {
                                            if (4 === s.readyState) if (200 === s.status) a = e(s), n(a); else try {
                                                a = e(s), n(a)
                                            } catch (o) {
                                                i && i(o)
                                            }
                                        };
                                        try {
                                            s.open(["G", "E", "T"].join(""), t, !0)
                                        } catch (l) {
                                            s.open(["G", "E", "T"].join(""), r + "/" + t, !0)
                                        }
                                        s.send()
                                    }
                                }
                            }()), "loadAnimation" === e.data.type) a.assetLoader.load(e.data.path, e.data.fullPath, (function (t) {
                                a.dataManager.completeData(t), a.postMessage({
                                    id: e.data.id,
                                    payload: t,
                                    status: "success"
                                })
                            }), (function () {
                                a.postMessage({id: e.data.id, status: "error"})
                            })); else if ("complete" === e.data.type) {
                                var t = e.data.animation;
                                a.dataManager.completeData(t), a.postMessage({
                                    id: e.data.id,
                                    payload: t,
                                    status: "success"
                                })
                            } else "loadData" === e.data.type && a.assetLoader.load(e.data.path, e.data.fullPath, (function (t) {
                                a.postMessage({id: e.data.id, payload: t, status: "success"})
                            }), (function () {
                                a.postMessage({id: e.data.id, status: "error"})
                            }))
                        })), t.onmessage = function (e) {
                            var t = e.data, r = t.id, i = n[r];
                            n[r] = null, "success" === t.status ? i.onComplete(t.payload) : i.onError && i.onError()
                        })
                    }

                    function o(e, t) {
                        var i = "processId_" + (r += 1);
                        return n[i] = {onComplete: e, onError: t}, i
                    }

                    return {
                        loadAnimation: function (e, r, n) {
                            s();
                            var i = o(r, n);
                            t.postMessage({
                                type: "loadAnimation",
                                path: e,
                                fullPath: window.location.origin + window.location.pathname,
                                id: i
                            })
                        }, loadData: function (e, r, n) {
                            s();
                            var i = o(r, n);
                            t.postMessage({
                                type: "loadData",
                                path: e,
                                fullPath: window.location.origin + window.location.pathname,
                                id: i
                            })
                        }, completeAnimation: function (e, r, n) {
                            s();
                            var i = o(r, n);
                            t.postMessage({type: "complete", animation: e, id: i})
                        }
                    }
                }(), ImagePreloader = function () {
                    var e = function () {
                        var e = createTag("canvas");
                        e.width = 1, e.height = 1;
                        var t = e.getContext("2d");
                        return t.fillStyle = "rgba(0,0,0,0)", t.fillRect(0, 0, 1, 1), e
                    }();

                    function t() {
                        this.loadedAssets += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null)
                    }

                    function r() {
                        this.loadedFootagesCount += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null)
                    }

                    function n(e, t, r) {
                        var n = "";
                        if (e.e) n = e.p; else if (t) {
                            var i = e.p;
                            -1 !== i.indexOf("images/") && (i = i.split("/")[1]), n = t + i
                        } else n = r, n += e.u ? e.u : "", n += e.p;
                        return n
                    }

                    function i(e) {
                        var t = 0, r = setInterval(function () {
                            (e.getBBox().width || t > 500) && (this._imageLoaded(), clearInterval(r)), t += 1
                        }.bind(this), 50)
                    }

                    function a(e) {
                        var t = {assetData: e}, r = n(e, this.assetsPath, this.path);
                        return dataManager.loadData(r, function (e) {
                            t.img = e, this._footageLoaded()
                        }.bind(this), function () {
                            t.img = {}, this._footageLoaded()
                        }.bind(this)), t
                    }

                    function s() {
                        this._imageLoaded = t.bind(this), this._footageLoaded = r.bind(this), this.testImageLoaded = i.bind(this), this.createFootageData = a.bind(this), this.assetsPath = "", this.path = "", this.totalImages = 0, this.totalFootages = 0, this.loadedAssets = 0, this.loadedFootagesCount = 0, this.imagesLoadedCb = null, this.images = []
                    }

                    return s.prototype = {
                        loadAssets: function (e, t) {
                            var r;
                            this.imagesLoadedCb = t;
                            var n = e.length;
                            for (r = 0; r < n; r += 1) e[r].layers || (e[r].t && "seq" !== e[r].t ? 3 === e[r].t && (this.totalFootages += 1, this.images.push(this.createFootageData(e[r]))) : (this.totalImages += 1, this.images.push(this._createImageData(e[r]))))
                        }, setAssetsPath: function (e) {
                            this.assetsPath = e || ""
                        }, setPath: function (e) {
                            this.path = e || ""
                        }, loadedImages: function () {
                            return this.totalImages === this.loadedAssets
                        }, loadedFootages: function () {
                            return this.totalFootages === this.loadedFootagesCount
                        }, destroy: function () {
                            this.imagesLoadedCb = null, this.images.length = 0
                        }, getAsset: function (e) {
                            for (var t = 0, r = this.images.length; t < r;) {
                                if (this.images[t].assetData === e) return this.images[t].img;
                                t += 1
                            }
                            return null
                        }, createImgData: function (t) {
                            var r = n(t, this.assetsPath, this.path), i = createTag("img");
                            i.crossOrigin = "anonymous", i.addEventListener("load", this._imageLoaded, !1), i.addEventListener("error", function () {
                                a.img = e, this._imageLoaded()
                            }.bind(this), !1), i.src = r;
                            var a = {img: i, assetData: t};
                            return a
                        }, createImageData: function (t) {
                            var r = n(t, this.assetsPath, this.path), i = createNS("image");
                            isSafari ? this.testImageLoaded(i) : i.addEventListener("load", this._imageLoaded, !1), i.addEventListener("error", function () {
                                a.img = e, this._imageLoaded()
                            }.bind(this), !1), i.setAttributeNS("http://www.w3.org/1999/xlink", "href", r), this._elementHelper.append ? this._elementHelper.append(i) : this._elementHelper.appendChild(i);
                            var a = {img: i, assetData: t};
                            return a
                        }, imageLoaded: t, footageLoaded: r, setCacheType: function (e, t) {
                            "svg" === e ? (this._elementHelper = t, this._createImageData = this.createImageData.bind(this)) : this._createImageData = this.createImgData.bind(this)
                        }
                    }, s
                }();

                function BaseEvent() {
                }

                BaseEvent.prototype = {
                    triggerEvent: function (e, t) {
                        if (this._cbs[e]) for (var r = this._cbs[e], n = 0; n < r.length; n += 1) r[n](t)
                    }, addEventListener: function (e, t) {
                        return this._cbs[e] || (this._cbs[e] = []), this._cbs[e].push(t), function () {
                            this.removeEventListener(e, t)
                        }.bind(this)
                    }, removeEventListener: function (e, t) {
                        if (t) {
                            if (this._cbs[e]) {
                                for (var r = 0, n = this._cbs[e].length; r < n;) this._cbs[e][r] === t && (this._cbs[e].splice(r, 1), r -= 1, n -= 1), r += 1;
                                this._cbs[e].length || (this._cbs[e] = null)
                            }
                        } else this._cbs[e] = null
                    }
                };
                var markerParser = function () {
                    function e(e) {
                        for (var t, r = e.split("\r\n"), n = {}, i = 0, a = 0; a < r.length; a += 1) 2 === (t = r[a].split(":")).length && (n[t[0]] = t[1].trim(), i += 1);
                        if (0 === i) throw new Error;
                        return n
                    }

                    return function (t) {
                        for (var r = [], n = 0; n < t.length; n += 1) {
                            var i = t[n], a = {time: i.tm, duration: i.dr};
                            try {
                                a.payload = JSON.parse(t[n].cm)
                            } catch (s) {
                                try {
                                    a.payload = e(t[n].cm)
                                } catch (o) {
                                    a.payload = {name: t[n].cm}
                                }
                            }
                            r.push(a)
                        }
                        return r
                    }
                }(), ProjectInterface = function () {
                    function e(e) {
                        this.compositions.push(e)
                    }

                    return function () {
                        function t(e) {
                            for (var t = 0, r = this.compositions.length; t < r;) {
                                if (this.compositions[t].data && this.compositions[t].data.nm === e) return this.compositions[t].prepareFrame && this.compositions[t].data.xt && this.compositions[t].prepareFrame(this.currentFrame), this.compositions[t].compInterface;
                                t += 1
                            }
                            return null
                        }

                        return t.compositions = [], t.currentFrame = 0, t.registerComposition = e, t
                    }
                }(), renderers = {}, registerRenderer = function (e, t) {
                    renderers[e] = t
                };

                function getRenderer(e) {
                    return renderers[e]
                }

                function _typeof$4(e) {
                    return _typeof$4 = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
                        return typeof e
                    } : function (e) {
                        return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    }, _typeof$4(e)
                }

                var AnimationItem = function () {
                    this._cbs = [], this.name = "", this.path = "", this.isLoaded = !1, this.currentFrame = 0, this.currentRawFrame = 0, this.firstFrame = 0, this.totalFrames = 0, this.frameRate = 0, this.frameMult = 0, this.playSpeed = 1, this.playDirection = 1, this.playCount = 0, this.animationData = {}, this.assets = [], this.isPaused = !0, this.autoplay = !1, this.loop = !0, this.renderer = null, this.animationID = createElementID(), this.assetsPath = "", this.timeCompleted = 0, this.segmentPos = 0, this.isSubframeEnabled = getSubframeEnabled(), this.segments = [], this._idle = !0, this._completedLoop = !1, this.projectInterface = ProjectInterface(), this.imagePreloader = new ImagePreloader, this.audioController = audioControllerFactory(), this.markers = [], this.configAnimation = this.configAnimation.bind(this), this.onSetupError = this.onSetupError.bind(this), this.onSegmentComplete = this.onSegmentComplete.bind(this), this.drawnFrameEvent = new BMEnterFrameEvent("drawnFrame", 0, 0, 0)
                };
                extendPrototype([BaseEvent], AnimationItem), AnimationItem.prototype.setParams = function (e) {
                    (e.wrapper || e.container) && (this.wrapper = e.wrapper || e.container);
                    var t = "svg";
                    e.animType ? t = e.animType : e.renderer && (t = e.renderer);
                    var r = getRenderer(t);
                    this.renderer = new r(this, e.rendererSettings), this.imagePreloader.setCacheType(t, this.renderer.globalData.defs), this.renderer.setProjectInterface(this.projectInterface), this.animType = t, "" === e.loop || null === e.loop || void 0 === e.loop || !0 === e.loop ? this.loop = !0 : !1 === e.loop ? this.loop = !1 : this.loop = parseInt(e.loop, 10), this.autoplay = !("autoplay" in e) || e.autoplay, this.name = e.name ? e.name : "", this.autoloadSegments = !Object.prototype.hasOwnProperty.call(e, "autoloadSegments") || e.autoloadSegments, this.assetsPath = e.assetsPath, this.initialSegment = e.initialSegment, e.audioFactory && this.audioController.setAudioFactory(e.audioFactory), e.animationData ? this.setupAnimation(e.animationData) : e.path && (-1 !== e.path.lastIndexOf("\\") ? this.path = e.path.substr(0, e.path.lastIndexOf("\\") + 1) : this.path = e.path.substr(0, e.path.lastIndexOf("/") + 1), this.fileName = e.path.substr(e.path.lastIndexOf("/") + 1), this.fileName = this.fileName.substr(0, this.fileName.lastIndexOf(".json")), dataManager.loadAnimation(e.path, this.configAnimation, this.onSetupError))
                }, AnimationItem.prototype.onSetupError = function () {
                    this.trigger("data_failed")
                }, AnimationItem.prototype.setupAnimation = function (e) {
                    dataManager.completeAnimation(e, this.configAnimation)
                }, AnimationItem.prototype.setData = function (e, t) {
                    t && "object" !== _typeof$4(t) && (t = JSON.parse(t));
                    var r = {wrapper: e, animationData: t}, n = e.attributes;
                    r.path = n.getNamedItem("data-animation-path") ? n.getNamedItem("data-animation-path").value : n.getNamedItem("data-bm-path") ? n.getNamedItem("data-bm-path").value : n.getNamedItem("bm-path") ? n.getNamedItem("bm-path").value : "", r.animType = n.getNamedItem("data-anim-type") ? n.getNamedItem("data-anim-type").value : n.getNamedItem("data-bm-type") ? n.getNamedItem("data-bm-type").value : n.getNamedItem("bm-type") ? n.getNamedItem("bm-type").value : n.getNamedItem("data-bm-renderer") ? n.getNamedItem("data-bm-renderer").value : n.getNamedItem("bm-renderer") ? n.getNamedItem("bm-renderer").value : "canvas";
                    var i = n.getNamedItem("data-anim-loop") ? n.getNamedItem("data-anim-loop").value : n.getNamedItem("data-bm-loop") ? n.getNamedItem("data-bm-loop").value : n.getNamedItem("bm-loop") ? n.getNamedItem("bm-loop").value : "";
                    "false" === i ? r.loop = !1 : "true" === i ? r.loop = !0 : "" !== i && (r.loop = parseInt(i, 10));
                    var a = n.getNamedItem("data-anim-autoplay") ? n.getNamedItem("data-anim-autoplay").value : n.getNamedItem("data-bm-autoplay") ? n.getNamedItem("data-bm-autoplay").value : !n.getNamedItem("bm-autoplay") || n.getNamedItem("bm-autoplay").value;
                    r.autoplay = "false" !== a, r.name = n.getNamedItem("data-name") ? n.getNamedItem("data-name").value : n.getNamedItem("data-bm-name") ? n.getNamedItem("data-bm-name").value : n.getNamedItem("bm-name") ? n.getNamedItem("bm-name").value : "", "false" === (n.getNamedItem("data-anim-prerender") ? n.getNamedItem("data-anim-prerender").value : n.getNamedItem("data-bm-prerender") ? n.getNamedItem("data-bm-prerender").value : n.getNamedItem("bm-prerender") ? n.getNamedItem("bm-prerender").value : "") && (r.prerender = !1), this.setParams(r)
                }, AnimationItem.prototype.includeLayers = function (e) {
                    e.op > this.animationData.op && (this.animationData.op = e.op, this.totalFrames = Math.floor(e.op - this.animationData.ip));
                    var t, r, n = this.animationData.layers, i = n.length, a = e.layers, s = a.length;
                    for (r = 0; r < s; r += 1) for (t = 0; t < i;) {
                        if (n[t].id === a[r].id) {
                            n[t] = a[r];
                            break
                        }
                        t += 1
                    }
                    if ((e.chars || e.fonts) && (this.renderer.globalData.fontManager.addChars(e.chars), this.renderer.globalData.fontManager.addFonts(e.fonts, this.renderer.globalData.defs)), e.assets) for (i = e.assets.length, t = 0; t < i; t += 1) this.animationData.assets.push(e.assets[t]);
                    this.animationData.__complete = !1, dataManager.completeAnimation(this.animationData, this.onSegmentComplete)
                }, AnimationItem.prototype.onSegmentComplete = function (e) {
                    this.animationData = e;
                    var t = getExpressionsPlugin();
                    t && t.initExpressions(this), this.loadNextSegment()
                }, AnimationItem.prototype.loadNextSegment = function () {
                    var e = this.animationData.segments;
                    if (!e || 0 === e.length || !this.autoloadSegments) return this.trigger("data_ready"), void (this.timeCompleted = this.totalFrames);
                    var t = e.shift();
                    this.timeCompleted = t.time * this.frameRate;
                    var r = this.path + this.fileName + "_" + this.segmentPos + ".json";
                    this.segmentPos += 1, dataManager.loadData(r, this.includeLayers.bind(this), function () {
                        this.trigger("data_failed")
                    }.bind(this))
                }, AnimationItem.prototype.loadSegments = function () {
                    this.animationData.segments || (this.timeCompleted = this.totalFrames), this.loadNextSegment()
                }, AnimationItem.prototype.imagesLoaded = function () {
                    this.trigger("loaded_images"), this.checkLoaded()
                }, AnimationItem.prototype.preloadImages = function () {
                    this.imagePreloader.setAssetsPath(this.assetsPath), this.imagePreloader.setPath(this.path), this.imagePreloader.loadAssets(this.animationData.assets, this.imagesLoaded.bind(this))
                }, AnimationItem.prototype.configAnimation = function (e) {
                    if (this.renderer) try {
                        this.animationData = e, this.initialSegment ? (this.totalFrames = Math.floor(this.initialSegment[1] - this.initialSegment[0]), this.firstFrame = Math.round(this.initialSegment[0])) : (this.totalFrames = Math.floor(this.animationData.op - this.animationData.ip), this.firstFrame = Math.round(this.animationData.ip)), this.renderer.configAnimation(e), e.assets || (e.assets = []), this.assets = this.animationData.assets, this.frameRate = this.animationData.fr, this.frameMult = this.animationData.fr / 1e3, this.renderer.searchExtraCompositions(e.assets), this.markers = markerParser(e.markers || []), this.trigger("config_ready"), this.preloadImages(), this.loadSegments(), this.updaFrameModifier(), this.waitForFontsLoaded(), this.isPaused && this.audioController.pause()
                    } catch (t) {
                        this.triggerConfigError(t)
                    }
                }, AnimationItem.prototype.waitForFontsLoaded = function () {
                    this.renderer && (this.renderer.globalData.fontManager.isLoaded ? this.checkLoaded() : setTimeout(this.waitForFontsLoaded.bind(this), 20))
                }, AnimationItem.prototype.checkLoaded = function () {
                    if (!this.isLoaded && this.renderer.globalData.fontManager.isLoaded && (this.imagePreloader.loadedImages() || "canvas" !== this.renderer.rendererType) && this.imagePreloader.loadedFootages()) {
                        this.isLoaded = !0;
                        var e = getExpressionsPlugin();
                        e && e.initExpressions(this), this.renderer.initItems(), setTimeout(function () {
                            this.trigger("DOMLoaded")
                        }.bind(this), 0), this.gotoFrame(), this.autoplay && this.play()
                    }
                }, AnimationItem.prototype.resize = function (e, t) {
                    var r = "number" === typeof e ? e : void 0, n = "number" === typeof t ? t : void 0;
                    this.renderer.updateContainerSize(r, n)
                }, AnimationItem.prototype.setSubframe = function (e) {
                    this.isSubframeEnabled = !!e
                }, AnimationItem.prototype.gotoFrame = function () {
                    this.currentFrame = this.isSubframeEnabled ? this.currentRawFrame : ~~this.currentRawFrame, this.timeCompleted !== this.totalFrames && this.currentFrame > this.timeCompleted && (this.currentFrame = this.timeCompleted), this.trigger("enterFrame"), this.renderFrame(), this.trigger("drawnFrame")
                }, AnimationItem.prototype.renderFrame = function () {
                    if (!1 !== this.isLoaded && this.renderer) try {
                        this.renderer.renderFrame(this.currentFrame + this.firstFrame)
                    } catch (e) {
                        this.triggerRenderFrameError(e)
                    }
                }, AnimationItem.prototype.play = function (e) {
                    e && this.name !== e || !0 === this.isPaused && (this.isPaused = !1, this.trigger("_pause"), this.audioController.resume(), this._idle && (this._idle = !1, this.trigger("_active")))
                }, AnimationItem.prototype.pause = function (e) {
                    e && this.name !== e || !1 === this.isPaused && (this.isPaused = !0, this.trigger("_play"), this._idle = !0, this.trigger("_idle"), this.audioController.pause())
                }, AnimationItem.prototype.togglePause = function (e) {
                    e && this.name !== e || (!0 === this.isPaused ? this.play() : this.pause())
                }, AnimationItem.prototype.stop = function (e) {
                    e && this.name !== e || (this.pause(), this.playCount = 0, this._completedLoop = !1, this.setCurrentRawFrameValue(0))
                }, AnimationItem.prototype.getMarkerData = function (e) {
                    for (var t, r = 0; r < this.markers.length; r += 1) if ((t = this.markers[r]).payload && t.payload.name === e) return t;
                    return null
                }, AnimationItem.prototype.goToAndStop = function (e, t, r) {
                    if (!r || this.name === r) {
                        var n = Number(e);
                        if (isNaN(n)) {
                            var i = this.getMarkerData(e);
                            i && this.goToAndStop(i.time, !0)
                        } else t ? this.setCurrentRawFrameValue(e) : this.setCurrentRawFrameValue(e * this.frameModifier);
                        this.pause()
                    }
                }, AnimationItem.prototype.goToAndPlay = function (e, t, r) {
                    if (!r || this.name === r) {
                        var n = Number(e);
                        if (isNaN(n)) {
                            var i = this.getMarkerData(e);
                            i && (i.duration ? this.playSegments([i.time, i.time + i.duration], !0) : this.goToAndStop(i.time, !0))
                        } else this.goToAndStop(n, t, r);
                        this.play()
                    }
                }, AnimationItem.prototype.advanceTime = function (e) {
                    if (!0 !== this.isPaused && !1 !== this.isLoaded) {
                        var t = this.currentRawFrame + e * this.frameModifier, r = !1;
                        t >= this.totalFrames - 1 && this.frameModifier > 0 ? this.loop && this.playCount !== this.loop ? t >= this.totalFrames ? (this.playCount += 1, this.checkSegments(t % this.totalFrames) || (this.setCurrentRawFrameValue(t % this.totalFrames), this._completedLoop = !0, this.trigger("loopComplete"))) : this.setCurrentRawFrameValue(t) : this.checkSegments(t > this.totalFrames ? t % this.totalFrames : 0) || (r = !0, t = this.totalFrames - 1) : t < 0 ? this.checkSegments(t % this.totalFrames) || (!this.loop || this.playCount-- <= 0 && !0 !== this.loop ? (r = !0, t = 0) : (this.setCurrentRawFrameValue(this.totalFrames + t % this.totalFrames), this._completedLoop ? this.trigger("loopComplete") : this._completedLoop = !0)) : this.setCurrentRawFrameValue(t), r && (this.setCurrentRawFrameValue(t), this.pause(), this.trigger("complete"))
                    }
                }, AnimationItem.prototype.adjustSegment = function (e, t) {
                    this.playCount = 0, e[1] < e[0] ? (this.frameModifier > 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(-1)), this.totalFrames = e[0] - e[1], this.timeCompleted = this.totalFrames, this.firstFrame = e[1], this.setCurrentRawFrameValue(this.totalFrames - .001 - t)) : e[1] > e[0] && (this.frameModifier < 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(1)), this.totalFrames = e[1] - e[0], this.timeCompleted = this.totalFrames, this.firstFrame = e[0], this.setCurrentRawFrameValue(.001 + t)), this.trigger("segmentStart")
                }, AnimationItem.prototype.setSegment = function (e, t) {
                    var r = -1;
                    this.isPaused && (this.currentRawFrame + this.firstFrame < e ? r = e : this.currentRawFrame + this.firstFrame > t && (r = t - e)), this.firstFrame = e, this.totalFrames = t - e, this.timeCompleted = this.totalFrames, -1 !== r && this.goToAndStop(r, !0)
                }, AnimationItem.prototype.playSegments = function (e, t) {
                    if (t && (this.segments.length = 0), "object" === _typeof$4(e[0])) {
                        var r, n = e.length;
                        for (r = 0; r < n; r += 1) this.segments.push(e[r])
                    } else this.segments.push(e);
                    this.segments.length && t && this.adjustSegment(this.segments.shift(), 0), this.isPaused && this.play()
                }, AnimationItem.prototype.resetSegments = function (e) {
                    this.segments.length = 0, this.segments.push([this.animationData.ip, this.animationData.op]), e && this.checkSegments(0)
                }, AnimationItem.prototype.checkSegments = function (e) {
                    return !!this.segments.length && (this.adjustSegment(this.segments.shift(), e), !0)
                }, AnimationItem.prototype.destroy = function (e) {
                    e && this.name !== e || !this.renderer || (this.renderer.destroy(), this.imagePreloader.destroy(), this.trigger("destroy"), this._cbs = null, this.onEnterFrame = null, this.onLoopComplete = null, this.onComplete = null, this.onSegmentStart = null, this.onDestroy = null, this.renderer = null, this.renderer = null, this.imagePreloader = null, this.projectInterface = null)
                }, AnimationItem.prototype.setCurrentRawFrameValue = function (e) {
                    this.currentRawFrame = e, this.gotoFrame()
                }, AnimationItem.prototype.setSpeed = function (e) {
                    this.playSpeed = e, this.updaFrameModifier()
                }, AnimationItem.prototype.setDirection = function (e) {
                    this.playDirection = e < 0 ? -1 : 1, this.updaFrameModifier()
                }, AnimationItem.prototype.setLoop = function (e) {
                    this.loop = e
                }, AnimationItem.prototype.setVolume = function (e, t) {
                    t && this.name !== t || this.audioController.setVolume(e)
                }, AnimationItem.prototype.getVolume = function () {
                    return this.audioController.getVolume()
                }, AnimationItem.prototype.mute = function (e) {
                    e && this.name !== e || this.audioController.mute()
                }, AnimationItem.prototype.unmute = function (e) {
                    e && this.name !== e || this.audioController.unmute()
                }, AnimationItem.prototype.updaFrameModifier = function () {
                    this.frameModifier = this.frameMult * this.playSpeed * this.playDirection, this.audioController.setRate(this.playSpeed * this.playDirection)
                }, AnimationItem.prototype.getPath = function () {
                    return this.path
                }, AnimationItem.prototype.getAssetsPath = function (e) {
                    var t = "";
                    if (e.e) t = e.p; else if (this.assetsPath) {
                        var r = e.p;
                        -1 !== r.indexOf("images/") && (r = r.split("/")[1]), t = this.assetsPath + r
                    } else t = this.path, t += e.u ? e.u : "", t += e.p;
                    return t
                }, AnimationItem.prototype.getAssetData = function (e) {
                    for (var t = 0, r = this.assets.length; t < r;) {
                        if (e === this.assets[t].id) return this.assets[t];
                        t += 1
                    }
                    return null
                }, AnimationItem.prototype.hide = function () {
                    this.renderer.hide()
                }, AnimationItem.prototype.show = function () {
                    this.renderer.show()
                }, AnimationItem.prototype.getDuration = function (e) {
                    return e ? this.totalFrames : this.totalFrames / this.frameRate
                }, AnimationItem.prototype.updateDocumentData = function (e, t, r) {
                    try {
                        this.renderer.getElementByPath(e).updateDocumentData(t, r)
                    } catch (n) {
                    }
                }, AnimationItem.prototype.trigger = function (e) {
                    if (this._cbs && this._cbs[e]) switch (e) {
                        case"enterFrame":
                            this.triggerEvent(e, new BMEnterFrameEvent(e, this.currentFrame, this.totalFrames, this.frameModifier));
                            break;
                        case"drawnFrame":
                            this.drawnFrameEvent.currentTime = this.currentFrame, this.drawnFrameEvent.totalTime = this.totalFrames, this.drawnFrameEvent.direction = this.frameModifier, this.triggerEvent(e, this.drawnFrameEvent);
                            break;
                        case"loopComplete":
                            this.triggerEvent(e, new BMCompleteLoopEvent(e, this.loop, this.playCount, this.frameMult));
                            break;
                        case"complete":
                            this.triggerEvent(e, new BMCompleteEvent(e, this.frameMult));
                            break;
                        case"segmentStart":
                            this.triggerEvent(e, new BMSegmentStartEvent(e, this.firstFrame, this.totalFrames));
                            break;
                        case"destroy":
                            this.triggerEvent(e, new BMDestroyEvent(e, this));
                            break;
                        default:
                            this.triggerEvent(e)
                    }
                    "enterFrame" === e && this.onEnterFrame && this.onEnterFrame.call(this, new BMEnterFrameEvent(e, this.currentFrame, this.totalFrames, this.frameMult)), "loopComplete" === e && this.onLoopComplete && this.onLoopComplete.call(this, new BMCompleteLoopEvent(e, this.loop, this.playCount, this.frameMult)), "complete" === e && this.onComplete && this.onComplete.call(this, new BMCompleteEvent(e, this.frameMult)), "segmentStart" === e && this.onSegmentStart && this.onSegmentStart.call(this, new BMSegmentStartEvent(e, this.firstFrame, this.totalFrames)), "destroy" === e && this.onDestroy && this.onDestroy.call(this, new BMDestroyEvent(e, this))
                }, AnimationItem.prototype.triggerRenderFrameError = function (e) {
                    var t = new BMRenderFrameErrorEvent(e, this.currentFrame);
                    this.triggerEvent("error", t), this.onError && this.onError.call(this, t)
                }, AnimationItem.prototype.triggerConfigError = function (e) {
                    var t = new BMConfigErrorEvent(e, this.currentFrame);
                    this.triggerEvent("error", t), this.onError && this.onError.call(this, t)
                };
                var animationManager = function () {
                    var e = {}, t = [], r = 0, n = 0, i = 0, a = !0, s = !1;

                    function o(e) {
                        for (var r = 0, i = e.target; r < n;) t[r].animation === i && (t.splice(r, 1), r -= 1, n -= 1, i.isPaused || u()), r += 1
                    }

                    function l(e, r) {
                        if (!e) return null;
                        for (var i = 0; i < n;) {
                            if (t[i].elem === e && null !== t[i].elem) return t[i].animation;
                            i += 1
                        }
                        var a = new AnimationItem;
                        return c(a, e), a.setData(e, r), a
                    }

                    function h() {
                        i += 1, d()
                    }

                    function u() {
                        i -= 1
                    }

                    function c(e, r) {
                        e.addEventListener("destroy", o), e.addEventListener("_active", h), e.addEventListener("_idle", u), t.push({
                            elem: r,
                            animation: e
                        }), n += 1
                    }

                    function p(e) {
                        var o, l = e - r;
                        for (o = 0; o < n; o += 1) t[o].animation.advanceTime(l);
                        r = e, i && !s ? window.requestAnimationFrame(p) : a = !0
                    }

                    function f(e) {
                        r = e, window.requestAnimationFrame(p)
                    }

                    function d() {
                        !s && i && a && (window.requestAnimationFrame(f), a = !1)
                    }

                    return e.registerAnimation = l, e.loadAnimation = function (e) {
                        var t = new AnimationItem;
                        return c(t, null), t.setParams(e), t
                    }, e.setSpeed = function (e, r) {
                        var i;
                        for (i = 0; i < n; i += 1) t[i].animation.setSpeed(e, r)
                    }, e.setDirection = function (e, r) {
                        var i;
                        for (i = 0; i < n; i += 1) t[i].animation.setDirection(e, r)
                    }, e.play = function (e) {
                        var r;
                        for (r = 0; r < n; r += 1) t[r].animation.play(e)
                    }, e.pause = function (e) {
                        var r;
                        for (r = 0; r < n; r += 1) t[r].animation.pause(e)
                    }, e.stop = function (e) {
                        var r;
                        for (r = 0; r < n; r += 1) t[r].animation.stop(e)
                    }, e.togglePause = function (e) {
                        var r;
                        for (r = 0; r < n; r += 1) t[r].animation.togglePause(e)
                    }, e.searchAnimations = function (e, t, r) {
                        var n,
                            i = [].concat([].slice.call(document.getElementsByClassName("lottie")), [].slice.call(document.getElementsByClassName("bodymovin"))),
                            a = i.length;
                        for (n = 0; n < a; n += 1) r && i[n].setAttribute("data-bm-type", r), l(i[n], e);
                        if (t && 0 === a) {
                            r || (r = "svg");
                            var s = document.getElementsByTagName("body")[0];
                            s.innerText = "";
                            var o = createTag("div");
                            o.style.width = "100%", o.style.height = "100%", o.setAttribute("data-bm-type", r), s.appendChild(o), l(o, e)
                        }
                    }, e.resize = function () {
                        var e;
                        for (e = 0; e < n; e += 1) t[e].animation.resize()
                    }, e.goToAndStop = function (e, r, i) {
                        var a;
                        for (a = 0; a < n; a += 1) t[a].animation.goToAndStop(e, r, i)
                    }, e.destroy = function (e) {
                        var r;
                        for (r = n - 1; r >= 0; r -= 1) t[r].animation.destroy(e)
                    }, e.freeze = function () {
                        s = !0
                    }, e.unfreeze = function () {
                        s = !1, d()
                    }, e.setVolume = function (e, r) {
                        var i;
                        for (i = 0; i < n; i += 1) t[i].animation.setVolume(e, r)
                    }, e.mute = function (e) {
                        var r;
                        for (r = 0; r < n; r += 1) t[r].animation.mute(e)
                    }, e.unmute = function (e) {
                        var r;
                        for (r = 0; r < n; r += 1) t[r].animation.unmute(e)
                    }, e.getRegisteredAnimations = function () {
                        var e, r = t.length, n = [];
                        for (e = 0; e < r; e += 1) n.push(t[e].animation);
                        return n
                    }, e
                }(), BezierFactory = function () {
                    var e = {
                        getBezierEasing: function (e, r, n, i, a) {
                            var s = a || ("bez_" + e + "_" + r + "_" + n + "_" + i).replace(/\./g, "p");
                            if (t[s]) return t[s];
                            var o = new f([e, r, n, i]);
                            return t[s] = o, o
                        }
                    }, t = {}, r = 4, n = 1e-7, i = 10, a = 11, s = 1 / (a - 1), o = "function" === typeof Float32Array;

                    function l(e, t) {
                        return 1 - 3 * t + 3 * e
                    }

                    function h(e, t) {
                        return 3 * t - 6 * e
                    }

                    function u(e) {
                        return 3 * e
                    }

                    function c(e, t, r) {
                        return ((l(t, r) * e + h(t, r)) * e + u(t)) * e
                    }

                    function p(e, t, r) {
                        return 3 * l(t, r) * e * e + 2 * h(t, r) * e + u(t)
                    }

                    function f(e) {
                        this._p = e, this._mSampleValues = o ? new Float32Array(a) : new Array(a), this._precomputed = !1, this.get = this.get.bind(this)
                    }

                    return f.prototype = {
                        get: function (e) {
                            var t = this._p[0], r = this._p[1], n = this._p[2], i = this._p[3];
                            return this._precomputed || this._precompute(), t === r && n === i ? e : 0 === e ? 0 : 1 === e ? 1 : c(this._getTForX(e), r, i)
                        }, _precompute: function () {
                            var e = this._p[0], t = this._p[1], r = this._p[2], n = this._p[3];
                            this._precomputed = !0, e === t && r === n || this._calcSampleValues()
                        }, _calcSampleValues: function () {
                            for (var e = this._p[0], t = this._p[2], r = 0; r < a; ++r) this._mSampleValues[r] = c(r * s, e, t)
                        }, _getTForX: function (e) {
                            for (var t = this._p[0], o = this._p[2], l = this._mSampleValues, h = 0, u = 1, f = a - 1; u !== f && l[u] <= e; ++u) h += s;
                            var d = h + (e - l[--u]) / (l[u + 1] - l[u]) * s, m = p(d, t, o);
                            return m >= .001 ? function (e, t, n, i) {
                                for (var a = 0; a < r; ++a) {
                                    var s = p(t, n, i);
                                    if (0 === s) return t;
                                    t -= (c(t, n, i) - e) / s
                                }
                                return t
                            }(e, d, t, o) : 0 === m ? d : function (e, t, r, a, s) {
                                var o, l, h = 0;
                                do {
                                    (o = c(l = t + (r - t) / 2, a, s) - e) > 0 ? r = l : t = l
                                } while (Math.abs(o) > n && ++h < i);
                                return l
                            }(e, h, h + s, t, o)
                        }
                    }, e
                }(), pooling = {
                    double: function (e) {
                        return e.concat(createSizedArray(e.length))
                    }
                }, poolFactory = function (e, t, r) {
                    var n = 0, i = e, a = createSizedArray(i);
                    return {
                        newElement: function () {
                            return n ? a[n -= 1] : t()
                        }, release: function (e) {
                            n === i && (a = pooling.double(a), i *= 2), r && r(e), a[n] = e, n += 1
                        }
                    }
                }, bezierLengthPool = poolFactory(8, (function () {
                    return {
                        addedLength: 0,
                        percents: createTypedArray("float32", getDefaultCurveSegments()),
                        lengths: createTypedArray("float32", getDefaultCurveSegments())
                    }
                })), segmentsLengthPool = poolFactory(8, (function () {
                    return {lengths: [], totalLength: 0}
                }), (function (e) {
                    var t, r = e.lengths.length;
                    for (t = 0; t < r; t += 1) bezierLengthPool.release(e.lengths[t]);
                    e.lengths.length = 0
                }));

                function bezFunction() {
                    var e = Math;

                    function t(e, t, r, n, i, a) {
                        var s = e * n + t * i + r * a - i * n - a * e - r * t;
                        return s > -.001 && s < .001
                    }

                    var r = function (e, t, r, n) {
                        var i, a, s, o, l, h, u = getDefaultCurveSegments(), c = 0, p = [], f = [],
                            d = bezierLengthPool.newElement();
                        for (s = r.length, i = 0; i < u; i += 1) {
                            for (l = i / (u - 1), h = 0, a = 0; a < s; a += 1) o = bmPow(1 - l, 3) * e[a] + 3 * bmPow(1 - l, 2) * l * r[a] + 3 * (1 - l) * bmPow(l, 2) * n[a] + bmPow(l, 3) * t[a], p[a] = o, null !== f[a] && (h += bmPow(p[a] - f[a], 2)), f[a] = p[a];
                            h && (c += h = bmSqrt(h)), d.percents[i] = l, d.lengths[i] = c
                        }
                        return d.addedLength = c, d
                    };

                    function n(e) {
                        this.segmentLength = 0, this.points = new Array(e)
                    }

                    function i(e, t) {
                        this.partialLength = e, this.point = t
                    }

                    var a = function () {
                        var e = {};
                        return function (r, a, s, o) {
                            var l = (r[0] + "_" + r[1] + "_" + a[0] + "_" + a[1] + "_" + s[0] + "_" + s[1] + "_" + o[0] + "_" + o[1]).replace(/\./g, "p");
                            if (!e[l]) {
                                var h, u, c, p, f, d, m, y = getDefaultCurveSegments(), g = 0, v = null;
                                2 === r.length && (r[0] !== a[0] || r[1] !== a[1]) && t(r[0], r[1], a[0], a[1], r[0] + s[0], r[1] + s[1]) && t(r[0], r[1], a[0], a[1], a[0] + o[0], a[1] + o[1]) && (y = 2);
                                var x = new n(y);
                                for (c = s.length, h = 0; h < y; h += 1) {
                                    for (m = createSizedArray(c), f = h / (y - 1), d = 0, u = 0; u < c; u += 1) p = bmPow(1 - f, 3) * r[u] + 3 * bmPow(1 - f, 2) * f * (r[u] + s[u]) + 3 * (1 - f) * bmPow(f, 2) * (a[u] + o[u]) + bmPow(f, 3) * a[u], m[u] = p, null !== v && (d += bmPow(m[u] - v[u], 2));
                                    g += d = bmSqrt(d), x.points[h] = new i(d, m), v = m
                                }
                                x.segmentLength = g, e[l] = x
                            }
                            return e[l]
                        }
                    }();

                    function s(e, t) {
                        var r = t.percents, n = t.lengths, i = r.length, a = bmFloor((i - 1) * e),
                            s = e * t.addedLength, o = 0;
                        if (a === i - 1 || 0 === a || s === n[a]) return r[a];
                        for (var l = n[a] > s ? -1 : 1, h = !0; h;) if (n[a] <= s && n[a + 1] > s ? (o = (s - n[a]) / (n[a + 1] - n[a]), h = !1) : a += l, a < 0 || a >= i - 1) {
                            if (a === i - 1) return r[a];
                            h = !1
                        }
                        return r[a] + (r[a + 1] - r[a]) * o
                    }

                    var o = createTypedArray("float32", 8);
                    return {
                        getSegmentsLength: function (e) {
                            var t, n = segmentsLengthPool.newElement(), i = e.c, a = e.v, s = e.o, o = e.i,
                                l = e._length, h = n.lengths, u = 0;
                            for (t = 0; t < l - 1; t += 1) h[t] = r(a[t], a[t + 1], s[t], o[t + 1]), u += h[t].addedLength;
                            return i && l && (h[t] = r(a[t], a[0], s[t], o[0]), u += h[t].addedLength), n.totalLength = u, n
                        }, getNewSegment: function (t, r, n, i, a, l, h) {
                            a < 0 ? a = 0 : a > 1 && (a = 1);
                            var u, c = s(a, h), p = s(l = l > 1 ? 1 : l, h), f = t.length, d = 1 - c, m = 1 - p,
                                y = d * d * d, g = c * d * d * 3, v = c * c * d * 3, x = c * c * c, b = d * d * m,
                                k = c * d * m + d * c * m + d * d * p, S = c * c * m + d * c * p + c * d * p,
                                E = c * c * p, P = d * m * m, w = c * m * m + d * p * m + d * m * p,
                                _ = c * p * m + d * p * p + c * m * p, C = c * p * p, A = m * m * m,
                                D = p * m * m + m * p * m + m * m * p, T = p * p * m + m * p * p + p * m * p,
                                M = p * p * p;
                            for (u = 0; u < f; u += 1) o[4 * u] = e.round(1e3 * (y * t[u] + g * n[u] + v * i[u] + x * r[u])) / 1e3, o[4 * u + 1] = e.round(1e3 * (b * t[u] + k * n[u] + S * i[u] + E * r[u])) / 1e3, o[4 * u + 2] = e.round(1e3 * (P * t[u] + w * n[u] + _ * i[u] + C * r[u])) / 1e3, o[4 * u + 3] = e.round(1e3 * (A * t[u] + D * n[u] + T * i[u] + M * r[u])) / 1e3;
                            return o
                        }, getPointInSegment: function (t, r, n, i, a, o) {
                            var l = s(a, o), h = 1 - l;
                            return [e.round(1e3 * (h * h * h * t[0] + (l * h * h + h * l * h + h * h * l) * n[0] + (l * l * h + h * l * l + l * h * l) * i[0] + l * l * l * r[0])) / 1e3, e.round(1e3 * (h * h * h * t[1] + (l * h * h + h * l * h + h * h * l) * n[1] + (l * l * h + h * l * l + l * h * l) * i[1] + l * l * l * r[1])) / 1e3]
                        }, buildBezierData: a, pointOnLine2D: t, pointOnLine3D: function (r, n, i, a, s, o, l, h, u) {
                            if (0 === i && 0 === o && 0 === u) return t(r, n, a, s, l, h);
                            var c, p = e.sqrt(e.pow(a - r, 2) + e.pow(s - n, 2) + e.pow(o - i, 2)),
                                f = e.sqrt(e.pow(l - r, 2) + e.pow(h - n, 2) + e.pow(u - i, 2)),
                                d = e.sqrt(e.pow(l - a, 2) + e.pow(h - s, 2) + e.pow(u - o, 2));
                            return (c = p > f ? p > d ? p - f - d : d - f - p : d > f ? d - f - p : f - p - d) > -1e-4 && c < 1e-4
                        }
                    }
                }

                var bez = bezFunction(), PropertyFactory = function () {
                    var e = initialDefaultFrame, t = Math.abs;

                    function r(e, t) {
                        var r, i = this.offsetTime;
                        "multidimensional" === this.propType && (r = createTypedArray("float32", this.pv.length));
                        for (var a, s, o, l, h, u, c, p, f, d = t.lastIndex, m = d, y = this.keyframes.length - 1, g = !0; g;) {
                            if (a = this.keyframes[m], s = this.keyframes[m + 1], m === y - 1 && e >= s.t - i) {
                                a.h && (a = s), d = 0;
                                break
                            }
                            if (s.t - i > e) {
                                d = m;
                                break
                            }
                            m < y - 1 ? m += 1 : (d = 0, g = !1)
                        }
                        o = this.keyframesMetadata[m] || {};
                        var v, x = s.t - i, b = a.t - i;
                        if (a.to) {
                            o.bezierData || (o.bezierData = bez.buildBezierData(a.s, s.s || a.e, a.to, a.ti));
                            var k = o.bezierData;
                            if (e >= x || e < b) {
                                var S = e >= x ? k.points.length - 1 : 0;
                                for (h = k.points[S].point.length, l = 0; l < h; l += 1) r[l] = k.points[S].point[l]
                            } else {
                                o.__fnct ? f = o.__fnct : (f = BezierFactory.getBezierEasing(a.o.x, a.o.y, a.i.x, a.i.y, a.n).get, o.__fnct = f), u = f((e - b) / (x - b));
                                var E, P = k.segmentLength * u,
                                    w = t.lastFrame < e && t._lastKeyframeIndex === m ? t._lastAddedLength : 0;
                                for (p = t.lastFrame < e && t._lastKeyframeIndex === m ? t._lastPoint : 0, g = !0, c = k.points.length; g;) {
                                    if (w += k.points[p].partialLength, 0 === P || 0 === u || p === k.points.length - 1) {
                                        for (h = k.points[p].point.length, l = 0; l < h; l += 1) r[l] = k.points[p].point[l];
                                        break
                                    }
                                    if (P >= w && P < w + k.points[p + 1].partialLength) {
                                        for (E = (P - w) / k.points[p + 1].partialLength, h = k.points[p].point.length, l = 0; l < h; l += 1) r[l] = k.points[p].point[l] + (k.points[p + 1].point[l] - k.points[p].point[l]) * E;
                                        break
                                    }
                                    p < c - 1 ? p += 1 : g = !1
                                }
                                t._lastPoint = p, t._lastAddedLength = w - k.points[p].partialLength, t._lastKeyframeIndex = m
                            }
                        } else {
                            var _, C, A, D, T;
                            if (y = a.s.length, v = s.s || a.e, this.sh && 1 !== a.h) e >= x ? (r[0] = v[0], r[1] = v[1], r[2] = v[2]) : e <= b ? (r[0] = a.s[0], r[1] = a.s[1], r[2] = a.s[2]) : function (e, t) {
                                var r = t[0], n = t[1], i = t[2], a = t[3],
                                    s = Math.atan2(2 * n * a - 2 * r * i, 1 - 2 * n * n - 2 * i * i),
                                    o = Math.asin(2 * r * n + 2 * i * a),
                                    l = Math.atan2(2 * r * a - 2 * n * i, 1 - 2 * r * r - 2 * i * i);
                                e[0] = s / degToRads, e[1] = o / degToRads, e[2] = l / degToRads
                            }(r, function (e, t, r) {
                                var n, i, a, s, o, l = [], h = e[0], u = e[1], c = e[2], p = e[3], f = t[0], d = t[1],
                                    m = t[2], y = t[3];
                                return (i = h * f + u * d + c * m + p * y) < 0 && (i = -i, f = -f, d = -d, m = -m, y = -y), 1 - i > 1e-6 ? (n = Math.acos(i), a = Math.sin(n), s = Math.sin((1 - r) * n) / a, o = Math.sin(r * n) / a) : (s = 1 - r, o = r), l[0] = s * h + o * f, l[1] = s * u + o * d, l[2] = s * c + o * m, l[3] = s * p + o * y, l
                            }(n(a.s), n(v), (e - b) / (x - b))); else for (m = 0; m < y; m += 1) 1 !== a.h && (e >= x ? u = 1 : e < b ? u = 0 : (a.o.x.constructor === Array ? (o.__fnct || (o.__fnct = []), o.__fnct[m] ? f = o.__fnct[m] : (_ = void 0 === a.o.x[m] ? a.o.x[0] : a.o.x[m], C = void 0 === a.o.y[m] ? a.o.y[0] : a.o.y[m], A = void 0 === a.i.x[m] ? a.i.x[0] : a.i.x[m], D = void 0 === a.i.y[m] ? a.i.y[0] : a.i.y[m], f = BezierFactory.getBezierEasing(_, C, A, D).get, o.__fnct[m] = f)) : o.__fnct ? f = o.__fnct : (_ = a.o.x, C = a.o.y, A = a.i.x, D = a.i.y, f = BezierFactory.getBezierEasing(_, C, A, D).get, a.keyframeMetadata = f), u = f((e - b) / (x - b)))), v = s.s || a.e, T = 1 === a.h ? a.s[m] : a.s[m] + (v[m] - a.s[m]) * u, "multidimensional" === this.propType ? r[m] = T : r = T
                        }
                        return t.lastIndex = d, r
                    }

                    function n(e) {
                        var t = e[0] * degToRads, r = e[1] * degToRads, n = e[2] * degToRads, i = Math.cos(t / 2),
                            a = Math.cos(r / 2), s = Math.cos(n / 2), o = Math.sin(t / 2), l = Math.sin(r / 2),
                            h = Math.sin(n / 2);
                        return [o * l * s + i * a * h, o * a * s + i * l * h, i * l * s - o * a * h, i * a * s - o * l * h]
                    }

                    function i() {
                        var t = this.comp.renderedFrame - this.offsetTime, r = this.keyframes[0].t - this.offsetTime,
                            n = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;
                        if (!(t === this._caching.lastFrame || this._caching.lastFrame !== e && (this._caching.lastFrame >= n && t >= n || this._caching.lastFrame < r && t < r))) {
                            this._caching.lastFrame >= t && (this._caching._lastKeyframeIndex = -1, this._caching.lastIndex = 0);
                            var i = this.interpolateValue(t, this._caching);
                            this.pv = i
                        }
                        return this._caching.lastFrame = t, this.pv
                    }

                    function a(e) {
                        var r;
                        if ("unidimensional" === this.propType) r = e * this.mult, t(this.v - r) > 1e-5 && (this.v = r, this._mdf = !0); else for (var n = 0, i = this.v.length; n < i;) r = e[n] * this.mult, t(this.v[n] - r) > 1e-5 && (this.v[n] = r, this._mdf = !0), n += 1
                    }

                    function s() {
                        if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length) if (this.lock) this.setVValue(this.pv); else {
                            var e;
                            this.lock = !0, this._mdf = this._isFirstFrame;
                            var t = this.effectsSequence.length, r = this.kf ? this.pv : this.data.k;
                            for (e = 0; e < t; e += 1) r = this.effectsSequence[e](r);
                            this.setVValue(r), this._isFirstFrame = !1, this.lock = !1, this.frameId = this.elem.globalData.frameId
                        }
                    }

                    function o(e) {
                        this.effectsSequence.push(e), this.container.addDynamicProperty(this)
                    }

                    function l(e, t, r, n) {
                        this.propType = "unidimensional", this.mult = r || 1, this.data = t, this.v = r ? t.k * r : t.k, this.pv = t.k, this._mdf = !1, this.elem = e, this.container = n, this.comp = e.comp, this.k = !1, this.kf = !1, this.vel = 0, this.effectsSequence = [], this._isFirstFrame = !0, this.getValue = s, this.setVValue = a, this.addEffect = o
                    }

                    function h(e, t, r, n) {
                        var i;
                        this.propType = "multidimensional", this.mult = r || 1, this.data = t, this._mdf = !1, this.elem = e, this.container = n, this.comp = e.comp, this.k = !1, this.kf = !1, this.frameId = -1;
                        var l = t.k.length;
                        for (this.v = createTypedArray("float32", l), this.pv = createTypedArray("float32", l), this.vel = createTypedArray("float32", l), i = 0; i < l; i += 1) this.v[i] = t.k[i] * this.mult, this.pv[i] = t.k[i];
                        this._isFirstFrame = !0, this.effectsSequence = [], this.getValue = s, this.setVValue = a, this.addEffect = o
                    }

                    function u(t, n, l, h) {
                        this.propType = "unidimensional", this.keyframes = n.k, this.keyframesMetadata = [], this.offsetTime = t.data.st, this.frameId = -1, this._caching = {
                            lastFrame: e,
                            lastIndex: 0,
                            value: 0,
                            _lastKeyframeIndex: -1
                        }, this.k = !0, this.kf = !0, this.data = n, this.mult = l || 1, this.elem = t, this.container = h, this.comp = t.comp, this.v = e, this.pv = e, this._isFirstFrame = !0, this.getValue = s, this.setVValue = a, this.interpolateValue = r, this.effectsSequence = [i.bind(this)], this.addEffect = o
                    }

                    function c(t, n, l, h) {
                        var u;
                        this.propType = "multidimensional";
                        var c, p, f, d, m = n.k.length;
                        for (u = 0; u < m - 1; u += 1) n.k[u].to && n.k[u].s && n.k[u + 1] && n.k[u + 1].s && (c = n.k[u].s, p = n.k[u + 1].s, f = n.k[u].to, d = n.k[u].ti, (2 === c.length && (c[0] !== p[0] || c[1] !== p[1]) && bez.pointOnLine2D(c[0], c[1], p[0], p[1], c[0] + f[0], c[1] + f[1]) && bez.pointOnLine2D(c[0], c[1], p[0], p[1], p[0] + d[0], p[1] + d[1]) || 3 === c.length && (c[0] !== p[0] || c[1] !== p[1] || c[2] !== p[2]) && bez.pointOnLine3D(c[0], c[1], c[2], p[0], p[1], p[2], c[0] + f[0], c[1] + f[1], c[2] + f[2]) && bez.pointOnLine3D(c[0], c[1], c[2], p[0], p[1], p[2], p[0] + d[0], p[1] + d[1], p[2] + d[2])) && (n.k[u].to = null, n.k[u].ti = null), c[0] === p[0] && c[1] === p[1] && 0 === f[0] && 0 === f[1] && 0 === d[0] && 0 === d[1] && (2 === c.length || c[2] === p[2] && 0 === f[2] && 0 === d[2]) && (n.k[u].to = null, n.k[u].ti = null));
                        this.effectsSequence = [i.bind(this)], this.data = n, this.keyframes = n.k, this.keyframesMetadata = [], this.offsetTime = t.data.st, this.k = !0, this.kf = !0, this._isFirstFrame = !0, this.mult = l || 1, this.elem = t, this.container = h, this.comp = t.comp, this.getValue = s, this.setVValue = a, this.interpolateValue = r, this.frameId = -1;
                        var y = n.k[0].s.length;
                        for (this.v = createTypedArray("float32", y), this.pv = createTypedArray("float32", y), u = 0; u < y; u += 1) this.v[u] = e, this.pv[u] = e;
                        this._caching = {
                            lastFrame: e,
                            lastIndex: 0,
                            value: createTypedArray("float32", y)
                        }, this.addEffect = o
                    }

                    return {
                        getProp: function (e, t, r, n, i) {
                            var a;
                            if (t.k.length) if ("number" === typeof t.k[0]) a = new h(e, t, n, i); else switch (r) {
                                case 0:
                                    a = new u(e, t, n, i);
                                    break;
                                case 1:
                                    a = new c(e, t, n, i)
                            } else a = new l(e, t, n, i);
                            return a.effectsSequence.length && i.addDynamicProperty(a), a
                        }
                    }
                }();

                function DynamicPropertyContainer() {
                }

                DynamicPropertyContainer.prototype = {
                    addDynamicProperty: function (e) {
                        -1 === this.dynamicProperties.indexOf(e) && (this.dynamicProperties.push(e), this.container.addDynamicProperty(this), this._isAnimated = !0)
                    }, iterateDynamicProperties: function () {
                        var e;
                        this._mdf = !1;
                        var t = this.dynamicProperties.length;
                        for (e = 0; e < t; e += 1) this.dynamicProperties[e].getValue(), this.dynamicProperties[e]._mdf && (this._mdf = !0)
                    }, initDynamicPropertyContainer: function (e) {
                        this.container = e, this.dynamicProperties = [], this._mdf = !1, this._isAnimated = !1
                    }
                };
                var pointPool = poolFactory(8, (function () {
                    return createTypedArray("float32", 2)
                }));

                function ShapePath() {
                    this.c = !1, this._length = 0, this._maxLength = 8, this.v = createSizedArray(this._maxLength), this.o = createSizedArray(this._maxLength), this.i = createSizedArray(this._maxLength)
                }

                ShapePath.prototype.setPathData = function (e, t) {
                    this.c = e, this.setLength(t);
                    for (var r = 0; r < t;) this.v[r] = pointPool.newElement(), this.o[r] = pointPool.newElement(), this.i[r] = pointPool.newElement(), r += 1
                }, ShapePath.prototype.setLength = function (e) {
                    for (; this._maxLength < e;) this.doubleArrayLength();
                    this._length = e
                }, ShapePath.prototype.doubleArrayLength = function () {
                    this.v = this.v.concat(createSizedArray(this._maxLength)), this.i = this.i.concat(createSizedArray(this._maxLength)), this.o = this.o.concat(createSizedArray(this._maxLength)), this._maxLength *= 2
                }, ShapePath.prototype.setXYAt = function (e, t, r, n, i) {
                    var a;
                    switch (this._length = Math.max(this._length, n + 1), this._length >= this._maxLength && this.doubleArrayLength(), r) {
                        case"v":
                            a = this.v;
                            break;
                        case"i":
                            a = this.i;
                            break;
                        case"o":
                            a = this.o;
                            break;
                        default:
                            a = []
                    }
                    (!a[n] || a[n] && !i) && (a[n] = pointPool.newElement()), a[n][0] = e, a[n][1] = t
                }, ShapePath.prototype.setTripleAt = function (e, t, r, n, i, a, s, o) {
                    this.setXYAt(e, t, "v", s, o), this.setXYAt(r, n, "o", s, o), this.setXYAt(i, a, "i", s, o)
                }, ShapePath.prototype.reverse = function () {
                    var e = new ShapePath;
                    e.setPathData(this.c, this._length);
                    var t = this.v, r = this.o, n = this.i, i = 0;
                    this.c && (e.setTripleAt(t[0][0], t[0][1], n[0][0], n[0][1], r[0][0], r[0][1], 0, !1), i = 1);
                    var a, s = this._length - 1, o = this._length;
                    for (a = i; a < o; a += 1) e.setTripleAt(t[s][0], t[s][1], n[s][0], n[s][1], r[s][0], r[s][1], a, !1), s -= 1;
                    return e
                }, ShapePath.prototype.length = function () {
                    return this._length
                };
                var shapePool = function () {
                    var e = poolFactory(4, (function () {
                        return new ShapePath
                    }), (function (e) {
                        var t, r = e._length;
                        for (t = 0; t < r; t += 1) pointPool.release(e.v[t]), pointPool.release(e.i[t]), pointPool.release(e.o[t]), e.v[t] = null, e.i[t] = null, e.o[t] = null;
                        e._length = 0, e.c = !1
                    }));
                    return e.clone = function (t) {
                        var r, n = e.newElement(), i = void 0 === t._length ? t.v.length : t._length;
                        for (n.setLength(i), n.c = t.c, r = 0; r < i; r += 1) n.setTripleAt(t.v[r][0], t.v[r][1], t.o[r][0], t.o[r][1], t.i[r][0], t.i[r][1], r);
                        return n
                    }, e
                }();

                function ShapeCollection() {
                    this._length = 0, this._maxLength = 4, this.shapes = createSizedArray(this._maxLength)
                }

                ShapeCollection.prototype.addShape = function (e) {
                    this._length === this._maxLength && (this.shapes = this.shapes.concat(createSizedArray(this._maxLength)), this._maxLength *= 2), this.shapes[this._length] = e, this._length += 1
                }, ShapeCollection.prototype.releaseShapes = function () {
                    var e;
                    for (e = 0; e < this._length; e += 1) shapePool.release(this.shapes[e]);
                    this._length = 0
                };
                var shapeCollectionPool = function () {
                    var e = {
                        newShapeCollection: function () {
                            return t ? n[t -= 1] : new ShapeCollection
                        }, release: function (e) {
                            var i, a = e._length;
                            for (i = 0; i < a; i += 1) shapePool.release(e.shapes[i]);
                            e._length = 0, t === r && (n = pooling.double(n), r *= 2), n[t] = e, t += 1
                        }
                    }, t = 0, r = 4, n = createSizedArray(r);
                    return e
                }(), ShapePropertyFactory = function () {
                    var e = -999999;

                    function t(e, t, r) {
                        var n, i, a, s, o, l, h, u, c, p = r.lastIndex, f = this.keyframes;
                        if (e < f[0].t - this.offsetTime) n = f[0].s[0], a = !0, p = 0; else if (e >= f[f.length - 1].t - this.offsetTime) n = f[f.length - 1].s ? f[f.length - 1].s[0] : f[f.length - 2].e[0], a = !0; else {
                            for (var d, m, y, g = p, v = f.length - 1, x = !0; x && (d = f[g], !((m = f[g + 1]).t - this.offsetTime > e));) g < v - 1 ? g += 1 : x = !1;
                            if (y = this.keyframesMetadata[g] || {}, p = g, !(a = 1 === d.h)) {
                                if (e >= m.t - this.offsetTime) u = 1; else if (e < d.t - this.offsetTime) u = 0; else {
                                    var b;
                                    y.__fnct ? b = y.__fnct : (b = BezierFactory.getBezierEasing(d.o.x, d.o.y, d.i.x, d.i.y).get, y.__fnct = b), u = b((e - (d.t - this.offsetTime)) / (m.t - this.offsetTime - (d.t - this.offsetTime)))
                                }
                                i = m.s ? m.s[0] : d.e[0]
                            }
                            n = d.s[0]
                        }
                        for (l = t._length, h = n.i[0].length, r.lastIndex = p, s = 0; s < l; s += 1) for (o = 0; o < h; o += 1) c = a ? n.i[s][o] : n.i[s][o] + (i.i[s][o] - n.i[s][o]) * u, t.i[s][o] = c, c = a ? n.o[s][o] : n.o[s][o] + (i.o[s][o] - n.o[s][o]) * u, t.o[s][o] = c, c = a ? n.v[s][o] : n.v[s][o] + (i.v[s][o] - n.v[s][o]) * u, t.v[s][o] = c
                    }

                    function r() {
                        var t = this.comp.renderedFrame - this.offsetTime, r = this.keyframes[0].t - this.offsetTime,
                            n = this.keyframes[this.keyframes.length - 1].t - this.offsetTime,
                            i = this._caching.lastFrame;
                        return i !== e && (i < r && t < r || i > n && t > n) || (this._caching.lastIndex = i < t ? this._caching.lastIndex : 0, this.interpolateShape(t, this.pv, this._caching)), this._caching.lastFrame = t, this.pv
                    }

                    function n() {
                        this.paths = this.localShapeCollection
                    }

                    function i(e) {
                        (function (e, t) {
                            if (e._length !== t._length || e.c !== t.c) return !1;
                            var r, n = e._length;
                            for (r = 0; r < n; r += 1) if (e.v[r][0] !== t.v[r][0] || e.v[r][1] !== t.v[r][1] || e.o[r][0] !== t.o[r][0] || e.o[r][1] !== t.o[r][1] || e.i[r][0] !== t.i[r][0] || e.i[r][1] !== t.i[r][1]) return !1;
                            return !0
                        })(this.v, e) || (this.v = shapePool.clone(e), this.localShapeCollection.releaseShapes(), this.localShapeCollection.addShape(this.v), this._mdf = !0, this.paths = this.localShapeCollection)
                    }

                    function a() {
                        if (this.elem.globalData.frameId !== this.frameId) if (this.effectsSequence.length) if (this.lock) this.setVValue(this.pv); else {
                            var e, t;
                            this.lock = !0, this._mdf = !1, e = this.kf ? this.pv : this.data.ks ? this.data.ks.k : this.data.pt.k;
                            var r = this.effectsSequence.length;
                            for (t = 0; t < r; t += 1) e = this.effectsSequence[t](e);
                            this.setVValue(e), this.lock = !1, this.frameId = this.elem.globalData.frameId
                        } else this._mdf = !1
                    }

                    function s(e, t, r) {
                        this.propType = "shape", this.comp = e.comp, this.container = e, this.elem = e, this.data = t, this.k = !1, this.kf = !1, this._mdf = !1;
                        var i = 3 === r ? t.pt.k : t.ks.k;
                        this.v = shapePool.clone(i), this.pv = shapePool.clone(this.v), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.reset = n, this.effectsSequence = []
                    }

                    function o(e) {
                        this.effectsSequence.push(e), this.container.addDynamicProperty(this)
                    }

                    function l(t, i, a) {
                        this.propType = "shape", this.comp = t.comp, this.elem = t, this.container = t, this.offsetTime = t.data.st, this.keyframes = 3 === a ? i.pt.k : i.ks.k, this.keyframesMetadata = [], this.k = !0, this.kf = !0;
                        var s = this.keyframes[0].s[0].i.length;
                        this.v = shapePool.newElement(), this.v.setPathData(this.keyframes[0].s[0].c, s), this.pv = shapePool.clone(this.v), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.lastFrame = e, this.reset = n, this._caching = {
                            lastFrame: e,
                            lastIndex: 0
                        }, this.effectsSequence = [r.bind(this)]
                    }

                    s.prototype.interpolateShape = t, s.prototype.getValue = a, s.prototype.setVValue = i, s.prototype.addEffect = o, l.prototype.getValue = a, l.prototype.interpolateShape = t, l.prototype.setVValue = i, l.prototype.addEffect = o;
                    var h = function () {
                        var e = roundCorner;

                        function t(e, t) {
                            this.v = shapePool.newElement(), this.v.setPathData(!0, 4), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.localShapeCollection.addShape(this.v), this.d = t.d, this.elem = e, this.comp = e.comp, this.frameId = -1, this.initDynamicPropertyContainer(e), this.p = PropertyFactory.getProp(e, t.p, 1, 0, this), this.s = PropertyFactory.getProp(e, t.s, 1, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertEllToPath())
                        }

                        return t.prototype = {
                            reset: n, getValue: function () {
                                this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertEllToPath())
                            }, convertEllToPath: function () {
                                var t = this.p.v[0], r = this.p.v[1], n = this.s.v[0] / 2, i = this.s.v[1] / 2,
                                    a = 3 !== this.d, s = this.v;
                                s.v[0][0] = t, s.v[0][1] = r - i, s.v[1][0] = a ? t + n : t - n, s.v[1][1] = r, s.v[2][0] = t, s.v[2][1] = r + i, s.v[3][0] = a ? t - n : t + n, s.v[3][1] = r, s.i[0][0] = a ? t - n * e : t + n * e, s.i[0][1] = r - i, s.i[1][0] = a ? t + n : t - n, s.i[1][1] = r - i * e, s.i[2][0] = a ? t + n * e : t - n * e, s.i[2][1] = r + i, s.i[3][0] = a ? t - n : t + n, s.i[3][1] = r + i * e, s.o[0][0] = a ? t + n * e : t - n * e, s.o[0][1] = r - i, s.o[1][0] = a ? t + n : t - n, s.o[1][1] = r + i * e, s.o[2][0] = a ? t - n * e : t + n * e, s.o[2][1] = r + i, s.o[3][0] = a ? t - n : t + n, s.o[3][1] = r - i * e
                            }
                        }, extendPrototype([DynamicPropertyContainer], t), t
                    }(), u = function () {
                        function e(e, t) {
                            this.v = shapePool.newElement(), this.v.setPathData(!0, 0), this.elem = e, this.comp = e.comp, this.data = t, this.frameId = -1, this.d = t.d, this.initDynamicPropertyContainer(e), 1 === t.sy ? (this.ir = PropertyFactory.getProp(e, t.ir, 0, 0, this), this.is = PropertyFactory.getProp(e, t.is, 0, .01, this), this.convertToPath = this.convertStarToPath) : this.convertToPath = this.convertPolygonToPath, this.pt = PropertyFactory.getProp(e, t.pt, 0, 0, this), this.p = PropertyFactory.getProp(e, t.p, 1, 0, this), this.r = PropertyFactory.getProp(e, t.r, 0, degToRads, this), this.or = PropertyFactory.getProp(e, t.or, 0, 0, this), this.os = PropertyFactory.getProp(e, t.os, 0, .01, this), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertToPath())
                        }

                        return e.prototype = {
                            reset: n, getValue: function () {
                                this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertToPath())
                            }, convertStarToPath: function () {
                                var e, t, r, n, i = 2 * Math.floor(this.pt.v), a = 2 * Math.PI / i, s = !0,
                                    o = this.or.v, l = this.ir.v, h = this.os.v, u = this.is.v,
                                    c = 2 * Math.PI * o / (2 * i), p = 2 * Math.PI * l / (2 * i), f = -Math.PI / 2;
                                f += this.r.v;
                                var d = 3 === this.data.d ? -1 : 1;
                                for (this.v._length = 0, e = 0; e < i; e += 1) {
                                    r = s ? h : u, n = s ? c : p;
                                    var m = (t = s ? o : l) * Math.cos(f), y = t * Math.sin(f),
                                        g = 0 === m && 0 === y ? 0 : y / Math.sqrt(m * m + y * y),
                                        v = 0 === m && 0 === y ? 0 : -m / Math.sqrt(m * m + y * y);
                                    m += +this.p.v[0], y += +this.p.v[1], this.v.setTripleAt(m, y, m - g * n * r * d, y - v * n * r * d, m + g * n * r * d, y + v * n * r * d, e, !0), s = !s, f += a * d
                                }
                            }, convertPolygonToPath: function () {
                                var e, t = Math.floor(this.pt.v), r = 2 * Math.PI / t, n = this.or.v, i = this.os.v,
                                    a = 2 * Math.PI * n / (4 * t), s = .5 * -Math.PI, o = 3 === this.data.d ? -1 : 1;
                                for (s += this.r.v, this.v._length = 0, e = 0; e < t; e += 1) {
                                    var l = n * Math.cos(s), h = n * Math.sin(s),
                                        u = 0 === l && 0 === h ? 0 : h / Math.sqrt(l * l + h * h),
                                        c = 0 === l && 0 === h ? 0 : -l / Math.sqrt(l * l + h * h);
                                    l += +this.p.v[0], h += +this.p.v[1], this.v.setTripleAt(l, h, l - u * a * i * o, h - c * a * i * o, l + u * a * i * o, h + c * a * i * o, e, !0), s += r * o
                                }
                                this.paths.length = 0, this.paths[0] = this.v
                            }
                        }, extendPrototype([DynamicPropertyContainer], e), e
                    }(), c = function () {
                        function e(e, t) {
                            this.v = shapePool.newElement(), this.v.c = !0, this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.elem = e, this.comp = e.comp, this.frameId = -1, this.d = t.d, this.initDynamicPropertyContainer(e), this.p = PropertyFactory.getProp(e, t.p, 1, 0, this), this.s = PropertyFactory.getProp(e, t.s, 1, 0, this), this.r = PropertyFactory.getProp(e, t.r, 0, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertRectToPath())
                        }

                        return e.prototype = {
                            convertRectToPath: function () {
                                var e = this.p.v[0], t = this.p.v[1], r = this.s.v[0] / 2, n = this.s.v[1] / 2,
                                    i = bmMin(r, n, this.r.v), a = i * (1 - roundCorner);
                                this.v._length = 0, 2 === this.d || 1 === this.d ? (this.v.setTripleAt(e + r, t - n + i, e + r, t - n + i, e + r, t - n + a, 0, !0), this.v.setTripleAt(e + r, t + n - i, e + r, t + n - a, e + r, t + n - i, 1, !0), 0 !== i ? (this.v.setTripleAt(e + r - i, t + n, e + r - i, t + n, e + r - a, t + n, 2, !0), this.v.setTripleAt(e - r + i, t + n, e - r + a, t + n, e - r + i, t + n, 3, !0), this.v.setTripleAt(e - r, t + n - i, e - r, t + n - i, e - r, t + n - a, 4, !0), this.v.setTripleAt(e - r, t - n + i, e - r, t - n + a, e - r, t - n + i, 5, !0), this.v.setTripleAt(e - r + i, t - n, e - r + i, t - n, e - r + a, t - n, 6, !0), this.v.setTripleAt(e + r - i, t - n, e + r - a, t - n, e + r - i, t - n, 7, !0)) : (this.v.setTripleAt(e - r, t + n, e - r + a, t + n, e - r, t + n, 2), this.v.setTripleAt(e - r, t - n, e - r, t - n + a, e - r, t - n, 3))) : (this.v.setTripleAt(e + r, t - n + i, e + r, t - n + a, e + r, t - n + i, 0, !0), 0 !== i ? (this.v.setTripleAt(e + r - i, t - n, e + r - i, t - n, e + r - a, t - n, 1, !0), this.v.setTripleAt(e - r + i, t - n, e - r + a, t - n, e - r + i, t - n, 2, !0), this.v.setTripleAt(e - r, t - n + i, e - r, t - n + i, e - r, t - n + a, 3, !0), this.v.setTripleAt(e - r, t + n - i, e - r, t + n - a, e - r, t + n - i, 4, !0), this.v.setTripleAt(e - r + i, t + n, e - r + i, t + n, e - r + a, t + n, 5, !0), this.v.setTripleAt(e + r - i, t + n, e + r - a, t + n, e + r - i, t + n, 6, !0), this.v.setTripleAt(e + r, t + n - i, e + r, t + n - i, e + r, t + n - a, 7, !0)) : (this.v.setTripleAt(e - r, t - n, e - r + a, t - n, e - r, t - n, 1, !0), this.v.setTripleAt(e - r, t + n, e - r, t + n - a, e - r, t + n, 2, !0), this.v.setTripleAt(e + r, t + n, e + r - a, t + n, e + r, t + n, 3, !0)))
                            }, getValue: function () {
                                this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertRectToPath())
                            }, reset: n
                        }, extendPrototype([DynamicPropertyContainer], e), e
                    }(), p = {
                        getShapeProp: function (e, t, r) {
                            var n;
                            return 3 === r || 4 === r ? n = (3 === r ? t.pt : t.ks).k.length ? new l(e, t, r) : new s(e, t, r) : 5 === r ? n = new c(e, t) : 6 === r ? n = new h(e, t) : 7 === r && (n = new u(e, t)), n.k && e.addDynamicProperty(n), n
                        }, getConstructorFunction: function () {
                            return s
                        }, getKeyframedConstructorFunction: function () {
                            return l
                        }
                    };
                    return p
                }(), Matrix = function () {
                    var e = Math.cos, t = Math.sin, r = Math.tan, n = Math.round;

                    function i() {
                        return this.props[0] = 1, this.props[1] = 0, this.props[2] = 0, this.props[3] = 0, this.props[4] = 0, this.props[5] = 1, this.props[6] = 0, this.props[7] = 0, this.props[8] = 0, this.props[9] = 0, this.props[10] = 1, this.props[11] = 0, this.props[12] = 0, this.props[13] = 0, this.props[14] = 0, this.props[15] = 1, this
                    }

                    function a(r) {
                        if (0 === r) return this;
                        var n = e(r), i = t(r);
                        return this._t(n, -i, 0, 0, i, n, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                    }

                    function s(r) {
                        if (0 === r) return this;
                        var n = e(r), i = t(r);
                        return this._t(1, 0, 0, 0, 0, n, -i, 0, 0, i, n, 0, 0, 0, 0, 1)
                    }

                    function o(r) {
                        if (0 === r) return this;
                        var n = e(r), i = t(r);
                        return this._t(n, 0, i, 0, 0, 1, 0, 0, -i, 0, n, 0, 0, 0, 0, 1)
                    }

                    function l(r) {
                        if (0 === r) return this;
                        var n = e(r), i = t(r);
                        return this._t(n, -i, 0, 0, i, n, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                    }

                    function h(e, t) {
                        return this._t(1, t, e, 1, 0, 0)
                    }

                    function u(e, t) {
                        return this.shear(r(e), r(t))
                    }

                    function c(n, i) {
                        var a = e(i), s = t(i);
                        return this._t(a, s, 0, 0, -s, a, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(1, 0, 0, 0, r(n), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(a, -s, 0, 0, s, a, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                    }

                    function p(e, t, r) {
                        return r || 0 === r || (r = 1), 1 === e && 1 === t && 1 === r ? this : this._t(e, 0, 0, 0, 0, t, 0, 0, 0, 0, r, 0, 0, 0, 0, 1)
                    }

                    function f(e, t, r, n, i, a, s, o, l, h, u, c, p, f, d, m) {
                        return this.props[0] = e, this.props[1] = t, this.props[2] = r, this.props[3] = n, this.props[4] = i, this.props[5] = a, this.props[6] = s, this.props[7] = o, this.props[8] = l, this.props[9] = h, this.props[10] = u, this.props[11] = c, this.props[12] = p, this.props[13] = f, this.props[14] = d, this.props[15] = m, this
                    }

                    function d(e, t, r) {
                        return r = r || 0, 0 !== e || 0 !== t || 0 !== r ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, e, t, r, 1) : this
                    }

                    function m(e, t, r, n, i, a, s, o, l, h, u, c, p, f, d, m) {
                        var y = this.props;
                        if (1 === e && 0 === t && 0 === r && 0 === n && 0 === i && 1 === a && 0 === s && 0 === o && 0 === l && 0 === h && 1 === u && 0 === c) return y[12] = y[12] * e + y[15] * p, y[13] = y[13] * a + y[15] * f, y[14] = y[14] * u + y[15] * d, y[15] *= m, this._identityCalculated = !1, this;
                        var g = y[0], v = y[1], x = y[2], b = y[3], k = y[4], S = y[5], E = y[6], P = y[7], w = y[8],
                            _ = y[9], C = y[10], A = y[11], D = y[12], T = y[13], M = y[14], F = y[15];
                        return y[0] = g * e + v * i + x * l + b * p, y[1] = g * t + v * a + x * h + b * f, y[2] = g * r + v * s + x * u + b * d, y[3] = g * n + v * o + x * c + b * m, y[4] = k * e + S * i + E * l + P * p, y[5] = k * t + S * a + E * h + P * f, y[6] = k * r + S * s + E * u + P * d, y[7] = k * n + S * o + E * c + P * m, y[8] = w * e + _ * i + C * l + A * p, y[9] = w * t + _ * a + C * h + A * f, y[10] = w * r + _ * s + C * u + A * d, y[11] = w * n + _ * o + C * c + A * m, y[12] = D * e + T * i + M * l + F * p, y[13] = D * t + T * a + M * h + F * f, y[14] = D * r + T * s + M * u + F * d, y[15] = D * n + T * o + M * c + F * m, this._identityCalculated = !1, this
                    }

                    function y() {
                        return this._identityCalculated || (this._identity = !(1 !== this.props[0] || 0 !== this.props[1] || 0 !== this.props[2] || 0 !== this.props[3] || 0 !== this.props[4] || 1 !== this.props[5] || 0 !== this.props[6] || 0 !== this.props[7] || 0 !== this.props[8] || 0 !== this.props[9] || 1 !== this.props[10] || 0 !== this.props[11] || 0 !== this.props[12] || 0 !== this.props[13] || 0 !== this.props[14] || 1 !== this.props[15]), this._identityCalculated = !0), this._identity
                    }

                    function g(e) {
                        for (var t = 0; t < 16;) {
                            if (e.props[t] !== this.props[t]) return !1;
                            t += 1
                        }
                        return !0
                    }

                    function v(e) {
                        var t;
                        for (t = 0; t < 16; t += 1) e.props[t] = this.props[t];
                        return e
                    }

                    function x(e) {
                        var t;
                        for (t = 0; t < 16; t += 1) this.props[t] = e[t]
                    }

                    function b(e, t, r) {
                        return {
                            x: e * this.props[0] + t * this.props[4] + r * this.props[8] + this.props[12],
                            y: e * this.props[1] + t * this.props[5] + r * this.props[9] + this.props[13],
                            z: e * this.props[2] + t * this.props[6] + r * this.props[10] + this.props[14]
                        }
                    }

                    function k(e, t, r) {
                        return e * this.props[0] + t * this.props[4] + r * this.props[8] + this.props[12]
                    }

                    function S(e, t, r) {
                        return e * this.props[1] + t * this.props[5] + r * this.props[9] + this.props[13]
                    }

                    function E(e, t, r) {
                        return e * this.props[2] + t * this.props[6] + r * this.props[10] + this.props[14]
                    }

                    function P() {
                        var e = this.props[0] * this.props[5] - this.props[1] * this.props[4], t = this.props[5] / e,
                            r = -this.props[1] / e, n = -this.props[4] / e, i = this.props[0] / e,
                            a = (this.props[4] * this.props[13] - this.props[5] * this.props[12]) / e,
                            s = -(this.props[0] * this.props[13] - this.props[1] * this.props[12]) / e, o = new Matrix;
                        return o.props[0] = t, o.props[1] = r, o.props[4] = n, o.props[5] = i, o.props[12] = a, o.props[13] = s, o
                    }

                    function w(e) {
                        return this.getInverseMatrix().applyToPointArray(e[0], e[1], e[2] || 0)
                    }

                    function _(e) {
                        var t, r = e.length, n = [];
                        for (t = 0; t < r; t += 1) n[t] = w(e[t]);
                        return n
                    }

                    function C(e, t, r) {
                        var n = createTypedArray("float32", 6);
                        if (this.isIdentity()) n[0] = e[0], n[1] = e[1], n[2] = t[0], n[3] = t[1], n[4] = r[0], n[5] = r[1]; else {
                            var i = this.props[0], a = this.props[1], s = this.props[4], o = this.props[5],
                                l = this.props[12], h = this.props[13];
                            n[0] = e[0] * i + e[1] * s + l, n[1] = e[0] * a + e[1] * o + h, n[2] = t[0] * i + t[1] * s + l, n[3] = t[0] * a + t[1] * o + h, n[4] = r[0] * i + r[1] * s + l, n[5] = r[0] * a + r[1] * o + h
                        }
                        return n
                    }

                    function A(e, t, r) {
                        return this.isIdentity() ? [e, t, r] : [e * this.props[0] + t * this.props[4] + r * this.props[8] + this.props[12], e * this.props[1] + t * this.props[5] + r * this.props[9] + this.props[13], e * this.props[2] + t * this.props[6] + r * this.props[10] + this.props[14]]
                    }

                    function D(e, t) {
                        if (this.isIdentity()) return e + "," + t;
                        var r = this.props;
                        return Math.round(100 * (e * r[0] + t * r[4] + r[12])) / 100 + "," + Math.round(100 * (e * r[1] + t * r[5] + r[13])) / 100
                    }

                    function T() {
                        for (var e = 0, t = this.props, r = "matrix3d("; e < 16;) r += n(1e4 * t[e]) / 1e4, r += 15 === e ? ")" : ",", e += 1;
                        return r
                    }

                    function M(e) {
                        return e < 1e-6 && e > 0 || e > -1e-6 && e < 0 ? n(1e4 * e) / 1e4 : e
                    }

                    function F() {
                        var e = this.props;
                        return "matrix(" + M(e[0]) + "," + M(e[1]) + "," + M(e[4]) + "," + M(e[5]) + "," + M(e[12]) + "," + M(e[13]) + ")"
                    }

                    return function () {
                        this.reset = i, this.rotate = a, this.rotateX = s, this.rotateY = o, this.rotateZ = l, this.skew = u, this.skewFromAxis = c, this.shear = h, this.scale = p, this.setTransform = f, this.translate = d, this.transform = m, this.applyToPoint = b, this.applyToX = k, this.applyToY = S, this.applyToZ = E, this.applyToPointArray = A, this.applyToTriplePoints = C, this.applyToPointStringified = D, this.toCSS = T, this.to2dCSS = F, this.clone = v, this.cloneFromProps = x, this.equals = g, this.inversePoints = _, this.inversePoint = w, this.getInverseMatrix = P, this._t = this.transform, this.isIdentity = y, this._identity = !0, this._identityCalculated = !1, this.props = createTypedArray("float32", 16), this.reset()
                    }
                }();

                function _typeof$3(e) {
                    return _typeof$3 = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
                        return typeof e
                    } : function (e) {
                        return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    }, _typeof$3(e)
                }

                var lottie = {}, standalone = "__[STANDALONE]__", animationData = "__[ANIMATIONDATA]__", renderer = "";

                function setLocation(e) {
                    setLocationHref(e)
                }

                function searchAnimations() {
                    !0 === standalone ? animationManager.searchAnimations(animationData, standalone, renderer) : animationManager.searchAnimations()
                }

                function setSubframeRendering(e) {
                    setSubframeEnabled(e)
                }

                function setPrefix(e) {
                    setIdPrefix(e)
                }

                function loadAnimation(e) {
                    return !0 === standalone && (e.animationData = JSON.parse(animationData)), animationManager.loadAnimation(e)
                }

                function setQuality(e) {
                    if ("string" === typeof e) switch (e) {
                        case"high":
                            setDefaultCurveSegments(200);
                            break;
                        default:
                        case"medium":
                            setDefaultCurveSegments(50);
                            break;
                        case"low":
                            setDefaultCurveSegments(10)
                    } else !isNaN(e) && e > 1 && setDefaultCurveSegments(e);
                    getDefaultCurveSegments() >= 50 ? roundValues(!1) : roundValues(!0)
                }

                function inBrowser() {
                    return "undefined" !== typeof navigator
                }

                function installPlugin(e, t) {
                    "expressions" === e && setExpressionsPlugin(t)
                }

                function getFactory(e) {
                    switch (e) {
                        case"propertyFactory":
                            return PropertyFactory;
                        case"shapePropertyFactory":
                            return ShapePropertyFactory;
                        case"matrix":
                            return Matrix;
                        default:
                            return null
                    }
                }

                function checkReady() {
                    "complete" === document.readyState && (clearInterval(readyStateCheckInterval), searchAnimations())
                }

                function getQueryVariable(e) {
                    for (var t = queryString.split("&"), r = 0; r < t.length; r += 1) {
                        var n = t[r].split("=");
                        if (decodeURIComponent(n[0]) == e) return decodeURIComponent(n[1])
                    }
                    return null
                }

                lottie.play = animationManager.play, lottie.pause = animationManager.pause, lottie.setLocationHref = setLocation, lottie.togglePause = animationManager.togglePause, lottie.setSpeed = animationManager.setSpeed, lottie.setDirection = animationManager.setDirection, lottie.stop = animationManager.stop, lottie.searchAnimations = searchAnimations, lottie.registerAnimation = animationManager.registerAnimation, lottie.loadAnimation = loadAnimation, lottie.setSubframeRendering = setSubframeRendering, lottie.resize = animationManager.resize, lottie.goToAndStop = animationManager.goToAndStop, lottie.destroy = animationManager.destroy, lottie.setQuality = setQuality, lottie.inBrowser = inBrowser, lottie.installPlugin = installPlugin, lottie.freeze = animationManager.freeze, lottie.unfreeze = animationManager.unfreeze, lottie.setVolume = animationManager.setVolume, lottie.mute = animationManager.mute, lottie.unmute = animationManager.unmute, lottie.getRegisteredAnimations = animationManager.getRegisteredAnimations, lottie.useWebWorker = setWebWorker, lottie.setIDPrefix = setPrefix, lottie.__getFactory = getFactory, lottie.version = "5.10.2";
                var queryString = "";
                if (standalone) {
                    var scripts = document.getElementsByTagName("script"), index = scripts.length - 1,
                        myScript = scripts[index] || {src: ""};
                    queryString = myScript.src ? myScript.src.replace(/^[^\?]+\??/, "") : "", renderer = getQueryVariable("renderer")
                }
                var readyStateCheckInterval = setInterval(checkReady, 100);
                try {
                    "object" !== _typeof$3(exports) && __webpack_require__.amdO
                } catch (err) {
                }
                var ShapeModifiers = function () {
                    var e = {}, t = {};
                    return e.registerModifier = function (e, r) {
                        t[e] || (t[e] = r)
                    }, e.getModifier = function (e, r, n) {
                        return new t[e](r, n)
                    }, e
                }();

                function ShapeModifier() {
                }

                function TrimModifier() {
                }

                function PuckerAndBloatModifier() {
                }

                ShapeModifier.prototype.initModifierProperties = function () {
                }, ShapeModifier.prototype.addShapeToModifier = function () {
                }, ShapeModifier.prototype.addShape = function (e) {
                    if (!this.closed) {
                        e.sh.container.addDynamicProperty(e.sh);
                        var t = {shape: e.sh, data: e, localShapeCollection: shapeCollectionPool.newShapeCollection()};
                        this.shapes.push(t), this.addShapeToModifier(t), this._isAnimated && e.setAsAnimated()
                    }
                }, ShapeModifier.prototype.init = function (e, t) {
                    this.shapes = [], this.elem = e, this.initDynamicPropertyContainer(e), this.initModifierProperties(e, t), this.frameId = initialDefaultFrame, this.closed = !1, this.k = !1, this.dynamicProperties.length ? this.k = !0 : this.getValue(!0)
                }, ShapeModifier.prototype.processKeys = function () {
                    this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties())
                }, extendPrototype([DynamicPropertyContainer], ShapeModifier), extendPrototype([ShapeModifier], TrimModifier), TrimModifier.prototype.initModifierProperties = function (e, t) {
                    this.s = PropertyFactory.getProp(e, t.s, 0, .01, this), this.e = PropertyFactory.getProp(e, t.e, 0, .01, this), this.o = PropertyFactory.getProp(e, t.o, 0, 0, this), this.sValue = 0, this.eValue = 0, this.getValue = this.processKeys, this.m = t.m, this._isAnimated = !!this.s.effectsSequence.length || !!this.e.effectsSequence.length || !!this.o.effectsSequence.length
                }, TrimModifier.prototype.addShapeToModifier = function (e) {
                    e.pathsData = []
                }, TrimModifier.prototype.calculateShapeEdges = function (e, t, r, n, i) {
                    var a = [];
                    t <= 1 ? a.push({s: e, e: t}) : e >= 1 ? a.push({s: e - 1, e: t - 1}) : (a.push({
                        s: e,
                        e: 1
                    }), a.push({s: 0, e: t - 1}));
                    var s, o, l = [], h = a.length;
                    for (s = 0; s < h; s += 1) {
                        var u, c;
                        (o = a[s]).e * i < n || o.s * i > n + r || (u = o.s * i <= n ? 0 : (o.s * i - n) / r, c = o.e * i >= n + r ? 1 : (o.e * i - n) / r, l.push([u, c]))
                    }
                    return l.length || l.push([0, 0]), l
                }, TrimModifier.prototype.releasePathsData = function (e) {
                    var t, r = e.length;
                    for (t = 0; t < r; t += 1) segmentsLengthPool.release(e[t]);
                    return e.length = 0, e
                }, TrimModifier.prototype.processShapes = function (e) {
                    var t, r, n, i;
                    if (this._mdf || e) {
                        var a = this.o.v % 360 / 360;
                        if (a < 0 && (a += 1), (t = this.s.v > 1 ? 1 + a : this.s.v < 0 ? 0 + a : this.s.v + a) > (r = this.e.v > 1 ? 1 + a : this.e.v < 0 ? 0 + a : this.e.v + a)) {
                            var s = t;
                            t = r, r = s
                        }
                        t = 1e-4 * Math.round(1e4 * t), r = 1e-4 * Math.round(1e4 * r), this.sValue = t, this.eValue = r
                    } else t = this.sValue, r = this.eValue;
                    var o, l, h, u, c, p = this.shapes.length, f = 0;
                    if (r === t) for (i = 0; i < p; i += 1) this.shapes[i].localShapeCollection.releaseShapes(), this.shapes[i].shape._mdf = !0, this.shapes[i].shape.paths = this.shapes[i].localShapeCollection, this._mdf && (this.shapes[i].pathsData.length = 0); else if (1 === r && 0 === t || 0 === r && 1 === t) {
                        if (this._mdf) for (i = 0; i < p; i += 1) this.shapes[i].pathsData.length = 0, this.shapes[i].shape._mdf = !0
                    } else {
                        var d, m, y = [];
                        for (i = 0; i < p; i += 1) if ((d = this.shapes[i]).shape._mdf || this._mdf || e || 2 === this.m) {
                            if (l = (n = d.shape.paths)._length, c = 0, !d.shape._mdf && d.pathsData.length) c = d.totalShapeLength; else {
                                for (h = this.releasePathsData(d.pathsData), o = 0; o < l; o += 1) u = bez.getSegmentsLength(n.shapes[o]), h.push(u), c += u.totalLength;
                                d.totalShapeLength = c, d.pathsData = h
                            }
                            f += c, d.shape._mdf = !0
                        } else d.shape.paths = d.localShapeCollection;
                        var g, v = t, x = r, b = 0;
                        for (i = p - 1; i >= 0; i -= 1) if ((d = this.shapes[i]).shape._mdf) {
                            for ((m = d.localShapeCollection).releaseShapes(), 2 === this.m && p > 1 ? (g = this.calculateShapeEdges(t, r, d.totalShapeLength, b, f), b += d.totalShapeLength) : g = [[v, x]], l = g.length, o = 0; o < l; o += 1) {
                                v = g[o][0], x = g[o][1], y.length = 0, x <= 1 ? y.push({
                                    s: d.totalShapeLength * v,
                                    e: d.totalShapeLength * x
                                }) : v >= 1 ? y.push({
                                    s: d.totalShapeLength * (v - 1),
                                    e: d.totalShapeLength * (x - 1)
                                }) : (y.push({s: d.totalShapeLength * v, e: d.totalShapeLength}), y.push({
                                    s: 0,
                                    e: d.totalShapeLength * (x - 1)
                                }));
                                var k = this.addShapes(d, y[0]);
                                if (y[0].s !== y[0].e) {
                                    if (y.length > 1) if (d.shape.paths.shapes[d.shape.paths._length - 1].c) {
                                        var S = k.pop();
                                        this.addPaths(k, m), k = this.addShapes(d, y[1], S)
                                    } else this.addPaths(k, m), k = this.addShapes(d, y[1]);
                                    this.addPaths(k, m)
                                }
                            }
                            d.shape.paths = m
                        }
                    }
                }, TrimModifier.prototype.addPaths = function (e, t) {
                    var r, n = e.length;
                    for (r = 0; r < n; r += 1) t.addShape(e[r])
                }, TrimModifier.prototype.addSegment = function (e, t, r, n, i, a, s) {
                    i.setXYAt(t[0], t[1], "o", a), i.setXYAt(r[0], r[1], "i", a + 1), s && i.setXYAt(e[0], e[1], "v", a), i.setXYAt(n[0], n[1], "v", a + 1)
                }, TrimModifier.prototype.addSegmentFromArray = function (e, t, r, n) {
                    t.setXYAt(e[1], e[5], "o", r), t.setXYAt(e[2], e[6], "i", r + 1), n && t.setXYAt(e[0], e[4], "v", r), t.setXYAt(e[3], e[7], "v", r + 1)
                }, TrimModifier.prototype.addShapes = function (e, t, r) {
                    var n, i, a, s, o, l, h, u, c = e.pathsData, p = e.shape.paths.shapes, f = e.shape.paths._length,
                        d = 0, m = [], y = !0;
                    for (r ? (o = r._length, u = r._length) : (r = shapePool.newElement(), o = 0, u = 0), m.push(r), n = 0; n < f; n += 1) {
                        for (l = c[n].lengths, r.c = p[n].c, a = p[n].c ? l.length : l.length + 1, i = 1; i < a; i += 1) if (d + (s = l[i - 1]).addedLength < t.s) d += s.addedLength, r.c = !1; else {
                            if (d > t.e) {
                                r.c = !1;
                                break
                            }
                            t.s <= d && t.e >= d + s.addedLength ? (this.addSegment(p[n].v[i - 1], p[n].o[i - 1], p[n].i[i], p[n].v[i], r, o, y), y = !1) : (h = bez.getNewSegment(p[n].v[i - 1], p[n].v[i], p[n].o[i - 1], p[n].i[i], (t.s - d) / s.addedLength, (t.e - d) / s.addedLength, l[i - 1]), this.addSegmentFromArray(h, r, o, y), y = !1, r.c = !1), d += s.addedLength, o += 1
                        }
                        if (p[n].c && l.length) {
                            if (s = l[i - 1], d <= t.e) {
                                var g = l[i - 1].addedLength;
                                t.s <= d && t.e >= d + g ? (this.addSegment(p[n].v[i - 1], p[n].o[i - 1], p[n].i[0], p[n].v[0], r, o, y), y = !1) : (h = bez.getNewSegment(p[n].v[i - 1], p[n].v[0], p[n].o[i - 1], p[n].i[0], (t.s - d) / g, (t.e - d) / g, l[i - 1]), this.addSegmentFromArray(h, r, o, y), y = !1, r.c = !1)
                            } else r.c = !1;
                            d += s.addedLength, o += 1
                        }
                        if (r._length && (r.setXYAt(r.v[u][0], r.v[u][1], "i", u), r.setXYAt(r.v[r._length - 1][0], r.v[r._length - 1][1], "o", r._length - 1)), d > t.e) break;
                        n < f - 1 && (r = shapePool.newElement(), y = !0, m.push(r), o = 0)
                    }
                    return m
                }, extendPrototype([ShapeModifier], PuckerAndBloatModifier), PuckerAndBloatModifier.prototype.initModifierProperties = function (e, t) {
                    this.getValue = this.processKeys, this.amount = PropertyFactory.getProp(e, t.a, 0, null, this), this._isAnimated = !!this.amount.effectsSequence.length
                }, PuckerAndBloatModifier.prototype.processPath = function (e, t) {
                    var r = t / 100, n = [0, 0], i = e._length, a = 0;
                    for (a = 0; a < i; a += 1) n[0] += e.v[a][0], n[1] += e.v[a][1];
                    n[0] /= i, n[1] /= i;
                    var s, o, l, h, u, c, p = shapePool.newElement();
                    for (p.c = e.c, a = 0; a < i; a += 1) s = e.v[a][0] + (n[0] - e.v[a][0]) * r, o = e.v[a][1] + (n[1] - e.v[a][1]) * r, l = e.o[a][0] + (n[0] - e.o[a][0]) * -r, h = e.o[a][1] + (n[1] - e.o[a][1]) * -r, u = e.i[a][0] + (n[0] - e.i[a][0]) * -r, c = e.i[a][1] + (n[1] - e.i[a][1]) * -r, p.setTripleAt(s, o, l, h, u, c, a);
                    return p
                }, PuckerAndBloatModifier.prototype.processShapes = function (e) {
                    var t, r, n, i, a, s, o = this.shapes.length, l = this.amount.v;
                    if (0 !== l) for (r = 0; r < o; r += 1) {
                        if (s = (a = this.shapes[r]).localShapeCollection, a.shape._mdf || this._mdf || e) for (s.releaseShapes(), a.shape._mdf = !0, t = a.shape.paths.shapes, i = a.shape.paths._length, n = 0; n < i; n += 1) s.addShape(this.processPath(t[n], l));
                        a.shape.paths = a.localShapeCollection
                    }
                    this.dynamicProperties.length || (this._mdf = !1)
                };
                var TransformPropertyFactory = function () {
                    var e = [0, 0];

                    function t(e, t, r) {
                        if (this.elem = e, this.frameId = -1, this.propType = "transform", this.data = t, this.v = new Matrix, this.pre = new Matrix, this.appliedTransformations = 0, this.initDynamicPropertyContainer(r || e), t.p && t.p.s ? (this.px = PropertyFactory.getProp(e, t.p.x, 0, 0, this), this.py = PropertyFactory.getProp(e, t.p.y, 0, 0, this), t.p.z && (this.pz = PropertyFactory.getProp(e, t.p.z, 0, 0, this))) : this.p = PropertyFactory.getProp(e, t.p || {k: [0, 0, 0]}, 1, 0, this), t.rx) {
                            if (this.rx = PropertyFactory.getProp(e, t.rx, 0, degToRads, this), this.ry = PropertyFactory.getProp(e, t.ry, 0, degToRads, this), this.rz = PropertyFactory.getProp(e, t.rz, 0, degToRads, this), t.or.k[0].ti) {
                                var n, i = t.or.k.length;
                                for (n = 0; n < i; n += 1) t.or.k[n].to = null, t.or.k[n].ti = null
                            }
                            this.or = PropertyFactory.getProp(e, t.or, 1, degToRads, this), this.or.sh = !0
                        } else this.r = PropertyFactory.getProp(e, t.r || {k: 0}, 0, degToRads, this);
                        t.sk && (this.sk = PropertyFactory.getProp(e, t.sk, 0, degToRads, this), this.sa = PropertyFactory.getProp(e, t.sa, 0, degToRads, this)), this.a = PropertyFactory.getProp(e, t.a || {k: [0, 0, 0]}, 1, 0, this), this.s = PropertyFactory.getProp(e, t.s || {k: [100, 100, 100]}, 1, .01, this), t.o ? this.o = PropertyFactory.getProp(e, t.o, 0, .01, e) : this.o = {
                            _mdf: !1,
                            v: 1
                        }, this._isDirty = !0, this.dynamicProperties.length || this.getValue(!0)
                    }

                    return t.prototype = {
                        applyToMatrix: function (e) {
                            var t = this._mdf;
                            this.iterateDynamicProperties(), this._mdf = this._mdf || t, this.a && e.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.s && e.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && e.skewFromAxis(-this.sk.v, this.sa.v), this.r ? e.rotate(-this.r.v) : e.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.data.p.s ? this.data.p.z ? e.translate(this.px.v, this.py.v, -this.pz.v) : e.translate(this.px.v, this.py.v, 0) : e.translate(this.p.v[0], this.p.v[1], -this.p.v[2])
                        }, getValue: function (t) {
                            if (this.elem.globalData.frameId !== this.frameId) {
                                if (this._isDirty && (this.precalculateMatrix(), this._isDirty = !1), this.iterateDynamicProperties(), this._mdf || t) {
                                    var r;
                                    if (this.v.cloneFromProps(this.pre.props), this.appliedTransformations < 1 && this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations < 2 && this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && this.appliedTransformations < 3 && this.v.skewFromAxis(-this.sk.v, this.sa.v), this.r && this.appliedTransformations < 4 ? this.v.rotate(-this.r.v) : !this.r && this.appliedTransformations < 4 && this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.autoOriented) {
                                        var n, i;
                                        if (r = this.elem.globalData.frameRate, this.p && this.p.keyframes && this.p.getValueAtTime) this.p._caching.lastFrame + this.p.offsetTime <= this.p.keyframes[0].t ? (n = this.p.getValueAtTime((this.p.keyframes[0].t + .01) / r, 0), i = this.p.getValueAtTime(this.p.keyframes[0].t / r, 0)) : this.p._caching.lastFrame + this.p.offsetTime >= this.p.keyframes[this.p.keyframes.length - 1].t ? (n = this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length - 1].t / r, 0), i = this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length - 1].t - .05) / r, 0)) : (n = this.p.pv, i = this.p.getValueAtTime((this.p._caching.lastFrame + this.p.offsetTime - .01) / r, this.p.offsetTime)); else if (this.px && this.px.keyframes && this.py.keyframes && this.px.getValueAtTime && this.py.getValueAtTime) {
                                            n = [], i = [];
                                            var a = this.px, s = this.py;
                                            a._caching.lastFrame + a.offsetTime <= a.keyframes[0].t ? (n[0] = a.getValueAtTime((a.keyframes[0].t + .01) / r, 0), n[1] = s.getValueAtTime((s.keyframes[0].t + .01) / r, 0), i[0] = a.getValueAtTime(a.keyframes[0].t / r, 0), i[1] = s.getValueAtTime(s.keyframes[0].t / r, 0)) : a._caching.lastFrame + a.offsetTime >= a.keyframes[a.keyframes.length - 1].t ? (n[0] = a.getValueAtTime(a.keyframes[a.keyframes.length - 1].t / r, 0), n[1] = s.getValueAtTime(s.keyframes[s.keyframes.length - 1].t / r, 0), i[0] = a.getValueAtTime((a.keyframes[a.keyframes.length - 1].t - .01) / r, 0), i[1] = s.getValueAtTime((s.keyframes[s.keyframes.length - 1].t - .01) / r, 0)) : (n = [a.pv, s.pv], i[0] = a.getValueAtTime((a._caching.lastFrame + a.offsetTime - .01) / r, a.offsetTime), i[1] = s.getValueAtTime((s._caching.lastFrame + s.offsetTime - .01) / r, s.offsetTime))
                                        } else n = i = e;
                                        this.v.rotate(-Math.atan2(n[1] - i[1], n[0] - i[0]))
                                    }
                                    this.data.p && this.data.p.s ? this.data.p.z ? this.v.translate(this.px.v, this.py.v, -this.pz.v) : this.v.translate(this.px.v, this.py.v, 0) : this.v.translate(this.p.v[0], this.p.v[1], -this.p.v[2])
                                }
                                this.frameId = this.elem.globalData.frameId
                            }
                        }, precalculateMatrix: function () {
                            if (!this.a.k && (this.pre.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations = 1, !this.s.effectsSequence.length)) {
                                if (this.pre.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.appliedTransformations = 2, this.sk) {
                                    if (this.sk.effectsSequence.length || this.sa.effectsSequence.length) return;
                                    this.pre.skewFromAxis(-this.sk.v, this.sa.v), this.appliedTransformations = 3
                                }
                                this.r ? this.r.effectsSequence.length || (this.pre.rotate(-this.r.v), this.appliedTransformations = 4) : this.rz.effectsSequence.length || this.ry.effectsSequence.length || this.rx.effectsSequence.length || this.or.effectsSequence.length || (this.pre.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.appliedTransformations = 4)
                            }
                        }, autoOrient: function () {
                        }
                    }, extendPrototype([DynamicPropertyContainer], t), t.prototype.addDynamicProperty = function (e) {
                        this._addDynamicProperty(e), this.elem.addDynamicProperty(e), this._isDirty = !0
                    }, t.prototype._addDynamicProperty = DynamicPropertyContainer.prototype.addDynamicProperty, {
                        getTransformProperty: function (e, r, n) {
                            return new t(e, r, n)
                        }
                    }
                }();

                function RepeaterModifier() {
                }

                function RoundCornersModifier() {
                }

                function floatEqual(e, t) {
                    return 1e5 * Math.abs(e - t) <= Math.min(Math.abs(e), Math.abs(t))
                }

                function floatZero(e) {
                    return Math.abs(e) <= 1e-5
                }

                function lerp(e, t, r) {
                    return e * (1 - r) + t * r
                }

                function lerpPoint(e, t, r) {
                    return [lerp(e[0], t[0], r), lerp(e[1], t[1], r)]
                }

                function quadRoots(e, t, r) {
                    if (0 === e) return [];
                    var n = t * t - 4 * e * r;
                    if (n < 0) return [];
                    var i = -t / (2 * e);
                    if (0 === n) return [i];
                    var a = Math.sqrt(n) / (2 * e);
                    return [i - a, i + a]
                }

                function polynomialCoefficients(e, t, r, n) {
                    return [3 * t - e - 3 * r + n, 3 * e - 6 * t + 3 * r, -3 * e + 3 * t, e]
                }

                function singlePoint(e) {
                    return new PolynomialBezier(e, e, e, e, !1)
                }

                function PolynomialBezier(e, t, r, n, i) {
                    i && pointEqual(e, t) && (t = lerpPoint(e, n, 1 / 3)), i && pointEqual(r, n) && (r = lerpPoint(e, n, 2 / 3));
                    var a = polynomialCoefficients(e[0], t[0], r[0], n[0]),
                        s = polynomialCoefficients(e[1], t[1], r[1], n[1]);
                    this.a = [a[0], s[0]], this.b = [a[1], s[1]], this.c = [a[2], s[2]], this.d = [a[3], s[3]], this.points = [e, t, r, n]
                }

                function extrema(e, t) {
                    var r = e.points[0][t], n = e.points[e.points.length - 1][t];
                    if (r > n) {
                        var i = n;
                        n = r, r = i
                    }
                    for (var a = quadRoots(3 * e.a[t], 2 * e.b[t], e.c[t]), s = 0; s < a.length; s += 1) if (a[s] > 0 && a[s] < 1) {
                        var o = e.point(a[s])[t];
                        o < r ? r = o : o > n && (n = o)
                    }
                    return {min: r, max: n}
                }

                function intersectData(e, t, r) {
                    var n = e.boundingBox();
                    return {cx: n.cx, cy: n.cy, width: n.width, height: n.height, bez: e, t: (t + r) / 2, t1: t, t2: r}
                }

                function splitData(e) {
                    var t = e.bez.split(.5);
                    return [intersectData(t[0], e.t1, e.t), intersectData(t[1], e.t, e.t2)]
                }

                function boxIntersect(e, t) {
                    return 2 * Math.abs(e.cx - t.cx) < e.width + t.width && 2 * Math.abs(e.cy - t.cy) < e.height + t.height
                }

                function intersectsImpl(e, t, r, n, i, a) {
                    if (boxIntersect(e, t)) if (r >= a || e.width <= n && e.height <= n && t.width <= n && t.height <= n) i.push([e.t, t.t]); else {
                        var s = splitData(e), o = splitData(t);
                        intersectsImpl(s[0], o[0], r + 1, n, i, a), intersectsImpl(s[0], o[1], r + 1, n, i, a), intersectsImpl(s[1], o[0], r + 1, n, i, a), intersectsImpl(s[1], o[1], r + 1, n, i, a)
                    }
                }

                function crossProduct(e, t) {
                    return [e[1] * t[2] - e[2] * t[1], e[2] * t[0] - e[0] * t[2], e[0] * t[1] - e[1] * t[0]]
                }

                function lineIntersection(e, t, r, n) {
                    var i = [e[0], e[1], 1], a = [t[0], t[1], 1], s = [r[0], r[1], 1], o = [n[0], n[1], 1],
                        l = crossProduct(crossProduct(i, a), crossProduct(s, o));
                    return floatZero(l[2]) ? null : [l[0] / l[2], l[1] / l[2]]
                }

                function polarOffset(e, t, r) {
                    return [e[0] + Math.cos(t) * r, e[1] - Math.sin(t) * r]
                }

                function pointDistance(e, t) {
                    return Math.hypot(e[0] - t[0], e[1] - t[1])
                }

                function pointEqual(e, t) {
                    return floatEqual(e[0], t[0]) && floatEqual(e[1], t[1])
                }

                function ZigZagModifier() {
                }

                function setPoint(e, t, r, n, i, a, s) {
                    var o = r - Math.PI / 2, l = r + Math.PI / 2, h = t[0] + Math.cos(r) * n * i,
                        u = t[1] - Math.sin(r) * n * i;
                    e.setTripleAt(h, u, h + Math.cos(o) * a, u - Math.sin(o) * a, h + Math.cos(l) * s, u - Math.sin(l) * s, e.length())
                }

                function getPerpendicularVector(e, t) {
                    var r = [t[0] - e[0], t[1] - e[1]], n = .5 * -Math.PI;
                    return [Math.cos(n) * r[0] - Math.sin(n) * r[1], Math.sin(n) * r[0] + Math.cos(n) * r[1]]
                }

                function getProjectingAngle(e, t) {
                    var r = 0 === t ? e.length() - 1 : t - 1, n = (t + 1) % e.length(),
                        i = getPerpendicularVector(e.v[r], e.v[n]);
                    return Math.atan2(0, 1) - Math.atan2(i[1], i[0])
                }

                function zigZagCorner(e, t, r, n, i, a, s) {
                    var o = getProjectingAngle(t, r), l = t.v[r % t._length], h = t.v[0 === r ? t._length - 1 : r - 1],
                        u = t.v[(r + 1) % t._length],
                        c = 2 === a ? Math.sqrt(Math.pow(l[0] - h[0], 2) + Math.pow(l[1] - h[1], 2)) : 0,
                        p = 2 === a ? Math.sqrt(Math.pow(l[0] - u[0], 2) + Math.pow(l[1] - u[1], 2)) : 0;
                    setPoint(e, t.v[r % t._length], o, s, n, p / (2 * (i + 1)), c / (2 * (i + 1)), a)
                }

                function zigZagSegment(e, t, r, n, i, a) {
                    for (var s = 0; s < n; s += 1) {
                        var o = (s + 1) / (n + 1),
                            l = 2 === i ? Math.sqrt(Math.pow(t.points[3][0] - t.points[0][0], 2) + Math.pow(t.points[3][1] - t.points[0][1], 2)) : 0,
                            h = t.normalAngle(o);
                        setPoint(e, t.point(o), h, a, r, l / (2 * (n + 1)), l / (2 * (n + 1)), i), a = -a
                    }
                    return a
                }

                function linearOffset(e, t, r) {
                    var n = Math.atan2(t[0] - e[0], t[1] - e[1]);
                    return [polarOffset(e, n, r), polarOffset(t, n, r)]
                }

                function offsetSegment(e, t) {
                    var r, n, i, a, s, o, l;
                    r = (l = linearOffset(e.points[0], e.points[1], t))[0], n = l[1], i = (l = linearOffset(e.points[1], e.points[2], t))[0], a = l[1], s = (l = linearOffset(e.points[2], e.points[3], t))[0], o = l[1];
                    var h = lineIntersection(r, n, i, a);
                    null === h && (h = n);
                    var u = lineIntersection(s, o, i, a);
                    return null === u && (u = s), new PolynomialBezier(r, h, u, o)
                }

                function joinLines(e, t, r, n, i) {
                    var a = t.points[3], s = r.points[0];
                    if (3 === n) return a;
                    if (pointEqual(a, s)) return a;
                    if (2 === n) {
                        var o = -t.tangentAngle(1), l = -r.tangentAngle(0) + Math.PI,
                            h = lineIntersection(a, polarOffset(a, o + Math.PI / 2, 100), s, polarOffset(s, o + Math.PI / 2, 100)),
                            u = h ? pointDistance(h, a) : pointDistance(a, s) / 2,
                            c = polarOffset(a, o, 2 * u * roundCorner);
                        return e.setXYAt(c[0], c[1], "o", e.length() - 1), c = polarOffset(s, l, 2 * u * roundCorner), e.setTripleAt(s[0], s[1], s[0], s[1], c[0], c[1], e.length()), s
                    }
                    var p = lineIntersection(pointEqual(a, t.points[2]) ? t.points[0] : t.points[2], a, s, pointEqual(s, r.points[1]) ? r.points[3] : r.points[1]);
                    return p && pointDistance(p, a) < i ? (e.setTripleAt(p[0], p[1], p[0], p[1], p[0], p[1], e.length()), p) : a
                }

                function getIntersection(e, t) {
                    var r = e.intersections(t);
                    return r.length && floatEqual(r[0][0], 1) && r.shift(), r.length ? r[0] : null
                }

                function pruneSegmentIntersection(e, t) {
                    var r = e.slice(), n = t.slice(), i = getIntersection(e[e.length - 1], t[0]);
                    return i && (r[e.length - 1] = e[e.length - 1].split(i[0])[0], n[0] = t[0].split(i[1])[1]), e.length > 1 && t.length > 1 && (i = getIntersection(e[0], t[t.length - 1])) ? [[e[0].split(i[0])[0]], [t[t.length - 1].split(i[1])[1]]] : [r, n]
                }

                function pruneIntersections(e) {
                    for (var t, r = 1; r < e.length; r += 1) t = pruneSegmentIntersection(e[r - 1], e[r]), e[r - 1] = t[0], e[r] = t[1];
                    return e.length > 1 && (t = pruneSegmentIntersection(e[e.length - 1], e[0]), e[e.length - 1] = t[0], e[0] = t[1]), e
                }

                function offsetSegmentSplit(e, t) {
                    var r, n, i, a, s = e.inflectionPoints();
                    if (0 === s.length) return [offsetSegment(e, t)];
                    if (1 === s.length || floatEqual(s[1], 1)) return r = (i = e.split(s[0]))[0], n = i[1], [offsetSegment(r, t), offsetSegment(n, t)];
                    r = (i = e.split(s[0]))[0];
                    var o = (s[1] - s[0]) / (1 - s[0]);
                    return a = (i = i[1].split(o))[0], n = i[1], [offsetSegment(r, t), offsetSegment(a, t), offsetSegment(n, t)]
                }

                function OffsetPathModifier() {
                }

                function getFontProperties(e) {
                    for (var t = e.fStyle ? e.fStyle.split(" ") : [], r = "normal", n = "normal", i = t.length, a = 0; a < i; a += 1) switch (t[a].toLowerCase()) {
                        case"italic":
                            n = "italic";
                            break;
                        case"bold":
                            r = "700";
                            break;
                        case"black":
                            r = "900";
                            break;
                        case"medium":
                            r = "500";
                            break;
                        case"regular":
                        case"normal":
                            r = "400";
                            break;
                        case"light":
                        case"thin":
                            r = "200"
                    }
                    return {style: n, weight: e.fWeight || r}
                }

                extendPrototype([ShapeModifier], RepeaterModifier), RepeaterModifier.prototype.initModifierProperties = function (e, t) {
                    this.getValue = this.processKeys, this.c = PropertyFactory.getProp(e, t.c, 0, null, this), this.o = PropertyFactory.getProp(e, t.o, 0, null, this), this.tr = TransformPropertyFactory.getTransformProperty(e, t.tr, this), this.so = PropertyFactory.getProp(e, t.tr.so, 0, .01, this), this.eo = PropertyFactory.getProp(e, t.tr.eo, 0, .01, this), this.data = t, this.dynamicProperties.length || this.getValue(!0), this._isAnimated = !!this.dynamicProperties.length, this.pMatrix = new Matrix, this.rMatrix = new Matrix, this.sMatrix = new Matrix, this.tMatrix = new Matrix, this.matrix = new Matrix
                }, RepeaterModifier.prototype.applyTransforms = function (e, t, r, n, i, a) {
                    var s = a ? -1 : 1, o = n.s.v[0] + (1 - n.s.v[0]) * (1 - i),
                        l = n.s.v[1] + (1 - n.s.v[1]) * (1 - i);
                    e.translate(n.p.v[0] * s * i, n.p.v[1] * s * i, n.p.v[2]), t.translate(-n.a.v[0], -n.a.v[1], n.a.v[2]), t.rotate(-n.r.v * s * i), t.translate(n.a.v[0], n.a.v[1], n.a.v[2]), r.translate(-n.a.v[0], -n.a.v[1], n.a.v[2]), r.scale(a ? 1 / o : o, a ? 1 / l : l), r.translate(n.a.v[0], n.a.v[1], n.a.v[2])
                }, RepeaterModifier.prototype.init = function (e, t, r, n) {
                    for (this.elem = e, this.arr = t, this.pos = r, this.elemsData = n, this._currentCopies = 0, this._elements = [], this._groups = [], this.frameId = -1, this.initDynamicPropertyContainer(e), this.initModifierProperties(e, t[r]); r > 0;) r -= 1, this._elements.unshift(t[r]);
                    this.dynamicProperties.length ? this.k = !0 : this.getValue(!0)
                }, RepeaterModifier.prototype.resetElements = function (e) {
                    var t, r = e.length;
                    for (t = 0; t < r; t += 1) e[t]._processed = !1, "gr" === e[t].ty && this.resetElements(e[t].it)
                }, RepeaterModifier.prototype.cloneElements = function (e) {
                    var t = JSON.parse(JSON.stringify(e));
                    return this.resetElements(t), t
                }, RepeaterModifier.prototype.changeGroupRender = function (e, t) {
                    var r, n = e.length;
                    for (r = 0; r < n; r += 1) e[r]._render = t, "gr" === e[r].ty && this.changeGroupRender(e[r].it, t)
                }, RepeaterModifier.prototype.processShapes = function (e) {
                    var t, r, n, i, a, s = !1;
                    if (this._mdf || e) {
                        var o, l = Math.ceil(this.c.v);
                        if (this._groups.length < l) {
                            for (; this._groups.length < l;) {
                                var h = {it: this.cloneElements(this._elements), ty: "gr"};
                                h.it.push({
                                    a: {a: 0, ix: 1, k: [0, 0]},
                                    nm: "Transform",
                                    o: {a: 0, ix: 7, k: 100},
                                    p: {a: 0, ix: 2, k: [0, 0]},
                                    r: {a: 1, ix: 6, k: [{s: 0, e: 0, t: 0}, {s: 0, e: 0, t: 1}]},
                                    s: {a: 0, ix: 3, k: [100, 100]},
                                    sa: {a: 0, ix: 5, k: 0},
                                    sk: {a: 0, ix: 4, k: 0},
                                    ty: "tr"
                                }), this.arr.splice(0, 0, h), this._groups.splice(0, 0, h), this._currentCopies += 1
                            }
                            this.elem.reloadShapes(), s = !0
                        }
                        for (a = 0, n = 0; n <= this._groups.length - 1; n += 1) {
                            if (o = a < l, this._groups[n]._render = o, this.changeGroupRender(this._groups[n].it, o), !o) {
                                var u = this.elemsData[n].it, c = u[u.length - 1];
                                0 !== c.transform.op.v ? (c.transform.op._mdf = !0, c.transform.op.v = 0) : c.transform.op._mdf = !1
                            }
                            a += 1
                        }
                        this._currentCopies = l;
                        var p = this.o.v, f = p % 1, d = p > 0 ? Math.floor(p) : Math.ceil(p), m = this.pMatrix.props,
                            y = this.rMatrix.props, g = this.sMatrix.props;
                        this.pMatrix.reset(), this.rMatrix.reset(), this.sMatrix.reset(), this.tMatrix.reset(), this.matrix.reset();
                        var v, x, b = 0;
                        if (p > 0) {
                            for (; b < d;) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), b += 1;
                            f && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, f, !1), b += f)
                        } else if (p < 0) {
                            for (; b > d;) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !0), b -= 1;
                            f && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, -f, !0), b -= f)
                        }
                        for (n = 1 === this.data.m ? 0 : this._currentCopies - 1, i = 1 === this.data.m ? 1 : -1, a = this._currentCopies; a;) {
                            if (x = (r = (t = this.elemsData[n].it)[t.length - 1].transform.mProps.v.props).length, t[t.length - 1].transform.mProps._mdf = !0, t[t.length - 1].transform.op._mdf = !0, t[t.length - 1].transform.op.v = 1 === this._currentCopies ? this.so.v : this.so.v + (this.eo.v - this.so.v) * (n / (this._currentCopies - 1)), 0 !== b) {
                                for ((0 !== n && 1 === i || n !== this._currentCopies - 1 && -1 === i) && this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), this.matrix.transform(y[0], y[1], y[2], y[3], y[4], y[5], y[6], y[7], y[8], y[9], y[10], y[11], y[12], y[13], y[14], y[15]), this.matrix.transform(g[0], g[1], g[2], g[3], g[4], g[5], g[6], g[7], g[8], g[9], g[10], g[11], g[12], g[13], g[14], g[15]), this.matrix.transform(m[0], m[1], m[2], m[3], m[4], m[5], m[6], m[7], m[8], m[9], m[10], m[11], m[12], m[13], m[14], m[15]), v = 0; v < x; v += 1) r[v] = this.matrix.props[v];
                                this.matrix.reset()
                            } else for (this.matrix.reset(), v = 0; v < x; v += 1) r[v] = this.matrix.props[v];
                            b += 1, a -= 1, n += i
                        }
                    } else for (a = this._currentCopies, n = 0, i = 1; a;) r = (t = this.elemsData[n].it)[t.length - 1].transform.mProps.v.props, t[t.length - 1].transform.mProps._mdf = !1, t[t.length - 1].transform.op._mdf = !1, a -= 1, n += i;
                    return s
                }, RepeaterModifier.prototype.addShape = function () {
                }, extendPrototype([ShapeModifier], RoundCornersModifier), RoundCornersModifier.prototype.initModifierProperties = function (e, t) {
                    this.getValue = this.processKeys, this.rd = PropertyFactory.getProp(e, t.r, 0, null, this), this._isAnimated = !!this.rd.effectsSequence.length
                }, RoundCornersModifier.prototype.processPath = function (e, t) {
                    var r, n = shapePool.newElement();
                    n.c = e.c;
                    var i, a, s, o, l, h, u, c, p, f, d, m, y = e._length, g = 0;
                    for (r = 0; r < y; r += 1) i = e.v[r], s = e.o[r], a = e.i[r], i[0] === s[0] && i[1] === s[1] && i[0] === a[0] && i[1] === a[1] ? 0 !== r && r !== y - 1 || e.c ? (o = 0 === r ? e.v[y - 1] : e.v[r - 1], h = (l = Math.sqrt(Math.pow(i[0] - o[0], 2) + Math.pow(i[1] - o[1], 2))) ? Math.min(l / 2, t) / l : 0, u = d = i[0] + (o[0] - i[0]) * h, c = m = i[1] - (i[1] - o[1]) * h, p = u - (u - i[0]) * roundCorner, f = c - (c - i[1]) * roundCorner, n.setTripleAt(u, c, p, f, d, m, g), g += 1, o = r === y - 1 ? e.v[0] : e.v[r + 1], h = (l = Math.sqrt(Math.pow(i[0] - o[0], 2) + Math.pow(i[1] - o[1], 2))) ? Math.min(l / 2, t) / l : 0, u = p = i[0] + (o[0] - i[0]) * h, c = f = i[1] + (o[1] - i[1]) * h, d = u - (u - i[0]) * roundCorner, m = c - (c - i[1]) * roundCorner, n.setTripleAt(u, c, p, f, d, m, g), g += 1) : (n.setTripleAt(i[0], i[1], s[0], s[1], a[0], a[1], g), g += 1) : (n.setTripleAt(e.v[r][0], e.v[r][1], e.o[r][0], e.o[r][1], e.i[r][0], e.i[r][1], g), g += 1);
                    return n
                }, RoundCornersModifier.prototype.processShapes = function (e) {
                    var t, r, n, i, a, s, o = this.shapes.length, l = this.rd.v;
                    if (0 !== l) for (r = 0; r < o; r += 1) {
                        if (s = (a = this.shapes[r]).localShapeCollection, a.shape._mdf || this._mdf || e) for (s.releaseShapes(), a.shape._mdf = !0, t = a.shape.paths.shapes, i = a.shape.paths._length, n = 0; n < i; n += 1) s.addShape(this.processPath(t[n], l));
                        a.shape.paths = a.localShapeCollection
                    }
                    this.dynamicProperties.length || (this._mdf = !1)
                }, PolynomialBezier.prototype.point = function (e) {
                    return [((this.a[0] * e + this.b[0]) * e + this.c[0]) * e + this.d[0], ((this.a[1] * e + this.b[1]) * e + this.c[1]) * e + this.d[1]]
                }, PolynomialBezier.prototype.derivative = function (e) {
                    return [(3 * e * this.a[0] + 2 * this.b[0]) * e + this.c[0], (3 * e * this.a[1] + 2 * this.b[1]) * e + this.c[1]]
                }, PolynomialBezier.prototype.tangentAngle = function (e) {
                    var t = this.derivative(e);
                    return Math.atan2(t[1], t[0])
                }, PolynomialBezier.prototype.normalAngle = function (e) {
                    var t = this.derivative(e);
                    return Math.atan2(t[0], t[1])
                }, PolynomialBezier.prototype.inflectionPoints = function () {
                    var e = this.a[1] * this.b[0] - this.a[0] * this.b[1];
                    if (floatZero(e)) return [];
                    var t = -.5 * (this.a[1] * this.c[0] - this.a[0] * this.c[1]) / e,
                        r = t * t - 1 / 3 * (this.b[1] * this.c[0] - this.b[0] * this.c[1]) / e;
                    if (r < 0) return [];
                    var n = Math.sqrt(r);
                    return floatZero(n) ? n > 0 && n < 1 ? [t] : [] : [t - n, t + n].filter((function (e) {
                        return e > 0 && e < 1
                    }))
                }, PolynomialBezier.prototype.split = function (e) {
                    if (e <= 0) return [singlePoint(this.points[0]), this];
                    if (e >= 1) return [this, singlePoint(this.points[this.points.length - 1])];
                    var t = lerpPoint(this.points[0], this.points[1], e),
                        r = lerpPoint(this.points[1], this.points[2], e),
                        n = lerpPoint(this.points[2], this.points[3], e), i = lerpPoint(t, r, e),
                        a = lerpPoint(r, n, e), s = lerpPoint(i, a, e);
                    return [new PolynomialBezier(this.points[0], t, i, s, !0), new PolynomialBezier(s, a, n, this.points[3], !0)]
                }, PolynomialBezier.prototype.bounds = function () {
                    return {x: extrema(this, 0), y: extrema(this, 1)}
                }, PolynomialBezier.prototype.boundingBox = function () {
                    var e = this.bounds();
                    return {
                        left: e.x.min,
                        right: e.x.max,
                        top: e.y.min,
                        bottom: e.y.max,
                        width: e.x.max - e.x.min,
                        height: e.y.max - e.y.min,
                        cx: (e.x.max + e.x.min) / 2,
                        cy: (e.y.max + e.y.min) / 2
                    }
                }, PolynomialBezier.prototype.intersections = function (e, t, r) {
                    void 0 === t && (t = 2), void 0 === r && (r = 7);
                    var n = [];
                    return intersectsImpl(intersectData(this, 0, 1), intersectData(e, 0, 1), 0, t, n, r), n
                }, PolynomialBezier.shapeSegment = function (e, t) {
                    var r = (t + 1) % e.length();
                    return new PolynomialBezier(e.v[t], e.o[t], e.i[r], e.v[r], !0)
                }, PolynomialBezier.shapeSegmentInverted = function (e, t) {
                    var r = (t + 1) % e.length();
                    return new PolynomialBezier(e.v[r], e.i[r], e.o[t], e.v[t], !0)
                }, extendPrototype([ShapeModifier], ZigZagModifier), ZigZagModifier.prototype.initModifierProperties = function (e, t) {
                    this.getValue = this.processKeys, this.amplitude = PropertyFactory.getProp(e, t.s, 0, null, this), this.frequency = PropertyFactory.getProp(e, t.r, 0, null, this), this.pointsType = PropertyFactory.getProp(e, t.pt, 0, null, this), this._isAnimated = 0 !== this.amplitude.effectsSequence.length || 0 !== this.frequency.effectsSequence.length || 0 !== this.pointsType.effectsSequence.length
                }, ZigZagModifier.prototype.processPath = function (e, t, r, n) {
                    var i = e._length, a = shapePool.newElement();
                    if (a.c = e.c, e.c || (i -= 1), 0 === i) return a;
                    var s = -1, o = PolynomialBezier.shapeSegment(e, 0);
                    zigZagCorner(a, e, 0, t, r, n, s);
                    for (var l = 0; l < i; l += 1) s = zigZagSegment(a, o, t, r, n, -s), o = l !== i - 1 || e.c ? PolynomialBezier.shapeSegment(e, (l + 1) % i) : null, zigZagCorner(a, e, l + 1, t, r, n, s);
                    return a
                }, ZigZagModifier.prototype.processShapes = function (e) {
                    var t, r, n, i, a, s, o = this.shapes.length, l = this.amplitude.v,
                        h = Math.max(0, Math.round(this.frequency.v)), u = this.pointsType.v;
                    if (0 !== l) for (r = 0; r < o; r += 1) {
                        if (s = (a = this.shapes[r]).localShapeCollection, a.shape._mdf || this._mdf || e) for (s.releaseShapes(), a.shape._mdf = !0, t = a.shape.paths.shapes, i = a.shape.paths._length, n = 0; n < i; n += 1) s.addShape(this.processPath(t[n], l, h, u));
                        a.shape.paths = a.localShapeCollection
                    }
                    this.dynamicProperties.length || (this._mdf = !1)
                }, extendPrototype([ShapeModifier], OffsetPathModifier), OffsetPathModifier.prototype.initModifierProperties = function (e, t) {
                    this.getValue = this.processKeys, this.amount = PropertyFactory.getProp(e, t.a, 0, null, this), this.miterLimit = PropertyFactory.getProp(e, t.ml, 0, null, this), this.lineJoin = t.lj, this._isAnimated = 0 !== this.amount.effectsSequence.length
                }, OffsetPathModifier.prototype.processPath = function (e, t, r, n) {
                    var i = shapePool.newElement();
                    i.c = e.c;
                    var a, s, o, l = e.length();
                    e.c || (l -= 1);
                    var h = [];
                    for (a = 0; a < l; a += 1) o = PolynomialBezier.shapeSegment(e, a), h.push(offsetSegmentSplit(o, t));
                    if (!e.c) for (a = l - 1; a >= 0; a -= 1) o = PolynomialBezier.shapeSegmentInverted(e, a), h.push(offsetSegmentSplit(o, t));
                    h = pruneIntersections(h);
                    var u = null, c = null;
                    for (a = 0; a < h.length; a += 1) {
                        var p = h[a];
                        for (c && (u = joinLines(i, c, p[0], r, n)), c = p[p.length - 1], s = 0; s < p.length; s += 1) o = p[s], u && pointEqual(o.points[0], u) ? i.setXYAt(o.points[1][0], o.points[1][1], "o", i.length() - 1) : i.setTripleAt(o.points[0][0], o.points[0][1], o.points[1][0], o.points[1][1], o.points[0][0], o.points[0][1], i.length()), i.setTripleAt(o.points[3][0], o.points[3][1], o.points[3][0], o.points[3][1], o.points[2][0], o.points[2][1], i.length()), u = o.points[3]
                    }
                    return h.length && joinLines(i, c, h[0][0], r, n), i
                }, OffsetPathModifier.prototype.processShapes = function (e) {
                    var t, r, n, i, a, s, o = this.shapes.length, l = this.amount.v, h = this.miterLimit.v,
                        u = this.lineJoin;
                    if (0 !== l) for (r = 0; r < o; r += 1) {
                        if (s = (a = this.shapes[r]).localShapeCollection, a.shape._mdf || this._mdf || e) for (s.releaseShapes(), a.shape._mdf = !0, t = a.shape.paths.shapes, i = a.shape.paths._length, n = 0; n < i; n += 1) s.addShape(this.processPath(t[n], l, u, h));
                        a.shape.paths = a.localShapeCollection
                    }
                    this.dynamicProperties.length || (this._mdf = !1)
                };
                var FontManager = function () {
                    var e = 5e3, t = {w: 0, size: 0, shapes: [], data: {shapes: []}}, r = [];
                    r = r.concat([2304, 2305, 2306, 2307, 2362, 2363, 2364, 2364, 2366, 2367, 2368, 2369, 2370, 2371, 2372, 2373, 2374, 2375, 2376, 2377, 2378, 2379, 2380, 2381, 2382, 2383, 2387, 2388, 2389, 2390, 2391, 2402, 2403]);
                    var n = ["d83cdffb", "d83cdffc", "d83cdffd", "d83cdffe", "d83cdfff"], i = [65039, 8205];

                    function a(e, t) {
                        var r = createTag("span");
                        r.setAttribute("aria-hidden", !0), r.style.fontFamily = t;
                        var n = createTag("span");
                        n.innerText = "giItT1WQy@!-/#", r.style.position = "absolute", r.style.left = "-10000px", r.style.top = "-10000px", r.style.fontSize = "300px", r.style.fontVariant = "normal", r.style.fontStyle = "normal", r.style.fontWeight = "normal", r.style.letterSpacing = "0", r.appendChild(n), document.body.appendChild(r);
                        var i = n.offsetWidth;
                        return n.style.fontFamily = function (e) {
                            var t, r = e.split(","), n = r.length, i = [];
                            for (t = 0; t < n; t += 1) "sans-serif" !== r[t] && "monospace" !== r[t] && i.push(r[t]);
                            return i.join(",")
                        }(e) + ", " + t, {node: n, w: i, parent: r}
                    }

                    function s(e, t) {
                        var r, n = document.body && t ? "svg" : "canvas", i = getFontProperties(e);
                        if ("svg" === n) {
                            var a = createNS("text");
                            a.style.fontSize = "100px", a.setAttribute("font-family", e.fFamily), a.setAttribute("font-style", i.style), a.setAttribute("font-weight", i.weight), a.textContent = "1", e.fClass ? (a.style.fontFamily = "inherit", a.setAttribute("class", e.fClass)) : a.style.fontFamily = e.fFamily, t.appendChild(a), r = a
                        } else {
                            var s = new OffscreenCanvas(500, 500).getContext("2d");
                            s.font = i.style + " " + i.weight + " 100px " + e.fFamily, r = s
                        }
                        return {
                            measureText: function (e) {
                                return "svg" === n ? (r.textContent = e, r.getComputedTextLength()) : r.measureText(e).width
                            }
                        }
                    }

                    var o = function () {
                        this.fonts = [], this.chars = null, this.typekitLoaded = 0, this.isLoaded = !1, this._warned = !1, this.initTime = Date.now(), this.setIsLoadedBinded = this.setIsLoaded.bind(this), this.checkLoadedFontsBinded = this.checkLoadedFonts.bind(this)
                    };
                    o.isModifier = function (e, t) {
                        var r = e.toString(16) + t.toString(16);
                        return -1 !== n.indexOf(r)
                    }, o.isZeroWidthJoiner = function (e, t) {
                        return t ? e === i[0] && t === i[1] : e === i[1]
                    }, o.isCombinedCharacter = function (e) {
                        return -1 !== r.indexOf(e)
                    };
                    var l = {
                        addChars: function (e) {
                            if (e) {
                                var t;
                                this.chars || (this.chars = []);
                                var r, n, i = e.length, a = this.chars.length;
                                for (t = 0; t < i; t += 1) {
                                    for (r = 0, n = !1; r < a;) this.chars[r].style === e[t].style && this.chars[r].fFamily === e[t].fFamily && this.chars[r].ch === e[t].ch && (n = !0), r += 1;
                                    n || (this.chars.push(e[t]), a += 1)
                                }
                            }
                        }, addFonts: function (e, t) {
                            if (e) {
                                if (this.chars) return this.isLoaded = !0, void (this.fonts = e.list);
                                if (!document.body) return this.isLoaded = !0, e.list.forEach((function (e) {
                                    e.helper = s(e), e.cache = {}
                                })), void (this.fonts = e.list);
                                var r, n = e.list, i = n.length, o = i;
                                for (r = 0; r < i; r += 1) {
                                    var l, h, u = !0;
                                    if (n[r].loaded = !1, n[r].monoCase = a(n[r].fFamily, "monospace"), n[r].sansCase = a(n[r].fFamily, "sans-serif"), n[r].fPath) {
                                        if ("p" === n[r].fOrigin || 3 === n[r].origin) {
                                            if ((l = document.querySelectorAll('style[f-forigin="p"][f-family="' + n[r].fFamily + '"], style[f-origin="3"][f-family="' + n[r].fFamily + '"]')).length > 0 && (u = !1), u) {
                                                var c = createTag("style");
                                                c.setAttribute("f-forigin", n[r].fOrigin), c.setAttribute("f-origin", n[r].origin), c.setAttribute("f-family", n[r].fFamily), c.type = "text/css", c.innerText = "@font-face {font-family: " + n[r].fFamily + "; font-style: normal; src: url('" + n[r].fPath + "');}", t.appendChild(c)
                                            }
                                        } else if ("g" === n[r].fOrigin || 1 === n[r].origin) {
                                            for (l = document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]'), h = 0; h < l.length; h += 1) -1 !== l[h].href.indexOf(n[r].fPath) && (u = !1);
                                            if (u) {
                                                var p = createTag("link");
                                                p.setAttribute("f-forigin", n[r].fOrigin), p.setAttribute("f-origin", n[r].origin), p.type = "text/css", p.rel = "stylesheet", p.href = n[r].fPath, document.body.appendChild(p)
                                            }
                                        } else if ("t" === n[r].fOrigin || 2 === n[r].origin) {
                                            for (l = document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]'), h = 0; h < l.length; h += 1) n[r].fPath === l[h].src && (u = !1);
                                            if (u) {
                                                var f = createTag("link");
                                                f.setAttribute("f-forigin", n[r].fOrigin), f.setAttribute("f-origin", n[r].origin), f.setAttribute("rel", "stylesheet"), f.setAttribute("href", n[r].fPath), t.appendChild(f)
                                            }
                                        }
                                    } else n[r].loaded = !0, o -= 1;
                                    n[r].helper = s(n[r], t), n[r].cache = {}, this.fonts.push(n[r])
                                }
                                0 === o ? this.isLoaded = !0 : setTimeout(this.checkLoadedFonts.bind(this), 100)
                            } else this.isLoaded = !0
                        }, getCharData: function (e, r, n) {
                            for (var i = 0, a = this.chars.length; i < a;) {
                                if (this.chars[i].ch === e && this.chars[i].style === r && this.chars[i].fFamily === n) return this.chars[i];
                                i += 1
                            }
                            return ("string" === typeof e && 13 !== e.charCodeAt(0) || !e) && console && console.warn && !this._warned && (this._warned = !0, console.warn("Missing character from exported characters list: ", e, r, n)), t
                        }, getFontByName: function (e) {
                            for (var t = 0, r = this.fonts.length; t < r;) {
                                if (this.fonts[t].fName === e) return this.fonts[t];
                                t += 1
                            }
                            return this.fonts[0]
                        }, measureText: function (e, t, r) {
                            var n = this.getFontByName(t), i = e.charCodeAt(0);
                            if (!n.cache[i + 1]) {
                                var a = n.helper;
                                if (" " === e) {
                                    var s = a.measureText("|" + e + "|"), o = a.measureText("||");
                                    n.cache[i + 1] = (s - o) / 100
                                } else n.cache[i + 1] = a.measureText(e) / 100
                            }
                            return n.cache[i + 1] * r
                        }, checkLoadedFonts: function () {
                            var t, r, n, i = this.fonts.length, a = i;
                            for (t = 0; t < i; t += 1) this.fonts[t].loaded ? a -= 1 : "n" === this.fonts[t].fOrigin || 0 === this.fonts[t].origin ? this.fonts[t].loaded = !0 : (r = this.fonts[t].monoCase.node, n = this.fonts[t].monoCase.w, r.offsetWidth !== n ? (a -= 1, this.fonts[t].loaded = !0) : (r = this.fonts[t].sansCase.node, n = this.fonts[t].sansCase.w, r.offsetWidth !== n && (a -= 1, this.fonts[t].loaded = !0)), this.fonts[t].loaded && (this.fonts[t].sansCase.parent.parentNode.removeChild(this.fonts[t].sansCase.parent), this.fonts[t].monoCase.parent.parentNode.removeChild(this.fonts[t].monoCase.parent)));
                            0 !== a && Date.now() - this.initTime < e ? setTimeout(this.checkLoadedFontsBinded, 20) : setTimeout(this.setIsLoadedBinded, 10)
                        }, setIsLoaded: function () {
                            this.isLoaded = !0
                        }
                    };
                    return o.prototype = l, o
                }();

                function RenderableElement() {
                }

                RenderableElement.prototype = {
                    initRenderable: function () {
                        this.isInRange = !1, this.hidden = !1, this.isTransparent = !1, this.renderableComponents = []
                    }, addRenderableComponent: function (e) {
                        -1 === this.renderableComponents.indexOf(e) && this.renderableComponents.push(e)
                    }, removeRenderableComponent: function (e) {
                        -1 !== this.renderableComponents.indexOf(e) && this.renderableComponents.splice(this.renderableComponents.indexOf(e), 1)
                    }, prepareRenderableFrame: function (e) {
                        this.checkLayerLimits(e)
                    }, checkTransparency: function () {
                        this.finalTransform.mProp.o.v <= 0 ? !this.isTransparent && this.globalData.renderConfig.hideOnTransparent && (this.isTransparent = !0, this.hide()) : this.isTransparent && (this.isTransparent = !1, this.show())
                    }, checkLayerLimits: function (e) {
                        this.data.ip - this.data.st <= e && this.data.op - this.data.st > e ? !0 !== this.isInRange && (this.globalData._mdf = !0, this._mdf = !0, this.isInRange = !0, this.show()) : !1 !== this.isInRange && (this.globalData._mdf = !0, this.isInRange = !1, this.hide())
                    }, renderRenderable: function () {
                        var e, t = this.renderableComponents.length;
                        for (e = 0; e < t; e += 1) this.renderableComponents[e].renderFrame(this._isFirstFrame)
                    }, sourceRectAtTime: function () {
                        return {top: 0, left: 0, width: 100, height: 100}
                    }, getLayerSize: function () {
                        return 5 === this.data.ty ? {
                            w: this.data.textData.width,
                            h: this.data.textData.height
                        } : {w: this.data.width, h: this.data.height}
                    }
                };
                var getBlendMode = function () {
                    var e = {
                        0: "source-over",
                        1: "multiply",
                        2: "screen",
                        3: "overlay",
                        4: "darken",
                        5: "lighten",
                        6: "color-dodge",
                        7: "color-burn",
                        8: "hard-light",
                        9: "soft-light",
                        10: "difference",
                        11: "exclusion",
                        12: "hue",
                        13: "saturation",
                        14: "color",
                        15: "luminosity"
                    };
                    return function (t) {
                        return e[t] || ""
                    }
                }();

                function SliderEffect(e, t, r) {
                    this.p = PropertyFactory.getProp(t, e.v, 0, 0, r)
                }

                function AngleEffect(e, t, r) {
                    this.p = PropertyFactory.getProp(t, e.v, 0, 0, r)
                }

                function ColorEffect(e, t, r) {
                    this.p = PropertyFactory.getProp(t, e.v, 1, 0, r)
                }

                function PointEffect(e, t, r) {
                    this.p = PropertyFactory.getProp(t, e.v, 1, 0, r)
                }

                function LayerIndexEffect(e, t, r) {
                    this.p = PropertyFactory.getProp(t, e.v, 0, 0, r)
                }

                function MaskIndexEffect(e, t, r) {
                    this.p = PropertyFactory.getProp(t, e.v, 0, 0, r)
                }

                function CheckboxEffect(e, t, r) {
                    this.p = PropertyFactory.getProp(t, e.v, 0, 0, r)
                }

                function NoValueEffect() {
                    this.p = {}
                }

                function EffectsManager(e, t) {
                    var r, n = e.ef || [];
                    this.effectElements = [];
                    var i, a = n.length;
                    for (r = 0; r < a; r += 1) i = new GroupEffect(n[r], t), this.effectElements.push(i)
                }

                function GroupEffect(e, t) {
                    this.init(e, t)
                }

                function BaseElement() {
                }

                function FrameElement() {
                }

                function FootageElement(e, t, r) {
                    this.initFrame(), this.initRenderable(), this.assetData = t.getAssetData(e.refId), this.footageData = t.imageLoader.getAsset(this.assetData), this.initBaseData(e, t, r)
                }

                function AudioElement(e, t, r) {
                    this.initFrame(), this.initRenderable(), this.assetData = t.getAssetData(e.refId), this.initBaseData(e, t, r), this._isPlaying = !1, this._canPlay = !1;
                    var n = this.globalData.getAssetsPath(this.assetData);
                    this.audio = this.globalData.audioController.createAudio(n), this._currentTime = 0, this.globalData.audioController.addAudio(this), this._volumeMultiplier = 1, this._volume = 1, this._previousVolume = null, this.tm = e.tm ? PropertyFactory.getProp(this, e.tm, 0, t.frameRate, this) : {_placeholder: !0}, this.lv = PropertyFactory.getProp(this, e.au && e.au.lv ? e.au.lv : {k: [100]}, 1, .01, this)
                }

                function BaseRenderer() {
                }

                function TransformElement() {
                }

                function MaskElement(e, t, r) {
                    this.data = e, this.element = t, this.globalData = r, this.storedData = [], this.masksProperties = this.data.masksProperties || [], this.maskElement = null;
                    var n, i, a = this.globalData.defs, s = this.masksProperties ? this.masksProperties.length : 0;
                    this.viewData = createSizedArray(s), this.solidPath = "";
                    var o, l, h, u, c, p, f = this.masksProperties, d = 0, m = [], y = createElementID(),
                        g = "clipPath", v = "clip-path";
                    for (n = 0; n < s; n += 1) if (("a" !== f[n].mode && "n" !== f[n].mode || f[n].inv || 100 !== f[n].o.k || f[n].o.x) && (g = "mask", v = "mask"), "s" !== f[n].mode && "i" !== f[n].mode || 0 !== d ? h = null : ((h = createNS("rect")).setAttribute("fill", "#ffffff"), h.setAttribute("width", this.element.comp.data.w || 0), h.setAttribute("height", this.element.comp.data.h || 0), m.push(h)), i = createNS("path"), "n" === f[n].mode) this.viewData[n] = {
                        op: PropertyFactory.getProp(this.element, f[n].o, 0, .01, this.element),
                        prop: ShapePropertyFactory.getShapeProp(this.element, f[n], 3),
                        elem: i,
                        lastPath: ""
                    }, a.appendChild(i); else {
                        var x;
                        if (d += 1, i.setAttribute("fill", "s" === f[n].mode ? "#000000" : "#ffffff"), i.setAttribute("clip-rule", "nonzero"), 0 !== f[n].x.k ? (g = "mask", v = "mask", p = PropertyFactory.getProp(this.element, f[n].x, 0, null, this.element), x = createElementID(), (u = createNS("filter")).setAttribute("id", x), (c = createNS("feMorphology")).setAttribute("operator", "erode"), c.setAttribute("in", "SourceGraphic"), c.setAttribute("radius", "0"), u.appendChild(c), a.appendChild(u), i.setAttribute("stroke", "s" === f[n].mode ? "#000000" : "#ffffff")) : (c = null, p = null), this.storedData[n] = {
                            elem: i,
                            x: p,
                            expan: c,
                            lastPath: "",
                            lastOperator: "",
                            filterId: x,
                            lastRadius: 0
                        }, "i" === f[n].mode) {
                            l = m.length;
                            var b = createNS("g");
                            for (o = 0; o < l; o += 1) b.appendChild(m[o]);
                            var k = createNS("mask");
                            k.setAttribute("mask-type", "alpha"), k.setAttribute("id", y + "_" + d), k.appendChild(i), a.appendChild(k), b.setAttribute("mask", "url(" + getLocationHref() + "#" + y + "_" + d + ")"), m.length = 0, m.push(b)
                        } else m.push(i);
                        f[n].inv && !this.solidPath && (this.solidPath = this.createLayerSolidPath()), this.viewData[n] = {
                            elem: i,
                            lastPath: "",
                            op: PropertyFactory.getProp(this.element, f[n].o, 0, .01, this.element),
                            prop: ShapePropertyFactory.getShapeProp(this.element, f[n], 3),
                            invRect: h
                        }, this.viewData[n].prop.k || this.drawPath(f[n], this.viewData[n].prop.v, this.viewData[n])
                    }
                    for (this.maskElement = createNS(g), s = m.length, n = 0; n < s; n += 1) this.maskElement.appendChild(m[n]);
                    d > 0 && (this.maskElement.setAttribute("id", y), this.element.maskedElement.setAttribute(v, "url(" + getLocationHref() + "#" + y + ")"), a.appendChild(this.maskElement)), this.viewData.length && this.element.addRenderableComponent(this)
                }

                extendPrototype([DynamicPropertyContainer], GroupEffect), GroupEffect.prototype.getValue = GroupEffect.prototype.iterateDynamicProperties, GroupEffect.prototype.init = function (e, t) {
                    var r;
                    this.data = e, this.effectElements = [], this.initDynamicPropertyContainer(t);
                    var n, i = this.data.ef.length, a = this.data.ef;
                    for (r = 0; r < i; r += 1) {
                        switch (n = null, a[r].ty) {
                            case 0:
                                n = new SliderEffect(a[r], t, this);
                                break;
                            case 1:
                                n = new AngleEffect(a[r], t, this);
                                break;
                            case 2:
                                n = new ColorEffect(a[r], t, this);
                                break;
                            case 3:
                                n = new PointEffect(a[r], t, this);
                                break;
                            case 4:
                            case 7:
                                n = new CheckboxEffect(a[r], t, this);
                                break;
                            case 10:
                                n = new LayerIndexEffect(a[r], t, this);
                                break;
                            case 11:
                                n = new MaskIndexEffect(a[r], t, this);
                                break;
                            case 5:
                                n = new EffectsManager(a[r], t, this);
                                break;
                            default:
                                n = new NoValueEffect(a[r], t, this)
                        }
                        n && this.effectElements.push(n)
                    }
                }, BaseElement.prototype = {
                    checkMasks: function () {
                        if (!this.data.hasMask) return !1;
                        for (var e = 0, t = this.data.masksProperties.length; e < t;) {
                            if ("n" !== this.data.masksProperties[e].mode && !1 !== this.data.masksProperties[e].cl) return !0;
                            e += 1
                        }
                        return !1
                    }, initExpressions: function () {
                        var e = getExpressionInterfaces();
                        if (e) {
                            var t = e("layer"), r = e("effects"), n = e("shape"), i = e("text"), a = e("comp");
                            this.layerInterface = t(this), this.data.hasMask && this.maskManager && this.layerInterface.registerMaskInterface(this.maskManager);
                            var s = r.createEffectsInterface(this, this.layerInterface);
                            this.layerInterface.registerEffectsInterface(s), 0 === this.data.ty || this.data.xt ? this.compInterface = a(this) : 4 === this.data.ty ? (this.layerInterface.shapeInterface = n(this.shapesData, this.itemsData, this.layerInterface), this.layerInterface.content = this.layerInterface.shapeInterface) : 5 === this.data.ty && (this.layerInterface.textInterface = i(this), this.layerInterface.text = this.layerInterface.textInterface)
                        }
                    }, setBlendMode: function () {
                        var e = getBlendMode(this.data.bm);
                        (this.baseElement || this.layerElement).style["mix-blend-mode"] = e
                    }, initBaseData: function (e, t, r) {
                        this.globalData = t, this.comp = r, this.data = e, this.layerId = createElementID(), this.data.sr || (this.data.sr = 1), this.effectsManager = new EffectsManager(this.data, this, this.dynamicProperties)
                    }, getType: function () {
                        return this.type
                    }, sourceRectAtTime: function () {
                    }
                }, FrameElement.prototype = {
                    initFrame: function () {
                        this._isFirstFrame = !1, this.dynamicProperties = [], this._mdf = !1
                    }, prepareProperties: function (e, t) {
                        var r, n = this.dynamicProperties.length;
                        for (r = 0; r < n; r += 1) (t || this._isParent && "transform" === this.dynamicProperties[r].propType) && (this.dynamicProperties[r].getValue(), this.dynamicProperties[r]._mdf && (this.globalData._mdf = !0, this._mdf = !0))
                    }, addDynamicProperty: function (e) {
                        -1 === this.dynamicProperties.indexOf(e) && this.dynamicProperties.push(e)
                    }
                }, FootageElement.prototype.prepareFrame = function () {
                }, extendPrototype([RenderableElement, BaseElement, FrameElement], FootageElement), FootageElement.prototype.getBaseElement = function () {
                    return null
                }, FootageElement.prototype.renderFrame = function () {
                }, FootageElement.prototype.destroy = function () {
                }, FootageElement.prototype.initExpressions = function () {
                    var e = getExpressionInterfaces();
                    if (e) {
                        var t = e("footage");
                        this.layerInterface = t(this)
                    }
                }, FootageElement.prototype.getFootageData = function () {
                    return this.footageData
                }, AudioElement.prototype.prepareFrame = function (e) {
                    if (this.prepareRenderableFrame(e, !0), this.prepareProperties(e, !0), this.tm._placeholder) this._currentTime = e / this.data.sr; else {
                        var t = this.tm.v;
                        this._currentTime = t
                    }
                    this._volume = this.lv.v[0];
                    var r = this._volume * this._volumeMultiplier;
                    this._previousVolume !== r && (this._previousVolume = r, this.audio.volume(r))
                }, extendPrototype([RenderableElement, BaseElement, FrameElement], AudioElement), AudioElement.prototype.renderFrame = function () {
                    this.isInRange && this._canPlay && (this._isPlaying ? (!this.audio.playing() || Math.abs(this._currentTime / this.globalData.frameRate - this.audio.seek()) > .1) && this.audio.seek(this._currentTime / this.globalData.frameRate) : (this.audio.play(), this.audio.seek(this._currentTime / this.globalData.frameRate), this._isPlaying = !0))
                }, AudioElement.prototype.show = function () {
                }, AudioElement.prototype.hide = function () {
                    this.audio.pause(), this._isPlaying = !1
                }, AudioElement.prototype.pause = function () {
                    this.audio.pause(), this._isPlaying = !1, this._canPlay = !1
                }, AudioElement.prototype.resume = function () {
                    this._canPlay = !0
                }, AudioElement.prototype.setRate = function (e) {
                    this.audio.rate(e)
                }, AudioElement.prototype.volume = function (e) {
                    this._volumeMultiplier = e, this._previousVolume = e * this._volume, this.audio.volume(this._previousVolume)
                }, AudioElement.prototype.getBaseElement = function () {
                    return null
                }, AudioElement.prototype.destroy = function () {
                }, AudioElement.prototype.sourceRectAtTime = function () {
                }, AudioElement.prototype.initExpressions = function () {
                }, BaseRenderer.prototype.checkLayers = function (e) {
                    var t, r, n = this.layers.length;
                    for (this.completeLayers = !0, t = n - 1; t >= 0; t -= 1) this.elements[t] || (r = this.layers[t]).ip - r.st <= e - this.layers[t].st && r.op - r.st > e - this.layers[t].st && this.buildItem(t), this.completeLayers = !!this.elements[t] && this.completeLayers;
                    this.checkPendingElements()
                }, BaseRenderer.prototype.createItem = function (e) {
                    switch (e.ty) {
                        case 2:
                            return this.createImage(e);
                        case 0:
                            return this.createComp(e);
                        case 1:
                            return this.createSolid(e);
                        case 3:
                        default:
                            return this.createNull(e);
                        case 4:
                            return this.createShape(e);
                        case 5:
                            return this.createText(e);
                        case 6:
                            return this.createAudio(e);
                        case 13:
                            return this.createCamera(e);
                        case 15:
                            return this.createFootage(e)
                    }
                }, BaseRenderer.prototype.createCamera = function () {
                    throw new Error("You're using a 3d camera. Try the html renderer.")
                }, BaseRenderer.prototype.createAudio = function (e) {
                    return new AudioElement(e, this.globalData, this)
                }, BaseRenderer.prototype.createFootage = function (e) {
                    return new FootageElement(e, this.globalData, this)
                }, BaseRenderer.prototype.buildAllItems = function () {
                    var e, t = this.layers.length;
                    for (e = 0; e < t; e += 1) this.buildItem(e);
                    this.checkPendingElements()
                }, BaseRenderer.prototype.includeLayers = function (e) {
                    var t;
                    this.completeLayers = !1;
                    var r, n = e.length, i = this.layers.length;
                    for (t = 0; t < n; t += 1) for (r = 0; r < i;) {
                        if (this.layers[r].id === e[t].id) {
                            this.layers[r] = e[t];
                            break
                        }
                        r += 1
                    }
                }, BaseRenderer.prototype.setProjectInterface = function (e) {
                    this.globalData.projectInterface = e
                }, BaseRenderer.prototype.initItems = function () {
                    this.globalData.progressiveLoad || this.buildAllItems()
                }, BaseRenderer.prototype.buildElementParenting = function (e, t, r) {
                    for (var n = this.elements, i = this.layers, a = 0, s = i.length; a < s;) i[a].ind == t && (n[a] && !0 !== n[a] ? (r.push(n[a]), n[a].setAsParent(), void 0 !== i[a].parent ? this.buildElementParenting(e, i[a].parent, r) : e.setHierarchy(r)) : (this.buildItem(a), this.addPendingElement(e))), a += 1
                }, BaseRenderer.prototype.addPendingElement = function (e) {
                    this.pendingElements.push(e)
                }, BaseRenderer.prototype.searchExtraCompositions = function (e) {
                    var t, r = e.length;
                    for (t = 0; t < r; t += 1) if (e[t].xt) {
                        var n = this.createComp(e[t]);
                        n.initExpressions(), this.globalData.projectInterface.registerComposition(n)
                    }
                }, BaseRenderer.prototype.getElementById = function (e) {
                    var t, r = this.elements.length;
                    for (t = 0; t < r; t += 1) if (this.elements[t].data.ind === e) return this.elements[t];
                    return null
                }, BaseRenderer.prototype.getElementByPath = function (e) {
                    var t, r = e.shift();
                    if ("number" === typeof r) t = this.elements[r]; else {
                        var n, i = this.elements.length;
                        for (n = 0; n < i; n += 1) if (this.elements[n].data.nm === r) {
                            t = this.elements[n];
                            break
                        }
                    }
                    return 0 === e.length ? t : t.getElementByPath(e)
                }, BaseRenderer.prototype.setupGlobalData = function (e, t) {
                    this.globalData.fontManager = new FontManager, this.globalData.fontManager.addChars(e.chars), this.globalData.fontManager.addFonts(e.fonts, t), this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem), this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(this.animationItem), this.globalData.imageLoader = this.animationItem.imagePreloader, this.globalData.audioController = this.animationItem.audioController, this.globalData.frameId = 0, this.globalData.frameRate = e.fr, this.globalData.nm = e.nm, this.globalData.compSize = {
                        w: e.w,
                        h: e.h
                    }
                }, TransformElement.prototype = {
                    initTransform: function () {
                        this.finalTransform = {
                            mProp: this.data.ks ? TransformPropertyFactory.getTransformProperty(this, this.data.ks, this) : {o: 0},
                            _matMdf: !1,
                            _opMdf: !1,
                            mat: new Matrix
                        }, this.data.ao && (this.finalTransform.mProp.autoOriented = !0), this.data.ty
                    }, renderTransform: function () {
                        if (this.finalTransform._opMdf = this.finalTransform.mProp.o._mdf || this._isFirstFrame, this.finalTransform._matMdf = this.finalTransform.mProp._mdf || this._isFirstFrame, this.hierarchy) {
                            var e, t = this.finalTransform.mat, r = 0, n = this.hierarchy.length;
                            if (!this.finalTransform._matMdf) for (; r < n;) {
                                if (this.hierarchy[r].finalTransform.mProp._mdf) {
                                    this.finalTransform._matMdf = !0;
                                    break
                                }
                                r += 1
                            }
                            if (this.finalTransform._matMdf) for (e = this.finalTransform.mProp.v.props, t.cloneFromProps(e), r = 0; r < n; r += 1) e = this.hierarchy[r].finalTransform.mProp.v.props, t.transform(e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8], e[9], e[10], e[11], e[12], e[13], e[14], e[15])
                        }
                    }, globalToLocal: function (e) {
                        var t = [];
                        t.push(this.finalTransform);
                        for (var r, n = !0, i = this.comp; n;) i.finalTransform ? (i.data.hasMask && t.splice(0, 0, i.finalTransform), i = i.comp) : n = !1;
                        var a, s = t.length;
                        for (r = 0; r < s; r += 1) a = t[r].mat.applyToPointArray(0, 0, 0), e = [e[0] - a[0], e[1] - a[1], 0];
                        return e
                    }, mHelper: new Matrix
                }, MaskElement.prototype.getMaskProperty = function (e) {
                    return this.viewData[e].prop
                }, MaskElement.prototype.renderFrame = function (e) {
                    var t, r = this.element.finalTransform.mat, n = this.masksProperties.length;
                    for (t = 0; t < n; t += 1) if ((this.viewData[t].prop._mdf || e) && this.drawPath(this.masksProperties[t], this.viewData[t].prop.v, this.viewData[t]), (this.viewData[t].op._mdf || e) && this.viewData[t].elem.setAttribute("fill-opacity", this.viewData[t].op.v), "n" !== this.masksProperties[t].mode && (this.viewData[t].invRect && (this.element.finalTransform.mProp._mdf || e) && this.viewData[t].invRect.setAttribute("transform", r.getInverseMatrix().to2dCSS()), this.storedData[t].x && (this.storedData[t].x._mdf || e))) {
                        var i = this.storedData[t].expan;
                        this.storedData[t].x.v < 0 ? ("erode" !== this.storedData[t].lastOperator && (this.storedData[t].lastOperator = "erode", this.storedData[t].elem.setAttribute("filter", "url(" + getLocationHref() + "#" + this.storedData[t].filterId + ")")), i.setAttribute("radius", -this.storedData[t].x.v)) : ("dilate" !== this.storedData[t].lastOperator && (this.storedData[t].lastOperator = "dilate", this.storedData[t].elem.setAttribute("filter", null)), this.storedData[t].elem.setAttribute("stroke-width", 2 * this.storedData[t].x.v))
                    }
                }, MaskElement.prototype.getMaskelement = function () {
                    return this.maskElement
                }, MaskElement.prototype.createLayerSolidPath = function () {
                    var e = "M0,0 ";
                    return e += " h" + this.globalData.compSize.w, e += " v" + this.globalData.compSize.h, e += " h-" + this.globalData.compSize.w, e += " v-" + this.globalData.compSize.h + " "
                }, MaskElement.prototype.drawPath = function (e, t, r) {
                    var n, i, a = " M" + t.v[0][0] + "," + t.v[0][1];
                    for (i = t._length, n = 1; n < i; n += 1) a += " C" + t.o[n - 1][0] + "," + t.o[n - 1][1] + " " + t.i[n][0] + "," + t.i[n][1] + " " + t.v[n][0] + "," + t.v[n][1];
                    if (t.c && i > 1 && (a += " C" + t.o[n - 1][0] + "," + t.o[n - 1][1] + " " + t.i[0][0] + "," + t.i[0][1] + " " + t.v[0][0] + "," + t.v[0][1]), r.lastPath !== a) {
                        var s = "";
                        r.elem && (t.c && (s = e.inv ? this.solidPath + a : a), r.elem.setAttribute("d", s)), r.lastPath = a
                    }
                }, MaskElement.prototype.destroy = function () {
                    this.element = null, this.globalData = null, this.maskElement = null, this.data = null, this.masksProperties = null
                };
                var filtersFactory = function () {
                    var e = {
                        createFilter: function (e, t) {
                            var r = createNS("filter");
                            return r.setAttribute("id", e), !0 !== t && (r.setAttribute("filterUnits", "objectBoundingBox"), r.setAttribute("x", "0%"), r.setAttribute("y", "0%"), r.setAttribute("width", "100%"), r.setAttribute("height", "100%")), r
                        }, createAlphaToLuminanceFilter: function () {
                            var e = createNS("feColorMatrix");
                            return e.setAttribute("type", "matrix"), e.setAttribute("color-interpolation-filters", "sRGB"), e.setAttribute("values", "0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"), e
                        }
                    };
                    return e
                }(), featureSupport = function () {
                    var e = {maskType: !0, svgLumaHidden: !0, offscreenCanvas: "undefined" !== typeof OffscreenCanvas};
                    return (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent)) && (e.maskType = !1), /firefox/i.test(navigator.userAgent) && (e.svgLumaHidden = !1), e
                }(), registeredEffects = {}, idPrefix = "filter_result_";

                function SVGEffects(e) {
                    var t, r, n = "SourceGraphic", i = e.data.ef ? e.data.ef.length : 0, a = createElementID(),
                        s = filtersFactory.createFilter(a, !0), o = 0;
                    for (this.filters = [], t = 0; t < i; t += 1) {
                        r = null;
                        var l = e.data.ef[t].ty;
                        registeredEffects[l] && (r = new (0, registeredEffects[l].effect)(s, e.effectsManager.effectElements[t], e, idPrefix + o, n), n = idPrefix + o, registeredEffects[l].countsAsEffect && (o += 1)), r && this.filters.push(r)
                    }
                    o && (e.globalData.defs.appendChild(s), e.layerElement.setAttribute("filter", "url(" + getLocationHref() + "#" + a + ")")), this.filters.length && e.addRenderableComponent(this)
                }

                function registerEffect(e, t, r) {
                    registeredEffects[e] = {effect: t, countsAsEffect: r}
                }

                function SVGBaseElement() {
                }

                function HierarchyElement() {
                }

                function RenderableDOMElement() {
                }

                function IImageElement(e, t, r) {
                    this.assetData = t.getAssetData(e.refId), this.initElement(e, t, r), this.sourceRect = {
                        top: 0,
                        left: 0,
                        width: this.assetData.w,
                        height: this.assetData.h
                    }
                }

                function ProcessedElement(e, t) {
                    this.elem = e, this.pos = t
                }

                function IShapeElement() {
                }

                SVGEffects.prototype.renderFrame = function (e) {
                    var t, r = this.filters.length;
                    for (t = 0; t < r; t += 1) this.filters[t].renderFrame(e)
                }, SVGBaseElement.prototype = {
                    initRendererElement: function () {
                        this.layerElement = createNS("g")
                    }, createContainerElements: function () {
                        this.matteElement = createNS("g"), this.transformedElement = this.layerElement, this.maskedElement = this.layerElement, this._sizeChanged = !1;
                        var e = null;
                        if (this.data.td) {
                            this.matteMasks = {};
                            var t = createNS("g");
                            t.setAttribute("id", this.layerId), t.appendChild(this.layerElement), e = t, this.globalData.defs.appendChild(t)
                        } else this.data.tt ? (this.matteElement.appendChild(this.layerElement), e = this.matteElement, this.baseElement = this.matteElement) : this.baseElement = this.layerElement;
                        if (this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), 0 === this.data.ty && !this.data.hd) {
                            var r = createNS("clipPath"), n = createNS("path");
                            n.setAttribute("d", "M0,0 L" + this.data.w + ",0 L" + this.data.w + "," + this.data.h + " L0," + this.data.h + "z");
                            var i = createElementID();
                            if (r.setAttribute("id", i), r.appendChild(n), this.globalData.defs.appendChild(r), this.checkMasks()) {
                                var a = createNS("g");
                                a.setAttribute("clip-path", "url(" + getLocationHref() + "#" + i + ")"), a.appendChild(this.layerElement), this.transformedElement = a, e ? e.appendChild(this.transformedElement) : this.baseElement = this.transformedElement
                            } else this.layerElement.setAttribute("clip-path", "url(" + getLocationHref() + "#" + i + ")")
                        }
                        0 !== this.data.bm && this.setBlendMode()
                    }, renderElement: function () {
                        this.finalTransform._matMdf && this.transformedElement.setAttribute("transform", this.finalTransform.mat.to2dCSS()), this.finalTransform._opMdf && this.transformedElement.setAttribute("opacity", this.finalTransform.mProp.o.v)
                    }, destroyBaseElement: function () {
                        this.layerElement = null, this.matteElement = null, this.maskManager.destroy()
                    }, getBaseElement: function () {
                        return this.data.hd ? null : this.baseElement
                    }, createRenderableComponents: function () {
                        this.maskManager = new MaskElement(this.data, this, this.globalData), this.renderableEffectsManager = new SVGEffects(this)
                    }, getMatte: function (e) {
                        if (this.matteMasks || (this.matteMasks = {}), !this.matteMasks[e]) {
                            var t, r, n, i, a = this.layerId + "_" + e;
                            if (1 === e || 3 === e) {
                                var s = createNS("mask");
                                s.setAttribute("id", a), s.setAttribute("mask-type", 3 === e ? "luminance" : "alpha"), (n = createNS("use")).setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId), s.appendChild(n), this.globalData.defs.appendChild(s), featureSupport.maskType || 1 !== e || (s.setAttribute("mask-type", "luminance"), t = createElementID(), r = filtersFactory.createFilter(t), this.globalData.defs.appendChild(r), r.appendChild(filtersFactory.createAlphaToLuminanceFilter()), (i = createNS("g")).appendChild(n), s.appendChild(i), i.setAttribute("filter", "url(" + getLocationHref() + "#" + t + ")"))
                            } else if (2 === e) {
                                var o = createNS("mask");
                                o.setAttribute("id", a), o.setAttribute("mask-type", "alpha");
                                var l = createNS("g");
                                o.appendChild(l), t = createElementID(), r = filtersFactory.createFilter(t);
                                var h = createNS("feComponentTransfer");
                                h.setAttribute("in", "SourceGraphic"), r.appendChild(h);
                                var u = createNS("feFuncA");
                                u.setAttribute("type", "table"), u.setAttribute("tableValues", "1.0 0.0"), h.appendChild(u), this.globalData.defs.appendChild(r);
                                var c = createNS("rect");
                                c.setAttribute("width", this.comp.data.w), c.setAttribute("height", this.comp.data.h), c.setAttribute("x", "0"), c.setAttribute("y", "0"), c.setAttribute("fill", "#ffffff"), c.setAttribute("opacity", "0"), l.setAttribute("filter", "url(" + getLocationHref() + "#" + t + ")"), l.appendChild(c), (n = createNS("use")).setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId), l.appendChild(n), featureSupport.maskType || (o.setAttribute("mask-type", "luminance"), r.appendChild(filtersFactory.createAlphaToLuminanceFilter()), i = createNS("g"), l.appendChild(c), i.appendChild(this.layerElement), l.appendChild(i)), this.globalData.defs.appendChild(o)
                            }
                            this.matteMasks[e] = a
                        }
                        return this.matteMasks[e]
                    }, setMatte: function (e) {
                        this.matteElement && this.matteElement.setAttribute("mask", "url(" + getLocationHref() + "#" + e + ")")
                    }
                }, HierarchyElement.prototype = {
                    initHierarchy: function () {
                        this.hierarchy = [], this._isParent = !1, this.checkParenting()
                    }, setHierarchy: function (e) {
                        this.hierarchy = e
                    }, setAsParent: function () {
                        this._isParent = !0
                    }, checkParenting: function () {
                        void 0 !== this.data.parent && this.comp.buildElementParenting(this, this.data.parent, [])
                    }
                }, extendPrototype([RenderableElement, createProxyFunction({
                    initElement: function (e, t, r) {
                        this.initFrame(), this.initBaseData(e, t, r), this.initTransform(e, t, r), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide()
                    }, hide: function () {
                        this.hidden || this.isInRange && !this.isTransparent || ((this.baseElement || this.layerElement).style.display = "none", this.hidden = !0)
                    }, show: function () {
                        this.isInRange && !this.isTransparent && (this.data.hd || ((this.baseElement || this.layerElement).style.display = "block"), this.hidden = !1, this._isFirstFrame = !0)
                    }, renderFrame: function () {
                        this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1))
                    }, renderInnerContent: function () {
                    }, prepareFrame: function (e) {
                        this._mdf = !1, this.prepareRenderableFrame(e), this.prepareProperties(e, this.isInRange), this.checkTransparency()
                    }, destroy: function () {
                        this.innerElem = null, this.destroyBaseElement()
                    }
                })], RenderableDOMElement), extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], IImageElement), IImageElement.prototype.createContent = function () {
                    var e = this.globalData.getAssetsPath(this.assetData);
                    this.innerElem = createNS("image"), this.innerElem.setAttribute("width", this.assetData.w + "px"), this.innerElem.setAttribute("height", this.assetData.h + "px"), this.innerElem.setAttribute("preserveAspectRatio", this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio), this.innerElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", e), this.layerElement.appendChild(this.innerElem)
                }, IImageElement.prototype.sourceRectAtTime = function () {
                    return this.sourceRect
                }, IShapeElement.prototype = {
                    addShapeToModifiers: function (e) {
                        var t, r = this.shapeModifiers.length;
                        for (t = 0; t < r; t += 1) this.shapeModifiers[t].addShape(e)
                    }, isShapeInAnimatedModifiers: function (e) {
                        for (var t = this.shapeModifiers.length; 0 < t;) if (this.shapeModifiers[0].isAnimatedWithShape(e)) return !0;
                        return !1
                    }, renderModifiers: function () {
                        if (this.shapeModifiers.length) {
                            var e, t = this.shapes.length;
                            for (e = 0; e < t; e += 1) this.shapes[e].sh.reset();
                            for (e = (t = this.shapeModifiers.length) - 1; e >= 0 && !this.shapeModifiers[e].processShapes(this._isFirstFrame); e -= 1) ;
                        }
                    }, searchProcessedElement: function (e) {
                        for (var t = this.processedElements, r = 0, n = t.length; r < n;) {
                            if (t[r].elem === e) return t[r].pos;
                            r += 1
                        }
                        return 0
                    }, addProcessedElement: function (e, t) {
                        for (var r = this.processedElements, n = r.length; n;) if (r[n -= 1].elem === e) return void (r[n].pos = t);
                        r.push(new ProcessedElement(e, t))
                    }, prepareFrame: function (e) {
                        this.prepareRenderableFrame(e), this.prepareProperties(e, this.isInRange)
                    }
                };
                var lineCapEnum = {1: "butt", 2: "round", 3: "square"},
                    lineJoinEnum = {1: "miter", 2: "round", 3: "bevel"};

                function SVGShapeData(e, t, r) {
                    this.caches = [], this.styles = [], this.transformers = e, this.lStr = "", this.sh = r, this.lvl = t, this._isAnimated = !!r.k;
                    for (var n = 0, i = e.length; n < i;) {
                        if (e[n].mProps.dynamicProperties.length) {
                            this._isAnimated = !0;
                            break
                        }
                        n += 1
                    }
                }

                function SVGStyleData(e, t) {
                    this.data = e, this.type = e.ty, this.d = "", this.lvl = t, this._mdf = !1, this.closed = !0 === e.hd, this.pElem = createNS("path"), this.msElem = null
                }

                function DashProperty(e, t, r, n) {
                    var i;
                    this.elem = e, this.frameId = -1, this.dataProps = createSizedArray(t.length), this.renderer = r, this.k = !1, this.dashStr = "", this.dashArray = createTypedArray("float32", t.length ? t.length - 1 : 0), this.dashoffset = createTypedArray("float32", 1), this.initDynamicPropertyContainer(n);
                    var a, s = t.length || 0;
                    for (i = 0; i < s; i += 1) a = PropertyFactory.getProp(e, t[i].v, 0, 0, this), this.k = a.k || this.k, this.dataProps[i] = {
                        n: t[i].n,
                        p: a
                    };
                    this.k || this.getValue(!0), this._isAnimated = this.k
                }

                function SVGStrokeStyleData(e, t, r) {
                    this.initDynamicPropertyContainer(e), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(e, t.o, 0, .01, this), this.w = PropertyFactory.getProp(e, t.w, 0, null, this), this.d = new DashProperty(e, t.d || {}, "svg", this), this.c = PropertyFactory.getProp(e, t.c, 1, 255, this), this.style = r, this._isAnimated = !!this._isAnimated
                }

                function SVGFillStyleData(e, t, r) {
                    this.initDynamicPropertyContainer(e), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(e, t.o, 0, .01, this), this.c = PropertyFactory.getProp(e, t.c, 1, 255, this), this.style = r
                }

                function SVGNoStyleData(e, t, r) {
                    this.initDynamicPropertyContainer(e), this.getValue = this.iterateDynamicProperties, this.style = r
                }

                function GradientProperty(e, t, r) {
                    this.data = t, this.c = createTypedArray("uint8c", 4 * t.p);
                    var n = t.k.k[0].s ? t.k.k[0].s.length - 4 * t.p : t.k.k.length - 4 * t.p;
                    this.o = createTypedArray("float32", n), this._cmdf = !1, this._omdf = !1, this._collapsable = this.checkCollapsable(), this._hasOpacity = n, this.initDynamicPropertyContainer(r), this.prop = PropertyFactory.getProp(e, t.k, 1, null, this), this.k = this.prop.k, this.getValue(!0)
                }

                function SVGGradientFillStyleData(e, t, r) {
                    this.initDynamicPropertyContainer(e), this.getValue = this.iterateDynamicProperties, this.initGradientData(e, t, r)
                }

                function SVGGradientStrokeStyleData(e, t, r) {
                    this.initDynamicPropertyContainer(e), this.getValue = this.iterateDynamicProperties, this.w = PropertyFactory.getProp(e, t.w, 0, null, this), this.d = new DashProperty(e, t.d || {}, "svg", this), this.initGradientData(e, t, r), this._isAnimated = !!this._isAnimated
                }

                function ShapeGroupData() {
                    this.it = [], this.prevViewData = [], this.gr = createNS("g")
                }

                function SVGTransformData(e, t, r) {
                    this.transform = {
                        mProps: e,
                        op: t,
                        container: r
                    }, this.elements = [], this._isAnimated = this.transform.mProps.dynamicProperties.length || this.transform.op.effectsSequence.length
                }

                SVGShapeData.prototype.setAsAnimated = function () {
                    this._isAnimated = !0
                }, SVGStyleData.prototype.reset = function () {
                    this.d = "", this._mdf = !1
                }, DashProperty.prototype.getValue = function (e) {
                    if ((this.elem.globalData.frameId !== this.frameId || e) && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf = this._mdf || e, this._mdf)) {
                        var t = 0, r = this.dataProps.length;
                        for ("svg" === this.renderer && (this.dashStr = ""), t = 0; t < r; t += 1) "o" !== this.dataProps[t].n ? "svg" === this.renderer ? this.dashStr += " " + this.dataProps[t].p.v : this.dashArray[t] = this.dataProps[t].p.v : this.dashoffset[0] = this.dataProps[t].p.v
                    }
                }, extendPrototype([DynamicPropertyContainer], DashProperty), extendPrototype([DynamicPropertyContainer], SVGStrokeStyleData), extendPrototype([DynamicPropertyContainer], SVGFillStyleData), extendPrototype([DynamicPropertyContainer], SVGNoStyleData), GradientProperty.prototype.comparePoints = function (e, t) {
                    for (var r = 0, n = this.o.length / 2; r < n;) {
                        if (Math.abs(e[4 * r] - e[4 * t + 2 * r]) > .01) return !1;
                        r += 1
                    }
                    return !0
                }, GradientProperty.prototype.checkCollapsable = function () {
                    if (this.o.length / 2 !== this.c.length / 4) return !1;
                    if (this.data.k.k[0].s) for (var e = 0, t = this.data.k.k.length; e < t;) {
                        if (!this.comparePoints(this.data.k.k[e].s, this.data.p)) return !1;
                        e += 1
                    } else if (!this.comparePoints(this.data.k.k, this.data.p)) return !1;
                    return !0
                }, GradientProperty.prototype.getValue = function (e) {
                    if (this.prop.getValue(), this._mdf = !1, this._cmdf = !1, this._omdf = !1, this.prop._mdf || e) {
                        var t, r, n, i = 4 * this.data.p;
                        for (t = 0; t < i; t += 1) r = t % 4 === 0 ? 100 : 255, n = Math.round(this.prop.v[t] * r), this.c[t] !== n && (this.c[t] = n, this._cmdf = !e);
                        if (this.o.length) for (i = this.prop.v.length, t = 4 * this.data.p; t < i; t += 1) r = t % 2 === 0 ? 100 : 1, n = t % 2 === 0 ? Math.round(100 * this.prop.v[t]) : this.prop.v[t], this.o[t - 4 * this.data.p] !== n && (this.o[t - 4 * this.data.p] = n, this._omdf = !e);
                        this._mdf = !e
                    }
                }, extendPrototype([DynamicPropertyContainer], GradientProperty), SVGGradientFillStyleData.prototype.initGradientData = function (e, t, r) {
                    this.o = PropertyFactory.getProp(e, t.o, 0, .01, this), this.s = PropertyFactory.getProp(e, t.s, 1, null, this), this.e = PropertyFactory.getProp(e, t.e, 1, null, this), this.h = PropertyFactory.getProp(e, t.h || {k: 0}, 0, .01, this), this.a = PropertyFactory.getProp(e, t.a || {k: 0}, 0, degToRads, this), this.g = new GradientProperty(e, t.g, this), this.style = r, this.stops = [], this.setGradientData(r.pElem, t), this.setGradientOpacity(t, r), this._isAnimated = !!this._isAnimated
                }, SVGGradientFillStyleData.prototype.setGradientData = function (e, t) {
                    var r = createElementID(), n = createNS(1 === t.t ? "linearGradient" : "radialGradient");
                    n.setAttribute("id", r), n.setAttribute("spreadMethod", "pad"), n.setAttribute("gradientUnits", "userSpaceOnUse");
                    var i, a, s, o = [];
                    for (s = 4 * t.g.p, a = 0; a < s; a += 4) i = createNS("stop"), n.appendChild(i), o.push(i);
                    e.setAttribute("gf" === t.ty ? "fill" : "stroke", "url(" + getLocationHref() + "#" + r + ")"), this.gf = n, this.cst = o
                }, SVGGradientFillStyleData.prototype.setGradientOpacity = function (e, t) {
                    if (this.g._hasOpacity && !this.g._collapsable) {
                        var r, n, i, a = createNS("mask"), s = createNS("path");
                        a.appendChild(s);
                        var o = createElementID(), l = createElementID();
                        a.setAttribute("id", l);
                        var h = createNS(1 === e.t ? "linearGradient" : "radialGradient");
                        h.setAttribute("id", o), h.setAttribute("spreadMethod", "pad"), h.setAttribute("gradientUnits", "userSpaceOnUse"), i = e.g.k.k[0].s ? e.g.k.k[0].s.length : e.g.k.k.length;
                        var u = this.stops;
                        for (n = 4 * e.g.p; n < i; n += 2) (r = createNS("stop")).setAttribute("stop-color", "rgb(255,255,255)"), h.appendChild(r), u.push(r);
                        s.setAttribute("gf" === e.ty ? "fill" : "stroke", "url(" + getLocationHref() + "#" + o + ")"), "gs" === e.ty && (s.setAttribute("stroke-linecap", lineCapEnum[e.lc || 2]), s.setAttribute("stroke-linejoin", lineJoinEnum[e.lj || 2]), 1 === e.lj && s.setAttribute("stroke-miterlimit", e.ml)), this.of = h, this.ms = a, this.ost = u, this.maskId = l, t.msElem = s
                    }
                }, extendPrototype([DynamicPropertyContainer], SVGGradientFillStyleData), extendPrototype([SVGGradientFillStyleData, DynamicPropertyContainer], SVGGradientStrokeStyleData);
                var buildShapeString = function (e, t, r, n) {
                    if (0 === t) return "";
                    var i, a = e.o, s = e.i, o = e.v, l = " M" + n.applyToPointStringified(o[0][0], o[0][1]);
                    for (i = 1; i < t; i += 1) l += " C" + n.applyToPointStringified(a[i - 1][0], a[i - 1][1]) + " " + n.applyToPointStringified(s[i][0], s[i][1]) + " " + n.applyToPointStringified(o[i][0], o[i][1]);
                    return r && t && (l += " C" + n.applyToPointStringified(a[i - 1][0], a[i - 1][1]) + " " + n.applyToPointStringified(s[0][0], s[0][1]) + " " + n.applyToPointStringified(o[0][0], o[0][1]), l += "z"), l
                }, SVGElementsRenderer = function () {
                    var e = new Matrix, t = new Matrix;

                    function r(e, t, r) {
                        (r || t.transform.op._mdf) && t.transform.container.setAttribute("opacity", t.transform.op.v), (r || t.transform.mProps._mdf) && t.transform.container.setAttribute("transform", t.transform.mProps.v.to2dCSS())
                    }

                    function n() {
                    }

                    function i(r, n, i) {
                        var a, s, o, l, h, u, c, p, f, d, m, y = n.styles.length, g = n.lvl;
                        for (u = 0; u < y; u += 1) {
                            if (l = n.sh._mdf || i, n.styles[u].lvl < g) {
                                for (p = t.reset(), d = g - n.styles[u].lvl, m = n.transformers.length - 1; !l && d > 0;) l = n.transformers[m].mProps._mdf || l, d -= 1, m -= 1;
                                if (l) for (d = g - n.styles[u].lvl, m = n.transformers.length - 1; d > 0;) f = n.transformers[m].mProps.v.props, p.transform(f[0], f[1], f[2], f[3], f[4], f[5], f[6], f[7], f[8], f[9], f[10], f[11], f[12], f[13], f[14], f[15]), d -= 1, m -= 1
                            } else p = e;
                            if (s = (c = n.sh.paths)._length, l) {
                                for (o = "", a = 0; a < s; a += 1) (h = c.shapes[a]) && h._length && (o += buildShapeString(h, h._length, h.c, p));
                                n.caches[u] = o
                            } else o = n.caches[u];
                            n.styles[u].d += !0 === r.hd ? "" : o, n.styles[u]._mdf = l || n.styles[u]._mdf
                        }
                    }

                    function a(e, t, r) {
                        var n = t.style;
                        (t.c._mdf || r) && n.pElem.setAttribute("fill", "rgb(" + bmFloor(t.c.v[0]) + "," + bmFloor(t.c.v[1]) + "," + bmFloor(t.c.v[2]) + ")"), (t.o._mdf || r) && n.pElem.setAttribute("fill-opacity", t.o.v)
                    }

                    function s(e, t, r) {
                        o(e, t, r), l(0, t, r)
                    }

                    function o(e, t, r) {
                        var n, i, a, s, o, l = t.gf, h = t.g._hasOpacity, u = t.s.v, c = t.e.v;
                        if (t.o._mdf || r) {
                            var p = "gf" === e.ty ? "fill-opacity" : "stroke-opacity";
                            t.style.pElem.setAttribute(p, t.o.v)
                        }
                        if (t.s._mdf || r) {
                            var f = 1 === e.t ? "x1" : "cx", d = "x1" === f ? "y1" : "cy";
                            l.setAttribute(f, u[0]), l.setAttribute(d, u[1]), h && !t.g._collapsable && (t.of.setAttribute(f, u[0]), t.of.setAttribute(d, u[1]))
                        }
                        if (t.g._cmdf || r) {
                            n = t.cst;
                            var m = t.g.c;
                            for (a = n.length, i = 0; i < a; i += 1) (s = n[i]).setAttribute("offset", m[4 * i] + "%"), s.setAttribute("stop-color", "rgb(" + m[4 * i + 1] + "," + m[4 * i + 2] + "," + m[4 * i + 3] + ")")
                        }
                        if (h && (t.g._omdf || r)) {
                            var y = t.g.o;
                            for (a = (n = t.g._collapsable ? t.cst : t.ost).length, i = 0; i < a; i += 1) s = n[i], t.g._collapsable || s.setAttribute("offset", y[2 * i] + "%"), s.setAttribute("stop-opacity", y[2 * i + 1])
                        }
                        if (1 === e.t) (t.e._mdf || r) && (l.setAttribute("x2", c[0]), l.setAttribute("y2", c[1]), h && !t.g._collapsable && (t.of.setAttribute("x2", c[0]), t.of.setAttribute("y2", c[1]))); else if ((t.s._mdf || t.e._mdf || r) && (o = Math.sqrt(Math.pow(u[0] - c[0], 2) + Math.pow(u[1] - c[1], 2)), l.setAttribute("r", o), h && !t.g._collapsable && t.of.setAttribute("r", o)), t.e._mdf || t.h._mdf || t.a._mdf || r) {
                            o || (o = Math.sqrt(Math.pow(u[0] - c[0], 2) + Math.pow(u[1] - c[1], 2)));
                            var g = Math.atan2(c[1] - u[1], c[0] - u[0]), v = t.h.v;
                            v >= 1 ? v = .99 : v <= -1 && (v = -.99);
                            var x = o * v, b = Math.cos(g + t.a.v) * x + u[0], k = Math.sin(g + t.a.v) * x + u[1];
                            l.setAttribute("fx", b), l.setAttribute("fy", k), h && !t.g._collapsable && (t.of.setAttribute("fx", b), t.of.setAttribute("fy", k))
                        }
                    }

                    function l(e, t, r) {
                        var n = t.style, i = t.d;
                        i && (i._mdf || r) && i.dashStr && (n.pElem.setAttribute("stroke-dasharray", i.dashStr), n.pElem.setAttribute("stroke-dashoffset", i.dashoffset[0])), t.c && (t.c._mdf || r) && n.pElem.setAttribute("stroke", "rgb(" + bmFloor(t.c.v[0]) + "," + bmFloor(t.c.v[1]) + "," + bmFloor(t.c.v[2]) + ")"), (t.o._mdf || r) && n.pElem.setAttribute("stroke-opacity", t.o.v), (t.w._mdf || r) && (n.pElem.setAttribute("stroke-width", t.w.v), n.msElem && n.msElem.setAttribute("stroke-width", t.w.v))
                    }

                    return {
                        createRenderFunction: function (e) {
                            switch (e.ty) {
                                case"fl":
                                    return a;
                                case"gf":
                                    return o;
                                case"gs":
                                    return s;
                                case"st":
                                    return l;
                                case"sh":
                                case"el":
                                case"rc":
                                case"sr":
                                    return i;
                                case"tr":
                                    return r;
                                case"no":
                                    return n;
                                default:
                                    return null
                            }
                        }
                    }
                }();

                function SVGShapeElement(e, t, r) {
                    this.shapes = [], this.shapesData = e.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.initElement(e, t, r), this.prevViewData = []
                }

                function LetterProps(e, t, r, n, i, a) {
                    this.o = e, this.sw = t, this.sc = r, this.fc = n, this.m = i, this.p = a, this._mdf = {
                        o: !0,
                        sw: !!t,
                        sc: !!r,
                        fc: !!n,
                        m: !0,
                        p: !0
                    }
                }

                function TextProperty(e, t) {
                    this._frameId = initialDefaultFrame, this.pv = "", this.v = "", this.kf = !1, this._isFirstFrame = !0, this._mdf = !1, this.data = t, this.elem = e, this.comp = this.elem.comp, this.keysIndex = 0, this.canResize = !1, this.minimumFontSize = 1, this.effectsSequence = [], this.currentData = {
                        ascent: 0,
                        boxWidth: this.defaultBoxWidth,
                        f: "",
                        fStyle: "",
                        fWeight: "",
                        fc: "",
                        j: "",
                        justifyOffset: "",
                        l: [],
                        lh: 0,
                        lineWidths: [],
                        ls: "",
                        of: "",
                        s: "",
                        sc: "",
                        sw: 0,
                        t: 0,
                        tr: 0,
                        sz: 0,
                        ps: null,
                        fillColorAnim: !1,
                        strokeColorAnim: !1,
                        strokeWidthAnim: !1,
                        yOffset: 0,
                        finalSize: 0,
                        finalText: [],
                        finalLineHeight: 0,
                        __complete: !1
                    }, this.copyData(this.currentData, this.data.d.k[0].s), this.searchProperty() || this.completeTextData(this.currentData)
                }

                extendPrototype([BaseElement, TransformElement, SVGBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableDOMElement], SVGShapeElement), SVGShapeElement.prototype.initSecondaryElement = function () {
                }, SVGShapeElement.prototype.identityMatrix = new Matrix, SVGShapeElement.prototype.buildExpressionInterface = function () {
                }, SVGShapeElement.prototype.createContent = function () {
                    this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes()
                }, SVGShapeElement.prototype.filterUniqueShapes = function () {
                    var e, t, r, n, i = this.shapes.length, a = this.stylesList.length, s = [], o = !1;
                    for (r = 0; r < a; r += 1) {
                        for (n = this.stylesList[r], o = !1, s.length = 0, e = 0; e < i; e += 1) -1 !== (t = this.shapes[e]).styles.indexOf(n) && (s.push(t), o = t._isAnimated || o);
                        s.length > 1 && o && this.setShapesAsAnimated(s)
                    }
                }, SVGShapeElement.prototype.setShapesAsAnimated = function (e) {
                    var t, r = e.length;
                    for (t = 0; t < r; t += 1) e[t].setAsAnimated()
                }, SVGShapeElement.prototype.createStyleElement = function (e, t) {
                    var r, n = new SVGStyleData(e, t), i = n.pElem;
                    return "st" === e.ty ? r = new SVGStrokeStyleData(this, e, n) : "fl" === e.ty ? r = new SVGFillStyleData(this, e, n) : "gf" === e.ty || "gs" === e.ty ? (r = new ("gf" === e.ty ? SVGGradientFillStyleData : SVGGradientStrokeStyleData)(this, e, n), this.globalData.defs.appendChild(r.gf), r.maskId && (this.globalData.defs.appendChild(r.ms), this.globalData.defs.appendChild(r.of), i.setAttribute("mask", "url(" + getLocationHref() + "#" + r.maskId + ")"))) : "no" === e.ty && (r = new SVGNoStyleData(this, e, n)), "st" !== e.ty && "gs" !== e.ty || (i.setAttribute("stroke-linecap", lineCapEnum[e.lc || 2]), i.setAttribute("stroke-linejoin", lineJoinEnum[e.lj || 2]), i.setAttribute("fill-opacity", "0"), 1 === e.lj && i.setAttribute("stroke-miterlimit", e.ml)), 2 === e.r && i.setAttribute("fill-rule", "evenodd"), e.ln && i.setAttribute("id", e.ln), e.cl && i.setAttribute("class", e.cl), e.bm && (i.style["mix-blend-mode"] = getBlendMode(e.bm)), this.stylesList.push(n), this.addToAnimatedContents(e, r), r
                }, SVGShapeElement.prototype.createGroupElement = function (e) {
                    var t = new ShapeGroupData;
                    return e.ln && t.gr.setAttribute("id", e.ln), e.cl && t.gr.setAttribute("class", e.cl), e.bm && (t.gr.style["mix-blend-mode"] = getBlendMode(e.bm)), t
                }, SVGShapeElement.prototype.createTransformElement = function (e, t) {
                    var r = TransformPropertyFactory.getTransformProperty(this, e, this),
                        n = new SVGTransformData(r, r.o, t);
                    return this.addToAnimatedContents(e, n), n
                }, SVGShapeElement.prototype.createShapeElement = function (e, t, r) {
                    var n = 4;
                    "rc" === e.ty ? n = 5 : "el" === e.ty ? n = 6 : "sr" === e.ty && (n = 7);
                    var i = new SVGShapeData(t, r, ShapePropertyFactory.getShapeProp(this, e, n, this));
                    return this.shapes.push(i), this.addShapeToModifiers(i), this.addToAnimatedContents(e, i), i
                }, SVGShapeElement.prototype.addToAnimatedContents = function (e, t) {
                    for (var r = 0, n = this.animatedContents.length; r < n;) {
                        if (this.animatedContents[r].element === t) return;
                        r += 1
                    }
                    this.animatedContents.push({fn: SVGElementsRenderer.createRenderFunction(e), element: t, data: e})
                }, SVGShapeElement.prototype.setElementStyles = function (e) {
                    var t, r = e.styles, n = this.stylesList.length;
                    for (t = 0; t < n; t += 1) this.stylesList[t].closed || r.push(this.stylesList[t])
                }, SVGShapeElement.prototype.reloadShapes = function () {
                    var e;
                    this._isFirstFrame = !0;
                    var t = this.itemsData.length;
                    for (e = 0; e < t; e += 1) this.prevViewData[e] = this.itemsData[e];
                    for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes(), t = this.dynamicProperties.length, e = 0; e < t; e += 1) this.dynamicProperties[e].getValue();
                    this.renderModifiers()
                }, SVGShapeElement.prototype.searchShapes = function (e, t, r, n, i, a, s) {
                    var o, l, h, u, c, p, f = [].concat(a), d = e.length - 1, m = [], y = [];
                    for (o = d; o >= 0; o -= 1) {
                        if ((p = this.searchProcessedElement(e[o])) ? t[o] = r[p - 1] : e[o]._render = s, "fl" === e[o].ty || "st" === e[o].ty || "gf" === e[o].ty || "gs" === e[o].ty || "no" === e[o].ty) p ? t[o].style.closed = !1 : t[o] = this.createStyleElement(e[o], i), e[o]._render && t[o].style.pElem.parentNode !== n && n.appendChild(t[o].style.pElem), m.push(t[o].style); else if ("gr" === e[o].ty) {
                            if (p) for (h = t[o].it.length, l = 0; l < h; l += 1) t[o].prevViewData[l] = t[o].it[l]; else t[o] = this.createGroupElement(e[o]);
                            this.searchShapes(e[o].it, t[o].it, t[o].prevViewData, t[o].gr, i + 1, f, s), e[o]._render && t[o].gr.parentNode !== n && n.appendChild(t[o].gr)
                        } else "tr" === e[o].ty ? (p || (t[o] = this.createTransformElement(e[o], n)), u = t[o].transform, f.push(u)) : "sh" === e[o].ty || "rc" === e[o].ty || "el" === e[o].ty || "sr" === e[o].ty ? (p || (t[o] = this.createShapeElement(e[o], f, i)), this.setElementStyles(t[o])) : "tm" === e[o].ty || "rd" === e[o].ty || "ms" === e[o].ty || "pb" === e[o].ty || "zz" === e[o].ty || "op" === e[o].ty ? (p ? (c = t[o]).closed = !1 : ((c = ShapeModifiers.getModifier(e[o].ty)).init(this, e[o]), t[o] = c, this.shapeModifiers.push(c)), y.push(c)) : "rp" === e[o].ty && (p ? (c = t[o]).closed = !0 : (c = ShapeModifiers.getModifier(e[o].ty), t[o] = c, c.init(this, e, o, t), this.shapeModifiers.push(c), s = !1), y.push(c));
                        this.addProcessedElement(e[o], o + 1)
                    }
                    for (d = m.length, o = 0; o < d; o += 1) m[o].closed = !0;
                    for (d = y.length, o = 0; o < d; o += 1) y[o].closed = !0
                }, SVGShapeElement.prototype.renderInnerContent = function () {
                    var e;
                    this.renderModifiers();
                    var t = this.stylesList.length;
                    for (e = 0; e < t; e += 1) this.stylesList[e].reset();
                    for (this.renderShape(), e = 0; e < t; e += 1) (this.stylesList[e]._mdf || this._isFirstFrame) && (this.stylesList[e].msElem && (this.stylesList[e].msElem.setAttribute("d", this.stylesList[e].d), this.stylesList[e].d = "M0 0" + this.stylesList[e].d), this.stylesList[e].pElem.setAttribute("d", this.stylesList[e].d || "M0 0"))
                }, SVGShapeElement.prototype.renderShape = function () {
                    var e, t, r = this.animatedContents.length;
                    for (e = 0; e < r; e += 1) t = this.animatedContents[e], (this._isFirstFrame || t.element._isAnimated) && !0 !== t.data && t.fn(t.data, t.element, this._isFirstFrame)
                }, SVGShapeElement.prototype.destroy = function () {
                    this.destroyBaseElement(), this.shapesData = null, this.itemsData = null
                }, LetterProps.prototype.update = function (e, t, r, n, i, a) {
                    this._mdf.o = !1, this._mdf.sw = !1, this._mdf.sc = !1, this._mdf.fc = !1, this._mdf.m = !1, this._mdf.p = !1;
                    var s = !1;
                    return this.o !== e && (this.o = e, this._mdf.o = !0, s = !0), this.sw !== t && (this.sw = t, this._mdf.sw = !0, s = !0), this.sc !== r && (this.sc = r, this._mdf.sc = !0, s = !0), this.fc !== n && (this.fc = n, this._mdf.fc = !0, s = !0), this.m !== i && (this.m = i, this._mdf.m = !0, s = !0), !a.length || this.p[0] === a[0] && this.p[1] === a[1] && this.p[4] === a[4] && this.p[5] === a[5] && this.p[12] === a[12] && this.p[13] === a[13] || (this.p = a, this._mdf.p = !0, s = !0), s
                }, TextProperty.prototype.defaultBoxWidth = [0, 0], TextProperty.prototype.copyData = function (e, t) {
                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    return e
                }, TextProperty.prototype.setCurrentData = function (e) {
                    e.__complete || this.completeTextData(e), this.currentData = e, this.currentData.boxWidth = this.currentData.boxWidth || this.defaultBoxWidth, this._mdf = !0
                }, TextProperty.prototype.searchProperty = function () {
                    return this.searchKeyframes()
                }, TextProperty.prototype.searchKeyframes = function () {
                    return this.kf = this.data.d.k.length > 1, this.kf && this.addEffect(this.getKeyframeValue.bind(this)), this.kf
                }, TextProperty.prototype.addEffect = function (e) {
                    this.effectsSequence.push(e), this.elem.addDynamicProperty(this)
                }, TextProperty.prototype.getValue = function (e) {
                    if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length || e) {
                        this.currentData.t = this.data.d.k[this.keysIndex].s.t;
                        var t = this.currentData, r = this.keysIndex;
                        if (this.lock) this.setCurrentData(this.currentData); else {
                            var n;
                            this.lock = !0, this._mdf = !1;
                            var i = this.effectsSequence.length, a = e || this.data.d.k[this.keysIndex].s;
                            for (n = 0; n < i; n += 1) a = r !== this.keysIndex ? this.effectsSequence[n](a, a.t) : this.effectsSequence[n](this.currentData, a.t);
                            t !== a && this.setCurrentData(a), this.v = this.currentData, this.pv = this.v, this.lock = !1, this.frameId = this.elem.globalData.frameId
                        }
                    }
                }, TextProperty.prototype.getKeyframeValue = function () {
                    for (var e = this.data.d.k, t = this.elem.comp.renderedFrame, r = 0, n = e.length; r <= n - 1 && !(r === n - 1 || e[r + 1].t > t);) r += 1;
                    return this.keysIndex !== r && (this.keysIndex = r), this.data.d.k[this.keysIndex].s
                }, TextProperty.prototype.buildFinalText = function (e) {
                    for (var t, r, n = [], i = 0, a = e.length, s = !1; i < a;) t = e.charCodeAt(i), FontManager.isCombinedCharacter(t) ? n[n.length - 1] += e.charAt(i) : t >= 55296 && t <= 56319 ? (r = e.charCodeAt(i + 1)) >= 56320 && r <= 57343 ? (s || FontManager.isModifier(t, r) ? (n[n.length - 1] += e.substr(i, 2), s = !1) : n.push(e.substr(i, 2)), i += 1) : n.push(e.charAt(i)) : t > 56319 ? (r = e.charCodeAt(i + 1), FontManager.isZeroWidthJoiner(t, r) ? (s = !0, n[n.length - 1] += e.substr(i, 2), i += 1) : n.push(e.charAt(i))) : FontManager.isZeroWidthJoiner(t) ? (n[n.length - 1] += e.charAt(i), s = !0) : n.push(e.charAt(i)), i += 1;
                    return n
                }, TextProperty.prototype.completeTextData = function (e) {
                    e.__complete = !0;
                    var t, r, n, i, a, s, o, l = this.elem.globalData.fontManager, h = this.data, u = [], c = 0,
                        p = h.m.g, f = 0, d = 0, m = 0, y = [], g = 0, v = 0, x = l.getFontByName(e.f), b = 0,
                        k = getFontProperties(x);
                    e.fWeight = k.weight, e.fStyle = k.style, e.finalSize = e.s, e.finalText = this.buildFinalText(e.t), r = e.finalText.length, e.finalLineHeight = e.lh;
                    var S, E = e.tr / 1e3 * e.finalSize;
                    if (e.sz) for (var P, w, _ = !0, C = e.sz[0], A = e.sz[1]; _;) {
                        P = 0, g = 0, r = (w = this.buildFinalText(e.t)).length, E = e.tr / 1e3 * e.finalSize;
                        var D = -1;
                        for (t = 0; t < r; t += 1) S = w[t].charCodeAt(0), n = !1, " " === w[t] ? D = t : 13 !== S && 3 !== S || (g = 0, n = !0, P += e.finalLineHeight || 1.2 * e.finalSize), l.chars ? (o = l.getCharData(w[t], x.fStyle, x.fFamily), b = n ? 0 : o.w * e.finalSize / 100) : b = l.measureText(w[t], e.f, e.finalSize), g + b > C && " " !== w[t] ? (-1 === D ? r += 1 : t = D, P += e.finalLineHeight || 1.2 * e.finalSize, w.splice(t, D === t ? 1 : 0, "\r"), D = -1, g = 0) : (g += b, g += E);
                        P += x.ascent * e.finalSize / 100, this.canResize && e.finalSize > this.minimumFontSize && A < P ? (e.finalSize -= 1, e.finalLineHeight = e.finalSize * e.lh / e.s) : (e.finalText = w, r = e.finalText.length, _ = !1)
                    }
                    g = -E, b = 0;
                    var T, M = 0;
                    for (t = 0; t < r; t += 1) if (n = !1, 13 === (S = (T = e.finalText[t]).charCodeAt(0)) || 3 === S ? (M = 0, y.push(g), v = g > v ? g : v, g = -2 * E, i = "", n = !0, m += 1) : i = T, l.chars ? (o = l.getCharData(T, x.fStyle, l.getFontByName(e.f).fFamily), b = n ? 0 : o.w * e.finalSize / 100) : b = l.measureText(i, e.f, e.finalSize), " " === T ? M += b + E : (g += b + E + M, M = 0), u.push({
                        l: b,
                        an: b,
                        add: f,
                        n: n,
                        anIndexes: [],
                        val: i,
                        line: m,
                        animatorJustifyOffset: 0
                    }), 2 == p) {
                        if (f += b, "" === i || " " === i || t === r - 1) {
                            for ("" !== i && " " !== i || (f -= b); d <= t;) u[d].an = f, u[d].ind = c, u[d].extra = b, d += 1;
                            c += 1, f = 0
                        }
                    } else if (3 == p) {
                        if (f += b, "" === i || t === r - 1) {
                            for ("" === i && (f -= b); d <= t;) u[d].an = f, u[d].ind = c, u[d].extra = b, d += 1;
                            f = 0, c += 1
                        }
                    } else u[c].ind = c, u[c].extra = 0, c += 1;
                    if (e.l = u, v = g > v ? g : v, y.push(g), e.sz) e.boxWidth = e.sz[0], e.justifyOffset = 0; else switch (e.boxWidth = v, e.j) {
                        case 1:
                            e.justifyOffset = -e.boxWidth;
                            break;
                        case 2:
                            e.justifyOffset = -e.boxWidth / 2;
                            break;
                        default:
                            e.justifyOffset = 0
                    }
                    e.lineWidths = y;
                    var F, I, B, j, R = h.a;
                    s = R.length;
                    var V = [];
                    for (a = 0; a < s; a += 1) {
                        for ((F = R[a]).a.sc && (e.strokeColorAnim = !0), F.a.sw && (e.strokeWidthAnim = !0), (F.a.fc || F.a.fh || F.a.fs || F.a.fb) && (e.fillColorAnim = !0), j = 0, B = F.s.b, t = 0; t < r; t += 1) (I = u[t]).anIndexes[a] = j, (1 == B && "" !== I.val || 2 == B && "" !== I.val && " " !== I.val || 3 == B && (I.n || " " == I.val || t == r - 1) || 4 == B && (I.n || t == r - 1)) && (1 === F.s.rn && V.push(j), j += 1);
                        h.a[a].s.totalChars = j;
                        var L, N = -1;
                        if (1 === F.s.rn) for (t = 0; t < r; t += 1) N != (I = u[t]).anIndexes[a] && (N = I.anIndexes[a], L = V.splice(Math.floor(Math.random() * V.length), 1)[0]), I.anIndexes[a] = L
                    }
                    e.yOffset = e.finalLineHeight || 1.2 * e.finalSize, e.ls = e.ls || 0, e.ascent = x.ascent * e.finalSize / 100
                }, TextProperty.prototype.updateDocumentData = function (e, t) {
                    t = void 0 === t ? this.keysIndex : t;
                    var r = this.copyData({}, this.data.d.k[t].s);
                    r = this.copyData(r, e), this.data.d.k[t].s = r, this.recalculate(t), this.elem.addDynamicProperty(this)
                }, TextProperty.prototype.recalculate = function (e) {
                    var t = this.data.d.k[e].s;
                    t.__complete = !1, this.keysIndex = 0, this._isFirstFrame = !0, this.getValue(t)
                }, TextProperty.prototype.canResizeFont = function (e) {
                    this.canResize = e, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this)
                }, TextProperty.prototype.setMinimumFontSize = function (e) {
                    this.minimumFontSize = Math.floor(e) || 1, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this)
                };
                var TextSelectorProp = function () {
                    var e = Math.max, t = Math.min, r = Math.floor;

                    function n(e, t) {
                        this._currentTextLength = -1, this.k = !1, this.data = t, this.elem = e, this.comp = e.comp, this.finalS = 0, this.finalE = 0, this.initDynamicPropertyContainer(e), this.s = PropertyFactory.getProp(e, t.s || {k: 0}, 0, 0, this), this.e = "e" in t ? PropertyFactory.getProp(e, t.e, 0, 0, this) : {v: 100}, this.o = PropertyFactory.getProp(e, t.o || {k: 0}, 0, 0, this), this.xe = PropertyFactory.getProp(e, t.xe || {k: 0}, 0, 0, this), this.ne = PropertyFactory.getProp(e, t.ne || {k: 0}, 0, 0, this), this.sm = PropertyFactory.getProp(e, t.sm || {k: 100}, 0, 0, this), this.a = PropertyFactory.getProp(e, t.a, 0, .01, this), this.dynamicProperties.length || this.getValue()
                    }

                    return n.prototype = {
                        getMult: function (n) {
                            this._currentTextLength !== this.elem.textProperty.currentData.l.length && this.getValue();
                            var i = 0, a = 0, s = 1, o = 1;
                            this.ne.v > 0 ? i = this.ne.v / 100 : a = -this.ne.v / 100, this.xe.v > 0 ? s = 1 - this.xe.v / 100 : o = 1 + this.xe.v / 100;
                            var l = BezierFactory.getBezierEasing(i, a, s, o).get, h = 0, u = this.finalS,
                                c = this.finalE, p = this.data.sh;
                            if (2 === p) h = l(h = c === u ? n >= c ? 1 : 0 : e(0, t(.5 / (c - u) + (n - u) / (c - u), 1))); else if (3 === p) h = l(h = c === u ? n >= c ? 0 : 1 : 1 - e(0, t(.5 / (c - u) + (n - u) / (c - u), 1))); else if (4 === p) c === u ? h = 0 : (h = e(0, t(.5 / (c - u) + (n - u) / (c - u), 1))) < .5 ? h *= 2 : h = 1 - 2 * (h - .5), h = l(h); else if (5 === p) {
                                if (c === u) h = 0; else {
                                    var f = c - u, d = -f / 2 + (n = t(e(0, n + .5 - u), c - u)), m = f / 2;
                                    h = Math.sqrt(1 - d * d / (m * m))
                                }
                                h = l(h)
                            } else 6 === p ? (c === u ? h = 0 : (n = t(e(0, n + .5 - u), c - u), h = (1 + Math.cos(Math.PI + 2 * Math.PI * n / (c - u))) / 2), h = l(h)) : (n >= r(u) && (h = e(0, t(n - u < 0 ? t(c, 1) - (u - n) : c - n, 1))), h = l(h));
                            if (100 !== this.sm.v) {
                                var y = .01 * this.sm.v;
                                0 === y && (y = 1e-8);
                                var g = .5 - .5 * y;
                                h < g ? h = 0 : (h = (h - g) / y) > 1 && (h = 1)
                            }
                            return h * this.a.v
                        }, getValue: function (e) {
                            this.iterateDynamicProperties(), this._mdf = e || this._mdf, this._currentTextLength = this.elem.textProperty.currentData.l.length || 0, e && 2 === this.data.r && (this.e.v = this._currentTextLength);
                            var t = 2 === this.data.r ? 1 : 100 / this.data.totalChars, r = this.o.v / t,
                                n = this.s.v / t + r, i = this.e.v / t + r;
                            if (n > i) {
                                var a = n;
                                n = i, i = a
                            }
                            this.finalS = n, this.finalE = i
                        }
                    }, extendPrototype([DynamicPropertyContainer], n), {
                        getTextSelectorProp: function (e, t, r) {
                            return new n(e, t, r)
                        }
                    }
                }();

                function TextAnimatorDataProperty(e, t, r) {
                    var n = {propType: !1}, i = PropertyFactory.getProp, a = t.a;
                    this.a = {
                        r: a.r ? i(e, a.r, 0, degToRads, r) : n,
                        rx: a.rx ? i(e, a.rx, 0, degToRads, r) : n,
                        ry: a.ry ? i(e, a.ry, 0, degToRads, r) : n,
                        sk: a.sk ? i(e, a.sk, 0, degToRads, r) : n,
                        sa: a.sa ? i(e, a.sa, 0, degToRads, r) : n,
                        s: a.s ? i(e, a.s, 1, .01, r) : n,
                        a: a.a ? i(e, a.a, 1, 0, r) : n,
                        o: a.o ? i(e, a.o, 0, .01, r) : n,
                        p: a.p ? i(e, a.p, 1, 0, r) : n,
                        sw: a.sw ? i(e, a.sw, 0, 0, r) : n,
                        sc: a.sc ? i(e, a.sc, 1, 0, r) : n,
                        fc: a.fc ? i(e, a.fc, 1, 0, r) : n,
                        fh: a.fh ? i(e, a.fh, 0, 0, r) : n,
                        fs: a.fs ? i(e, a.fs, 0, .01, r) : n,
                        fb: a.fb ? i(e, a.fb, 0, .01, r) : n,
                        t: a.t ? i(e, a.t, 0, 0, r) : n
                    }, this.s = TextSelectorProp.getTextSelectorProp(e, t.s, r), this.s.t = t.s.t
                }

                function TextAnimatorProperty(e, t, r) {
                    this._isFirstFrame = !0, this._hasMaskedPath = !1, this._frameId = -1, this._textData = e, this._renderType = t, this._elem = r, this._animatorsData = createSizedArray(this._textData.a.length), this._pathData = {}, this._moreOptions = {alignment: {}}, this.renderedLetters = [], this.lettersChangedFlag = !1, this.initDynamicPropertyContainer(r)
                }

                function ITextElement() {
                }

                TextAnimatorProperty.prototype.searchProperties = function () {
                    var e, t, r = this._textData.a.length, n = PropertyFactory.getProp;
                    for (e = 0; e < r; e += 1) t = this._textData.a[e], this._animatorsData[e] = new TextAnimatorDataProperty(this._elem, t, this);
                    this._textData.p && "m" in this._textData.p ? (this._pathData = {
                        a: n(this._elem, this._textData.p.a, 0, 0, this),
                        f: n(this._elem, this._textData.p.f, 0, 0, this),
                        l: n(this._elem, this._textData.p.l, 0, 0, this),
                        r: n(this._elem, this._textData.p.r, 0, 0, this),
                        p: n(this._elem, this._textData.p.p, 0, 0, this),
                        m: this._elem.maskManager.getMaskProperty(this._textData.p.m)
                    }, this._hasMaskedPath = !0) : this._hasMaskedPath = !1, this._moreOptions.alignment = n(this._elem, this._textData.m.a, 1, 0, this)
                }, TextAnimatorProperty.prototype.getMeasures = function (e, t) {
                    if (this.lettersChangedFlag = t, this._mdf || this._isFirstFrame || t || this._hasMaskedPath && this._pathData.m._mdf) {
                        this._isFirstFrame = !1;
                        var r, n, i, a, s, o, l, h, u, c, p, f, d, m, y, g, v, x, b, k = this._moreOptions.alignment.v,
                            S = this._animatorsData, E = this._textData, P = this.mHelper, w = this._renderType,
                            _ = this.renderedLetters.length, C = e.l;
                        if (this._hasMaskedPath) {
                            if (b = this._pathData.m, !this._pathData.n || this._pathData._mdf) {
                                var A, D = b.v;
                                for (this._pathData.r.v && (D = D.reverse()), s = {
                                    tLength: 0,
                                    segments: []
                                }, a = D._length - 1, g = 0, i = 0; i < a; i += 1) A = bez.buildBezierData(D.v[i], D.v[i + 1], [D.o[i][0] - D.v[i][0], D.o[i][1] - D.v[i][1]], [D.i[i + 1][0] - D.v[i + 1][0], D.i[i + 1][1] - D.v[i + 1][1]]), s.tLength += A.segmentLength, s.segments.push(A), g += A.segmentLength;
                                i = a, b.v.c && (A = bez.buildBezierData(D.v[i], D.v[0], [D.o[i][0] - D.v[i][0], D.o[i][1] - D.v[i][1]], [D.i[0][0] - D.v[0][0], D.i[0][1] - D.v[0][1]]), s.tLength += A.segmentLength, s.segments.push(A), g += A.segmentLength), this._pathData.pi = s
                            }
                            if (s = this._pathData.pi, o = this._pathData.f.v, p = 0, c = 1, h = 0, u = !0, m = s.segments, o < 0 && b.v.c) for (s.tLength < Math.abs(o) && (o = -Math.abs(o) % s.tLength), c = (d = m[p = m.length - 1].points).length - 1; o < 0;) o += d[c].partialLength, (c -= 1) < 0 && (c = (d = m[p -= 1].points).length - 1);
                            f = (d = m[p].points)[c - 1], y = (l = d[c]).partialLength
                        }
                        a = C.length, r = 0, n = 0;
                        var T, M, F, I, B, j = 1.2 * e.finalSize * .714, R = !0;
                        F = S.length;
                        var V, L, N, O, z, G, H, q, W, $, U, Y, Q = -1, X = o, K = p, Z = c, J = -1, ee = "",
                            te = this.defaultPropsArray;
                        if (2 === e.j || 1 === e.j) {
                            var re = 0, ne = 0, ie = 2 === e.j ? -.5 : -1, ae = 0, se = !0;
                            for (i = 0; i < a; i += 1) if (C[i].n) {
                                for (re && (re += ne); ae < i;) C[ae].animatorJustifyOffset = re, ae += 1;
                                re = 0, se = !0
                            } else {
                                for (M = 0; M < F; M += 1) (T = S[M].a).t.propType && (se && 2 === e.j && (ne += T.t.v * ie), (B = S[M].s.getMult(C[i].anIndexes[M], E.a[M].s.totalChars)).length ? re += T.t.v * B[0] * ie : re += T.t.v * B * ie);
                                se = !1
                            }
                            for (re && (re += ne); ae < i;) C[ae].animatorJustifyOffset = re, ae += 1
                        }
                        for (i = 0; i < a; i += 1) {
                            if (P.reset(), O = 1, C[i].n) r = 0, n += e.yOffset, n += R ? 1 : 0, o = X, R = !1, this._hasMaskedPath && (c = Z, f = (d = m[p = K].points)[c - 1], y = (l = d[c]).partialLength, h = 0), ee = "", U = "", W = "", Y = "", te = this.defaultPropsArray; else {
                                if (this._hasMaskedPath) {
                                    if (J !== C[i].line) {
                                        switch (e.j) {
                                            case 1:
                                                o += g - e.lineWidths[C[i].line];
                                                break;
                                            case 2:
                                                o += (g - e.lineWidths[C[i].line]) / 2
                                        }
                                        J = C[i].line
                                    }
                                    Q !== C[i].ind && (C[Q] && (o += C[Q].extra), o += C[i].an / 2, Q = C[i].ind), o += k[0] * C[i].an * .005;
                                    var oe = 0;
                                    for (M = 0; M < F; M += 1) (T = S[M].a).p.propType && ((B = S[M].s.getMult(C[i].anIndexes[M], E.a[M].s.totalChars)).length ? oe += T.p.v[0] * B[0] : oe += T.p.v[0] * B), T.a.propType && ((B = S[M].s.getMult(C[i].anIndexes[M], E.a[M].s.totalChars)).length ? oe += T.a.v[0] * B[0] : oe += T.a.v[0] * B);
                                    for (u = !0, this._pathData.a.v && (o = .5 * C[0].an + (g - this._pathData.f.v - .5 * C[0].an - .5 * C[C.length - 1].an) * Q / (a - 1), o += this._pathData.f.v); u;) h + y >= o + oe || !d ? (v = (o + oe - h) / l.partialLength, L = f.point[0] + (l.point[0] - f.point[0]) * v, N = f.point[1] + (l.point[1] - f.point[1]) * v, P.translate(-k[0] * C[i].an * .005, -k[1] * j * .01), u = !1) : d && (h += l.partialLength, (c += 1) >= d.length && (c = 0, m[p += 1] ? d = m[p].points : b.v.c ? (c = 0, d = m[p = 0].points) : (h -= l.partialLength, d = null)), d && (f = l, y = (l = d[c]).partialLength));
                                    V = C[i].an / 2 - C[i].add, P.translate(-V, 0, 0)
                                } else V = C[i].an / 2 - C[i].add, P.translate(-V, 0, 0), P.translate(-k[0] * C[i].an * .005, -k[1] * j * .01, 0);
                                for (M = 0; M < F; M += 1) (T = S[M].a).t.propType && (B = S[M].s.getMult(C[i].anIndexes[M], E.a[M].s.totalChars), 0 === r && 0 === e.j || (this._hasMaskedPath ? B.length ? o += T.t.v * B[0] : o += T.t.v * B : B.length ? r += T.t.v * B[0] : r += T.t.v * B));
                                for (e.strokeWidthAnim && (G = e.sw || 0), e.strokeColorAnim && (z = e.sc ? [e.sc[0], e.sc[1], e.sc[2]] : [0, 0, 0]), e.fillColorAnim && e.fc && (H = [e.fc[0], e.fc[1], e.fc[2]]), M = 0; M < F; M += 1) (T = S[M].a).a.propType && ((B = S[M].s.getMult(C[i].anIndexes[M], E.a[M].s.totalChars)).length ? P.translate(-T.a.v[0] * B[0], -T.a.v[1] * B[1], T.a.v[2] * B[2]) : P.translate(-T.a.v[0] * B, -T.a.v[1] * B, T.a.v[2] * B));
                                for (M = 0; M < F; M += 1) (T = S[M].a).s.propType && ((B = S[M].s.getMult(C[i].anIndexes[M], E.a[M].s.totalChars)).length ? P.scale(1 + (T.s.v[0] - 1) * B[0], 1 + (T.s.v[1] - 1) * B[1], 1) : P.scale(1 + (T.s.v[0] - 1) * B, 1 + (T.s.v[1] - 1) * B, 1));
                                for (M = 0; M < F; M += 1) {
                                    if (T = S[M].a, B = S[M].s.getMult(C[i].anIndexes[M], E.a[M].s.totalChars), T.sk.propType && (B.length ? P.skewFromAxis(-T.sk.v * B[0], T.sa.v * B[1]) : P.skewFromAxis(-T.sk.v * B, T.sa.v * B)), T.r.propType && (B.length ? P.rotateZ(-T.r.v * B[2]) : P.rotateZ(-T.r.v * B)), T.ry.propType && (B.length ? P.rotateY(T.ry.v * B[1]) : P.rotateY(T.ry.v * B)), T.rx.propType && (B.length ? P.rotateX(T.rx.v * B[0]) : P.rotateX(T.rx.v * B)), T.o.propType && (B.length ? O += (T.o.v * B[0] - O) * B[0] : O += (T.o.v * B - O) * B), e.strokeWidthAnim && T.sw.propType && (B.length ? G += T.sw.v * B[0] : G += T.sw.v * B), e.strokeColorAnim && T.sc.propType) for (q = 0; q < 3; q += 1) B.length ? z[q] += (T.sc.v[q] - z[q]) * B[0] : z[q] += (T.sc.v[q] - z[q]) * B;
                                    if (e.fillColorAnim && e.fc) {
                                        if (T.fc.propType) for (q = 0; q < 3; q += 1) B.length ? H[q] += (T.fc.v[q] - H[q]) * B[0] : H[q] += (T.fc.v[q] - H[q]) * B;
                                        T.fh.propType && (H = B.length ? addHueToRGB(H, T.fh.v * B[0]) : addHueToRGB(H, T.fh.v * B)), T.fs.propType && (H = B.length ? addSaturationToRGB(H, T.fs.v * B[0]) : addSaturationToRGB(H, T.fs.v * B)), T.fb.propType && (H = B.length ? addBrightnessToRGB(H, T.fb.v * B[0]) : addBrightnessToRGB(H, T.fb.v * B))
                                    }
                                }
                                for (M = 0; M < F; M += 1) (T = S[M].a).p.propType && (B = S[M].s.getMult(C[i].anIndexes[M], E.a[M].s.totalChars), this._hasMaskedPath ? B.length ? P.translate(0, T.p.v[1] * B[0], -T.p.v[2] * B[1]) : P.translate(0, T.p.v[1] * B, -T.p.v[2] * B) : B.length ? P.translate(T.p.v[0] * B[0], T.p.v[1] * B[1], -T.p.v[2] * B[2]) : P.translate(T.p.v[0] * B, T.p.v[1] * B, -T.p.v[2] * B));
                                if (e.strokeWidthAnim && (W = G < 0 ? 0 : G), e.strokeColorAnim && ($ = "rgb(" + Math.round(255 * z[0]) + "," + Math.round(255 * z[1]) + "," + Math.round(255 * z[2]) + ")"), e.fillColorAnim && e.fc && (U = "rgb(" + Math.round(255 * H[0]) + "," + Math.round(255 * H[1]) + "," + Math.round(255 * H[2]) + ")"), this._hasMaskedPath) {
                                    if (P.translate(0, -e.ls), P.translate(0, k[1] * j * .01 + n, 0), this._pathData.p.v) {
                                        x = (l.point[1] - f.point[1]) / (l.point[0] - f.point[0]);
                                        var le = 180 * Math.atan(x) / Math.PI;
                                        l.point[0] < f.point[0] && (le += 180), P.rotate(-le * Math.PI / 180)
                                    }
                                    P.translate(L, N, 0), o -= k[0] * C[i].an * .005, C[i + 1] && Q !== C[i + 1].ind && (o += C[i].an / 2, o += .001 * e.tr * e.finalSize)
                                } else {
                                    switch (P.translate(r, n, 0), e.ps && P.translate(e.ps[0], e.ps[1] + e.ascent, 0), e.j) {
                                        case 1:
                                            P.translate(C[i].animatorJustifyOffset + e.justifyOffset + (e.boxWidth - e.lineWidths[C[i].line]), 0, 0);
                                            break;
                                        case 2:
                                            P.translate(C[i].animatorJustifyOffset + e.justifyOffset + (e.boxWidth - e.lineWidths[C[i].line]) / 2, 0, 0)
                                    }
                                    P.translate(0, -e.ls), P.translate(V, 0, 0), P.translate(k[0] * C[i].an * .005, k[1] * j * .01, 0), r += C[i].l + .001 * e.tr * e.finalSize
                                }
                                "html" === w ? ee = P.toCSS() : "svg" === w ? ee = P.to2dCSS() : te = [P.props[0], P.props[1], P.props[2], P.props[3], P.props[4], P.props[5], P.props[6], P.props[7], P.props[8], P.props[9], P.props[10], P.props[11], P.props[12], P.props[13], P.props[14], P.props[15]], Y = O
                            }
                            _ <= i ? (I = new LetterProps(Y, W, $, U, ee, te), this.renderedLetters.push(I), _ += 1, this.lettersChangedFlag = !0) : (I = this.renderedLetters[i], this.lettersChangedFlag = I.update(Y, W, $, U, ee, te) || this.lettersChangedFlag)
                        }
                    }
                }, TextAnimatorProperty.prototype.getValue = function () {
                    this._elem.globalData.frameId !== this._frameId && (this._frameId = this._elem.globalData.frameId, this.iterateDynamicProperties())
                }, TextAnimatorProperty.prototype.mHelper = new Matrix, TextAnimatorProperty.prototype.defaultPropsArray = [], extendPrototype([DynamicPropertyContainer], TextAnimatorProperty), ITextElement.prototype.initElement = function (e, t, r) {
                    this.lettersChangedFlag = !0, this.initFrame(), this.initBaseData(e, t, r), this.textProperty = new TextProperty(this, e.t, this.dynamicProperties), this.textAnimator = new TextAnimatorProperty(e.t, this.renderType, this), this.initTransform(e, t, r), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide(), this.textAnimator.searchProperties(this.dynamicProperties)
                }, ITextElement.prototype.prepareFrame = function (e) {
                    this._mdf = !1, this.prepareRenderableFrame(e), this.prepareProperties(e, this.isInRange), (this.textProperty._mdf || this.textProperty._isFirstFrame) && (this.buildNewText(), this.textProperty._isFirstFrame = !1, this.textProperty._mdf = !1)
                }, ITextElement.prototype.createPathShape = function (e, t) {
                    var r, n, i = t.length, a = "";
                    for (r = 0; r < i; r += 1) "sh" === t[r].ty && (n = t[r].ks.k, a += buildShapeString(n, n.i.length, !0, e));
                    return a
                }, ITextElement.prototype.updateDocumentData = function (e, t) {
                    this.textProperty.updateDocumentData(e, t)
                }, ITextElement.prototype.canResizeFont = function (e) {
                    this.textProperty.canResizeFont(e)
                }, ITextElement.prototype.setMinimumFontSize = function (e) {
                    this.textProperty.setMinimumFontSize(e)
                }, ITextElement.prototype.applyTextPropertiesToMatrix = function (e, t, r, n, i) {
                    switch (e.ps && t.translate(e.ps[0], e.ps[1] + e.ascent, 0), t.translate(0, -e.ls, 0), e.j) {
                        case 1:
                            t.translate(e.justifyOffset + (e.boxWidth - e.lineWidths[r]), 0, 0);
                            break;
                        case 2:
                            t.translate(e.justifyOffset + (e.boxWidth - e.lineWidths[r]) / 2, 0, 0)
                    }
                    t.translate(n, i, 0)
                }, ITextElement.prototype.buildColor = function (e) {
                    return "rgb(" + Math.round(255 * e[0]) + "," + Math.round(255 * e[1]) + "," + Math.round(255 * e[2]) + ")"
                }, ITextElement.prototype.emptyProp = new LetterProps, ITextElement.prototype.destroy = function () {
                };
                var emptyShapeData = {shapes: []};

                function SVGTextLottieElement(e, t, r) {
                    this.textSpans = [], this.renderType = "svg", this.initElement(e, t, r)
                }

                function ISolidElement(e, t, r) {
                    this.initElement(e, t, r)
                }

                function NullElement(e, t, r) {
                    this.initFrame(), this.initBaseData(e, t, r), this.initFrame(), this.initTransform(e, t, r), this.initHierarchy()
                }

                function SVGRendererBase() {
                }

                function ICompElement() {
                }

                function SVGCompElement(e, t, r) {
                    this.layers = e.layers, this.supports3d = !0, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(e, t, r), this.tm = e.tm ? PropertyFactory.getProp(this, e.tm, 0, t.frameRate, this) : {_placeholder: !0}
                }

                function SVGRenderer(e, t) {
                    this.animationItem = e, this.layers = null, this.renderedFrame = -1, this.svgElement = createNS("svg");
                    var r = "";
                    if (t && t.title) {
                        var n = createNS("title"), i = createElementID();
                        n.setAttribute("id", i), n.textContent = t.title, this.svgElement.appendChild(n), r += i
                    }
                    if (t && t.description) {
                        var a = createNS("desc"), s = createElementID();
                        a.setAttribute("id", s), a.textContent = t.description, this.svgElement.appendChild(a), r += " " + s
                    }
                    r && this.svgElement.setAttribute("aria-labelledby", r);
                    var o = createNS("defs");
                    this.svgElement.appendChild(o);
                    var l = createNS("g");
                    this.svgElement.appendChild(l), this.layerElement = l, this.renderConfig = {
                        preserveAspectRatio: t && t.preserveAspectRatio || "xMidYMid meet",
                        imagePreserveAspectRatio: t && t.imagePreserveAspectRatio || "xMidYMid slice",
                        contentVisibility: t && t.contentVisibility || "visible",
                        progressiveLoad: t && t.progressiveLoad || !1,
                        hideOnTransparent: !(t && !1 === t.hideOnTransparent),
                        viewBoxOnly: t && t.viewBoxOnly || !1,
                        viewBoxSize: t && t.viewBoxSize || !1,
                        className: t && t.className || "",
                        id: t && t.id || "",
                        focusable: t && t.focusable,
                        filterSize: {
                            width: t && t.filterSize && t.filterSize.width || "100%",
                            height: t && t.filterSize && t.filterSize.height || "100%",
                            x: t && t.filterSize && t.filterSize.x || "0%",
                            y: t && t.filterSize && t.filterSize.y || "0%"
                        },
                        width: t && t.width,
                        height: t && t.height,
                        runExpressions: !t || void 0 === t.runExpressions || t.runExpressions
                    }, this.globalData = {
                        _mdf: !1,
                        frameNum: -1,
                        defs: o,
                        renderConfig: this.renderConfig
                    }, this.elements = [], this.pendingElements = [], this.destroyed = !1, this.rendererType = "svg"
                }

                function CVContextData() {
                    var e;
                    for (this.saved = [], this.cArrPos = 0, this.cTr = new Matrix, this.cO = 1, this.savedOp = createTypedArray("float32", 15), e = 0; e < 15; e += 1) this.saved[e] = createTypedArray("float32", 16);
                    this._length = 15
                }

                function ShapeTransformManager() {
                    this.sequences = {}, this.sequenceList = [], this.transform_key_count = 0
                }

                extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], SVGTextLottieElement), SVGTextLottieElement.prototype.createContent = function () {
                    this.data.singleShape && !this.globalData.fontManager.chars && (this.textContainer = createNS("text"))
                }, SVGTextLottieElement.prototype.buildTextContents = function (e) {
                    for (var t = 0, r = e.length, n = [], i = ""; t < r;) e[t] === String.fromCharCode(13) || e[t] === String.fromCharCode(3) ? (n.push(i), i = "") : i += e[t], t += 1;
                    return n.push(i), n
                }, SVGTextLottieElement.prototype.buildShapeData = function (e, t) {
                    if (e.shapes && e.shapes.length) {
                        var r = e.shapes[0];
                        if (r.it) {
                            var n = r.it[r.it.length - 1];
                            n.s && (n.s.k[0] = t, n.s.k[1] = t)
                        }
                    }
                    return e
                }, SVGTextLottieElement.prototype.buildNewText = function () {
                    var e, t;
                    this.addDynamicProperty(this);
                    var r = this.textProperty.currentData;
                    this.renderedLetters = createSizedArray(r ? r.l.length : 0), r.fc ? this.layerElement.setAttribute("fill", this.buildColor(r.fc)) : this.layerElement.setAttribute("fill", "rgba(0,0,0,0)"), r.sc && (this.layerElement.setAttribute("stroke", this.buildColor(r.sc)), this.layerElement.setAttribute("stroke-width", r.sw)), this.layerElement.setAttribute("font-size", r.finalSize);
                    var n = this.globalData.fontManager.getFontByName(r.f);
                    if (n.fClass) this.layerElement.setAttribute("class", n.fClass); else {
                        this.layerElement.setAttribute("font-family", n.fFamily);
                        var i = r.fWeight, a = r.fStyle;
                        this.layerElement.setAttribute("font-style", a), this.layerElement.setAttribute("font-weight", i)
                    }
                    this.layerElement.setAttribute("aria-label", r.t);
                    var s, o = r.l || [], l = !!this.globalData.fontManager.chars;
                    t = o.length;
                    var h = this.mHelper, u = this.data.singleShape, c = 0, p = 0, f = !0,
                        d = .001 * r.tr * r.finalSize;
                    if (!u || l || r.sz) {
                        var m, y = this.textSpans.length;
                        for (e = 0; e < t; e += 1) {
                            if (this.textSpans[e] || (this.textSpans[e] = {
                                span: null,
                                childSpan: null,
                                glyph: null
                            }), !l || !u || 0 === e) {
                                if (s = y > e ? this.textSpans[e].span : createNS(l ? "g" : "text"), y <= e) {
                                    if (s.setAttribute("stroke-linecap", "butt"), s.setAttribute("stroke-linejoin", "round"), s.setAttribute("stroke-miterlimit", "4"), this.textSpans[e].span = s, l) {
                                        var g = createNS("g");
                                        s.appendChild(g), this.textSpans[e].childSpan = g
                                    }
                                    this.textSpans[e].span = s, this.layerElement.appendChild(s)
                                }
                                s.style.display = "inherit"
                            }
                            if (h.reset(), u && (o[e].n && (c = -d, p += r.yOffset, p += f ? 1 : 0, f = !1), this.applyTextPropertiesToMatrix(r, h, o[e].line, c, p), c += o[e].l || 0, c += d), l) {
                                var v;
                                if (1 === (m = this.globalData.fontManager.getCharData(r.finalText[e], n.fStyle, this.globalData.fontManager.getFontByName(r.f).fFamily)).t) v = new SVGCompElement(m.data, this.globalData, this); else {
                                    var x = emptyShapeData;
                                    m.data && m.data.shapes && (x = this.buildShapeData(m.data, r.finalSize)), v = new SVGShapeElement(x, this.globalData, this)
                                }
                                if (this.textSpans[e].glyph) {
                                    var b = this.textSpans[e].glyph;
                                    this.textSpans[e].childSpan.removeChild(b.layerElement), b.destroy()
                                }
                                this.textSpans[e].glyph = v, v._debug = !0, v.prepareFrame(0), v.renderFrame(), this.textSpans[e].childSpan.appendChild(v.layerElement), 1 === m.t && this.textSpans[e].childSpan.setAttribute("transform", "scale(" + r.finalSize / 100 + "," + r.finalSize / 100 + ")")
                            } else u && s.setAttribute("transform", "translate(" + h.props[12] + "," + h.props[13] + ")"), s.textContent = o[e].val, s.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve")
                        }
                        u && s && s.setAttribute("d", "")
                    } else {
                        var k = this.textContainer, S = "start";
                        switch (r.j) {
                            case 1:
                                S = "end";
                                break;
                            case 2:
                                S = "middle";
                                break;
                            default:
                                S = "start"
                        }
                        k.setAttribute("text-anchor", S), k.setAttribute("letter-spacing", d);
                        var E = this.buildTextContents(r.finalText);
                        for (t = E.length, p = r.ps ? r.ps[1] + r.ascent : 0, e = 0; e < t; e += 1) (s = this.textSpans[e].span || createNS("tspan")).textContent = E[e], s.setAttribute("x", 0), s.setAttribute("y", p), s.style.display = "inherit", k.appendChild(s), this.textSpans[e] || (this.textSpans[e] = {
                            span: null,
                            glyph: null
                        }), this.textSpans[e].span = s, p += r.finalLineHeight;
                        this.layerElement.appendChild(k)
                    }
                    for (; e < this.textSpans.length;) this.textSpans[e].span.style.display = "none", e += 1;
                    this._sizeChanged = !0
                }, SVGTextLottieElement.prototype.sourceRectAtTime = function () {
                    if (this.prepareFrame(this.comp.renderedFrame - this.data.st), this.renderInnerContent(), this._sizeChanged) {
                        this._sizeChanged = !1;
                        var e = this.layerElement.getBBox();
                        this.bbox = {top: e.y, left: e.x, width: e.width, height: e.height}
                    }
                    return this.bbox
                }, SVGTextLottieElement.prototype.getValue = function () {
                    var e, t, r = this.textSpans.length;
                    for (this.renderedFrame = this.comp.renderedFrame, e = 0; e < r; e += 1) (t = this.textSpans[e].glyph) && (t.prepareFrame(this.comp.renderedFrame - this.data.st), t._mdf && (this._mdf = !0))
                }, SVGTextLottieElement.prototype.renderInnerContent = function () {
                    if ((!this.data.singleShape || this._mdf) && (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag)) {
                        var e, t;
                        this._sizeChanged = !0;
                        var r, n, i, a = this.textAnimator.renderedLetters, s = this.textProperty.currentData.l;
                        for (t = s.length, e = 0; e < t; e += 1) s[e].n || (r = a[e], n = this.textSpans[e].span, (i = this.textSpans[e].glyph) && i.renderFrame(), r._mdf.m && n.setAttribute("transform", r.m), r._mdf.o && n.setAttribute("opacity", r.o), r._mdf.sw && n.setAttribute("stroke-width", r.sw), r._mdf.sc && n.setAttribute("stroke", r.sc), r._mdf.fc && n.setAttribute("fill", r.fc))
                    }
                }, extendPrototype([IImageElement], ISolidElement), ISolidElement.prototype.createContent = function () {
                    var e = createNS("rect");
                    e.setAttribute("width", this.data.sw), e.setAttribute("height", this.data.sh), e.setAttribute("fill", this.data.sc), this.layerElement.appendChild(e)
                }, NullElement.prototype.prepareFrame = function (e) {
                    this.prepareProperties(e, !0)
                }, NullElement.prototype.renderFrame = function () {
                }, NullElement.prototype.getBaseElement = function () {
                    return null
                }, NullElement.prototype.destroy = function () {
                }, NullElement.prototype.sourceRectAtTime = function () {
                }, NullElement.prototype.hide = function () {
                }, extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement], NullElement), extendPrototype([BaseRenderer], SVGRendererBase), SVGRendererBase.prototype.createNull = function (e) {
                    return new NullElement(e, this.globalData, this)
                }, SVGRendererBase.prototype.createShape = function (e) {
                    return new SVGShapeElement(e, this.globalData, this)
                }, SVGRendererBase.prototype.createText = function (e) {
                    return new SVGTextLottieElement(e, this.globalData, this)
                }, SVGRendererBase.prototype.createImage = function (e) {
                    return new IImageElement(e, this.globalData, this)
                }, SVGRendererBase.prototype.createSolid = function (e) {
                    return new ISolidElement(e, this.globalData, this)
                }, SVGRendererBase.prototype.configAnimation = function (e) {
                    this.svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg"), this.svgElement.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink"), this.renderConfig.viewBoxSize ? this.svgElement.setAttribute("viewBox", this.renderConfig.viewBoxSize) : this.svgElement.setAttribute("viewBox", "0 0 " + e.w + " " + e.h), this.renderConfig.viewBoxOnly || (this.svgElement.setAttribute("width", e.w), this.svgElement.setAttribute("height", e.h), this.svgElement.style.width = "100%", this.svgElement.style.height = "100%", this.svgElement.style.transform = "translate3d(0,0,0)", this.svgElement.style.contentVisibility = this.renderConfig.contentVisibility), this.renderConfig.width && this.svgElement.setAttribute("width", this.renderConfig.width), this.renderConfig.height && this.svgElement.setAttribute("height", this.renderConfig.height), this.renderConfig.className && this.svgElement.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.svgElement.setAttribute("id", this.renderConfig.id), void 0 !== this.renderConfig.focusable && this.svgElement.setAttribute("focusable", this.renderConfig.focusable), this.svgElement.setAttribute("preserveAspectRatio", this.renderConfig.preserveAspectRatio), this.animationItem.wrapper.appendChild(this.svgElement);
                    var t = this.globalData.defs;
                    this.setupGlobalData(e, t), this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.data = e;
                    var r = createNS("clipPath"), n = createNS("rect");
                    n.setAttribute("width", e.w), n.setAttribute("height", e.h), n.setAttribute("x", 0), n.setAttribute("y", 0);
                    var i = createElementID();
                    r.setAttribute("id", i), r.appendChild(n), this.layerElement.setAttribute("clip-path", "url(" + getLocationHref() + "#" + i + ")"), t.appendChild(r), this.layers = e.layers, this.elements = createSizedArray(e.layers.length)
                }, SVGRendererBase.prototype.destroy = function () {
                    var e;
                    this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), this.layerElement = null, this.globalData.defs = null;
                    var t = this.layers ? this.layers.length : 0;
                    for (e = 0; e < t; e += 1) this.elements[e] && this.elements[e].destroy();
                    this.elements.length = 0, this.destroyed = !0, this.animationItem = null
                }, SVGRendererBase.prototype.updateContainerSize = function () {
                }, SVGRendererBase.prototype.findIndexByInd = function (e) {
                    var t = 0, r = this.layers.length;
                    for (t = 0; t < r; t += 1) if (this.layers[t].ind === e) return t;
                    return -1
                }, SVGRendererBase.prototype.buildItem = function (e) {
                    var t = this.elements;
                    if (!t[e] && 99 !== this.layers[e].ty) {
                        t[e] = !0;
                        var r = this.createItem(this.layers[e]);
                        if (t[e] = r, getExpressionsPlugin() && (0 === this.layers[e].ty && this.globalData.projectInterface.registerComposition(r), r.initExpressions()), this.appendElementInPos(r, e), this.layers[e].tt) {
                            var n = "tp" in this.layers[e] ? this.findIndexByInd(this.layers[e].tp) : e - 1;
                            if (-1 === n) return;
                            if (this.elements[n] && !0 !== this.elements[n]) {
                                var i = t[n].getMatte(this.layers[e].tt);
                                r.setMatte(i)
                            } else this.buildItem(n), this.addPendingElement(r)
                        }
                    }
                }, SVGRendererBase.prototype.checkPendingElements = function () {
                    for (; this.pendingElements.length;) {
                        var e = this.pendingElements.pop();
                        if (e.checkParenting(), e.data.tt) for (var t = 0, r = this.elements.length; t < r;) {
                            if (this.elements[t] === e) {
                                var n = "tp" in e.data ? this.findIndexByInd(e.data.tp) : t - 1,
                                    i = this.elements[n].getMatte(this.layers[t].tt);
                                e.setMatte(i);
                                break
                            }
                            t += 1
                        }
                    }
                }, SVGRendererBase.prototype.renderFrame = function (e) {
                    if (this.renderedFrame !== e && !this.destroyed) {
                        var t;
                        null === e ? e = this.renderedFrame : this.renderedFrame = e, this.globalData.frameNum = e, this.globalData.frameId += 1, this.globalData.projectInterface.currentFrame = e, this.globalData._mdf = !1;
                        var r = this.layers.length;
                        for (this.completeLayers || this.checkLayers(e), t = r - 1; t >= 0; t -= 1) (this.completeLayers || this.elements[t]) && this.elements[t].prepareFrame(e - this.layers[t].st);
                        if (this.globalData._mdf) for (t = 0; t < r; t += 1) (this.completeLayers || this.elements[t]) && this.elements[t].renderFrame()
                    }
                }, SVGRendererBase.prototype.appendElementInPos = function (e, t) {
                    var r = e.getBaseElement();
                    if (r) {
                        for (var n, i = 0; i < t;) this.elements[i] && !0 !== this.elements[i] && this.elements[i].getBaseElement() && (n = this.elements[i].getBaseElement()), i += 1;
                        n ? this.layerElement.insertBefore(r, n) : this.layerElement.appendChild(r)
                    }
                }, SVGRendererBase.prototype.hide = function () {
                    this.layerElement.style.display = "none"
                }, SVGRendererBase.prototype.show = function () {
                    this.layerElement.style.display = "block"
                }, extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement, RenderableDOMElement], ICompElement), ICompElement.prototype.initElement = function (e, t, r) {
                    this.initFrame(), this.initBaseData(e, t, r), this.initTransform(e, t, r), this.initRenderable(), this.initHierarchy(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), !this.data.xt && t.progressiveLoad || this.buildAllItems(), this.hide()
                }, ICompElement.prototype.prepareFrame = function (e) {
                    if (this._mdf = !1, this.prepareRenderableFrame(e), this.prepareProperties(e, this.isInRange), this.isInRange || this.data.xt) {
                        if (this.tm._placeholder) this.renderedFrame = e / this.data.sr; else {
                            var t = this.tm.v;
                            t === this.data.op && (t = this.data.op - 1), this.renderedFrame = t
                        }
                        var r, n = this.elements.length;
                        for (this.completeLayers || this.checkLayers(this.renderedFrame), r = n - 1; r >= 0; r -= 1) (this.completeLayers || this.elements[r]) && (this.elements[r].prepareFrame(this.renderedFrame - this.layers[r].st), this.elements[r]._mdf && (this._mdf = !0))
                    }
                }, ICompElement.prototype.renderInnerContent = function () {
                    var e, t = this.layers.length;
                    for (e = 0; e < t; e += 1) (this.completeLayers || this.elements[e]) && this.elements[e].renderFrame()
                }, ICompElement.prototype.setElements = function (e) {
                    this.elements = e
                }, ICompElement.prototype.getElements = function () {
                    return this.elements
                }, ICompElement.prototype.destroyElements = function () {
                    var e, t = this.layers.length;
                    for (e = 0; e < t; e += 1) this.elements[e] && this.elements[e].destroy()
                }, ICompElement.prototype.destroy = function () {
                    this.destroyElements(), this.destroyBaseElement()
                }, extendPrototype([SVGRendererBase, ICompElement, SVGBaseElement], SVGCompElement), SVGCompElement.prototype.createComp = function (e) {
                    return new SVGCompElement(e, this.globalData, this)
                }, extendPrototype([SVGRendererBase], SVGRenderer), SVGRenderer.prototype.createComp = function (e) {
                    return new SVGCompElement(e, this.globalData, this)
                }, CVContextData.prototype.duplicate = function () {
                    var e = 2 * this._length, t = this.savedOp;
                    this.savedOp = createTypedArray("float32", e), this.savedOp.set(t);
                    var r = 0;
                    for (r = this._length; r < e; r += 1) this.saved[r] = createTypedArray("float32", 16);
                    this._length = e
                }, CVContextData.prototype.reset = function () {
                    this.cArrPos = 0, this.cTr.reset(), this.cO = 1
                }, CVContextData.prototype.popTransform = function () {
                    var e, t = this.saved[this.cArrPos], r = this.cTr.props;
                    for (e = 0; e < 16; e += 1) r[e] = t[e];
                    return t
                }, CVContextData.prototype.popOpacity = function () {
                    var e = this.savedOp[this.cArrPos];
                    return this.cO = e, e
                }, CVContextData.prototype.pop = function () {
                    return this.cArrPos -= 1, {transform: this.popTransform(), opacity: this.popOpacity()}
                }, CVContextData.prototype.push = function () {
                    var e, t = this.cTr.props;
                    this._length <= this.cArrPos && this.duplicate();
                    var r = this.saved[this.cArrPos];
                    for (e = 0; e < 16; e += 1) r[e] = t[e];
                    this.savedOp[this.cArrPos] = this.cO, this.cArrPos += 1
                }, CVContextData.prototype.getTransform = function () {
                    return this.cTr
                }, CVContextData.prototype.getOpacity = function () {
                    return this.cO
                }, CVContextData.prototype.setOpacity = function (e) {
                    this.cO = e
                }, ShapeTransformManager.prototype = {
                    addTransformSequence: function (e) {
                        var t, r = e.length, n = "_";
                        for (t = 0; t < r; t += 1) n += e[t].transform.key + "_";
                        var i = this.sequences[n];
                        return i || (i = {
                            transforms: [].concat(e),
                            finalTransform: new Matrix,
                            _mdf: !1
                        }, this.sequences[n] = i, this.sequenceList.push(i)), i
                    }, processSequence: function (e, t) {
                        for (var r, n = 0, i = e.transforms.length, a = t; n < i && !t;) {
                            if (e.transforms[n].transform.mProps._mdf) {
                                a = !0;
                                break
                            }
                            n += 1
                        }
                        if (a) for (e.finalTransform.reset(), n = i - 1; n >= 0; n -= 1) r = e.transforms[n].transform.mProps.v.props, e.finalTransform.transform(r[0], r[1], r[2], r[3], r[4], r[5], r[6], r[7], r[8], r[9], r[10], r[11], r[12], r[13], r[14], r[15]);
                        e._mdf = a
                    }, processSequences: function (e) {
                        var t, r = this.sequenceList.length;
                        for (t = 0; t < r; t += 1) this.processSequence(this.sequenceList[t], e)
                    }, getNewKey: function () {
                        return this.transform_key_count += 1, "_" + this.transform_key_count
                    }
                };
                var lumaLoader = function () {
                    var e = "__lottie_element_luma_buffer", t = null, r = null, n = null;

                    function i() {
                        t || (n = function () {
                            var t = createNS("svg"), r = createNS("filter"), n = createNS("feColorMatrix");
                            return r.setAttribute("id", e), n.setAttribute("type", "matrix"), n.setAttribute("color-interpolation-filters", "sRGB"), n.setAttribute("values", "0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0"), r.appendChild(n), t.appendChild(r), t.setAttribute("id", e + "_svg"), featureSupport.svgLumaHidden && (t.style.display = "none"), t
                        }(), document.body.appendChild(n), t = createTag("canvas"), (r = t.getContext("2d")).filter = "url(#" + e + ")", r.fillStyle = "rgba(0,0,0,0)", r.fillRect(0, 0, 1, 1))
                    }

                    return {
                        load: i, get: function (n) {
                            return t || i(), t.width = n.width, t.height = n.height, r.filter = "url(#" + e + ")", t
                        }
                    }
                };

                function createCanvas(e, t) {
                    if (featureSupport.offscreenCanvas) return new OffscreenCanvas(e, t);
                    var r = createTag("canvas");
                    return r.width = e, r.height = t, r
                }

                var assetLoader = {
                    loadLumaCanvas: lumaLoader.load,
                    getLumaCanvas: lumaLoader.get,
                    createCanvas: createCanvas
                };

                function CVEffects() {
                }

                function CVMaskElement(e, t) {
                    var r;
                    this.data = e, this.element = t, this.masksProperties = this.data.masksProperties || [], this.viewData = createSizedArray(this.masksProperties.length);
                    var n = this.masksProperties.length, i = !1;
                    for (r = 0; r < n; r += 1) "n" !== this.masksProperties[r].mode && (i = !0), this.viewData[r] = ShapePropertyFactory.getShapeProp(this.element, this.masksProperties[r], 3);
                    this.hasMasks = i, i && this.element.addRenderableComponent(this)
                }

                function CVBaseElement() {
                }

                CVEffects.prototype.renderFrame = function () {
                }, CVMaskElement.prototype.renderFrame = function () {
                    if (this.hasMasks) {
                        var e, t, r, n, i = this.element.finalTransform.mat, a = this.element.canvasContext,
                            s = this.masksProperties.length;
                        for (a.beginPath(), e = 0; e < s; e += 1) if ("n" !== this.masksProperties[e].mode) {
                            var o;
                            this.masksProperties[e].inv && (a.moveTo(0, 0), a.lineTo(this.element.globalData.compSize.w, 0), a.lineTo(this.element.globalData.compSize.w, this.element.globalData.compSize.h), a.lineTo(0, this.element.globalData.compSize.h), a.lineTo(0, 0)), n = this.viewData[e].v, t = i.applyToPointArray(n.v[0][0], n.v[0][1], 0), a.moveTo(t[0], t[1]);
                            var l = n._length;
                            for (o = 1; o < l; o += 1) r = i.applyToTriplePoints(n.o[o - 1], n.i[o], n.v[o]), a.bezierCurveTo(r[0], r[1], r[2], r[3], r[4], r[5]);
                            r = i.applyToTriplePoints(n.o[o - 1], n.i[0], n.v[0]), a.bezierCurveTo(r[0], r[1], r[2], r[3], r[4], r[5])
                        }
                        this.element.globalData.renderer.save(!0), a.clip()
                    }
                }, CVMaskElement.prototype.getMaskProperty = MaskElement.prototype.getMaskProperty, CVMaskElement.prototype.destroy = function () {
                    this.element = null
                };
                var operationsMap = {1: "source-in", 2: "source-out", 3: "source-in", 4: "source-out"};

                function CVShapeData(e, t, r, n) {
                    this.styledShapes = [], this.tr = [0, 0, 0, 0, 0, 0];
                    var i, a = 4;
                    "rc" === t.ty ? a = 5 : "el" === t.ty ? a = 6 : "sr" === t.ty && (a = 7), this.sh = ShapePropertyFactory.getShapeProp(e, t, a, e);
                    var s, o = r.length;
                    for (i = 0; i < o; i += 1) r[i].closed || (s = {
                        transforms: n.addTransformSequence(r[i].transforms),
                        trNodes: []
                    }, this.styledShapes.push(s), r[i].elements.push(s))
                }

                function CVShapeElement(e, t, r) {
                    this.shapes = [], this.shapesData = e.shapes, this.stylesList = [], this.itemsData = [], this.prevViewData = [], this.shapeModifiers = [], this.processedElements = [], this.transformsManager = new ShapeTransformManager, this.initElement(e, t, r)
                }

                function CVTextElement(e, t, r) {
                    this.textSpans = [], this.yOffset = 0, this.fillColorAnim = !1, this.strokeColorAnim = !1, this.strokeWidthAnim = !1, this.stroke = !1, this.fill = !1, this.justifyOffset = 0, this.currentRender = null, this.renderType = "canvas", this.values = {
                        fill: "rgba(0,0,0,0)",
                        stroke: "rgba(0,0,0,0)",
                        sWidth: 0,
                        fValue: ""
                    }, this.initElement(e, t, r)
                }

                function CVImageElement(e, t, r) {
                    this.assetData = t.getAssetData(e.refId), this.img = t.imageLoader.getAsset(this.assetData), this.initElement(e, t, r)
                }

                function CVSolidElement(e, t, r) {
                    this.initElement(e, t, r)
                }

                function CanvasRendererBase(e, t) {
                    this.animationItem = e, this.renderConfig = {
                        clearCanvas: !t || void 0 === t.clearCanvas || t.clearCanvas,
                        context: t && t.context || null,
                        progressiveLoad: t && t.progressiveLoad || !1,
                        preserveAspectRatio: t && t.preserveAspectRatio || "xMidYMid meet",
                        imagePreserveAspectRatio: t && t.imagePreserveAspectRatio || "xMidYMid slice",
                        contentVisibility: t && t.contentVisibility || "visible",
                        className: t && t.className || "",
                        id: t && t.id || ""
                    }, this.renderConfig.dpr = t && t.dpr || 1, this.animationItem.wrapper && (this.renderConfig.dpr = t && t.dpr || window.devicePixelRatio || 1), this.renderedFrame = -1, this.globalData = {
                        frameNum: -1,
                        _mdf: !1,
                        renderConfig: this.renderConfig,
                        currentGlobalAlpha: -1
                    }, this.contextData = new CVContextData, this.elements = [], this.pendingElements = [], this.transformMat = new Matrix, this.completeLayers = !1, this.rendererType = "canvas"
                }

                function CVCompElement(e, t, r) {
                    this.completeLayers = !1, this.layers = e.layers, this.pendingElements = [], this.elements = createSizedArray(this.layers.length), this.initElement(e, t, r), this.tm = e.tm ? PropertyFactory.getProp(this, e.tm, 0, t.frameRate, this) : {_placeholder: !0}
                }

                function CanvasRenderer(e, t) {
                    this.animationItem = e, this.renderConfig = {
                        clearCanvas: !t || void 0 === t.clearCanvas || t.clearCanvas,
                        context: t && t.context || null,
                        progressiveLoad: t && t.progressiveLoad || !1,
                        preserveAspectRatio: t && t.preserveAspectRatio || "xMidYMid meet",
                        imagePreserveAspectRatio: t && t.imagePreserveAspectRatio || "xMidYMid slice",
                        contentVisibility: t && t.contentVisibility || "visible",
                        className: t && t.className || "",
                        id: t && t.id || "",
                        runExpressions: !t || void 0 === t.runExpressions || t.runExpressions
                    }, this.renderConfig.dpr = t && t.dpr || 1, this.animationItem.wrapper && (this.renderConfig.dpr = t && t.dpr || window.devicePixelRatio || 1), this.renderedFrame = -1, this.globalData = {
                        frameNum: -1,
                        _mdf: !1,
                        renderConfig: this.renderConfig,
                        currentGlobalAlpha: -1
                    }, this.contextData = new CVContextData, this.elements = [], this.pendingElements = [], this.transformMat = new Matrix, this.completeLayers = !1, this.rendererType = "canvas"
                }

                function HBaseElement() {
                }

                function HSolidElement(e, t, r) {
                    this.initElement(e, t, r)
                }

                function HShapeElement(e, t, r) {
                    this.shapes = [], this.shapesData = e.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.shapesContainer = createNS("g"), this.initElement(e, t, r), this.prevViewData = [], this.currentBBox = {
                        x: 999999,
                        y: -999999,
                        h: 0,
                        w: 0
                    }
                }

                function HTextElement(e, t, r) {
                    this.textSpans = [], this.textPaths = [], this.currentBBox = {
                        x: 999999,
                        y: -999999,
                        h: 0,
                        w: 0
                    }, this.renderType = "svg", this.isMasked = !1, this.initElement(e, t, r)
                }

                function HCameraElement(e, t, r) {
                    this.initFrame(), this.initBaseData(e, t, r), this.initHierarchy();
                    var n = PropertyFactory.getProp;
                    if (this.pe = n(this, e.pe, 0, 0, this), e.ks.p.s ? (this.px = n(this, e.ks.p.x, 1, 0, this), this.py = n(this, e.ks.p.y, 1, 0, this), this.pz = n(this, e.ks.p.z, 1, 0, this)) : this.p = n(this, e.ks.p, 1, 0, this), e.ks.a && (this.a = n(this, e.ks.a, 1, 0, this)), e.ks.or.k.length && e.ks.or.k[0].to) {
                        var i, a = e.ks.or.k.length;
                        for (i = 0; i < a; i += 1) e.ks.or.k[i].to = null, e.ks.or.k[i].ti = null
                    }
                    this.or = n(this, e.ks.or, 1, degToRads, this), this.or.sh = !0, this.rx = n(this, e.ks.rx, 0, degToRads, this), this.ry = n(this, e.ks.ry, 0, degToRads, this), this.rz = n(this, e.ks.rz, 0, degToRads, this), this.mat = new Matrix, this._prevMat = new Matrix, this._isFirstFrame = !0, this.finalTransform = {mProp: this}
                }

                function HImageElement(e, t, r) {
                    this.assetData = t.getAssetData(e.refId), this.initElement(e, t, r)
                }

                function HybridRendererBase(e, t) {
                    this.animationItem = e, this.layers = null, this.renderedFrame = -1, this.renderConfig = {
                        className: t && t.className || "",
                        imagePreserveAspectRatio: t && t.imagePreserveAspectRatio || "xMidYMid slice",
                        hideOnTransparent: !(t && !1 === t.hideOnTransparent),
                        filterSize: {
                            width: t && t.filterSize && t.filterSize.width || "400%",
                            height: t && t.filterSize && t.filterSize.height || "400%",
                            x: t && t.filterSize && t.filterSize.x || "-100%",
                            y: t && t.filterSize && t.filterSize.y || "-100%"
                        }
                    }, this.globalData = {
                        _mdf: !1,
                        frameNum: -1,
                        renderConfig: this.renderConfig
                    }, this.pendingElements = [], this.elements = [], this.threeDElements = [], this.destroyed = !1, this.camera = null, this.supports3d = !0, this.rendererType = "html"
                }

                function HCompElement(e, t, r) {
                    this.layers = e.layers, this.supports3d = !e.hasMask, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(e, t, r), this.tm = e.tm ? PropertyFactory.getProp(this, e.tm, 0, t.frameRate, this) : {_placeholder: !0}
                }

                function HybridRenderer(e, t) {
                    this.animationItem = e, this.layers = null, this.renderedFrame = -1, this.renderConfig = {
                        className: t && t.className || "",
                        imagePreserveAspectRatio: t && t.imagePreserveAspectRatio || "xMidYMid slice",
                        hideOnTransparent: !(t && !1 === t.hideOnTransparent),
                        filterSize: {
                            width: t && t.filterSize && t.filterSize.width || "400%",
                            height: t && t.filterSize && t.filterSize.height || "400%",
                            x: t && t.filterSize && t.filterSize.x || "-100%",
                            y: t && t.filterSize && t.filterSize.y || "-100%"
                        },
                        runExpressions: !t || void 0 === t.runExpressions || t.runExpressions
                    }, this.globalData = {
                        _mdf: !1,
                        frameNum: -1,
                        renderConfig: this.renderConfig
                    }, this.pendingElements = [], this.elements = [], this.threeDElements = [], this.destroyed = !1, this.camera = null, this.supports3d = !0, this.rendererType = "html"
                }

                CVBaseElement.prototype = {
                    createElements: function () {
                    }, initRendererElement: function () {
                    }, createContainerElements: function () {
                        if (this.data.tt >= 1) {
                            this.buffers = [];
                            var e = this.globalData.canvasContext,
                                t = assetLoader.createCanvas(e.canvas.width, e.canvas.height);
                            this.buffers.push(t);
                            var r = assetLoader.createCanvas(e.canvas.width, e.canvas.height);
                            this.buffers.push(r), this.data.tt >= 3 && !document._isProxy && assetLoader.loadLumaCanvas()
                        }
                        this.canvasContext = this.globalData.canvasContext, this.transformCanvas = this.globalData.transformCanvas, this.renderableEffectsManager = new CVEffects(this)
                    }, createContent: function () {
                    }, setBlendMode: function () {
                        var e = this.globalData;
                        if (e.blendMode !== this.data.bm) {
                            e.blendMode = this.data.bm;
                            var t = getBlendMode(this.data.bm);
                            e.canvasContext.globalCompositeOperation = t
                        }
                    }, createRenderableComponents: function () {
                        this.maskManager = new CVMaskElement(this.data, this)
                    }, hideElement: function () {
                        this.hidden || this.isInRange && !this.isTransparent || (this.hidden = !0)
                    }, showElement: function () {
                        this.isInRange && !this.isTransparent && (this.hidden = !1, this._isFirstFrame = !0, this.maskManager._isFirstFrame = !0)
                    }, clearCanvas: function (e) {
                        e.clearRect(this.transformCanvas.tx, this.transformCanvas.ty, this.transformCanvas.w * this.transformCanvas.sx, this.transformCanvas.h * this.transformCanvas.sy)
                    }, prepareLayer: function () {
                        if (this.data.tt >= 1) {
                            var e = this.buffers[0].getContext("2d");
                            this.clearCanvas(e), e.drawImage(this.canvasContext.canvas, 0, 0), this.currentTransform = this.canvasContext.getTransform(), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.setTransform(this.currentTransform)
                        }
                    }, exitLayer: function () {
                        if (this.data.tt >= 1) {
                            var e = this.buffers[1], t = e.getContext("2d");
                            if (this.clearCanvas(t), t.drawImage(this.canvasContext.canvas, 0, 0), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.setTransform(this.currentTransform), this.comp.getElementById("tp" in this.data ? this.data.tp : this.data.ind - 1).renderFrame(!0), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.data.tt >= 3 && !document._isProxy) {
                                var r = assetLoader.getLumaCanvas(this.canvasContext.canvas);
                                r.getContext("2d").drawImage(this.canvasContext.canvas, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.drawImage(r, 0, 0)
                            }
                            this.canvasContext.globalCompositeOperation = operationsMap[this.data.tt], this.canvasContext.drawImage(e, 0, 0), this.canvasContext.globalCompositeOperation = "destination-over", this.canvasContext.drawImage(this.buffers[0], 0, 0), this.canvasContext.setTransform(this.currentTransform), this.canvasContext.globalCompositeOperation = "source-over"
                        }
                    }, renderFrame: function (e) {
                        if (!this.hidden && !this.data.hd && (1 !== this.data.td || e)) {
                            this.renderTransform(), this.renderRenderable(), this.setBlendMode();
                            var t = 0 === this.data.ty;
                            this.prepareLayer(), this.globalData.renderer.save(t), this.globalData.renderer.ctxTransform(this.finalTransform.mat.props), this.globalData.renderer.ctxOpacity(this.finalTransform.mProp.o.v), this.renderInnerContent(), this.globalData.renderer.restore(t), this.exitLayer(), this.maskManager.hasMasks && this.globalData.renderer.restore(!0), this._isFirstFrame && (this._isFirstFrame = !1)
                        }
                    }, destroy: function () {
                        this.canvasContext = null, this.data = null, this.globalData = null, this.maskManager.destroy()
                    }, mHelper: new Matrix
                }, CVBaseElement.prototype.hide = CVBaseElement.prototype.hideElement, CVBaseElement.prototype.show = CVBaseElement.prototype.showElement, CVShapeData.prototype.setAsAnimated = SVGShapeData.prototype.setAsAnimated, extendPrototype([BaseElement, TransformElement, CVBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableElement], CVShapeElement), CVShapeElement.prototype.initElement = RenderableDOMElement.prototype.initElement, CVShapeElement.prototype.transformHelper = {
                    opacity: 1,
                    _opMdf: !1
                }, CVShapeElement.prototype.dashResetter = [], CVShapeElement.prototype.createContent = function () {
                    this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, [])
                }, CVShapeElement.prototype.createStyleElement = function (e, t) {
                    var r = {
                        data: e,
                        type: e.ty,
                        preTransforms: this.transformsManager.addTransformSequence(t),
                        transforms: [],
                        elements: [],
                        closed: !0 === e.hd
                    }, n = {};
                    if ("fl" === e.ty || "st" === e.ty ? (n.c = PropertyFactory.getProp(this, e.c, 1, 255, this), n.c.k || (r.co = "rgb(" + bmFloor(n.c.v[0]) + "," + bmFloor(n.c.v[1]) + "," + bmFloor(n.c.v[2]) + ")")) : "gf" !== e.ty && "gs" !== e.ty || (n.s = PropertyFactory.getProp(this, e.s, 1, null, this), n.e = PropertyFactory.getProp(this, e.e, 1, null, this), n.h = PropertyFactory.getProp(this, e.h || {k: 0}, 0, .01, this), n.a = PropertyFactory.getProp(this, e.a || {k: 0}, 0, degToRads, this), n.g = new GradientProperty(this, e.g, this)), n.o = PropertyFactory.getProp(this, e.o, 0, .01, this), "st" === e.ty || "gs" === e.ty) {
                        if (r.lc = lineCapEnum[e.lc || 2], r.lj = lineJoinEnum[e.lj || 2], 1 == e.lj && (r.ml = e.ml), n.w = PropertyFactory.getProp(this, e.w, 0, null, this), n.w.k || (r.wi = n.w.v), e.d) {
                            var i = new DashProperty(this, e.d, "canvas", this);
                            n.d = i, n.d.k || (r.da = n.d.dashArray, r.do = n.d.dashoffset[0])
                        }
                    } else r.r = 2 === e.r ? "evenodd" : "nonzero";
                    return this.stylesList.push(r), n.style = r, n
                }, CVShapeElement.prototype.createGroupElement = function () {
                    return {it: [], prevViewData: []}
                }, CVShapeElement.prototype.createTransformElement = function (e) {
                    return {
                        transform: {
                            opacity: 1,
                            _opMdf: !1,
                            key: this.transformsManager.getNewKey(),
                            op: PropertyFactory.getProp(this, e.o, 0, .01, this),
                            mProps: TransformPropertyFactory.getTransformProperty(this, e, this)
                        }
                    }
                }, CVShapeElement.prototype.createShapeElement = function (e) {
                    var t = new CVShapeData(this, e, this.stylesList, this.transformsManager);
                    return this.shapes.push(t), this.addShapeToModifiers(t), t
                }, CVShapeElement.prototype.reloadShapes = function () {
                    var e;
                    this._isFirstFrame = !0;
                    var t = this.itemsData.length;
                    for (e = 0; e < t; e += 1) this.prevViewData[e] = this.itemsData[e];
                    for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, []), t = this.dynamicProperties.length, e = 0; e < t; e += 1) this.dynamicProperties[e].getValue();
                    this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame)
                }, CVShapeElement.prototype.addTransformToStyleList = function (e) {
                    var t, r = this.stylesList.length;
                    for (t = 0; t < r; t += 1) this.stylesList[t].closed || this.stylesList[t].transforms.push(e)
                }, CVShapeElement.prototype.removeTransformFromStyleList = function () {
                    var e, t = this.stylesList.length;
                    for (e = 0; e < t; e += 1) this.stylesList[e].closed || this.stylesList[e].transforms.pop()
                }, CVShapeElement.prototype.closeStyles = function (e) {
                    var t, r = e.length;
                    for (t = 0; t < r; t += 1) e[t].closed = !0
                }, CVShapeElement.prototype.searchShapes = function (e, t, r, n, i) {
                    var a, s, o, l, h, u, c = e.length - 1, p = [], f = [], d = [].concat(i);
                    for (a = c; a >= 0; a -= 1) {
                        if ((l = this.searchProcessedElement(e[a])) ? t[a] = r[l - 1] : e[a]._shouldRender = n, "fl" === e[a].ty || "st" === e[a].ty || "gf" === e[a].ty || "gs" === e[a].ty) l ? t[a].style.closed = !1 : t[a] = this.createStyleElement(e[a], d), p.push(t[a].style); else if ("gr" === e[a].ty) {
                            if (l) for (o = t[a].it.length, s = 0; s < o; s += 1) t[a].prevViewData[s] = t[a].it[s]; else t[a] = this.createGroupElement(e[a]);
                            this.searchShapes(e[a].it, t[a].it, t[a].prevViewData, n, d)
                        } else "tr" === e[a].ty ? (l || (u = this.createTransformElement(e[a]), t[a] = u), d.push(t[a]), this.addTransformToStyleList(t[a])) : "sh" === e[a].ty || "rc" === e[a].ty || "el" === e[a].ty || "sr" === e[a].ty ? l || (t[a] = this.createShapeElement(e[a])) : "tm" === e[a].ty || "rd" === e[a].ty || "pb" === e[a].ty || "zz" === e[a].ty || "op" === e[a].ty ? (l ? (h = t[a]).closed = !1 : ((h = ShapeModifiers.getModifier(e[a].ty)).init(this, e[a]), t[a] = h, this.shapeModifiers.push(h)), f.push(h)) : "rp" === e[a].ty && (l ? (h = t[a]).closed = !0 : (h = ShapeModifiers.getModifier(e[a].ty), t[a] = h, h.init(this, e, a, t), this.shapeModifiers.push(h), n = !1), f.push(h));
                        this.addProcessedElement(e[a], a + 1)
                    }
                    for (this.removeTransformFromStyleList(), this.closeStyles(p), c = f.length, a = 0; a < c; a += 1) f[a].closed = !0
                }, CVShapeElement.prototype.renderInnerContent = function () {
                    this.transformHelper.opacity = 1, this.transformHelper._opMdf = !1, this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame), this.renderShape(this.transformHelper, this.shapesData, this.itemsData, !0)
                }, CVShapeElement.prototype.renderShapeTransform = function (e, t) {
                    (e._opMdf || t.op._mdf || this._isFirstFrame) && (t.opacity = e.opacity, t.opacity *= t.op.v, t._opMdf = !0)
                }, CVShapeElement.prototype.drawLayer = function () {
                    var e, t, r, n, i, a, s, o, l, h = this.stylesList.length, u = this.globalData.renderer,
                        c = this.globalData.canvasContext;
                    for (e = 0; e < h; e += 1) if (("st" !== (o = (l = this.stylesList[e]).type) && "gs" !== o || 0 !== l.wi) && l.data._shouldRender && 0 !== l.coOp && 0 !== this.globalData.currentGlobalAlpha) {
                        for (u.save(), a = l.elements, "st" === o || "gs" === o ? (c.strokeStyle = "st" === o ? l.co : l.grd, c.lineWidth = l.wi, c.lineCap = l.lc, c.lineJoin = l.lj, c.miterLimit = l.ml || 0) : c.fillStyle = "fl" === o ? l.co : l.grd, u.ctxOpacity(l.coOp), "st" !== o && "gs" !== o && c.beginPath(), u.ctxTransform(l.preTransforms.finalTransform.props), r = a.length, t = 0; t < r; t += 1) {
                            for ("st" !== o && "gs" !== o || (c.beginPath(), l.da && (c.setLineDash(l.da), c.lineDashOffset = l.do)), i = (s = a[t].trNodes).length, n = 0; n < i; n += 1) "m" === s[n].t ? c.moveTo(s[n].p[0], s[n].p[1]) : "c" === s[n].t ? c.bezierCurveTo(s[n].pts[0], s[n].pts[1], s[n].pts[2], s[n].pts[3], s[n].pts[4], s[n].pts[5]) : c.closePath();
                            "st" !== o && "gs" !== o || (c.stroke(), l.da && c.setLineDash(this.dashResetter))
                        }
                        "st" !== o && "gs" !== o && c.fill(l.r), u.restore()
                    }
                }, CVShapeElement.prototype.renderShape = function (e, t, r, n) {
                    var i, a;
                    for (a = e, i = t.length - 1; i >= 0; i -= 1) "tr" === t[i].ty ? (a = r[i].transform, this.renderShapeTransform(e, a)) : "sh" === t[i].ty || "el" === t[i].ty || "rc" === t[i].ty || "sr" === t[i].ty ? this.renderPath(t[i], r[i]) : "fl" === t[i].ty ? this.renderFill(t[i], r[i], a) : "st" === t[i].ty ? this.renderStroke(t[i], r[i], a) : "gf" === t[i].ty || "gs" === t[i].ty ? this.renderGradientFill(t[i], r[i], a) : "gr" === t[i].ty ? this.renderShape(a, t[i].it, r[i].it) : t[i].ty;
                    n && this.drawLayer()
                }, CVShapeElement.prototype.renderStyledShape = function (e, t) {
                    if (this._isFirstFrame || t._mdf || e.transforms._mdf) {
                        var r, n, i, a = e.trNodes, s = t.paths, o = s._length;
                        a.length = 0;
                        var l = e.transforms.finalTransform;
                        for (i = 0; i < o; i += 1) {
                            var h = s.shapes[i];
                            if (h && h.v) {
                                for (n = h._length, r = 1; r < n; r += 1) 1 === r && a.push({
                                    t: "m",
                                    p: l.applyToPointArray(h.v[0][0], h.v[0][1], 0)
                                }), a.push({t: "c", pts: l.applyToTriplePoints(h.o[r - 1], h.i[r], h.v[r])});
                                1 === n && a.push({
                                    t: "m",
                                    p: l.applyToPointArray(h.v[0][0], h.v[0][1], 0)
                                }), h.c && n && (a.push({
                                    t: "c",
                                    pts: l.applyToTriplePoints(h.o[r - 1], h.i[0], h.v[0])
                                }), a.push({t: "z"}))
                            }
                        }
                        e.trNodes = a
                    }
                }, CVShapeElement.prototype.renderPath = function (e, t) {
                    if (!0 !== e.hd && e._shouldRender) {
                        var r, n = t.styledShapes.length;
                        for (r = 0; r < n; r += 1) this.renderStyledShape(t.styledShapes[r], t.sh)
                    }
                }, CVShapeElement.prototype.renderFill = function (e, t, r) {
                    var n = t.style;
                    (t.c._mdf || this._isFirstFrame) && (n.co = "rgb(" + bmFloor(t.c.v[0]) + "," + bmFloor(t.c.v[1]) + "," + bmFloor(t.c.v[2]) + ")"), (t.o._mdf || r._opMdf || this._isFirstFrame) && (n.coOp = t.o.v * r.opacity)
                }, CVShapeElement.prototype.renderGradientFill = function (e, t, r) {
                    var n, i = t.style;
                    if (!i.grd || t.g._mdf || t.s._mdf || t.e._mdf || 1 !== e.t && (t.h._mdf || t.a._mdf)) {
                        var a, s = this.globalData.canvasContext, o = t.s.v, l = t.e.v;
                        if (1 === e.t) n = s.createLinearGradient(o[0], o[1], l[0], l[1]); else {
                            var h = Math.sqrt(Math.pow(o[0] - l[0], 2) + Math.pow(o[1] - l[1], 2)),
                                u = Math.atan2(l[1] - o[1], l[0] - o[0]), c = t.h.v;
                            c >= 1 ? c = .99 : c <= -1 && (c = -.99);
                            var p = h * c, f = Math.cos(u + t.a.v) * p + o[0], d = Math.sin(u + t.a.v) * p + o[1];
                            n = s.createRadialGradient(f, d, 0, o[0], o[1], h)
                        }
                        var m = e.g.p, y = t.g.c, g = 1;
                        for (a = 0; a < m; a += 1) t.g._hasOpacity && t.g._collapsable && (g = t.g.o[2 * a + 1]), n.addColorStop(y[4 * a] / 100, "rgba(" + y[4 * a + 1] + "," + y[4 * a + 2] + "," + y[4 * a + 3] + "," + g + ")");
                        i.grd = n
                    }
                    i.coOp = t.o.v * r.opacity
                }, CVShapeElement.prototype.renderStroke = function (e, t, r) {
                    var n = t.style, i = t.d;
                    i && (i._mdf || this._isFirstFrame) && (n.da = i.dashArray, n.do = i.dashoffset[0]), (t.c._mdf || this._isFirstFrame) && (n.co = "rgb(" + bmFloor(t.c.v[0]) + "," + bmFloor(t.c.v[1]) + "," + bmFloor(t.c.v[2]) + ")"), (t.o._mdf || r._opMdf || this._isFirstFrame) && (n.coOp = t.o.v * r.opacity), (t.w._mdf || this._isFirstFrame) && (n.wi = t.w.v)
                }, CVShapeElement.prototype.destroy = function () {
                    this.shapesData = null, this.globalData = null, this.canvasContext = null, this.stylesList.length = 0, this.itemsData.length = 0
                }, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement, ITextElement], CVTextElement), CVTextElement.prototype.tHelper = createTag("canvas").getContext("2d"), CVTextElement.prototype.buildNewText = function () {
                    var e = this.textProperty.currentData;
                    this.renderedLetters = createSizedArray(e.l ? e.l.length : 0);
                    var t = !1;
                    e.fc ? (t = !0, this.values.fill = this.buildColor(e.fc)) : this.values.fill = "rgba(0,0,0,0)", this.fill = t;
                    var r = !1;
                    e.sc && (r = !0, this.values.stroke = this.buildColor(e.sc), this.values.sWidth = e.sw);
                    var n, i, a, s, o, l, h, u, c, p, f, d, m = this.globalData.fontManager.getFontByName(e.f), y = e.l,
                        g = this.mHelper;
                    this.stroke = r, this.values.fValue = e.finalSize + "px " + this.globalData.fontManager.getFontByName(e.f).fFamily, i = e.finalText.length;
                    var v = this.data.singleShape, x = .001 * e.tr * e.finalSize, b = 0, k = 0, S = !0, E = 0;
                    for (n = 0; n < i; n += 1) {
                        s = (a = this.globalData.fontManager.getCharData(e.finalText[n], m.fStyle, this.globalData.fontManager.getFontByName(e.f).fFamily)) && a.data || {}, g.reset(), v && y[n].n && (b = -x, k += e.yOffset, k += S ? 1 : 0, S = !1), c = (h = s.shapes ? s.shapes[0].it : []).length, g.scale(e.finalSize / 100, e.finalSize / 100), v && this.applyTextPropertiesToMatrix(e, g, y[n].line, b, k), f = createSizedArray(c - 1);
                        var P = 0;
                        for (u = 0; u < c; u += 1) if ("sh" === h[u].ty) {
                            for (l = h[u].ks.k.i.length, p = h[u].ks.k, d = [], o = 1; o < l; o += 1) 1 === o && d.push(g.applyToX(p.v[0][0], p.v[0][1], 0), g.applyToY(p.v[0][0], p.v[0][1], 0)), d.push(g.applyToX(p.o[o - 1][0], p.o[o - 1][1], 0), g.applyToY(p.o[o - 1][0], p.o[o - 1][1], 0), g.applyToX(p.i[o][0], p.i[o][1], 0), g.applyToY(p.i[o][0], p.i[o][1], 0), g.applyToX(p.v[o][0], p.v[o][1], 0), g.applyToY(p.v[o][0], p.v[o][1], 0));
                            d.push(g.applyToX(p.o[o - 1][0], p.o[o - 1][1], 0), g.applyToY(p.o[o - 1][0], p.o[o - 1][1], 0), g.applyToX(p.i[0][0], p.i[0][1], 0), g.applyToY(p.i[0][0], p.i[0][1], 0), g.applyToX(p.v[0][0], p.v[0][1], 0), g.applyToY(p.v[0][0], p.v[0][1], 0)), f[P] = d, P += 1
                        }
                        v && (b += y[n].l, b += x), this.textSpans[E] ? this.textSpans[E].elem = f : this.textSpans[E] = {elem: f}, E += 1
                    }
                }, CVTextElement.prototype.renderInnerContent = function () {
                    var e, t, r, n, i, a, s = this.canvasContext;
                    s.font = this.values.fValue, s.lineCap = "butt", s.lineJoin = "miter", s.miterLimit = 4, this.data.singleShape || this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag);
                    var o, l = this.textAnimator.renderedLetters, h = this.textProperty.currentData.l;
                    t = h.length;
                    var u, c, p = null, f = null, d = null;
                    for (e = 0; e < t; e += 1) if (!h[e].n) {
                        if ((o = l[e]) && (this.globalData.renderer.save(), this.globalData.renderer.ctxTransform(o.p), this.globalData.renderer.ctxOpacity(o.o)), this.fill) {
                            for (o && o.fc ? p !== o.fc && (p = o.fc, s.fillStyle = o.fc) : p !== this.values.fill && (p = this.values.fill, s.fillStyle = this.values.fill), n = (u = this.textSpans[e].elem).length, this.globalData.canvasContext.beginPath(), r = 0; r < n; r += 1) for (a = (c = u[r]).length, this.globalData.canvasContext.moveTo(c[0], c[1]), i = 2; i < a; i += 6) this.globalData.canvasContext.bezierCurveTo(c[i], c[i + 1], c[i + 2], c[i + 3], c[i + 4], c[i + 5]);
                            this.globalData.canvasContext.closePath(), this.globalData.canvasContext.fill()
                        }
                        if (this.stroke) {
                            for (o && o.sw ? d !== o.sw && (d = o.sw, s.lineWidth = o.sw) : d !== this.values.sWidth && (d = this.values.sWidth, s.lineWidth = this.values.sWidth), o && o.sc ? f !== o.sc && (f = o.sc, s.strokeStyle = o.sc) : f !== this.values.stroke && (f = this.values.stroke, s.strokeStyle = this.values.stroke), n = (u = this.textSpans[e].elem).length, this.globalData.canvasContext.beginPath(), r = 0; r < n; r += 1) for (a = (c = u[r]).length, this.globalData.canvasContext.moveTo(c[0], c[1]), i = 2; i < a; i += 6) this.globalData.canvasContext.bezierCurveTo(c[i], c[i + 1], c[i + 2], c[i + 3], c[i + 4], c[i + 5]);
                            this.globalData.canvasContext.closePath(), this.globalData.canvasContext.stroke()
                        }
                        o && this.globalData.renderer.restore()
                    }
                }, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVImageElement), CVImageElement.prototype.initElement = SVGShapeElement.prototype.initElement, CVImageElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame, CVImageElement.prototype.createContent = function () {
                    if (this.img.width && (this.assetData.w !== this.img.width || this.assetData.h !== this.img.height)) {
                        var e = createTag("canvas");
                        e.width = this.assetData.w, e.height = this.assetData.h;
                        var t, r, n = e.getContext("2d"), i = this.img.width, a = this.img.height, s = i / a,
                            o = this.assetData.w / this.assetData.h,
                            l = this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio;
                        s > o && "xMidYMid slice" === l || s < o && "xMidYMid slice" !== l ? t = (r = a) * o : r = (t = i) / o, n.drawImage(this.img, (i - t) / 2, (a - r) / 2, t, r, 0, 0, this.assetData.w, this.assetData.h), this.img = e
                    }
                }, CVImageElement.prototype.renderInnerContent = function () {
                    this.canvasContext.drawImage(this.img, 0, 0)
                }, CVImageElement.prototype.destroy = function () {
                    this.img = null
                }, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVSolidElement), CVSolidElement.prototype.initElement = SVGShapeElement.prototype.initElement, CVSolidElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame, CVSolidElement.prototype.renderInnerContent = function () {
                    var e = this.canvasContext;
                    e.fillStyle = this.data.sc, e.fillRect(0, 0, this.data.sw, this.data.sh)
                }, extendPrototype([BaseRenderer], CanvasRendererBase), CanvasRendererBase.prototype.createShape = function (e) {
                    return new CVShapeElement(e, this.globalData, this)
                }, CanvasRendererBase.prototype.createText = function (e) {
                    return new CVTextElement(e, this.globalData, this)
                }, CanvasRendererBase.prototype.createImage = function (e) {
                    return new CVImageElement(e, this.globalData, this)
                }, CanvasRendererBase.prototype.createSolid = function (e) {
                    return new CVSolidElement(e, this.globalData, this)
                }, CanvasRendererBase.prototype.createNull = SVGRenderer.prototype.createNull, CanvasRendererBase.prototype.ctxTransform = function (e) {
                    if (1 !== e[0] || 0 !== e[1] || 0 !== e[4] || 1 !== e[5] || 0 !== e[12] || 0 !== e[13]) if (this.renderConfig.clearCanvas) {
                        this.transformMat.cloneFromProps(e);
                        var t = this.contextData.getTransform(), r = t.props;
                        this.transformMat.transform(r[0], r[1], r[2], r[3], r[4], r[5], r[6], r[7], r[8], r[9], r[10], r[11], r[12], r[13], r[14], r[15]), t.cloneFromProps(this.transformMat.props);
                        var n = t.props;
                        this.canvasContext.setTransform(n[0], n[1], n[4], n[5], n[12], n[13])
                    } else this.canvasContext.transform(e[0], e[1], e[4], e[5], e[12], e[13])
                }, CanvasRendererBase.prototype.ctxOpacity = function (e) {
                    var t = this.contextData.getOpacity();
                    if (!this.renderConfig.clearCanvas) return this.canvasContext.globalAlpha *= e < 0 ? 0 : e, void (this.globalData.currentGlobalAlpha = t);
                    t *= e < 0 ? 0 : e, this.contextData.setOpacity(t), this.globalData.currentGlobalAlpha !== t && (this.canvasContext.globalAlpha = t, this.globalData.currentGlobalAlpha = t)
                }, CanvasRendererBase.prototype.reset = function () {
                    this.renderConfig.clearCanvas ? this.contextData.reset() : this.canvasContext.restore()
                }, CanvasRendererBase.prototype.save = function (e) {
                    this.renderConfig.clearCanvas ? (e && this.canvasContext.save(), this.contextData.push()) : this.canvasContext.save()
                }, CanvasRendererBase.prototype.restore = function (e) {
                    if (this.renderConfig.clearCanvas) {
                        e && (this.canvasContext.restore(), this.globalData.blendMode = "source-over");
                        var t = this.contextData.pop(), r = t.transform, n = t.opacity;
                        this.canvasContext.setTransform(r[0], r[1], r[4], r[5], r[12], r[13]), this.globalData.currentGlobalAlpha !== n && (this.canvasContext.globalAlpha = n, this.globalData.currentGlobalAlpha = n)
                    } else this.canvasContext.restore()
                }, CanvasRendererBase.prototype.configAnimation = function (e) {
                    if (this.animationItem.wrapper) {
                        this.animationItem.container = createTag("canvas");
                        var t = this.animationItem.container.style;
                        t.width = "100%", t.height = "100%";
                        var r = "0px 0px 0px";
                        t.transformOrigin = r, t.mozTransformOrigin = r, t.webkitTransformOrigin = r, t["-webkit-transform"] = r, t.contentVisibility = this.renderConfig.contentVisibility, this.animationItem.wrapper.appendChild(this.animationItem.container), this.canvasContext = this.animationItem.container.getContext("2d"), this.renderConfig.className && this.animationItem.container.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.animationItem.container.setAttribute("id", this.renderConfig.id)
                    } else this.canvasContext = this.renderConfig.context;
                    this.data = e, this.layers = e.layers, this.transformCanvas = {
                        w: e.w,
                        h: e.h,
                        sx: 0,
                        sy: 0,
                        tx: 0,
                        ty: 0
                    }, this.setupGlobalData(e, document.body), this.globalData.canvasContext = this.canvasContext, this.globalData.renderer = this, this.globalData.isDashed = !1, this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.globalData.transformCanvas = this.transformCanvas, this.elements = createSizedArray(e.layers.length), this.updateContainerSize()
                }, CanvasRendererBase.prototype.updateContainerSize = function (e, t) {
                    var r, n, i, a;
                    if (this.reset(), e ? (r = e, n = t, this.canvasContext.canvas.width = r, this.canvasContext.canvas.height = n) : (this.animationItem.wrapper && this.animationItem.container ? (r = this.animationItem.wrapper.offsetWidth, n = this.animationItem.wrapper.offsetHeight) : (r = this.canvasContext.canvas.width, n = this.canvasContext.canvas.height), this.canvasContext.canvas.width = r * this.renderConfig.dpr, this.canvasContext.canvas.height = n * this.renderConfig.dpr), -1 !== this.renderConfig.preserveAspectRatio.indexOf("meet") || -1 !== this.renderConfig.preserveAspectRatio.indexOf("slice")) {
                        var s = this.renderConfig.preserveAspectRatio.split(" "), o = s[1] || "meet",
                            l = s[0] || "xMidYMid", h = l.substr(0, 4), u = l.substr(4);
                        i = r / n, (a = this.transformCanvas.w / this.transformCanvas.h) > i && "meet" === o || a < i && "slice" === o ? (this.transformCanvas.sx = r / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = r / (this.transformCanvas.w / this.renderConfig.dpr)) : (this.transformCanvas.sx = n / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.sy = n / (this.transformCanvas.h / this.renderConfig.dpr)), this.transformCanvas.tx = "xMid" === h && (a < i && "meet" === o || a > i && "slice" === o) ? (r - this.transformCanvas.w * (n / this.transformCanvas.h)) / 2 * this.renderConfig.dpr : "xMax" === h && (a < i && "meet" === o || a > i && "slice" === o) ? (r - this.transformCanvas.w * (n / this.transformCanvas.h)) * this.renderConfig.dpr : 0, this.transformCanvas.ty = "YMid" === u && (a > i && "meet" === o || a < i && "slice" === o) ? (n - this.transformCanvas.h * (r / this.transformCanvas.w)) / 2 * this.renderConfig.dpr : "YMax" === u && (a > i && "meet" === o || a < i && "slice" === o) ? (n - this.transformCanvas.h * (r / this.transformCanvas.w)) * this.renderConfig.dpr : 0
                    } else "none" === this.renderConfig.preserveAspectRatio ? (this.transformCanvas.sx = r / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = n / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.tx = 0, this.transformCanvas.ty = 0) : (this.transformCanvas.sx = this.renderConfig.dpr, this.transformCanvas.sy = this.renderConfig.dpr, this.transformCanvas.tx = 0, this.transformCanvas.ty = 0);
                    this.transformCanvas.props = [this.transformCanvas.sx, 0, 0, 0, 0, this.transformCanvas.sy, 0, 0, 0, 0, 1, 0, this.transformCanvas.tx, this.transformCanvas.ty, 0, 1], this.ctxTransform(this.transformCanvas.props), this.canvasContext.beginPath(), this.canvasContext.rect(0, 0, this.transformCanvas.w, this.transformCanvas.h), this.canvasContext.closePath(), this.canvasContext.clip(), this.renderFrame(this.renderedFrame, !0)
                }, CanvasRendererBase.prototype.destroy = function () {
                    var e;
                    for (this.renderConfig.clearCanvas && this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), e = (this.layers ? this.layers.length : 0) - 1; e >= 0; e -= 1) this.elements[e] && this.elements[e].destroy();
                    this.elements.length = 0, this.globalData.canvasContext = null, this.animationItem.container = null, this.destroyed = !0
                }, CanvasRendererBase.prototype.renderFrame = function (e, t) {
                    if ((this.renderedFrame !== e || !0 !== this.renderConfig.clearCanvas || t) && !this.destroyed && -1 !== e) {
                        var r;
                        this.renderedFrame = e, this.globalData.frameNum = e - this.animationItem._isFirstFrame, this.globalData.frameId += 1, this.globalData._mdf = !this.renderConfig.clearCanvas || t, this.globalData.projectInterface.currentFrame = e;
                        var n = this.layers.length;
                        for (this.completeLayers || this.checkLayers(e), r = 0; r < n; r += 1) (this.completeLayers || this.elements[r]) && this.elements[r].prepareFrame(e - this.layers[r].st);
                        if (this.globalData._mdf) {
                            for (!0 === this.renderConfig.clearCanvas ? this.canvasContext.clearRect(0, 0, this.transformCanvas.w, this.transformCanvas.h) : this.save(), r = n - 1; r >= 0; r -= 1) (this.completeLayers || this.elements[r]) && this.elements[r].renderFrame();
                            !0 !== this.renderConfig.clearCanvas && this.restore()
                        }
                    }
                }, CanvasRendererBase.prototype.buildItem = function (e) {
                    var t = this.elements;
                    if (!t[e] && 99 !== this.layers[e].ty) {
                        var r = this.createItem(this.layers[e], this, this.globalData);
                        t[e] = r, r.initExpressions()
                    }
                }, CanvasRendererBase.prototype.checkPendingElements = function () {
                    for (; this.pendingElements.length;) this.pendingElements.pop().checkParenting()
                }, CanvasRendererBase.prototype.hide = function () {
                    this.animationItem.container.style.display = "none"
                }, CanvasRendererBase.prototype.show = function () {
                    this.animationItem.container.style.display = "block"
                }, extendPrototype([CanvasRendererBase, ICompElement, CVBaseElement], CVCompElement), CVCompElement.prototype.renderInnerContent = function () {
                    var e, t = this.canvasContext;
                    for (t.beginPath(), t.moveTo(0, 0), t.lineTo(this.data.w, 0), t.lineTo(this.data.w, this.data.h), t.lineTo(0, this.data.h), t.lineTo(0, 0), t.clip(), e = this.layers.length - 1; e >= 0; e -= 1) (this.completeLayers || this.elements[e]) && this.elements[e].renderFrame()
                }, CVCompElement.prototype.destroy = function () {
                    var e;
                    for (e = this.layers.length - 1; e >= 0; e -= 1) this.elements[e] && this.elements[e].destroy();
                    this.layers = null, this.elements = null
                }, CVCompElement.prototype.createComp = function (e) {
                    return new CVCompElement(e, this.globalData, this)
                }, extendPrototype([CanvasRendererBase], CanvasRenderer), CanvasRenderer.prototype.createComp = function (e) {
                    return new CVCompElement(e, this.globalData, this)
                }, HBaseElement.prototype = {
                    checkBlendMode: function () {
                    }, initRendererElement: function () {
                        this.baseElement = createTag(this.data.tg || "div"), this.data.hasMask ? (this.svgElement = createNS("svg"), this.layerElement = createNS("g"), this.maskedElement = this.layerElement, this.svgElement.appendChild(this.layerElement), this.baseElement.appendChild(this.svgElement)) : this.layerElement = this.baseElement, styleDiv(this.baseElement)
                    }, createContainerElements: function () {
                        this.renderableEffectsManager = new CVEffects(this), this.transformedElement = this.baseElement, this.maskedElement = this.layerElement, this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), 0 !== this.data.bm && this.setBlendMode()
                    }, renderElement: function () {
                        var e = this.transformedElement ? this.transformedElement.style : {};
                        if (this.finalTransform._matMdf) {
                            var t = this.finalTransform.mat.toCSS();
                            e.transform = t, e.webkitTransform = t
                        }
                        this.finalTransform._opMdf && (e.opacity = this.finalTransform.mProp.o.v)
                    }, renderFrame: function () {
                        this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1))
                    }, destroy: function () {
                        this.layerElement = null, this.transformedElement = null, this.matteElement && (this.matteElement = null), this.maskManager && (this.maskManager.destroy(), this.maskManager = null)
                    }, createRenderableComponents: function () {
                        this.maskManager = new MaskElement(this.data, this, this.globalData)
                    }, addEffects: function () {
                    }, setMatte: function () {
                    }
                }, HBaseElement.prototype.getBaseElement = SVGBaseElement.prototype.getBaseElement, HBaseElement.prototype.destroyBaseElement = HBaseElement.prototype.destroy, HBaseElement.prototype.buildElementParenting = BaseRenderer.prototype.buildElementParenting, extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], HSolidElement), HSolidElement.prototype.createContent = function () {
                    var e;
                    this.data.hasMask ? ((e = createNS("rect")).setAttribute("width", this.data.sw), e.setAttribute("height", this.data.sh), e.setAttribute("fill", this.data.sc), this.svgElement.setAttribute("width", this.data.sw), this.svgElement.setAttribute("height", this.data.sh)) : ((e = createTag("div")).style.width = this.data.sw + "px", e.style.height = this.data.sh + "px", e.style.backgroundColor = this.data.sc), this.layerElement.appendChild(e)
                }, extendPrototype([BaseElement, TransformElement, HSolidElement, SVGShapeElement, HBaseElement, HierarchyElement, FrameElement, RenderableElement], HShapeElement), HShapeElement.prototype._renderShapeFrame = HShapeElement.prototype.renderInnerContent, HShapeElement.prototype.createContent = function () {
                    var e;
                    if (this.baseElement.style.fontSize = 0, this.data.hasMask) this.layerElement.appendChild(this.shapesContainer), e = this.svgElement; else {
                        e = createNS("svg");
                        var t = this.comp.data ? this.comp.data : this.globalData.compSize;
                        e.setAttribute("width", t.w), e.setAttribute("height", t.h), e.appendChild(this.shapesContainer), this.layerElement.appendChild(e)
                    }
                    this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.shapesContainer, 0, [], !0), this.filterUniqueShapes(), this.shapeCont = e
                }, HShapeElement.prototype.getTransformedPoint = function (e, t) {
                    var r, n = e.length;
                    for (r = 0; r < n; r += 1) t = e[r].mProps.v.applyToPointArray(t[0], t[1], 0);
                    return t
                }, HShapeElement.prototype.calculateShapeBoundingBox = function (e, t) {
                    var r, n, i, a, s, o = e.sh.v, l = e.transformers, h = o._length;
                    if (!(h <= 1)) {
                        for (r = 0; r < h - 1; r += 1) n = this.getTransformedPoint(l, o.v[r]), i = this.getTransformedPoint(l, o.o[r]), a = this.getTransformedPoint(l, o.i[r + 1]), s = this.getTransformedPoint(l, o.v[r + 1]), this.checkBounds(n, i, a, s, t);
                        o.c && (n = this.getTransformedPoint(l, o.v[r]), i = this.getTransformedPoint(l, o.o[r]), a = this.getTransformedPoint(l, o.i[0]), s = this.getTransformedPoint(l, o.v[0]), this.checkBounds(n, i, a, s, t))
                    }
                }, HShapeElement.prototype.checkBounds = function (e, t, r, n, i) {
                    this.getBoundsOfCurve(e, t, r, n);
                    var a = this.shapeBoundingBox;
                    i.x = bmMin(a.left, i.x), i.xMax = bmMax(a.right, i.xMax), i.y = bmMin(a.top, i.y), i.yMax = bmMax(a.bottom, i.yMax)
                }, HShapeElement.prototype.shapeBoundingBox = {
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0
                }, HShapeElement.prototype.tempBoundingBox = {
                    x: 0,
                    xMax: 0,
                    y: 0,
                    yMax: 0,
                    width: 0,
                    height: 0
                }, HShapeElement.prototype.getBoundsOfCurve = function (e, t, r, n) {
                    for (var i, a, s, o, l, h, u, c = [[e[0], n[0]], [e[1], n[1]]], p = 0; p < 2; ++p) a = 6 * e[p] - 12 * t[p] + 6 * r[p], i = -3 * e[p] + 9 * t[p] - 9 * r[p] + 3 * n[p], s = 3 * t[p] - 3 * e[p], a |= 0, s |= 0, 0 === (i |= 0) && 0 === a || (0 === i ? (o = -s / a) > 0 && o < 1 && c[p].push(this.calculateF(o, e, t, r, n, p)) : (l = a * a - 4 * s * i) >= 0 && ((h = (-a + bmSqrt(l)) / (2 * i)) > 0 && h < 1 && c[p].push(this.calculateF(h, e, t, r, n, p)), (u = (-a - bmSqrt(l)) / (2 * i)) > 0 && u < 1 && c[p].push(this.calculateF(u, e, t, r, n, p))));
                    this.shapeBoundingBox.left = bmMin.apply(null, c[0]), this.shapeBoundingBox.top = bmMin.apply(null, c[1]), this.shapeBoundingBox.right = bmMax.apply(null, c[0]), this.shapeBoundingBox.bottom = bmMax.apply(null, c[1])
                }, HShapeElement.prototype.calculateF = function (e, t, r, n, i, a) {
                    return bmPow(1 - e, 3) * t[a] + 3 * bmPow(1 - e, 2) * e * r[a] + 3 * (1 - e) * bmPow(e, 2) * n[a] + bmPow(e, 3) * i[a]
                }, HShapeElement.prototype.calculateBoundingBox = function (e, t) {
                    var r, n = e.length;
                    for (r = 0; r < n; r += 1) e[r] && e[r].sh ? this.calculateShapeBoundingBox(e[r], t) : e[r] && e[r].it ? this.calculateBoundingBox(e[r].it, t) : e[r] && e[r].style && e[r].w && this.expandStrokeBoundingBox(e[r].w, t)
                }, HShapeElement.prototype.expandStrokeBoundingBox = function (e, t) {
                    var r = 0;
                    if (e.keyframes) {
                        for (var n = 0; n < e.keyframes.length; n += 1) {
                            var i = e.keyframes[n].s;
                            i > r && (r = i)
                        }
                        r *= e.mult
                    } else r = e.v * e.mult;
                    t.x -= r, t.xMax += r, t.y -= r, t.yMax += r
                }, HShapeElement.prototype.currentBoxContains = function (e) {
                    return this.currentBBox.x <= e.x && this.currentBBox.y <= e.y && this.currentBBox.width + this.currentBBox.x >= e.x + e.width && this.currentBBox.height + this.currentBBox.y >= e.y + e.height
                }, HShapeElement.prototype.renderInnerContent = function () {
                    if (this._renderShapeFrame(), !this.hidden && (this._isFirstFrame || this._mdf)) {
                        var e = this.tempBoundingBox, t = 999999;
                        if (e.x = t, e.xMax = -t, e.y = t, e.yMax = -t, this.calculateBoundingBox(this.itemsData, e), e.width = e.xMax < e.x ? 0 : e.xMax - e.x, e.height = e.yMax < e.y ? 0 : e.yMax - e.y, this.currentBoxContains(e)) return;
                        var r = !1;
                        if (this.currentBBox.w !== e.width && (this.currentBBox.w = e.width, this.shapeCont.setAttribute("width", e.width), r = !0), this.currentBBox.h !== e.height && (this.currentBBox.h = e.height, this.shapeCont.setAttribute("height", e.height), r = !0), r || this.currentBBox.x !== e.x || this.currentBBox.y !== e.y) {
                            this.currentBBox.w = e.width, this.currentBBox.h = e.height, this.currentBBox.x = e.x, this.currentBBox.y = e.y, this.shapeCont.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h);
                            var n = this.shapeCont.style,
                                i = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
                            n.transform = i, n.webkitTransform = i
                        }
                    }
                }, extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], HTextElement), HTextElement.prototype.createContent = function () {
                    if (this.isMasked = this.checkMasks(), this.isMasked) {
                        this.renderType = "svg", this.compW = this.comp.data.w, this.compH = this.comp.data.h, this.svgElement.setAttribute("width", this.compW), this.svgElement.setAttribute("height", this.compH);
                        var e = createNS("g");
                        this.maskedElement.appendChild(e), this.innerElem = e
                    } else this.renderType = "html", this.innerElem = this.layerElement;
                    this.checkParenting()
                }, HTextElement.prototype.buildNewText = function () {
                    var e = this.textProperty.currentData;
                    this.renderedLetters = createSizedArray(e.l ? e.l.length : 0);
                    var t = this.innerElem.style, r = e.fc ? this.buildColor(e.fc) : "rgba(0,0,0,0)";
                    t.fill = r, t.color = r, e.sc && (t.stroke = this.buildColor(e.sc), t.strokeWidth = e.sw + "px");
                    var n, i, a = this.globalData.fontManager.getFontByName(e.f);
                    if (!this.globalData.fontManager.chars) if (t.fontSize = e.finalSize + "px", t.lineHeight = e.finalSize + "px", a.fClass) this.innerElem.className = a.fClass; else {
                        t.fontFamily = a.fFamily;
                        var s = e.fWeight, o = e.fStyle;
                        t.fontStyle = o, t.fontWeight = s
                    }
                    var l, h, u, c = e.l;
                    i = c.length;
                    var p, f = this.mHelper, d = "", m = 0;
                    for (n = 0; n < i; n += 1) {
                        if (this.globalData.fontManager.chars ? (this.textPaths[m] ? l = this.textPaths[m] : ((l = createNS("path")).setAttribute("stroke-linecap", lineCapEnum[1]), l.setAttribute("stroke-linejoin", lineJoinEnum[2]), l.setAttribute("stroke-miterlimit", "4")), this.isMasked || (this.textSpans[m] ? u = (h = this.textSpans[m]).children[0] : ((h = createTag("div")).style.lineHeight = 0, (u = createNS("svg")).appendChild(l), styleDiv(h)))) : this.isMasked ? l = this.textPaths[m] ? this.textPaths[m] : createNS("text") : this.textSpans[m] ? (h = this.textSpans[m], l = this.textPaths[m]) : (styleDiv(h = createTag("span")), styleDiv(l = createTag("span")), h.appendChild(l)), this.globalData.fontManager.chars) {
                            var y,
                                g = this.globalData.fontManager.getCharData(e.finalText[n], a.fStyle, this.globalData.fontManager.getFontByName(e.f).fFamily);
                            if (y = g ? g.data : null, f.reset(), y && y.shapes && y.shapes.length && (p = y.shapes[0].it, f.scale(e.finalSize / 100, e.finalSize / 100), d = this.createPathShape(f, p), l.setAttribute("d", d)), this.isMasked) this.innerElem.appendChild(l); else {
                                if (this.innerElem.appendChild(h), y && y.shapes) {
                                    document.body.appendChild(u);
                                    var v = u.getBBox();
                                    u.setAttribute("width", v.width + 2), u.setAttribute("height", v.height + 2), u.setAttribute("viewBox", v.x - 1 + " " + (v.y - 1) + " " + (v.width + 2) + " " + (v.height + 2));
                                    var x = u.style, b = "translate(" + (v.x - 1) + "px," + (v.y - 1) + "px)";
                                    x.transform = b, x.webkitTransform = b, c[n].yOffset = v.y - 1
                                } else u.setAttribute("width", 1), u.setAttribute("height", 1);
                                h.appendChild(u)
                            }
                        } else if (l.textContent = c[n].val, l.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), this.isMasked) this.innerElem.appendChild(l); else {
                            this.innerElem.appendChild(h);
                            var k = l.style, S = "translate3d(0," + -e.finalSize / 1.2 + "px,0)";
                            k.transform = S, k.webkitTransform = S
                        }
                        this.isMasked ? this.textSpans[m] = l : this.textSpans[m] = h, this.textSpans[m].style.display = "block", this.textPaths[m] = l, m += 1
                    }
                    for (; m < this.textSpans.length;) this.textSpans[m].style.display = "none", m += 1
                }, HTextElement.prototype.renderInnerContent = function () {
                    var e;
                    if (this.data.singleShape) {
                        if (!this._isFirstFrame && !this.lettersChangedFlag) return;
                        if (this.isMasked && this.finalTransform._matMdf) {
                            this.svgElement.setAttribute("viewBox", -this.finalTransform.mProp.p.v[0] + " " + -this.finalTransform.mProp.p.v[1] + " " + this.compW + " " + this.compH), e = this.svgElement.style;
                            var t = "translate(" + -this.finalTransform.mProp.p.v[0] + "px," + -this.finalTransform.mProp.p.v[1] + "px)";
                            e.transform = t, e.webkitTransform = t
                        }
                    }
                    if (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag) {
                        var r, n, i, a, s, o = 0, l = this.textAnimator.renderedLetters,
                            h = this.textProperty.currentData.l;
                        for (n = h.length, r = 0; r < n; r += 1) h[r].n ? o += 1 : (a = this.textSpans[r], s = this.textPaths[r], i = l[o], o += 1, i._mdf.m && (this.isMasked ? a.setAttribute("transform", i.m) : (a.style.webkitTransform = i.m, a.style.transform = i.m)), a.style.opacity = i.o, i.sw && i._mdf.sw && s.setAttribute("stroke-width", i.sw), i.sc && i._mdf.sc && s.setAttribute("stroke", i.sc), i.fc && i._mdf.fc && (s.setAttribute("fill", i.fc), s.style.color = i.fc));
                        if (this.innerElem.getBBox && !this.hidden && (this._isFirstFrame || this._mdf)) {
                            var u = this.innerElem.getBBox();
                            if (this.currentBBox.w !== u.width && (this.currentBBox.w = u.width, this.svgElement.setAttribute("width", u.width)), this.currentBBox.h !== u.height && (this.currentBBox.h = u.height, this.svgElement.setAttribute("height", u.height)), this.currentBBox.w !== u.width + 2 || this.currentBBox.h !== u.height + 2 || this.currentBBox.x !== u.x - 1 || this.currentBBox.y !== u.y - 1) {
                                this.currentBBox.w = u.width + 2, this.currentBBox.h = u.height + 2, this.currentBBox.x = u.x - 1, this.currentBBox.y = u.y - 1, this.svgElement.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h), e = this.svgElement.style;
                                var c = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
                                e.transform = c, e.webkitTransform = c
                            }
                        }
                    }
                }, extendPrototype([BaseElement, FrameElement, HierarchyElement], HCameraElement), HCameraElement.prototype.setup = function () {
                    var e, t, r, n, i = this.comp.threeDElements.length;
                    for (e = 0; e < i; e += 1) if ("3d" === (t = this.comp.threeDElements[e]).type) {
                        r = t.perspectiveElem.style, n = t.container.style;
                        var a = this.pe.v + "px", s = "0px 0px 0px", o = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
                        r.perspective = a, r.webkitPerspective = a, n.transformOrigin = s, n.mozTransformOrigin = s, n.webkitTransformOrigin = s, r.transform = o, r.webkitTransform = o
                    }
                }, HCameraElement.prototype.createElements = function () {
                }, HCameraElement.prototype.hide = function () {
                }, HCameraElement.prototype.renderFrame = function () {
                    var e, t, r = this._isFirstFrame;
                    if (this.hierarchy) for (t = this.hierarchy.length, e = 0; e < t; e += 1) r = this.hierarchy[e].finalTransform.mProp._mdf || r;
                    if (r || this.pe._mdf || this.p && this.p._mdf || this.px && (this.px._mdf || this.py._mdf || this.pz._mdf) || this.rx._mdf || this.ry._mdf || this.rz._mdf || this.or._mdf || this.a && this.a._mdf) {
                        if (this.mat.reset(), this.hierarchy) for (e = t = this.hierarchy.length - 1; e >= 0; e -= 1) {
                            var n = this.hierarchy[e].finalTransform.mProp;
                            this.mat.translate(-n.p.v[0], -n.p.v[1], n.p.v[2]), this.mat.rotateX(-n.or.v[0]).rotateY(-n.or.v[1]).rotateZ(n.or.v[2]), this.mat.rotateX(-n.rx.v).rotateY(-n.ry.v).rotateZ(n.rz.v), this.mat.scale(1 / n.s.v[0], 1 / n.s.v[1], 1 / n.s.v[2]), this.mat.translate(n.a.v[0], n.a.v[1], n.a.v[2])
                        }
                        if (this.p ? this.mat.translate(-this.p.v[0], -this.p.v[1], this.p.v[2]) : this.mat.translate(-this.px.v, -this.py.v, this.pz.v), this.a) {
                            var i;
                            i = this.p ? [this.p.v[0] - this.a.v[0], this.p.v[1] - this.a.v[1], this.p.v[2] - this.a.v[2]] : [this.px.v - this.a.v[0], this.py.v - this.a.v[1], this.pz.v - this.a.v[2]];
                            var a = Math.sqrt(Math.pow(i[0], 2) + Math.pow(i[1], 2) + Math.pow(i[2], 2)),
                                s = [i[0] / a, i[1] / a, i[2] / a], o = Math.sqrt(s[2] * s[2] + s[0] * s[0]),
                                l = Math.atan2(s[1], o), h = Math.atan2(s[0], -s[2]);
                            this.mat.rotateY(h).rotateX(-l)
                        }
                        this.mat.rotateX(-this.rx.v).rotateY(-this.ry.v).rotateZ(this.rz.v), this.mat.rotateX(-this.or.v[0]).rotateY(-this.or.v[1]).rotateZ(this.or.v[2]), this.mat.translate(this.globalData.compSize.w / 2, this.globalData.compSize.h / 2, 0), this.mat.translate(0, 0, this.pe.v);
                        var u = !this._prevMat.equals(this.mat);
                        if ((u || this.pe._mdf) && this.comp.threeDElements) {
                            var c, p, f;
                            for (t = this.comp.threeDElements.length, e = 0; e < t; e += 1) if ("3d" === (c = this.comp.threeDElements[e]).type) {
                                if (u) {
                                    var d = this.mat.toCSS();
                                    (f = c.container.style).transform = d, f.webkitTransform = d
                                }
                                this.pe._mdf && ((p = c.perspectiveElem.style).perspective = this.pe.v + "px", p.webkitPerspective = this.pe.v + "px")
                            }
                            this.mat.clone(this._prevMat)
                        }
                    }
                    this._isFirstFrame = !1
                }, HCameraElement.prototype.prepareFrame = function (e) {
                    this.prepareProperties(e, !0)
                }, HCameraElement.prototype.destroy = function () {
                }, HCameraElement.prototype.getBaseElement = function () {
                    return null
                }, extendPrototype([BaseElement, TransformElement, HBaseElement, HSolidElement, HierarchyElement, FrameElement, RenderableElement], HImageElement), HImageElement.prototype.createContent = function () {
                    var e = this.globalData.getAssetsPath(this.assetData), t = new Image;
                    this.data.hasMask ? (this.imageElem = createNS("image"), this.imageElem.setAttribute("width", this.assetData.w + "px"), this.imageElem.setAttribute("height", this.assetData.h + "px"), this.imageElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", e), this.layerElement.appendChild(this.imageElem), this.baseElement.setAttribute("width", this.assetData.w), this.baseElement.setAttribute("height", this.assetData.h)) : this.layerElement.appendChild(t), t.crossOrigin = "anonymous", t.src = e, this.data.ln && this.baseElement.setAttribute("id", this.data.ln)
                },extendPrototype([BaseRenderer], HybridRendererBase),HybridRendererBase.prototype.buildItem = SVGRenderer.prototype.buildItem,HybridRendererBase.prototype.checkPendingElements = function () {
                    for (; this.pendingElements.length;) this.pendingElements.pop().checkParenting()
                },HybridRendererBase.prototype.appendElementInPos = function (e, t) {
                    var r = e.getBaseElement();
                    if (r) {
                        var n = this.layers[t];
                        if (n.ddd && this.supports3d) this.addTo3dContainer(r, t); else if (this.threeDElements) this.addTo3dContainer(r, t); else {
                            for (var i, a, s = 0; s < t;) this.elements[s] && !0 !== this.elements[s] && this.elements[s].getBaseElement && (a = this.elements[s], i = (this.layers[s].ddd ? this.getThreeDContainerByPos(s) : a.getBaseElement()) || i), s += 1;
                            i ? n.ddd && this.supports3d || this.layerElement.insertBefore(r, i) : n.ddd && this.supports3d || this.layerElement.appendChild(r)
                        }
                    }
                },HybridRendererBase.prototype.createShape = function (e) {
                    return this.supports3d ? new HShapeElement(e, this.globalData, this) : new SVGShapeElement(e, this.globalData, this)
                },HybridRendererBase.prototype.createText = function (e) {
                    return this.supports3d ? new HTextElement(e, this.globalData, this) : new SVGTextLottieElement(e, this.globalData, this)
                },HybridRendererBase.prototype.createCamera = function (e) {
                    return this.camera = new HCameraElement(e, this.globalData, this), this.camera
                },HybridRendererBase.prototype.createImage = function (e) {
                    return this.supports3d ? new HImageElement(e, this.globalData, this) : new IImageElement(e, this.globalData, this)
                },HybridRendererBase.prototype.createSolid = function (e) {
                    return this.supports3d ? new HSolidElement(e, this.globalData, this) : new ISolidElement(e, this.globalData, this)
                },HybridRendererBase.prototype.createNull = SVGRenderer.prototype.createNull,HybridRendererBase.prototype.getThreeDContainerByPos = function (e) {
                    for (var t = 0, r = this.threeDElements.length; t < r;) {
                        if (this.threeDElements[t].startPos <= e && this.threeDElements[t].endPos >= e) return this.threeDElements[t].perspectiveElem;
                        t += 1
                    }
                    return null
                },HybridRendererBase.prototype.createThreeDContainer = function (e, t) {
                    var r, n, i = createTag("div");
                    styleDiv(i);
                    var a = createTag("div");
                    if (styleDiv(a), "3d" === t) {
                        (r = i.style).width = this.globalData.compSize.w + "px", r.height = this.globalData.compSize.h + "px";
                        var s = "50% 50%";
                        r.webkitTransformOrigin = s, r.mozTransformOrigin = s, r.transformOrigin = s;
                        var o = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
                        (n = a.style).transform = o, n.webkitTransform = o
                    }
                    i.appendChild(a);
                    var l = {container: a, perspectiveElem: i, startPos: e, endPos: e, type: t};
                    return this.threeDElements.push(l), l
                },HybridRendererBase.prototype.build3dContainers = function () {
                    var e, t, r = this.layers.length, n = "";
                    for (e = 0; e < r; e += 1) this.layers[e].ddd && 3 !== this.layers[e].ty ? ("3d" !== n && (n = "3d", t = this.createThreeDContainer(e, "3d")), t.endPos = Math.max(t.endPos, e)) : ("2d" !== n && (n = "2d", t = this.createThreeDContainer(e, "2d")), t.endPos = Math.max(t.endPos, e));
                    for (e = (r = this.threeDElements.length) - 1; e >= 0; e -= 1) this.resizerElem.appendChild(this.threeDElements[e].perspectiveElem)
                },HybridRendererBase.prototype.addTo3dContainer = function (e, t) {
                    for (var r = 0, n = this.threeDElements.length; r < n;) {
                        if (t <= this.threeDElements[r].endPos) {
                            for (var i, a = this.threeDElements[r].startPos; a < t;) this.elements[a] && this.elements[a].getBaseElement && (i = this.elements[a].getBaseElement()), a += 1;
                            i ? this.threeDElements[r].container.insertBefore(e, i) : this.threeDElements[r].container.appendChild(e);
                            break
                        }
                        r += 1
                    }
                },HybridRendererBase.prototype.configAnimation = function (e) {
                    var t = createTag("div"), r = this.animationItem.wrapper, n = t.style;
                    n.width = e.w + "px", n.height = e.h + "px", this.resizerElem = t, styleDiv(t), n.transformStyle = "flat", n.mozTransformStyle = "flat", n.webkitTransformStyle = "flat", this.renderConfig.className && t.setAttribute("class", this.renderConfig.className), r.appendChild(t), n.overflow = "hidden";
                    var i = createNS("svg");
                    i.setAttribute("width", "1"), i.setAttribute("height", "1"), styleDiv(i), this.resizerElem.appendChild(i);
                    var a = createNS("defs");
                    i.appendChild(a), this.data = e, this.setupGlobalData(e, i), this.globalData.defs = a, this.layers = e.layers, this.layerElement = this.resizerElem, this.build3dContainers(), this.updateContainerSize()
                },HybridRendererBase.prototype.destroy = function () {
                    var e;
                    this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), this.animationItem.container = null, this.globalData.defs = null;
                    var t = this.layers ? this.layers.length : 0;
                    for (e = 0; e < t; e += 1) this.elements[e].destroy();
                    this.elements.length = 0, this.destroyed = !0, this.animationItem = null
                },HybridRendererBase.prototype.updateContainerSize = function () {
                    var e, t, r, n, i = this.animationItem.wrapper.offsetWidth,
                        a = this.animationItem.wrapper.offsetHeight, s = i / a;
                    this.globalData.compSize.w / this.globalData.compSize.h > s ? (e = i / this.globalData.compSize.w, t = i / this.globalData.compSize.w, r = 0, n = (a - this.globalData.compSize.h * (i / this.globalData.compSize.w)) / 2) : (e = a / this.globalData.compSize.h, t = a / this.globalData.compSize.h, r = (i - this.globalData.compSize.w * (a / this.globalData.compSize.h)) / 2, n = 0);
                    var o = this.resizerElem.style;
                    o.webkitTransform = "matrix3d(" + e + ",0,0,0,0," + t + ",0,0,0,0,1,0," + r + "," + n + ",0,1)", o.transform = o.webkitTransform
                },HybridRendererBase.prototype.renderFrame = SVGRenderer.prototype.renderFrame,HybridRendererBase.prototype.hide = function () {
                    this.resizerElem.style.display = "none"
                },HybridRendererBase.prototype.show = function () {
                    this.resizerElem.style.display = "block"
                },HybridRendererBase.prototype.initItems = function () {
                    if (this.buildAllItems(), this.camera) this.camera.setup(); else {
                        var e, t = this.globalData.compSize.w, r = this.globalData.compSize.h,
                            n = this.threeDElements.length;
                        for (e = 0; e < n; e += 1) {
                            var i = this.threeDElements[e].perspectiveElem.style;
                            i.webkitPerspective = Math.sqrt(Math.pow(t, 2) + Math.pow(r, 2)) + "px", i.perspective = i.webkitPerspective
                        }
                    }
                },HybridRendererBase.prototype.searchExtraCompositions = function (e) {
                    var t, r = e.length, n = createTag("div");
                    for (t = 0; t < r; t += 1) if (e[t].xt) {
                        var i = this.createComp(e[t], n, this.globalData.comp, null);
                        i.initExpressions(), this.globalData.projectInterface.registerComposition(i)
                    }
                },extendPrototype([HybridRendererBase, ICompElement, HBaseElement], HCompElement),HCompElement.prototype._createBaseContainerElements = HCompElement.prototype.createContainerElements,HCompElement.prototype.createContainerElements = function () {
                    this._createBaseContainerElements(), this.data.hasMask ? (this.svgElement.setAttribute("width", this.data.w), this.svgElement.setAttribute("height", this.data.h), this.transformedElement = this.baseElement) : this.transformedElement = this.layerElement
                },HCompElement.prototype.addTo3dContainer = function (e, t) {
                    for (var r, n = 0; n < t;) this.elements[n] && this.elements[n].getBaseElement && (r = this.elements[n].getBaseElement()), n += 1;
                    r ? this.layerElement.insertBefore(e, r) : this.layerElement.appendChild(e)
                },HCompElement.prototype.createComp = function (e) {
                    return this.supports3d ? new HCompElement(e, this.globalData, this) : new SVGCompElement(e, this.globalData, this)
                },extendPrototype([HybridRendererBase], HybridRenderer),HybridRenderer.prototype.createComp = function (e) {
                    return this.supports3d ? new HCompElement(e, this.globalData, this) : new SVGCompElement(e, this.globalData, this)
                };
                var CompExpressionInterface = function (e) {
                    function t(t) {
                        for (var r = 0, n = e.layers.length; r < n;) {
                            if (e.layers[r].nm === t || e.layers[r].ind === t) return e.elements[r].layerInterface;
                            r += 1
                        }
                        return null
                    }

                    return Object.defineProperty(t, "_name", {value: e.data.nm}), t.layer = t, t.pixelAspect = 1, t.height = e.data.h || e.globalData.compSize.h, t.width = e.data.w || e.globalData.compSize.w, t.pixelAspect = 1, t.frameDuration = 1 / e.globalData.frameRate, t.displayStartTime = 0, t.numLayers = e.layers.length, t
                }, Expressions = function () {
                    var e = {
                        initExpressions: function (e) {
                            var t = 0, r = [];
                            e.renderer.compInterface = CompExpressionInterface(e.renderer), e.renderer.globalData.projectInterface.registerComposition(e.renderer), e.renderer.globalData.pushExpression = function () {
                                t += 1
                            }, e.renderer.globalData.popExpression = function () {
                                0 === (t -= 1) && function () {
                                    var e, t = r.length;
                                    for (e = 0; e < t; e += 1) r[e].release();
                                    r.length = 0
                                }()
                            }, e.renderer.globalData.registerExpressionProperty = function (e) {
                                -1 === r.indexOf(e) && r.push(e)
                            }
                        }
                    };
                    return e
                }(), MaskManagerInterface = function () {
                    function e(e, t) {
                        this._mask = e, this._data = t
                    }

                    return Object.defineProperty(e.prototype, "maskPath", {
                        get: function () {
                            return this._mask.prop.k && this._mask.prop.getValue(), this._mask.prop
                        }
                    }), Object.defineProperty(e.prototype, "maskOpacity", {
                        get: function () {
                            return this._mask.op.k && this._mask.op.getValue(), 100 * this._mask.op.v
                        }
                    }), function (t) {
                        var r, n = createSizedArray(t.viewData.length), i = t.viewData.length;
                        for (r = 0; r < i; r += 1) n[r] = new e(t.viewData[r], t.masksProperties[r]);
                        return function (e) {
                            for (r = 0; r < i;) {
                                if (t.masksProperties[r].nm === e) return n[r];
                                r += 1
                            }
                            return null
                        }
                    }
                }(), ExpressionPropertyInterface = function () {
                    var e = {pv: 0, v: 0, mult: 1}, t = {pv: [0, 0, 0], v: [0, 0, 0], mult: 1};

                    function r(e, t, r) {
                        Object.defineProperty(e, "velocity", {
                            get: function () {
                                return t.getVelocityAtTime(t.comp.currentFrame)
                            }
                        }), e.numKeys = t.keyframes ? t.keyframes.length : 0, e.key = function (n) {
                            if (!e.numKeys) return 0;
                            var i = "";
                            i = "s" in t.keyframes[n - 1] ? t.keyframes[n - 1].s : "e" in t.keyframes[n - 2] ? t.keyframes[n - 2].e : t.keyframes[n - 2].s;
                            var a = "unidimensional" === r ? new Number(i) : Object.assign({}, i);
                            return a.time = t.keyframes[n - 1].t / t.elem.comp.globalData.frameRate, a.value = "unidimensional" === r ? i[0] : i, a
                        }, e.valueAtTime = t.getValueAtTime, e.speedAtTime = t.getSpeedAtTime, e.velocityAtTime = t.getVelocityAtTime, e.propertyGroup = t.propertyGroup
                    }

                    function n() {
                        return e
                    }

                    return function (i) {
                        return i ? "unidimensional" === i.propType ? function (t) {
                            t && "pv" in t || (t = e);
                            var n = 1 / t.mult, i = t.pv * n, a = new Number(i);
                            return a.value = i, r(a, t, "unidimensional"), function () {
                                return t.k && t.getValue(), i = t.v * n, a.value !== i && ((a = new Number(i)).value = i, r(a, t, "unidimensional")), a
                            }
                        }(i) : function (e) {
                            e && "pv" in e || (e = t);
                            var n = 1 / e.mult, i = e.data && e.data.l || e.pv.length,
                                a = createTypedArray("float32", i), s = createTypedArray("float32", i);
                            return a.value = s, r(a, e, "multidimensional"), function () {
                                e.k && e.getValue();
                                for (var t = 0; t < i; t += 1) s[t] = e.v[t] * n, a[t] = s[t];
                                return a
                            }
                        }(i) : n
                    }
                }(), TransformExpressionInterface = function (e) {
                    function t(e) {
                        switch (e) {
                            case"scale":
                            case"Scale":
                            case"ADBE Scale":
                            case 6:
                                return t.scale;
                            case"rotation":
                            case"Rotation":
                            case"ADBE Rotation":
                            case"ADBE Rotate Z":
                            case 10:
                                return t.rotation;
                            case"ADBE Rotate X":
                                return t.xRotation;
                            case"ADBE Rotate Y":
                                return t.yRotation;
                            case"position":
                            case"Position":
                            case"ADBE Position":
                            case 2:
                                return t.position;
                            case"ADBE Position_0":
                                return t.xPosition;
                            case"ADBE Position_1":
                                return t.yPosition;
                            case"ADBE Position_2":
                                return t.zPosition;
                            case"anchorPoint":
                            case"AnchorPoint":
                            case"Anchor Point":
                            case"ADBE AnchorPoint":
                            case 1:
                                return t.anchorPoint;
                            case"opacity":
                            case"Opacity":
                            case 11:
                                return t.opacity;
                            default:
                                return null
                        }
                    }

                    var r, n, i, a;
                    return Object.defineProperty(t, "rotation", {get: ExpressionPropertyInterface(e.r || e.rz)}), Object.defineProperty(t, "zRotation", {get: ExpressionPropertyInterface(e.rz || e.r)}), Object.defineProperty(t, "xRotation", {get: ExpressionPropertyInterface(e.rx)}), Object.defineProperty(t, "yRotation", {get: ExpressionPropertyInterface(e.ry)}), Object.defineProperty(t, "scale", {get: ExpressionPropertyInterface(e.s)}), e.p ? a = ExpressionPropertyInterface(e.p) : (r = ExpressionPropertyInterface(e.px), n = ExpressionPropertyInterface(e.py), e.pz && (i = ExpressionPropertyInterface(e.pz))), Object.defineProperty(t, "position", {
                        get: function () {
                            return e.p ? a() : [r(), n(), i ? i() : 0]
                        }
                    }), Object.defineProperty(t, "xPosition", {get: ExpressionPropertyInterface(e.px)}), Object.defineProperty(t, "yPosition", {get: ExpressionPropertyInterface(e.py)}), Object.defineProperty(t, "zPosition", {get: ExpressionPropertyInterface(e.pz)}), Object.defineProperty(t, "anchorPoint", {get: ExpressionPropertyInterface(e.a)}), Object.defineProperty(t, "opacity", {get: ExpressionPropertyInterface(e.o)}), Object.defineProperty(t, "skew", {get: ExpressionPropertyInterface(e.sk)}), Object.defineProperty(t, "skewAxis", {get: ExpressionPropertyInterface(e.sa)}), Object.defineProperty(t, "orientation", {get: ExpressionPropertyInterface(e.or)}), t
                }, LayerExpressionInterface = function () {
                    function e(e) {
                        var t = new Matrix;
                        return void 0 !== e ? this._elem.finalTransform.mProp.getValueAtTime(e).clone(t) : this._elem.finalTransform.mProp.applyToMatrix(t), t
                    }

                    function t(e, t) {
                        var r = this.getMatrix(t);
                        return r.props[12] = 0, r.props[13] = 0, r.props[14] = 0, this.applyPoint(r, e)
                    }

                    function r(e, t) {
                        var r = this.getMatrix(t);
                        return this.applyPoint(r, e)
                    }

                    function n(e, t) {
                        var r = this.getMatrix(t);
                        return r.props[12] = 0, r.props[13] = 0, r.props[14] = 0, this.invertPoint(r, e)
                    }

                    function i(e, t) {
                        var r = this.getMatrix(t);
                        return this.invertPoint(r, e)
                    }

                    function a(e, t) {
                        if (this._elem.hierarchy && this._elem.hierarchy.length) {
                            var r, n = this._elem.hierarchy.length;
                            for (r = 0; r < n; r += 1) this._elem.hierarchy[r].finalTransform.mProp.applyToMatrix(e)
                        }
                        return e.applyToPointArray(t[0], t[1], t[2] || 0)
                    }

                    function s(e, t) {
                        if (this._elem.hierarchy && this._elem.hierarchy.length) {
                            var r, n = this._elem.hierarchy.length;
                            for (r = 0; r < n; r += 1) this._elem.hierarchy[r].finalTransform.mProp.applyToMatrix(e)
                        }
                        return e.inversePoint(t)
                    }

                    function o(e) {
                        var t = new Matrix;
                        if (t.reset(), this._elem.finalTransform.mProp.applyToMatrix(t), this._elem.hierarchy && this._elem.hierarchy.length) {
                            var r, n = this._elem.hierarchy.length;
                            for (r = 0; r < n; r += 1) this._elem.hierarchy[r].finalTransform.mProp.applyToMatrix(t);
                            return t.inversePoint(e)
                        }
                        return t.inversePoint(e)
                    }

                    function l() {
                        return [1, 1, 1, 1]
                    }

                    return function (h) {
                        var u;

                        function c(e) {
                            switch (e) {
                                case"ADBE Root Vectors Group":
                                case"Contents":
                                case 2:
                                    return c.shapeInterface;
                                case 1:
                                case 6:
                                case"Transform":
                                case"transform":
                                case"ADBE Transform Group":
                                    return u;
                                case 4:
                                case"ADBE Effect Parade":
                                case"effects":
                                case"Effects":
                                    return c.effect;
                                case"ADBE Text Properties":
                                    return c.textInterface;
                                default:
                                    return null
                            }
                        }

                        c.getMatrix = e, c.invertPoint = s, c.applyPoint = a, c.toWorld = r, c.toWorldVec = t, c.fromWorld = i, c.fromWorldVec = n, c.toComp = r, c.fromComp = o, c.sampleImage = l, c.sourceRectAtTime = h.sourceRectAtTime.bind(h), c._elem = h;
                        var p = getDescriptor(u = TransformExpressionInterface(h.finalTransform.mProp), "anchorPoint");
                        return Object.defineProperties(c, {
                            hasParent: {
                                get: function () {
                                    return h.hierarchy.length
                                }
                            },
                            parent: {
                                get: function () {
                                    return h.hierarchy[0].layerInterface
                                }
                            },
                            rotation: getDescriptor(u, "rotation"),
                            scale: getDescriptor(u, "scale"),
                            position: getDescriptor(u, "position"),
                            opacity: getDescriptor(u, "opacity"),
                            anchorPoint: p,
                            anchor_point: p,
                            transform: {
                                get: function () {
                                    return u
                                }
                            },
                            active: {
                                get: function () {
                                    return h.isInRange
                                }
                            }
                        }), c.startTime = h.data.st, c.index = h.data.ind, c.source = h.data.refId, c.height = 0 === h.data.ty ? h.data.h : 100, c.width = 0 === h.data.ty ? h.data.w : 100, c.inPoint = h.data.ip / h.comp.globalData.frameRate, c.outPoint = h.data.op / h.comp.globalData.frameRate, c._name = h.data.nm, c.registerMaskInterface = function (e) {
                            c.mask = new MaskManagerInterface(e, h)
                        }, c.registerEffectsInterface = function (e) {
                            c.effect = e
                        }, c
                    }
                }(), propertyGroupFactory = function (e, t) {
                    return function (r) {
                        return (r = void 0 === r ? 1 : r) <= 0 ? e : t(r - 1)
                    }
                }, PropertyInterface = function (e, t) {
                    var r = {_name: e};
                    return function (e) {
                        return (e = void 0 === e ? 1 : e) <= 0 ? r : t(e - 1)
                    }
                }, EffectsExpressionInterface = function () {
                    function e(r, n, i, a) {
                        function s(e) {
                            for (var t = r.ef, n = 0, i = t.length; n < i;) {
                                if (e === t[n].nm || e === t[n].mn || e === t[n].ix) return 5 === t[n].ty ? h[n] : h[n]();
                                n += 1
                            }
                            throw new Error
                        }

                        var o, l = propertyGroupFactory(s, i), h = [], u = r.ef.length;
                        for (o = 0; o < u; o += 1) 5 === r.ef[o].ty ? h.push(e(r.ef[o], n.effectElements[o], n.effectElements[o].propertyGroup, a)) : h.push(t(n.effectElements[o], r.ef[o].ty, a, l));
                        return "ADBE Color Control" === r.mn && Object.defineProperty(s, "color", {
                            get: function () {
                                return h[0]()
                            }
                        }), Object.defineProperties(s, {
                            numProperties: {
                                get: function () {
                                    return r.np
                                }
                            }, _name: {value: r.nm}, propertyGroup: {value: l}
                        }), s.enabled = 0 !== r.en, s.active = s.enabled, s
                    }

                    function t(e, t, r, n) {
                        var i = ExpressionPropertyInterface(e.p);
                        return e.p.setGroupProperty && e.p.setGroupProperty(PropertyInterface("", n)), function () {
                            return 10 === t ? r.comp.compInterface(e.p.v) : i()
                        }
                    }

                    return {
                        createEffectsInterface: function (t, r) {
                            if (t.effectsManager) {
                                var n, i = [], a = t.data.ef, s = t.effectsManager.effectElements.length;
                                for (n = 0; n < s; n += 1) i.push(e(a[n], t.effectsManager.effectElements[n], r, t));
                                var o = t.data.ef || [], l = function (e) {
                                    for (n = 0, s = o.length; n < s;) {
                                        if (e === o[n].nm || e === o[n].mn || e === o[n].ix) return i[n];
                                        n += 1
                                    }
                                    return null
                                };
                                return Object.defineProperty(l, "numProperties", {
                                    get: function () {
                                        return o.length
                                    }
                                }), l
                            }
                            return null
                        }
                    }
                }(), ShapePathInterface = function (e, t, r) {
                    var n = t.sh;

                    function i(e) {
                        return "Shape" === e || "shape" === e || "Path" === e || "path" === e || "ADBE Vector Shape" === e || 2 === e ? i.path : null
                    }

                    var a = propertyGroupFactory(i, r);
                    return n.setGroupProperty(PropertyInterface("Path", a)), Object.defineProperties(i, {
                        path: {
                            get: function () {
                                return n.k && n.getValue(), n
                            }
                        },
                        shape: {
                            get: function () {
                                return n.k && n.getValue(), n
                            }
                        },
                        _name: {value: e.nm},
                        ix: {value: e.ix},
                        propertyIndex: {value: e.ix},
                        mn: {value: e.mn},
                        propertyGroup: {value: r}
                    }), i
                }, ShapeExpressionInterface = function () {
                    function e(e, s, p) {
                        var f, d = [], m = e ? e.length : 0;
                        for (f = 0; f < m; f += 1) "gr" === e[f].ty ? d.push(t(e[f], s[f], p)) : "fl" === e[f].ty ? d.push(r(e[f], s[f], p)) : "st" === e[f].ty ? d.push(i(e[f], s[f], p)) : "tm" === e[f].ty ? d.push(a(e[f], s[f], p)) : "tr" === e[f].ty || ("el" === e[f].ty ? d.push(o(e[f], s[f], p)) : "sr" === e[f].ty ? d.push(l(e[f], s[f], p)) : "sh" === e[f].ty ? d.push(ShapePathInterface(e[f], s[f], p)) : "rc" === e[f].ty ? d.push(h(e[f], s[f], p)) : "rd" === e[f].ty ? d.push(u(e[f], s[f], p)) : "rp" === e[f].ty ? d.push(c(e[f], s[f], p)) : "gf" === e[f].ty ? d.push(n(e[f], s[f], p)) : d.push((e[f], s[f], function () {
                            return null
                        })));
                        return d
                    }

                    function t(t, r, n) {
                        var i = function (e) {
                            switch (e) {
                                case"ADBE Vectors Group":
                                case"Contents":
                                case 2:
                                    return i.content;
                                default:
                                    return i.transform
                            }
                        };
                        i.propertyGroup = propertyGroupFactory(i, n);
                        var a = function (t, r, n) {
                            var i, a = function (e) {
                                for (var t = 0, r = i.length; t < r;) {
                                    if (i[t]._name === e || i[t].mn === e || i[t].propertyIndex === e || i[t].ix === e || i[t].ind === e) return i[t];
                                    t += 1
                                }
                                return "number" === typeof e ? i[e - 1] : null
                            };
                            a.propertyGroup = propertyGroupFactory(a, n), i = e(t.it, r.it, a.propertyGroup), a.numProperties = i.length;
                            var o = s(t.it[t.it.length - 1], r.it[r.it.length - 1], a.propertyGroup);
                            return a.transform = o, a.propertyIndex = t.cix, a._name = t.nm, a
                        }(t, r, i.propertyGroup), o = s(t.it[t.it.length - 1], r.it[r.it.length - 1], i.propertyGroup);
                        return i.content = a, i.transform = o, Object.defineProperty(i, "_name", {
                            get: function () {
                                return t.nm
                            }
                        }), i.numProperties = t.np, i.propertyIndex = t.ix, i.nm = t.nm, i.mn = t.mn, i
                    }

                    function r(e, t, r) {
                        function n(e) {
                            return "Color" === e || "color" === e ? n.color : "Opacity" === e || "opacity" === e ? n.opacity : null
                        }

                        return Object.defineProperties(n, {
                            color: {get: ExpressionPropertyInterface(t.c)},
                            opacity: {get: ExpressionPropertyInterface(t.o)},
                            _name: {value: e.nm},
                            mn: {value: e.mn}
                        }), t.c.setGroupProperty(PropertyInterface("Color", r)), t.o.setGroupProperty(PropertyInterface("Opacity", r)), n
                    }

                    function n(e, t, r) {
                        function n(e) {
                            return "Start Point" === e || "start point" === e ? n.startPoint : "End Point" === e || "end point" === e ? n.endPoint : "Opacity" === e || "opacity" === e ? n.opacity : null
                        }

                        return Object.defineProperties(n, {
                            startPoint: {get: ExpressionPropertyInterface(t.s)},
                            endPoint: {get: ExpressionPropertyInterface(t.e)},
                            opacity: {get: ExpressionPropertyInterface(t.o)},
                            type: {
                                get: function () {
                                    return "a"
                                }
                            },
                            _name: {value: e.nm},
                            mn: {value: e.mn}
                        }), t.s.setGroupProperty(PropertyInterface("Start Point", r)), t.e.setGroupProperty(PropertyInterface("End Point", r)), t.o.setGroupProperty(PropertyInterface("Opacity", r)), n
                    }

                    function i(e, t, r) {
                        var n, i = propertyGroupFactory(h, r), a = propertyGroupFactory(l, i);

                        function s(r) {
                            Object.defineProperty(l, e.d[r].nm, {get: ExpressionPropertyInterface(t.d.dataProps[r].p)})
                        }

                        var o = e.d ? e.d.length : 0, l = {};
                        for (n = 0; n < o; n += 1) s(n), t.d.dataProps[n].p.setGroupProperty(a);

                        function h(e) {
                            return "Color" === e || "color" === e ? h.color : "Opacity" === e || "opacity" === e ? h.opacity : "Stroke Width" === e || "stroke width" === e ? h.strokeWidth : null
                        }

                        return Object.defineProperties(h, {
                            color: {get: ExpressionPropertyInterface(t.c)},
                            opacity: {get: ExpressionPropertyInterface(t.o)},
                            strokeWidth: {get: ExpressionPropertyInterface(t.w)},
                            dash: {
                                get: function () {
                                    return l
                                }
                            },
                            _name: {value: e.nm},
                            mn: {value: e.mn}
                        }), t.c.setGroupProperty(PropertyInterface("Color", i)), t.o.setGroupProperty(PropertyInterface("Opacity", i)), t.w.setGroupProperty(PropertyInterface("Stroke Width", i)), h
                    }

                    function a(e, t, r) {
                        function n(t) {
                            return t === e.e.ix || "End" === t || "end" === t ? n.end : t === e.s.ix ? n.start : t === e.o.ix ? n.offset : null
                        }

                        var i = propertyGroupFactory(n, r);
                        return n.propertyIndex = e.ix, t.s.setGroupProperty(PropertyInterface("Start", i)), t.e.setGroupProperty(PropertyInterface("End", i)), t.o.setGroupProperty(PropertyInterface("Offset", i)), n.propertyIndex = e.ix, n.propertyGroup = r, Object.defineProperties(n, {
                            start: {get: ExpressionPropertyInterface(t.s)},
                            end: {get: ExpressionPropertyInterface(t.e)},
                            offset: {get: ExpressionPropertyInterface(t.o)},
                            _name: {value: e.nm}
                        }), n.mn = e.mn, n
                    }

                    function s(e, t, r) {
                        function n(t) {
                            return e.a.ix === t || "Anchor Point" === t ? n.anchorPoint : e.o.ix === t || "Opacity" === t ? n.opacity : e.p.ix === t || "Position" === t ? n.position : e.r.ix === t || "Rotation" === t || "ADBE Vector Rotation" === t ? n.rotation : e.s.ix === t || "Scale" === t ? n.scale : e.sk && e.sk.ix === t || "Skew" === t ? n.skew : e.sa && e.sa.ix === t || "Skew Axis" === t ? n.skewAxis : null
                        }

                        var i = propertyGroupFactory(n, r);
                        return t.transform.mProps.o.setGroupProperty(PropertyInterface("Opacity", i)), t.transform.mProps.p.setGroupProperty(PropertyInterface("Position", i)), t.transform.mProps.a.setGroupProperty(PropertyInterface("Anchor Point", i)), t.transform.mProps.s.setGroupProperty(PropertyInterface("Scale", i)), t.transform.mProps.r.setGroupProperty(PropertyInterface("Rotation", i)), t.transform.mProps.sk && (t.transform.mProps.sk.setGroupProperty(PropertyInterface("Skew", i)), t.transform.mProps.sa.setGroupProperty(PropertyInterface("Skew Angle", i))), t.transform.op.setGroupProperty(PropertyInterface("Opacity", i)), Object.defineProperties(n, {
                            opacity: {get: ExpressionPropertyInterface(t.transform.mProps.o)},
                            position: {get: ExpressionPropertyInterface(t.transform.mProps.p)},
                            anchorPoint: {get: ExpressionPropertyInterface(t.transform.mProps.a)},
                            scale: {get: ExpressionPropertyInterface(t.transform.mProps.s)},
                            rotation: {get: ExpressionPropertyInterface(t.transform.mProps.r)},
                            skew: {get: ExpressionPropertyInterface(t.transform.mProps.sk)},
                            skewAxis: {get: ExpressionPropertyInterface(t.transform.mProps.sa)},
                            _name: {value: e.nm}
                        }), n.ty = "tr", n.mn = e.mn, n.propertyGroup = r, n
                    }

                    function o(e, t, r) {
                        function n(t) {
                            return e.p.ix === t ? n.position : e.s.ix === t ? n.size : null
                        }

                        var i = propertyGroupFactory(n, r);
                        n.propertyIndex = e.ix;
                        var a = "tm" === t.sh.ty ? t.sh.prop : t.sh;
                        return a.s.setGroupProperty(PropertyInterface("Size", i)), a.p.setGroupProperty(PropertyInterface("Position", i)), Object.defineProperties(n, {
                            size: {get: ExpressionPropertyInterface(a.s)},
                            position: {get: ExpressionPropertyInterface(a.p)},
                            _name: {value: e.nm}
                        }), n.mn = e.mn, n
                    }

                    function l(e, t, r) {
                        function n(t) {
                            return e.p.ix === t ? n.position : e.r.ix === t ? n.rotation : e.pt.ix === t ? n.points : e.or.ix === t || "ADBE Vector Star Outer Radius" === t ? n.outerRadius : e.os.ix === t ? n.outerRoundness : !e.ir || e.ir.ix !== t && "ADBE Vector Star Inner Radius" !== t ? e.is && e.is.ix === t ? n.innerRoundness : null : n.innerRadius
                        }

                        var i = propertyGroupFactory(n, r), a = "tm" === t.sh.ty ? t.sh.prop : t.sh;
                        return n.propertyIndex = e.ix, a.or.setGroupProperty(PropertyInterface("Outer Radius", i)), a.os.setGroupProperty(PropertyInterface("Outer Roundness", i)), a.pt.setGroupProperty(PropertyInterface("Points", i)), a.p.setGroupProperty(PropertyInterface("Position", i)), a.r.setGroupProperty(PropertyInterface("Rotation", i)), e.ir && (a.ir.setGroupProperty(PropertyInterface("Inner Radius", i)), a.is.setGroupProperty(PropertyInterface("Inner Roundness", i))), Object.defineProperties(n, {
                            position: {get: ExpressionPropertyInterface(a.p)},
                            rotation: {get: ExpressionPropertyInterface(a.r)},
                            points: {get: ExpressionPropertyInterface(a.pt)},
                            outerRadius: {get: ExpressionPropertyInterface(a.or)},
                            outerRoundness: {get: ExpressionPropertyInterface(a.os)},
                            innerRadius: {get: ExpressionPropertyInterface(a.ir)},
                            innerRoundness: {get: ExpressionPropertyInterface(a.is)},
                            _name: {value: e.nm}
                        }), n.mn = e.mn, n
                    }

                    function h(e, t, r) {
                        function n(t) {
                            return e.p.ix === t ? n.position : e.r.ix === t ? n.roundness : e.s.ix === t || "Size" === t || "ADBE Vector Rect Size" === t ? n.size : null
                        }

                        var i = propertyGroupFactory(n, r), a = "tm" === t.sh.ty ? t.sh.prop : t.sh;
                        return n.propertyIndex = e.ix, a.p.setGroupProperty(PropertyInterface("Position", i)), a.s.setGroupProperty(PropertyInterface("Size", i)), a.r.setGroupProperty(PropertyInterface("Rotation", i)), Object.defineProperties(n, {
                            position: {get: ExpressionPropertyInterface(a.p)},
                            roundness: {get: ExpressionPropertyInterface(a.r)},
                            size: {get: ExpressionPropertyInterface(a.s)},
                            _name: {value: e.nm}
                        }), n.mn = e.mn, n
                    }

                    function u(e, t, r) {
                        function n(t) {
                            return e.r.ix === t || "Round Corners 1" === t ? n.radius : null
                        }

                        var i = propertyGroupFactory(n, r), a = t;
                        return n.propertyIndex = e.ix, a.rd.setGroupProperty(PropertyInterface("Radius", i)), Object.defineProperties(n, {
                            radius: {get: ExpressionPropertyInterface(a.rd)},
                            _name: {value: e.nm}
                        }), n.mn = e.mn, n
                    }

                    function c(e, t, r) {
                        function n(t) {
                            return e.c.ix === t || "Copies" === t ? n.copies : e.o.ix === t || "Offset" === t ? n.offset : null
                        }

                        var i = propertyGroupFactory(n, r), a = t;
                        return n.propertyIndex = e.ix, a.c.setGroupProperty(PropertyInterface("Copies", i)), a.o.setGroupProperty(PropertyInterface("Offset", i)), Object.defineProperties(n, {
                            copies: {get: ExpressionPropertyInterface(a.c)},
                            offset: {get: ExpressionPropertyInterface(a.o)},
                            _name: {value: e.nm}
                        }), n.mn = e.mn, n
                    }

                    return function (t, r, n) {
                        var i;

                        function a(e) {
                            if ("number" === typeof e) return 0 === (e = void 0 === e ? 1 : e) ? n : i[e - 1];
                            for (var t = 0, r = i.length; t < r;) {
                                if (i[t]._name === e) return i[t];
                                t += 1
                            }
                            return null
                        }

                        return a.propertyGroup = propertyGroupFactory(a, (function () {
                            return n
                        })), i = e(t, r, a.propertyGroup), a.numProperties = i.length, a._name = "Contents", a
                    }
                }(), TextExpressionInterface = function (e) {
                    var t, r;

                    function n(e) {
                        return "ADBE Text Document" === e ? n.sourceText : null
                    }

                    return Object.defineProperty(n, "sourceText", {
                        get: function () {
                            e.textProperty.getValue();
                            var n = e.textProperty.currentData.t;
                            return n !== t && (t = e.textProperty.currentData.t, (r = new String(n)).value = n || new String(n), Object.defineProperty(r, "style", {
                                get: function () {
                                    return {fillColor: e.textProperty.currentData.fc}
                                }
                            })), r
                        }
                    }), n
                };

                function _typeof$2(e) {
                    return _typeof$2 = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
                        return typeof e
                    } : function (e) {
                        return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    }, _typeof$2(e)
                }

                var FootageInterface = function () {
                    var e = function (e) {
                        function t(e) {
                            return "Outline" === e ? t.outlineInterface() : null
                        }

                        return t._name = "Outline", t.outlineInterface = function (e) {
                            var t = "", r = e.getFootageData();

                            function n(e) {
                                if (r[e]) return t = e, "object" === _typeof$2(r = r[e]) ? n : r;
                                var i = e.indexOf(t);
                                if (-1 !== i) {
                                    var a = parseInt(e.substr(i + t.length), 10);
                                    return "object" === _typeof$2(r = r[a]) ? n : r
                                }
                                return ""
                            }

                            return function () {
                                return t = "", r = e.getFootageData(), n
                            }
                        }(e), t
                    };
                    return function (t) {
                        function r(e) {
                            return "Data" === e ? r.dataInterface : null
                        }

                        return r._name = "Data", r.dataInterface = e(t), r
                    }
                }(), interfaces = {
                    layer: LayerExpressionInterface,
                    effects: EffectsExpressionInterface,
                    comp: CompExpressionInterface,
                    shape: ShapeExpressionInterface,
                    text: TextExpressionInterface,
                    footage: FootageInterface
                };

                function getInterface(e) {
                    return interfaces[e] || null
                }

                function _typeof$1(e) {
                    return _typeof$1 = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
                        return typeof e
                    } : function (e) {
                        return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    }, _typeof$1(e)
                }

                function seedRandom(e, t) {
                    var r, n = this, i = 256, a = 6, s = "random", o = t.pow(i, a), l = t.pow(2, 52), h = 2 * l,
                        u = i - 1;

                    function c(e) {
                        var t, r = e.length, n = this, a = 0, s = n.i = n.j = 0, o = n.S = [];
                        for (r || (e = [r++]); a < i;) o[a] = a++;
                        for (a = 0; a < i; a++) o[a] = o[s = u & s + e[a % r] + (t = o[a])], o[s] = t;
                        n.g = function (e) {
                            for (var t, r = 0, a = n.i, s = n.j, o = n.S; e--;) t = o[a = u & a + 1], r = r * i + o[u & (o[a] = o[s = u & s + t]) + (o[s] = t)];
                            return n.i = a, n.j = s, r
                        }
                    }

                    function p(e, t) {
                        return t.i = e.i, t.j = e.j, t.S = e.S.slice(), t
                    }

                    function f(e, t) {
                        var r, n = [], i = _typeof$1(e);
                        if (t && "object" == i) for (r in e) try {
                            n.push(f(e[r], t - 1))
                        } catch (a) {
                        }
                        return n.length ? n : "string" == i ? e : e + "\0"
                    }

                    function d(e, t) {
                        for (var r, n = e + "", i = 0; i < n.length;) t[u & i] = u & (r ^= 19 * t[u & i]) + n.charCodeAt(i++);
                        return m(t)
                    }

                    function m(e) {
                        return String.fromCharCode.apply(0, e)
                    }

                    t["seed" + s] = function (u, y, g) {
                        var v = [],
                            x = d(f((y = !0 === y ? {entropy: !0} : y || {}).entropy ? [u, m(e)] : null === u ? function () {
                                try {
                                    if (r) return m(r.randomBytes(i));
                                    var t = new Uint8Array(i);
                                    return (n.crypto || n.msCrypto).getRandomValues(t), m(t)
                                } catch (o) {
                                    var a = n.navigator, s = a && a.plugins;
                                    return [+new Date, n, s, n.screen, m(e)]
                                }
                            }() : u, 3), v), b = new c(v), k = function () {
                                for (var e = b.g(a), t = o, r = 0; e < l;) e = (e + r) * i, t *= i, r = b.g(1);
                                for (; e >= h;) e /= 2, t /= 2, r >>>= 1;
                                return (e + r) / t
                            };
                        return k.int32 = function () {
                            return 0 | b.g(4)
                        }, k.quick = function () {
                            return b.g(4) / 4294967296
                        }, k.double = k, d(m(b.S), e), (y.pass || g || function (e, r, n, i) {
                            return i && (i.S && p(i, b), e.state = function () {
                                return p(b, {})
                            }), n ? (t[s] = e, r) : e
                        })(k, x, "global" in y ? y.global : this == t, y.state)
                    }, d(t.random(), e)
                }

                function initialize$2(e) {
                    seedRandom([], e)
                }

                var propTypes = {SHAPE: "shape"};

                function _typeof(e) {
                    return _typeof = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
                        return typeof e
                    } : function (e) {
                        return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    }, _typeof(e)
                }

                var ExpressionManager = function () {
                    var ob = {}, Math = BMMath, window = null, document = null, XMLHttpRequest = null, fetch = null,
                        frames = null;

                    function $bm_isInstanceOfArray(e) {
                        return e.constructor === Array || e.constructor === Float32Array
                    }

                    function isNumerable(e, t) {
                        return "number" === e || "boolean" === e || "string" === e || t instanceof Number
                    }

                    function $bm_neg(e) {
                        var t = _typeof(e);
                        if ("number" === t || "boolean" === t || e instanceof Number) return -e;
                        if ($bm_isInstanceOfArray(e)) {
                            var r, n = e.length, i = [];
                            for (r = 0; r < n; r += 1) i[r] = -e[r];
                            return i
                        }
                        return e.propType ? e.v : -e
                    }

                    initialize$2(BMMath);
                    var easeInBez = BezierFactory.getBezierEasing(.333, 0, .833, .833, "easeIn").get,
                        easeOutBez = BezierFactory.getBezierEasing(.167, .167, .667, 1, "easeOut").get,
                        easeInOutBez = BezierFactory.getBezierEasing(.33, 0, .667, 1, "easeInOut").get;

                    function sum(e, t) {
                        var r = _typeof(e), n = _typeof(t);
                        if ("string" === r || "string" === n) return e + t;
                        if (isNumerable(r, e) && isNumerable(n, t)) return e + t;
                        if ($bm_isInstanceOfArray(e) && isNumerable(n, t)) return (e = e.slice(0))[0] += t, e;
                        if (isNumerable(r, e) && $bm_isInstanceOfArray(t)) return (t = t.slice(0))[0] = e + t[0], t;
                        if ($bm_isInstanceOfArray(e) && $bm_isInstanceOfArray(t)) {
                            for (var i = 0, a = e.length, s = t.length, o = []; i < a || i < s;) ("number" === typeof e[i] || e[i] instanceof Number) && ("number" === typeof t[i] || t[i] instanceof Number) ? o[i] = e[i] + t[i] : o[i] = void 0 === t[i] ? e[i] : e[i] || t[i], i += 1;
                            return o
                        }
                        return 0
                    }

                    var add = sum;

                    function sub(e, t) {
                        var r = _typeof(e), n = _typeof(t);
                        if (isNumerable(r, e) && isNumerable(n, t)) return "string" === r && (e = parseInt(e, 10)), "string" === n && (t = parseInt(t, 10)), e - t;
                        if ($bm_isInstanceOfArray(e) && isNumerable(n, t)) return (e = e.slice(0))[0] -= t, e;
                        if (isNumerable(r, e) && $bm_isInstanceOfArray(t)) return (t = t.slice(0))[0] = e - t[0], t;
                        if ($bm_isInstanceOfArray(e) && $bm_isInstanceOfArray(t)) {
                            for (var i = 0, a = e.length, s = t.length, o = []; i < a || i < s;) ("number" === typeof e[i] || e[i] instanceof Number) && ("number" === typeof t[i] || t[i] instanceof Number) ? o[i] = e[i] - t[i] : o[i] = void 0 === t[i] ? e[i] : e[i] || t[i], i += 1;
                            return o
                        }
                        return 0
                    }

                    function mul(e, t) {
                        var r, n, i, a = _typeof(e), s = _typeof(t);
                        if (isNumerable(a, e) && isNumerable(s, t)) return e * t;
                        if ($bm_isInstanceOfArray(e) && isNumerable(s, t)) {
                            for (i = e.length, r = createTypedArray("float32", i), n = 0; n < i; n += 1) r[n] = e[n] * t;
                            return r
                        }
                        if (isNumerable(a, e) && $bm_isInstanceOfArray(t)) {
                            for (i = t.length, r = createTypedArray("float32", i), n = 0; n < i; n += 1) r[n] = e * t[n];
                            return r
                        }
                        return 0
                    }

                    function div(e, t) {
                        var r, n, i, a = _typeof(e), s = _typeof(t);
                        if (isNumerable(a, e) && isNumerable(s, t)) return e / t;
                        if ($bm_isInstanceOfArray(e) && isNumerable(s, t)) {
                            for (i = e.length, r = createTypedArray("float32", i), n = 0; n < i; n += 1) r[n] = e[n] / t;
                            return r
                        }
                        if (isNumerable(a, e) && $bm_isInstanceOfArray(t)) {
                            for (i = t.length, r = createTypedArray("float32", i), n = 0; n < i; n += 1) r[n] = e / t[n];
                            return r
                        }
                        return 0
                    }

                    function mod(e, t) {
                        return "string" === typeof e && (e = parseInt(e, 10)), "string" === typeof t && (t = parseInt(t, 10)), e % t
                    }

                    var $bm_sum = sum, $bm_sub = sub, $bm_mul = mul, $bm_div = div, $bm_mod = mod;

                    function clamp(e, t, r) {
                        if (t > r) {
                            var n = r;
                            r = t, t = n
                        }
                        return Math.min(Math.max(e, t), r)
                    }

                    function radiansToDegrees(e) {
                        return e / degToRads
                    }

                    var radians_to_degrees = radiansToDegrees;

                    function degreesToRadians(e) {
                        return e * degToRads
                    }

                    var degrees_to_radians = radiansToDegrees, helperLengthArray = [0, 0, 0, 0, 0, 0];

                    function length(e, t) {
                        if ("number" === typeof e || e instanceof Number) return t = t || 0, Math.abs(e - t);
                        var r;
                        t || (t = helperLengthArray);
                        var n = Math.min(e.length, t.length), i = 0;
                        for (r = 0; r < n; r += 1) i += Math.pow(t[r] - e[r], 2);
                        return Math.sqrt(i)
                    }

                    function normalize(e) {
                        return div(e, length(e))
                    }

                    function rgbToHsl(e) {
                        var t, r, n = e[0], i = e[1], a = e[2], s = Math.max(n, i, a), o = Math.min(n, i, a),
                            l = (s + o) / 2;
                        if (s === o) t = 0, r = 0; else {
                            var h = s - o;
                            switch (r = l > .5 ? h / (2 - s - o) : h / (s + o), s) {
                                case n:
                                    t = (i - a) / h + (i < a ? 6 : 0);
                                    break;
                                case i:
                                    t = (a - n) / h + 2;
                                    break;
                                case a:
                                    t = (n - i) / h + 4
                            }
                            t /= 6
                        }
                        return [t, r, l, e[3]]
                    }

                    function hue2rgb(e, t, r) {
                        return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + 6 * (t - e) * r : r < .5 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e
                    }

                    function hslToRgb(e) {
                        var t, r, n, i = e[0], a = e[1], s = e[2];
                        if (0 === a) t = s, n = s, r = s; else {
                            var o = s < .5 ? s * (1 + a) : s + a - s * a, l = 2 * s - o;
                            t = hue2rgb(l, o, i + 1 / 3), r = hue2rgb(l, o, i), n = hue2rgb(l, o, i - 1 / 3)
                        }
                        return [t, r, n, e[3]]
                    }

                    function linear(e, t, r, n, i) {
                        if (void 0 !== n && void 0 !== i || (n = t, i = r, t = 0, r = 1), r < t) {
                            var a = r;
                            r = t, t = a
                        }
                        if (e <= t) return n;
                        if (e >= r) return i;
                        var s, o = r === t ? 0 : (e - t) / (r - t);
                        if (!n.length) return n + (i - n) * o;
                        var l = n.length, h = createTypedArray("float32", l);
                        for (s = 0; s < l; s += 1) h[s] = n[s] + (i[s] - n[s]) * o;
                        return h
                    }

                    function random(e, t) {
                        if (void 0 === t && (void 0 === e ? (e = 0, t = 1) : (t = e, e = void 0)), t.length) {
                            var r, n = t.length;
                            e || (e = createTypedArray("float32", n));
                            var i = createTypedArray("float32", n), a = BMMath.random();
                            for (r = 0; r < n; r += 1) i[r] = e[r] + a * (t[r] - e[r]);
                            return i
                        }
                        return void 0 === e && (e = 0), e + BMMath.random() * (t - e)
                    }

                    function createPath(e, t, r, n) {
                        var i, a = e.length, s = shapePool.newElement();
                        s.setPathData(!!n, a);
                        var o, l, h = [0, 0];
                        for (i = 0; i < a; i += 1) o = t && t[i] ? t[i] : h, l = r && r[i] ? r[i] : h, s.setTripleAt(e[i][0], e[i][1], l[0] + e[i][0], l[1] + e[i][1], o[0] + e[i][0], o[1] + e[i][1], i, !0);
                        return s
                    }

                    function initiateExpression(elem, data, property) {
                        function noOp(e) {
                            return e
                        }

                        if (!elem.globalData.renderConfig.runExpressions) return noOp;
                        var val = data.x, needsVelocity = /velocity(?![\w\d])/.test(val),
                            _needsRandom = -1 !== val.indexOf("random"), elemType = elem.data.ty, transform,
                            $bm_transform, content, effect, thisProperty = property;
                        thisProperty.valueAtTime = thisProperty.getValueAtTime, Object.defineProperty(thisProperty, "value", {
                            get: function () {
                                return thisProperty.v
                            }
                        }), elem.comp.frameDuration = 1 / elem.comp.globalData.frameRate, elem.comp.displayStartTime = 0;
                        var inPoint = elem.data.ip / elem.comp.globalData.frameRate,
                            outPoint = elem.data.op / elem.comp.globalData.frameRate,
                            width = elem.data.sw ? elem.data.sw : 0, height = elem.data.sh ? elem.data.sh : 0,
                            name = elem.data.nm, loopIn, loop_in, loopOut, loop_out, smooth, toWorld, fromWorld,
                            fromComp, toComp, fromCompToSurface, position, rotation, anchorPoint, scale, thisLayer,
                            thisComp, mask, valueAtTime, velocityAtTime, scoped_bm_rt,
                            expression_function = eval("[function _expression_function(){" + val + ";scoped_bm_rt=$bm_rt}]")[0],
                            numKeys = property.kf ? data.k.length : 0, active = !this.data || !0 !== this.data.hd,
                            wiggle = function (e, t) {
                                var r, n, i = this.pv.length ? this.pv.length : 1, a = createTypedArray("float32", i),
                                    s = Math.floor(5 * time);
                                for (r = 0, n = 0; r < s;) {
                                    for (n = 0; n < i; n += 1) a[n] += -t + 2 * t * BMMath.random();
                                    r += 1
                                }
                                var o = 5 * time, l = o - Math.floor(o), h = createTypedArray("float32", i);
                                if (i > 1) {
                                    for (n = 0; n < i; n += 1) h[n] = this.pv[n] + a[n] + (-t + 2 * t * BMMath.random()) * l;
                                    return h
                                }
                                return this.pv + a[0] + (-t + 2 * t * BMMath.random()) * l
                            }.bind(this);

                        function loopInDuration(e, t) {
                            return loopIn(e, t, !0)
                        }

                        function loopOutDuration(e, t) {
                            return loopOut(e, t, !0)
                        }

                        thisProperty.loopIn && (loopIn = thisProperty.loopIn.bind(thisProperty), loop_in = loopIn), thisProperty.loopOut && (loopOut = thisProperty.loopOut.bind(thisProperty), loop_out = loopOut), thisProperty.smooth && (smooth = thisProperty.smooth.bind(thisProperty)), this.getValueAtTime && (valueAtTime = this.getValueAtTime.bind(this)), this.getVelocityAtTime && (velocityAtTime = this.getVelocityAtTime.bind(this));
                        var comp = elem.comp.globalData.projectInterface.bind(elem.comp.globalData.projectInterface),
                            time, velocity, value, text, textIndex, textTotal, selectorValue;

                        function lookAt(e, t) {
                            var r = [t[0] - e[0], t[1] - e[1], t[2] - e[2]],
                                n = Math.atan2(r[0], Math.sqrt(r[1] * r[1] + r[2] * r[2])) / degToRads;
                            return [-Math.atan2(r[1], r[2]) / degToRads, n, 0]
                        }

                        function easeOut(e, t, r, n, i) {
                            return applyEase(easeOutBez, e, t, r, n, i)
                        }

                        function easeIn(e, t, r, n, i) {
                            return applyEase(easeInBez, e, t, r, n, i)
                        }

                        function ease(e, t, r, n, i) {
                            return applyEase(easeInOutBez, e, t, r, n, i)
                        }

                        function applyEase(e, t, r, n, i, a) {
                            void 0 === i ? (i = r, a = n) : t = (t - r) / (n - r), t > 1 ? t = 1 : t < 0 && (t = 0);
                            var s = e(t);
                            if ($bm_isInstanceOfArray(i)) {
                                var o, l = i.length, h = createTypedArray("float32", l);
                                for (o = 0; o < l; o += 1) h[o] = (a[o] - i[o]) * s + i[o];
                                return h
                            }
                            return (a - i) * s + i
                        }

                        function nearestKey(e) {
                            var t, r, n, i = data.k.length;
                            if (data.k.length && "number" !== typeof data.k[0]) if (r = -1, (e *= elem.comp.globalData.frameRate) < data.k[0].t) r = 1, n = data.k[0].t; else {
                                for (t = 0; t < i - 1; t += 1) {
                                    if (e === data.k[t].t) {
                                        r = t + 1, n = data.k[t].t;
                                        break
                                    }
                                    if (e > data.k[t].t && e < data.k[t + 1].t) {
                                        e - data.k[t].t > data.k[t + 1].t - e ? (r = t + 2, n = data.k[t + 1].t) : (r = t + 1, n = data.k[t].t);
                                        break
                                    }
                                }
                                -1 === r && (r = t + 1, n = data.k[t].t)
                            } else r = 0, n = 0;
                            var a = {};
                            return a.index = r, a.time = n / elem.comp.globalData.frameRate, a
                        }

                        function key(e) {
                            var t, r, n;
                            if (!data.k.length || "number" === typeof data.k[0]) throw new Error("The property has no keyframe at index " + e);
                            e -= 1, t = {time: data.k[e].t / elem.comp.globalData.frameRate, value: []};
                            var i = Object.prototype.hasOwnProperty.call(data.k[e], "s") ? data.k[e].s : data.k[e - 1].e;
                            for (n = i.length, r = 0; r < n; r += 1) t[r] = i[r], t.value[r] = i[r];
                            return t
                        }

                        function framesToTime(e, t) {
                            return t || (t = elem.comp.globalData.frameRate), e / t
                        }

                        function timeToFrames(e, t) {
                            return e || 0 === e || (e = time), t || (t = elem.comp.globalData.frameRate), e * t
                        }

                        function seedRandom(e) {
                            BMMath.seedrandom(randSeed + e)
                        }

                        function sourceRectAtTime() {
                            return elem.sourceRectAtTime()
                        }

                        function substring(e, t) {
                            return "string" === typeof value ? void 0 === t ? value.substring(e) : value.substring(e, t) : ""
                        }

                        function substr(e, t) {
                            return "string" === typeof value ? void 0 === t ? value.substr(e) : value.substr(e, t) : ""
                        }

                        function posterizeTime(e) {
                            time = 0 === e ? 0 : Math.floor(time * e) / e, value = valueAtTime(time)
                        }

                        var index = elem.data.ind, hasParent = !(!elem.hierarchy || !elem.hierarchy.length), parent,
                            randSeed = Math.floor(1e6 * Math.random()), globalData = elem.globalData;

                        function executeExpression(e) {
                            return value = e, this.frameExpressionId === elem.globalData.frameId && "textSelector" !== this.propType ? value : ("textSelector" === this.propType && (textIndex = this.textIndex, textTotal = this.textTotal, selectorValue = this.selectorValue), thisLayer || (text = elem.layerInterface.text, thisLayer = elem.layerInterface, thisComp = elem.comp.compInterface, toWorld = thisLayer.toWorld.bind(thisLayer), fromWorld = thisLayer.fromWorld.bind(thisLayer), fromComp = thisLayer.fromComp.bind(thisLayer), toComp = thisLayer.toComp.bind(thisLayer), mask = thisLayer.mask ? thisLayer.mask.bind(thisLayer) : null, fromCompToSurface = fromComp), transform || (transform = elem.layerInterface("ADBE Transform Group"), $bm_transform = transform, transform && (anchorPoint = transform.anchorPoint)), 4 !== elemType || content || (content = thisLayer("ADBE Root Vectors Group")), effect || (effect = thisLayer(4)), (hasParent = !(!elem.hierarchy || !elem.hierarchy.length)) && !parent && (parent = elem.hierarchy[0].layerInterface), time = this.comp.renderedFrame / this.comp.globalData.frameRate, _needsRandom && seedRandom(randSeed + time), needsVelocity && (velocity = velocityAtTime(time)), expression_function(), this.frameExpressionId = elem.globalData.frameId, scoped_bm_rt = scoped_bm_rt.propType === propTypes.SHAPE ? scoped_bm_rt.v : scoped_bm_rt)
                        }

                        return executeExpression.__preventDeadCodeRemoval = [$bm_transform, anchorPoint, time, velocity, inPoint, outPoint, width, height, name, loop_in, loop_out, smooth, toComp, fromCompToSurface, toWorld, fromWorld, mask, position, rotation, scale, thisComp, numKeys, active, wiggle, loopInDuration, loopOutDuration, comp, lookAt, easeOut, easeIn, ease, nearestKey, key, text, textIndex, textTotal, selectorValue, framesToTime, timeToFrames, sourceRectAtTime, substring, substr, posterizeTime, index, globalData], executeExpression
                    }

                    return ob.initiateExpression = initiateExpression, ob.__preventDeadCodeRemoval = [window, document, XMLHttpRequest, fetch, frames, $bm_neg, add, $bm_sum, $bm_sub, $bm_mul, $bm_div, $bm_mod, clamp, radians_to_degrees, degreesToRadians, degrees_to_radians, normalize, rgbToHsl, hslToRgb, linear, random, createPath], ob
                }(), expressionHelpers = {
                    searchExpressions: function (e, t, r) {
                        t.x && (r.k = !0, r.x = !0, r.initiateExpression = ExpressionManager.initiateExpression, r.effectsSequence.push(r.initiateExpression(e, t, r).bind(r)))
                    }, getSpeedAtTime: function (e) {
                        var t = this.getValueAtTime(e), r = this.getValueAtTime(e + -.01), n = 0;
                        if (t.length) {
                            var i;
                            for (i = 0; i < t.length; i += 1) n += Math.pow(r[i] - t[i], 2);
                            n = 100 * Math.sqrt(n)
                        } else n = 0;
                        return n
                    }, getVelocityAtTime: function (e) {
                        if (void 0 !== this.vel) return this.vel;
                        var t, r, n = -.001, i = this.getValueAtTime(e), a = this.getValueAtTime(e + n);
                        if (i.length) for (t = createTypedArray("float32", i.length), r = 0; r < i.length; r += 1) t[r] = (a[r] - i[r]) / n; else t = (a - i) / n;
                        return t
                    }, getValueAtTime: function (e) {
                        return e *= this.elem.globalData.frameRate, (e -= this.offsetTime) !== this._cachingAtTime.lastFrame && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastFrame < e ? this._cachingAtTime.lastIndex : 0, this._cachingAtTime.value = this.interpolateValue(e, this._cachingAtTime), this._cachingAtTime.lastFrame = e), this._cachingAtTime.value
                    }, getStaticValueAtTime: function () {
                        return this.pv
                    }, setGroupProperty: function (e) {
                        this.propertyGroup = e
                    }
                };

                function addPropertyDecorator() {
                    function e(e, t, r) {
                        if (!this.k || !this.keyframes) return this.pv;
                        e = e ? e.toLowerCase() : "";
                        var n, i, a, s, o, l = this.comp.renderedFrame, h = this.keyframes, u = h[h.length - 1].t;
                        if (l <= u) return this.pv;
                        if (r ? i = u - (n = t ? Math.abs(u - this.elem.comp.globalData.frameRate * t) : Math.max(0, u - this.elem.data.ip)) : ((!t || t > h.length - 1) && (t = h.length - 1), n = u - (i = h[h.length - 1 - t].t)), "pingpong" === e) {
                            if (Math.floor((l - i) / n) % 2 !== 0) return this.getValueAtTime((n - (l - i) % n + i) / this.comp.globalData.frameRate, 0)
                        } else {
                            if ("offset" === e) {
                                var c = this.getValueAtTime(i / this.comp.globalData.frameRate, 0),
                                    p = this.getValueAtTime(u / this.comp.globalData.frameRate, 0),
                                    f = this.getValueAtTime(((l - i) % n + i) / this.comp.globalData.frameRate, 0),
                                    d = Math.floor((l - i) / n);
                                if (this.pv.length) {
                                    for (s = (o = new Array(c.length)).length, a = 0; a < s; a += 1) o[a] = (p[a] - c[a]) * d + f[a];
                                    return o
                                }
                                return (p - c) * d + f
                            }
                            if ("continue" === e) {
                                var m = this.getValueAtTime(u / this.comp.globalData.frameRate, 0),
                                    y = this.getValueAtTime((u - .001) / this.comp.globalData.frameRate, 0);
                                if (this.pv.length) {
                                    for (s = (o = new Array(m.length)).length, a = 0; a < s; a += 1) o[a] = m[a] + (m[a] - y[a]) * ((l - u) / this.comp.globalData.frameRate) / 5e-4;
                                    return o
                                }
                                return m + (l - u) / .001 * (m - y)
                            }
                        }
                        return this.getValueAtTime(((l - i) % n + i) / this.comp.globalData.frameRate, 0)
                    }

                    function t(e, t, r) {
                        if (!this.k) return this.pv;
                        e = e ? e.toLowerCase() : "";
                        var n, i, a, s, o, l = this.comp.renderedFrame, h = this.keyframes, u = h[0].t;
                        if (l >= u) return this.pv;
                        if (r ? i = u + (n = t ? Math.abs(this.elem.comp.globalData.frameRate * t) : Math.max(0, this.elem.data.op - u)) : ((!t || t > h.length - 1) && (t = h.length - 1), n = (i = h[t].t) - u), "pingpong" === e) {
                            if (Math.floor((u - l) / n) % 2 === 0) return this.getValueAtTime(((u - l) % n + u) / this.comp.globalData.frameRate, 0)
                        } else {
                            if ("offset" === e) {
                                var c = this.getValueAtTime(u / this.comp.globalData.frameRate, 0),
                                    p = this.getValueAtTime(i / this.comp.globalData.frameRate, 0),
                                    f = this.getValueAtTime((n - (u - l) % n + u) / this.comp.globalData.frameRate, 0),
                                    d = Math.floor((u - l) / n) + 1;
                                if (this.pv.length) {
                                    for (s = (o = new Array(c.length)).length, a = 0; a < s; a += 1) o[a] = f[a] - (p[a] - c[a]) * d;
                                    return o
                                }
                                return f - (p - c) * d
                            }
                            if ("continue" === e) {
                                var m = this.getValueAtTime(u / this.comp.globalData.frameRate, 0),
                                    y = this.getValueAtTime((u + .001) / this.comp.globalData.frameRate, 0);
                                if (this.pv.length) {
                                    for (s = (o = new Array(m.length)).length, a = 0; a < s; a += 1) o[a] = m[a] + (m[a] - y[a]) * (u - l) / .001;
                                    return o
                                }
                                return m + (m - y) * (u - l) / .001
                            }
                        }
                        return this.getValueAtTime((n - ((u - l) % n + u)) / this.comp.globalData.frameRate, 0)
                    }

                    function r(e, t) {
                        if (!this.k) return this.pv;
                        if (e = .5 * (e || .4), (t = Math.floor(t || 5)) <= 1) return this.pv;
                        var r, n, i = this.comp.renderedFrame / this.comp.globalData.frameRate, a = i - e,
                            s = t > 1 ? (i + e - a) / (t - 1) : 1, o = 0, l = 0;
                        for (r = this.pv.length ? createTypedArray("float32", this.pv.length) : 0; o < t;) {
                            if (n = this.getValueAtTime(a + o * s), this.pv.length) for (l = 0; l < this.pv.length; l += 1) r[l] += n[l]; else r += n;
                            o += 1
                        }
                        if (this.pv.length) for (l = 0; l < this.pv.length; l += 1) r[l] /= t; else r /= t;
                        return r
                    }

                    function n(e) {
                        this._transformCachingAtTime || (this._transformCachingAtTime = {v: new Matrix});
                        var t = this._transformCachingAtTime.v;
                        if (t.cloneFromProps(this.pre.props), this.appliedTransformations < 1) {
                            var r = this.a.getValueAtTime(e);
                            t.translate(-r[0] * this.a.mult, -r[1] * this.a.mult, r[2] * this.a.mult)
                        }
                        if (this.appliedTransformations < 2) {
                            var n = this.s.getValueAtTime(e);
                            t.scale(n[0] * this.s.mult, n[1] * this.s.mult, n[2] * this.s.mult)
                        }
                        if (this.sk && this.appliedTransformations < 3) {
                            var i = this.sk.getValueAtTime(e), a = this.sa.getValueAtTime(e);
                            t.skewFromAxis(-i * this.sk.mult, a * this.sa.mult)
                        }
                        if (this.r && this.appliedTransformations < 4) {
                            var s = this.r.getValueAtTime(e);
                            t.rotate(-s * this.r.mult)
                        } else if (!this.r && this.appliedTransformations < 4) {
                            var o = this.rz.getValueAtTime(e), l = this.ry.getValueAtTime(e),
                                h = this.rx.getValueAtTime(e), u = this.or.getValueAtTime(e);
                            t.rotateZ(-o * this.rz.mult).rotateY(l * this.ry.mult).rotateX(h * this.rx.mult).rotateZ(-u[2] * this.or.mult).rotateY(u[1] * this.or.mult).rotateX(u[0] * this.or.mult)
                        }
                        if (this.data.p && this.data.p.s) {
                            var c = this.px.getValueAtTime(e), p = this.py.getValueAtTime(e);
                            if (this.data.p.z) {
                                var f = this.pz.getValueAtTime(e);
                                t.translate(c * this.px.mult, p * this.py.mult, -f * this.pz.mult)
                            } else t.translate(c * this.px.mult, p * this.py.mult, 0)
                        } else {
                            var d = this.p.getValueAtTime(e);
                            t.translate(d[0] * this.p.mult, d[1] * this.p.mult, -d[2] * this.p.mult)
                        }
                        return t
                    }

                    function i() {
                        return this.v.clone(new Matrix)
                    }

                    var a = TransformPropertyFactory.getTransformProperty;
                    TransformPropertyFactory.getTransformProperty = function (e, t, r) {
                        var s = a(e, t, r);
                        return s.dynamicProperties.length ? s.getValueAtTime = n.bind(s) : s.getValueAtTime = i.bind(s), s.setGroupProperty = expressionHelpers.setGroupProperty, s
                    };
                    var s = PropertyFactory.getProp;
                    PropertyFactory.getProp = function (n, i, a, o, l) {
                        var h = s(n, i, a, o, l);
                        h.kf ? h.getValueAtTime = expressionHelpers.getValueAtTime.bind(h) : h.getValueAtTime = expressionHelpers.getStaticValueAtTime.bind(h), h.setGroupProperty = expressionHelpers.setGroupProperty, h.loopOut = e, h.loopIn = t, h.smooth = r, h.getVelocityAtTime = expressionHelpers.getVelocityAtTime.bind(h), h.getSpeedAtTime = expressionHelpers.getSpeedAtTime.bind(h), h.numKeys = 1 === i.a ? i.k.length : 0, h.propertyIndex = i.ix;
                        var u = 0;
                        return 0 !== a && (u = createTypedArray("float32", 1 === i.a ? i.k[0].s.length : i.k.length)), h._cachingAtTime = {
                            lastFrame: initialDefaultFrame,
                            lastIndex: 0,
                            value: u
                        }, expressionHelpers.searchExpressions(n, i, h), h.k && l.addDynamicProperty(h), h
                    };
                    var o = ShapePropertyFactory.getConstructorFunction(),
                        l = ShapePropertyFactory.getKeyframedConstructorFunction();

                    function h() {
                    }

                    h.prototype = {
                        vertices: function (e, t) {
                            this.k && this.getValue();
                            var r, n = this.v;
                            void 0 !== t && (n = this.getValueAtTime(t, 0));
                            var i = n._length, a = n[e], s = n.v, o = createSizedArray(i);
                            for (r = 0; r < i; r += 1) o[r] = "i" === e || "o" === e ? [a[r][0] - s[r][0], a[r][1] - s[r][1]] : [a[r][0], a[r][1]];
                            return o
                        },
                        points: function (e) {
                            return this.vertices("v", e)
                        },
                        inTangents: function (e) {
                            return this.vertices("i", e)
                        },
                        outTangents: function (e) {
                            return this.vertices("o", e)
                        },
                        isClosed: function () {
                            return this.v.c
                        },
                        pointOnPath: function (e, t) {
                            var r = this.v;
                            void 0 !== t && (r = this.getValueAtTime(t, 0)), this._segmentsLength || (this._segmentsLength = bez.getSegmentsLength(r));
                            for (var n, i = this._segmentsLength, a = i.lengths, s = i.totalLength * e, o = 0, l = a.length, h = 0; o < l;) {
                                if (h + a[o].addedLength > s) {
                                    var u = o, c = r.c && o === l - 1 ? 0 : o + 1, p = (s - h) / a[o].addedLength;
                                    n = bez.getPointInSegment(r.v[u], r.v[c], r.o[u], r.i[c], p, a[o]);
                                    break
                                }
                                h += a[o].addedLength, o += 1
                            }
                            return n || (n = r.c ? [r.v[0][0], r.v[0][1]] : [r.v[r._length - 1][0], r.v[r._length - 1][1]]), n
                        },
                        vectorOnPath: function (e, t, r) {
                            1 == e ? e = this.v.c : 0 == e && (e = .999);
                            var n = this.pointOnPath(e, t), i = this.pointOnPath(e + .001, t), a = i[0] - n[0],
                                s = i[1] - n[1], o = Math.sqrt(Math.pow(a, 2) + Math.pow(s, 2));
                            return 0 === o ? [0, 0] : "tangent" === r ? [a / o, s / o] : [-s / o, a / o]
                        },
                        tangentOnPath: function (e, t) {
                            return this.vectorOnPath(e, t, "tangent")
                        },
                        normalOnPath: function (e, t) {
                            return this.vectorOnPath(e, t, "normal")
                        },
                        setGroupProperty: expressionHelpers.setGroupProperty,
                        getValueAtTime: expressionHelpers.getStaticValueAtTime
                    }, extendPrototype([h], o), extendPrototype([h], l), l.prototype.getValueAtTime = function (e) {
                        return this._cachingAtTime || (this._cachingAtTime = {
                            shapeValue: shapePool.clone(this.pv),
                            lastIndex: 0,
                            lastTime: initialDefaultFrame
                        }), e *= this.elem.globalData.frameRate, (e -= this.offsetTime) !== this._cachingAtTime.lastTime && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastTime < e ? this._caching.lastIndex : 0, this._cachingAtTime.lastTime = e, this.interpolateShape(e, this._cachingAtTime.shapeValue, this._cachingAtTime)), this._cachingAtTime.shapeValue
                    }, l.prototype.initiateExpression = ExpressionManager.initiateExpression;
                    var u = ShapePropertyFactory.getShapeProp;
                    ShapePropertyFactory.getShapeProp = function (e, t, r, n, i) {
                        var a = u(e, t, r, n, i);
                        return a.propertyIndex = t.ix, a.lock = !1, 3 === r ? expressionHelpers.searchExpressions(e, t.pt, a) : 4 === r && expressionHelpers.searchExpressions(e, t.ks, a), a.k && e.addDynamicProperty(a), a
                    }
                }

                function initialize$1() {
                    addPropertyDecorator()
                }

                function addDecorator() {
                    TextProperty.prototype.getExpressionValue = function (e, t) {
                        var r = this.calculateExpression(t);
                        if (e.t !== r) {
                            var n = {};
                            return this.copyData(n, e), n.t = r.toString(), n.__complete = !1, n
                        }
                        return e
                    }, TextProperty.prototype.searchProperty = function () {
                        var e = this.searchKeyframes(), t = this.searchExpressions();
                        return this.kf = e || t, this.kf
                    }, TextProperty.prototype.searchExpressions = function () {
                        return this.data.d.x ? (this.calculateExpression = ExpressionManager.initiateExpression.bind(this)(this.elem, this.data.d, this), this.addEffect(this.getExpressionValue.bind(this)), !0) : null
                    }
                }

                function initialize() {
                    addDecorator()
                }

                function SVGComposableEffect() {
                }

                SVGComposableEffect.prototype = {
                    createMergeNode: function (e, t) {
                        var r, n, i = createNS("feMerge");
                        for (i.setAttribute("result", e), n = 0; n < t.length; n += 1) (r = createNS("feMergeNode")).setAttribute("in", t[n]), i.appendChild(r), i.appendChild(r);
                        return i
                    }
                };
                var linearFilterValue = "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0";

                function SVGTintFilter(e, t, r, n, i) {
                    this.filterManager = t;
                    var a = createNS("feColorMatrix");
                    a.setAttribute("type", "matrix"), a.setAttribute("color-interpolation-filters", "linearRGB"), a.setAttribute("values", linearFilterValue + " 1 0"), this.linearFilter = a, a.setAttribute("result", n + "_tint_1"), e.appendChild(a), (a = createNS("feColorMatrix")).setAttribute("type", "matrix"), a.setAttribute("color-interpolation-filters", "sRGB"), a.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), a.setAttribute("result", n + "_tint_2"), e.appendChild(a), this.matrixFilter = a;
                    var s = this.createMergeNode(n, [i, n + "_tint_1", n + "_tint_2"]);
                    e.appendChild(s)
                }

                function SVGFillFilter(e, t, r, n) {
                    this.filterManager = t;
                    var i = createNS("feColorMatrix");
                    i.setAttribute("type", "matrix"), i.setAttribute("color-interpolation-filters", "sRGB"), i.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), i.setAttribute("result", n), e.appendChild(i), this.matrixFilter = i
                }

                function SVGStrokeEffect(e, t, r) {
                    this.initialized = !1, this.filterManager = t, this.elem = r, this.paths = []
                }

                function SVGTritoneFilter(e, t, r, n) {
                    this.filterManager = t;
                    var i = createNS("feColorMatrix");
                    i.setAttribute("type", "matrix"), i.setAttribute("color-interpolation-filters", "linearRGB"), i.setAttribute("values", "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"), e.appendChild(i);
                    var a = createNS("feComponentTransfer");
                    a.setAttribute("color-interpolation-filters", "sRGB"), a.setAttribute("result", n), this.matrixFilter = a;
                    var s = createNS("feFuncR");
                    s.setAttribute("type", "table"), a.appendChild(s), this.feFuncR = s;
                    var o = createNS("feFuncG");
                    o.setAttribute("type", "table"), a.appendChild(o), this.feFuncG = o;
                    var l = createNS("feFuncB");
                    l.setAttribute("type", "table"), a.appendChild(l), this.feFuncB = l, e.appendChild(a)
                }

                function SVGProLevelsFilter(e, t, r, n) {
                    this.filterManager = t;
                    var i = this.filterManager.effectElements, a = createNS("feComponentTransfer");
                    (i[10].p.k || 0 !== i[10].p.v || i[11].p.k || 1 !== i[11].p.v || i[12].p.k || 1 !== i[12].p.v || i[13].p.k || 0 !== i[13].p.v || i[14].p.k || 1 !== i[14].p.v) && (this.feFuncR = this.createFeFunc("feFuncR", a)), (i[17].p.k || 0 !== i[17].p.v || i[18].p.k || 1 !== i[18].p.v || i[19].p.k || 1 !== i[19].p.v || i[20].p.k || 0 !== i[20].p.v || i[21].p.k || 1 !== i[21].p.v) && (this.feFuncG = this.createFeFunc("feFuncG", a)), (i[24].p.k || 0 !== i[24].p.v || i[25].p.k || 1 !== i[25].p.v || i[26].p.k || 1 !== i[26].p.v || i[27].p.k || 0 !== i[27].p.v || i[28].p.k || 1 !== i[28].p.v) && (this.feFuncB = this.createFeFunc("feFuncB", a)), (i[31].p.k || 0 !== i[31].p.v || i[32].p.k || 1 !== i[32].p.v || i[33].p.k || 1 !== i[33].p.v || i[34].p.k || 0 !== i[34].p.v || i[35].p.k || 1 !== i[35].p.v) && (this.feFuncA = this.createFeFunc("feFuncA", a)), (this.feFuncR || this.feFuncG || this.feFuncB || this.feFuncA) && (a.setAttribute("color-interpolation-filters", "sRGB"), e.appendChild(a)), (i[3].p.k || 0 !== i[3].p.v || i[4].p.k || 1 !== i[4].p.v || i[5].p.k || 1 !== i[5].p.v || i[6].p.k || 0 !== i[6].p.v || i[7].p.k || 1 !== i[7].p.v) && ((a = createNS("feComponentTransfer")).setAttribute("color-interpolation-filters", "sRGB"), a.setAttribute("result", n), e.appendChild(a), this.feFuncRComposed = this.createFeFunc("feFuncR", a), this.feFuncGComposed = this.createFeFunc("feFuncG", a), this.feFuncBComposed = this.createFeFunc("feFuncB", a))
                }

                function SVGDropShadowEffect(e, t, r, n, i) {
                    var a = t.container.globalData.renderConfig.filterSize, s = t.data.fs || a;
                    e.setAttribute("x", s.x || a.x), e.setAttribute("y", s.y || a.y), e.setAttribute("width", s.width || a.width), e.setAttribute("height", s.height || a.height), this.filterManager = t;
                    var o = createNS("feGaussianBlur");
                    o.setAttribute("in", "SourceAlpha"), o.setAttribute("result", n + "_drop_shadow_1"), o.setAttribute("stdDeviation", "0"), this.feGaussianBlur = o, e.appendChild(o);
                    var l = createNS("feOffset");
                    l.setAttribute("dx", "25"), l.setAttribute("dy", "0"), l.setAttribute("in", n + "_drop_shadow_1"), l.setAttribute("result", n + "_drop_shadow_2"), this.feOffset = l, e.appendChild(l);
                    var h = createNS("feFlood");
                    h.setAttribute("flood-color", "#00ff00"), h.setAttribute("flood-opacity", "1"), h.setAttribute("result", n + "_drop_shadow_3"), this.feFlood = h, e.appendChild(h);
                    var u = createNS("feComposite");
                    u.setAttribute("in", n + "_drop_shadow_3"), u.setAttribute("in2", n + "_drop_shadow_2"), u.setAttribute("operator", "in"), u.setAttribute("result", n + "_drop_shadow_4"), e.appendChild(u);
                    var c = this.createMergeNode(n, [n + "_drop_shadow_4", i]);
                    e.appendChild(c)
                }

                extendPrototype([SVGComposableEffect], SVGTintFilter), SVGTintFilter.prototype.renderFrame = function (e) {
                    if (e || this.filterManager._mdf) {
                        var t = this.filterManager.effectElements[0].p.v, r = this.filterManager.effectElements[1].p.v,
                            n = this.filterManager.effectElements[2].p.v / 100;
                        this.linearFilter.setAttribute("values", linearFilterValue + " " + n + " 0"), this.matrixFilter.setAttribute("values", r[0] - t[0] + " 0 0 0 " + t[0] + " " + (r[1] - t[1]) + " 0 0 0 " + t[1] + " " + (r[2] - t[2]) + " 0 0 0 " + t[2] + " 0 0 0 1 0")
                    }
                }, SVGFillFilter.prototype.renderFrame = function (e) {
                    if (e || this.filterManager._mdf) {
                        var t = this.filterManager.effectElements[2].p.v, r = this.filterManager.effectElements[6].p.v;
                        this.matrixFilter.setAttribute("values", "0 0 0 0 " + t[0] + " 0 0 0 0 " + t[1] + " 0 0 0 0 " + t[2] + " 0 0 0 " + r + " 0")
                    }
                }, SVGStrokeEffect.prototype.initialize = function () {
                    var e, t, r, n, i = this.elem.layerElement.children || this.elem.layerElement.childNodes;
                    for (1 === this.filterManager.effectElements[1].p.v ? (n = this.elem.maskManager.masksProperties.length, r = 0) : n = 1 + (r = this.filterManager.effectElements[0].p.v - 1), (t = createNS("g")).setAttribute("fill", "none"), t.setAttribute("stroke-linecap", "round"), t.setAttribute("stroke-dashoffset", 1); r < n; r += 1) e = createNS("path"), t.appendChild(e), this.paths.push({
                        p: e,
                        m: r
                    });
                    if (3 === this.filterManager.effectElements[10].p.v) {
                        var a = createNS("mask"), s = createElementID();
                        a.setAttribute("id", s), a.setAttribute("mask-type", "alpha"), a.appendChild(t), this.elem.globalData.defs.appendChild(a);
                        var o = createNS("g");
                        for (o.setAttribute("mask", "url(" + getLocationHref() + "#" + s + ")"); i[0];) o.appendChild(i[0]);
                        this.elem.layerElement.appendChild(o), this.masker = a, t.setAttribute("stroke", "#fff")
                    } else if (1 === this.filterManager.effectElements[10].p.v || 2 === this.filterManager.effectElements[10].p.v) {
                        if (2 === this.filterManager.effectElements[10].p.v) for (i = this.elem.layerElement.children || this.elem.layerElement.childNodes; i.length;) this.elem.layerElement.removeChild(i[0]);
                        this.elem.layerElement.appendChild(t), this.elem.layerElement.removeAttribute("mask"), t.setAttribute("stroke", "#fff")
                    }
                    this.initialized = !0, this.pathMasker = t
                }, SVGStrokeEffect.prototype.renderFrame = function (e) {
                    var t;
                    this.initialized || this.initialize();
                    var r, n, i = this.paths.length;
                    for (t = 0; t < i; t += 1) if (-1 !== this.paths[t].m && (r = this.elem.maskManager.viewData[this.paths[t].m], n = this.paths[t].p, (e || this.filterManager._mdf || r.prop._mdf) && n.setAttribute("d", r.lastPath), e || this.filterManager.effectElements[9].p._mdf || this.filterManager.effectElements[4].p._mdf || this.filterManager.effectElements[7].p._mdf || this.filterManager.effectElements[8].p._mdf || r.prop._mdf)) {
                        var a;
                        if (0 !== this.filterManager.effectElements[7].p.v || 100 !== this.filterManager.effectElements[8].p.v) {
                            var s = .01 * Math.min(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v),
                                o = .01 * Math.max(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v),
                                l = n.getTotalLength();
                            a = "0 0 0 " + l * s + " ";
                            var h, u = l * (o - s),
                                c = 1 + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * .01,
                                p = Math.floor(u / c);
                            for (h = 0; h < p; h += 1) a += "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * .01 + " ";
                            a += "0 " + 10 * l + " 0 0"
                        } else a = "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * .01;
                        n.setAttribute("stroke-dasharray", a)
                    }
                    if ((e || this.filterManager.effectElements[4].p._mdf) && this.pathMasker.setAttribute("stroke-width", 2 * this.filterManager.effectElements[4].p.v), (e || this.filterManager.effectElements[6].p._mdf) && this.pathMasker.setAttribute("opacity", this.filterManager.effectElements[6].p.v), (1 === this.filterManager.effectElements[10].p.v || 2 === this.filterManager.effectElements[10].p.v) && (e || this.filterManager.effectElements[3].p._mdf)) {
                        var f = this.filterManager.effectElements[3].p.v;
                        this.pathMasker.setAttribute("stroke", "rgb(" + bmFloor(255 * f[0]) + "," + bmFloor(255 * f[1]) + "," + bmFloor(255 * f[2]) + ")")
                    }
                }, SVGTritoneFilter.prototype.renderFrame = function (e) {
                    if (e || this.filterManager._mdf) {
                        var t = this.filterManager.effectElements[0].p.v, r = this.filterManager.effectElements[1].p.v,
                            n = this.filterManager.effectElements[2].p.v, i = n[0] + " " + r[0] + " " + t[0],
                            a = n[1] + " " + r[1] + " " + t[1], s = n[2] + " " + r[2] + " " + t[2];
                        this.feFuncR.setAttribute("tableValues", i), this.feFuncG.setAttribute("tableValues", a), this.feFuncB.setAttribute("tableValues", s)
                    }
                }, SVGProLevelsFilter.prototype.createFeFunc = function (e, t) {
                    var r = createNS(e);
                    return r.setAttribute("type", "table"), t.appendChild(r), r
                }, SVGProLevelsFilter.prototype.getTableValue = function (e, t, r, n, i) {
                    for (var a, s, o = 0, l = Math.min(e, t), h = Math.max(e, t), u = Array.call(null, {length: 256}), c = 0, p = i - n, f = t - e; o <= 256;) s = (a = o / 256) <= l ? f < 0 ? i : n : a >= h ? f < 0 ? n : i : n + p * Math.pow((a - e) / f, 1 / r), u[c] = s, c += 1, o += 256 / 255;
                    return u.join(" ")
                }, SVGProLevelsFilter.prototype.renderFrame = function (e) {
                    if (e || this.filterManager._mdf) {
                        var t, r = this.filterManager.effectElements;
                        this.feFuncRComposed && (e || r[3].p._mdf || r[4].p._mdf || r[5].p._mdf || r[6].p._mdf || r[7].p._mdf) && (t = this.getTableValue(r[3].p.v, r[4].p.v, r[5].p.v, r[6].p.v, r[7].p.v), this.feFuncRComposed.setAttribute("tableValues", t), this.feFuncGComposed.setAttribute("tableValues", t), this.feFuncBComposed.setAttribute("tableValues", t)), this.feFuncR && (e || r[10].p._mdf || r[11].p._mdf || r[12].p._mdf || r[13].p._mdf || r[14].p._mdf) && (t = this.getTableValue(r[10].p.v, r[11].p.v, r[12].p.v, r[13].p.v, r[14].p.v), this.feFuncR.setAttribute("tableValues", t)), this.feFuncG && (e || r[17].p._mdf || r[18].p._mdf || r[19].p._mdf || r[20].p._mdf || r[21].p._mdf) && (t = this.getTableValue(r[17].p.v, r[18].p.v, r[19].p.v, r[20].p.v, r[21].p.v), this.feFuncG.setAttribute("tableValues", t)), this.feFuncB && (e || r[24].p._mdf || r[25].p._mdf || r[26].p._mdf || r[27].p._mdf || r[28].p._mdf) && (t = this.getTableValue(r[24].p.v, r[25].p.v, r[26].p.v, r[27].p.v, r[28].p.v), this.feFuncB.setAttribute("tableValues", t)), this.feFuncA && (e || r[31].p._mdf || r[32].p._mdf || r[33].p._mdf || r[34].p._mdf || r[35].p._mdf) && (t = this.getTableValue(r[31].p.v, r[32].p.v, r[33].p.v, r[34].p.v, r[35].p.v), this.feFuncA.setAttribute("tableValues", t))
                    }
                }, extendPrototype([SVGComposableEffect], SVGDropShadowEffect), SVGDropShadowEffect.prototype.renderFrame = function (e) {
                    if (e || this.filterManager._mdf) {
                        if ((e || this.filterManager.effectElements[4].p._mdf) && this.feGaussianBlur.setAttribute("stdDeviation", this.filterManager.effectElements[4].p.v / 4), e || this.filterManager.effectElements[0].p._mdf) {
                            var t = this.filterManager.effectElements[0].p.v;
                            this.feFlood.setAttribute("flood-color", rgbToHex(Math.round(255 * t[0]), Math.round(255 * t[1]), Math.round(255 * t[2])))
                        }
                        if ((e || this.filterManager.effectElements[1].p._mdf) && this.feFlood.setAttribute("flood-opacity", this.filterManager.effectElements[1].p.v / 255), e || this.filterManager.effectElements[2].p._mdf || this.filterManager.effectElements[3].p._mdf) {
                            var r = this.filterManager.effectElements[3].p.v,
                                n = (this.filterManager.effectElements[2].p.v - 90) * degToRads, i = r * Math.cos(n),
                                a = r * Math.sin(n);
                            this.feOffset.setAttribute("dx", i), this.feOffset.setAttribute("dy", a)
                        }
                    }
                };
                var _svgMatteSymbols = [];

                function SVGMatte3Effect(e, t, r) {
                    this.initialized = !1, this.filterManager = t, this.filterElem = e, this.elem = r, r.matteElement = createNS("g"), r.matteElement.appendChild(r.layerElement), r.matteElement.appendChild(r.transformedElement), r.baseElement = r.matteElement
                }

                function SVGGaussianBlurEffect(e, t, r, n) {
                    e.setAttribute("x", "-100%"), e.setAttribute("y", "-100%"), e.setAttribute("width", "300%"), e.setAttribute("height", "300%"), this.filterManager = t;
                    var i = createNS("feGaussianBlur");
                    i.setAttribute("result", n), e.appendChild(i), this.feGaussianBlur = i
                }

                return SVGMatte3Effect.prototype.findSymbol = function (e) {
                    for (var t = 0, r = _svgMatteSymbols.length; t < r;) {
                        if (_svgMatteSymbols[t] === e) return _svgMatteSymbols[t];
                        t += 1
                    }
                    return null
                }, SVGMatte3Effect.prototype.replaceInParent = function (e, t) {
                    var r = e.layerElement.parentNode;
                    if (r) {
                        for (var n, i = r.children, a = 0, s = i.length; a < s && i[a] !== e.layerElement;) a += 1;
                        a <= s - 2 && (n = i[a + 1]);
                        var o = createNS("use");
                        o.setAttribute("href", "#" + t), n ? r.insertBefore(o, n) : r.appendChild(o)
                    }
                }, SVGMatte3Effect.prototype.setElementAsMask = function (e, t) {
                    if (!this.findSymbol(t)) {
                        var r = createElementID(), n = createNS("mask");
                        n.setAttribute("id", t.layerId), n.setAttribute("mask-type", "alpha"), _svgMatteSymbols.push(t);
                        var i = e.globalData.defs;
                        i.appendChild(n);
                        var a = createNS("symbol");
                        a.setAttribute("id", r), this.replaceInParent(t, r), a.appendChild(t.layerElement), i.appendChild(a);
                        var s = createNS("use");
                        s.setAttribute("href", "#" + r), n.appendChild(s), t.data.hd = !1, t.show()
                    }
                    e.setMatte(t.layerId)
                }, SVGMatte3Effect.prototype.initialize = function () {
                    for (var e = this.filterManager.effectElements[0].p.v, t = this.elem.comp.elements, r = 0, n = t.length; r < n;) t[r] && t[r].data.ind === e && this.setElementAsMask(this.elem, t[r]), r += 1;
                    this.initialized = !0
                }, SVGMatte3Effect.prototype.renderFrame = function () {
                    this.initialized || this.initialize()
                }, SVGGaussianBlurEffect.prototype.renderFrame = function (e) {
                    if (e || this.filterManager._mdf) {
                        var t = .3 * this.filterManager.effectElements[0].p.v,
                            r = this.filterManager.effectElements[1].p.v, n = 3 == r ? 0 : t, i = 2 == r ? 0 : t;
                        this.feGaussianBlur.setAttribute("stdDeviation", n + " " + i);
                        var a = 1 == this.filterManager.effectElements[2].p.v ? "wrap" : "duplicate";
                        this.feGaussianBlur.setAttribute("edgeMode", a)
                    }
                }, registerRenderer("canvas", CanvasRenderer), registerRenderer("html", HybridRenderer), registerRenderer("svg", SVGRenderer), ShapeModifiers.registerModifier("tm", TrimModifier), ShapeModifiers.registerModifier("pb", PuckerAndBloatModifier), ShapeModifiers.registerModifier("rp", RepeaterModifier), ShapeModifiers.registerModifier("rd", RoundCornersModifier), ShapeModifiers.registerModifier("zz", ZigZagModifier), ShapeModifiers.registerModifier("op", OffsetPathModifier), setExpressionsPlugin(Expressions), setExpressionInterfaces(getInterface), initialize$1(), initialize(), registerEffect(20, SVGTintFilter, !0), registerEffect(21, SVGFillFilter, !0), registerEffect(22, SVGStrokeEffect, !1), registerEffect(23, SVGTritoneFilter, !0), registerEffect(24, SVGProLevelsFilter, !0), registerEffect(25, SVGDropShadowEffect, !0), registerEffect(28, SVGMatte3Effect, !1), registerEffect(29, SVGGaussianBlurEffect, !0), lottie
            }, module.exports = factory())
        }, 470: function (e, t, r) {
            "use strict";
            var n = r(390), i = r(124);

            function a(e) {
                for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, r = 1; r < arguments.length; r++) t += "&args[]=" + encodeURIComponent(arguments[r]);
                return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
            }

            var s = new Set, o = {};

            function l(e, t) {
                h(e, t), h(e + "Capture", t)
            }

            function h(e, t) {
                for (o[e] = t, e = 0; e < t.length; e++) s.add(t[e])
            }

            var u = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement),
                c = Object.prototype.hasOwnProperty,
                p = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
                f = {}, d = {};

            function m(e, t, r, n, i, a, s) {
                this.acceptsBooleans = 2 === t || 3 === t || 4 === t, this.attributeName = n, this.attributeNamespace = i, this.mustUseProperty = r, this.propertyName = e, this.type = t, this.sanitizeURL = a, this.removeEmptyString = s
            }

            var y = {};
            "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function (e) {
                y[e] = new m(e, 0, !1, e, null, !1, !1)
            })), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach((function (e) {
                var t = e[0];
                y[t] = new m(t, 1, !1, e[1], null, !1, !1)
            })), ["contentEditable", "draggable", "spellCheck", "value"].forEach((function (e) {
                y[e] = new m(e, 2, !1, e.toLowerCase(), null, !1, !1)
            })), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach((function (e) {
                y[e] = new m(e, 2, !1, e, null, !1, !1)
            })), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function (e) {
                y[e] = new m(e, 3, !1, e.toLowerCase(), null, !1, !1)
            })), ["checked", "multiple", "muted", "selected"].forEach((function (e) {
                y[e] = new m(e, 3, !0, e, null, !1, !1)
            })), ["capture", "download"].forEach((function (e) {
                y[e] = new m(e, 4, !1, e, null, !1, !1)
            })), ["cols", "rows", "size", "span"].forEach((function (e) {
                y[e] = new m(e, 6, !1, e, null, !1, !1)
            })), ["rowSpan", "start"].forEach((function (e) {
                y[e] = new m(e, 5, !1, e.toLowerCase(), null, !1, !1)
            }));
            var g = /[\-:]([a-z])/g;

            function v(e) {
                return e[1].toUpperCase()
            }

            function x(e, t, r, n) {
                var i = y.hasOwnProperty(t) ? y[t] : null;
                (null !== i ? 0 !== i.type : n || !(2 < t.length) || "o" !== t[0] && "O" !== t[0] || "n" !== t[1] && "N" !== t[1]) && (function (e, t, r, n) {
                    if (null === t || "undefined" === typeof t || function (e, t, r, n) {
                        if (null !== r && 0 === r.type) return !1;
                        switch (typeof t) {
                            case"function":
                            case"symbol":
                                return !0;
                            case"boolean":
                                return !n && (null !== r ? !r.acceptsBooleans : "data-" !== (e = e.toLowerCase().slice(0, 5)) && "aria-" !== e);
                            default:
                                return !1
                        }
                    }(e, t, r, n)) return !0;
                    if (n) return !1;
                    if (null !== r) switch (r.type) {
                        case 3:
                            return !t;
                        case 4:
                            return !1 === t;
                        case 5:
                            return isNaN(t);
                        case 6:
                            return isNaN(t) || 1 > t
                    }
                    return !1
                }(t, r, i, n) && (r = null), n || null === i ? function (e) {
                    return !!c.call(d, e) || !c.call(f, e) && (p.test(e) ? d[e] = !0 : (f[e] = !0, !1))
                }(t) && (null === r ? e.removeAttribute(t) : e.setAttribute(t, "" + r)) : i.mustUseProperty ? e[i.propertyName] = null === r ? 3 !== i.type && "" : r : (t = i.attributeName, n = i.attributeNamespace, null === r ? e.removeAttribute(t) : (r = 3 === (i = i.type) || 4 === i && !0 === r ? "" : "" + r, n ? e.setAttributeNS(n, t, r) : e.setAttribute(t, r))))
            }

            "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function (e) {
                var t = e.replace(g, v);
                y[t] = new m(t, 1, !1, e, null, !1, !1)
            })), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function (e) {
                var t = e.replace(g, v);
                y[t] = new m(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
            })), ["xml:base", "xml:lang", "xml:space"].forEach((function (e) {
                var t = e.replace(g, v);
                y[t] = new m(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
            })), ["tabIndex", "crossOrigin"].forEach((function (e) {
                y[e] = new m(e, 1, !1, e.toLowerCase(), null, !1, !1)
            })), y.xlinkHref = new m("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach((function (e) {
                y[e] = new m(e, 1, !1, e.toLowerCase(), null, !0, !0)
            }));
            var b = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, k = Symbol.for("react.element"),
                S = Symbol.for("react.portal"), E = Symbol.for("react.fragment"), P = Symbol.for("react.strict_mode"),
                w = Symbol.for("react.profiler"), _ = Symbol.for("react.provider"), C = Symbol.for("react.context"),
                A = Symbol.for("react.forward_ref"), D = Symbol.for("react.suspense"),
                T = Symbol.for("react.suspense_list"), M = Symbol.for("react.memo"), F = Symbol.for("react.lazy");
            Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
            var I = Symbol.for("react.offscreen");
            Symbol.for("react.legacy_hidden"), Symbol.for("react.cache"), Symbol.for("react.tracing_marker");
            var B = Symbol.iterator;

            function j(e) {
                return null === e || "object" !== typeof e ? null : "function" === typeof (e = B && e[B] || e["@@iterator"]) ? e : null
            }

            var R, V = Object.assign;

            function L(e) {
                if (void 0 === R) try {
                    throw Error()
                } catch (r) {
                    var t = r.stack.trim().match(/\n( *(at )?)/);
                    R = t && t[1] || ""
                }
                return "\n" + R + e
            }

            var N = !1;

            function O(e, t) {
                if (!e || N) return "";
                N = !0;
                var r = Error.prepareStackTrace;
                Error.prepareStackTrace = void 0;
                try {
                    if (t) if (t = function () {
                        throw Error()
                    }, Object.defineProperty(t.prototype, "props", {
                        set: function () {
                            throw Error()
                        }
                    }), "object" === typeof Reflect && Reflect.construct) {
                        try {
                            Reflect.construct(t, [])
                        } catch (h) {
                            var n = h
                        }
                        Reflect.construct(e, [], t)
                    } else {
                        try {
                            t.call()
                        } catch (h) {
                            n = h
                        }
                        e.call(t.prototype)
                    } else {
                        try {
                            throw Error()
                        } catch (h) {
                            n = h
                        }
                        e()
                    }
                } catch (h) {
                    if (h && n && "string" === typeof h.stack) {
                        for (var i = h.stack.split("\n"), a = n.stack.split("\n"), s = i.length - 1, o = a.length - 1; 1 <= s && 0 <= o && i[s] !== a[o];) o--;
                        for (; 1 <= s && 0 <= o; s--, o--) if (i[s] !== a[o]) {
                            if (1 !== s || 1 !== o) do {
                                if (s--, 0 > --o || i[s] !== a[o]) {
                                    var l = "\n" + i[s].replace(" at new ", " at ");
                                    return e.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", e.displayName)), l
                                }
                            } while (1 <= s && 0 <= o);
                            break
                        }
                    }
                } finally {
                    N = !1, Error.prepareStackTrace = r
                }
                return (e = e ? e.displayName || e.name : "") ? L(e) : ""
            }

            function z(e) {
                switch (e.tag) {
                    case 5:
                        return L(e.type);
                    case 16:
                        return L("Lazy");
                    case 13:
                        return L("Suspense");
                    case 19:
                        return L("SuspenseList");
                    case 0:
                    case 2:
                    case 15:
                        return e = O(e.type, !1);
                    case 11:
                        return e = O(e.type.render, !1);
                    case 1:
                        return e = O(e.type, !0);
                    default:
                        return ""
                }
            }

            function G(e) {
                if (null == e) return null;
                if ("function" === typeof e) return e.displayName || e.name || null;
                if ("string" === typeof e) return e;
                switch (e) {
                    case E:
                        return "Fragment";
                    case S:
                        return "Portal";
                    case w:
                        return "Profiler";
                    case P:
                        return "StrictMode";
                    case D:
                        return "Suspense";
                    case T:
                        return "SuspenseList"
                }
                if ("object" === typeof e) switch (e.$$typeof) {
                    case C:
                        return (e.displayName || "Context") + ".Consumer";
                    case _:
                        return (e._context.displayName || "Context") + ".Provider";
                    case A:
                        var t = e.render;
                        return (e = e.displayName) || (e = "" !== (e = t.displayName || t.name || "") ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
                    case M:
                        return null !== (t = e.displayName || null) ? t : G(e.type) || "Memo";
                    case F:
                        t = e._payload, e = e._init;
                        try {
                            return G(e(t))
                        } catch (r) {
                        }
                }
                return null
            }

            function H(e) {
                var t = e.type;
                switch (e.tag) {
                    case 24:
                        return "Cache";
                    case 9:
                        return (t.displayName || "Context") + ".Consumer";
                    case 10:
                        return (t._context.displayName || "Context") + ".Provider";
                    case 18:
                        return "DehydratedFragment";
                    case 11:
                        return e = (e = t.render).displayName || e.name || "", t.displayName || ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef");
                    case 7:
                        return "Fragment";
                    case 5:
                        return t;
                    case 4:
                        return "Portal";
                    case 3:
                        return "Root";
                    case 6:
                        return "Text";
                    case 16:
                        return G(t);
                    case 8:
                        return t === P ? "StrictMode" : "Mode";
                    case 22:
                        return "Offscreen";
                    case 12:
                        return "Profiler";
                    case 21:
                        return "Scope";
                    case 13:
                        return "Suspense";
                    case 19:
                        return "SuspenseList";
                    case 25:
                        return "TracingMarker";
                    case 1:
                    case 0:
                    case 17:
                    case 2:
                    case 14:
                    case 15:
                        if ("function" === typeof t) return t.displayName || t.name || null;
                        if ("string" === typeof t) return t
                }
                return null
            }

            function q(e) {
                switch (typeof e) {
                    case"boolean":
                    case"number":
                    case"string":
                    case"undefined":
                    case"object":
                        return e;
                    default:
                        return ""
                }
            }

            function W(e) {
                var t = e.type;
                return (e = e.nodeName) && "input" === e.toLowerCase() && ("checkbox" === t || "radio" === t)
            }

            function $(e) {
                e._valueTracker || (e._valueTracker = function (e) {
                    var t = W(e) ? "checked" : "value", r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                        n = "" + e[t];
                    if (!e.hasOwnProperty(t) && "undefined" !== typeof r && "function" === typeof r.get && "function" === typeof r.set) {
                        var i = r.get, a = r.set;
                        return Object.defineProperty(e, t, {
                            configurable: !0, get: function () {
                                return i.call(this)
                            }, set: function (e) {
                                n = "" + e, a.call(this, e)
                            }
                        }), Object.defineProperty(e, t, {enumerable: r.enumerable}), {
                            getValue: function () {
                                return n
                            }, setValue: function (e) {
                                n = "" + e
                            }, stopTracking: function () {
                                e._valueTracker = null, delete e[t]
                            }
                        }
                    }
                }(e))
            }

            function U(e) {
                if (!e) return !1;
                var t = e._valueTracker;
                if (!t) return !0;
                var r = t.getValue(), n = "";
                return e && (n = W(e) ? e.checked ? "true" : "false" : e.value), (e = n) !== r && (t.setValue(e), !0)
            }

            function Y(e) {
                if ("undefined" === typeof (e = e || ("undefined" !== typeof document ? document : void 0))) return null;
                try {
                    return e.activeElement || e.body
                } catch (t) {
                    return e.body
                }
            }

            function Q(e, t) {
                var r = t.checked;
                return V({}, t, {
                    defaultChecked: void 0,
                    defaultValue: void 0,
                    value: void 0,
                    checked: null != r ? r : e._wrapperState.initialChecked
                })
            }

            function X(e, t) {
                var r = null == t.defaultValue ? "" : t.defaultValue,
                    n = null != t.checked ? t.checked : t.defaultChecked;
                r = q(null != t.value ? t.value : r), e._wrapperState = {
                    initialChecked: n,
                    initialValue: r,
                    controlled: "checkbox" === t.type || "radio" === t.type ? null != t.checked : null != t.value
                }
            }

            function K(e, t) {
                null != (t = t.checked) && x(e, "checked", t, !1)
            }

            function Z(e, t) {
                K(e, t);
                var r = q(t.value), n = t.type;
                if (null != r) "number" === n ? (0 === r && "" === e.value || e.value != r) && (e.value = "" + r) : e.value !== "" + r && (e.value = "" + r); else if ("submit" === n || "reset" === n) return void e.removeAttribute("value");
                t.hasOwnProperty("value") ? ee(e, t.type, r) : t.hasOwnProperty("defaultValue") && ee(e, t.type, q(t.defaultValue)), null == t.checked && null != t.defaultChecked && (e.defaultChecked = !!t.defaultChecked)
            }

            function J(e, t, r) {
                if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
                    var n = t.type;
                    if (!("submit" !== n && "reset" !== n || void 0 !== t.value && null !== t.value)) return;
                    t = "" + e._wrapperState.initialValue, r || t === e.value || (e.value = t), e.defaultValue = t
                }
                "" !== (r = e.name) && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, "" !== r && (e.name = r)
            }

            function ee(e, t, r) {
                "number" === t && Y(e.ownerDocument) === e || (null == r ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + r && (e.defaultValue = "" + r))
            }

            var te = Array.isArray;

            function re(e, t, r, n) {
                if (e = e.options, t) {
                    t = {};
                    for (var i = 0; i < r.length; i++) t["$" + r[i]] = !0;
                    for (r = 0; r < e.length; r++) i = t.hasOwnProperty("$" + e[r].value), e[r].selected !== i && (e[r].selected = i), i && n && (e[r].defaultSelected = !0)
                } else {
                    for (r = "" + q(r), t = null, i = 0; i < e.length; i++) {
                        if (e[i].value === r) return e[i].selected = !0, void (n && (e[i].defaultSelected = !0));
                        null !== t || e[i].disabled || (t = e[i])
                    }
                    null !== t && (t.selected = !0)
                }
            }

            function ne(e, t) {
                if (null != t.dangerouslySetInnerHTML) throw Error(a(91));
                return V({}, t, {value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue})
            }

            function ie(e, t) {
                var r = t.value;
                if (null == r) {
                    if (r = t.children, t = t.defaultValue, null != r) {
                        if (null != t) throw Error(a(92));
                        if (te(r)) {
                            if (1 < r.length) throw Error(a(93));
                            r = r[0]
                        }
                        t = r
                    }
                    null == t && (t = ""), r = t
                }
                e._wrapperState = {initialValue: q(r)}
            }

            function ae(e, t) {
                var r = q(t.value), n = q(t.defaultValue);
                null != r && ((r = "" + r) !== e.value && (e.value = r), null == t.defaultValue && e.defaultValue !== r && (e.defaultValue = r)), null != n && (e.defaultValue = "" + n)
            }

            function se(e) {
                var t = e.textContent;
                t === e._wrapperState.initialValue && "" !== t && null !== t && (e.value = t)
            }

            function oe(e) {
                switch (e) {
                    case"svg":
                        return "http://www.w3.org/2000/svg";
                    case"math":
                        return "http://www.w3.org/1998/Math/MathML";
                    default:
                        return "http://www.w3.org/1999/xhtml"
                }
            }

            function le(e, t) {
                return null == e || "http://www.w3.org/1999/xhtml" === e ? oe(t) : "http://www.w3.org/2000/svg" === e && "foreignObject" === t ? "http://www.w3.org/1999/xhtml" : e
            }

            var he, ue, ce = (ue = function (e, t) {
                if ("http://www.w3.org/2000/svg" !== e.namespaceURI || "innerHTML" in e) e.innerHTML = t; else {
                    for ((he = he || document.createElement("div")).innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = he.firstChild; e.firstChild;) e.removeChild(e.firstChild);
                    for (; t.firstChild;) e.appendChild(t.firstChild)
                }
            }, "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function (e, t, r, n) {
                MSApp.execUnsafeLocalFunction((function () {
                    return ue(e, t)
                }))
            } : ue);

            function pe(e, t) {
                if (t) {
                    var r = e.firstChild;
                    if (r && r === e.lastChild && 3 === r.nodeType) return void (r.nodeValue = t)
                }
                e.textContent = t
            }

            var fe = {
                animationIterationCount: !0,
                aspectRatio: !0,
                borderImageOutset: !0,
                borderImageSlice: !0,
                borderImageWidth: !0,
                boxFlex: !0,
                boxFlexGroup: !0,
                boxOrdinalGroup: !0,
                columnCount: !0,
                columns: !0,
                flex: !0,
                flexGrow: !0,
                flexPositive: !0,
                flexShrink: !0,
                flexNegative: !0,
                flexOrder: !0,
                gridArea: !0,
                gridRow: !0,
                gridRowEnd: !0,
                gridRowSpan: !0,
                gridRowStart: !0,
                gridColumn: !0,
                gridColumnEnd: !0,
                gridColumnSpan: !0,
                gridColumnStart: !0,
                fontWeight: !0,
                lineClamp: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                tabSize: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0,
                fillOpacity: !0,
                floodOpacity: !0,
                stopOpacity: !0,
                strokeDasharray: !0,
                strokeDashoffset: !0,
                strokeMiterlimit: !0,
                strokeOpacity: !0,
                strokeWidth: !0
            }, de = ["Webkit", "ms", "Moz", "O"];

            function me(e, t, r) {
                return null == t || "boolean" === typeof t || "" === t ? "" : r || "number" !== typeof t || 0 === t || fe.hasOwnProperty(e) && fe[e] ? ("" + t).trim() : t + "px"
            }

            function ye(e, t) {
                for (var r in e = e.style, t) if (t.hasOwnProperty(r)) {
                    var n = 0 === r.indexOf("--"), i = me(r, t[r], n);
                    "float" === r && (r = "cssFloat"), n ? e.setProperty(r, i) : e[r] = i
                }
            }

            Object.keys(fe).forEach((function (e) {
                de.forEach((function (t) {
                    t = t + e.charAt(0).toUpperCase() + e.substring(1), fe[t] = fe[e]
                }))
            }));
            var ge = V({menuitem: !0}, {
                area: !0,
                base: !0,
                br: !0,
                col: !0,
                embed: !0,
                hr: !0,
                img: !0,
                input: !0,
                keygen: !0,
                link: !0,
                meta: !0,
                param: !0,
                source: !0,
                track: !0,
                wbr: !0
            });

            function ve(e, t) {
                if (t) {
                    if (ge[e] && (null != t.children || null != t.dangerouslySetInnerHTML)) throw Error(a(137, e));
                    if (null != t.dangerouslySetInnerHTML) {
                        if (null != t.children) throw Error(a(60));
                        if ("object" !== typeof t.dangerouslySetInnerHTML || !("__html" in t.dangerouslySetInnerHTML)) throw Error(a(61))
                    }
                    if (null != t.style && "object" !== typeof t.style) throw Error(a(62))
                }
            }

            function xe(e, t) {
                if (-1 === e.indexOf("-")) return "string" === typeof t.is;
                switch (e) {
                    case"annotation-xml":
                    case"color-profile":
                    case"font-face":
                    case"font-face-src":
                    case"font-face-uri":
                    case"font-face-format":
                    case"font-face-name":
                    case"missing-glyph":
                        return !1;
                    default:
                        return !0
                }
            }

            var be = null;

            function ke(e) {
                return (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement), 3 === e.nodeType ? e.parentNode : e
            }

            var Se = null, Ee = null, Pe = null;

            function we(e) {
                if (e = xi(e)) {
                    if ("function" !== typeof Se) throw Error(a(280));
                    var t = e.stateNode;
                    t && (t = ki(t), Se(e.stateNode, e.type, t))
                }
            }

            function _e(e) {
                Ee ? Pe ? Pe.push(e) : Pe = [e] : Ee = e
            }

            function Ce() {
                if (Ee) {
                    var e = Ee, t = Pe;
                    if (Pe = Ee = null, we(e), t) for (e = 0; e < t.length; e++) we(t[e])
                }
            }

            function Ae(e, t) {
                return e(t)
            }

            function De() {
            }

            var Te = !1;

            function Me(e, t, r) {
                if (Te) return e(t, r);
                Te = !0;
                try {
                    return Ae(e, t, r)
                } finally {
                    Te = !1, (null !== Ee || null !== Pe) && (De(), Ce())
                }
            }

            function Fe(e, t) {
                var r = e.stateNode;
                if (null === r) return null;
                var n = ki(r);
                if (null === n) return null;
                r = n[t];
                e:switch (t) {
                    case"onClick":
                    case"onClickCapture":
                    case"onDoubleClick":
                    case"onDoubleClickCapture":
                    case"onMouseDown":
                    case"onMouseDownCapture":
                    case"onMouseMove":
                    case"onMouseMoveCapture":
                    case"onMouseUp":
                    case"onMouseUpCapture":
                    case"onMouseEnter":
                        (n = !n.disabled) || (n = !("button" === (e = e.type) || "input" === e || "select" === e || "textarea" === e)), e = !n;
                        break e;
                    default:
                        e = !1
                }
                if (e) return null;
                if (r && "function" !== typeof r) throw Error(a(231, t, typeof r));
                return r
            }

            var Ie = !1;
            if (u) try {
                var Be = {};
                Object.defineProperty(Be, "passive", {
                    get: function () {
                        Ie = !0
                    }
                }), window.addEventListener("test", Be, Be), window.removeEventListener("test", Be, Be)
            } catch (ue) {
                Ie = !1
            }

            function je(e, t, r, n, i, a, s, o, l) {
                var h = Array.prototype.slice.call(arguments, 3);
                try {
                    t.apply(r, h)
                } catch (u) {
                    this.onError(u)
                }
            }

            var Re = !1, Ve = null, Le = !1, Ne = null, Oe = {
                onError: function (e) {
                    Re = !0, Ve = e
                }
            };

            function ze(e, t, r, n, i, a, s, o, l) {
                Re = !1, Ve = null, je.apply(Oe, arguments)
            }

            function Ge(e) {
                var t = e, r = e;
                if (e.alternate) for (; t.return;) t = t.return; else {
                    e = t;
                    do {
                        0 !== (4098 & (t = e).flags) && (r = t.return), e = t.return
                    } while (e)
                }
                return 3 === t.tag ? r : null
            }

            function He(e) {
                if (13 === e.tag) {
                    var t = e.memoizedState;
                    if (null === t && (null !== (e = e.alternate) && (t = e.memoizedState)), null !== t) return t.dehydrated
                }
                return null
            }

            function qe(e) {
                if (Ge(e) !== e) throw Error(a(188))
            }

            function We(e) {
                return null !== (e = function (e) {
                    var t = e.alternate;
                    if (!t) {
                        if (null === (t = Ge(e))) throw Error(a(188));
                        return t !== e ? null : e
                    }
                    for (var r = e, n = t; ;) {
                        var i = r.return;
                        if (null === i) break;
                        var s = i.alternate;
                        if (null === s) {
                            if (null !== (n = i.return)) {
                                r = n;
                                continue
                            }
                            break
                        }
                        if (i.child === s.child) {
                            for (s = i.child; s;) {
                                if (s === r) return qe(i), e;
                                if (s === n) return qe(i), t;
                                s = s.sibling
                            }
                            throw Error(a(188))
                        }
                        if (r.return !== n.return) r = i, n = s; else {
                            for (var o = !1, l = i.child; l;) {
                                if (l === r) {
                                    o = !0, r = i, n = s;
                                    break
                                }
                                if (l === n) {
                                    o = !0, n = i, r = s;
                                    break
                                }
                                l = l.sibling
                            }
                            if (!o) {
                                for (l = s.child; l;) {
                                    if (l === r) {
                                        o = !0, r = s, n = i;
                                        break
                                    }
                                    if (l === n) {
                                        o = !0, n = s, r = i;
                                        break
                                    }
                                    l = l.sibling
                                }
                                if (!o) throw Error(a(189))
                            }
                        }
                        if (r.alternate !== n) throw Error(a(190))
                    }
                    if (3 !== r.tag) throw Error(a(188));
                    return r.stateNode.current === r ? e : t
                }(e)) ? $e(e) : null
            }

            function $e(e) {
                if (5 === e.tag || 6 === e.tag) return e;
                for (e = e.child; null !== e;) {
                    var t = $e(e);
                    if (null !== t) return t;
                    e = e.sibling
                }
                return null
            }

            var Ue = i.unstable_scheduleCallback, Ye = i.unstable_cancelCallback, Qe = i.unstable_shouldYield,
                Xe = i.unstable_requestPaint, Ke = i.unstable_now, Ze = i.unstable_getCurrentPriorityLevel,
                Je = i.unstable_ImmediatePriority, et = i.unstable_UserBlockingPriority, tt = i.unstable_NormalPriority,
                rt = i.unstable_LowPriority, nt = i.unstable_IdlePriority, it = null, at = null;
            var st = Math.clz32 ? Math.clz32 : function (e) {
                return e >>>= 0, 0 === e ? 32 : 31 - (ot(e) / lt | 0) | 0
            }, ot = Math.log, lt = Math.LN2;
            var ht = 64, ut = 4194304;

            function ct(e) {
                switch (e & -e) {
                    case 1:
                        return 1;
                    case 2:
                        return 2;
                    case 4:
                        return 4;
                    case 8:
                        return 8;
                    case 16:
                        return 16;
                    case 32:
                        return 32;
                    case 64:
                    case 128:
                    case 256:
                    case 512:
                    case 1024:
                    case 2048:
                    case 4096:
                    case 8192:
                    case 16384:
                    case 32768:
                    case 65536:
                    case 131072:
                    case 262144:
                    case 524288:
                    case 1048576:
                    case 2097152:
                        return 4194240 & e;
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                    case 67108864:
                        return 130023424 & e;
                    case 134217728:
                        return 134217728;
                    case 268435456:
                        return 268435456;
                    case 536870912:
                        return 536870912;
                    case 1073741824:
                        return 1073741824;
                    default:
                        return e
                }
            }

            function pt(e, t) {
                var r = e.pendingLanes;
                if (0 === r) return 0;
                var n = 0, i = e.suspendedLanes, a = e.pingedLanes, s = 268435455 & r;
                if (0 !== s) {
                    var o = s & ~i;
                    0 !== o ? n = ct(o) : 0 !== (a &= s) && (n = ct(a))
                } else 0 !== (s = r & ~i) ? n = ct(s) : 0 !== a && (n = ct(a));
                if (0 === n) return 0;
                if (0 !== t && t !== n && 0 === (t & i) && ((i = n & -n) >= (a = t & -t) || 16 === i && 0 !== (4194240 & a))) return t;
                if (0 !== (4 & n) && (n |= 16 & r), 0 !== (t = e.entangledLanes)) for (e = e.entanglements, t &= n; 0 < t;) i = 1 << (r = 31 - st(t)), n |= e[r], t &= ~i;
                return n
            }

            function ft(e, t) {
                switch (e) {
                    case 1:
                    case 2:
                    case 4:
                        return t + 250;
                    case 8:
                    case 16:
                    case 32:
                    case 64:
                    case 128:
                    case 256:
                    case 512:
                    case 1024:
                    case 2048:
                    case 4096:
                    case 8192:
                    case 16384:
                    case 32768:
                    case 65536:
                    case 131072:
                    case 262144:
                    case 524288:
                    case 1048576:
                    case 2097152:
                        return t + 5e3;
                    default:
                        return -1
                }
            }

            function dt(e) {
                return 0 !== (e = -1073741825 & e.pendingLanes) ? e : 1073741824 & e ? 1073741824 : 0
            }

            function mt() {
                var e = ht;
                return 0 === (4194240 & (ht <<= 1)) && (ht = 64), e
            }

            function yt(e) {
                for (var t = [], r = 0; 31 > r; r++) t.push(e);
                return t
            }

            function gt(e, t, r) {
                e.pendingLanes |= t, 536870912 !== t && (e.suspendedLanes = 0, e.pingedLanes = 0), (e = e.eventTimes)[t = 31 - st(t)] = r
            }

            function vt(e, t) {
                var r = e.entangledLanes |= t;
                for (e = e.entanglements; r;) {
                    var n = 31 - st(r), i = 1 << n;
                    i & t | e[n] & t && (e[n] |= t), r &= ~i
                }
            }

            var xt = 0;

            function bt(e) {
                return 1 < (e &= -e) ? 4 < e ? 0 !== (268435455 & e) ? 16 : 536870912 : 4 : 1
            }

            var kt, St, Et, Pt, wt, _t = !1, Ct = [], At = null, Dt = null, Tt = null, Mt = new Map, Ft = new Map,
                It = [],
                Bt = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

            function jt(e, t) {
                switch (e) {
                    case"focusin":
                    case"focusout":
                        At = null;
                        break;
                    case"dragenter":
                    case"dragleave":
                        Dt = null;
                        break;
                    case"mouseover":
                    case"mouseout":
                        Tt = null;
                        break;
                    case"pointerover":
                    case"pointerout":
                        Mt.delete(t.pointerId);
                        break;
                    case"gotpointercapture":
                    case"lostpointercapture":
                        Ft.delete(t.pointerId)
                }
            }

            function Rt(e, t, r, n, i, a) {
                return null === e || e.nativeEvent !== a ? (e = {
                    blockedOn: t,
                    domEventName: r,
                    eventSystemFlags: n,
                    nativeEvent: a,
                    targetContainers: [i]
                }, null !== t && (null !== (t = xi(t)) && St(t)), e) : (e.eventSystemFlags |= n, t = e.targetContainers, null !== i && -1 === t.indexOf(i) && t.push(i), e)
            }

            function Vt(e) {
                var t = vi(e.target);
                if (null !== t) {
                    var r = Ge(t);
                    if (null !== r) if (13 === (t = r.tag)) {
                        if (null !== (t = He(r))) return e.blockedOn = t, void wt(e.priority, (function () {
                            Et(r)
                        }))
                    } else if (3 === t && r.stateNode.current.memoizedState.isDehydrated) return void (e.blockedOn = 3 === r.tag ? r.stateNode.containerInfo : null)
                }
                e.blockedOn = null
            }

            function Lt(e) {
                if (null !== e.blockedOn) return !1;
                for (var t = e.targetContainers; 0 < t.length;) {
                    var r = Qt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
                    if (null !== r) return null !== (t = xi(r)) && St(t), e.blockedOn = r, !1;
                    var n = new (r = e.nativeEvent).constructor(r.type, r);
                    be = n, r.target.dispatchEvent(n), be = null, t.shift()
                }
                return !0
            }

            function Nt(e, t, r) {
                Lt(e) && r.delete(t)
            }

            function Ot() {
                _t = !1, null !== At && Lt(At) && (At = null), null !== Dt && Lt(Dt) && (Dt = null), null !== Tt && Lt(Tt) && (Tt = null), Mt.forEach(Nt), Ft.forEach(Nt)
            }

            function zt(e, t) {
                e.blockedOn === t && (e.blockedOn = null, _t || (_t = !0, i.unstable_scheduleCallback(i.unstable_NormalPriority, Ot)))
            }

            function Gt(e) {
                function t(t) {
                    return zt(t, e)
                }

                if (0 < Ct.length) {
                    zt(Ct[0], e);
                    for (var r = 1; r < Ct.length; r++) {
                        var n = Ct[r];
                        n.blockedOn === e && (n.blockedOn = null)
                    }
                }
                for (null !== At && zt(At, e), null !== Dt && zt(Dt, e), null !== Tt && zt(Tt, e), Mt.forEach(t), Ft.forEach(t), r = 0; r < It.length; r++) (n = It[r]).blockedOn === e && (n.blockedOn = null);
                for (; 0 < It.length && null === (r = It[0]).blockedOn;) Vt(r), null === r.blockedOn && It.shift()
            }

            var Ht = b.ReactCurrentBatchConfig, qt = !0;

            function Wt(e, t, r, n) {
                var i = xt, a = Ht.transition;
                Ht.transition = null;
                try {
                    xt = 1, Ut(e, t, r, n)
                } finally {
                    xt = i, Ht.transition = a
                }
            }

            function $t(e, t, r, n) {
                var i = xt, a = Ht.transition;
                Ht.transition = null;
                try {
                    xt = 4, Ut(e, t, r, n)
                } finally {
                    xt = i, Ht.transition = a
                }
            }

            function Ut(e, t, r, n) {
                if (qt) {
                    var i = Qt(e, t, r, n);
                    if (null === i) qn(e, t, n, Yt, r), jt(e, n); else if (function (e, t, r, n, i) {
                        switch (t) {
                            case"focusin":
                                return At = Rt(At, e, t, r, n, i), !0;
                            case"dragenter":
                                return Dt = Rt(Dt, e, t, r, n, i), !0;
                            case"mouseover":
                                return Tt = Rt(Tt, e, t, r, n, i), !0;
                            case"pointerover":
                                var a = i.pointerId;
                                return Mt.set(a, Rt(Mt.get(a) || null, e, t, r, n, i)), !0;
                            case"gotpointercapture":
                                return a = i.pointerId, Ft.set(a, Rt(Ft.get(a) || null, e, t, r, n, i)), !0
                        }
                        return !1
                    }(i, e, t, r, n)) n.stopPropagation(); else if (jt(e, n), 4 & t && -1 < Bt.indexOf(e)) {
                        for (; null !== i;) {
                            var a = xi(i);
                            if (null !== a && kt(a), null === (a = Qt(e, t, r, n)) && qn(e, t, n, Yt, r), a === i) break;
                            i = a
                        }
                        null !== i && n.stopPropagation()
                    } else qn(e, t, n, null, r)
                }
            }

            var Yt = null;

            function Qt(e, t, r, n) {
                if (Yt = null, null !== (e = vi(e = ke(n)))) if (null === (t = Ge(e))) e = null; else if (13 === (r = t.tag)) {
                    if (null !== (e = He(t))) return e;
                    e = null
                } else if (3 === r) {
                    if (t.stateNode.current.memoizedState.isDehydrated) return 3 === t.tag ? t.stateNode.containerInfo : null;
                    e = null
                } else t !== e && (e = null);
                return Yt = e, null
            }

            function Xt(e) {
                switch (e) {
                    case"cancel":
                    case"click":
                    case"close":
                    case"contextmenu":
                    case"copy":
                    case"cut":
                    case"auxclick":
                    case"dblclick":
                    case"dragend":
                    case"dragstart":
                    case"drop":
                    case"focusin":
                    case"focusout":
                    case"input":
                    case"invalid":
                    case"keydown":
                    case"keypress":
                    case"keyup":
                    case"mousedown":
                    case"mouseup":
                    case"paste":
                    case"pause":
                    case"play":
                    case"pointercancel":
                    case"pointerdown":
                    case"pointerup":
                    case"ratechange":
                    case"reset":
                    case"resize":
                    case"seeked":
                    case"submit":
                    case"touchcancel":
                    case"touchend":
                    case"touchstart":
                    case"volumechange":
                    case"change":
                    case"selectionchange":
                    case"textInput":
                    case"compositionstart":
                    case"compositionend":
                    case"compositionupdate":
                    case"beforeblur":
                    case"afterblur":
                    case"beforeinput":
                    case"blur":
                    case"fullscreenchange":
                    case"focus":
                    case"hashchange":
                    case"popstate":
                    case"select":
                    case"selectstart":
                        return 1;
                    case"drag":
                    case"dragenter":
                    case"dragexit":
                    case"dragleave":
                    case"dragover":
                    case"mousemove":
                    case"mouseout":
                    case"mouseover":
                    case"pointermove":
                    case"pointerout":
                    case"pointerover":
                    case"scroll":
                    case"toggle":
                    case"touchmove":
                    case"wheel":
                    case"mouseenter":
                    case"mouseleave":
                    case"pointerenter":
                    case"pointerleave":
                        return 4;
                    case"message":
                        switch (Ze()) {
                            case Je:
                                return 1;
                            case et:
                                return 4;
                            case tt:
                            case rt:
                                return 16;
                            case nt:
                                return 536870912;
                            default:
                                return 16
                        }
                    default:
                        return 16
                }
            }

            var Kt = null, Zt = null, Jt = null;

            function er() {
                if (Jt) return Jt;
                var e, t, r = Zt, n = r.length, i = "value" in Kt ? Kt.value : Kt.textContent, a = i.length;
                for (e = 0; e < n && r[e] === i[e]; e++) ;
                var s = n - e;
                for (t = 1; t <= s && r[n - t] === i[a - t]; t++) ;
                return Jt = i.slice(e, 1 < t ? 1 - t : void 0)
            }

            function tr(e) {
                var t = e.keyCode;
                return "charCode" in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : e = t, 10 === e && (e = 13), 32 <= e || 13 === e ? e : 0
            }

            function rr() {
                return !0
            }

            function nr() {
                return !1
            }

            function ir(e) {
                function t(t, r, n, i, a) {
                    for (var s in this._reactName = t, this._targetInst = n, this.type = r, this.nativeEvent = i, this.target = a, this.currentTarget = null, e) e.hasOwnProperty(s) && (t = e[s], this[s] = t ? t(i) : i[s]);
                    return this.isDefaultPrevented = (null != i.defaultPrevented ? i.defaultPrevented : !1 === i.returnValue) ? rr : nr, this.isPropagationStopped = nr, this
                }

                return V(t.prototype, {
                    preventDefault: function () {
                        this.defaultPrevented = !0;
                        var e = this.nativeEvent;
                        e && (e.preventDefault ? e.preventDefault() : "unknown" !== typeof e.returnValue && (e.returnValue = !1), this.isDefaultPrevented = rr)
                    }, stopPropagation: function () {
                        var e = this.nativeEvent;
                        e && (e.stopPropagation ? e.stopPropagation() : "unknown" !== typeof e.cancelBubble && (e.cancelBubble = !0), this.isPropagationStopped = rr)
                    }, persist: function () {
                    }, isPersistent: rr
                }), t
            }

            var ar, sr, or, lr = {
                    eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function (e) {
                        return e.timeStamp || Date.now()
                    }, defaultPrevented: 0, isTrusted: 0
                }, hr = ir(lr), ur = V({}, lr, {view: 0, detail: 0}), cr = ir(ur), pr = V({}, ur, {
                    screenX: 0,
                    screenY: 0,
                    clientX: 0,
                    clientY: 0,
                    pageX: 0,
                    pageY: 0,
                    ctrlKey: 0,
                    shiftKey: 0,
                    altKey: 0,
                    metaKey: 0,
                    getModifierState: Pr,
                    button: 0,
                    buttons: 0,
                    relatedTarget: function (e) {
                        return void 0 === e.relatedTarget ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
                    },
                    movementX: function (e) {
                        return "movementX" in e ? e.movementX : (e !== or && (or && "mousemove" === e.type ? (ar = e.screenX - or.screenX, sr = e.screenY - or.screenY) : sr = ar = 0, or = e), ar)
                    },
                    movementY: function (e) {
                        return "movementY" in e ? e.movementY : sr
                    }
                }), fr = ir(pr), dr = ir(V({}, pr, {dataTransfer: 0})), mr = ir(V({}, ur, {relatedTarget: 0})),
                yr = ir(V({}, lr, {animationName: 0, elapsedTime: 0, pseudoElement: 0})), gr = V({}, lr, {
                    clipboardData: function (e) {
                        return "clipboardData" in e ? e.clipboardData : window.clipboardData
                    }
                }), vr = ir(gr), xr = ir(V({}, lr, {data: 0})), br = {
                    Esc: "Escape",
                    Spacebar: " ",
                    Left: "ArrowLeft",
                    Up: "ArrowUp",
                    Right: "ArrowRight",
                    Down: "ArrowDown",
                    Del: "Delete",
                    Win: "OS",
                    Menu: "ContextMenu",
                    Apps: "ContextMenu",
                    Scroll: "ScrollLock",
                    MozPrintableKey: "Unidentified"
                }, kr = {
                    8: "Backspace",
                    9: "Tab",
                    12: "Clear",
                    13: "Enter",
                    16: "Shift",
                    17: "Control",
                    18: "Alt",
                    19: "Pause",
                    20: "CapsLock",
                    27: "Escape",
                    32: " ",
                    33: "PageUp",
                    34: "PageDown",
                    35: "End",
                    36: "Home",
                    37: "ArrowLeft",
                    38: "ArrowUp",
                    39: "ArrowRight",
                    40: "ArrowDown",
                    45: "Insert",
                    46: "Delete",
                    112: "F1",
                    113: "F2",
                    114: "F3",
                    115: "F4",
                    116: "F5",
                    117: "F6",
                    118: "F7",
                    119: "F8",
                    120: "F9",
                    121: "F10",
                    122: "F11",
                    123: "F12",
                    144: "NumLock",
                    145: "ScrollLock",
                    224: "Meta"
                }, Sr = {Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey"};

            function Er(e) {
                var t = this.nativeEvent;
                return t.getModifierState ? t.getModifierState(e) : !!(e = Sr[e]) && !!t[e]
            }

            function Pr() {
                return Er
            }

            var wr = V({}, ur, {
                key: function (e) {
                    if (e.key) {
                        var t = br[e.key] || e.key;
                        if ("Unidentified" !== t) return t
                    }
                    return "keypress" === e.type ? 13 === (e = tr(e)) ? "Enter" : String.fromCharCode(e) : "keydown" === e.type || "keyup" === e.type ? kr[e.keyCode] || "Unidentified" : ""
                },
                code: 0,
                location: 0,
                ctrlKey: 0,
                shiftKey: 0,
                altKey: 0,
                metaKey: 0,
                repeat: 0,
                locale: 0,
                getModifierState: Pr,
                charCode: function (e) {
                    return "keypress" === e.type ? tr(e) : 0
                },
                keyCode: function (e) {
                    return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
                },
                which: function (e) {
                    return "keypress" === e.type ? tr(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
                }
            }), _r = ir(wr), Cr = ir(V({}, pr, {
                pointerId: 0,
                width: 0,
                height: 0,
                pressure: 0,
                tangentialPressure: 0,
                tiltX: 0,
                tiltY: 0,
                twist: 0,
                pointerType: 0,
                isPrimary: 0
            })), Ar = ir(V({}, ur, {
                touches: 0,
                targetTouches: 0,
                changedTouches: 0,
                altKey: 0,
                metaKey: 0,
                ctrlKey: 0,
                shiftKey: 0,
                getModifierState: Pr
            })), Dr = ir(V({}, lr, {propertyName: 0, elapsedTime: 0, pseudoElement: 0})), Tr = V({}, pr, {
                deltaX: function (e) {
                    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
                }, deltaY: function (e) {
                    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
                }, deltaZ: 0, deltaMode: 0
            }), Mr = ir(Tr), Fr = [9, 13, 27, 32], Ir = u && "CompositionEvent" in window, Br = null;
            u && "documentMode" in document && (Br = document.documentMode);
            var jr = u && "TextEvent" in window && !Br, Rr = u && (!Ir || Br && 8 < Br && 11 >= Br),
                Vr = String.fromCharCode(32), Lr = !1;

            function Nr(e, t) {
                switch (e) {
                    case"keyup":
                        return -1 !== Fr.indexOf(t.keyCode);
                    case"keydown":
                        return 229 !== t.keyCode;
                    case"keypress":
                    case"mousedown":
                    case"focusout":
                        return !0;
                    default:
                        return !1
                }
            }

            function Or(e) {
                return "object" === typeof (e = e.detail) && "data" in e ? e.data : null
            }

            var zr = !1;
            var Gr = {
                color: !0,
                date: !0,
                datetime: !0,
                "datetime-local": !0,
                email: !0,
                month: !0,
                number: !0,
                password: !0,
                range: !0,
                search: !0,
                tel: !0,
                text: !0,
                time: !0,
                url: !0,
                week: !0
            };

            function Hr(e) {
                var t = e && e.nodeName && e.nodeName.toLowerCase();
                return "input" === t ? !!Gr[e.type] : "textarea" === t
            }

            function qr(e, t, r, n) {
                _e(n), 0 < (t = $n(t, "onChange")).length && (r = new hr("onChange", "change", null, r, n), e.push({
                    event: r,
                    listeners: t
                }))
            }

            var Wr = null, $r = null;

            function Ur(e) {
                Ln(e, 0)
            }

            function Yr(e) {
                if (U(bi(e))) return e
            }

            function Qr(e, t) {
                if ("change" === e) return t
            }

            var Xr = !1;
            if (u) {
                var Kr;
                if (u) {
                    var Zr = "oninput" in document;
                    if (!Zr) {
                        var Jr = document.createElement("div");
                        Jr.setAttribute("oninput", "return;"), Zr = "function" === typeof Jr.oninput
                    }
                    Kr = Zr
                } else Kr = !1;
                Xr = Kr && (!document.documentMode || 9 < document.documentMode)
            }

            function en() {
                Wr && (Wr.detachEvent("onpropertychange", tn), $r = Wr = null)
            }

            function tn(e) {
                if ("value" === e.propertyName && Yr($r)) {
                    var t = [];
                    qr(t, $r, e, ke(e)), Me(Ur, t)
                }
            }

            function rn(e, t, r) {
                "focusin" === e ? (en(), $r = r, (Wr = t).attachEvent("onpropertychange", tn)) : "focusout" === e && en()
            }

            function nn(e) {
                if ("selectionchange" === e || "keyup" === e || "keydown" === e) return Yr($r)
            }

            function an(e, t) {
                if ("click" === e) return Yr(t)
            }

            function sn(e, t) {
                if ("input" === e || "change" === e) return Yr(t)
            }

            var on = "function" === typeof Object.is ? Object.is : function (e, t) {
                return e === t && (0 !== e || 1 / e === 1 / t) || e !== e && t !== t
            };

            function ln(e, t) {
                if (on(e, t)) return !0;
                if ("object" !== typeof e || null === e || "object" !== typeof t || null === t) return !1;
                var r = Object.keys(e), n = Object.keys(t);
                if (r.length !== n.length) return !1;
                for (n = 0; n < r.length; n++) {
                    var i = r[n];
                    if (!c.call(t, i) || !on(e[i], t[i])) return !1
                }
                return !0
            }

            function hn(e) {
                for (; e && e.firstChild;) e = e.firstChild;
                return e
            }

            function un(e, t) {
                var r, n = hn(e);
                for (e = 0; n;) {
                    if (3 === n.nodeType) {
                        if (r = e + n.textContent.length, e <= t && r >= t) return {node: n, offset: t - e};
                        e = r
                    }
                    e:{
                        for (; n;) {
                            if (n.nextSibling) {
                                n = n.nextSibling;
                                break e
                            }
                            n = n.parentNode
                        }
                        n = void 0
                    }
                    n = hn(n)
                }
            }

            function cn(e, t) {
                return !(!e || !t) && (e === t || (!e || 3 !== e.nodeType) && (t && 3 === t.nodeType ? cn(e, t.parentNode) : "contains" in e ? e.contains(t) : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t))))
            }

            function pn() {
                for (var e = window, t = Y(); t instanceof e.HTMLIFrameElement;) {
                    try {
                        var r = "string" === typeof t.contentWindow.location.href
                    } catch (n) {
                        r = !1
                    }
                    if (!r) break;
                    t = Y((e = t.contentWindow).document)
                }
                return t
            }

            function fn(e) {
                var t = e && e.nodeName && e.nodeName.toLowerCase();
                return t && ("input" === t && ("text" === e.type || "search" === e.type || "tel" === e.type || "url" === e.type || "password" === e.type) || "textarea" === t || "true" === e.contentEditable)
            }

            function dn(e) {
                var t = pn(), r = e.focusedElem, n = e.selectionRange;
                if (t !== r && r && r.ownerDocument && cn(r.ownerDocument.documentElement, r)) {
                    if (null !== n && fn(r)) if (t = n.start, void 0 === (e = n.end) && (e = t), "selectionStart" in r) r.selectionStart = t, r.selectionEnd = Math.min(e, r.value.length); else if ((e = (t = r.ownerDocument || document) && t.defaultView || window).getSelection) {
                        e = e.getSelection();
                        var i = r.textContent.length, a = Math.min(n.start, i);
                        n = void 0 === n.end ? a : Math.min(n.end, i), !e.extend && a > n && (i = n, n = a, a = i), i = un(r, a);
                        var s = un(r, n);
                        i && s && (1 !== e.rangeCount || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== s.node || e.focusOffset !== s.offset) && ((t = t.createRange()).setStart(i.node, i.offset), e.removeAllRanges(), a > n ? (e.addRange(t), e.extend(s.node, s.offset)) : (t.setEnd(s.node, s.offset), e.addRange(t)))
                    }
                    for (t = [], e = r; e = e.parentNode;) 1 === e.nodeType && t.push({
                        element: e,
                        left: e.scrollLeft,
                        top: e.scrollTop
                    });
                    for ("function" === typeof r.focus && r.focus(), r = 0; r < t.length; r++) (e = t[r]).element.scrollLeft = e.left, e.element.scrollTop = e.top
                }
            }

            var mn = u && "documentMode" in document && 11 >= document.documentMode, yn = null, gn = null, vn = null,
                xn = !1;

            function bn(e, t, r) {
                var n = r.window === r ? r.document : 9 === r.nodeType ? r : r.ownerDocument;
                xn || null == yn || yn !== Y(n) || ("selectionStart" in (n = yn) && fn(n) ? n = {
                    start: n.selectionStart,
                    end: n.selectionEnd
                } : n = {
                    anchorNode: (n = (n.ownerDocument && n.ownerDocument.defaultView || window).getSelection()).anchorNode,
                    anchorOffset: n.anchorOffset,
                    focusNode: n.focusNode,
                    focusOffset: n.focusOffset
                }, vn && ln(vn, n) || (vn = n, 0 < (n = $n(gn, "onSelect")).length && (t = new hr("onSelect", "select", null, t, r), e.push({
                    event: t,
                    listeners: n
                }), t.target = yn)))
            }

            function kn(e, t) {
                var r = {};
                return r[e.toLowerCase()] = t.toLowerCase(), r["Webkit" + e] = "webkit" + t, r["Moz" + e] = "moz" + t, r
            }

            var Sn = {
                animationend: kn("Animation", "AnimationEnd"),
                animationiteration: kn("Animation", "AnimationIteration"),
                animationstart: kn("Animation", "AnimationStart"),
                transitionend: kn("Transition", "TransitionEnd")
            }, En = {}, Pn = {};

            function wn(e) {
                if (En[e]) return En[e];
                if (!Sn[e]) return e;
                var t, r = Sn[e];
                for (t in r) if (r.hasOwnProperty(t) && t in Pn) return En[e] = r[t];
                return e
            }

            u && (Pn = document.createElement("div").style, "AnimationEvent" in window || (delete Sn.animationend.animation, delete Sn.animationiteration.animation, delete Sn.animationstart.animation), "TransitionEvent" in window || delete Sn.transitionend.transition);
            var _n = wn("animationend"), Cn = wn("animationiteration"), An = wn("animationstart"),
                Dn = wn("transitionend"), Tn = new Map,
                Mn = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

            function Fn(e, t) {
                Tn.set(e, t), l(t, [e])
            }

            for (var In = 0; In < Mn.length; In++) {
                var Bn = Mn[In];
                Fn(Bn.toLowerCase(), "on" + (Bn[0].toUpperCase() + Bn.slice(1)))
            }
            Fn(_n, "onAnimationEnd"), Fn(Cn, "onAnimationIteration"), Fn(An, "onAnimationStart"), Fn("dblclick", "onDoubleClick"), Fn("focusin", "onFocus"), Fn("focusout", "onBlur"), Fn(Dn, "onTransitionEnd"), h("onMouseEnter", ["mouseout", "mouseover"]), h("onMouseLeave", ["mouseout", "mouseover"]), h("onPointerEnter", ["pointerout", "pointerover"]), h("onPointerLeave", ["pointerout", "pointerover"]), l("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), l("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), l("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), l("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), l("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), l("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
            var jn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
                Rn = new Set("cancel close invalid load scroll toggle".split(" ").concat(jn));

            function Vn(e, t, r) {
                var n = e.type || "unknown-event";
                e.currentTarget = r, function (e, t, r, n, i, s, o, l, h) {
                    if (ze.apply(this, arguments), Re) {
                        if (!Re) throw Error(a(198));
                        var u = Ve;
                        Re = !1, Ve = null, Le || (Le = !0, Ne = u)
                    }
                }(n, t, void 0, e), e.currentTarget = null
            }

            function Ln(e, t) {
                t = 0 !== (4 & t);
                for (var r = 0; r < e.length; r++) {
                    var n = e[r], i = n.event;
                    n = n.listeners;
                    e:{
                        var a = void 0;
                        if (t) for (var s = n.length - 1; 0 <= s; s--) {
                            var o = n[s], l = o.instance, h = o.currentTarget;
                            if (o = o.listener, l !== a && i.isPropagationStopped()) break e;
                            Vn(i, o, h), a = l
                        } else for (s = 0; s < n.length; s++) {
                            if (l = (o = n[s]).instance, h = o.currentTarget, o = o.listener, l !== a && i.isPropagationStopped()) break e;
                            Vn(i, o, h), a = l
                        }
                    }
                }
                if (Le) throw e = Ne, Le = !1, Ne = null, e
            }

            function Nn(e, t) {
                var r = t[mi];
                void 0 === r && (r = t[mi] = new Set);
                var n = e + "__bubble";
                r.has(n) || (Hn(t, e, 2, !1), r.add(n))
            }

            function On(e, t, r) {
                var n = 0;
                t && (n |= 4), Hn(r, e, n, t)
            }

            var zn = "_reactListening" + Math.random().toString(36).slice(2);

            function Gn(e) {
                if (!e[zn]) {
                    e[zn] = !0, s.forEach((function (t) {
                        "selectionchange" !== t && (Rn.has(t) || On(t, !1, e), On(t, !0, e))
                    }));
                    var t = 9 === e.nodeType ? e : e.ownerDocument;
                    null === t || t[zn] || (t[zn] = !0, On("selectionchange", !1, t))
                }
            }

            function Hn(e, t, r, n) {
                switch (Xt(t)) {
                    case 1:
                        var i = Wt;
                        break;
                    case 4:
                        i = $t;
                        break;
                    default:
                        i = Ut
                }
                r = i.bind(null, t, r, e), i = void 0, !Ie || "touchstart" !== t && "touchmove" !== t && "wheel" !== t || (i = !0), n ? void 0 !== i ? e.addEventListener(t, r, {
                    capture: !0,
                    passive: i
                }) : e.addEventListener(t, r, !0) : void 0 !== i ? e.addEventListener(t, r, {passive: i}) : e.addEventListener(t, r, !1)
            }

            function qn(e, t, r, n, i) {
                var a = n;
                if (0 === (1 & t) && 0 === (2 & t) && null !== n) e:for (; ;) {
                    if (null === n) return;
                    var s = n.tag;
                    if (3 === s || 4 === s) {
                        var o = n.stateNode.containerInfo;
                        if (o === i || 8 === o.nodeType && o.parentNode === i) break;
                        if (4 === s) for (s = n.return; null !== s;) {
                            var l = s.tag;
                            if ((3 === l || 4 === l) && ((l = s.stateNode.containerInfo) === i || 8 === l.nodeType && l.parentNode === i)) return;
                            s = s.return
                        }
                        for (; null !== o;) {
                            if (null === (s = vi(o))) return;
                            if (5 === (l = s.tag) || 6 === l) {
                                n = a = s;
                                continue e
                            }
                            o = o.parentNode
                        }
                    }
                    n = n.return
                }
                Me((function () {
                    var n = a, i = ke(r), s = [];
                    e:{
                        var o = Tn.get(e);
                        if (void 0 !== o) {
                            var l = hr, h = e;
                            switch (e) {
                                case"keypress":
                                    if (0 === tr(r)) break e;
                                case"keydown":
                                case"keyup":
                                    l = _r;
                                    break;
                                case"focusin":
                                    h = "focus", l = mr;
                                    break;
                                case"focusout":
                                    h = "blur", l = mr;
                                    break;
                                case"beforeblur":
                                case"afterblur":
                                    l = mr;
                                    break;
                                case"click":
                                    if (2 === r.button) break e;
                                case"auxclick":
                                case"dblclick":
                                case"mousedown":
                                case"mousemove":
                                case"mouseup":
                                case"mouseout":
                                case"mouseover":
                                case"contextmenu":
                                    l = fr;
                                    break;
                                case"drag":
                                case"dragend":
                                case"dragenter":
                                case"dragexit":
                                case"dragleave":
                                case"dragover":
                                case"dragstart":
                                case"drop":
                                    l = dr;
                                    break;
                                case"touchcancel":
                                case"touchend":
                                case"touchmove":
                                case"touchstart":
                                    l = Ar;
                                    break;
                                case _n:
                                case Cn:
                                case An:
                                    l = yr;
                                    break;
                                case Dn:
                                    l = Dr;
                                    break;
                                case"scroll":
                                    l = cr;
                                    break;
                                case"wheel":
                                    l = Mr;
                                    break;
                                case"copy":
                                case"cut":
                                case"paste":
                                    l = vr;
                                    break;
                                case"gotpointercapture":
                                case"lostpointercapture":
                                case"pointercancel":
                                case"pointerdown":
                                case"pointermove":
                                case"pointerout":
                                case"pointerover":
                                case"pointerup":
                                    l = Cr
                            }
                            var u = 0 !== (4 & t), c = !u && "scroll" === e,
                                p = u ? null !== o ? o + "Capture" : null : o;
                            u = [];
                            for (var f, d = n; null !== d;) {
                                var m = (f = d).stateNode;
                                if (5 === f.tag && null !== m && (f = m, null !== p && (null != (m = Fe(d, p)) && u.push(Wn(d, m, f)))), c) break;
                                d = d.return
                            }
                            0 < u.length && (o = new l(o, h, null, r, i), s.push({event: o, listeners: u}))
                        }
                    }
                    if (0 === (7 & t)) {
                        if (l = "mouseout" === e || "pointerout" === e, (!(o = "mouseover" === e || "pointerover" === e) || r === be || !(h = r.relatedTarget || r.fromElement) || !vi(h) && !h[di]) && (l || o) && (o = i.window === i ? i : (o = i.ownerDocument) ? o.defaultView || o.parentWindow : window, l ? (l = n, null !== (h = (h = r.relatedTarget || r.toElement) ? vi(h) : null) && (h !== (c = Ge(h)) || 5 !== h.tag && 6 !== h.tag) && (h = null)) : (l = null, h = n), l !== h)) {
                            if (u = fr, m = "onMouseLeave", p = "onMouseEnter", d = "mouse", "pointerout" !== e && "pointerover" !== e || (u = Cr, m = "onPointerLeave", p = "onPointerEnter", d = "pointer"), c = null == l ? o : bi(l), f = null == h ? o : bi(h), (o = new u(m, d + "leave", l, r, i)).target = c, o.relatedTarget = f, m = null, vi(i) === n && ((u = new u(p, d + "enter", h, r, i)).target = f, u.relatedTarget = c, m = u), c = m, l && h) e:{
                                for (p = h, d = 0, f = u = l; f; f = Un(f)) d++;
                                for (f = 0, m = p; m; m = Un(m)) f++;
                                for (; 0 < d - f;) u = Un(u), d--;
                                for (; 0 < f - d;) p = Un(p), f--;
                                for (; d--;) {
                                    if (u === p || null !== p && u === p.alternate) break e;
                                    u = Un(u), p = Un(p)
                                }
                                u = null
                            } else u = null;
                            null !== l && Yn(s, o, l, u, !1), null !== h && null !== c && Yn(s, c, h, u, !0)
                        }
                        if ("select" === (l = (o = n ? bi(n) : window).nodeName && o.nodeName.toLowerCase()) || "input" === l && "file" === o.type) var y = Qr; else if (Hr(o)) if (Xr) y = sn; else {
                            y = nn;
                            var g = rn
                        } else (l = o.nodeName) && "input" === l.toLowerCase() && ("checkbox" === o.type || "radio" === o.type) && (y = an);
                        switch (y && (y = y(e, n)) ? qr(s, y, r, i) : (g && g(e, o, n), "focusout" === e && (g = o._wrapperState) && g.controlled && "number" === o.type && ee(o, "number", o.value)), g = n ? bi(n) : window, e) {
                            case"focusin":
                                (Hr(g) || "true" === g.contentEditable) && (yn = g, gn = n, vn = null);
                                break;
                            case"focusout":
                                vn = gn = yn = null;
                                break;
                            case"mousedown":
                                xn = !0;
                                break;
                            case"contextmenu":
                            case"mouseup":
                            case"dragend":
                                xn = !1, bn(s, r, i);
                                break;
                            case"selectionchange":
                                if (mn) break;
                            case"keydown":
                            case"keyup":
                                bn(s, r, i)
                        }
                        var v;
                        if (Ir) e:{
                            switch (e) {
                                case"compositionstart":
                                    var x = "onCompositionStart";
                                    break e;
                                case"compositionend":
                                    x = "onCompositionEnd";
                                    break e;
                                case"compositionupdate":
                                    x = "onCompositionUpdate";
                                    break e
                            }
                            x = void 0
                        } else zr ? Nr(e, r) && (x = "onCompositionEnd") : "keydown" === e && 229 === r.keyCode && (x = "onCompositionStart");
                        x && (Rr && "ko" !== r.locale && (zr || "onCompositionStart" !== x ? "onCompositionEnd" === x && zr && (v = er()) : (Zt = "value" in (Kt = i) ? Kt.value : Kt.textContent, zr = !0)), 0 < (g = $n(n, x)).length && (x = new xr(x, e, null, r, i), s.push({
                            event: x,
                            listeners: g
                        }), v ? x.data = v : null !== (v = Or(r)) && (x.data = v))), (v = jr ? function (e, t) {
                            switch (e) {
                                case"compositionend":
                                    return Or(t);
                                case"keypress":
                                    return 32 !== t.which ? null : (Lr = !0, Vr);
                                case"textInput":
                                    return (e = t.data) === Vr && Lr ? null : e;
                                default:
                                    return null
                            }
                        }(e, r) : function (e, t) {
                            if (zr) return "compositionend" === e || !Ir && Nr(e, t) ? (e = er(), Jt = Zt = Kt = null, zr = !1, e) : null;
                            switch (e) {
                                case"paste":
                                default:
                                    return null;
                                case"keypress":
                                    if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                                        if (t.char && 1 < t.char.length) return t.char;
                                        if (t.which) return String.fromCharCode(t.which)
                                    }
                                    return null;
                                case"compositionend":
                                    return Rr && "ko" !== t.locale ? null : t.data
                            }
                        }(e, r)) && (0 < (n = $n(n, "onBeforeInput")).length && (i = new xr("onBeforeInput", "beforeinput", null, r, i), s.push({
                            event: i,
                            listeners: n
                        }), i.data = v))
                    }
                    Ln(s, t)
                }))
            }

            function Wn(e, t, r) {
                return {instance: e, listener: t, currentTarget: r}
            }

            function $n(e, t) {
                for (var r = t + "Capture", n = []; null !== e;) {
                    var i = e, a = i.stateNode;
                    5 === i.tag && null !== a && (i = a, null != (a = Fe(e, r)) && n.unshift(Wn(e, a, i)), null != (a = Fe(e, t)) && n.push(Wn(e, a, i))), e = e.return
                }
                return n
            }

            function Un(e) {
                if (null === e) return null;
                do {
                    e = e.return
                } while (e && 5 !== e.tag);
                return e || null
            }

            function Yn(e, t, r, n, i) {
                for (var a = t._reactName, s = []; null !== r && r !== n;) {
                    var o = r, l = o.alternate, h = o.stateNode;
                    if (null !== l && l === n) break;
                    5 === o.tag && null !== h && (o = h, i ? null != (l = Fe(r, a)) && s.unshift(Wn(r, l, o)) : i || null != (l = Fe(r, a)) && s.push(Wn(r, l, o))), r = r.return
                }
                0 !== s.length && e.push({event: t, listeners: s})
            }

            var Qn = /\r\n?/g, Xn = /\u0000|\uFFFD/g;

            function Kn(e) {
                return ("string" === typeof e ? e : "" + e).replace(Qn, "\n").replace(Xn, "")
            }

            function Zn(e, t, r) {
                if (t = Kn(t), Kn(e) !== t && r) throw Error(a(425))
            }

            function Jn() {
            }

            var ei = null, ti = null;

            function ri(e, t) {
                return "textarea" === e || "noscript" === e || "string" === typeof t.children || "number" === typeof t.children || "object" === typeof t.dangerouslySetInnerHTML && null !== t.dangerouslySetInnerHTML && null != t.dangerouslySetInnerHTML.__html
            }

            var ni = "function" === typeof setTimeout ? setTimeout : void 0,
                ii = "function" === typeof clearTimeout ? clearTimeout : void 0,
                ai = "function" === typeof Promise ? Promise : void 0,
                si = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof ai ? function (e) {
                    return ai.resolve(null).then(e).catch(oi)
                } : ni;

            function oi(e) {
                setTimeout((function () {
                    throw e
                }))
            }

            function li(e, t) {
                var r = t, n = 0;
                do {
                    var i = r.nextSibling;
                    if (e.removeChild(r), i && 8 === i.nodeType) if ("/$" === (r = i.data)) {
                        if (0 === n) return e.removeChild(i), void Gt(t);
                        n--
                    } else "$" !== r && "$?" !== r && "$!" !== r || n++;
                    r = i
                } while (r);
                Gt(t)
            }

            function hi(e) {
                for (; null != e; e = e.nextSibling) {
                    var t = e.nodeType;
                    if (1 === t || 3 === t) break;
                    if (8 === t) {
                        if ("$" === (t = e.data) || "$!" === t || "$?" === t) break;
                        if ("/$" === t) return null
                    }
                }
                return e
            }

            function ui(e) {
                e = e.previousSibling;
                for (var t = 0; e;) {
                    if (8 === e.nodeType) {
                        var r = e.data;
                        if ("$" === r || "$!" === r || "$?" === r) {
                            if (0 === t) return e;
                            t--
                        } else "/$" === r && t++
                    }
                    e = e.previousSibling
                }
                return null
            }

            var ci = Math.random().toString(36).slice(2), pi = "__reactFiber$" + ci, fi = "__reactProps$" + ci,
                di = "__reactContainer$" + ci, mi = "__reactEvents$" + ci, yi = "__reactListeners$" + ci,
                gi = "__reactHandles$" + ci;

            function vi(e) {
                var t = e[pi];
                if (t) return t;
                for (var r = e.parentNode; r;) {
                    if (t = r[di] || r[pi]) {
                        if (r = t.alternate, null !== t.child || null !== r && null !== r.child) for (e = ui(e); null !== e;) {
                            if (r = e[pi]) return r;
                            e = ui(e)
                        }
                        return t
                    }
                    r = (e = r).parentNode
                }
                return null
            }

            function xi(e) {
                return !(e = e[pi] || e[di]) || 5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag ? null : e
            }

            function bi(e) {
                if (5 === e.tag || 6 === e.tag) return e.stateNode;
                throw Error(a(33))
            }

            function ki(e) {
                return e[fi] || null
            }

            var Si = [], Ei = -1;

            function Pi(e) {
                return {current: e}
            }

            function wi(e) {
                0 > Ei || (e.current = Si[Ei], Si[Ei] = null, Ei--)
            }

            function _i(e, t) {
                Ei++, Si[Ei] = e.current, e.current = t
            }

            var Ci = {}, Ai = Pi(Ci), Di = Pi(!1), Ti = Ci;

            function Mi(e, t) {
                var r = e.type.contextTypes;
                if (!r) return Ci;
                var n = e.stateNode;
                if (n && n.__reactInternalMemoizedUnmaskedChildContext === t) return n.__reactInternalMemoizedMaskedChildContext;
                var i, a = {};
                for (i in r) a[i] = t[i];
                return n && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = a), a
            }

            function Fi(e) {
                return null !== (e = e.childContextTypes) && void 0 !== e
            }

            function Ii() {
                wi(Di), wi(Ai)
            }

            function Bi(e, t, r) {
                if (Ai.current !== Ci) throw Error(a(168));
                _i(Ai, t), _i(Di, r)
            }

            function ji(e, t, r) {
                var n = e.stateNode;
                if (t = t.childContextTypes, "function" !== typeof n.getChildContext) return r;
                for (var i in n = n.getChildContext()) if (!(i in t)) throw Error(a(108, H(e) || "Unknown", i));
                return V({}, r, n)
            }

            function Ri(e) {
                return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Ci, Ti = Ai.current, _i(Ai, e), _i(Di, Di.current), !0
            }

            function Vi(e, t, r) {
                var n = e.stateNode;
                if (!n) throw Error(a(169));
                r ? (e = ji(e, t, Ti), n.__reactInternalMemoizedMergedChildContext = e, wi(Di), wi(Ai), _i(Ai, e)) : wi(Di), _i(Di, r)
            }

            var Li = null, Ni = !1, Oi = !1;

            function zi(e) {
                null === Li ? Li = [e] : Li.push(e)
            }

            function Gi() {
                if (!Oi && null !== Li) {
                    Oi = !0;
                    var e = 0, t = xt;
                    try {
                        var r = Li;
                        for (xt = 1; e < r.length; e++) {
                            var n = r[e];
                            do {
                                n = n(!0)
                            } while (null !== n)
                        }
                        Li = null, Ni = !1
                    } catch (i) {
                        throw null !== Li && (Li = Li.slice(e + 1)), Ue(Je, Gi), i
                    } finally {
                        xt = t, Oi = !1
                    }
                }
                return null
            }

            var Hi = [], qi = 0, Wi = null, $i = 0, Ui = [], Yi = 0, Qi = null, Xi = 1, Ki = "";

            function Zi(e, t) {
                Hi[qi++] = $i, Hi[qi++] = Wi, Wi = e, $i = t
            }

            function Ji(e, t, r) {
                Ui[Yi++] = Xi, Ui[Yi++] = Ki, Ui[Yi++] = Qi, Qi = e;
                var n = Xi;
                e = Ki;
                var i = 32 - st(n) - 1;
                n &= ~(1 << i), r += 1;
                var a = 32 - st(t) + i;
                if (30 < a) {
                    var s = i - i % 5;
                    a = (n & (1 << s) - 1).toString(32), n >>= s, i -= s, Xi = 1 << 32 - st(t) + i | r << i | n, Ki = a + e
                } else Xi = 1 << a | r << i | n, Ki = e
            }

            function ea(e) {
                null !== e.return && (Zi(e, 1), Ji(e, 1, 0))
            }

            function ta(e) {
                for (; e === Wi;) Wi = Hi[--qi], Hi[qi] = null, $i = Hi[--qi], Hi[qi] = null;
                for (; e === Qi;) Qi = Ui[--Yi], Ui[Yi] = null, Ki = Ui[--Yi], Ui[Yi] = null, Xi = Ui[--Yi], Ui[Yi] = null
            }

            var ra = null, na = null, ia = !1, aa = null;

            function sa(e, t) {
                var r = Fh(5, null, null, 0);
                r.elementType = "DELETED", r.stateNode = t, r.return = e, null === (t = e.deletions) ? (e.deletions = [r], e.flags |= 16) : t.push(r)
            }

            function oa(e, t) {
                switch (e.tag) {
                    case 5:
                        var r = e.type;
                        return null !== (t = 1 !== t.nodeType || r.toLowerCase() !== t.nodeName.toLowerCase() ? null : t) && (e.stateNode = t, ra = e, na = hi(t.firstChild), !0);
                    case 6:
                        return null !== (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) && (e.stateNode = t, ra = e, na = null, !0);
                    case 13:
                        return null !== (t = 8 !== t.nodeType ? null : t) && (r = null !== Qi ? {
                            id: Xi,
                            overflow: Ki
                        } : null, e.memoizedState = {
                            dehydrated: t,
                            treeContext: r,
                            retryLane: 1073741824
                        }, (r = Fh(18, null, null, 0)).stateNode = t, r.return = e, e.child = r, ra = e, na = null, !0);
                    default:
                        return !1
                }
            }

            function la(e) {
                return 0 !== (1 & e.mode) && 0 === (128 & e.flags)
            }

            function ha(e) {
                if (ia) {
                    var t = na;
                    if (t) {
                        var r = t;
                        if (!oa(e, t)) {
                            if (la(e)) throw Error(a(418));
                            t = hi(r.nextSibling);
                            var n = ra;
                            t && oa(e, t) ? sa(n, r) : (e.flags = -4097 & e.flags | 2, ia = !1, ra = e)
                        }
                    } else {
                        if (la(e)) throw Error(a(418));
                        e.flags = -4097 & e.flags | 2, ia = !1, ra = e
                    }
                }
            }

            function ua(e) {
                for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;) e = e.return;
                ra = e
            }

            function ca(e) {
                if (e !== ra) return !1;
                if (!ia) return ua(e), ia = !0, !1;
                var t;
                if ((t = 3 !== e.tag) && !(t = 5 !== e.tag) && (t = "head" !== (t = e.type) && "body" !== t && !ri(e.type, e.memoizedProps)), t && (t = na)) {
                    if (la(e)) throw pa(), Error(a(418));
                    for (; t;) sa(e, t), t = hi(t.nextSibling)
                }
                if (ua(e), 13 === e.tag) {
                    if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(a(317));
                    e:{
                        for (e = e.nextSibling, t = 0; e;) {
                            if (8 === e.nodeType) {
                                var r = e.data;
                                if ("/$" === r) {
                                    if (0 === t) {
                                        na = hi(e.nextSibling);
                                        break e
                                    }
                                    t--
                                } else "$" !== r && "$!" !== r && "$?" !== r || t++
                            }
                            e = e.nextSibling
                        }
                        na = null
                    }
                } else na = ra ? hi(e.stateNode.nextSibling) : null;
                return !0
            }

            function pa() {
                for (var e = na; e;) e = hi(e.nextSibling)
            }

            function fa() {
                na = ra = null, ia = !1
            }

            function da(e) {
                null === aa ? aa = [e] : aa.push(e)
            }

            var ma = b.ReactCurrentBatchConfig;

            function ya(e, t) {
                if (e && e.defaultProps) {
                    for (var r in t = V({}, t), e = e.defaultProps) void 0 === t[r] && (t[r] = e[r]);
                    return t
                }
                return t
            }

            var ga = Pi(null), va = null, xa = null, ba = null;

            function ka() {
                ba = xa = va = null
            }

            function Sa(e) {
                var t = ga.current;
                wi(ga), e._currentValue = t
            }

            function Ea(e, t, r) {
                for (; null !== e;) {
                    var n = e.alternate;
                    if ((e.childLanes & t) !== t ? (e.childLanes |= t, null !== n && (n.childLanes |= t)) : null !== n && (n.childLanes & t) !== t && (n.childLanes |= t), e === r) break;
                    e = e.return
                }
            }

            function Pa(e, t) {
                va = e, ba = xa = null, null !== (e = e.dependencies) && null !== e.firstContext && (0 !== (e.lanes & t) && (bo = !0), e.firstContext = null)
            }

            function wa(e) {
                var t = e._currentValue;
                if (ba !== e) if (e = {context: e, memoizedValue: t, next: null}, null === xa) {
                    if (null === va) throw Error(a(308));
                    xa = e, va.dependencies = {lanes: 0, firstContext: e}
                } else xa = xa.next = e;
                return t
            }

            var _a = null;

            function Ca(e) {
                null === _a ? _a = [e] : _a.push(e)
            }

            function Aa(e, t, r, n) {
                var i = t.interleaved;
                return null === i ? (r.next = r, Ca(t)) : (r.next = i.next, i.next = r), t.interleaved = r, Da(e, n)
            }

            function Da(e, t) {
                e.lanes |= t;
                var r = e.alternate;
                for (null !== r && (r.lanes |= t), r = e, e = e.return; null !== e;) e.childLanes |= t, null !== (r = e.alternate) && (r.childLanes |= t), r = e, e = e.return;
                return 3 === r.tag ? r.stateNode : null
            }

            var Ta = !1;

            function Ma(e) {
                e.updateQueue = {
                    baseState: e.memoizedState,
                    firstBaseUpdate: null,
                    lastBaseUpdate: null,
                    shared: {pending: null, interleaved: null, lanes: 0},
                    effects: null
                }
            }

            function Fa(e, t) {
                e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
                    baseState: e.baseState,
                    firstBaseUpdate: e.firstBaseUpdate,
                    lastBaseUpdate: e.lastBaseUpdate,
                    shared: e.shared,
                    effects: e.effects
                })
            }

            function Ia(e, t) {
                return {eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null}
            }

            function Ba(e, t, r) {
                var n = e.updateQueue;
                if (null === n) return null;
                if (n = n.shared, 0 !== (2 & Dl)) {
                    var i = n.pending;
                    return null === i ? t.next = t : (t.next = i.next, i.next = t), n.pending = t, Da(e, r)
                }
                return null === (i = n.interleaved) ? (t.next = t, Ca(n)) : (t.next = i.next, i.next = t), n.interleaved = t, Da(e, r)
            }

            function ja(e, t, r) {
                if (null !== (t = t.updateQueue) && (t = t.shared, 0 !== (4194240 & r))) {
                    var n = t.lanes;
                    r |= n &= e.pendingLanes, t.lanes = r, vt(e, r)
                }
            }

            function Ra(e, t) {
                var r = e.updateQueue, n = e.alternate;
                if (null !== n && r === (n = n.updateQueue)) {
                    var i = null, a = null;
                    if (null !== (r = r.firstBaseUpdate)) {
                        do {
                            var s = {
                                eventTime: r.eventTime,
                                lane: r.lane,
                                tag: r.tag,
                                payload: r.payload,
                                callback: r.callback,
                                next: null
                            };
                            null === a ? i = a = s : a = a.next = s, r = r.next
                        } while (null !== r);
                        null === a ? i = a = t : a = a.next = t
                    } else i = a = t;
                    return r = {
                        baseState: n.baseState,
                        firstBaseUpdate: i,
                        lastBaseUpdate: a,
                        shared: n.shared,
                        effects: n.effects
                    }, void (e.updateQueue = r)
                }
                null === (e = r.lastBaseUpdate) ? r.firstBaseUpdate = t : e.next = t, r.lastBaseUpdate = t
            }

            function Va(e, t, r, n) {
                var i = e.updateQueue;
                Ta = !1;
                var a = i.firstBaseUpdate, s = i.lastBaseUpdate, o = i.shared.pending;
                if (null !== o) {
                    i.shared.pending = null;
                    var l = o, h = l.next;
                    l.next = null, null === s ? a = h : s.next = h, s = l;
                    var u = e.alternate;
                    null !== u && ((o = (u = u.updateQueue).lastBaseUpdate) !== s && (null === o ? u.firstBaseUpdate = h : o.next = h, u.lastBaseUpdate = l))
                }
                if (null !== a) {
                    var c = i.baseState;
                    for (s = 0, u = h = l = null, o = a; ;) {
                        var p = o.lane, f = o.eventTime;
                        if ((n & p) === p) {
                            null !== u && (u = u.next = {
                                eventTime: f,
                                lane: 0,
                                tag: o.tag,
                                payload: o.payload,
                                callback: o.callback,
                                next: null
                            });
                            e:{
                                var d = e, m = o;
                                switch (p = t, f = r, m.tag) {
                                    case 1:
                                        if ("function" === typeof (d = m.payload)) {
                                            c = d.call(f, c, p);
                                            break e
                                        }
                                        c = d;
                                        break e;
                                    case 3:
                                        d.flags = -65537 & d.flags | 128;
                                    case 0:
                                        if (null === (p = "function" === typeof (d = m.payload) ? d.call(f, c, p) : d) || void 0 === p) break e;
                                        c = V({}, c, p);
                                        break e;
                                    case 2:
                                        Ta = !0
                                }
                            }
                            null !== o.callback && 0 !== o.lane && (e.flags |= 64, null === (p = i.effects) ? i.effects = [o] : p.push(o))
                        } else f = {
                            eventTime: f,
                            lane: p,
                            tag: o.tag,
                            payload: o.payload,
                            callback: o.callback,
                            next: null
                        }, null === u ? (h = u = f, l = c) : u = u.next = f, s |= p;
                        if (null === (o = o.next)) {
                            if (null === (o = i.shared.pending)) break;
                            o = (p = o).next, p.next = null, i.lastBaseUpdate = p, i.shared.pending = null
                        }
                    }
                    if (null === u && (l = c), i.baseState = l, i.firstBaseUpdate = h, i.lastBaseUpdate = u, null !== (t = i.shared.interleaved)) {
                        i = t;
                        do {
                            s |= i.lane, i = i.next
                        } while (i !== t)
                    } else null === a && (i.shared.lanes = 0);
                    Vl |= s, e.lanes = s, e.memoizedState = c
                }
            }

            function La(e, t, r) {
                if (e = t.effects, t.effects = null, null !== e) for (t = 0; t < e.length; t++) {
                    var n = e[t], i = n.callback;
                    if (null !== i) {
                        if (n.callback = null, n = r, "function" !== typeof i) throw Error(a(191, i));
                        i.call(n)
                    }
                }
            }

            var Na = (new n.Component).refs;

            function Oa(e, t, r, n) {
                r = null === (r = r(n, t = e.memoizedState)) || void 0 === r ? t : V({}, t, r), e.memoizedState = r, 0 === e.lanes && (e.updateQueue.baseState = r)
            }

            var za = {
                isMounted: function (e) {
                    return !!(e = e._reactInternals) && Ge(e) === e
                }, enqueueSetState: function (e, t, r) {
                    e = e._reactInternals;
                    var n = th(), i = rh(e), a = Ia(n, i);
                    a.payload = t, void 0 !== r && null !== r && (a.callback = r), null !== (t = Ba(e, a, i)) && (nh(t, e, i, n), ja(t, e, i))
                }, enqueueReplaceState: function (e, t, r) {
                    e = e._reactInternals;
                    var n = th(), i = rh(e), a = Ia(n, i);
                    a.tag = 1, a.payload = t, void 0 !== r && null !== r && (a.callback = r), null !== (t = Ba(e, a, i)) && (nh(t, e, i, n), ja(t, e, i))
                }, enqueueForceUpdate: function (e, t) {
                    e = e._reactInternals;
                    var r = th(), n = rh(e), i = Ia(r, n);
                    i.tag = 2, void 0 !== t && null !== t && (i.callback = t), null !== (t = Ba(e, i, n)) && (nh(t, e, n, r), ja(t, e, n))
                }
            };

            function Ga(e, t, r, n, i, a, s) {
                return "function" === typeof (e = e.stateNode).shouldComponentUpdate ? e.shouldComponentUpdate(n, a, s) : !t.prototype || !t.prototype.isPureReactComponent || (!ln(r, n) || !ln(i, a))
            }

            function Ha(e, t, r) {
                var n = !1, i = Ci, a = t.contextType;
                return "object" === typeof a && null !== a ? a = wa(a) : (i = Fi(t) ? Ti : Ai.current, a = (n = null !== (n = t.contextTypes) && void 0 !== n) ? Mi(e, i) : Ci), t = new t(r, a), e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null, t.updater = za, e.stateNode = t, t._reactInternals = e, n && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = a), t
            }

            function qa(e, t, r, n) {
                e = t.state, "function" === typeof t.componentWillReceiveProps && t.componentWillReceiveProps(r, n), "function" === typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(r, n), t.state !== e && za.enqueueReplaceState(t, t.state, null)
            }

            function Wa(e, t, r, n) {
                var i = e.stateNode;
                i.props = r, i.state = e.memoizedState, i.refs = Na, Ma(e);
                var a = t.contextType;
                "object" === typeof a && null !== a ? i.context = wa(a) : (a = Fi(t) ? Ti : Ai.current, i.context = Mi(e, a)), i.state = e.memoizedState, "function" === typeof (a = t.getDerivedStateFromProps) && (Oa(e, t, a, r), i.state = e.memoizedState), "function" === typeof t.getDerivedStateFromProps || "function" === typeof i.getSnapshotBeforeUpdate || "function" !== typeof i.UNSAFE_componentWillMount && "function" !== typeof i.componentWillMount || (t = i.state, "function" === typeof i.componentWillMount && i.componentWillMount(), "function" === typeof i.UNSAFE_componentWillMount && i.UNSAFE_componentWillMount(), t !== i.state && za.enqueueReplaceState(i, i.state, null), Va(e, r, i, n), i.state = e.memoizedState), "function" === typeof i.componentDidMount && (e.flags |= 4194308)
            }

            function $a(e, t, r) {
                if (null !== (e = r.ref) && "function" !== typeof e && "object" !== typeof e) {
                    if (r._owner) {
                        if (r = r._owner) {
                            if (1 !== r.tag) throw Error(a(309));
                            var n = r.stateNode
                        }
                        if (!n) throw Error(a(147, e));
                        var i = n, s = "" + e;
                        return null !== t && null !== t.ref && "function" === typeof t.ref && t.ref._stringRef === s ? t.ref : (t = function (e) {
                            var t = i.refs;
                            t === Na && (t = i.refs = {}), null === e ? delete t[s] : t[s] = e
                        }, t._stringRef = s, t)
                    }
                    if ("string" !== typeof e) throw Error(a(284));
                    if (!r._owner) throw Error(a(290, e))
                }
                return e
            }

            function Ua(e, t) {
                throw e = Object.prototype.toString.call(t), Error(a(31, "[object Object]" === e ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
            }

            function Ya(e) {
                return (0, e._init)(e._payload)
            }

            function Qa(e) {
                function t(t, r) {
                    if (e) {
                        var n = t.deletions;
                        null === n ? (t.deletions = [r], t.flags |= 16) : n.push(r)
                    }
                }

                function r(r, n) {
                    if (!e) return null;
                    for (; null !== n;) t(r, n), n = n.sibling;
                    return null
                }

                function n(e, t) {
                    for (e = new Map; null !== t;) null !== t.key ? e.set(t.key, t) : e.set(t.index, t), t = t.sibling;
                    return e
                }

                function i(e, t) {
                    return (e = Bh(e, t)).index = 0, e.sibling = null, e
                }

                function s(t, r, n) {
                    return t.index = n, e ? null !== (n = t.alternate) ? (n = n.index) < r ? (t.flags |= 2, r) : n : (t.flags |= 2, r) : (t.flags |= 1048576, r)
                }

                function o(t) {
                    return e && null === t.alternate && (t.flags |= 2), t
                }

                function l(e, t, r, n) {
                    return null === t || 6 !== t.tag ? ((t = Lh(r, e.mode, n)).return = e, t) : ((t = i(t, r)).return = e, t)
                }

                function h(e, t, r, n) {
                    var a = r.type;
                    return a === E ? c(e, t, r.props.children, n, r.key) : null !== t && (t.elementType === a || "object" === typeof a && null !== a && a.$$typeof === F && Ya(a) === t.type) ? ((n = i(t, r.props)).ref = $a(e, t, r), n.return = e, n) : ((n = jh(r.type, r.key, r.props, null, e.mode, n)).ref = $a(e, t, r), n.return = e, n)
                }

                function u(e, t, r, n) {
                    return null === t || 4 !== t.tag || t.stateNode.containerInfo !== r.containerInfo || t.stateNode.implementation !== r.implementation ? ((t = Nh(r, e.mode, n)).return = e, t) : ((t = i(t, r.children || [])).return = e, t)
                }

                function c(e, t, r, n, a) {
                    return null === t || 7 !== t.tag ? ((t = Rh(r, e.mode, n, a)).return = e, t) : ((t = i(t, r)).return = e, t)
                }

                function p(e, t, r) {
                    if ("string" === typeof t && "" !== t || "number" === typeof t) return (t = Lh("" + t, e.mode, r)).return = e, t;
                    if ("object" === typeof t && null !== t) {
                        switch (t.$$typeof) {
                            case k:
                                return (r = jh(t.type, t.key, t.props, null, e.mode, r)).ref = $a(e, null, t), r.return = e, r;
                            case S:
                                return (t = Nh(t, e.mode, r)).return = e, t;
                            case F:
                                return p(e, (0, t._init)(t._payload), r)
                        }
                        if (te(t) || j(t)) return (t = Rh(t, e.mode, r, null)).return = e, t;
                        Ua(e, t)
                    }
                    return null
                }

                function f(e, t, r, n) {
                    var i = null !== t ? t.key : null;
                    if ("string" === typeof r && "" !== r || "number" === typeof r) return null !== i ? null : l(e, t, "" + r, n);
                    if ("object" === typeof r && null !== r) {
                        switch (r.$$typeof) {
                            case k:
                                return r.key === i ? h(e, t, r, n) : null;
                            case S:
                                return r.key === i ? u(e, t, r, n) : null;
                            case F:
                                return f(e, t, (i = r._init)(r._payload), n)
                        }
                        if (te(r) || j(r)) return null !== i ? null : c(e, t, r, n, null);
                        Ua(e, r)
                    }
                    return null
                }

                function d(e, t, r, n, i) {
                    if ("string" === typeof n && "" !== n || "number" === typeof n) return l(t, e = e.get(r) || null, "" + n, i);
                    if ("object" === typeof n && null !== n) {
                        switch (n.$$typeof) {
                            case k:
                                return h(t, e = e.get(null === n.key ? r : n.key) || null, n, i);
                            case S:
                                return u(t, e = e.get(null === n.key ? r : n.key) || null, n, i);
                            case F:
                                return d(e, t, r, (0, n._init)(n._payload), i)
                        }
                        if (te(n) || j(n)) return c(t, e = e.get(r) || null, n, i, null);
                        Ua(t, n)
                    }
                    return null
                }

                function m(i, a, o, l) {
                    for (var h = null, u = null, c = a, m = a = 0, y = null; null !== c && m < o.length; m++) {
                        c.index > m ? (y = c, c = null) : y = c.sibling;
                        var g = f(i, c, o[m], l);
                        if (null === g) {
                            null === c && (c = y);
                            break
                        }
                        e && c && null === g.alternate && t(i, c), a = s(g, a, m), null === u ? h = g : u.sibling = g, u = g, c = y
                    }
                    if (m === o.length) return r(i, c), ia && Zi(i, m), h;
                    if (null === c) {
                        for (; m < o.length; m++) null !== (c = p(i, o[m], l)) && (a = s(c, a, m), null === u ? h = c : u.sibling = c, u = c);
                        return ia && Zi(i, m), h
                    }
                    for (c = n(i, c); m < o.length; m++) null !== (y = d(c, i, m, o[m], l)) && (e && null !== y.alternate && c.delete(null === y.key ? m : y.key), a = s(y, a, m), null === u ? h = y : u.sibling = y, u = y);
                    return e && c.forEach((function (e) {
                        return t(i, e)
                    })), ia && Zi(i, m), h
                }

                function y(i, o, l, h) {
                    var u = j(l);
                    if ("function" !== typeof u) throw Error(a(150));
                    if (null == (l = u.call(l))) throw Error(a(151));
                    for (var c = u = null, m = o, y = o = 0, g = null, v = l.next(); null !== m && !v.done; y++, v = l.next()) {
                        m.index > y ? (g = m, m = null) : g = m.sibling;
                        var x = f(i, m, v.value, h);
                        if (null === x) {
                            null === m && (m = g);
                            break
                        }
                        e && m && null === x.alternate && t(i, m), o = s(x, o, y), null === c ? u = x : c.sibling = x, c = x, m = g
                    }
                    if (v.done) return r(i, m), ia && Zi(i, y), u;
                    if (null === m) {
                        for (; !v.done; y++, v = l.next()) null !== (v = p(i, v.value, h)) && (o = s(v, o, y), null === c ? u = v : c.sibling = v, c = v);
                        return ia && Zi(i, y), u
                    }
                    for (m = n(i, m); !v.done; y++, v = l.next()) null !== (v = d(m, i, y, v.value, h)) && (e && null !== v.alternate && m.delete(null === v.key ? y : v.key), o = s(v, o, y), null === c ? u = v : c.sibling = v, c = v);
                    return e && m.forEach((function (e) {
                        return t(i, e)
                    })), ia && Zi(i, y), u
                }

                return function e(n, a, s, l) {
                    if ("object" === typeof s && null !== s && s.type === E && null === s.key && (s = s.props.children), "object" === typeof s && null !== s) {
                        switch (s.$$typeof) {
                            case k:
                                e:{
                                    for (var h = s.key, u = a; null !== u;) {
                                        if (u.key === h) {
                                            if ((h = s.type) === E) {
                                                if (7 === u.tag) {
                                                    r(n, u.sibling), (a = i(u, s.props.children)).return = n, n = a;
                                                    break e
                                                }
                                            } else if (u.elementType === h || "object" === typeof h && null !== h && h.$$typeof === F && Ya(h) === u.type) {
                                                r(n, u.sibling), (a = i(u, s.props)).ref = $a(n, u, s), a.return = n, n = a;
                                                break e
                                            }
                                            r(n, u);
                                            break
                                        }
                                        t(n, u), u = u.sibling
                                    }
                                    s.type === E ? ((a = Rh(s.props.children, n.mode, l, s.key)).return = n, n = a) : ((l = jh(s.type, s.key, s.props, null, n.mode, l)).ref = $a(n, a, s), l.return = n, n = l)
                                }
                                return o(n);
                            case S:
                                e:{
                                    for (u = s.key; null !== a;) {
                                        if (a.key === u) {
                                            if (4 === a.tag && a.stateNode.containerInfo === s.containerInfo && a.stateNode.implementation === s.implementation) {
                                                r(n, a.sibling), (a = i(a, s.children || [])).return = n, n = a;
                                                break e
                                            }
                                            r(n, a);
                                            break
                                        }
                                        t(n, a), a = a.sibling
                                    }
                                    (a = Nh(s, n.mode, l)).return = n, n = a
                                }
                                return o(n);
                            case F:
                                return e(n, a, (u = s._init)(s._payload), l)
                        }
                        if (te(s)) return m(n, a, s, l);
                        if (j(s)) return y(n, a, s, l);
                        Ua(n, s)
                    }
                    return "string" === typeof s && "" !== s || "number" === typeof s ? (s = "" + s, null !== a && 6 === a.tag ? (r(n, a.sibling), (a = i(a, s)).return = n, n = a) : (r(n, a), (a = Lh(s, n.mode, l)).return = n, n = a), o(n)) : r(n, a)
                }
            }

            var Xa = Qa(!0), Ka = Qa(!1), Za = {}, Ja = Pi(Za), es = Pi(Za), ts = Pi(Za);

            function rs(e) {
                if (e === Za) throw Error(a(174));
                return e
            }

            function ns(e, t) {
                switch (_i(ts, t), _i(es, e), _i(Ja, Za), e = t.nodeType) {
                    case 9:
                    case 11:
                        t = (t = t.documentElement) ? t.namespaceURI : le(null, "");
                        break;
                    default:
                        t = le(t = (e = 8 === e ? t.parentNode : t).namespaceURI || null, e = e.tagName)
                }
                wi(Ja), _i(Ja, t)
            }

            function is() {
                wi(Ja), wi(es), wi(ts)
            }

            function as(e) {
                rs(ts.current);
                var t = rs(Ja.current), r = le(t, e.type);
                t !== r && (_i(es, e), _i(Ja, r))
            }

            function ss(e) {
                es.current === e && (wi(Ja), wi(es))
            }

            var os = Pi(0);

            function ls(e) {
                for (var t = e; null !== t;) {
                    if (13 === t.tag) {
                        var r = t.memoizedState;
                        if (null !== r && (null === (r = r.dehydrated) || "$?" === r.data || "$!" === r.data)) return t
                    } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
                        if (0 !== (128 & t.flags)) return t
                    } else if (null !== t.child) {
                        t.child.return = t, t = t.child;
                        continue
                    }
                    if (t === e) break;
                    for (; null === t.sibling;) {
                        if (null === t.return || t.return === e) return null;
                        t = t.return
                    }
                    t.sibling.return = t.return, t = t.sibling
                }
                return null
            }

            var hs = [];

            function us() {
                for (var e = 0; e < hs.length; e++) hs[e]._workInProgressVersionPrimary = null;
                hs.length = 0
            }

            var cs = b.ReactCurrentDispatcher, ps = b.ReactCurrentBatchConfig, fs = 0, ds = null, ms = null, ys = null,
                gs = !1, vs = !1, xs = 0, bs = 0;

            function ks() {
                throw Error(a(321))
            }

            function Ss(e, t) {
                if (null === t) return !1;
                for (var r = 0; r < t.length && r < e.length; r++) if (!on(e[r], t[r])) return !1;
                return !0
            }

            function Es(e, t, r, n, i, s) {
                if (fs = s, ds = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, cs.current = null === e || null === e.memoizedState ? so : oo, e = r(n, i), vs) {
                    s = 0;
                    do {
                        if (vs = !1, xs = 0, 25 <= s) throw Error(a(301));
                        s += 1, ys = ms = null, t.updateQueue = null, cs.current = lo, e = r(n, i)
                    } while (vs)
                }
                if (cs.current = ao, t = null !== ms && null !== ms.next, fs = 0, ys = ms = ds = null, gs = !1, t) throw Error(a(300));
                return e
            }

            function Ps() {
                var e = 0 !== xs;
                return xs = 0, e
            }

            function ws() {
                var e = {memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null};
                return null === ys ? ds.memoizedState = ys = e : ys = ys.next = e, ys
            }

            function _s() {
                if (null === ms) {
                    var e = ds.alternate;
                    e = null !== e ? e.memoizedState : null
                } else e = ms.next;
                var t = null === ys ? ds.memoizedState : ys.next;
                if (null !== t) ys = t, ms = e; else {
                    if (null === e) throw Error(a(310));
                    e = {
                        memoizedState: (ms = e).memoizedState,
                        baseState: ms.baseState,
                        baseQueue: ms.baseQueue,
                        queue: ms.queue,
                        next: null
                    }, null === ys ? ds.memoizedState = ys = e : ys = ys.next = e
                }
                return ys
            }

            function Cs(e, t) {
                return "function" === typeof t ? t(e) : t
            }

            function As(e) {
                var t = _s(), r = t.queue;
                if (null === r) throw Error(a(311));
                r.lastRenderedReducer = e;
                var n = ms, i = n.baseQueue, s = r.pending;
                if (null !== s) {
                    if (null !== i) {
                        var o = i.next;
                        i.next = s.next, s.next = o
                    }
                    n.baseQueue = i = s, r.pending = null
                }
                if (null !== i) {
                    s = i.next, n = n.baseState;
                    var l = o = null, h = null, u = s;
                    do {
                        var c = u.lane;
                        if ((fs & c) === c) null !== h && (h = h.next = {
                            lane: 0,
                            action: u.action,
                            hasEagerState: u.hasEagerState,
                            eagerState: u.eagerState,
                            next: null
                        }), n = u.hasEagerState ? u.eagerState : e(n, u.action); else {
                            var p = {
                                lane: c,
                                action: u.action,
                                hasEagerState: u.hasEagerState,
                                eagerState: u.eagerState,
                                next: null
                            };
                            null === h ? (l = h = p, o = n) : h = h.next = p, ds.lanes |= c, Vl |= c
                        }
                        u = u.next
                    } while (null !== u && u !== s);
                    null === h ? o = n : h.next = l, on(n, t.memoizedState) || (bo = !0), t.memoizedState = n, t.baseState = o, t.baseQueue = h, r.lastRenderedState = n
                }
                if (null !== (e = r.interleaved)) {
                    i = e;
                    do {
                        s = i.lane, ds.lanes |= s, Vl |= s, i = i.next
                    } while (i !== e)
                } else null === i && (r.lanes = 0);
                return [t.memoizedState, r.dispatch]
            }

            function Ds(e) {
                var t = _s(), r = t.queue;
                if (null === r) throw Error(a(311));
                r.lastRenderedReducer = e;
                var n = r.dispatch, i = r.pending, s = t.memoizedState;
                if (null !== i) {
                    r.pending = null;
                    var o = i = i.next;
                    do {
                        s = e(s, o.action), o = o.next
                    } while (o !== i);
                    on(s, t.memoizedState) || (bo = !0), t.memoizedState = s, null === t.baseQueue && (t.baseState = s), r.lastRenderedState = s
                }
                return [s, n]
            }

            function Ts() {
            }

            function Ms(e, t) {
                var r = ds, n = _s(), i = t(), s = !on(n.memoizedState, i);
                if (s && (n.memoizedState = i, bo = !0), n = n.queue, Hs(Bs.bind(null, r, n, e), [e]), n.getSnapshot !== t || s || null !== ys && 1 & ys.memoizedState.tag) {
                    if (r.flags |= 2048, Ls(9, Is.bind(null, r, n, i, t), void 0, null), null === Tl) throw Error(a(349));
                    0 !== (30 & fs) || Fs(r, t, i)
                }
                return i
            }

            function Fs(e, t, r) {
                e.flags |= 16384, e = {
                    getSnapshot: t,
                    value: r
                }, null === (t = ds.updateQueue) ? (t = {
                    lastEffect: null,
                    stores: null
                }, ds.updateQueue = t, t.stores = [e]) : null === (r = t.stores) ? t.stores = [e] : r.push(e)
            }

            function Is(e, t, r, n) {
                t.value = r, t.getSnapshot = n, js(t) && Rs(e)
            }

            function Bs(e, t, r) {
                return r((function () {
                    js(t) && Rs(e)
                }))
            }

            function js(e) {
                var t = e.getSnapshot;
                e = e.value;
                try {
                    var r = t();
                    return !on(e, r)
                } catch (n) {
                    return !0
                }
            }

            function Rs(e) {
                var t = Da(e, 1);
                null !== t && nh(t, e, 1, -1)
            }

            function Vs(e) {
                var t = ws();
                return "function" === typeof e && (e = e()), t.memoizedState = t.baseState = e, e = {
                    pending: null,
                    interleaved: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: Cs,
                    lastRenderedState: e
                }, t.queue = e, e = e.dispatch = to.bind(null, ds, e), [t.memoizedState, e]
            }

            function Ls(e, t, r, n) {
                return e = {
                    tag: e,
                    create: t,
                    destroy: r,
                    deps: n,
                    next: null
                }, null === (t = ds.updateQueue) ? (t = {
                    lastEffect: null,
                    stores: null
                }, ds.updateQueue = t, t.lastEffect = e.next = e) : null === (r = t.lastEffect) ? t.lastEffect = e.next = e : (n = r.next, r.next = e, e.next = n, t.lastEffect = e), e
            }

            function Ns() {
                return _s().memoizedState
            }

            function Os(e, t, r, n) {
                var i = ws();
                ds.flags |= e, i.memoizedState = Ls(1 | t, r, void 0, void 0 === n ? null : n)
            }

            function zs(e, t, r, n) {
                var i = _s();
                n = void 0 === n ? null : n;
                var a = void 0;
                if (null !== ms) {
                    var s = ms.memoizedState;
                    if (a = s.destroy, null !== n && Ss(n, s.deps)) return void (i.memoizedState = Ls(t, r, a, n))
                }
                ds.flags |= e, i.memoizedState = Ls(1 | t, r, a, n)
            }

            function Gs(e, t) {
                return Os(8390656, 8, e, t)
            }

            function Hs(e, t) {
                return zs(2048, 8, e, t)
            }

            function qs(e, t) {
                return zs(4, 2, e, t)
            }

            function Ws(e, t) {
                return zs(4, 4, e, t)
            }

            function $s(e, t) {
                return "function" === typeof t ? (e = e(), t(e), function () {
                    t(null)
                }) : null !== t && void 0 !== t ? (e = e(), t.current = e, function () {
                    t.current = null
                }) : void 0
            }

            function Us(e, t, r) {
                return r = null !== r && void 0 !== r ? r.concat([e]) : null, zs(4, 4, $s.bind(null, t, e), r)
            }

            function Ys() {
            }

            function Qs(e, t) {
                var r = _s();
                t = void 0 === t ? null : t;
                var n = r.memoizedState;
                return null !== n && null !== t && Ss(t, n[1]) ? n[0] : (r.memoizedState = [e, t], e)
            }

            function Xs(e, t) {
                var r = _s();
                t = void 0 === t ? null : t;
                var n = r.memoizedState;
                return null !== n && null !== t && Ss(t, n[1]) ? n[0] : (e = e(), r.memoizedState = [e, t], e)
            }

            function Ks(e, t, r) {
                return 0 === (21 & fs) ? (e.baseState && (e.baseState = !1, bo = !0), e.memoizedState = r) : (on(r, t) || (r = mt(), ds.lanes |= r, Vl |= r, e.baseState = !0), t)
            }

            function Zs(e, t) {
                var r = xt;
                xt = 0 !== r && 4 > r ? r : 4, e(!0);
                var n = ps.transition;
                ps.transition = {};
                try {
                    e(!1), t()
                } finally {
                    xt = r, ps.transition = n
                }
            }

            function Js() {
                return _s().memoizedState
            }

            function eo(e, t, r) {
                var n = rh(e);
                if (r = {
                    lane: n,
                    action: r,
                    hasEagerState: !1,
                    eagerState: null,
                    next: null
                }, ro(e)) no(t, r); else if (null !== (r = Aa(e, t, r, n))) {
                    nh(r, e, n, th()), io(r, t, n)
                }
            }

            function to(e, t, r) {
                var n = rh(e), i = {lane: n, action: r, hasEagerState: !1, eagerState: null, next: null};
                if (ro(e)) no(t, i); else {
                    var a = e.alternate;
                    if (0 === e.lanes && (null === a || 0 === a.lanes) && null !== (a = t.lastRenderedReducer)) try {
                        var s = t.lastRenderedState, o = a(s, r);
                        if (i.hasEagerState = !0, i.eagerState = o, on(o, s)) {
                            var l = t.interleaved;
                            return null === l ? (i.next = i, Ca(t)) : (i.next = l.next, l.next = i), void (t.interleaved = i)
                        }
                    } catch (h) {
                    }
                    null !== (r = Aa(e, t, i, n)) && (nh(r, e, n, i = th()), io(r, t, n))
                }
            }

            function ro(e) {
                var t = e.alternate;
                return e === ds || null !== t && t === ds
            }

            function no(e, t) {
                vs = gs = !0;
                var r = e.pending;
                null === r ? t.next = t : (t.next = r.next, r.next = t), e.pending = t
            }

            function io(e, t, r) {
                if (0 !== (4194240 & r)) {
                    var n = t.lanes;
                    r |= n &= e.pendingLanes, t.lanes = r, vt(e, r)
                }
            }

            var ao = {
                readContext: wa,
                useCallback: ks,
                useContext: ks,
                useEffect: ks,
                useImperativeHandle: ks,
                useInsertionEffect: ks,
                useLayoutEffect: ks,
                useMemo: ks,
                useReducer: ks,
                useRef: ks,
                useState: ks,
                useDebugValue: ks,
                useDeferredValue: ks,
                useTransition: ks,
                useMutableSource: ks,
                useSyncExternalStore: ks,
                useId: ks,
                unstable_isNewReconciler: !1
            }, so = {
                readContext: wa, useCallback: function (e, t) {
                    return ws().memoizedState = [e, void 0 === t ? null : t], e
                }, useContext: wa, useEffect: Gs, useImperativeHandle: function (e, t, r) {
                    return r = null !== r && void 0 !== r ? r.concat([e]) : null, Os(4194308, 4, $s.bind(null, t, e), r)
                }, useLayoutEffect: function (e, t) {
                    return Os(4194308, 4, e, t)
                }, useInsertionEffect: function (e, t) {
                    return Os(4, 2, e, t)
                }, useMemo: function (e, t) {
                    var r = ws();
                    return t = void 0 === t ? null : t, e = e(), r.memoizedState = [e, t], e
                }, useReducer: function (e, t, r) {
                    var n = ws();
                    return t = void 0 !== r ? r(t) : t, n.memoizedState = n.baseState = t, e = {
                        pending: null,
                        interleaved: null,
                        lanes: 0,
                        dispatch: null,
                        lastRenderedReducer: e,
                        lastRenderedState: t
                    }, n.queue = e, e = e.dispatch = eo.bind(null, ds, e), [n.memoizedState, e]
                }, useRef: function (e) {
                    return e = {current: e}, ws().memoizedState = e
                }, useState: Vs, useDebugValue: Ys, useDeferredValue: function (e) {
                    return ws().memoizedState = e
                }, useTransition: function () {
                    var e = Vs(!1), t = e[0];
                    return e = Zs.bind(null, e[1]), ws().memoizedState = e, [t, e]
                }, useMutableSource: function () {
                }, useSyncExternalStore: function (e, t, r) {
                    var n = ds, i = ws();
                    if (ia) {
                        if (void 0 === r) throw Error(a(407));
                        r = r()
                    } else {
                        if (r = t(), null === Tl) throw Error(a(349));
                        0 !== (30 & fs) || Fs(n, t, r)
                    }
                    i.memoizedState = r;
                    var s = {value: r, getSnapshot: t};
                    return i.queue = s, Gs(Bs.bind(null, n, s, e), [e]), n.flags |= 2048, Ls(9, Is.bind(null, n, s, r, t), void 0, null), r
                }, useId: function () {
                    var e = ws(), t = Tl.identifierPrefix;
                    if (ia) {
                        var r = Ki;
                        t = ":" + t + "R" + (r = (Xi & ~(1 << 32 - st(Xi) - 1)).toString(32) + r), 0 < (r = xs++) && (t += "H" + r.toString(32)), t += ":"
                    } else t = ":" + t + "r" + (r = bs++).toString(32) + ":";
                    return e.memoizedState = t
                }, unstable_isNewReconciler: !1
            }, oo = {
                readContext: wa,
                useCallback: Qs,
                useContext: wa,
                useEffect: Hs,
                useImperativeHandle: Us,
                useInsertionEffect: qs,
                useLayoutEffect: Ws,
                useMemo: Xs,
                useReducer: As,
                useRef: Ns,
                useState: function () {
                    return As(Cs)
                },
                useDebugValue: Ys,
                useDeferredValue: function (e) {
                    return Ks(_s(), ms.memoizedState, e)
                },
                useTransition: function () {
                    return [As(Cs)[0], _s().memoizedState]
                },
                useMutableSource: Ts,
                useSyncExternalStore: Ms,
                useId: Js,
                unstable_isNewReconciler: !1
            }, lo = {
                readContext: wa,
                useCallback: Qs,
                useContext: wa,
                useEffect: Hs,
                useImperativeHandle: Us,
                useInsertionEffect: qs,
                useLayoutEffect: Ws,
                useMemo: Xs,
                useReducer: Ds,
                useRef: Ns,
                useState: function () {
                    return Ds(Cs)
                },
                useDebugValue: Ys,
                useDeferredValue: function (e) {
                    var t = _s();
                    return null === ms ? t.memoizedState = e : Ks(t, ms.memoizedState, e)
                },
                useTransition: function () {
                    return [Ds(Cs)[0], _s().memoizedState]
                },
                useMutableSource: Ts,
                useSyncExternalStore: Ms,
                useId: Js,
                unstable_isNewReconciler: !1
            };

            function ho(e, t) {
                try {
                    var r = "", n = t;
                    do {
                        r += z(n), n = n.return
                    } while (n);
                    var i = r
                } catch (a) {
                    i = "\nError generating stack: " + a.message + "\n" + a.stack
                }
                return {value: e, source: t, stack: i, digest: null}
            }

            function uo(e, t, r) {
                return {value: e, source: null, stack: null != r ? r : null, digest: null != t ? t : null}
            }

            function co(e, t) {
                try {
                    console.error(t.value)
                } catch (r) {
                    setTimeout((function () {
                        throw r
                    }))
                }
            }

            var po = "function" === typeof WeakMap ? WeakMap : Map;

            function fo(e, t, r) {
                (r = Ia(-1, r)).tag = 3, r.payload = {element: null};
                var n = t.value;
                return r.callback = function () {
                    Wl || (Wl = !0, $l = n), co(0, t)
                }, r
            }

            function mo(e, t, r) {
                (r = Ia(-1, r)).tag = 3;
                var n = e.type.getDerivedStateFromError;
                if ("function" === typeof n) {
                    var i = t.value;
                    r.payload = function () {
                        return n(i)
                    }, r.callback = function () {
                        co(0, t)
                    }
                }
                var a = e.stateNode;
                return null !== a && "function" === typeof a.componentDidCatch && (r.callback = function () {
                    co(0, t), "function" !== typeof n && (null === Ul ? Ul = new Set([this]) : Ul.add(this));
                    var e = t.stack;
                    this.componentDidCatch(t.value, {componentStack: null !== e ? e : ""})
                }), r
            }

            function yo(e, t, r) {
                var n = e.pingCache;
                if (null === n) {
                    n = e.pingCache = new po;
                    var i = new Set;
                    n.set(t, i)
                } else void 0 === (i = n.get(t)) && (i = new Set, n.set(t, i));
                i.has(r) || (i.add(r), e = _h.bind(null, e, t, r), t.then(e, e))
            }

            function go(e) {
                do {
                    var t;
                    if ((t = 13 === e.tag) && (t = null === (t = e.memoizedState) || null !== t.dehydrated), t) return e;
                    e = e.return
                } while (null !== e);
                return null
            }

            function vo(e, t, r, n, i) {
                return 0 === (1 & e.mode) ? (e === t ? e.flags |= 65536 : (e.flags |= 128, r.flags |= 131072, r.flags &= -52805, 1 === r.tag && (null === r.alternate ? r.tag = 17 : ((t = Ia(-1, 1)).tag = 2, Ba(r, t, 1))), r.lanes |= 1), e) : (e.flags |= 65536, e.lanes = i, e)
            }

            var xo = b.ReactCurrentOwner, bo = !1;

            function ko(e, t, r, n) {
                t.child = null === e ? Ka(t, null, r, n) : Xa(t, e.child, r, n)
            }

            function So(e, t, r, n, i) {
                r = r.render;
                var a = t.ref;
                return Pa(t, i), n = Es(e, t, r, n, a, i), r = Ps(), null === e || bo ? (ia && r && ea(t), t.flags |= 1, ko(e, t, n, i), t.child) : (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, Wo(e, t, i))
            }

            function Eo(e, t, r, n, i) {
                if (null === e) {
                    var a = r.type;
                    return "function" !== typeof a || Ih(a) || void 0 !== a.defaultProps || null !== r.compare || void 0 !== r.defaultProps ? ((e = jh(r.type, null, n, t, t.mode, i)).ref = t.ref, e.return = t, t.child = e) : (t.tag = 15, t.type = a, Po(e, t, a, n, i))
                }
                if (a = e.child, 0 === (e.lanes & i)) {
                    var s = a.memoizedProps;
                    if ((r = null !== (r = r.compare) ? r : ln)(s, n) && e.ref === t.ref) return Wo(e, t, i)
                }
                return t.flags |= 1, (e = Bh(a, n)).ref = t.ref, e.return = t, t.child = e
            }

            function Po(e, t, r, n, i) {
                if (null !== e) {
                    var a = e.memoizedProps;
                    if (ln(a, n) && e.ref === t.ref) {
                        if (bo = !1, t.pendingProps = n = a, 0 === (e.lanes & i)) return t.lanes = e.lanes, Wo(e, t, i);
                        0 !== (131072 & e.flags) && (bo = !0)
                    }
                }
                return Co(e, t, r, n, i)
            }

            function wo(e, t, r) {
                var n = t.pendingProps, i = n.children, a = null !== e ? e.memoizedState : null;
                if ("hidden" === n.mode) if (0 === (1 & t.mode)) t.memoizedState = {
                    baseLanes: 0,
                    cachePool: null,
                    transitions: null
                }, _i(Bl, Il), Il |= r; else {
                    if (0 === (1073741824 & r)) return e = null !== a ? a.baseLanes | r : r, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
                        baseLanes: e,
                        cachePool: null,
                        transitions: null
                    }, t.updateQueue = null, _i(Bl, Il), Il |= e, null;
                    t.memoizedState = {
                        baseLanes: 0,
                        cachePool: null,
                        transitions: null
                    }, n = null !== a ? a.baseLanes : r, _i(Bl, Il), Il |= n
                } else null !== a ? (n = a.baseLanes | r, t.memoizedState = null) : n = r, _i(Bl, Il), Il |= n;
                return ko(e, t, i, r), t.child
            }

            function _o(e, t) {
                var r = t.ref;
                (null === e && null !== r || null !== e && e.ref !== r) && (t.flags |= 512, t.flags |= 2097152)
            }

            function Co(e, t, r, n, i) {
                var a = Fi(r) ? Ti : Ai.current;
                return a = Mi(t, a), Pa(t, i), r = Es(e, t, r, n, a, i), n = Ps(), null === e || bo ? (ia && n && ea(t), t.flags |= 1, ko(e, t, r, i), t.child) : (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, Wo(e, t, i))
            }

            function Ao(e, t, r, n, i) {
                if (Fi(r)) {
                    var a = !0;
                    Ri(t)
                } else a = !1;
                if (Pa(t, i), null === t.stateNode) qo(e, t), Ha(t, r, n), Wa(t, r, n, i), n = !0; else if (null === e) {
                    var s = t.stateNode, o = t.memoizedProps;
                    s.props = o;
                    var l = s.context, h = r.contextType;
                    "object" === typeof h && null !== h ? h = wa(h) : h = Mi(t, h = Fi(r) ? Ti : Ai.current);
                    var u = r.getDerivedStateFromProps,
                        c = "function" === typeof u || "function" === typeof s.getSnapshotBeforeUpdate;
                    c || "function" !== typeof s.UNSAFE_componentWillReceiveProps && "function" !== typeof s.componentWillReceiveProps || (o !== n || l !== h) && qa(t, s, n, h), Ta = !1;
                    var p = t.memoizedState;
                    s.state = p, Va(t, n, s, i), l = t.memoizedState, o !== n || p !== l || Di.current || Ta ? ("function" === typeof u && (Oa(t, r, u, n), l = t.memoizedState), (o = Ta || Ga(t, r, o, n, p, l, h)) ? (c || "function" !== typeof s.UNSAFE_componentWillMount && "function" !== typeof s.componentWillMount || ("function" === typeof s.componentWillMount && s.componentWillMount(), "function" === typeof s.UNSAFE_componentWillMount && s.UNSAFE_componentWillMount()), "function" === typeof s.componentDidMount && (t.flags |= 4194308)) : ("function" === typeof s.componentDidMount && (t.flags |= 4194308), t.memoizedProps = n, t.memoizedState = l), s.props = n, s.state = l, s.context = h, n = o) : ("function" === typeof s.componentDidMount && (t.flags |= 4194308), n = !1)
                } else {
                    s = t.stateNode, Fa(e, t), o = t.memoizedProps, h = t.type === t.elementType ? o : ya(t.type, o), s.props = h, c = t.pendingProps, p = s.context, "object" === typeof (l = r.contextType) && null !== l ? l = wa(l) : l = Mi(t, l = Fi(r) ? Ti : Ai.current);
                    var f = r.getDerivedStateFromProps;
                    (u = "function" === typeof f || "function" === typeof s.getSnapshotBeforeUpdate) || "function" !== typeof s.UNSAFE_componentWillReceiveProps && "function" !== typeof s.componentWillReceiveProps || (o !== c || p !== l) && qa(t, s, n, l), Ta = !1, p = t.memoizedState, s.state = p, Va(t, n, s, i);
                    var d = t.memoizedState;
                    o !== c || p !== d || Di.current || Ta ? ("function" === typeof f && (Oa(t, r, f, n), d = t.memoizedState), (h = Ta || Ga(t, r, h, n, p, d, l) || !1) ? (u || "function" !== typeof s.UNSAFE_componentWillUpdate && "function" !== typeof s.componentWillUpdate || ("function" === typeof s.componentWillUpdate && s.componentWillUpdate(n, d, l), "function" === typeof s.UNSAFE_componentWillUpdate && s.UNSAFE_componentWillUpdate(n, d, l)), "function" === typeof s.componentDidUpdate && (t.flags |= 4), "function" === typeof s.getSnapshotBeforeUpdate && (t.flags |= 1024)) : ("function" !== typeof s.componentDidUpdate || o === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), "function" !== typeof s.getSnapshotBeforeUpdate || o === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), t.memoizedProps = n, t.memoizedState = d), s.props = n, s.state = d, s.context = l, n = h) : ("function" !== typeof s.componentDidUpdate || o === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), "function" !== typeof s.getSnapshotBeforeUpdate || o === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), n = !1)
                }
                return Do(e, t, r, n, a, i)
            }

            function Do(e, t, r, n, i, a) {
                _o(e, t);
                var s = 0 !== (128 & t.flags);
                if (!n && !s) return i && Vi(t, r, !1), Wo(e, t, a);
                n = t.stateNode, xo.current = t;
                var o = s && "function" !== typeof r.getDerivedStateFromError ? null : n.render();
                return t.flags |= 1, null !== e && s ? (t.child = Xa(t, e.child, null, a), t.child = Xa(t, null, o, a)) : ko(e, t, o, a), t.memoizedState = n.state, i && Vi(t, r, !0), t.child
            }

            function To(e) {
                var t = e.stateNode;
                t.pendingContext ? Bi(0, t.pendingContext, t.pendingContext !== t.context) : t.context && Bi(0, t.context, !1), ns(e, t.containerInfo)
            }

            function Mo(e, t, r, n, i) {
                return fa(), da(i), t.flags |= 256, ko(e, t, r, n), t.child
            }

            var Fo, Io, Bo, jo, Ro = {dehydrated: null, treeContext: null, retryLane: 0};

            function Vo(e) {
                return {baseLanes: e, cachePool: null, transitions: null}
            }

            function Lo(e, t, r) {
                var n, i = t.pendingProps, s = os.current, o = !1, l = 0 !== (128 & t.flags);
                if ((n = l) || (n = (null === e || null !== e.memoizedState) && 0 !== (2 & s)), n ? (o = !0, t.flags &= -129) : null !== e && null === e.memoizedState || (s |= 1), _i(os, 1 & s), null === e) return ha(t), null !== (e = t.memoizedState) && null !== (e = e.dehydrated) ? (0 === (1 & t.mode) ? t.lanes = 1 : "$!" === e.data ? t.lanes = 8 : t.lanes = 1073741824, null) : (l = i.children, e = i.fallback, o ? (i = t.mode, o = t.child, l = {
                    mode: "hidden",
                    children: l
                }, 0 === (1 & i) && null !== o ? (o.childLanes = 0, o.pendingProps = l) : o = Vh(l, i, 0, null), e = Rh(e, i, r, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = Vo(r), t.memoizedState = Ro, e) : No(t, l));
                if (null !== (s = e.memoizedState) && null !== (n = s.dehydrated)) return function (e, t, r, n, i, s, o) {
                    if (r) return 256 & t.flags ? (t.flags &= -257, Oo(e, t, o, n = uo(Error(a(422))))) : null !== t.memoizedState ? (t.child = e.child, t.flags |= 128, null) : (s = n.fallback, i = t.mode, n = Vh({
                        mode: "visible",
                        children: n.children
                    }, i, 0, null), (s = Rh(s, i, o, null)).flags |= 2, n.return = t, s.return = t, n.sibling = s, t.child = n, 0 !== (1 & t.mode) && Xa(t, e.child, null, o), t.child.memoizedState = Vo(o), t.memoizedState = Ro, s);
                    if (0 === (1 & t.mode)) return Oo(e, t, o, null);
                    if ("$!" === i.data) {
                        if (n = i.nextSibling && i.nextSibling.dataset) var l = n.dgst;
                        return n = l, Oo(e, t, o, n = uo(s = Error(a(419)), n, void 0))
                    }
                    if (l = 0 !== (o & e.childLanes), bo || l) {
                        if (null !== (n = Tl)) {
                            switch (o & -o) {
                                case 4:
                                    i = 2;
                                    break;
                                case 16:
                                    i = 8;
                                    break;
                                case 64:
                                case 128:
                                case 256:
                                case 512:
                                case 1024:
                                case 2048:
                                case 4096:
                                case 8192:
                                case 16384:
                                case 32768:
                                case 65536:
                                case 131072:
                                case 262144:
                                case 524288:
                                case 1048576:
                                case 2097152:
                                case 4194304:
                                case 8388608:
                                case 16777216:
                                case 33554432:
                                case 67108864:
                                    i = 32;
                                    break;
                                case 536870912:
                                    i = 268435456;
                                    break;
                                default:
                                    i = 0
                            }
                            0 !== (i = 0 !== (i & (n.suspendedLanes | o)) ? 0 : i) && i !== s.retryLane && (s.retryLane = i, Da(e, i), nh(n, e, i, -1))
                        }
                        return yh(), Oo(e, t, o, n = uo(Error(a(421))))
                    }
                    return "$?" === i.data ? (t.flags |= 128, t.child = e.child, t = Ah.bind(null, e), i._reactRetry = t, null) : (e = s.treeContext, na = hi(i.nextSibling), ra = t, ia = !0, aa = null, null !== e && (Ui[Yi++] = Xi, Ui[Yi++] = Ki, Ui[Yi++] = Qi, Xi = e.id, Ki = e.overflow, Qi = t), t = No(t, n.children), t.flags |= 4096, t)
                }(e, t, l, i, n, s, r);
                if (o) {
                    o = i.fallback, l = t.mode, n = (s = e.child).sibling;
                    var h = {mode: "hidden", children: i.children};
                    return 0 === (1 & l) && t.child !== s ? ((i = t.child).childLanes = 0, i.pendingProps = h, t.deletions = null) : (i = Bh(s, h)).subtreeFlags = 14680064 & s.subtreeFlags, null !== n ? o = Bh(n, o) : (o = Rh(o, l, r, null)).flags |= 2, o.return = t, i.return = t, i.sibling = o, t.child = i, i = o, o = t.child, l = null === (l = e.child.memoizedState) ? Vo(r) : {
                        baseLanes: l.baseLanes | r,
                        cachePool: null,
                        transitions: l.transitions
                    }, o.memoizedState = l, o.childLanes = e.childLanes & ~r, t.memoizedState = Ro, i
                }
                return e = (o = e.child).sibling, i = Bh(o, {
                    mode: "visible",
                    children: i.children
                }), 0 === (1 & t.mode) && (i.lanes = r), i.return = t, i.sibling = null, null !== e && (null === (r = t.deletions) ? (t.deletions = [e], t.flags |= 16) : r.push(e)), t.child = i, t.memoizedState = null, i
            }

            function No(e, t) {
                return (t = Vh({mode: "visible", children: t}, e.mode, 0, null)).return = e, e.child = t
            }

            function Oo(e, t, r, n) {
                return null !== n && da(n), Xa(t, e.child, null, r), (e = No(t, t.pendingProps.children)).flags |= 2, t.memoizedState = null, e
            }

            function zo(e, t, r) {
                e.lanes |= t;
                var n = e.alternate;
                null !== n && (n.lanes |= t), Ea(e.return, t, r)
            }

            function Go(e, t, r, n, i) {
                var a = e.memoizedState;
                null === a ? e.memoizedState = {
                    isBackwards: t,
                    rendering: null,
                    renderingStartTime: 0,
                    last: n,
                    tail: r,
                    tailMode: i
                } : (a.isBackwards = t, a.rendering = null, a.renderingStartTime = 0, a.last = n, a.tail = r, a.tailMode = i)
            }

            function Ho(e, t, r) {
                var n = t.pendingProps, i = n.revealOrder, a = n.tail;
                if (ko(e, t, n.children, r), 0 !== (2 & (n = os.current))) n = 1 & n | 2, t.flags |= 128; else {
                    if (null !== e && 0 !== (128 & e.flags)) e:for (e = t.child; null !== e;) {
                        if (13 === e.tag) null !== e.memoizedState && zo(e, r, t); else if (19 === e.tag) zo(e, r, t); else if (null !== e.child) {
                            e.child.return = e, e = e.child;
                            continue
                        }
                        if (e === t) break e;
                        for (; null === e.sibling;) {
                            if (null === e.return || e.return === t) break e;
                            e = e.return
                        }
                        e.sibling.return = e.return, e = e.sibling
                    }
                    n &= 1
                }
                if (_i(os, n), 0 === (1 & t.mode)) t.memoizedState = null; else switch (i) {
                    case"forwards":
                        for (r = t.child, i = null; null !== r;) null !== (e = r.alternate) && null === ls(e) && (i = r), r = r.sibling;
                        null === (r = i) ? (i = t.child, t.child = null) : (i = r.sibling, r.sibling = null), Go(t, !1, i, r, a);
                        break;
                    case"backwards":
                        for (r = null, i = t.child, t.child = null; null !== i;) {
                            if (null !== (e = i.alternate) && null === ls(e)) {
                                t.child = i;
                                break
                            }
                            e = i.sibling, i.sibling = r, r = i, i = e
                        }
                        Go(t, !0, r, null, a);
                        break;
                    case"together":
                        Go(t, !1, null, null, void 0);
                        break;
                    default:
                        t.memoizedState = null
                }
                return t.child
            }

            function qo(e, t) {
                0 === (1 & t.mode) && null !== e && (e.alternate = null, t.alternate = null, t.flags |= 2)
            }

            function Wo(e, t, r) {
                if (null !== e && (t.dependencies = e.dependencies), Vl |= t.lanes, 0 === (r & t.childLanes)) return null;
                if (null !== e && t.child !== e.child) throw Error(a(153));
                if (null !== t.child) {
                    for (r = Bh(e = t.child, e.pendingProps), t.child = r, r.return = t; null !== e.sibling;) e = e.sibling, (r = r.sibling = Bh(e, e.pendingProps)).return = t;
                    r.sibling = null
                }
                return t.child
            }

            function $o(e, t) {
                if (!ia) switch (e.tailMode) {
                    case"hidden":
                        t = e.tail;
                        for (var r = null; null !== t;) null !== t.alternate && (r = t), t = t.sibling;
                        null === r ? e.tail = null : r.sibling = null;
                        break;
                    case"collapsed":
                        r = e.tail;
                        for (var n = null; null !== r;) null !== r.alternate && (n = r), r = r.sibling;
                        null === n ? t || null === e.tail ? e.tail = null : e.tail.sibling = null : n.sibling = null
                }
            }

            function Uo(e) {
                var t = null !== e.alternate && e.alternate.child === e.child, r = 0, n = 0;
                if (t) for (var i = e.child; null !== i;) r |= i.lanes | i.childLanes, n |= 14680064 & i.subtreeFlags, n |= 14680064 & i.flags, i.return = e, i = i.sibling; else for (i = e.child; null !== i;) r |= i.lanes | i.childLanes, n |= i.subtreeFlags, n |= i.flags, i.return = e, i = i.sibling;
                return e.subtreeFlags |= n, e.childLanes = r, t
            }

            function Yo(e, t, r) {
                var n = t.pendingProps;
                switch (ta(t), t.tag) {
                    case 2:
                    case 16:
                    case 15:
                    case 0:
                    case 11:
                    case 7:
                    case 8:
                    case 12:
                    case 9:
                    case 14:
                        return Uo(t), null;
                    case 1:
                    case 17:
                        return Fi(t.type) && Ii(), Uo(t), null;
                    case 3:
                        return n = t.stateNode, is(), wi(Di), wi(Ai), us(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), null !== e && null !== e.child || (ca(t) ? t.flags |= 4 : null === e || e.memoizedState.isDehydrated && 0 === (256 & t.flags) || (t.flags |= 1024, null !== aa && (oh(aa), aa = null))), Io(e, t), Uo(t), null;
                    case 5:
                        ss(t);
                        var i = rs(ts.current);
                        if (r = t.type, null !== e && null != t.stateNode) Bo(e, t, r, n, i), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152); else {
                            if (!n) {
                                if (null === t.stateNode) throw Error(a(166));
                                return Uo(t), null
                            }
                            if (e = rs(Ja.current), ca(t)) {
                                n = t.stateNode, r = t.type;
                                var s = t.memoizedProps;
                                switch (n[pi] = t, n[fi] = s, e = 0 !== (1 & t.mode), r) {
                                    case"dialog":
                                        Nn("cancel", n), Nn("close", n);
                                        break;
                                    case"iframe":
                                    case"object":
                                    case"embed":
                                        Nn("load", n);
                                        break;
                                    case"video":
                                    case"audio":
                                        for (i = 0; i < jn.length; i++) Nn(jn[i], n);
                                        break;
                                    case"source":
                                        Nn("error", n);
                                        break;
                                    case"img":
                                    case"image":
                                    case"link":
                                        Nn("error", n), Nn("load", n);
                                        break;
                                    case"details":
                                        Nn("toggle", n);
                                        break;
                                    case"input":
                                        X(n, s), Nn("invalid", n);
                                        break;
                                    case"select":
                                        n._wrapperState = {wasMultiple: !!s.multiple}, Nn("invalid", n);
                                        break;
                                    case"textarea":
                                        ie(n, s), Nn("invalid", n)
                                }
                                for (var l in ve(r, s), i = null, s) if (s.hasOwnProperty(l)) {
                                    var h = s[l];
                                    "children" === l ? "string" === typeof h ? n.textContent !== h && (!0 !== s.suppressHydrationWarning && Zn(n.textContent, h, e), i = ["children", h]) : "number" === typeof h && n.textContent !== "" + h && (!0 !== s.suppressHydrationWarning && Zn(n.textContent, h, e), i = ["children", "" + h]) : o.hasOwnProperty(l) && null != h && "onScroll" === l && Nn("scroll", n)
                                }
                                switch (r) {
                                    case"input":
                                        $(n), J(n, s, !0);
                                        break;
                                    case"textarea":
                                        $(n), se(n);
                                        break;
                                    case"select":
                                    case"option":
                                        break;
                                    default:
                                        "function" === typeof s.onClick && (n.onclick = Jn)
                                }
                                n = i, t.updateQueue = n, null !== n && (t.flags |= 4)
                            } else {
                                l = 9 === i.nodeType ? i : i.ownerDocument, "http://www.w3.org/1999/xhtml" === e && (e = oe(r)), "http://www.w3.org/1999/xhtml" === e ? "script" === r ? ((e = l.createElement("div")).innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : "string" === typeof n.is ? e = l.createElement(r, {is: n.is}) : (e = l.createElement(r), "select" === r && (l = e, n.multiple ? l.multiple = !0 : n.size && (l.size = n.size))) : e = l.createElementNS(e, r), e[pi] = t, e[fi] = n, Fo(e, t, !1, !1), t.stateNode = e;
                                e:{
                                    switch (l = xe(r, n), r) {
                                        case"dialog":
                                            Nn("cancel", e), Nn("close", e), i = n;
                                            break;
                                        case"iframe":
                                        case"object":
                                        case"embed":
                                            Nn("load", e), i = n;
                                            break;
                                        case"video":
                                        case"audio":
                                            for (i = 0; i < jn.length; i++) Nn(jn[i], e);
                                            i = n;
                                            break;
                                        case"source":
                                            Nn("error", e), i = n;
                                            break;
                                        case"img":
                                        case"image":
                                        case"link":
                                            Nn("error", e), Nn("load", e), i = n;
                                            break;
                                        case"details":
                                            Nn("toggle", e), i = n;
                                            break;
                                        case"input":
                                            X(e, n), i = Q(e, n), Nn("invalid", e);
                                            break;
                                        case"option":
                                        default:
                                            i = n;
                                            break;
                                        case"select":
                                            e._wrapperState = {wasMultiple: !!n.multiple}, i = V({}, n, {value: void 0}), Nn("invalid", e);
                                            break;
                                        case"textarea":
                                            ie(e, n), i = ne(e, n), Nn("invalid", e)
                                    }
                                    for (s in ve(r, i), h = i) if (h.hasOwnProperty(s)) {
                                        var u = h[s];
                                        "style" === s ? ye(e, u) : "dangerouslySetInnerHTML" === s ? null != (u = u ? u.__html : void 0) && ce(e, u) : "children" === s ? "string" === typeof u ? ("textarea" !== r || "" !== u) && pe(e, u) : "number" === typeof u && pe(e, "" + u) : "suppressContentEditableWarning" !== s && "suppressHydrationWarning" !== s && "autoFocus" !== s && (o.hasOwnProperty(s) ? null != u && "onScroll" === s && Nn("scroll", e) : null != u && x(e, s, u, l))
                                    }
                                    switch (r) {
                                        case"input":
                                            $(e), J(e, n, !1);
                                            break;
                                        case"textarea":
                                            $(e), se(e);
                                            break;
                                        case"option":
                                            null != n.value && e.setAttribute("value", "" + q(n.value));
                                            break;
                                        case"select":
                                            e.multiple = !!n.multiple, null != (s = n.value) ? re(e, !!n.multiple, s, !1) : null != n.defaultValue && re(e, !!n.multiple, n.defaultValue, !0);
                                            break;
                                        default:
                                            "function" === typeof i.onClick && (e.onclick = Jn)
                                    }
                                    switch (r) {
                                        case"button":
                                        case"input":
                                        case"select":
                                        case"textarea":
                                            n = !!n.autoFocus;
                                            break e;
                                        case"img":
                                            n = !0;
                                            break e;
                                        default:
                                            n = !1
                                    }
                                }
                                n && (t.flags |= 4)
                            }
                            null !== t.ref && (t.flags |= 512, t.flags |= 2097152)
                        }
                        return Uo(t), null;
                    case 6:
                        if (e && null != t.stateNode) jo(e, t, e.memoizedProps, n); else {
                            if ("string" !== typeof n && null === t.stateNode) throw Error(a(166));
                            if (r = rs(ts.current), rs(Ja.current), ca(t)) {
                                if (n = t.stateNode, r = t.memoizedProps, n[pi] = t, (s = n.nodeValue !== r) && null !== (e = ra)) switch (e.tag) {
                                    case 3:
                                        Zn(n.nodeValue, r, 0 !== (1 & e.mode));
                                        break;
                                    case 5:
                                        !0 !== e.memoizedProps.suppressHydrationWarning && Zn(n.nodeValue, r, 0 !== (1 & e.mode))
                                }
                                s && (t.flags |= 4)
                            } else (n = (9 === r.nodeType ? r : r.ownerDocument).createTextNode(n))[pi] = t, t.stateNode = n
                        }
                        return Uo(t), null;
                    case 13:
                        if (wi(os), n = t.memoizedState, null === e || null !== e.memoizedState && null !== e.memoizedState.dehydrated) {
                            if (ia && null !== na && 0 !== (1 & t.mode) && 0 === (128 & t.flags)) pa(), fa(), t.flags |= 98560, s = !1; else if (s = ca(t), null !== n && null !== n.dehydrated) {
                                if (null === e) {
                                    if (!s) throw Error(a(318));
                                    if (!(s = null !== (s = t.memoizedState) ? s.dehydrated : null)) throw Error(a(317));
                                    s[pi] = t
                                } else fa(), 0 === (128 & t.flags) && (t.memoizedState = null), t.flags |= 4;
                                Uo(t), s = !1
                            } else null !== aa && (oh(aa), aa = null), s = !0;
                            if (!s) return 65536 & t.flags ? t : null
                        }
                        return 0 !== (128 & t.flags) ? (t.lanes = r, t) : ((n = null !== n) !== (null !== e && null !== e.memoizedState) && n && (t.child.flags |= 8192, 0 !== (1 & t.mode) && (null === e || 0 !== (1 & os.current) ? 0 === jl && (jl = 3) : yh())), null !== t.updateQueue && (t.flags |= 4), Uo(t), null);
                    case 4:
                        return is(), Io(e, t), null === e && Gn(t.stateNode.containerInfo), Uo(t), null;
                    case 10:
                        return Sa(t.type._context), Uo(t), null;
                    case 19:
                        if (wi(os), null === (s = t.memoizedState)) return Uo(t), null;
                        if (n = 0 !== (128 & t.flags), null === (l = s.rendering)) if (n) $o(s, !1); else {
                            if (0 !== jl || null !== e && 0 !== (128 & e.flags)) for (e = t.child; null !== e;) {
                                if (null !== (l = ls(e))) {
                                    for (t.flags |= 128, $o(s, !1), null !== (n = l.updateQueue) && (t.updateQueue = n, t.flags |= 4), t.subtreeFlags = 0, n = r, r = t.child; null !== r;) e = n, (s = r).flags &= 14680066, null === (l = s.alternate) ? (s.childLanes = 0, s.lanes = e, s.child = null, s.subtreeFlags = 0, s.memoizedProps = null, s.memoizedState = null, s.updateQueue = null, s.dependencies = null, s.stateNode = null) : (s.childLanes = l.childLanes, s.lanes = l.lanes, s.child = l.child, s.subtreeFlags = 0, s.deletions = null, s.memoizedProps = l.memoizedProps, s.memoizedState = l.memoizedState, s.updateQueue = l.updateQueue, s.type = l.type, e = l.dependencies, s.dependencies = null === e ? null : {
                                        lanes: e.lanes,
                                        firstContext: e.firstContext
                                    }), r = r.sibling;
                                    return _i(os, 1 & os.current | 2), t.child
                                }
                                e = e.sibling
                            }
                            null !== s.tail && Ke() > Hl && (t.flags |= 128, n = !0, $o(s, !1), t.lanes = 4194304)
                        } else {
                            if (!n) if (null !== (e = ls(l))) {
                                if (t.flags |= 128, n = !0, null !== (r = e.updateQueue) && (t.updateQueue = r, t.flags |= 4), $o(s, !0), null === s.tail && "hidden" === s.tailMode && !l.alternate && !ia) return Uo(t), null
                            } else 2 * Ke() - s.renderingStartTime > Hl && 1073741824 !== r && (t.flags |= 128, n = !0, $o(s, !1), t.lanes = 4194304);
                            s.isBackwards ? (l.sibling = t.child, t.child = l) : (null !== (r = s.last) ? r.sibling = l : t.child = l, s.last = l)
                        }
                        return null !== s.tail ? (t = s.tail, s.rendering = t, s.tail = t.sibling, s.renderingStartTime = Ke(), t.sibling = null, r = os.current, _i(os, n ? 1 & r | 2 : 1 & r), t) : (Uo(t), null);
                    case 22:
                    case 23:
                        return ph(), n = null !== t.memoizedState, null !== e && null !== e.memoizedState !== n && (t.flags |= 8192), n && 0 !== (1 & t.mode) ? 0 !== (1073741824 & Il) && (Uo(t), 6 & t.subtreeFlags && (t.flags |= 8192)) : Uo(t), null;
                    case 24:
                    case 25:
                        return null
                }
                throw Error(a(156, t.tag))
            }

            function Qo(e, t) {
                switch (ta(t), t.tag) {
                    case 1:
                        return Fi(t.type) && Ii(), 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128, t) : null;
                    case 3:
                        return is(), wi(Di), wi(Ai), us(), 0 !== (65536 & (e = t.flags)) && 0 === (128 & e) ? (t.flags = -65537 & e | 128, t) : null;
                    case 5:
                        return ss(t), null;
                    case 13:
                        if (wi(os), null !== (e = t.memoizedState) && null !== e.dehydrated) {
                            if (null === t.alternate) throw Error(a(340));
                            fa()
                        }
                        return 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128, t) : null;
                    case 19:
                        return wi(os), null;
                    case 4:
                        return is(), null;
                    case 10:
                        return Sa(t.type._context), null;
                    case 22:
                    case 23:
                        return ph(), null;
                    default:
                        return null
                }
            }

            Fo = function (e, t) {
                for (var r = t.child; null !== r;) {
                    if (5 === r.tag || 6 === r.tag) e.appendChild(r.stateNode); else if (4 !== r.tag && null !== r.child) {
                        r.child.return = r, r = r.child;
                        continue
                    }
                    if (r === t) break;
                    for (; null === r.sibling;) {
                        if (null === r.return || r.return === t) return;
                        r = r.return
                    }
                    r.sibling.return = r.return, r = r.sibling
                }
            }, Io = function () {
            }, Bo = function (e, t, r, n) {
                var i = e.memoizedProps;
                if (i !== n) {
                    e = t.stateNode, rs(Ja.current);
                    var a, s = null;
                    switch (r) {
                        case"input":
                            i = Q(e, i), n = Q(e, n), s = [];
                            break;
                        case"select":
                            i = V({}, i, {value: void 0}), n = V({}, n, {value: void 0}), s = [];
                            break;
                        case"textarea":
                            i = ne(e, i), n = ne(e, n), s = [];
                            break;
                        default:
                            "function" !== typeof i.onClick && "function" === typeof n.onClick && (e.onclick = Jn)
                    }
                    for (u in ve(r, n), r = null, i) if (!n.hasOwnProperty(u) && i.hasOwnProperty(u) && null != i[u]) if ("style" === u) {
                        var l = i[u];
                        for (a in l) l.hasOwnProperty(a) && (r || (r = {}), r[a] = "")
                    } else "dangerouslySetInnerHTML" !== u && "children" !== u && "suppressContentEditableWarning" !== u && "suppressHydrationWarning" !== u && "autoFocus" !== u && (o.hasOwnProperty(u) ? s || (s = []) : (s = s || []).push(u, null));
                    for (u in n) {
                        var h = n[u];
                        if (l = null != i ? i[u] : void 0, n.hasOwnProperty(u) && h !== l && (null != h || null != l)) if ("style" === u) if (l) {
                            for (a in l) !l.hasOwnProperty(a) || h && h.hasOwnProperty(a) || (r || (r = {}), r[a] = "");
                            for (a in h) h.hasOwnProperty(a) && l[a] !== h[a] && (r || (r = {}), r[a] = h[a])
                        } else r || (s || (s = []), s.push(u, r)), r = h; else "dangerouslySetInnerHTML" === u ? (h = h ? h.__html : void 0, l = l ? l.__html : void 0, null != h && l !== h && (s = s || []).push(u, h)) : "children" === u ? "string" !== typeof h && "number" !== typeof h || (s = s || []).push(u, "" + h) : "suppressContentEditableWarning" !== u && "suppressHydrationWarning" !== u && (o.hasOwnProperty(u) ? (null != h && "onScroll" === u && Nn("scroll", e), s || l === h || (s = [])) : (s = s || []).push(u, h))
                    }
                    r && (s = s || []).push("style", r);
                    var u = s;
                    (t.updateQueue = u) && (t.flags |= 4)
                }
            }, jo = function (e, t, r, n) {
                r !== n && (t.flags |= 4)
            };
            var Xo = !1, Ko = !1, Zo = "function" === typeof WeakSet ? WeakSet : Set, Jo = null;

            function el(e, t) {
                var r = e.ref;
                if (null !== r) if ("function" === typeof r) try {
                    r(null)
                } catch (n) {
                    wh(e, t, n)
                } else r.current = null
            }

            function tl(e, t, r) {
                try {
                    r()
                } catch (n) {
                    wh(e, t, n)
                }
            }

            var rl = !1;

            function nl(e, t, r) {
                var n = t.updateQueue;
                if (null !== (n = null !== n ? n.lastEffect : null)) {
                    var i = n = n.next;
                    do {
                        if ((i.tag & e) === e) {
                            var a = i.destroy;
                            i.destroy = void 0, void 0 !== a && tl(t, r, a)
                        }
                        i = i.next
                    } while (i !== n)
                }
            }

            function il(e, t) {
                if (null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)) {
                    var r = t = t.next;
                    do {
                        if ((r.tag & e) === e) {
                            var n = r.create;
                            r.destroy = n()
                        }
                        r = r.next
                    } while (r !== t)
                }
            }

            function al(e) {
                var t = e.ref;
                if (null !== t) {
                    var r = e.stateNode;
                    e.tag, e = r, "function" === typeof t ? t(e) : t.current = e
                }
            }

            function sl(e) {
                var t = e.alternate;
                null !== t && (e.alternate = null, sl(t)), e.child = null, e.deletions = null, e.sibling = null, 5 === e.tag && (null !== (t = e.stateNode) && (delete t[pi], delete t[fi], delete t[mi], delete t[yi], delete t[gi])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
            }

            function ol(e) {
                return 5 === e.tag || 3 === e.tag || 4 === e.tag
            }

            function ll(e) {
                e:for (; ;) {
                    for (; null === e.sibling;) {
                        if (null === e.return || ol(e.return)) return null;
                        e = e.return
                    }
                    for (e.sibling.return = e.return, e = e.sibling; 5 !== e.tag && 6 !== e.tag && 18 !== e.tag;) {
                        if (2 & e.flags) continue e;
                        if (null === e.child || 4 === e.tag) continue e;
                        e.child.return = e, e = e.child
                    }
                    if (!(2 & e.flags)) return e.stateNode
                }
            }

            function hl(e, t, r) {
                var n = e.tag;
                if (5 === n || 6 === n) e = e.stateNode, t ? 8 === r.nodeType ? r.parentNode.insertBefore(e, t) : r.insertBefore(e, t) : (8 === r.nodeType ? (t = r.parentNode).insertBefore(e, r) : (t = r).appendChild(e), null !== (r = r._reactRootContainer) && void 0 !== r || null !== t.onclick || (t.onclick = Jn)); else if (4 !== n && null !== (e = e.child)) for (hl(e, t, r), e = e.sibling; null !== e;) hl(e, t, r), e = e.sibling
            }

            function ul(e, t, r) {
                var n = e.tag;
                if (5 === n || 6 === n) e = e.stateNode, t ? r.insertBefore(e, t) : r.appendChild(e); else if (4 !== n && null !== (e = e.child)) for (ul(e, t, r), e = e.sibling; null !== e;) ul(e, t, r), e = e.sibling
            }

            var cl = null, pl = !1;

            function fl(e, t, r) {
                for (r = r.child; null !== r;) dl(e, t, r), r = r.sibling
            }

            function dl(e, t, r) {
                if (at && "function" === typeof at.onCommitFiberUnmount) try {
                    at.onCommitFiberUnmount(it, r)
                } catch (o) {
                }
                switch (r.tag) {
                    case 5:
                        Ko || el(r, t);
                    case 6:
                        var n = cl, i = pl;
                        cl = null, fl(e, t, r), pl = i, null !== (cl = n) && (pl ? (e = cl, r = r.stateNode, 8 === e.nodeType ? e.parentNode.removeChild(r) : e.removeChild(r)) : cl.removeChild(r.stateNode));
                        break;
                    case 18:
                        null !== cl && (pl ? (e = cl, r = r.stateNode, 8 === e.nodeType ? li(e.parentNode, r) : 1 === e.nodeType && li(e, r), Gt(e)) : li(cl, r.stateNode));
                        break;
                    case 4:
                        n = cl, i = pl, cl = r.stateNode.containerInfo, pl = !0, fl(e, t, r), cl = n, pl = i;
                        break;
                    case 0:
                    case 11:
                    case 14:
                    case 15:
                        if (!Ko && (null !== (n = r.updateQueue) && null !== (n = n.lastEffect))) {
                            i = n = n.next;
                            do {
                                var a = i, s = a.destroy;
                                a = a.tag, void 0 !== s && (0 !== (2 & a) || 0 !== (4 & a)) && tl(r, t, s), i = i.next
                            } while (i !== n)
                        }
                        fl(e, t, r);
                        break;
                    case 1:
                        if (!Ko && (el(r, t), "function" === typeof (n = r.stateNode).componentWillUnmount)) try {
                            n.props = r.memoizedProps, n.state = r.memoizedState, n.componentWillUnmount()
                        } catch (o) {
                            wh(r, t, o)
                        }
                        fl(e, t, r);
                        break;
                    case 21:
                        fl(e, t, r);
                        break;
                    case 22:
                        1 & r.mode ? (Ko = (n = Ko) || null !== r.memoizedState, fl(e, t, r), Ko = n) : fl(e, t, r);
                        break;
                    default:
                        fl(e, t, r)
                }
            }

            function ml(e) {
                var t = e.updateQueue;
                if (null !== t) {
                    e.updateQueue = null;
                    var r = e.stateNode;
                    null === r && (r = e.stateNode = new Zo), t.forEach((function (t) {
                        var n = Dh.bind(null, e, t);
                        r.has(t) || (r.add(t), t.then(n, n))
                    }))
                }
            }

            function yl(e, t) {
                var r = t.deletions;
                if (null !== r) for (var n = 0; n < r.length; n++) {
                    var i = r[n];
                    try {
                        var s = e, o = t, l = o;
                        e:for (; null !== l;) {
                            switch (l.tag) {
                                case 5:
                                    cl = l.stateNode, pl = !1;
                                    break e;
                                case 3:
                                case 4:
                                    cl = l.stateNode.containerInfo, pl = !0;
                                    break e
                            }
                            l = l.return
                        }
                        if (null === cl) throw Error(a(160));
                        dl(s, o, i), cl = null, pl = !1;
                        var h = i.alternate;
                        null !== h && (h.return = null), i.return = null
                    } catch (u) {
                        wh(i, t, u)
                    }
                }
                if (12854 & t.subtreeFlags) for (t = t.child; null !== t;) gl(t, e), t = t.sibling
            }

            function gl(e, t) {
                var r = e.alternate, n = e.flags;
                switch (e.tag) {
                    case 0:
                    case 11:
                    case 14:
                    case 15:
                        if (yl(t, e), vl(e), 4 & n) {
                            try {
                                nl(3, e, e.return), il(3, e)
                            } catch (y) {
                                wh(e, e.return, y)
                            }
                            try {
                                nl(5, e, e.return)
                            } catch (y) {
                                wh(e, e.return, y)
                            }
                        }
                        break;
                    case 1:
                        yl(t, e), vl(e), 512 & n && null !== r && el(r, r.return);
                        break;
                    case 5:
                        if (yl(t, e), vl(e), 512 & n && null !== r && el(r, r.return), 32 & e.flags) {
                            var i = e.stateNode;
                            try {
                                pe(i, "")
                            } catch (y) {
                                wh(e, e.return, y)
                            }
                        }
                        if (4 & n && null != (i = e.stateNode)) {
                            var s = e.memoizedProps, o = null !== r ? r.memoizedProps : s, l = e.type,
                                h = e.updateQueue;
                            if (e.updateQueue = null, null !== h) try {
                                "input" === l && "radio" === s.type && null != s.name && K(i, s), xe(l, o);
                                var u = xe(l, s);
                                for (o = 0; o < h.length; o += 2) {
                                    var c = h[o], p = h[o + 1];
                                    "style" === c ? ye(i, p) : "dangerouslySetInnerHTML" === c ? ce(i, p) : "children" === c ? pe(i, p) : x(i, c, p, u)
                                }
                                switch (l) {
                                    case"input":
                                        Z(i, s);
                                        break;
                                    case"textarea":
                                        ae(i, s);
                                        break;
                                    case"select":
                                        var f = i._wrapperState.wasMultiple;
                                        i._wrapperState.wasMultiple = !!s.multiple;
                                        var d = s.value;
                                        null != d ? re(i, !!s.multiple, d, !1) : f !== !!s.multiple && (null != s.defaultValue ? re(i, !!s.multiple, s.defaultValue, !0) : re(i, !!s.multiple, s.multiple ? [] : "", !1))
                                }
                                i[fi] = s
                            } catch (y) {
                                wh(e, e.return, y)
                            }
                        }
                        break;
                    case 6:
                        if (yl(t, e), vl(e), 4 & n) {
                            if (null === e.stateNode) throw Error(a(162));
                            i = e.stateNode, s = e.memoizedProps;
                            try {
                                i.nodeValue = s
                            } catch (y) {
                                wh(e, e.return, y)
                            }
                        }
                        break;
                    case 3:
                        if (yl(t, e), vl(e), 4 & n && null !== r && r.memoizedState.isDehydrated) try {
                            Gt(t.containerInfo)
                        } catch (y) {
                            wh(e, e.return, y)
                        }
                        break;
                    case 4:
                    default:
                        yl(t, e), vl(e);
                        break;
                    case 13:
                        yl(t, e), vl(e), 8192 & (i = e.child).flags && (s = null !== i.memoizedState, i.stateNode.isHidden = s, !s || null !== i.alternate && null !== i.alternate.memoizedState || (Gl = Ke())), 4 & n && ml(e);
                        break;
                    case 22:
                        if (c = null !== r && null !== r.memoizedState, 1 & e.mode ? (Ko = (u = Ko) || c, yl(t, e), Ko = u) : yl(t, e), vl(e), 8192 & n) {
                            if (u = null !== e.memoizedState, (e.stateNode.isHidden = u) && !c && 0 !== (1 & e.mode)) for (Jo = e, c = e.child; null !== c;) {
                                for (p = Jo = c; null !== Jo;) {
                                    switch (d = (f = Jo).child, f.tag) {
                                        case 0:
                                        case 11:
                                        case 14:
                                        case 15:
                                            nl(4, f, f.return);
                                            break;
                                        case 1:
                                            el(f, f.return);
                                            var m = f.stateNode;
                                            if ("function" === typeof m.componentWillUnmount) {
                                                n = f, r = f.return;
                                                try {
                                                    t = n, m.props = t.memoizedProps, m.state = t.memoizedState, m.componentWillUnmount()
                                                } catch (y) {
                                                    wh(n, r, y)
                                                }
                                            }
                                            break;
                                        case 5:
                                            el(f, f.return);
                                            break;
                                        case 22:
                                            if (null !== f.memoizedState) {
                                                Sl(p);
                                                continue
                                            }
                                    }
                                    null !== d ? (d.return = f, Jo = d) : Sl(p)
                                }
                                c = c.sibling
                            }
                            e:for (c = null, p = e; ;) {
                                if (5 === p.tag) {
                                    if (null === c) {
                                        c = p;
                                        try {
                                            i = p.stateNode, u ? "function" === typeof (s = i.style).setProperty ? s.setProperty("display", "none", "important") : s.display = "none" : (l = p.stateNode, o = void 0 !== (h = p.memoizedProps.style) && null !== h && h.hasOwnProperty("display") ? h.display : null, l.style.display = me("display", o))
                                        } catch (y) {
                                            wh(e, e.return, y)
                                        }
                                    }
                                } else if (6 === p.tag) {
                                    if (null === c) try {
                                        p.stateNode.nodeValue = u ? "" : p.memoizedProps
                                    } catch (y) {
                                        wh(e, e.return, y)
                                    }
                                } else if ((22 !== p.tag && 23 !== p.tag || null === p.memoizedState || p === e) && null !== p.child) {
                                    p.child.return = p, p = p.child;
                                    continue
                                }
                                if (p === e) break e;
                                for (; null === p.sibling;) {
                                    if (null === p.return || p.return === e) break e;
                                    c === p && (c = null), p = p.return
                                }
                                c === p && (c = null), p.sibling.return = p.return, p = p.sibling
                            }
                        }
                        break;
                    case 19:
                        yl(t, e), vl(e), 4 & n && ml(e);
                    case 21:
                }
            }

            function vl(e) {
                var t = e.flags;
                if (2 & t) {
                    try {
                        e:{
                            for (var r = e.return; null !== r;) {
                                if (ol(r)) {
                                    var n = r;
                                    break e
                                }
                                r = r.return
                            }
                            throw Error(a(160))
                        }
                        switch (n.tag) {
                            case 5:
                                var i = n.stateNode;
                                32 & n.flags && (pe(i, ""), n.flags &= -33), ul(e, ll(e), i);
                                break;
                            case 3:
                            case 4:
                                var s = n.stateNode.containerInfo;
                                hl(e, ll(e), s);
                                break;
                            default:
                                throw Error(a(161))
                        }
                    } catch (o) {
                        wh(e, e.return, o)
                    }
                    e.flags &= -3
                }
                4096 & t && (e.flags &= -4097)
            }

            function xl(e, t, r) {
                Jo = e, bl(e, t, r)
            }

            function bl(e, t, r) {
                for (var n = 0 !== (1 & e.mode); null !== Jo;) {
                    var i = Jo, a = i.child;
                    if (22 === i.tag && n) {
                        var s = null !== i.memoizedState || Xo;
                        if (!s) {
                            var o = i.alternate, l = null !== o && null !== o.memoizedState || Ko;
                            o = Xo;
                            var h = Ko;
                            if (Xo = s, (Ko = l) && !h) for (Jo = i; null !== Jo;) l = (s = Jo).child, 22 === s.tag && null !== s.memoizedState ? El(i) : null !== l ? (l.return = s, Jo = l) : El(i);
                            for (; null !== a;) Jo = a, bl(a, t, r), a = a.sibling;
                            Jo = i, Xo = o, Ko = h
                        }
                        kl(e)
                    } else 0 !== (8772 & i.subtreeFlags) && null !== a ? (a.return = i, Jo = a) : kl(e)
                }
            }

            function kl(e) {
                for (; null !== Jo;) {
                    var t = Jo;
                    if (0 !== (8772 & t.flags)) {
                        var r = t.alternate;
                        try {
                            if (0 !== (8772 & t.flags)) switch (t.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    Ko || il(5, t);
                                    break;
                                case 1:
                                    var n = t.stateNode;
                                    if (4 & t.flags && !Ko) if (null === r) n.componentDidMount(); else {
                                        var i = t.elementType === t.type ? r.memoizedProps : ya(t.type, r.memoizedProps);
                                        n.componentDidUpdate(i, r.memoizedState, n.__reactInternalSnapshotBeforeUpdate)
                                    }
                                    var s = t.updateQueue;
                                    null !== s && La(t, s, n);
                                    break;
                                case 3:
                                    var o = t.updateQueue;
                                    if (null !== o) {
                                        if (r = null, null !== t.child) switch (t.child.tag) {
                                            case 5:
                                            case 1:
                                                r = t.child.stateNode
                                        }
                                        La(t, o, r)
                                    }
                                    break;
                                case 5:
                                    var l = t.stateNode;
                                    if (null === r && 4 & t.flags) {
                                        r = l;
                                        var h = t.memoizedProps;
                                        switch (t.type) {
                                            case"button":
                                            case"input":
                                            case"select":
                                            case"textarea":
                                                h.autoFocus && r.focus();
                                                break;
                                            case"img":
                                                h.src && (r.src = h.src)
                                        }
                                    }
                                    break;
                                case 6:
                                case 4:
                                case 12:
                                case 19:
                                case 17:
                                case 21:
                                case 22:
                                case 23:
                                case 25:
                                    break;
                                case 13:
                                    if (null === t.memoizedState) {
                                        var u = t.alternate;
                                        if (null !== u) {
                                            var c = u.memoizedState;
                                            if (null !== c) {
                                                var p = c.dehydrated;
                                                null !== p && Gt(p)
                                            }
                                        }
                                    }
                                    break;
                                default:
                                    throw Error(a(163))
                            }
                            Ko || 512 & t.flags && al(t)
                        } catch (f) {
                            wh(t, t.return, f)
                        }
                    }
                    if (t === e) {
                        Jo = null;
                        break
                    }
                    if (null !== (r = t.sibling)) {
                        r.return = t.return, Jo = r;
                        break
                    }
                    Jo = t.return
                }
            }

            function Sl(e) {
                for (; null !== Jo;) {
                    var t = Jo;
                    if (t === e) {
                        Jo = null;
                        break
                    }
                    var r = t.sibling;
                    if (null !== r) {
                        r.return = t.return, Jo = r;
                        break
                    }
                    Jo = t.return
                }
            }

            function El(e) {
                for (; null !== Jo;) {
                    var t = Jo;
                    try {
                        switch (t.tag) {
                            case 0:
                            case 11:
                            case 15:
                                var r = t.return;
                                try {
                                    il(4, t)
                                } catch (l) {
                                    wh(t, r, l)
                                }
                                break;
                            case 1:
                                var n = t.stateNode;
                                if ("function" === typeof n.componentDidMount) {
                                    var i = t.return;
                                    try {
                                        n.componentDidMount()
                                    } catch (l) {
                                        wh(t, i, l)
                                    }
                                }
                                var a = t.return;
                                try {
                                    al(t)
                                } catch (l) {
                                    wh(t, a, l)
                                }
                                break;
                            case 5:
                                var s = t.return;
                                try {
                                    al(t)
                                } catch (l) {
                                    wh(t, s, l)
                                }
                        }
                    } catch (l) {
                        wh(t, t.return, l)
                    }
                    if (t === e) {
                        Jo = null;
                        break
                    }
                    var o = t.sibling;
                    if (null !== o) {
                        o.return = t.return, Jo = o;
                        break
                    }
                    Jo = t.return
                }
            }

            var Pl, wl = Math.ceil, _l = b.ReactCurrentDispatcher, Cl = b.ReactCurrentOwner,
                Al = b.ReactCurrentBatchConfig, Dl = 0, Tl = null, Ml = null, Fl = 0, Il = 0, Bl = Pi(0), jl = 0,
                Rl = null, Vl = 0, Ll = 0, Nl = 0, Ol = null, zl = null, Gl = 0, Hl = 1 / 0, ql = null, Wl = !1,
                $l = null, Ul = null, Yl = !1, Ql = null, Xl = 0, Kl = 0, Zl = null, Jl = -1, eh = 0;

            function th() {
                return 0 !== (6 & Dl) ? Ke() : -1 !== Jl ? Jl : Jl = Ke()
            }

            function rh(e) {
                return 0 === (1 & e.mode) ? 1 : 0 !== (2 & Dl) && 0 !== Fl ? Fl & -Fl : null !== ma.transition ? (0 === eh && (eh = mt()), eh) : 0 !== (e = xt) ? e : e = void 0 === (e = window.event) ? 16 : Xt(e.type)
            }

            function nh(e, t, r, n) {
                if (50 < Kl) throw Kl = 0, Zl = null, Error(a(185));
                gt(e, r, n), 0 !== (2 & Dl) && e === Tl || (e === Tl && (0 === (2 & Dl) && (Ll |= r), 4 === jl && lh(e, Fl)), ih(e, n), 1 === r && 0 === Dl && 0 === (1 & t.mode) && (Hl = Ke() + 500, Ni && Gi()))
            }

            function ih(e, t) {
                var r = e.callbackNode;
                !function (e, t) {
                    for (var r = e.suspendedLanes, n = e.pingedLanes, i = e.expirationTimes, a = e.pendingLanes; 0 < a;) {
                        var s = 31 - st(a), o = 1 << s, l = i[s];
                        -1 === l ? 0 !== (o & r) && 0 === (o & n) || (i[s] = ft(o, t)) : l <= t && (e.expiredLanes |= o), a &= ~o
                    }
                }(e, t);
                var n = pt(e, e === Tl ? Fl : 0);
                if (0 === n) null !== r && Ye(r), e.callbackNode = null, e.callbackPriority = 0; else if (t = n & -n, e.callbackPriority !== t) {
                    if (null != r && Ye(r), 1 === t) 0 === e.tag ? function (e) {
                        Ni = !0, zi(e)
                    }(hh.bind(null, e)) : zi(hh.bind(null, e)), si((function () {
                        0 === (6 & Dl) && Gi()
                    })), r = null; else {
                        switch (bt(n)) {
                            case 1:
                                r = Je;
                                break;
                            case 4:
                                r = et;
                                break;
                            case 16:
                            default:
                                r = tt;
                                break;
                            case 536870912:
                                r = nt
                        }
                        r = Th(r, ah.bind(null, e))
                    }
                    e.callbackPriority = t, e.callbackNode = r
                }
            }

            function ah(e, t) {
                if (Jl = -1, eh = 0, 0 !== (6 & Dl)) throw Error(a(327));
                var r = e.callbackNode;
                if (Eh() && e.callbackNode !== r) return null;
                var n = pt(e, e === Tl ? Fl : 0);
                if (0 === n) return null;
                if (0 !== (30 & n) || 0 !== (n & e.expiredLanes) || t) t = gh(e, n); else {
                    t = n;
                    var i = Dl;
                    Dl |= 2;
                    var s = mh();
                    for (Tl === e && Fl === t || (ql = null, Hl = Ke() + 500, fh(e, t)); ;) try {
                        xh();
                        break
                    } catch (l) {
                        dh(e, l)
                    }
                    ka(), _l.current = s, Dl = i, null !== Ml ? t = 0 : (Tl = null, Fl = 0, t = jl)
                }
                if (0 !== t) {
                    if (2 === t && (0 !== (i = dt(e)) && (n = i, t = sh(e, i))), 1 === t) throw r = Rl, fh(e, 0), lh(e, n), ih(e, Ke()), r;
                    if (6 === t) lh(e, n); else {
                        if (i = e.current.alternate, 0 === (30 & n) && !function (e) {
                            for (var t = e; ;) {
                                if (16384 & t.flags) {
                                    var r = t.updateQueue;
                                    if (null !== r && null !== (r = r.stores)) for (var n = 0; n < r.length; n++) {
                                        var i = r[n], a = i.getSnapshot;
                                        i = i.value;
                                        try {
                                            if (!on(a(), i)) return !1
                                        } catch (o) {
                                            return !1
                                        }
                                    }
                                }
                                if (r = t.child, 16384 & t.subtreeFlags && null !== r) r.return = t, t = r; else {
                                    if (t === e) break;
                                    for (; null === t.sibling;) {
                                        if (null === t.return || t.return === e) return !0;
                                        t = t.return
                                    }
                                    t.sibling.return = t.return, t = t.sibling
                                }
                            }
                            return !0
                        }(i) && (2 === (t = gh(e, n)) && (0 !== (s = dt(e)) && (n = s, t = sh(e, s))), 1 === t)) throw r = Rl, fh(e, 0), lh(e, n), ih(e, Ke()), r;
                        switch (e.finishedWork = i, e.finishedLanes = n, t) {
                            case 0:
                            case 1:
                                throw Error(a(345));
                            case 2:
                            case 5:
                                Sh(e, zl, ql);
                                break;
                            case 3:
                                if (lh(e, n), (130023424 & n) === n && 10 < (t = Gl + 500 - Ke())) {
                                    if (0 !== pt(e, 0)) break;
                                    if (((i = e.suspendedLanes) & n) !== n) {
                                        th(), e.pingedLanes |= e.suspendedLanes & i;
                                        break
                                    }
                                    e.timeoutHandle = ni(Sh.bind(null, e, zl, ql), t);
                                    break
                                }
                                Sh(e, zl, ql);
                                break;
                            case 4:
                                if (lh(e, n), (4194240 & n) === n) break;
                                for (t = e.eventTimes, i = -1; 0 < n;) {
                                    var o = 31 - st(n);
                                    s = 1 << o, (o = t[o]) > i && (i = o), n &= ~s
                                }
                                if (n = i, 10 < (n = (120 > (n = Ke() - n) ? 120 : 480 > n ? 480 : 1080 > n ? 1080 : 1920 > n ? 1920 : 3e3 > n ? 3e3 : 4320 > n ? 4320 : 1960 * wl(n / 1960)) - n)) {
                                    e.timeoutHandle = ni(Sh.bind(null, e, zl, ql), n);
                                    break
                                }
                                Sh(e, zl, ql);
                                break;
                            default:
                                throw Error(a(329))
                        }
                    }
                }
                return ih(e, Ke()), e.callbackNode === r ? ah.bind(null, e) : null
            }

            function sh(e, t) {
                var r = Ol;
                return e.current.memoizedState.isDehydrated && (fh(e, t).flags |= 256), 2 !== (e = gh(e, t)) && (t = zl, zl = r, null !== t && oh(t)), e
            }

            function oh(e) {
                null === zl ? zl = e : zl.push.apply(zl, e)
            }

            function lh(e, t) {
                for (t &= ~Nl, t &= ~Ll, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
                    var r = 31 - st(t), n = 1 << r;
                    e[r] = -1, t &= ~n
                }
            }

            function hh(e) {
                if (0 !== (6 & Dl)) throw Error(a(327));
                Eh();
                var t = pt(e, 0);
                if (0 === (1 & t)) return ih(e, Ke()), null;
                var r = gh(e, t);
                if (0 !== e.tag && 2 === r) {
                    var n = dt(e);
                    0 !== n && (t = n, r = sh(e, n))
                }
                if (1 === r) throw r = Rl, fh(e, 0), lh(e, t), ih(e, Ke()), r;
                if (6 === r) throw Error(a(345));
                return e.finishedWork = e.current.alternate, e.finishedLanes = t, Sh(e, zl, ql), ih(e, Ke()), null
            }

            function uh(e, t) {
                var r = Dl;
                Dl |= 1;
                try {
                    return e(t)
                } finally {
                    0 === (Dl = r) && (Hl = Ke() + 500, Ni && Gi())
                }
            }

            function ch(e) {
                null !== Ql && 0 === Ql.tag && 0 === (6 & Dl) && Eh();
                var t = Dl;
                Dl |= 1;
                var r = Al.transition, n = xt;
                try {
                    if (Al.transition = null, xt = 1, e) return e()
                } finally {
                    xt = n, Al.transition = r, 0 === (6 & (Dl = t)) && Gi()
                }
            }

            function ph() {
                Il = Bl.current, wi(Bl)
            }

            function fh(e, t) {
                e.finishedWork = null, e.finishedLanes = 0;
                var r = e.timeoutHandle;
                if (-1 !== r && (e.timeoutHandle = -1, ii(r)), null !== Ml) for (r = Ml.return; null !== r;) {
                    var n = r;
                    switch (ta(n), n.tag) {
                        case 1:
                            null !== (n = n.type.childContextTypes) && void 0 !== n && Ii();
                            break;
                        case 3:
                            is(), wi(Di), wi(Ai), us();
                            break;
                        case 5:
                            ss(n);
                            break;
                        case 4:
                            is();
                            break;
                        case 13:
                        case 19:
                            wi(os);
                            break;
                        case 10:
                            Sa(n.type._context);
                            break;
                        case 22:
                        case 23:
                            ph()
                    }
                    r = r.return
                }
                if (Tl = e, Ml = e = Bh(e.current, null), Fl = Il = t, jl = 0, Rl = null, Nl = Ll = Vl = 0, zl = Ol = null, null !== _a) {
                    for (t = 0; t < _a.length; t++) if (null !== (n = (r = _a[t]).interleaved)) {
                        r.interleaved = null;
                        var i = n.next, a = r.pending;
                        if (null !== a) {
                            var s = a.next;
                            a.next = i, n.next = s
                        }
                        r.pending = n
                    }
                    _a = null
                }
                return e
            }

            function dh(e, t) {
                for (; ;) {
                    var r = Ml;
                    try {
                        if (ka(), cs.current = ao, gs) {
                            for (var n = ds.memoizedState; null !== n;) {
                                var i = n.queue;
                                null !== i && (i.pending = null), n = n.next
                            }
                            gs = !1
                        }
                        if (fs = 0, ys = ms = ds = null, vs = !1, xs = 0, Cl.current = null, null === r || null === r.return) {
                            jl = 1, Rl = t, Ml = null;
                            break
                        }
                        e:{
                            var s = e, o = r.return, l = r, h = t;
                            if (t = Fl, l.flags |= 32768, null !== h && "object" === typeof h && "function" === typeof h.then) {
                                var u = h, c = l, p = c.tag;
                                if (0 === (1 & c.mode) && (0 === p || 11 === p || 15 === p)) {
                                    var f = c.alternate;
                                    f ? (c.updateQueue = f.updateQueue, c.memoizedState = f.memoizedState, c.lanes = f.lanes) : (c.updateQueue = null, c.memoizedState = null)
                                }
                                var d = go(o);
                                if (null !== d) {
                                    d.flags &= -257, vo(d, o, l, 0, t), 1 & d.mode && yo(s, u, t), h = u;
                                    var m = (t = d).updateQueue;
                                    if (null === m) {
                                        var y = new Set;
                                        y.add(h), t.updateQueue = y
                                    } else m.add(h);
                                    break e
                                }
                                if (0 === (1 & t)) {
                                    yo(s, u, t), yh();
                                    break e
                                }
                                h = Error(a(426))
                            } else if (ia && 1 & l.mode) {
                                var g = go(o);
                                if (null !== g) {
                                    0 === (65536 & g.flags) && (g.flags |= 256), vo(g, o, l, 0, t), da(ho(h, l));
                                    break e
                                }
                            }
                            s = h = ho(h, l), 4 !== jl && (jl = 2), null === Ol ? Ol = [s] : Ol.push(s), s = o;
                            do {
                                switch (s.tag) {
                                    case 3:
                                        s.flags |= 65536, t &= -t, s.lanes |= t, Ra(s, fo(0, h, t));
                                        break e;
                                    case 1:
                                        l = h;
                                        var v = s.type, x = s.stateNode;
                                        if (0 === (128 & s.flags) && ("function" === typeof v.getDerivedStateFromError || null !== x && "function" === typeof x.componentDidCatch && (null === Ul || !Ul.has(x)))) {
                                            s.flags |= 65536, t &= -t, s.lanes |= t, Ra(s, mo(s, l, t));
                                            break e
                                        }
                                }
                                s = s.return
                            } while (null !== s)
                        }
                        kh(r)
                    } catch (b) {
                        t = b, Ml === r && null !== r && (Ml = r = r.return);
                        continue
                    }
                    break
                }
            }

            function mh() {
                var e = _l.current;
                return _l.current = ao, null === e ? ao : e
            }

            function yh() {
                0 !== jl && 3 !== jl && 2 !== jl || (jl = 4), null === Tl || 0 === (268435455 & Vl) && 0 === (268435455 & Ll) || lh(Tl, Fl)
            }

            function gh(e, t) {
                var r = Dl;
                Dl |= 2;
                var n = mh();
                for (Tl === e && Fl === t || (ql = null, fh(e, t)); ;) try {
                    vh();
                    break
                } catch (i) {
                    dh(e, i)
                }
                if (ka(), Dl = r, _l.current = n, null !== Ml) throw Error(a(261));
                return Tl = null, Fl = 0, jl
            }

            function vh() {
                for (; null !== Ml;) bh(Ml)
            }

            function xh() {
                for (; null !== Ml && !Qe();) bh(Ml)
            }

            function bh(e) {
                var t = Pl(e.alternate, e, Il);
                e.memoizedProps = e.pendingProps, null === t ? kh(e) : Ml = t, Cl.current = null
            }

            function kh(e) {
                var t = e;
                do {
                    var r = t.alternate;
                    if (e = t.return, 0 === (32768 & t.flags)) {
                        if (null !== (r = Yo(r, t, Il))) return void (Ml = r)
                    } else {
                        if (null !== (r = Qo(r, t))) return r.flags &= 32767, void (Ml = r);
                        if (null === e) return jl = 6, void (Ml = null);
                        e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null
                    }
                    if (null !== (t = t.sibling)) return void (Ml = t);
                    Ml = t = e
                } while (null !== t);
                0 === jl && (jl = 5)
            }

            function Sh(e, t, r) {
                var n = xt, i = Al.transition;
                try {
                    Al.transition = null, xt = 1, function (e, t, r, n) {
                        do {
                            Eh()
                        } while (null !== Ql);
                        if (0 !== (6 & Dl)) throw Error(a(327));
                        r = e.finishedWork;
                        var i = e.finishedLanes;
                        if (null === r) return null;
                        if (e.finishedWork = null, e.finishedLanes = 0, r === e.current) throw Error(a(177));
                        e.callbackNode = null, e.callbackPriority = 0;
                        var s = r.lanes | r.childLanes;
                        if (function (e, t) {
                            var r = e.pendingLanes & ~t;
                            e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
                            var n = e.eventTimes;
                            for (e = e.expirationTimes; 0 < r;) {
                                var i = 31 - st(r), a = 1 << i;
                                t[i] = 0, n[i] = -1, e[i] = -1, r &= ~a
                            }
                        }(e, s), e === Tl && (Ml = Tl = null, Fl = 0), 0 === (2064 & r.subtreeFlags) && 0 === (2064 & r.flags) || Yl || (Yl = !0, Th(tt, (function () {
                            return Eh(), null
                        }))), s = 0 !== (15990 & r.flags), 0 !== (15990 & r.subtreeFlags) || s) {
                            s = Al.transition, Al.transition = null;
                            var o = xt;
                            xt = 1;
                            var l = Dl;
                            Dl |= 4, Cl.current = null, function (e, t) {
                                if (ei = qt, fn(e = pn())) {
                                    if ("selectionStart" in e) var r = {
                                        start: e.selectionStart,
                                        end: e.selectionEnd
                                    }; else e:{
                                        var n = (r = (r = e.ownerDocument) && r.defaultView || window).getSelection && r.getSelection();
                                        if (n && 0 !== n.rangeCount) {
                                            r = n.anchorNode;
                                            var i = n.anchorOffset, s = n.focusNode;
                                            n = n.focusOffset;
                                            try {
                                                r.nodeType, s.nodeType
                                            } catch (k) {
                                                r = null;
                                                break e
                                            }
                                            var o = 0, l = -1, h = -1, u = 0, c = 0, p = e, f = null;
                                            t:for (; ;) {
                                                for (var d; p !== r || 0 !== i && 3 !== p.nodeType || (l = o + i), p !== s || 0 !== n && 3 !== p.nodeType || (h = o + n), 3 === p.nodeType && (o += p.nodeValue.length), null !== (d = p.firstChild);) f = p, p = d;
                                                for (; ;) {
                                                    if (p === e) break t;
                                                    if (f === r && ++u === i && (l = o), f === s && ++c === n && (h = o), null !== (d = p.nextSibling)) break;
                                                    f = (p = f).parentNode
                                                }
                                                p = d
                                            }
                                            r = -1 === l || -1 === h ? null : {start: l, end: h}
                                        } else r = null
                                    }
                                    r = r || {start: 0, end: 0}
                                } else r = null;
                                for (ti = {
                                    focusedElem: e,
                                    selectionRange: r
                                }, qt = !1, Jo = t; null !== Jo;) if (e = (t = Jo).child, 0 !== (1028 & t.subtreeFlags) && null !== e) e.return = t, Jo = e; else for (; null !== Jo;) {
                                    t = Jo;
                                    try {
                                        var m = t.alternate;
                                        if (0 !== (1024 & t.flags)) switch (t.tag) {
                                            case 0:
                                            case 11:
                                            case 15:
                                            case 5:
                                            case 6:
                                            case 4:
                                            case 17:
                                                break;
                                            case 1:
                                                if (null !== m) {
                                                    var y = m.memoizedProps, g = m.memoizedState, v = t.stateNode,
                                                        x = v.getSnapshotBeforeUpdate(t.elementType === t.type ? y : ya(t.type, y), g);
                                                    v.__reactInternalSnapshotBeforeUpdate = x
                                                }
                                                break;
                                            case 3:
                                                var b = t.stateNode.containerInfo;
                                                1 === b.nodeType ? b.textContent = "" : 9 === b.nodeType && b.documentElement && b.removeChild(b.documentElement);
                                                break;
                                            default:
                                                throw Error(a(163))
                                        }
                                    } catch (k) {
                                        wh(t, t.return, k)
                                    }
                                    if (null !== (e = t.sibling)) {
                                        e.return = t.return, Jo = e;
                                        break
                                    }
                                    Jo = t.return
                                }
                                m = rl, rl = !1
                            }(e, r), gl(r, e), dn(ti), qt = !!ei, ti = ei = null, e.current = r, xl(r, e, i), Xe(), Dl = l, xt = o, Al.transition = s
                        } else e.current = r;
                        if (Yl && (Yl = !1, Ql = e, Xl = i), s = e.pendingLanes, 0 === s && (Ul = null), function (e) {
                            if (at && "function" === typeof at.onCommitFiberRoot) try {
                                at.onCommitFiberRoot(it, e, void 0, 128 === (128 & e.current.flags))
                            } catch (t) {
                            }
                        }(r.stateNode), ih(e, Ke()), null !== t) for (n = e.onRecoverableError, r = 0; r < t.length; r++) i = t[r], n(i.value, {
                            componentStack: i.stack,
                            digest: i.digest
                        });
                        if (Wl) throw Wl = !1, e = $l, $l = null, e;
                        0 !== (1 & Xl) && 0 !== e.tag && Eh(), s = e.pendingLanes, 0 !== (1 & s) ? e === Zl ? Kl++ : (Kl = 0, Zl = e) : Kl = 0, Gi()
                    }(e, t, r, n)
                } finally {
                    Al.transition = i, xt = n
                }
                return null
            }

            function Eh() {
                if (null !== Ql) {
                    var e = bt(Xl), t = Al.transition, r = xt;
                    try {
                        if (Al.transition = null, xt = 16 > e ? 16 : e, null === Ql) var n = !1; else {
                            if (e = Ql, Ql = null, Xl = 0, 0 !== (6 & Dl)) throw Error(a(331));
                            var i = Dl;
                            for (Dl |= 4, Jo = e.current; null !== Jo;) {
                                var s = Jo, o = s.child;
                                if (0 !== (16 & Jo.flags)) {
                                    var l = s.deletions;
                                    if (null !== l) {
                                        for (var h = 0; h < l.length; h++) {
                                            var u = l[h];
                                            for (Jo = u; null !== Jo;) {
                                                var c = Jo;
                                                switch (c.tag) {
                                                    case 0:
                                                    case 11:
                                                    case 15:
                                                        nl(8, c, s)
                                                }
                                                var p = c.child;
                                                if (null !== p) p.return = c, Jo = p; else for (; null !== Jo;) {
                                                    var f = (c = Jo).sibling, d = c.return;
                                                    if (sl(c), c === u) {
                                                        Jo = null;
                                                        break
                                                    }
                                                    if (null !== f) {
                                                        f.return = d, Jo = f;
                                                        break
                                                    }
                                                    Jo = d
                                                }
                                            }
                                        }
                                        var m = s.alternate;
                                        if (null !== m) {
                                            var y = m.child;
                                            if (null !== y) {
                                                m.child = null;
                                                do {
                                                    var g = y.sibling;
                                                    y.sibling = null, y = g
                                                } while (null !== y)
                                            }
                                        }
                                        Jo = s
                                    }
                                }
                                if (0 !== (2064 & s.subtreeFlags) && null !== o) o.return = s, Jo = o; else e:for (; null !== Jo;) {
                                    if (0 !== (2048 & (s = Jo).flags)) switch (s.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            nl(9, s, s.return)
                                    }
                                    var v = s.sibling;
                                    if (null !== v) {
                                        v.return = s.return, Jo = v;
                                        break e
                                    }
                                    Jo = s.return
                                }
                            }
                            var x = e.current;
                            for (Jo = x; null !== Jo;) {
                                var b = (o = Jo).child;
                                if (0 !== (2064 & o.subtreeFlags) && null !== b) b.return = o, Jo = b; else e:for (o = x; null !== Jo;) {
                                    if (0 !== (2048 & (l = Jo).flags)) try {
                                        switch (l.tag) {
                                            case 0:
                                            case 11:
                                            case 15:
                                                il(9, l)
                                        }
                                    } catch (S) {
                                        wh(l, l.return, S)
                                    }
                                    if (l === o) {
                                        Jo = null;
                                        break e
                                    }
                                    var k = l.sibling;
                                    if (null !== k) {
                                        k.return = l.return, Jo = k;
                                        break e
                                    }
                                    Jo = l.return
                                }
                            }
                            if (Dl = i, Gi(), at && "function" === typeof at.onPostCommitFiberRoot) try {
                                at.onPostCommitFiberRoot(it, e)
                            } catch (S) {
                            }
                            n = !0
                        }
                        return n
                    } finally {
                        xt = r, Al.transition = t
                    }
                }
                return !1
            }

            function Ph(e, t, r) {
                e = Ba(e, t = fo(0, t = ho(r, t), 1), 1), t = th(), null !== e && (gt(e, 1, t), ih(e, t))
            }

            function wh(e, t, r) {
                if (3 === e.tag) Ph(e, e, r); else for (; null !== t;) {
                    if (3 === t.tag) {
                        Ph(t, e, r);
                        break
                    }
                    if (1 === t.tag) {
                        var n = t.stateNode;
                        if ("function" === typeof t.type.getDerivedStateFromError || "function" === typeof n.componentDidCatch && (null === Ul || !Ul.has(n))) {
                            t = Ba(t, e = mo(t, e = ho(r, e), 1), 1), e = th(), null !== t && (gt(t, 1, e), ih(t, e));
                            break
                        }
                    }
                    t = t.return
                }
            }

            function _h(e, t, r) {
                var n = e.pingCache;
                null !== n && n.delete(t), t = th(), e.pingedLanes |= e.suspendedLanes & r, Tl === e && (Fl & r) === r && (4 === jl || 3 === jl && (130023424 & Fl) === Fl && 500 > Ke() - Gl ? fh(e, 0) : Nl |= r), ih(e, t)
            }

            function Ch(e, t) {
                0 === t && (0 === (1 & e.mode) ? t = 1 : (t = ut, 0 === (130023424 & (ut <<= 1)) && (ut = 4194304)));
                var r = th();
                null !== (e = Da(e, t)) && (gt(e, t, r), ih(e, r))
            }

            function Ah(e) {
                var t = e.memoizedState, r = 0;
                null !== t && (r = t.retryLane), Ch(e, r)
            }

            function Dh(e, t) {
                var r = 0;
                switch (e.tag) {
                    case 13:
                        var n = e.stateNode, i = e.memoizedState;
                        null !== i && (r = i.retryLane);
                        break;
                    case 19:
                        n = e.stateNode;
                        break;
                    default:
                        throw Error(a(314))
                }
                null !== n && n.delete(t), Ch(e, r)
            }

            function Th(e, t) {
                return Ue(e, t)
            }

            function Mh(e, t, r, n) {
                this.tag = e, this.key = r, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = n, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
            }

            function Fh(e, t, r, n) {
                return new Mh(e, t, r, n)
            }

            function Ih(e) {
                return !(!(e = e.prototype) || !e.isReactComponent)
            }

            function Bh(e, t) {
                var r = e.alternate;
                return null === r ? ((r = Fh(e.tag, t, e.key, e.mode)).elementType = e.elementType, r.type = e.type, r.stateNode = e.stateNode, r.alternate = e, e.alternate = r) : (r.pendingProps = t, r.type = e.type, r.flags = 0, r.subtreeFlags = 0, r.deletions = null), r.flags = 14680064 & e.flags, r.childLanes = e.childLanes, r.lanes = e.lanes, r.child = e.child, r.memoizedProps = e.memoizedProps, r.memoizedState = e.memoizedState, r.updateQueue = e.updateQueue, t = e.dependencies, r.dependencies = null === t ? null : {
                    lanes: t.lanes,
                    firstContext: t.firstContext
                }, r.sibling = e.sibling, r.index = e.index, r.ref = e.ref, r
            }

            function jh(e, t, r, n, i, s) {
                var o = 2;
                if (n = e, "function" === typeof e) Ih(e) && (o = 1); else if ("string" === typeof e) o = 5; else e:switch (e) {
                    case E:
                        return Rh(r.children, i, s, t);
                    case P:
                        o = 8, i |= 8;
                        break;
                    case w:
                        return (e = Fh(12, r, t, 2 | i)).elementType = w, e.lanes = s, e;
                    case D:
                        return (e = Fh(13, r, t, i)).elementType = D, e.lanes = s, e;
                    case T:
                        return (e = Fh(19, r, t, i)).elementType = T, e.lanes = s, e;
                    case I:
                        return Vh(r, i, s, t);
                    default:
                        if ("object" === typeof e && null !== e) switch (e.$$typeof) {
                            case _:
                                o = 10;
                                break e;
                            case C:
                                o = 9;
                                break e;
                            case A:
                                o = 11;
                                break e;
                            case M:
                                o = 14;
                                break e;
                            case F:
                                o = 16, n = null;
                                break e
                        }
                        throw Error(a(130, null == e ? e : typeof e, ""))
                }
                return (t = Fh(o, r, t, i)).elementType = e, t.type = n, t.lanes = s, t
            }

            function Rh(e, t, r, n) {
                return (e = Fh(7, e, n, t)).lanes = r, e
            }

            function Vh(e, t, r, n) {
                return (e = Fh(22, e, n, t)).elementType = I, e.lanes = r, e.stateNode = {isHidden: !1}, e
            }

            function Lh(e, t, r) {
                return (e = Fh(6, e, null, t)).lanes = r, e
            }

            function Nh(e, t, r) {
                return (t = Fh(4, null !== e.children ? e.children : [], e.key, t)).lanes = r, t.stateNode = {
                    containerInfo: e.containerInfo,
                    pendingChildren: null,
                    implementation: e.implementation
                }, t
            }

            function Oh(e, t, r, n, i) {
                this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = yt(0), this.expirationTimes = yt(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = yt(0), this.identifierPrefix = n, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null
            }

            function zh(e, t, r, n, i, a, s, o, l) {
                return e = new Oh(e, t, r, o, l), 1 === t ? (t = 1, !0 === a && (t |= 8)) : t = 0, a = Fh(3, null, null, t), e.current = a, a.stateNode = e, a.memoizedState = {
                    element: n,
                    isDehydrated: r,
                    cache: null,
                    transitions: null,
                    pendingSuspenseBoundaries: null
                }, Ma(a), e
            }

            function Gh(e) {
                if (!e) return Ci;
                e:{
                    if (Ge(e = e._reactInternals) !== e || 1 !== e.tag) throw Error(a(170));
                    var t = e;
                    do {
                        switch (t.tag) {
                            case 3:
                                t = t.stateNode.context;
                                break e;
                            case 1:
                                if (Fi(t.type)) {
                                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                                    break e
                                }
                        }
                        t = t.return
                    } while (null !== t);
                    throw Error(a(171))
                }
                if (1 === e.tag) {
                    var r = e.type;
                    if (Fi(r)) return ji(e, r, t)
                }
                return t
            }

            function Hh(e, t, r, n, i, a, s, o, l) {
                return (e = zh(r, n, !0, e, 0, a, 0, o, l)).context = Gh(null), r = e.current, (a = Ia(n = th(), i = rh(r))).callback = void 0 !== t && null !== t ? t : null, Ba(r, a, i), e.current.lanes = i, gt(e, i, n), ih(e, n), e
            }

            function qh(e, t, r, n) {
                var i = t.current, a = th(), s = rh(i);
                return r = Gh(r), null === t.context ? t.context = r : t.pendingContext = r, (t = Ia(a, s)).payload = {element: e}, null !== (n = void 0 === n ? null : n) && (t.callback = n), null !== (e = Ba(i, t, s)) && (nh(e, i, s, a), ja(e, i, s)), s
            }

            function Wh(e) {
                return (e = e.current).child ? (e.child.tag, e.child.stateNode) : null
            }

            function $h(e, t) {
                if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
                    var r = e.retryLane;
                    e.retryLane = 0 !== r && r < t ? r : t
                }
            }

            function Uh(e, t) {
                $h(e, t), (e = e.alternate) && $h(e, t)
            }

            Pl = function (e, t, r) {
                if (null !== e) if (e.memoizedProps !== t.pendingProps || Di.current) bo = !0; else {
                    if (0 === (e.lanes & r) && 0 === (128 & t.flags)) return bo = !1, function (e, t, r) {
                        switch (t.tag) {
                            case 3:
                                To(t), fa();
                                break;
                            case 5:
                                as(t);
                                break;
                            case 1:
                                Fi(t.type) && Ri(t);
                                break;
                            case 4:
                                ns(t, t.stateNode.containerInfo);
                                break;
                            case 10:
                                var n = t.type._context, i = t.memoizedProps.value;
                                _i(ga, n._currentValue), n._currentValue = i;
                                break;
                            case 13:
                                if (null !== (n = t.memoizedState)) return null !== n.dehydrated ? (_i(os, 1 & os.current), t.flags |= 128, null) : 0 !== (r & t.child.childLanes) ? Lo(e, t, r) : (_i(os, 1 & os.current), null !== (e = Wo(e, t, r)) ? e.sibling : null);
                                _i(os, 1 & os.current);
                                break;
                            case 19:
                                if (n = 0 !== (r & t.childLanes), 0 !== (128 & e.flags)) {
                                    if (n) return Ho(e, t, r);
                                    t.flags |= 128
                                }
                                if (null !== (i = t.memoizedState) && (i.rendering = null, i.tail = null, i.lastEffect = null), _i(os, os.current), n) break;
                                return null;
                            case 22:
                            case 23:
                                return t.lanes = 0, wo(e, t, r)
                        }
                        return Wo(e, t, r)
                    }(e, t, r);
                    bo = 0 !== (131072 & e.flags)
                } else bo = !1, ia && 0 !== (1048576 & t.flags) && Ji(t, $i, t.index);
                switch (t.lanes = 0, t.tag) {
                    case 2:
                        var n = t.type;
                        qo(e, t), e = t.pendingProps;
                        var i = Mi(t, Ai.current);
                        Pa(t, r), i = Es(null, t, n, e, i, r);
                        var s = Ps();
                        return t.flags |= 1, "object" === typeof i && null !== i && "function" === typeof i.render && void 0 === i.$$typeof ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Fi(n) ? (s = !0, Ri(t)) : s = !1, t.memoizedState = null !== i.state && void 0 !== i.state ? i.state : null, Ma(t), i.updater = za, t.stateNode = i, i._reactInternals = t, Wa(t, n, e, r), t = Do(null, t, n, !0, s, r)) : (t.tag = 0, ia && s && ea(t), ko(null, t, i, r), t = t.child), t;
                    case 16:
                        n = t.elementType;
                        e:{
                            switch (qo(e, t), e = t.pendingProps, n = (i = n._init)(n._payload), t.type = n, i = t.tag = function (e) {
                                if ("function" === typeof e) return Ih(e) ? 1 : 0;
                                if (void 0 !== e && null !== e) {
                                    if ((e = e.$$typeof) === A) return 11;
                                    if (e === M) return 14
                                }
                                return 2
                            }(n), e = ya(n, e), i) {
                                case 0:
                                    t = Co(null, t, n, e, r);
                                    break e;
                                case 1:
                                    t = Ao(null, t, n, e, r);
                                    break e;
                                case 11:
                                    t = So(null, t, n, e, r);
                                    break e;
                                case 14:
                                    t = Eo(null, t, n, ya(n.type, e), r);
                                    break e
                            }
                            throw Error(a(306, n, ""))
                        }
                        return t;
                    case 0:
                        return n = t.type, i = t.pendingProps, Co(e, t, n, i = t.elementType === n ? i : ya(n, i), r);
                    case 1:
                        return n = t.type, i = t.pendingProps, Ao(e, t, n, i = t.elementType === n ? i : ya(n, i), r);
                    case 3:
                        e:{
                            if (To(t), null === e) throw Error(a(387));
                            n = t.pendingProps, i = (s = t.memoizedState).element, Fa(e, t), Va(t, n, null, r);
                            var o = t.memoizedState;
                            if (n = o.element, s.isDehydrated) {
                                if (s = {
                                    element: n,
                                    isDehydrated: !1,
                                    cache: o.cache,
                                    pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
                                    transitions: o.transitions
                                }, t.updateQueue.baseState = s, t.memoizedState = s, 256 & t.flags) {
                                    t = Mo(e, t, n, r, i = ho(Error(a(423)), t));
                                    break e
                                }
                                if (n !== i) {
                                    t = Mo(e, t, n, r, i = ho(Error(a(424)), t));
                                    break e
                                }
                                for (na = hi(t.stateNode.containerInfo.firstChild), ra = t, ia = !0, aa = null, r = Ka(t, null, n, r), t.child = r; r;) r.flags = -3 & r.flags | 4096, r = r.sibling
                            } else {
                                if (fa(), n === i) {
                                    t = Wo(e, t, r);
                                    break e
                                }
                                ko(e, t, n, r)
                            }
                            t = t.child
                        }
                        return t;
                    case 5:
                        return as(t), null === e && ha(t), n = t.type, i = t.pendingProps, s = null !== e ? e.memoizedProps : null, o = i.children, ri(n, i) ? o = null : null !== s && ri(n, s) && (t.flags |= 32), _o(e, t), ko(e, t, o, r), t.child;
                    case 6:
                        return null === e && ha(t), null;
                    case 13:
                        return Lo(e, t, r);
                    case 4:
                        return ns(t, t.stateNode.containerInfo), n = t.pendingProps, null === e ? t.child = Xa(t, null, n, r) : ko(e, t, n, r), t.child;
                    case 11:
                        return n = t.type, i = t.pendingProps, So(e, t, n, i = t.elementType === n ? i : ya(n, i), r);
                    case 7:
                        return ko(e, t, t.pendingProps, r), t.child;
                    case 8:
                    case 12:
                        return ko(e, t, t.pendingProps.children, r), t.child;
                    case 10:
                        e:{
                            if (n = t.type._context, i = t.pendingProps, s = t.memoizedProps, o = i.value, _i(ga, n._currentValue), n._currentValue = o, null !== s) if (on(s.value, o)) {
                                if (s.children === i.children && !Di.current) {
                                    t = Wo(e, t, r);
                                    break e
                                }
                            } else for (null !== (s = t.child) && (s.return = t); null !== s;) {
                                var l = s.dependencies;
                                if (null !== l) {
                                    o = s.child;
                                    for (var h = l.firstContext; null !== h;) {
                                        if (h.context === n) {
                                            if (1 === s.tag) {
                                                (h = Ia(-1, r & -r)).tag = 2;
                                                var u = s.updateQueue;
                                                if (null !== u) {
                                                    var c = (u = u.shared).pending;
                                                    null === c ? h.next = h : (h.next = c.next, c.next = h), u.pending = h
                                                }
                                            }
                                            s.lanes |= r, null !== (h = s.alternate) && (h.lanes |= r), Ea(s.return, r, t), l.lanes |= r;
                                            break
                                        }
                                        h = h.next
                                    }
                                } else if (10 === s.tag) o = s.type === t.type ? null : s.child; else if (18 === s.tag) {
                                    if (null === (o = s.return)) throw Error(a(341));
                                    o.lanes |= r, null !== (l = o.alternate) && (l.lanes |= r), Ea(o, r, t), o = s.sibling
                                } else o = s.child;
                                if (null !== o) o.return = s; else for (o = s; null !== o;) {
                                    if (o === t) {
                                        o = null;
                                        break
                                    }
                                    if (null !== (s = o.sibling)) {
                                        s.return = o.return, o = s;
                                        break
                                    }
                                    o = o.return
                                }
                                s = o
                            }
                            ko(e, t, i.children, r), t = t.child
                        }
                        return t;
                    case 9:
                        return i = t.type, n = t.pendingProps.children, Pa(t, r), n = n(i = wa(i)), t.flags |= 1, ko(e, t, n, r), t.child;
                    case 14:
                        return i = ya(n = t.type, t.pendingProps), Eo(e, t, n, i = ya(n.type, i), r);
                    case 15:
                        return Po(e, t, t.type, t.pendingProps, r);
                    case 17:
                        return n = t.type, i = t.pendingProps, i = t.elementType === n ? i : ya(n, i), qo(e, t), t.tag = 1, Fi(n) ? (e = !0, Ri(t)) : e = !1, Pa(t, r), Ha(t, n, i), Wa(t, n, i, r), Do(null, t, n, !0, e, r);
                    case 19:
                        return Ho(e, t, r);
                    case 22:
                        return wo(e, t, r)
                }
                throw Error(a(156, t.tag))
            };
            var Yh = "function" === typeof reportError ? reportError : function (e) {
                console.error(e)
            };

            function Qh(e) {
                this._internalRoot = e
            }

            function Xh(e) {
                this._internalRoot = e
            }

            function Kh(e) {
                return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
            }

            function Zh(e) {
                return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType && (8 !== e.nodeType || " react-mount-point-unstable " !== e.nodeValue))
            }

            function Jh() {
            }

            function eu(e, t, r, n, i) {
                var a = r._reactRootContainer;
                if (a) {
                    var s = a;
                    if ("function" === typeof i) {
                        var o = i;
                        i = function () {
                            var e = Wh(s);
                            o.call(e)
                        }
                    }
                    qh(t, s, e, i)
                } else s = function (e, t, r, n, i) {
                    if (i) {
                        if ("function" === typeof n) {
                            var a = n;
                            n = function () {
                                var e = Wh(s);
                                a.call(e)
                            }
                        }
                        var s = Hh(t, n, e, 0, null, !1, 0, "", Jh);
                        return e._reactRootContainer = s, e[di] = s.current, Gn(8 === e.nodeType ? e.parentNode : e), ch(), s
                    }
                    for (; i = e.lastChild;) e.removeChild(i);
                    if ("function" === typeof n) {
                        var o = n;
                        n = function () {
                            var e = Wh(l);
                            o.call(e)
                        }
                    }
                    var l = zh(e, 0, !1, null, 0, !1, 0, "", Jh);
                    return e._reactRootContainer = l, e[di] = l.current, Gn(8 === e.nodeType ? e.parentNode : e), ch((function () {
                        qh(t, l, r, n)
                    })), l
                }(r, t, e, i, n);
                return Wh(s)
            }

            Xh.prototype.render = Qh.prototype.render = function (e) {
                var t = this._internalRoot;
                if (null === t) throw Error(a(409));
                qh(e, t, null, null)
            }, Xh.prototype.unmount = Qh.prototype.unmount = function () {
                var e = this._internalRoot;
                if (null !== e) {
                    this._internalRoot = null;
                    var t = e.containerInfo;
                    ch((function () {
                        qh(null, e, null, null)
                    })), t[di] = null
                }
            }, Xh.prototype.unstable_scheduleHydration = function (e) {
                if (e) {
                    var t = Pt();
                    e = {blockedOn: null, target: e, priority: t};
                    for (var r = 0; r < It.length && 0 !== t && t < It[r].priority; r++) ;
                    It.splice(r, 0, e), 0 === r && Vt(e)
                }
            }, kt = function (e) {
                switch (e.tag) {
                    case 3:
                        var t = e.stateNode;
                        if (t.current.memoizedState.isDehydrated) {
                            var r = ct(t.pendingLanes);
                            0 !== r && (vt(t, 1 | r), ih(t, Ke()), 0 === (6 & Dl) && (Hl = Ke() + 500, Gi()))
                        }
                        break;
                    case 13:
                        ch((function () {
                            var t = Da(e, 1);
                            if (null !== t) {
                                var r = th();
                                nh(t, e, 1, r)
                            }
                        })), Uh(e, 1)
                }
            }, St = function (e) {
                if (13 === e.tag) {
                    var t = Da(e, 134217728);
                    if (null !== t) nh(t, e, 134217728, th());
                    Uh(e, 134217728)
                }
            }, Et = function (e) {
                if (13 === e.tag) {
                    var t = rh(e), r = Da(e, t);
                    if (null !== r) nh(r, e, t, th());
                    Uh(e, t)
                }
            }, Pt = function () {
                return xt
            }, wt = function (e, t) {
                var r = xt;
                try {
                    return xt = e, t()
                } finally {
                    xt = r
                }
            }, Se = function (e, t, r) {
                switch (t) {
                    case"input":
                        if (Z(e, r), t = r.name, "radio" === r.type && null != t) {
                            for (r = e; r.parentNode;) r = r.parentNode;
                            for (r = r.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < r.length; t++) {
                                var n = r[t];
                                if (n !== e && n.form === e.form) {
                                    var i = ki(n);
                                    if (!i) throw Error(a(90));
                                    U(n), Z(n, i)
                                }
                            }
                        }
                        break;
                    case"textarea":
                        ae(e, r);
                        break;
                    case"select":
                        null != (t = r.value) && re(e, !!r.multiple, t, !1)
                }
            }, Ae = uh, De = ch;
            var tu = {usingClientEntryPoint: !1, Events: [xi, bi, ki, _e, Ce, uh]},
                ru = {findFiberByHostInstance: vi, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom"},
                nu = {
                    bundleType: ru.bundleType,
                    version: ru.version,
                    rendererPackageName: ru.rendererPackageName,
                    rendererConfig: ru.rendererConfig,
                    overrideHookState: null,
                    overrideHookStateDeletePath: null,
                    overrideHookStateRenamePath: null,
                    overrideProps: null,
                    overridePropsDeletePath: null,
                    overridePropsRenamePath: null,
                    setErrorHandler: null,
                    setSuspenseHandler: null,
                    scheduleUpdate: null,
                    currentDispatcherRef: b.ReactCurrentDispatcher,
                    findHostInstanceByFiber: function (e) {
                        return null === (e = We(e)) ? null : e.stateNode
                    },
                    findFiberByHostInstance: ru.findFiberByHostInstance || function () {
                        return null
                    },
                    findHostInstancesForRefresh: null,
                    scheduleRefresh: null,
                    scheduleRoot: null,
                    setRefreshHandler: null,
                    getCurrentFiber: null,
                    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608"
                };
            if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
                var iu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
                if (!iu.isDisabled && iu.supportsFiber) try {
                    it = iu.inject(nu), at = iu
                } catch (ue) {
                }
            }
            t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tu, t.createPortal = function (e, t) {
                var r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
                if (!Kh(t)) throw Error(a(200));
                return function (e, t, r) {
                    var n = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
                    return {
                        $$typeof: S,
                        key: null == n ? null : "" + n,
                        children: e,
                        containerInfo: t,
                        implementation: r
                    }
                }(e, t, null, r)
            }, t.createRoot = function (e, t) {
                if (!Kh(e)) throw Error(a(299));
                var r = !1, n = "", i = Yh;
                return null !== t && void 0 !== t && (!0 === t.unstable_strictMode && (r = !0), void 0 !== t.identifierPrefix && (n = t.identifierPrefix), void 0 !== t.onRecoverableError && (i = t.onRecoverableError)), t = zh(e, 1, !1, null, 0, r, 0, n, i), e[di] = t.current, Gn(8 === e.nodeType ? e.parentNode : e), new Qh(t)
            }, t.findDOMNode = function (e) {
                if (null == e) return null;
                if (1 === e.nodeType) return e;
                var t = e._reactInternals;
                if (void 0 === t) {
                    if ("function" === typeof e.render) throw Error(a(188));
                    throw e = Object.keys(e).join(","), Error(a(268, e))
                }
                return e = null === (e = We(t)) ? null : e.stateNode
            }, t.flushSync = function (e) {
                return ch(e)
            }, t.hydrate = function (e, t, r) {
                if (!Zh(t)) throw Error(a(200));
                return eu(null, e, t, !0, r)
            }, t.hydrateRoot = function (e, t, r) {
                if (!Kh(e)) throw Error(a(405));
                var n = null != r && r.hydratedSources || null, i = !1, s = "", o = Yh;
                if (null !== r && void 0 !== r && (!0 === r.unstable_strictMode && (i = !0), void 0 !== r.identifierPrefix && (s = r.identifierPrefix), void 0 !== r.onRecoverableError && (o = r.onRecoverableError)), t = Hh(t, null, e, 1, null != r ? r : null, i, 0, s, o), e[di] = t.current, Gn(e), n) for (e = 0; e < n.length; e++) i = (i = (r = n[e])._getVersion)(r._source), null == t.mutableSourceEagerHydrationData ? t.mutableSourceEagerHydrationData = [r, i] : t.mutableSourceEagerHydrationData.push(r, i);
                return new Xh(t)
            }, t.render = function (e, t, r) {
                if (!Zh(t)) throw Error(a(200));
                return eu(null, e, t, !1, r)
            }, t.unmountComponentAtNode = function (e) {
                if (!Zh(e)) throw Error(a(40));
                return !!e._reactRootContainer && (ch((function () {
                    eu(null, null, e, !1, (function () {
                        e._reactRootContainer = null, e[di] = null
                    }))
                })), !0)
            }, t.unstable_batchedUpdates = uh, t.unstable_renderSubtreeIntoContainer = function (e, t, r, n) {
                if (!Zh(r)) throw Error(a(200));
                if (null == e || void 0 === e._reactInternals) throw Error(a(38));
                return eu(e, t, r, !1, n)
            }, t.version = "18.2.0-next-9e3b772b8-20220608"
        }, 254: function (e, t, r) {
            "use strict";
            var n = r(599);
            t.createRoot = n.createRoot, t.hydrateRoot = n.hydrateRoot
        }, 599: function (e, t, r) {
            "use strict";
            !function e() {
                if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE) try {
                    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)
                } catch (t) {
                    console.error(t)
                }
            }(), e.exports = r(470)
        }, 511: function (e, t, r) {
            "use strict";
            var n = r(390), i = Symbol.for("react.element"), a = Symbol.for("react.fragment"),
                s = Object.prototype.hasOwnProperty,
                o = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
                l = {key: !0, ref: !0, __self: !0, __source: !0};

            function h(e, t, r) {
                var n, a = {}, h = null, u = null;
                for (n in void 0 !== r && (h = "" + r), void 0 !== t.key && (h = "" + t.key), void 0 !== t.ref && (u = t.ref), t) s.call(t, n) && !l.hasOwnProperty(n) && (a[n] = t[n]);
                if (e && e.defaultProps) for (n in t = e.defaultProps) void 0 === a[n] && (a[n] = t[n]);
                return {$$typeof: i, type: e, key: h, ref: u, props: a, _owner: o.current}
            }

            t.jsx = h, t.jsxs = h
        }, 23: function (e, t) {
            "use strict";
            var r = Symbol.for("react.element"), n = Symbol.for("react.portal"), i = Symbol.for("react.fragment"),
                a = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), o = Symbol.for("react.provider"),
                l = Symbol.for("react.context"), h = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"),
                c = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), f = Symbol.iterator;
            var d = {
                isMounted: function () {
                    return !1
                }, enqueueForceUpdate: function () {
                }, enqueueReplaceState: function () {
                }, enqueueSetState: function () {
                }
            }, m = Object.assign, y = {};

            function g(e, t, r) {
                this.props = e, this.context = t, this.refs = y, this.updater = r || d
            }

            function v() {
            }

            function x(e, t, r) {
                this.props = e, this.context = t, this.refs = y, this.updater = r || d
            }

            g.prototype.isReactComponent = {}, g.prototype.setState = function (e, t) {
                if ("object" !== typeof e && "function" !== typeof e && null != e) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
                this.updater.enqueueSetState(this, e, t, "setState")
            }, g.prototype.forceUpdate = function (e) {
                this.updater.enqueueForceUpdate(this, e, "forceUpdate")
            }, v.prototype = g.prototype;
            var b = x.prototype = new v;
            b.constructor = x, m(b, g.prototype), b.isPureReactComponent = !0;
            var k = Array.isArray, S = Object.prototype.hasOwnProperty, E = {current: null},
                P = {key: !0, ref: !0, __self: !0, __source: !0};

            function w(e, t, n) {
                var i, a = {}, s = null, o = null;
                if (null != t) for (i in void 0 !== t.ref && (o = t.ref), void 0 !== t.key && (s = "" + t.key), t) S.call(t, i) && !P.hasOwnProperty(i) && (a[i] = t[i]);
                var l = arguments.length - 2;
                if (1 === l) a.children = n; else if (1 < l) {
                    for (var h = Array(l), u = 0; u < l; u++) h[u] = arguments[u + 2];
                    a.children = h
                }
                if (e && e.defaultProps) for (i in l = e.defaultProps) void 0 === a[i] && (a[i] = l[i]);
                return {$$typeof: r, type: e, key: s, ref: o, props: a, _owner: E.current}
            }

            function _(e) {
                return "object" === typeof e && null !== e && e.$$typeof === r
            }

            var C = /\/+/g;

            function A(e, t) {
                return "object" === typeof e && null !== e && null != e.key ? function (e) {
                    var t = {"=": "=0", ":": "=2"};
                    return "$" + e.replace(/[=:]/g, (function (e) {
                        return t[e]
                    }))
                }("" + e.key) : t.toString(36)
            }

            function D(e, t, i, a, s) {
                var o = typeof e;
                "undefined" !== o && "boolean" !== o || (e = null);
                var l = !1;
                if (null === e) l = !0; else switch (o) {
                    case"string":
                    case"number":
                        l = !0;
                        break;
                    case"object":
                        switch (e.$$typeof) {
                            case r:
                            case n:
                                l = !0
                        }
                }
                if (l) return s = s(l = e), e = "" === a ? "." + A(l, 0) : a, k(s) ? (i = "", null != e && (i = e.replace(C, "$&/") + "/"), D(s, t, i, "", (function (e) {
                    return e
                }))) : null != s && (_(s) && (s = function (e, t) {
                    return {$$typeof: r, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner}
                }(s, i + (!s.key || l && l.key === s.key ? "" : ("" + s.key).replace(C, "$&/") + "/") + e)), t.push(s)), 1;
                if (l = 0, a = "" === a ? "." : a + ":", k(e)) for (var h = 0; h < e.length; h++) {
                    var u = a + A(o = e[h], h);
                    l += D(o, t, i, u, s)
                } else if (u = function (e) {
                    return null === e || "object" !== typeof e ? null : "function" === typeof (e = f && e[f] || e["@@iterator"]) ? e : null
                }(e), "function" === typeof u) for (e = u.call(e), h = 0; !(o = e.next()).done;) l += D(o = o.value, t, i, u = a + A(o, h++), s); else if ("object" === o) throw t = String(e), Error("Objects are not valid as a React child (found: " + ("[object Object]" === t ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
                return l
            }

            function T(e, t, r) {
                if (null == e) return e;
                var n = [], i = 0;
                return D(e, n, "", "", (function (e) {
                    return t.call(r, e, i++)
                })), n
            }

            function M(e) {
                if (-1 === e._status) {
                    var t = e._result;
                    (t = t()).then((function (t) {
                        0 !== e._status && -1 !== e._status || (e._status = 1, e._result = t)
                    }), (function (t) {
                        0 !== e._status && -1 !== e._status || (e._status = 2, e._result = t)
                    })), -1 === e._status && (e._status = 0, e._result = t)
                }
                if (1 === e._status) return e._result.default;
                throw e._result
            }

            var F = {current: null}, I = {transition: null},
                B = {ReactCurrentDispatcher: F, ReactCurrentBatchConfig: I, ReactCurrentOwner: E};
            t.Children = {
                map: T, forEach: function (e, t, r) {
                    T(e, (function () {
                        t.apply(this, arguments)
                    }), r)
                }, count: function (e) {
                    var t = 0;
                    return T(e, (function () {
                        t++
                    })), t
                }, toArray: function (e) {
                    return T(e, (function (e) {
                        return e
                    })) || []
                }, only: function (e) {
                    if (!_(e)) throw Error("React.Children.only expected to receive a single React element child.");
                    return e
                }
            }, t.Component = g, t.Fragment = i, t.Profiler = s, t.PureComponent = x, t.StrictMode = a, t.Suspense = u, t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = B, t.cloneElement = function (e, t, n) {
                if (null === e || void 0 === e) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
                var i = m({}, e.props), a = e.key, s = e.ref, o = e._owner;
                if (null != t) {
                    if (void 0 !== t.ref && (s = t.ref, o = E.current), void 0 !== t.key && (a = "" + t.key), e.type && e.type.defaultProps) var l = e.type.defaultProps;
                    for (h in t) S.call(t, h) && !P.hasOwnProperty(h) && (i[h] = void 0 === t[h] && void 0 !== l ? l[h] : t[h])
                }
                var h = arguments.length - 2;
                if (1 === h) i.children = n; else if (1 < h) {
                    l = Array(h);
                    for (var u = 0; u < h; u++) l[u] = arguments[u + 2];
                    i.children = l
                }
                return {$$typeof: r, type: e.type, key: a, ref: s, props: i, _owner: o}
            }, t.createContext = function (e) {
                return (e = {
                    $$typeof: l,
                    _currentValue: e,
                    _currentValue2: e,
                    _threadCount: 0,
                    Provider: null,
                    Consumer: null,
                    _defaultValue: null,
                    _globalName: null
                }).Provider = {$$typeof: o, _context: e}, e.Consumer = e
            }, t.createElement = w, t.createFactory = function (e) {
                var t = w.bind(null, e);
                return t.type = e, t
            }, t.createRef = function () {
                return {current: null}
            }, t.forwardRef = function (e) {
                return {$$typeof: h, render: e}
            }, t.isValidElement = _, t.lazy = function (e) {
                return {$$typeof: p, _payload: {_status: -1, _result: e}, _init: M}
            }, t.memo = function (e, t) {
                return {$$typeof: c, type: e, compare: void 0 === t ? null : t}
            }, t.startTransition = function (e) {
                var t = I.transition;
                I.transition = {};
                try {
                    e()
                } finally {
                    I.transition = t
                }
            }, t.unstable_act = function () {
                throw Error("act(...) is not supported in production builds of React.")
            }, t.useCallback = function (e, t) {
                return F.current.useCallback(e, t)
            }, t.useContext = function (e) {
                return F.current.useContext(e)
            }, t.useDebugValue = function () {
            }, t.useDeferredValue = function (e) {
                return F.current.useDeferredValue(e)
            }, t.useEffect = function (e, t) {
                return F.current.useEffect(e, t)
            }, t.useId = function () {
                return F.current.useId()
            }, t.useImperativeHandle = function (e, t, r) {
                return F.current.useImperativeHandle(e, t, r)
            }, t.useInsertionEffect = function (e, t) {
                return F.current.useInsertionEffect(e, t)
            }, t.useLayoutEffect = function (e, t) {
                return F.current.useLayoutEffect(e, t)
            }, t.useMemo = function (e, t) {
                return F.current.useMemo(e, t)
            }, t.useReducer = function (e, t, r) {
                return F.current.useReducer(e, t, r)
            }, t.useRef = function (e) {
                return F.current.useRef(e)
            }, t.useState = function (e) {
                return F.current.useState(e)
            }, t.useSyncExternalStore = function (e, t, r) {
                return F.current.useSyncExternalStore(e, t, r)
            }, t.useTransition = function () {
                return F.current.useTransition()
            }, t.version = "18.2.0"
        }, 390: function (e, t, r) {
            "use strict";
            e.exports = r(23)
        }, 559: function (e, t, r) {
            "use strict";
            e.exports = r(511)
        }, 726: function (e, t, r) {
            "use strict";
            e.exports = r(863)()
        }, 863: function (e) {
            "use strict";

            function t(e) {
                return e instanceof Buffer ? Buffer.from(e) : new e.constructor(e.buffer.slice(), e.byteOffset, e.length)
            }

            e.exports = function (e) {
                return (e = e || {}).circles ? function (e) {
                    var r = [], n = [];
                    return e.proto ? function e(a) {
                        if ("object" !== typeof a || null === a) return a;
                        if (a instanceof Date) return new Date(a);
                        if (Array.isArray(a)) return i(a, e);
                        if (a instanceof Map) return new Map(i(Array.from(a), e));
                        if (a instanceof Set) return new Set(i(Array.from(a), e));
                        var s = {};
                        for (var o in r.push(a), n.push(s), a) {
                            var l = a[o];
                            if ("object" !== typeof l || null === l) s[o] = l; else if (l instanceof Date) s[o] = new Date(l); else if (l instanceof Map) s[o] = new Map(i(Array.from(l), e)); else if (l instanceof Set) s[o] = new Set(i(Array.from(l), e)); else if (ArrayBuffer.isView(l)) s[o] = t(l); else {
                                var h = r.indexOf(l);
                                s[o] = -1 !== h ? n[h] : e(l)
                            }
                        }
                        return r.pop(), n.pop(), s
                    } : function e(a) {
                        if ("object" !== typeof a || null === a) return a;
                        if (a instanceof Date) return new Date(a);
                        if (Array.isArray(a)) return i(a, e);
                        if (a instanceof Map) return new Map(i(Array.from(a), e));
                        if (a instanceof Set) return new Set(i(Array.from(a), e));
                        var s = {};
                        for (var o in r.push(a), n.push(s), a) if (!1 !== Object.hasOwnProperty.call(a, o)) {
                            var l = a[o];
                            if ("object" !== typeof l || null === l) s[o] = l; else if (l instanceof Date) s[o] = new Date(l); else if (l instanceof Map) s[o] = new Map(i(Array.from(l), e)); else if (l instanceof Set) s[o] = new Set(i(Array.from(l), e)); else if (ArrayBuffer.isView(l)) s[o] = t(l); else {
                                var h = r.indexOf(l);
                                s[o] = -1 !== h ? n[h] : e(l)
                            }
                        }
                        return r.pop(), n.pop(), s
                    };

                    function i(e, i) {
                        for (var a = Object.keys(e), s = new Array(a.length), o = 0; o < a.length; o++) {
                            var l = a[o], h = e[l];
                            if ("object" !== typeof h || null === h) s[l] = h; else if (h instanceof Date) s[l] = new Date(h); else if (ArrayBuffer.isView(h)) s[l] = t(h); else {
                                var u = r.indexOf(h);
                                s[l] = -1 !== u ? n[u] : i(h)
                            }
                        }
                        return s
                    }
                }(e) : e.proto ? function e(n) {
                    if ("object" !== typeof n || null === n) return n;
                    if (n instanceof Date) return new Date(n);
                    if (Array.isArray(n)) return r(n, e);
                    if (n instanceof Map) return new Map(r(Array.from(n), e));
                    if (n instanceof Set) return new Set(r(Array.from(n), e));
                    var i = {};
                    for (var a in n) {
                        var s = n[a];
                        "object" !== typeof s || null === s ? i[a] = s : s instanceof Date ? i[a] = new Date(s) : s instanceof Map ? i[a] = new Map(r(Array.from(s), e)) : s instanceof Set ? i[a] = new Set(r(Array.from(s), e)) : ArrayBuffer.isView(s) ? i[a] = t(s) : i[a] = e(s)
                    }
                    return i
                } : function e(n) {
                    if ("object" !== typeof n || null === n) return n;
                    if (n instanceof Date) return new Date(n);
                    if (Array.isArray(n)) return r(n, e);
                    if (n instanceof Map) return new Map(r(Array.from(n), e));
                    if (n instanceof Set) return new Set(r(Array.from(n), e));
                    var i = {};
                    for (var a in n) if (!1 !== Object.hasOwnProperty.call(n, a)) {
                        var s = n[a];
                        "object" !== typeof s || null === s ? i[a] = s : s instanceof Date ? i[a] = new Date(s) : s instanceof Map ? i[a] = new Map(r(Array.from(s), e)) : s instanceof Set ? i[a] = new Set(r(Array.from(s), e)) : ArrayBuffer.isView(s) ? i[a] = t(s) : i[a] = e(s)
                    }
                    return i
                };

                function r(e, r) {
                    for (var n = Object.keys(e), i = new Array(n.length), a = 0; a < n.length; a++) {
                        var s = n[a], o = e[s];
                        "object" !== typeof o || null === o ? i[s] = o : o instanceof Date ? i[s] = new Date(o) : ArrayBuffer.isView(o) ? i[s] = t(o) : i[s] = r(o)
                    }
                    return i
                }
            }
        }, 17: function (e, t) {
            "use strict";

            function r(e, t) {
                var r = e.length;
                e.push(t);
                e:for (; 0 < r;) {
                    var n = r - 1 >>> 1, i = e[n];
                    if (!(0 < a(i, t))) break e;
                    e[n] = t, e[r] = i, r = n
                }
            }

            function n(e) {
                return 0 === e.length ? null : e[0]
            }

            function i(e) {
                if (0 === e.length) return null;
                var t = e[0], r = e.pop();
                if (r !== t) {
                    e[0] = r;
                    e:for (var n = 0, i = e.length, s = i >>> 1; n < s;) {
                        var o = 2 * (n + 1) - 1, l = e[o], h = o + 1, u = e[h];
                        if (0 > a(l, r)) h < i && 0 > a(u, l) ? (e[n] = u, e[h] = r, n = h) : (e[n] = l, e[o] = r, n = o); else {
                            if (!(h < i && 0 > a(u, r))) break e;
                            e[n] = u, e[h] = r, n = h
                        }
                    }
                }
                return t
            }

            function a(e, t) {
                var r = e.sortIndex - t.sortIndex;
                return 0 !== r ? r : e.id - t.id
            }

            if ("object" === typeof performance && "function" === typeof performance.now) {
                var s = performance;
                t.unstable_now = function () {
                    return s.now()
                }
            } else {
                var o = Date, l = o.now();
                t.unstable_now = function () {
                    return o.now() - l
                }
            }
            var h = [], u = [], c = 1, p = null, f = 3, d = !1, m = !1, y = !1,
                g = "function" === typeof setTimeout ? setTimeout : null,
                v = "function" === typeof clearTimeout ? clearTimeout : null,
                x = "undefined" !== typeof setImmediate ? setImmediate : null;

            function b(e) {
                for (var t = n(u); null !== t;) {
                    if (null === t.callback) i(u); else {
                        if (!(t.startTime <= e)) break;
                        i(u), t.sortIndex = t.expirationTime, r(h, t)
                    }
                    t = n(u)
                }
            }

            function k(e) {
                if (y = !1, b(e), !m) if (null !== n(h)) m = !0, I(S); else {
                    var t = n(u);
                    null !== t && B(k, t.startTime - e)
                }
            }

            function S(e, r) {
                m = !1, y && (y = !1, v(_), _ = -1), d = !0;
                var a = f;
                try {
                    for (b(r), p = n(h); null !== p && (!(p.expirationTime > r) || e && !D());) {
                        var s = p.callback;
                        if ("function" === typeof s) {
                            p.callback = null, f = p.priorityLevel;
                            var o = s(p.expirationTime <= r);
                            r = t.unstable_now(), "function" === typeof o ? p.callback = o : p === n(h) && i(h), b(r)
                        } else i(h);
                        p = n(h)
                    }
                    if (null !== p) var l = !0; else {
                        var c = n(u);
                        null !== c && B(k, c.startTime - r), l = !1
                    }
                    return l
                } finally {
                    p = null, f = a, d = !1
                }
            }

            "undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
            var E, P = !1, w = null, _ = -1, C = 5, A = -1;

            function D() {
                return !(t.unstable_now() - A < C)
            }

            function T() {
                if (null !== w) {
                    var e = t.unstable_now();
                    A = e;
                    var r = !0;
                    try {
                        r = w(!0, e)
                    } finally {
                        r ? E() : (P = !1, w = null)
                    }
                } else P = !1
            }

            if ("function" === typeof x) E = function () {
                x(T)
            }; else if ("undefined" !== typeof MessageChannel) {
                var M = new MessageChannel, F = M.port2;
                M.port1.onmessage = T, E = function () {
                    F.postMessage(null)
                }
            } else E = function () {
                g(T, 0)
            };

            function I(e) {
                w = e, P || (P = !0, E())
            }

            function B(e, r) {
                _ = g((function () {
                    e(t.unstable_now())
                }), r)
            }

            t.unstable_IdlePriority = 5, t.unstable_ImmediatePriority = 1, t.unstable_LowPriority = 4, t.unstable_NormalPriority = 3, t.unstable_Profiling = null, t.unstable_UserBlockingPriority = 2, t.unstable_cancelCallback = function (e) {
                e.callback = null
            }, t.unstable_continueExecution = function () {
                m || d || (m = !0, I(S))
            }, t.unstable_forceFrameRate = function (e) {
                0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : C = 0 < e ? Math.floor(1e3 / e) : 5
            }, t.unstable_getCurrentPriorityLevel = function () {
                return f
            }, t.unstable_getFirstCallbackNode = function () {
                return n(h)
            }, t.unstable_next = function (e) {
                switch (f) {
                    case 1:
                    case 2:
                    case 3:
                        var t = 3;
                        break;
                    default:
                        t = f
                }
                var r = f;
                f = t;
                try {
                    return e()
                } finally {
                    f = r
                }
            }, t.unstable_pauseExecution = function () {
            }, t.unstable_requestPaint = function () {
            }, t.unstable_runWithPriority = function (e, t) {
                switch (e) {
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                        break;
                    default:
                        e = 3
                }
                var r = f;
                f = e;
                try {
                    return t()
                } finally {
                    f = r
                }
            }, t.unstable_scheduleCallback = function (e, i, a) {
                var s = t.unstable_now();
                switch ("object" === typeof a && null !== a ? a = "number" === typeof (a = a.delay) && 0 < a ? s + a : s : a = s, e) {
                    case 1:
                        var o = -1;
                        break;
                    case 2:
                        o = 250;
                        break;
                    case 5:
                        o = 1073741823;
                        break;
                    case 4:
                        o = 1e4;
                        break;
                    default:
                        o = 5e3
                }
                return e = {
                    id: c++,
                    callback: i,
                    priorityLevel: e,
                    startTime: a,
                    expirationTime: o = a + o,
                    sortIndex: -1
                }, a > s ? (e.sortIndex = a, r(u, e), null === n(h) && e === n(u) && (y ? (v(_), _ = -1) : y = !0, B(k, a - s))) : (e.sortIndex = o, r(h, e), m || d || (m = !0, I(S))), e
            }, t.unstable_shouldYield = D, t.unstable_wrapCallback = function (e) {
                var t = f;
                return function () {
                    var r = f;
                    f = t;
                    try {
                        return e.apply(this, arguments)
                    } finally {
                        f = r
                    }
                }
            }
        }, 124: function (e, t, r) {
            "use strict";
            e.exports = r(17)
        }, 897: function (e) {
            e.exports = function (e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }, e.exports.__esModule = !0, e.exports.default = e.exports
        }, 704: function (e, t, r) {
            var n = r(116);
            e.exports = function (e, t) {
                var r = "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!r) {
                    if (Array.isArray(e) || (r = n(e)) || t && e && "number" === typeof e.length) {
                        r && (e = r);
                        var i = 0, a = function () {
                        };
                        return {
                            s: a, n: function () {
                                return i >= e.length ? {done: !0} : {done: !1, value: e[i++]}
                            }, e: function (e) {
                                throw e
                            }, f: a
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var s, o = !0, l = !1;
                return {
                    s: function () {
                        r = r.call(e)
                    }, n: function () {
                        var e = r.next();
                        return o = e.done, e
                    }, e: function (e) {
                        l = !0, s = e
                    }, f: function () {
                        try {
                            o || null == r.return || r.return()
                        } finally {
                            if (l) throw s
                        }
                    }
                }
            }, e.exports.__esModule = !0, e.exports.default = e.exports
        }, 116: function (e, t, r) {
            var n = r(897);
            e.exports = function (e, t) {
                if (e) {
                    if ("string" === typeof e) return n(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? n(e, t) : void 0
                }
            }, e.exports.__esModule = !0, e.exports.default = e.exports
        }
    }, __webpack_module_cache__ = {};

    function __webpack_require__(e) {
        var t = __webpack_module_cache__[e];
        if (void 0 !== t) return t.exports;
        var r = __webpack_module_cache__[e] = {exports: {}};
        return __webpack_modules__[e].call(r.exports, r, r.exports, __webpack_require__), r.exports
    }

    __webpack_require__.m = __webpack_modules__, __webpack_require__.amdO = {}, __webpack_require__.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return __webpack_require__.d(t, {a: t}), t
    }, function () {
        var e, t = Object.getPrototypeOf ? function (e) {
            return Object.getPrototypeOf(e)
        } : function (e) {
            return e.__proto__
        };
        __webpack_require__.t = function (r, n) {
            if (1 & n && (r = this(r)), 8 & n) return r;
            if ("object" === typeof r && r) {
                if (4 & n && r.__esModule) return r;
                if (16 & n && "function" === typeof r.then) return r
            }
            var i = Object.create(null);
            __webpack_require__.r(i);
            var a = {};
            e = e || [null, t({}), t([]), t(t)];
            for (var s = 2 & n && r; "object" == typeof s && !~e.indexOf(s); s = t(s)) Object.getOwnPropertyNames(s).forEach((function (e) {
                a[e] = function () {
                    return r[e]
                }
            }));
            return a.default = function () {
                return r
            }, __webpack_require__.d(i, a), i
        }
    }(), __webpack_require__.d = function (e, t) {
        for (var r in t) __webpack_require__.o(t, r) && !__webpack_require__.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: t[r]
        })
    }, __webpack_require__.f = {}, __webpack_require__.e = function (e) {
        return Promise.all(Object.keys(__webpack_require__.f).reduce((function (t, r) {
            return __webpack_require__.f[r](e, t), t
        }), []))
    }, __webpack_require__.u = function (e) {
        return "static/js/" + e + ".6bee4d46.chunk.js"
    }, __webpack_require__.miniCssF = function (e) {
    }, __webpack_require__.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, function () {
        var e = {}, t = "client:";
        __webpack_require__.l = function (r, n, i, a) {
            if (e[r]) e[r].push(n); else {
                var s, o;
                if (void 0 !== i) for (var l = document.getElementsByTagName("script"), h = 0; h < l.length; h++) {
                    var u = l[h];
                    if (u.getAttribute("src") == r || u.getAttribute("data-webpack") == t + i) {
                        s = u;
                        break
                    }
                }
                s || (o = !0, (s = document.createElement("script")).charset = "utf-8", s.timeout = 120, __webpack_require__.nc && s.setAttribute("nonce", __webpack_require__.nc), s.setAttribute("data-webpack", t + i), s.src = r), e[r] = [n];
                var c = function (t, n) {
                    s.onerror = s.onload = null, clearTimeout(p);
                    var i = e[r];
                    if (delete e[r], s.parentNode && s.parentNode.removeChild(s), i && i.forEach((function (e) {
                        return e(n)
                    })), t) return t(n)
                }, p = setTimeout(c.bind(null, void 0, {type: "timeout", target: s}), 12e4);
                s.onerror = c.bind(null, s.onerror), s.onload = c.bind(null, s.onload), o && document.head.appendChild(s)
            }
        }
    }(), __webpack_require__.r = function (e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, __webpack_require__.p = "/", function () {
        var e = {179: 0};
        __webpack_require__.f.j = function (t, r) {
            var n = __webpack_require__.o(e, t) ? e[t] : void 0;
            if (0 !== n) if (n) r.push(n[2]); else {
                var i = new Promise((function (r, i) {
                    n = e[t] = [r, i]
                }));
                r.push(n[2] = i);
                var a = __webpack_require__.p + __webpack_require__.u(t), s = new Error;
                __webpack_require__.l(a, (function (r) {
                    if (__webpack_require__.o(e, t) && (0 !== (n = e[t]) && (e[t] = void 0), n)) {
                        var i = r && ("load" === r.type ? "missing" : r.type), a = r && r.target && r.target.src;
                        s.message = "Loading chunk " + t + " failed.\n(" + i + ": " + a + ")", s.name = "ChunkLoadError", s.type = i, s.request = a, n[1](s)
                    }
                }), "chunk-" + t, t)
            }
        };
        var t = function (t, r) {
            var n, i, a = r[0], s = r[1], o = r[2], l = 0;
            if (a.some((function (t) {
                return 0 !== e[t]
            }))) {
                for (n in s) __webpack_require__.o(s, n) && (__webpack_require__.m[n] = s[n]);
                if (o) o(__webpack_require__)
            }
            for (t && t(r); l < a.length; l++) i = a[l], __webpack_require__.o(e, i) && e[i] && e[i][0](), e[i] = 0
        }, r = self.webpackChunkclient = self.webpackChunkclient || [];
        r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
    }();
    var __webpack_exports__ = {};
    !function () {
        "use strict";
        var e, t = __webpack_require__(390), r = __webpack_require__.t(t, 2), n = __webpack_require__(254);

        function i(e) {
            if (Array.isArray(e)) return e
        }

        function a(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
            return n
        }

        function s(e, t) {
            if (e) {
                if ("string" === typeof e) return a(e, t);
                var r = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? a(e, t) : void 0
            }
        }

        function o() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }

        function l(e, t) {
            return i(e) || function (e, t) {
                var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != r) {
                    var n, i, a, s, o = [], l = !0, h = !1;
                    try {
                        if (a = (r = r.call(e)).next, 0 === t) {
                            if (Object(r) !== r) return;
                            l = !1
                        } else for (; !(l = (n = a.call(r)).done) && (o.push(n.value), o.length !== t); l = !0) ;
                    } catch (u) {
                        h = !0, i = u
                    } finally {
                        try {
                            if (!l && null != r.return && (s = r.return(), Object(s) !== s)) return
                        } finally {
                            if (h) throw i
                        }
                    }
                    return o
                }
            }(e, t) || s(e, t) || o()
        }

        function h(e) {
            if ("undefined" !== typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }

        function u(e) {
            return function (e) {
                if (Array.isArray(e)) return a(e)
            }(e) || h(e) || s(e) || function () {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }

        function c(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function p(e) {
            return p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }, p(e)
        }

        function f(e) {
            var t = function (e, t) {
                if ("object" !== p(e) || null === e) return e;
                var r = e[Symbol.toPrimitive];
                if (void 0 !== r) {
                    var n = r.call(e, t || "default");
                    if ("object" !== p(n)) return n;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === p(t) ? t : String(t)
        }

        function d(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, f(n.key), n)
            }
        }

        function m(e, t, r) {
            return t && d(e.prototype, t), r && d(e, r), Object.defineProperty(e, "prototype", {writable: !1}), e
        }

        function y(e, t) {
            return y = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                return e.__proto__ = t, e
            }, y(e, t)
        }

        function g(e, t) {
            if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), Object.defineProperty(e, "prototype", {writable: !1}), t && y(e, t)
        }

        function v(e) {
            return v = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }, v(e)
        }

        function x() {
            if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" === typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {
                }))), !0
            } catch (At) {
                return !1
            }
        }

        function b(e, t) {
            if (t && ("object" === p(t) || "function" === typeof t)) return t;
            if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
            return function (e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e)
        }

        function k(e) {
            var t = x();
            return function () {
                var r, n = v(e);
                if (t) {
                    var i = v(this).constructor;
                    r = Reflect.construct(n, arguments, i)
                } else r = n.apply(this, arguments);
                return b(this, r)
            }
        }

        function S(e, t, r) {
            return S = x() ? Reflect.construct.bind() : function (e, t, r) {
                var n = [null];
                n.push.apply(n, t);
                var i = new (Function.bind.apply(e, n));
                return r && y(i, r.prototype), i
            }, S.apply(null, arguments)
        }

        function E(e) {
            var t = "function" === typeof Map ? new Map : void 0;
            return E = function (e) {
                if (null === e || (r = e, -1 === Function.toString.call(r).indexOf("[native code]"))) return e;
                var r;
                if ("function" !== typeof e) throw new TypeError("Super expression must either be null or a function");
                if ("undefined" !== typeof t) {
                    if (t.has(e)) return t.get(e);
                    t.set(e, n)
                }

                function n() {
                    return S(e, arguments, v(this).constructor)
                }

                return n.prototype = Object.create(e.prototype, {
                    constructor: {
                        value: n,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), y(n, e)
            }, E(e)
        }

        function P() {
            return P = Object.assign ? Object.assign.bind() : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            }, P.apply(this, arguments)
        }

        !function (e) {
            e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE"
        }(e || (e = {}));
        var w, _ = "popstate";

        function C(e, t) {
            if (!1 === e || null === e || "undefined" === typeof e) throw new Error(t)
        }

        function A(e, t) {
            return {usr: e.state, key: e.key, idx: t}
        }

        function D(e, t, r, n) {
            return void 0 === r && (r = null), P({
                pathname: "string" === typeof e ? e : e.pathname,
                search: "",
                hash: ""
            }, "string" === typeof t ? M(t) : t, {
                state: r,
                key: t && t.key || n || Math.random().toString(36).substr(2, 8)
            })
        }

        function T(e) {
            var t = e.pathname, r = void 0 === t ? "/" : t, n = e.search, i = void 0 === n ? "" : n, a = e.hash,
                s = void 0 === a ? "" : a;
            return i && "?" !== i && (r += "?" === i.charAt(0) ? i : "?" + i), s && "#" !== s && (r += "#" === s.charAt(0) ? s : "#" + s), r
        }

        function M(e) {
            var t = {};
            if (e) {
                var r = e.indexOf("#");
                r >= 0 && (t.hash = e.substr(r), e = e.substr(0, r));
                var n = e.indexOf("?");
                n >= 0 && (t.search = e.substr(n), e = e.substr(0, n)), e && (t.pathname = e)
            }
            return t
        }

        function F(t, r, n, i) {
            void 0 === i && (i = {});
            var a = i, s = a.window, o = void 0 === s ? document.defaultView : s, l = a.v5Compat, h = void 0 !== l && l,
                u = o.history, c = e.Pop, p = null, f = d();

            function d() {
                return (u.state || {idx: null}).idx
            }

            function m() {
                c = e.Pop;
                var t = d(), r = null == t ? null : t - f;
                f = t, p && p({action: c, location: g.location, delta: r})
            }

            function y(e) {
                var t = "null" !== o.location.origin ? o.location.origin : o.location.href,
                    r = "string" === typeof e ? e : T(e);
                return C(t, "No window.location.(origin|href) available to create URL for href: " + r), new URL(r, t)
            }

            null == f && (f = 0, u.replaceState(P({}, u.state, {idx: f}), ""));
            var g = {
                get action() {
                    return c
                }, get location() {
                    return t(o, u)
                }, listen: function (e) {
                    if (p) throw new Error("A history only accepts one active listener");
                    return o.addEventListener(_, m), p = e, function () {
                        o.removeEventListener(_, m), p = null
                    }
                }, createHref: function (e) {
                    return r(o, e)
                }, createURL: y, encodeLocation: function (e) {
                    var t = y(e);
                    return {pathname: t.pathname, search: t.search, hash: t.hash}
                }, push: function (t, r) {
                    c = e.Push;
                    var i = D(g.location, t, r);
                    n && n(i, t);
                    var a = A(i, f = d() + 1), s = g.createHref(i);
                    try {
                        u.pushState(a, "", s)
                    } catch (l) {
                        o.location.assign(s)
                    }
                    h && p && p({action: c, location: g.location, delta: 1})
                }, replace: function (t, r) {
                    c = e.Replace;
                    var i = D(g.location, t, r);
                    n && n(i, t);
                    var a = A(i, f = d()), s = g.createHref(i);
                    u.replaceState(a, "", s), h && p && p({action: c, location: g.location, delta: 0})
                }, go: function (e) {
                    return u.go(e)
                }
            };
            return g
        }

        function I(e, t, r) {
            void 0 === r && (r = "/");
            var n = U(("string" === typeof t ? M(t) : t).pathname || "/", r);
            if (null == n) return null;
            var i = B(e);
            !function (e) {
                e.sort((function (e, t) {
                    return e.score !== t.score ? t.score - e.score : function (e, t) {
                        var r = e.length === t.length && e.slice(0, -1).every((function (e, r) {
                            return e === t[r]
                        }));
                        return r ? e[e.length - 1] - t[t.length - 1] : 0
                    }(e.routesMeta.map((function (e) {
                        return e.childrenIndex
                    })), t.routesMeta.map((function (e) {
                        return e.childrenIndex
                    })))
                }))
            }(i);
            for (var a = null, s = 0; null == a && s < i.length; ++s) a = q(i[s], $(n));
            return a
        }

        function B(e, t, r, n) {
            void 0 === t && (t = []), void 0 === r && (r = []), void 0 === n && (n = "");
            var i = function (e, i, a) {
                var s = {
                    relativePath: void 0 === a ? e.path || "" : a,
                    caseSensitive: !0 === e.caseSensitive,
                    childrenIndex: i,
                    route: e
                };
                s.relativePath.startsWith("/") && (C(s.relativePath.startsWith(n), 'Absolute route path "' + s.relativePath + '" nested under path "' + n + '" is not valid. An absolute child route path must start with the combined path of all its parent routes.'), s.relativePath = s.relativePath.slice(n.length));
                var o = Z([n, s.relativePath]), l = r.concat(s);
                e.children && e.children.length > 0 && (C(!0 !== e.index, 'Index routes must not have child routes. Please remove all child routes from route path "' + o + '".'), B(e.children, t, l, o)), (null != e.path || e.index) && t.push({
                    path: o,
                    score: H(o, e.index),
                    routesMeta: l
                })
            };
            return e.forEach((function (e, t) {
                var r;
                if ("" !== e.path && null != (r = e.path) && r.includes("?")) {
                    var n, a = function (e, t) {
                        var r = "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                        if (!r) {
                            if (Array.isArray(e) || (r = s(e)) || t && e && "number" === typeof e.length) {
                                r && (e = r);
                                var n = 0, i = function () {
                                };
                                return {
                                    s: i, n: function () {
                                        return n >= e.length ? {done: !0} : {done: !1, value: e[n++]}
                                    }, e: function (e) {
                                        throw e
                                    }, f: i
                                }
                            }
                            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }
                        var a, o = !0, l = !1;
                        return {
                            s: function () {
                                r = r.call(e)
                            }, n: function () {
                                var e = r.next();
                                return o = e.done, e
                            }, e: function (e) {
                                l = !0, a = e
                            }, f: function () {
                                try {
                                    o || null == r.return || r.return()
                                } finally {
                                    if (l) throw a
                                }
                            }
                        }
                    }(j(e.path));
                    try {
                        for (a.s(); !(n = a.n()).done;) {
                            var o = n.value;
                            i(e, t, o)
                        }
                    } catch (l) {
                        a.e(l)
                    } finally {
                        a.f()
                    }
                } else i(e, t)
            })), t
        }

        function j(e) {
            var t = e.split("/");
            if (0 === t.length) return [];
            var r, n = i(r = t) || h(r) || s(r) || o(), a = n[0], l = n.slice(1), c = a.endsWith("?"),
                p = a.replace(/\?$/, "");
            if (0 === l.length) return c ? [p, ""] : [p];
            var f = j(l.join("/")), d = [];
            return d.push.apply(d, u(f.map((function (e) {
                return "" === e ? p : [p, e].join("/")
            })))), c && d.push.apply(d, u(f)), d.map((function (t) {
                return e.startsWith("/") && "" === t ? "/" : t
            }))
        }

        !function (e) {
            e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error"
        }(w || (w = {}));
        var R = /^:\w+$/, V = 3, L = 2, N = 1, O = 10, z = -2, G = function (e) {
            return "*" === e
        };

        function H(e, t) {
            var r = e.split("/"), n = r.length;
            return r.some(G) && (n += z), t && (n += L), r.filter((function (e) {
                return !G(e)
            })).reduce((function (e, t) {
                return e + (R.test(t) ? V : "" === t ? N : O)
            }), n)
        }

        function q(e, t) {
            for (var r = e.routesMeta, n = {}, i = "/", a = [], s = 0; s < r.length; ++s) {
                var o = r[s], l = s === r.length - 1, h = "/" === i ? t : t.slice(i.length) || "/",
                    u = W({path: o.relativePath, caseSensitive: o.caseSensitive, end: l}, h);
                if (!u) return null;
                Object.assign(n, u.params);
                var c = o.route;
                a.push({
                    params: n,
                    pathname: Z([i, u.pathname]),
                    pathnameBase: J(Z([i, u.pathnameBase])),
                    route: c
                }), "/" !== u.pathnameBase && (i = Z([i, u.pathnameBase]))
            }
            return a
        }

        function W(e, t) {
            "string" === typeof e && (e = {path: e, caseSensitive: !1, end: !0});
            var r = function (e, t, r) {
                void 0 === t && (t = !1);
                void 0 === r && (r = !0);
                Y("*" === e || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were "' + e.replace(/\*$/, "/*") + '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' + e.replace(/\*$/, "/*") + '".');
                var n = [],
                    i = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^$?{}|()[\]]/g, "\\$&").replace(/\/:(\w+)/g, (function (e, t) {
                        return n.push(t), "/([^\\/]+)"
                    }));
                e.endsWith("*") ? (n.push("*"), i += "*" === e || "/*" === e ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : r ? i += "\\/*$" : "" !== e && "/" !== e && (i += "(?:(?=\\/|$))");
                var a = new RegExp(i, t ? void 0 : "i");
                return [a, n]
            }(e.path, e.caseSensitive, e.end), n = l(r, 2), i = n[0], a = n[1], s = t.match(i);
            if (!s) return null;
            var o = s[0], h = o.replace(/(.)\/+$/, "$1"), u = s.slice(1);
            return {
                params: a.reduce((function (e, t, r) {
                    if ("*" === t) {
                        var n = u[r] || "";
                        h = o.slice(0, o.length - n.length).replace(/(.)\/+$/, "$1")
                    }
                    return e[t] = function (e, t) {
                        try {
                            return decodeURIComponent(e)
                        } catch (r) {
                            return Y(!1, 'The value for the URL param "' + t + '" will not be decoded because the string "' + e + '" is a malformed URL segment. This is probably due to a bad percent encoding (' + r + ")."), e
                        }
                    }(u[r] || "", t), e
                }), {}), pathname: o, pathnameBase: h, pattern: e
            }
        }

        function $(e) {
            try {
                return decodeURI(e)
            } catch (t) {
                return Y(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (' + t + ")."), e
            }
        }

        function U(e, t) {
            if ("/" === t) return e;
            if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
            var r = t.endsWith("/") ? t.length - 1 : t.length, n = e.charAt(r);
            return n && "/" !== n ? null : e.slice(r) || "/"
        }

        function Y(e, t) {
            if (!e) {
                "undefined" !== typeof console && console.warn(t);
                try {
                    throw new Error(t)
                } catch (At) {
                }
            }
        }

        function Q(e, t, r, n) {
            return "Cannot include a '" + e + "' character in a manually specified `to." + t + "` field [" + JSON.stringify(n) + "].  Please separate it out to the `to." + r + '` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'
        }

        function X(e) {
            return e.filter((function (e, t) {
                return 0 === t || e.route.path && e.route.path.length > 0
            }))
        }

        function K(e, t, r, n) {
            var i;
            void 0 === n && (n = !1), "string" === typeof e ? i = M(e) : (C(!(i = P({}, e)).pathname || !i.pathname.includes("?"), Q("?", "pathname", "search", i)), C(!i.pathname || !i.pathname.includes("#"), Q("#", "pathname", "hash", i)), C(!i.search || !i.search.includes("#"), Q("#", "search", "hash", i)));
            var a, s = "" === e || "" === i.pathname, o = s ? "/" : i.pathname;
            if (n || null == o) a = r; else {
                var l = t.length - 1;
                if (o.startsWith("..")) {
                    for (var h = o.split("/"); ".." === h[0];) h.shift(), l -= 1;
                    i.pathname = h.join("/")
                }
                a = l >= 0 ? t[l] : "/"
            }
            var u = function (e, t) {
                void 0 === t && (t = "/");
                var r = "string" === typeof e ? M(e) : e, n = r.pathname, i = r.search, a = void 0 === i ? "" : i,
                    s = r.hash, o = void 0 === s ? "" : s, l = n ? n.startsWith("/") ? n : function (e, t) {
                        var r = t.replace(/\/+$/, "").split("/");
                        return e.split("/").forEach((function (e) {
                            ".." === e ? r.length > 1 && r.pop() : "." !== e && r.push(e)
                        })), r.length > 1 ? r.join("/") : "/"
                    }(n, t) : t;
                return {pathname: l, search: ee(a), hash: te(o)}
            }(i, a), c = o && "/" !== o && o.endsWith("/"), p = (s || "." === o) && r.endsWith("/");
            return u.pathname.endsWith("/") || !c && !p || (u.pathname += "/"), u
        }

        var Z = function (e) {
            return e.join("/").replace(/\/\/+/g, "/")
        }, J = function (e) {
            return e.replace(/\/+$/, "").replace(/^\/*/, "/")
        }, ee = function (e) {
            return e && "?" !== e ? e.startsWith("?") ? e : "?" + e : ""
        }, te = function (e) {
            return e && "#" !== e ? e.startsWith("#") ? e : "#" + e : ""
        }, re = function (e) {
            g(r, e);
            var t = k(r);

            function r() {
                return c(this, r), t.apply(this, arguments)
            }

            return m(r)
        }(E(Error));

        function ne(e) {
            return null != e && "number" === typeof e.status && "string" === typeof e.statusText && "boolean" === typeof e.internal && "data" in e
        }

        var ie = ["post", "put", "patch", "delete"], ae = (new Set(ie), ["get"].concat(ie));
        new Set(ae), new Set([301, 302, 303, 307, 308]), new Set([307, 308]), "undefined" !== typeof window && "undefined" !== typeof window.document && window.document.createElement;
        Symbol("deferred");

        function se() {
            return se = Object.assign ? Object.assign.bind() : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            }, se.apply(this, arguments)
        }

        var oe = "function" === typeof Object.is ? Object.is : function (e, t) {
            return e === t && (0 !== e || 1 / e === 1 / t) || e !== e && t !== t
        }, le = t.useState, he = t.useEffect, ue = t.useLayoutEffect, ce = t.useDebugValue;

        function pe(e) {
            var t = e.getSnapshot, r = e.value;
            try {
                var n = t();
                return !oe(r, n)
            } catch (i) {
                return !0
            }
        }

        "undefined" === typeof window || "undefined" === typeof window.document || window.document.createElement, r.useSyncExternalStore;
        var fe = t.createContext(null);
        var de = t.createContext(null);
        var me = t.createContext(null);
        var ye = t.createContext(null);
        var ge = t.createContext(null);
        var ve = t.createContext({outlet: null, matches: []});
        var xe = t.createContext(null);

        function be() {
            return null != t.useContext(ge)
        }

        function ke() {
            return be() || C(!1), t.useContext(ge).location
        }

        function Se() {
            be() || C(!1);
            var e = t.useContext(ye), r = e.basename, n = e.navigator, i = t.useContext(ve).matches, a = ke().pathname,
                s = JSON.stringify(X(i).map((function (e) {
                    return e.pathnameBase
                }))), o = t.useRef(!1);
            return t.useEffect((function () {
                o.current = !0
            })), t.useCallback((function (e, t) {
                if (void 0 === t && (t = {}), o.current) if ("number" !== typeof e) {
                    var i = K(e, JSON.parse(s), a, "path" === t.relative);
                    "/" !== r && (i.pathname = "/" === i.pathname ? r : Z([r, i.pathname])), (t.replace ? n.replace : n.push)(i, t.state, t)
                } else n.go(e)
            }), [r, n, s, a])
        }

        function Ee(e, r) {
            var n = (void 0 === r ? {} : r).relative, i = t.useContext(ve).matches, a = ke().pathname,
                s = JSON.stringify(X(i).map((function (e) {
                    return e.pathnameBase
                })));
            return t.useMemo((function () {
                return K(e, JSON.parse(s), a, "path" === n)
            }), [e, s, a, n])
        }

        function Pe() {
            var e = function () {
                    var e, r = t.useContext(xe), n = Te(_e.UseRouteError), i = Me(_e.UseRouteError);
                    if (r) return r;
                    return null == (e = n.errors) ? void 0 : e[i]
                }(), r = ne(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e),
                n = e instanceof Error ? e.stack : null, i = "rgba(200,200,200, 0.5)",
                a = {padding: "0.5rem", backgroundColor: i};
            return t.createElement(t.Fragment, null, t.createElement("h2", null, "Unexpected Application Error!"), t.createElement("h3", {style: {fontStyle: "italic"}}, r), n ? t.createElement("pre", {style: a}, n) : null, null)
        }

        var we, _e, Ce = function (e) {
            g(n, e);
            var r = k(n);

            function n(e) {
                var t;
                return c(this, n), (t = r.call(this, e)).state = {location: e.location, error: e.error}, t
            }

            return m(n, [{
                key: "componentDidCatch", value: function (e, t) {
                    console.error("React Router caught the following error during render", e, t)
                }
            }, {
                key: "render", value: function () {
                    return this.state.error ? t.createElement(ve.Provider, {value: this.props.routeContext}, t.createElement(xe.Provider, {
                        value: this.state.error,
                        children: this.props.component
                    })) : this.props.children
                }
            }], [{
                key: "getDerivedStateFromError", value: function (e) {
                    return {error: e}
                }
            }, {
                key: "getDerivedStateFromProps", value: function (e, t) {
                    return t.location !== e.location ? {
                        error: e.error,
                        location: e.location
                    } : {error: e.error || t.error, location: t.location}
                }
            }]), n
        }(t.Component);

        function Ae(e) {
            var r = e.routeContext, n = e.match, i = e.children, a = t.useContext(fe);
            return a && a.static && a.staticContext && n.route.errorElement && (a.staticContext._deepestRenderedBoundaryId = n.route.id), t.createElement(ve.Provider, {value: r}, i)
        }

        function De(e, r, n) {
            if (void 0 === r && (r = []), null == e) {
                if (null == n || !n.errors) return null;
                e = n.matches
            }
            var i = e, a = null == n ? void 0 : n.errors;
            if (null != a) {
                var s = i.findIndex((function (e) {
                    return e.route.id && (null == a ? void 0 : a[e.route.id])
                }));
                s >= 0 || C(!1), i = i.slice(0, Math.min(i.length, s + 1))
            }
            return i.reduceRight((function (e, s, o) {
                var l = s.route.id ? null == a ? void 0 : a[s.route.id] : null,
                    h = n ? s.route.errorElement || t.createElement(Pe, null) : null, u = r.concat(i.slice(0, o + 1)),
                    c = function () {
                        return t.createElement(Ae, {
                            match: s,
                            routeContext: {outlet: e, matches: u}
                        }, l ? h : void 0 !== s.route.element ? s.route.element : e)
                    };
                return n && (s.route.errorElement || 0 === o) ? t.createElement(Ce, {
                    location: n.location,
                    component: h,
                    error: l,
                    children: c(),
                    routeContext: {outlet: null, matches: u}
                }) : c()
            }), null)
        }

        function Te(e) {
            var r = t.useContext(de);
            return r || C(!1), r
        }

        function Me(e) {
            var r = function (e) {
                var r = t.useContext(ve);
                return r || C(!1), r
            }(), n = r.matches[r.matches.length - 1];
            return n.route.id || C(!1), n.route.id
        }

        !function (e) {
            e.UseBlocker = "useBlocker", e.UseRevalidator = "useRevalidator"
        }(we || (we = {})), function (e) {
            e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator"
        }(_e || (_e = {}));
        var Fe;

        function Ie(e) {
            C(!1)
        }

        function Be(r) {
            var n = r.basename, i = void 0 === n ? "/" : n, a = r.children, s = void 0 === a ? null : a, o = r.location,
                l = r.navigationType, h = void 0 === l ? e.Pop : l, u = r.navigator, c = r.static,
                p = void 0 !== c && c;
            be() && C(!1);
            var f = i.replace(/^\/*/, "/"), d = t.useMemo((function () {
                return {basename: f, navigator: u, static: p}
            }), [f, u, p]);
            "string" === typeof o && (o = M(o));
            var m = o, y = m.pathname, g = void 0 === y ? "/" : y, v = m.search, x = void 0 === v ? "" : v, b = m.hash,
                k = void 0 === b ? "" : b, S = m.state, E = void 0 === S ? null : S, P = m.key,
                w = void 0 === P ? "default" : P, _ = t.useMemo((function () {
                    var e = U(g, f);
                    return null == e ? null : {pathname: e, search: x, hash: k, state: E, key: w}
                }), [f, g, x, k, E, w]);
            return null == _ ? null : t.createElement(ye.Provider, {value: d}, t.createElement(ge.Provider, {
                children: s,
                value: {location: _, navigationType: h}
            }))
        }

        function je(r) {
            var n = r.children, i = r.location, a = t.useContext(fe);
            return function (r, n) {
                be() || C(!1);
                var i, a = t.useContext(ye).navigator, s = t.useContext(de), o = t.useContext(ve).matches,
                    l = o[o.length - 1], h = l ? l.params : {}, u = (l && l.pathname, l ? l.pathnameBase : "/"),
                    c = (l && l.route, ke());
                if (n) {
                    var p, f = "string" === typeof n ? M(n) : n;
                    "/" === u || (null == (p = f.pathname) ? void 0 : p.startsWith(u)) || C(!1), i = f
                } else i = c;
                var d = i.pathname || "/", m = I(r, {pathname: "/" === u ? d : d.slice(u.length) || "/"}),
                    y = De(m && m.map((function (e) {
                        return Object.assign({}, e, {
                            params: Object.assign({}, h, e.params),
                            pathname: Z([u, a.encodeLocation ? a.encodeLocation(e.pathname).pathname : e.pathname]),
                            pathnameBase: "/" === e.pathnameBase ? u : Z([u, a.encodeLocation ? a.encodeLocation(e.pathnameBase).pathname : e.pathnameBase])
                        })
                    })), o, s || void 0);
                return n && y ? t.createElement(ge.Provider, {
                    value: {
                        location: se({
                            pathname: "/",
                            search: "",
                            hash: "",
                            state: null,
                            key: "default"
                        }, i), navigationType: e.Pop
                    }
                }, y) : y
            }(a && !n ? a.router.routes : Ve(n), i)
        }

        !function (e) {
            e[e.pending = 0] = "pending", e[e.success = 1] = "success", e[e.error = 2] = "error"
        }(Fe || (Fe = {}));
        var Re = new Promise((function () {
        }));
        t.Component;

        function Ve(e, r) {
            void 0 === r && (r = []);
            var n = [];
            return t.Children.forEach(e, (function (e, i) {
                if (t.isValidElement(e)) if (e.type !== t.Fragment) {
                    e.type !== Ie && C(!1), e.props.index && e.props.children && C(!1);
                    var a = [].concat(u(r), [i]), s = {
                        id: e.props.id || a.join("-"),
                        caseSensitive: e.props.caseSensitive,
                        element: e.props.element,
                        index: e.props.index,
                        path: e.props.path,
                        loader: e.props.loader,
                        action: e.props.action,
                        errorElement: e.props.errorElement,
                        hasErrorBoundary: null != e.props.errorElement,
                        shouldRevalidate: e.props.shouldRevalidate,
                        handle: e.props.handle
                    };
                    e.props.children && (s.children = Ve(e.props.children, a)), n.push(s)
                } else n.push.apply(n, Ve(e.props.children, r))
            })), n
        }

        function Le() {
            return Le = Object.assign ? Object.assign.bind() : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            }, Le.apply(this, arguments)
        }

        function Ne(e, t) {
            if (null == e) return {};
            var r, n, i = {}, a = Object.keys(e);
            for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) >= 0 || (i[r] = e[r]);
            return i
        }

        var Oe = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset"];

        function ze(e) {
            var r, n = e.basename, i = e.children, a = e.window, s = t.useRef();
            null == s.current && (s.current = (void 0 === (r = {
                window: a,
                v5Compat: !0
            }) && (r = {}), F((function (e, t) {
                var r = e.location;
                return D("", {
                    pathname: r.pathname,
                    search: r.search,
                    hash: r.hash
                }, t.state && t.state.usr || null, t.state && t.state.key || "default")
            }), (function (e, t) {
                return "string" === typeof t ? t : T(t)
            }), null, r)));
            var o = s.current, h = l(t.useState({action: o.action, location: o.location}), 2), u = h[0], c = h[1];
            return t.useLayoutEffect((function () {
                return o.listen(c)
            }), [o]), t.createElement(Be, {
                basename: n,
                children: i,
                location: u.location,
                navigationType: u.action,
                navigator: o
            })
        }

        var Ge = "undefined" !== typeof window && "undefined" !== typeof window.document && "undefined" !== typeof window.document.createElement,
            He = t.forwardRef((function (e, r) {
                var n, i = e.onClick, a = e.relative, s = e.reloadDocument, o = e.replace, l = e.state, h = e.target,
                    u = e.to, c = e.preventScrollReset, p = Ne(e, Oe), f = !1;
                if (Ge && "string" === typeof u && /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i.test(u)) {
                    n = u;
                    var d = new URL(window.location.href),
                        m = u.startsWith("//") ? new URL(d.protocol + u) : new URL(u);
                    m.origin === d.origin ? u = m.pathname + m.search + m.hash : f = !0
                }
                var y = function (e, r) {
                    var n = (void 0 === r ? {} : r).relative;
                    be() || C(!1);
                    var i = t.useContext(ye), a = i.basename, s = i.navigator, o = Ee(e, {relative: n}), l = o.hash,
                        h = o.pathname, u = o.search, c = h;
                    return "/" !== a && (c = "/" === h ? a : Z([a, h])), s.createHref({pathname: c, search: u, hash: l})
                }(u, {relative: a}), g = function (e, r) {
                    var n = void 0 === r ? {} : r, i = n.target, a = n.replace, s = n.state, o = n.preventScrollReset,
                        l = n.relative, h = Se(), u = ke(), c = Ee(e, {relative: l});
                    return t.useCallback((function (t) {
                        if (function (e, t) {
                            return 0 === e.button && (!t || "_self" === t) && !function (e) {
                                return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
                            }(e)
                        }(t, i)) {
                            t.preventDefault();
                            var r = void 0 !== a ? a : T(u) === T(c);
                            h(e, {replace: r, state: s, preventScrollReset: o, relative: l})
                        }
                    }), [u, h, c, a, s, i, e, o, l])
                }(u, {replace: o, state: l, target: h, preventScrollReset: c, relative: a});
                return t.createElement("a", Le({}, p, {
                    href: n || y, onClick: f || s ? i : function (e) {
                        i && i(e), e.defaultPrevented || g(e)
                    }, ref: r, target: h
                }))
            }));
        var qe, We;
        (function (e) {
            e.UseScrollRestoration = "useScrollRestoration", e.UseSubmitImpl = "useSubmitImpl", e.UseFetcher = "useFetcher"
        })(qe || (qe = {})), function (e) {
            e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration"
        }(We || (We = {}));
        var $e = __webpack_require__(559);
        var Ue = function () {
            return (0, $e.jsxs)("nav", {
                className: "navbar",
                children: [(0, $e.jsx)("h1", {children: "The Studio Management App"}), (0, $e.jsxs)("div", {
                    className: "links",
                    children: [(0, $e.jsx)(He, {
                        to: "/userLogin",
                        children: "SIGN IN"
                    }), (0, $e.jsx)(He, {to: "/userRegis", children: "REGISTER"}), (0, $e.jsx)(He, {
                        to: "/inquiry",
                        children: "INQUIRY"
                    })]
                })]
            })
        }, Ye = function () {
            return (0, $e.jsxs)("div", {
                className: "Home",
                style: {overflow: "hidden"},
                children: [(0, $e.jsx)(Ue, {}), (0, $e.jsx)("div", {
                    className: "navbar1",
                    children: (0, $e.jsx)("h1", {children: "Welcome To The Studio Management APP"})
                })]
            })
        };
        var Qe = function () {
            return (0, $e.jsx)("div", {
                children: (0, $e.jsxs)("form", {
                    children: [(0, $e.jsxs)("div", {
                        className: "container",
                        children: [(0, $e.jsx)("div", {
                            className: "container",
                            children: (0, $e.jsx)("div", {
                                className: "pinkFont",
                                children: (0, $e.jsx)("h1", {children: "Company Register"})
                            })
                        }), (0, $e.jsx)("p", {children: "Please fill in this form to create an account."}), (0, $e.jsx)("hr", {}), (0, $e.jsx)("label", {
                            htmlFor: "compName",
                            children: (0, $e.jsx)("b", {children: "Company Name"})
                        }), (0, $e.jsx)("input", {
                            type: "text",
                            placeholder: "Enter Company Name",
                            name: "compName",
                            id: "compName",
                            required: !0
                        }), (0, $e.jsx)("label", {
                            htmlFor: "compAdd",
                            children: (0, $e.jsx)("b", {children: "Company's Registered Address"})
                        }), (0, $e.jsx)("textarea", {
                            type: "text",
                            placeholder: "Enter Company's Registered Address",
                            name: "compAdd",
                            id: "compAdd",
                            required: !0
                        }), (0, $e.jsx)("label", {
                            htmlFor: "compCity",
                            children: (0, $e.jsx)("b", {children: "Company's Registered City"})
                        }), (0, $e.jsx)("input", {
                            type: "text",
                            placeholder: "Enter Company's City",
                            name: "compCity",
                            id: "compCity",
                            required: !0
                        }), (0, $e.jsx)("label", {
                            htmlFor: "compPinCode",
                            children: (0, $e.jsx)("b", {children: "Pincode"})
                        }), (0, $e.jsx)("input", {
                            type: "number",
                            inputMode: "numeric",
                            placeholder: "Enter Pincode",
                            name: "compPinCode",
                            id: "CompPinCode",
                            required: !0,
                            maxLength: "6"
                        }), (0, $e.jsx)("label", {
                            htmlFor: "compPhone",
                            children: (0, $e.jsx)("b", {children: "Phone Number"})
                        }), (0, $e.jsx)("input", {
                            type: "number",
                            inputMode: "numeric",
                            placeholder: "Enter Phone Number",
                            name: "compPhone",
                            id: "CompPhone",
                            required: !0,
                            maxLength: "10"
                        }), (0, $e.jsx)("label", {
                            htmlFor: "compMobile",
                            children: (0, $e.jsx)("b", {children: "Mobile Number"})
                        }), (0, $e.jsx)("input", {
                            type: "number",
                            inputMode: "numeric",
                            placeholder: "Enter Mobile Number",
                            name: "compMobile",
                            id: "CompMobile",
                            required: !0,
                            maxLength: "10"
                        }), (0, $e.jsx)("label", {
                            htmlFor: "website",
                            children: (0, $e.jsx)("b", {children: "Website"})
                        }), (0, $e.jsx)("input", {
                            type: "text",
                            placeholder: "Enter Your website",
                            name: "website",
                            id: "website",
                            required: !0
                        }), (0, $e.jsx)("label", {
                            htmlFor: "compEmail",
                            children: (0, $e.jsx)("b", {children: "Email"})
                        }), (0, $e.jsx)("input", {
                            type: "text",
                            placeholder: "Enter Email",
                            name: "compEmail",
                            id: "compEmail",
                            required: !0
                        }), (0, $e.jsx)("label", {
                            htmlFor: "email",
                            children: (0, $e.jsx)("b", {children: "Government Registration Number"})
                        }), (0, $e.jsx)("input", {
                            type: "text",
                            placeholder: "Enter Government Registration Number",
                            name: "compID",
                            id: "compID",
                            required: !0
                        }), (0, $e.jsx)("label", {
                            htmlFor: "compLogo",
                            children: (0, $e.jsx)("b", {children: "Logo"})
                        }), (0, $e.jsx)("input", {
                            type: "file",
                            placeholder: "Company's Logo",
                            name: "compLogo",
                            id: "compLogo",
                            accept: "image/png, image/jpeg",
                            required: !0
                        }), (0, $e.jsx)("label", {
                            htmlFor: "compOwner",
                            children: (0, $e.jsx)("b", {children: "Owner's Name"})
                        }), (0, $e.jsx)("input", {
                            type: "text",
                            placeholder: "Enter Owner's Name",
                            name: "compOwner",
                            id: "compOwner",
                            required: !0
                        }), (0, $e.jsx)("label", {
                            htmlFor: "psw",
                            children: (0, $e.jsx)("b", {children: "Password"})
                        }), (0, $e.jsx)("input", {
                            type: "password",
                            placeholder: "Enter Password",
                            name: "psw",
                            id: "psw",
                            required: !0
                        }), (0, $e.jsx)("label", {
                            htmlFor: "pswRepeat",
                            children: (0, $e.jsx)("b", {children: "Confirm Password"})
                        }), (0, $e.jsx)("input", {
                            type: "password",
                            placeholder: "Confirm Password",
                            name: "pswRepeat",
                            id: "pswRepeat",
                            required: !0
                        }), (0, $e.jsx)("hr", {}), (0, $e.jsxs)("p", {
                            children: ["By creating an account you agree to our ", (0, $e.jsx)(He, {
                                to: "",
                                children: "Terms & Privacy."
                            })]
                        }), (0, $e.jsx)("button", {type: "submit", className: "registerbtn", children: "Register"})]
                    }), (0, $e.jsx)("div", {
                        className: "container signin",
                        children: (0, $e.jsxs)("p", {
                            children: ["Have an account? ", (0, $e.jsx)(He, {
                                to: "/complogin",
                                children: " Login Here"
                            }), "."]
                        })
                    })]
                })
            })
        };

        function Xe() {
            return (0, $e.jsxs)("div", {
                id: "error-page",
                children: [(0, $e.jsx)("h1", {children: "Oops!"}), (0, $e.jsx)("p", {children: "Sorry, an unexpected error has occurred."})]
            })
        }

        var Ke = function () {
            return (0, $e.jsx)("div", {
                children: (0, $e.jsxs)("form", {
                    name: "compLogin",
                    action: "/auth",
                    method: "post",
                    children: [(0, $e.jsxs)("div", {
                        className: "container",
                        children: [(0, $e.jsx)("div", {
                            className: "container",
                            children: (0, $e.jsx)("div", {
                                className: "pinkFont",
                                children: (0, $e.jsx)("h1", {children: "Company Login"})
                            })
                        }), (0, $e.jsx)("p", {children: "Please fill in this form for Logging In."}), (0, $e.jsx)("hr", {}), (0, $e.jsx)("label", {
                            htmlFor: "username",
                            children: (0, $e.jsx)("b", {children: "Username"})
                        }), (0, $e.jsx)("input", {
                            type: "text",
                            placeholder: "Enter Username",
                            name: "username",
                            id: "username",
                            required: !0
                        }), (0, $e.jsx)("label", {
                            htmlFor: "psw",
                            children: (0, $e.jsx)("b", {children: "Password"})
                        }), (0, $e.jsx)("input", {
                            type: "password",
                            placeholder: "Enter Password",
                            name: "psw",
                            id: "psw",
                            required: !0
                        }), (0, $e.jsxs)("p", {
                            children: ["By creating an account you agree to our ", (0, $e.jsx)(He, {
                                to: "*",
                                children: "Terms & Privacy"
                            }), "."]
                        }), (0, $e.jsx)("button", {type: "submit", className: "registerbtn", children: "Login"})]
                    }), (0, $e.jsx)("div", {
                        className: "container signin",
                        children: (0, $e.jsxs)("p", {
                            children: ["Don't Have an account? ", (0, $e.jsx)(He, {
                                to: "/compregis",
                                children: " Register Here"
                            }), "."]
                        })
                    })]
                })
            })
        };
        var Ze = function () {
            return (0, $e.jsx)("div", {
                children: (0, $e.jsxs)("form", {
                    action: "/userReg", method: "post", children: [(0, $e.jsxs)("div", {
                        className: "container",
                        children: [(0, $e.jsx)("div", {
                            className: "container",
                            children: (0, $e.jsx)("div", {
                                className: "pinkFont",
                                children: (0, $e.jsx)("h1", {children: "User Register"})
                            })
                        }), (0, $e.jsx)("p", {children: "Please fill in this form to create an account."}), (0, $e.jsx)("hr", {}), (0, $e.jsx)("label", {
                            htmlFor: "username",
                            children: (0, $e.jsx)("b", {children: "Username"})
                        }), (0, $e.jsx)("input", {
                            type: "text",
                            placeholder: "Enter username",
                            name: "username",
                            id: "username",
                            required: !0
                        }), (0, $e.jsx)("label", {
                            htmlFor: "fullName",
                            children: (0, $e.jsx)("b", {children: "Full Name"})
                        }), (0, $e.jsx)("input", {
                            type: "text",
                            placeholder: "Enter Full Name",
                            name: "fullName",
                            id: "fullName",
                            required: !0
                        }), (0, $e.jsx)("label", {
                            htmlFor: "userAdd",
                            children: (0, $e.jsx)("b", {children: "Address"})
                        }), (0, $e.jsx)("input", {
                            type: "textarea",
                            placeholder: "Enter Your Address",
                            name: "userAdd",
                            id: "userAdd",
                            required: !0
                        }), (0, $e.jsx)("label", {
                            htmlFor: "userCity",
                            children: (0, $e.jsx)("b", {children: "User's City"})
                        }), (0, $e.jsx)("input", {
                            type: "text",
                            placeholder: "Enter User's City",
                            name: "userCity",
                            id: "userCity",
                            required: !0
                        }), (0, $e.jsx)("label", {
                            htmlFor: "userPinCode",
                            children: (0, $e.jsx)("b", {children: "Pincode"})
                        }), (0, $e.jsx)("input", {
                            type: "number",
                            inputMode: "numeric",
                            placeholder: "Enter Pincode",
                            name: "userPinCode",
                            id: "userPinCode",
                            required: !0,
                            maxLength: "6"
                        }), (0, $e.jsx)("label", {
                            htmlFor: "userMobile",
                            children: (0, $e.jsx)("b", {children: "Mobile Number"})
                        }), (0, $e.jsx)("input", {
                            type: "number",
                            inputMode: "numeric",
                            placeholder: "Enter Mobile Number",
                            name: "userMobile",
                            id: "userMobile",
                            required: !0,
                            maxLength: "10"
                        }), (0, $e.jsx)("label", {
                            htmlFor: "userMobile",
                            children: (0, $e.jsx)("b", {children: "Emergency Mobile Number"})
                        }), (0, $e.jsx)("input", {
                            type: "number",
                            inputMode: "numeric",
                            placeholder: "Enter Emergency Mobile Number",
                            name: "userEmergencyMobile",
                            id: "userEmergencyMobile",
                            required: !0,
                            maxLength: "10"
                        }), (0, $e.jsx)("label", {
                            htmlFor: "birthday",
                            children: "Birthday:"
                        }), (0, $e.jsx)("input", {
                            type: "date",
                            id: "userBirthday",
                            name: "userBirthday"
                        }), (0, $e.jsx)("label", {
                            htmlFor: "userBatchID",
                            children: (0, $e.jsx)("b", {children: "Batch Id"})
                        }), (0, $e.jsx)("input", {
                            type: "text",
                            placeholder: "Enter Batch ID",
                            name: "userBatchID",
                            id: "userBatchID",
                            required: !0
                        }), (0, $e.jsx)("label", {
                            htmlFor: "website",
                            children: (0, $e.jsx)("b", {children: "Website"})
                        }), (0, $e.jsx)("input", {
                            type: "text",
                            placeholder: "Enter Your website",
                            name: "website",
                            id: "website",
                            required: !0
                        }), (0, $e.jsx)("label", {
                            htmlFor: "userEmail",
                            children: (0, $e.jsx)("b", {children: "Email"})
                        }), (0, $e.jsx)("input", {
                            type: "text",
                            placeholder: "Enter Email",
                            name: "userEmail",
                            id: "userEmail",
                            required: !0
                        }), (0, $e.jsx)("label", {
                            htmlFor: "psw",
                            children: (0, $e.jsx)("b", {children: "Password"})
                        }), (0, $e.jsx)("input", {
                            type: "password",
                            placeholder: "Enter Password",
                            name: "psw",
                            id: "psw",
                            required: !0
                        }), (0, $e.jsx)("label", {
                            htmlFor: "pswRepeat",
                            children: (0, $e.jsx)("b", {children: "Confirm Password"})
                        }), (0, $e.jsx)("input", {
                            type: "password",
                            placeholder: "Confirm Password",
                            name: "pswRepeat",
                            id: "pswRepeat",
                            required: !0
                        }), (0, $e.jsx)("hr", {}), (0, $e.jsx)("p", {children: "By creating an account you agree to our Terms & Privacy."}), (0, $e.jsx)("button", {
                            type: "submit",
                            className: "registerbtn",
                            children: "Register"
                        })]
                    }), (0, $e.jsx)("div", {
                        className: "container signin",
                        children: (0, $e.jsxs)("p", {
                            children: ["Have an account? ", (0, $e.jsx)(He, {
                                to: "/userlogin",
                                children: " Login Here"
                            }), "."]
                        })
                    })]
                })
            })
        };
        var Je = function () {
            var e = l((0, t.useState)("Yoga Practitioner"), 2), r = e[0];
            return e[1], console.log(r), (0, $e.jsx)("div", {
                children: (0, $e.jsxs)("form", {
                    name: "userLogin",
                    action: "/authUser",
                    method: "post",
                    children: [(0, $e.jsxs)("div", {
                        className: "container",
                        children: [(0, $e.jsx)("div", {
                            className: "container",
                            children: (0, $e.jsx)("div", {
                                className: "pinkFont",
                                children: (0, $e.jsx)("h1", {children: "User Login"})
                            })
                        }), (0, $e.jsx)("p", {children: "Please fill in this form for Logging In."}), (0, $e.jsx)("hr", {}), (0, $e.jsx)("label", {
                            htmlFor: "username",
                            children: (0, $e.jsx)("b", {children: "Username"})
                        }), (0, $e.jsx)("input", {
                            type: "text",
                            placeholder: "Enter Username",
                            name: "username",
                            id: "username",
                            required: !0
                        }), (0, $e.jsx)("label", {
                            htmlFor: "psw",
                            children: (0, $e.jsx)("b", {children: "Password"})
                        }), (0, $e.jsx)("input", {
                            type: "password",
                            placeholder: "Enter Password",
                            name: "psw",
                            id: "psw",
                            required: !0
                        }), (0, $e.jsxs)("p", {
                            children: ["By creating an account you agree to our ", (0, $e.jsx)(He, {
                                to: "",
                                children: "Terms & Privacy"
                            }), "."]
                        }), (0, $e.jsx)("button", {type: "submit", className: "registerbtn", children: "Login"})]
                    }), (0, $e.jsx)("div", {
                        className: "container signin",
                        children: (0, $e.jsxs)("p", {
                            children: ["Don't Have an account? ", (0, $e.jsx)(He, {
                                to: "/userregis",
                                children: " Register Here"
                            }), "."]
                        })
                    })]
                })
            })
        };
        var et = function () {
            return (0, $e.jsxs)("nav", {
                className: "navbar",
                children: [(0, $e.jsx)("h1", {children: "The Studio Management App"}), (0, $e.jsxs)("div", {
                    className: "links",
                    children: [(0, $e.jsx)(He, {
                        to: "/profile",
                        children: "Profile"
                    }), (0, $e.jsx)(He, {to: "/attendance", children: "Attendance"}), (0, $e.jsx)(He, {
                        to: "/logout",
                        children: "Logout"
                    })]
                })]
            })
        }, tt = function () {
            return (0, $e.jsxs)("div", {
                className: "Home",
                children: [(0, $e.jsx)(et, {}), (0, $e.jsx)("p", {children: "Howdy User"})]
            })
        };

        function rt() {
            rt = function () {
                return e
            };
            var e = {}, t = Object.prototype, r = t.hasOwnProperty, n = Object.defineProperty || function (e, t, r) {
                    e[t] = r.value
                }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator",
                s = i.asyncIterator || "@@asyncIterator", o = i.toStringTag || "@@toStringTag";

            function l(e, t, r) {
                return Object.defineProperty(e, t, {value: r, enumerable: !0, configurable: !0, writable: !0}), e[t]
            }

            try {
                l({}, "")
            } catch (D) {
                l = function (e, t, r) {
                    return e[t] = r
                }
            }

            function h(e, t, r, i) {
                var a = t && t.prototype instanceof f ? t : f, s = Object.create(a.prototype), o = new _(i || []);
                return n(s, "_invoke", {value: S(e, r, o)}), s
            }

            function u(e, t, r) {
                try {
                    return {type: "normal", arg: e.call(t, r)}
                } catch (D) {
                    return {type: "throw", arg: D}
                }
            }

            e.wrap = h;
            var c = {};

            function f() {
            }

            function d() {
            }

            function m() {
            }

            var y = {};
            l(y, a, (function () {
                return this
            }));
            var g = Object.getPrototypeOf, v = g && g(g(C([])));
            v && v !== t && r.call(v, a) && (y = v);
            var x = m.prototype = f.prototype = Object.create(y);

            function b(e) {
                ["next", "throw", "return"].forEach((function (t) {
                    l(e, t, (function (e) {
                        return this._invoke(t, e)
                    }))
                }))
            }

            function k(e, t) {
                function i(n, a, s, o) {
                    var l = u(e[n], e, a);
                    if ("throw" !== l.type) {
                        var h = l.arg, c = h.value;
                        return c && "object" == p(c) && r.call(c, "__await") ? t.resolve(c.__await).then((function (e) {
                            i("next", e, s, o)
                        }), (function (e) {
                            i("throw", e, s, o)
                        })) : t.resolve(c).then((function (e) {
                            h.value = e, s(h)
                        }), (function (e) {
                            return i("throw", e, s, o)
                        }))
                    }
                    o(l.arg)
                }

                var a;
                n(this, "_invoke", {
                    value: function (e, r) {
                        function n() {
                            return new t((function (t, n) {
                                i(e, r, t, n)
                            }))
                        }

                        return a = a ? a.then(n, n) : n()
                    }
                })
            }

            function S(e, t, r) {
                var n = "suspendedStart";
                return function (i, a) {
                    if ("executing" === n) throw new Error("Generator is already running");
                    if ("completed" === n) {
                        if ("throw" === i) throw a;
                        return A()
                    }
                    for (r.method = i, r.arg = a; ;) {
                        var s = r.delegate;
                        if (s) {
                            var o = E(s, r);
                            if (o) {
                                if (o === c) continue;
                                return o
                            }
                        }
                        if ("next" === r.method) r.sent = r._sent = r.arg; else if ("throw" === r.method) {
                            if ("suspendedStart" === n) throw n = "completed", r.arg;
                            r.dispatchException(r.arg)
                        } else "return" === r.method && r.abrupt("return", r.arg);
                        n = "executing";
                        var l = u(e, t, r);
                        if ("normal" === l.type) {
                            if (n = r.done ? "completed" : "suspendedYield", l.arg === c) continue;
                            return {value: l.arg, done: r.done}
                        }
                        "throw" === l.type && (n = "completed", r.method = "throw", r.arg = l.arg)
                    }
                }
            }

            function E(e, t) {
                var r = t.method, n = e.iterator[r];
                if (void 0 === n) return t.delegate = null, "throw" === r && e.iterator.return && (t.method = "return", t.arg = void 0, E(e, t), "throw" === t.method) || "return" !== r && (t.method = "throw", t.arg = new TypeError("The iterator does not provide a '" + r + "' method")), c;
                var i = u(n, e.iterator, t.arg);
                if ("throw" === i.type) return t.method = "throw", t.arg = i.arg, t.delegate = null, c;
                var a = i.arg;
                return a ? a.done ? (t[e.resultName] = a.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, c) : a : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, c)
            }

            function P(e) {
                var t = {tryLoc: e[0]};
                1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
            }

            function w(e) {
                var t = e.completion || {};
                t.type = "normal", delete t.arg, e.completion = t
            }

            function _(e) {
                this.tryEntries = [{tryLoc: "root"}], e.forEach(P, this), this.reset(!0)
            }

            function C(e) {
                if (e) {
                    var t = e[a];
                    if (t) return t.call(e);
                    if ("function" == typeof e.next) return e;
                    if (!isNaN(e.length)) {
                        var n = -1, i = function t() {
                            for (; ++n < e.length;) if (r.call(e, n)) return t.value = e[n], t.done = !1, t;
                            return t.value = void 0, t.done = !0, t
                        };
                        return i.next = i
                    }
                }
                return {next: A}
            }

            function A() {
                return {value: void 0, done: !0}
            }

            return d.prototype = m, n(x, "constructor", {value: m, configurable: !0}), n(m, "constructor", {
                value: d,
                configurable: !0
            }), d.displayName = l(m, o, "GeneratorFunction"), e.isGeneratorFunction = function (e) {
                var t = "function" == typeof e && e.constructor;
                return !!t && (t === d || "GeneratorFunction" === (t.displayName || t.name))
            }, e.mark = function (e) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(e, m) : (e.__proto__ = m, l(e, o, "GeneratorFunction")), e.prototype = Object.create(x), e
            }, e.awrap = function (e) {
                return {__await: e}
            }, b(k.prototype), l(k.prototype, s, (function () {
                return this
            })), e.AsyncIterator = k, e.async = function (t, r, n, i, a) {
                void 0 === a && (a = Promise);
                var s = new k(h(t, r, n, i), a);
                return e.isGeneratorFunction(r) ? s : s.next().then((function (e) {
                    return e.done ? e.value : s.next()
                }))
            }, b(x), l(x, o, "Generator"), l(x, a, (function () {
                return this
            })), l(x, "toString", (function () {
                return "[object Generator]"
            })), e.keys = function (e) {
                var t = Object(e), r = [];
                for (var n in t) r.push(n);
                return r.reverse(), function e() {
                    for (; r.length;) {
                        var n = r.pop();
                        if (n in t) return e.value = n, e.done = !1, e
                    }
                    return e.done = !0, e
                }
            }, e.values = C, _.prototype = {
                constructor: _, reset: function (e) {
                    if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(w), !e) for (var t in this) "t" === t.charAt(0) && r.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
                }, stop: function () {
                    this.done = !0;
                    var e = this.tryEntries[0].completion;
                    if ("throw" === e.type) throw e.arg;
                    return this.rval
                }, dispatchException: function (e) {
                    if (this.done) throw e;
                    var t = this;

                    function n(r, n) {
                        return s.type = "throw", s.arg = e, t.next = r, n && (t.method = "next", t.arg = void 0), !!n
                    }

                    for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                        var a = this.tryEntries[i], s = a.completion;
                        if ("root" === a.tryLoc) return n("end");
                        if (a.tryLoc <= this.prev) {
                            var o = r.call(a, "catchLoc"), l = r.call(a, "finallyLoc");
                            if (o && l) {
                                if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                                if (this.prev < a.finallyLoc) return n(a.finallyLoc)
                            } else if (o) {
                                if (this.prev < a.catchLoc) return n(a.catchLoc, !0)
                            } else {
                                if (!l) throw new Error("try statement without catch or finally");
                                if (this.prev < a.finallyLoc) return n(a.finallyLoc)
                            }
                        }
                    }
                }, abrupt: function (e, t) {
                    for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                        var i = this.tryEntries[n];
                        if (i.tryLoc <= this.prev && r.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
                            var a = i;
                            break
                        }
                    }
                    a && ("break" === e || "continue" === e) && a.tryLoc <= t && t <= a.finallyLoc && (a = null);
                    var s = a ? a.completion : {};
                    return s.type = e, s.arg = t, a ? (this.method = "next", this.next = a.finallyLoc, c) : this.complete(s)
                }, complete: function (e, t) {
                    if ("throw" === e.type) throw e.arg;
                    return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), c
                }, finish: function (e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var r = this.tryEntries[t];
                        if (r.finallyLoc === e) return this.complete(r.completion, r.afterLoc), w(r), c
                    }
                }, catch: function (e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var r = this.tryEntries[t];
                        if (r.tryLoc === e) {
                            var n = r.completion;
                            if ("throw" === n.type) {
                                var i = n.arg;
                                w(r)
                            }
                            return i
                        }
                    }
                    throw new Error("illegal catch attempt")
                }, delegateYield: function (e, t, r) {
                    return this.delegate = {
                        iterator: C(e),
                        resultName: t,
                        nextLoc: r
                    }, "next" === this.method && (this.arg = void 0), c
                }
            }, e
        }

        function nt(e, t, r, n, i, a, s) {
            try {
                var o = e[a](s), l = o.value
            } catch (h) {
                return void r(h)
            }
            o.done ? t(l) : Promise.resolve(l).then(n, i)
        }

        function it(e) {
            return function () {
                var t = this, r = arguments;
                return new Promise((function (n, i) {
                    var a = e.apply(t, r);

                    function s(e) {
                        nt(a, n, i, s, o, "next", e)
                    }

                    function o(e) {
                        nt(a, n, i, s, o, "throw", e)
                    }

                    s(void 0)
                }))
            }
        }

        var at = function () {
            var e = l((0, t.useState)([]), 2), r = e[0], n = e[1];
            return (0, t.useEffect)((function () {
                var e = function () {
                    var e = it(rt().mark((function e() {
                        var t, r, i;
                        return rt().wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, fetch("/userDetails");
                                case 2:
                                    return t = e.sent, e.next = 5, t.json();
                                case 5:
                                    r = e.sent, i = Array.from(r), n(r), console.log(i);
                                case 9:
                                case"end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }();
                e()
            }), []), (0, $e.jsxs)("div", {
                children: [(0, $e.jsx)(et, {}), (0, $e.jsx)("table", {
                    children: (0, $e.jsx)("tbody", {
                        children: (0, $e.jsxs)("tr", {
                            children: [(0, $e.jsxs)("t", {
                                children: [(0, $e.jsx)("tr", {
                                    children: r.map((function (e) {
                                        return (0, $e.jsx)("td", {children: "Email: "}, e)
                                    }))
                                }), (0, $e.jsx)("tr", {
                                    children: r.map((function (e) {
                                        return (0, $e.jsx)("td", {children: "Full Name: "}, e)
                                    }))
                                }), (0, $e.jsx)("tr", {
                                    children: r.map((function (e) {
                                        return (0, $e.jsx)("td", {children: "Id: "}, e)
                                    }))
                                }), (0, $e.jsx)("tr", {
                                    children: r.map((function (e) {
                                        return (0, $e.jsx)("td", {children: "User Add: "}, e)
                                    }))
                                }), (0, $e.jsx)("tr", {
                                    children: r.map((function (e) {
                                        return (0, $e.jsx)("td", {children: "Batch ID: "}, e)
                                    }))
                                }), (0, $e.jsx)("tr", {
                                    children: r.map((function (e) {
                                        return (0, $e.jsx)("td", {children: "Birthday: "}, e)
                                    }))
                                }), (0, $e.jsx)("tr", {
                                    children: r.map((function (e) {
                                        return (0, $e.jsx)("td", {children: "City: "}, e)
                                    }))
                                }), (0, $e.jsx)("tr", {
                                    children: r.map((function (e) {
                                        return (0, $e.jsx)("td", {children: "Emergency Mobile: "}, e)
                                    }))
                                }), (0, $e.jsx)("tr", {
                                    children: r.map((function (e) {
                                        return (0, $e.jsx)("td", {children: "Mobile: "}, e)
                                    }))
                                }), (0, $e.jsx)("tr", {
                                    children: r.map((function (e) {
                                        return (0, $e.jsx)("td", {children: "Username: "}, e)
                                    }))
                                }), (0, $e.jsx)("tr", {
                                    children: r.map((function (e) {
                                        return (0, $e.jsx)("td", {children: "PinCode: "}, e)
                                    }))
                                }), (0, $e.jsx)("tr", {
                                    children: r.map((function (e) {
                                        return (0, $e.jsx)("td", {children: "Role: "}, e)
                                    }))
                                }), (0, $e.jsx)("tr", {
                                    children: r.map((function (e) {
                                        return (0, $e.jsx)("td", {children: "website: "}, e)
                                    }))
                                })]
                            }), (0, $e.jsxs)("td", {
                                children: [(0, $e.jsx)("tr", {
                                    children: r.map((function (e) {
                                        return (0, $e.jsx)("td", {children: e.email}, e)
                                    }))
                                }), (0, $e.jsx)("tr", {
                                    children: r.map((function (e) {
                                        return (0, $e.jsx)("td", {children: e.fullname}, e)
                                    }))
                                }), (0, $e.jsx)("tr", {
                                    children: r.map((function (e) {
                                        return (0, $e.jsx)("td", {children: e.id}, e)
                                    }))
                                }), (0, $e.jsx)("tr", {
                                    children: r.map((function (e) {
                                        return (0, $e.jsx)("td", {children: e.userAdd}, e)
                                    }))
                                }), (0, $e.jsx)("tr", {
                                    children: r.map((function (e) {
                                        return (0, $e.jsx)("td", {children: e.userBatchID}, e)
                                    }))
                                }), (0, $e.jsx)("tr", {
                                    children: r.map((function (e) {
                                        return (0, $e.jsx)("td", {children: e.userBirthday}, e)
                                    }))
                                }), (0, $e.jsx)("tr", {
                                    children: r.map((function (e) {
                                        return (0, $e.jsx)("td", {children: e.userCity}, e)
                                    }))
                                }), (0, $e.jsx)("tr", {
                                    children: r.map((function (e) {
                                        return (0, $e.jsx)("td", {children: e.userEmergencyMobile}, e)
                                    }))
                                }), (0, $e.jsx)("tr", {
                                    children: r.map((function (e) {
                                        return (0, $e.jsx)("td", {children: e.userMobile}, e)
                                    }))
                                }), (0, $e.jsx)("tr", {
                                    children: r.map((function (e) {
                                        return (0, $e.jsx)("td", {children: e.username}, e)
                                    }))
                                }), (0, $e.jsx)("tr", {
                                    children: r.map((function (e) {
                                        return (0, $e.jsx)("td", {children: e.userPinCode}, e)
                                    }))
                                }), (0, $e.jsx)("tr", {
                                    children: r.map((function (e) {
                                        return (0, $e.jsx)("td", {children: e.userRole}, e)
                                    }))
                                }), (0, $e.jsx)("tr", {
                                    children: r.map((function (e) {
                                        return (0, $e.jsx)("td", {children: e.website}, e)
                                    }))
                                })]
                            })]
                        })
                    })
                })]
            })
        }, st = function (e, t) {
            return st = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
                e.__proto__ = t
            } || function (e, t) {
                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
            }, st(e, t)
        };
        var ot = 50, lt = 50;

        function ht(e) {
            var r = e.className, n = e.counterClockwise, i = e.dashRatio, a = e.pathRadius, s = e.strokeWidth,
                o = e.style;
            return (0, t.createElement)("path", {
                className: r,
                style: Object.assign({}, o, ct({pathRadius: a, dashRatio: i, counterClockwise: n})),
                d: ut({pathRadius: a, counterClockwise: n}),
                strokeWidth: s,
                fillOpacity: 0
            })
        }

        function ut(e) {
            var t = e.pathRadius, r = e.counterClockwise ? 1 : 0;
            return "\n      M " + ot + "," + lt + "\n      m 0,-" + t + "\n      a " + t + "," + t + " " + r + " 1 1 0," + 2 * t + "\n      a " + t + "," + t + " " + r + " 1 1 0,-" + 2 * t + "\n    "
        }

        function ct(e) {
            var t = e.counterClockwise, r = e.dashRatio, n = e.pathRadius, i = 2 * Math.PI * n, a = (1 - r) * i;
            return {strokeDasharray: i + "px " + i + "px", strokeDashoffset: (t ? -a : a) + "px"}
        }

        var pt = function (e) {
            function r() {
                return null !== e && e.apply(this, arguments) || this
            }

            return function (e, t) {
                function r() {
                    this.constructor = e
                }

                st(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
            }(r, e), r.prototype.getBackgroundPadding = function () {
                return this.props.background ? this.props.backgroundPadding : 0
            }, r.prototype.getPathRadius = function () {
                return 50 - this.props.strokeWidth / 2 - this.getBackgroundPadding()
            }, r.prototype.getPathRatio = function () {
                var e = this.props, t = e.value, r = e.minValue, n = e.maxValue;
                return (Math.min(Math.max(t, r), n) - r) / (n - r)
            }, r.prototype.render = function () {
                var e = this.props, r = e.circleRatio, n = e.className, i = e.classes, a = e.counterClockwise,
                    s = e.styles, o = e.strokeWidth, l = e.text, h = this.getPathRadius(), u = this.getPathRatio();
                return (0, t.createElement)("svg", {
                    className: i.root + " " + n,
                    style: s.root,
                    viewBox: "0 0 100 100",
                    "data-test-id": "CircularProgressbar"
                }, this.props.background ? (0, t.createElement)("circle", {
                    className: i.background,
                    style: s.background,
                    cx: ot,
                    cy: lt,
                    r: 50
                }) : null, (0, t.createElement)(ht, {
                    className: i.trail,
                    counterClockwise: a,
                    dashRatio: r,
                    pathRadius: h,
                    strokeWidth: o,
                    style: s.trail
                }), (0, t.createElement)(ht, {
                    className: i.path,
                    counterClockwise: a,
                    dashRatio: u * r,
                    pathRadius: h,
                    strokeWidth: o,
                    style: s.path
                }), l ? (0, t.createElement)("text", {className: i.text, style: s.text, x: ot, y: lt}, l) : null)
            }, r.defaultProps = {
                background: !1,
                backgroundPadding: 0,
                circleRatio: 1,
                classes: {
                    root: "CircularProgressbar",
                    trail: "CircularProgressbar-trail",
                    path: "CircularProgressbar-path",
                    text: "CircularProgressbar-text",
                    background: "CircularProgressbar-background"
                },
                counterClockwise: !1,
                className: "",
                maxValue: 100,
                minValue: 0,
                strokeWidth: 8,
                styles: {root: {}, trail: {}, path: {}, text: {}, background: {}},
                text: ""
            }, r
        }(t.Component);
        var ft = function () {
            return (0, $e.jsxs)("div", {
                children: [(0, $e.jsx)(et, {}), (0, $e.jsxs)("div", {
                    className: "content",
                    children: [(0, $e.jsx)("h1", {children: "Your Attendance"}), (0, $e.jsxs)("div", {
                        style: {
                            width: 100,
                            height: 100
                        },
                        children: [(0, $e.jsx)("hr", {}), (0, $e.jsx)(pt, {value: 66, text: "".concat(66, "%")}), ";"]
                    }), (0, $e.jsx)("div", {className: "container"})]
                })]
            })
        };
        var dt = function () {
            return (0, t.useEffect)((function () {
                var e = setTimeout((function () {
                    window.history.back()
                }), 3e3);
                return function () {
                    return clearTimeout(e)
                }
            }), []), (0, $e.jsx)("div", {
                className: "container",
                children: (0, $e.jsx)("div", {
                    className: "container signin",
                    children: (0, $e.jsx)("div", {
                        className: "container",
                        children: (0, $e.jsx)("p", {children: "Wrong Password and/or Username"})
                    })
                })
            })
        }, mt = function () {
            return (0, $e.jsx)("div", {
                className: "container",
                children: (0, $e.jsx)("h1", {children: "Welcome to Finance Department"})
            })
        };
        var yt = JSON.parse('{"v":"5.5.7","meta":{"g":"LottieFiles AE 0.1.20","a":"","k":"","d":"","tc":""},"fr":24,"ip":0,"op":168,"w":500,"h":500,"nm":"Relax","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":3,"nm":"Main_Null","sr":1,"ks":{"o":{"a":0,"k":0,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":0,"s":[250,229.99999999999997,0],"to":[0,-6.667,0],"ti":[0,0,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":84,"s":[250,190,0],"to":[0,0,0],"ti":[0,-6.667,0]},{"t":168,"s":[250,229.99999999999997,0]}],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"ip":0,"op":169,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"Hair_Front","parent":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[0,0,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[-0.687,-1.629],[1.152,0.839]],"o":[[0,0],[5.37,12.739],[-20.221,-14.712]],"v":[[-21.906,-85.944],[-23.528,-86.59],[0.666,-64.276]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.745097994804,0.141176000237,0.129411995411,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.039215687662,0.176470592618,0.301960796118,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 3","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0.25,-4],[0,0],[-2.25,3.25],[-2.75,6.5]],"o":[[0,0],[-0.25,4],[0,0],[2.25,-3.25],[2.75,-6.5]],"v":[[-26.5,-88.5],[-40.75,-52.75],[-37.5,-42.75],[-30.292,-54.26],[-22.288,-62.747]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.745097994804,0.141176000237,0.129411995411,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.039215687662,0.176470592618,0.301960796118,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 2","np":3,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[2.25,-0.25],[-7.558,-9.448],[0.394,-21.172],[0,0],[1,1]],"o":[[-2.25,0.25],[30.882,38.618],[-0.312,17.851],[0,0],[-1,-1]],"v":[[-7,-100.75],[-24.75,-90],[22.25,-43.25],[26.75,-48.75],[19.25,-93]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.745097994804,0.141176000237,0.129411995411,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.039215687662,0.176470592618,0.301960796118,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":3,"cix":2,"bm":0,"ix":3,"mn":"ADBE Vector Group","hd":false}],"ip":-74,"op":170,"st":-74,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"Top","parent":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-2,40,0],"ix":2},"a":{"a":0,"k":[133.596,126.196,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-16.736,5.563],[-2.848,-4.49],[1.915,6.169],[2.102,16.813],[2.029,-11.435],[15.736,-10.247],[0,0],[2.53,-7.764],[-0.694,10.927],[-7.901,-6.186],[-10.216,-0.238]],"o":[[10.001,-3.324],[0.652,5.76],[-2.414,-7.778],[0,0],[-19.781,-13.547],[-2.458,-10.963],[-2.314,17.284],[-1.878,5.764],[2.556,-1.073],[11.553,9.046],[10.035,0.234]],"v":[[163.595,143.52],[173.444,119.186],[179.774,167.313],[172.487,128.016],[168.628,155.743],[100.11,154.943],[95.02,130.329],[88.202,165.23],[93.04,118.519],[101.247,141.132],[132.561,142.462]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.745097994804,0.141176000237,0.129411995411,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.9019607843137255,1,0.7803921568627451,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 2","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[-2.481,-12.015],[-1.24,-4.105],[1.915,6.169],[2.102,16.813],[2.692,-8.613],[2.616,8.637],[0,0],[2.53,-7.764],[-0.83,2.661],[-0.904,4.192],[-3.599,9.582],[-7.764,9.41],[6.69,25.848],[-2.146,-1.931],[-5.384,-6.998]],"o":[[4.522,11.403],[0.867,4.199],[0.806,2.669],[-2.414,-7.778],[0,0],[-2.691,8.614],[-2.616,-8.638],[-2.314,17.284],[-1.878,5.764],[1.276,-4.094],[2.586,-11.992],[5.858,-15.593],[-5.134,19.39],[1.337,1.675],[10.768,9.691],[5.384,6.999]],"v":[[189.923,109.627],[196.845,145.77],[199.944,158.186],[179.774,167.313],[172.487,128.016],[165.623,166.663],[102.809,165.801],[95.02,130.329],[88.202,165.23],[68.29,159.519],[71.497,147.132],[77.311,108.462],[113.23,80.306],[151.406,78.847],[156.586,84.235],[184.581,98.771]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.745097994804,0.141176000237,0.129411995411,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.8745098039215686,0.9686274509803922,0.7568627450980392,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":3,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":169,"st":0,"bm":0},{"ddd":0,"ind":4,"ty":4,"nm":"Pant","parent":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-2,40,0],"ix":2},"a":{"a":0,"k":[133.596,126.196,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[3.742,18.113],[0,0],[-1.615,-5.384],[-2.154,-2.155],[-23.687,-8.614],[27.261,-6.586]],"o":[[0,0],[0,0],[1.616,5.383],[0,0],[0,0],[9.886,-6.086]],"v":[[167.354,183.833],[168.43,187.064],[172.16,194.601],[177.006,208.637],[226.573,211.078],[166.585,213.407]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.745097994804,0.141176000237,0.129411995411,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.403921574354,0.384313732386,0.670588254929,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 5","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-8.176,-5.895],[0,0],[0,0],[-1.662,5.37],[0,0],[0,0]],"o":[[-32.426,-7.395],[23.763,-8.406],[2.172,-2.135],[1.662,-5.369],[0,0],[-5.059,23.63]],"v":[[101.272,214.341],[39.442,212.667],[90.282,210.663],[95.754,196.42],[99.05,188.912],[99.405,185.066]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.745097994804,0.141176000237,0.129411995411,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.403921574354,0.384313732386,0.670588254929,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 4","np":3,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-5.063,-5.663],[0,0],[0,0],[8.595,2.23],[0,0],[-15.074,-0.73],[0,0],[8.032,2.311],[11.778,2.748],[0,0],[-10.899,-3.607]],"o":[[6.312,5.462],[0,0],[0,0],[-8.594,-2.228],[-6.255,-7.775],[15.074,0.73],[-2.846,-5.596],[-29.505,-8.488],[-12.966,-3.026],[0.746,-0.733],[44.531,14.736]],"v":[[116.784,238.484],[123.746,255.436],[82.854,256.53],[36.556,255.875],[23.226,249.596],[40.522,251.591],[119.067,250.042],[111.726,235.309],[69.068,222.447],[47.157,227.163],[70.066,221.584]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.745097994804,0.141176000237,0.129411995411,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.403921574354,0.384313732386,0.670588254929,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 3","np":3,"cix":2,"bm":0,"ix":3,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[13.936,-0.155],[-11.91,-9.191],[-30.977,2.618],[-1.013,16.756],[5.384,-3.229],[8.614,-2.154],[0,0],[0,0],[2.171,-0.158],[9.436,0.885],[5.636,1.039],[5.921,0],[-2.55,-1.37],[-20.169,2.148],[-0.494,-0.369],[14.229,-2.47]],"o":[[6.686,4.345],[0,0],[0,0],[2.691,7.538],[0,0],[-8.613,2.154],[0,0],[0,0],[0,0],[-4.689,-4.24],[-2.117,-0.39],[3.959,-1.032],[10.977,5.897],[14.134,-1.505],[0.718,0.535],[-17.826,3.095]],"v":[[138.66,235.601],[173.006,248.137],[236.073,247.578],[248.609,226.19],[243.975,247.898],[231.342,254.321],[184.043,254.571],[176.756,254.571],[171.939,254.245],[162.66,246.561],[141.335,241.407],[127.608,230.946],[135.62,232.549],[185.675,221.688],[208.137,226.578],[183.89,223.197]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.745097994804,0.141176000237,0.129411995411,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.403921574354,0.384313732386,0.670588254929,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 2","np":3,"cix":2,"bm":0,"ix":4,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-13.383,5.613],[0,0],[-1.615,-5.384],[-2.154,-2.155],[-23.687,-8.614],[-2.692,-7.537],[5.384,-3.229],[8.614,-2.154],[0,0],[0,0],[2.171,-0.158],[9.436,0.885],[5.636,1.039],[5.921,0],[6.562,-5.788],[0,0],[0,0],[8.595,2.23],[0,0],[-2.758,7.514],[0,0],[0,0],[-1.662,5.37],[0,0],[0,0]],"o":[[0,0],[0,0],[1.616,5.383],[0,0],[0,0],[2.691,7.538],[0,0],[-8.613,2.154],[0,0],[0,0],[0,0],[-4.689,-4.24],[-2.117,-0.39],[-5.923,0],[6.312,5.462],[0,0],[0,0],[-8.594,-2.228],[-5.355,-3.278],[2.757,-7.513],[23.763,-8.406],[2.172,-2.135],[1.662,-5.369],[0,0],[22.191,3.63]],"v":[[167.354,183.833],[168.43,187.064],[172.16,194.601],[177.006,208.637],[226.573,211.078],[248.609,226.19],[243.975,247.898],[231.342,254.321],[184.043,254.571],[176.756,254.571],[171.939,254.245],[162.66,246.561],[141.335,241.407],[127.608,230.946],[116.034,239.859],[123.746,255.436],[82.854,256.53],[36.556,255.875],[23.226,249.596],[17.772,228.591],[39.442,212.667],[90.282,210.663],[95.754,196.42],[99.05,188.912],[99.405,185.066]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.745097994804,0.141176000237,0.129411995411,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.498039215803,0.470588237047,0.823529422283,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":3,"cix":2,"bm":0,"ix":5,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":169,"st":0,"bm":0},{"ddd":0,"ind":5,"ty":4,"nm":"Body","parent":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-2,40,0],"ix":2},"a":{"a":0,"k":[133.596,126.196,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[-3.25,4.25]],"o":[[0,0],[3.25,-4.25]],"v":[[125.971,51.946],[134.846,50.071]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.666666686535,0.43935328722,0.358169943094,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":1,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 8","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.188,0.5],[0,0],[-1.5,0]],"o":[[-2.375,2],[0,0],[1.5,0]],"v":[[134.221,43.196],[126.346,44.633],[129.971,46.133]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.078431375325,0.160784319043,0.215686276555,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.78823530674,0.524025976658,0.429665505886,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 7","np":3,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[8,-0.25]],"o":[[0,0],[-8,0.25]],"v":[[148.096,27.571],[137.221,23.071]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.078431375325,0.160784319043,0.215686276555,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":1,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 6","np":3,"cix":2,"bm":0,"ix":3,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[-7.875,-0.375]],"o":[[0,0],[7.875,0.375]],"v":[[112.346,28.196],[123.471,23.571]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.078431375325,0.160784319043,0.215686276555,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":1,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 5","np":3,"cix":2,"bm":0,"ix":4,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.125,0.125],[3.5,0.035],[0.031,-0.031],[-4.188,-0.063]],"o":[[0.125,-0.125],[-3.094,-0.031],[0.438,0.781],[3.812,0.057]],"v":[[148.096,31.008],[142.69,33.227],[137.221,31.258],[142.971,33.946]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.745097994804,0.141176000237,0.129411995411,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.078431375325,0.160784319043,0.215686276555,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 4","np":3,"cix":2,"bm":0,"ix":5,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.125,0.125],[3.5,0.035],[0.031,-0.031],[-4.188,-0.063]],"o":[[0.125,-0.125],[-3.094,-0.031],[0.438,0.781],[3.812,0.057]],"v":[[123.596,31.008],[118.19,33.227],[112.721,31.258],[118.471,33.946]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.745097994804,0.141176000237,0.129411995411,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.078431375325,0.160784319043,0.215686276555,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 3","np":3,"cix":2,"bm":0,"ix":6,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-1.938,8],[0,0],[0.438,-5.25],[0,0]],"o":[[-15.688,19.625],[0,0],[9.5,-7.375],[0,0]],"v":[[147.409,56.571],[114.409,56.571],[116.159,73.196],[147.096,71.071]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.745097994804,0.141176000237,0.129411995411,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.827450990677,0.545314967632,0.444552093744,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 2","np":3,"cix":2,"bm":0,"ix":7,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[-2.481,-12.015],[-1.24,-4.105],[-1.379,-2.422],[-1.58,-1.829],[-6.216,-7.195],[-2.386,-2.355],[-2.153,-1.077],[-2.693,0.538],[-3.768,-1.076],[-1.076,-0.538],[3.769,-1.077],[0,0],[-3.229,0.538],[0,5.384],[-1.986,0.993],[0,0],[-2.153,-0.539],[0,0],[0.538,-1.616],[0,0],[1.616,0],[0,0],[2.153,1.615],[3.768,3.769],[7.537,7.538],[2.154,5.384],[3.769,30.149],[2.692,-8.613],[-1.077,-3.768],[0,0],[-1.615,-5.384],[-2.154,-2.155],[-23.687,-8.614],[-2.692,-7.537],[5.384,-3.229],[8.614,-2.154],[0,0],[0,0],[2.171,-0.158],[0,0],[0.573,0],[5.921,0],[8.076,-1.615],[0,0],[0,0],[8.595,2.23],[0,0],[-2.758,7.514],[0,0],[0,0],[-1.662,5.37],[0,0],[0,0],[2.616,8.637],[0,0],[2.201,-5.364],[7.603,-7.472],[0,0],[2.168,-1.596],[0,0],[1.615,0.014],[0,0],[0,0],[0,0],[0,0],[0,0],[-1.072,-0.546],[0,0],[0,0],[0,0],[3.759,1.11],[-1.081,0.53],[-3.778,1.043],[-2.687,-0.561],[0,0],[-2.244,2.175],[-2.214,2.517],[-6.279,7.14],[-1.214,2.089],[-0.83,2.661],[-0.904,4.192],[-3.599,9.582],[-0.921,16],[6.461,5.384],[-1.077,7.537],[-0.538,6.998],[-10.767,4.307],[-13.948,-10.438],[0.268,-0.433],[0,0],[3.348,-4.872],[0,0],[0.538,-7.537],[-10.767,-9.691],[-5.384,-6.998]],"o":[[4.522,11.403],[0.867,4.199],[0.806,2.669],[1.197,2.099],[6.215,7.196],[2.191,2.536],[2.224,2.195],[0,0],[2.691,-0.538],[3.769,1.078],[1.077,0.539],[-3.768,1.076],[0,0],[0,0],[0,0],[1.076,-0.538],[0,0],[0,0],[0,0],[0,0],[0,0],[-1.615,0],[0,0],[-2.155,-1.616],[0,0],[-7.538,-7.537],[-2.153,-5.383],[0,0],[-2.691,8.614],[0,0],[0,0],[1.616,5.383],[0,0],[0,0],[2.691,7.538],[0,0],[-8.613,2.154],[0,0],[0,0],[0,0],[-0.813,0.056],[-2.153,0],[-5.923,0],[0,0],[0,0],[0,0],[-8.594,-2.228],[-5.355,-3.278],[2.757,-7.513],[23.763,-8.406],[2.172,-2.135],[1.662,-5.369],[0,0],[1.109,-3.759],[-2.616,-8.638],[-4.032,30.114],[-2.2,5.364],[-7.603,7.471],[-3.801,3.735],[-2.167,1.596],[0,0],[-1.615,-0.014],[0,0],[-0.524,-1.62],[0,0],[2.158,-0.519],[0,0],[1.976,1.011],[-0.047,5.383],[3.225,0.567],[0,0],[-3.76,-1.109],[1.082,-0.529],[3.778,-1.044],[2.687,0.563],[2.163,-1.058],[2.406,-2.334],[6.278,-7.14],[1.596,-1.815],[1.401,-2.41],[1.276,-4.094],[2.586,-11.992],[7.155,-19.047],[0,0],[-6.46,-5.383],[1.077,-7.537],[0.539,-6.999],[0,0],[10.397,7.781],[1.768,1.942],[0,0],[-1.152,2.128],[0,0],[-0.538,7.538],[10.768,9.691],[5.384,6.999]],"v":[[189.173,109.627],[195.595,145.77],[198.944,158.186],[201.947,165.971],[206.315,171.743],[224.963,193.328],[231.735,200.758],[238.418,205.906],[241.649,205.906],[252.954,206.982],[263.721,208.598],[260.491,212.905],[254.03,213.443],[259.952,219.365],[260.491,213.981],[262.645,210.213],[263.721,212.905],[266.413,211.29],[265.336,218.827],[266.413,220.981],[256.723,224.749],[254.03,225.287],[245.417,223.134],[241.649,221.519],[229.266,213.443],[200.733,193.523],[184.581,175.219],[172.737,126.766],[164.123,163.913],[167.354,183.833],[168.43,187.064],[171.66,194.601],[176.506,209.137],[226.573,211.828],[248.109,227.44],[242.725,247.898],[230.342,253.821],[184.043,253.821],[176.506,253.821],[171.939,254.245],[171.66,255.436],[163.585,253.282],[146.358,253.821],[124.284,254.359],[123.746,255.436],[82.854,255.53],[36.556,255.125],[24.226,249.096],[19.022,228.591],[40.692,213.167],[90.782,210.913],[95.754,196.42],[99.05,188.912],[100.155,185.691],[103.559,165.801],[95.27,128.579],[83.003,176.927],[66.693,195.09],[37.986,214.759],[25.533,222.726],[21.751,224.308],[13.119,226.386],[10.432,225.824],[0.774,221.971],[1.87,219.827],[0.859,212.28],[3.537,213.919],[4.637,211.236],[6.757,215.024],[7.249,220.412],[13.222,214.542],[6.767,213.947],[3.574,209.612],[14.355,208.092],[25.67,207.113],[28.9,207.142],[35.629,202.053],[42.465,194.682],[61.301,173.261],[65.718,167.527],[68.79,159.769],[72.247,147.382],[79.061,108.462],[116.209,72.929],[110.286,50.856],[102.211,35.782],[104.364,26.63],[114.593,0.25],[147.497,1],[156.781,27.745],[159.364,30.788],[158.201,44.934],[151.24,50.683],[146.896,61.085],[156.586,84.235],[184.581,98.771]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.745097994804,0.141176000237,0.129411995411,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.960784316063,0.629434883595,0.51372551918,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":3,"cix":2,"bm":0,"ix":8,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":169,"st":0,"bm":0},{"ddd":0,"ind":6,"ty":4,"nm":"Hair_Back","parent":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[0,0,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[8,1.25],[0.25,-27.5],[1.25,-16.75],[-35.378,24.973],[7.5,12.25]],"o":[[-8,-1.25],[-0.25,27.5],[-1.157,15.507],[34,-24],[-10.256,-16.752]],"v":[[13.5,-69],[-30.5,-45.5],[-38.25,-1],[47.5,45.5],[29.5,-20.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.745097994804,0.141176000237,0.129411995411,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.015732409433,0.071019984782,0.121568627656,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[12.5,23],[32.452,4.275],[2.156,-12.245],[-1.177,-7.706],[0,-34],[-48.303,31.422],[18.981,16.04]],"o":[[-3.784,-6.962],[-15.097,-1.989],[-10.844,3.505],[5.5,36],[0,15.55],[46.5,-30.25],[-17.75,-15]],"v":[[31.5,-77.25],[-5.452,-105.775],[-38.406,-84.005],[-49,-63.5],[-53.5,1],[47.5,45.5],[46.5,-43.75]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.745097994804,0.141176000237,0.129411995411,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.039215687662,0.176470592618,0.301960796118,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 2","np":3,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false}],"ip":-66,"op":170,"st":-66,"bm":0},{"ddd":0,"ind":7,"ty":4,"nm":"Halo 2","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[270,250,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[75,75,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[300,300],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[0.5607843137254902,0.7176470588235294,0.3686274509803922,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":2,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":-78,"s":[0]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":6,"s":[60]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":90,"s":[0]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":174,"s":[60]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":258,"s":[0]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":342,"s":[60]},{"t":426,"s":[0]}],"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":26,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":-113,"op":170,"st":-65,"bm":0},{"ddd":0,"ind":8,"ty":4,"nm":"Halo","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[229.99999999999997,250,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[75,75,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[300,300],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[0.5607843137254902,0.7176470588235294,0.3686274509803922,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":2,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":-2,"s":[0]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":82,"s":[60]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":166,"s":[0]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":250,"s":[60]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":334,"s":[0]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":418,"s":[60]},{"t":502,"s":[0]}],"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":26,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":-37,"op":191,"st":11,"bm":0},{"ddd":0,"ind":9,"ty":4,"nm":"Shape Layer 1","sr":1,"ks":{"o":{"a":0,"k":20,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[250,450,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":1,"k":[{"i":{"x":[0.667,0.667],"y":[1,1]},"o":{"x":[0.333,0.333],"y":[0,0]},"t":0,"s":[243,8]},{"i":{"x":[0.667,0.667],"y":[1,1]},"o":{"x":[0.333,0.333],"y":[0,0]},"t":84,"s":[186,6]},{"t":168,"s":[243,8]}],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[0.5607843137254902,0.7176470588235294,0.3686274509803922,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.282352954149,0.282352954149,0.282352954149,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":169,"st":0,"bm":0},{"ddd":0,"ind":10,"ty":4,"nm":"Circles - 12","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":71,"ix":10},"p":{"a":0,"k":[376.898,209.72,0],"ix":2},"a":{"a":0,"k":[194.187,88.128,0],"ix":1},"s":{"a":0,"k":[-80,80,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[20,20],"ix":2},"p":{"a":1,"k":[{"i":{"x":0.575,"y":0.575},"o":{"x":0.167,"y":0.167},"t":-167,"s":[232,72],"to":[-49.639,1.418],"ti":[15,-43]},{"i":{"x":0.637,"y":0.638},"o":{"x":0.299,"y":0.299},"t":-145.421,"s":[159,168],"to":[-15,43],"ti":[-10,-61]},{"i":{"x":0.656,"y":0.656},"o":{"x":0.315,"y":0.315},"t":-122.066,"s":[73,268],"to":[10,61],"ti":[-36,37]},{"i":{"x":0.669,"y":0.669},"o":{"x":0.333,"y":0.333},"t":-87.196,"s":[253,316],"to":[36,-37],"ti":[-54.512,7.9]},{"i":{"x":0.685,"y":0.685},"o":{"x":0.345,"y":0.345},"t":-67.154,"s":[364,332],"to":[69,-10],"ti":[38,35]},{"i":{"x":0.693,"y":0.693},"o":{"x":0.354,"y":0.354},"t":-39.445,"s":[420,208],"to":[-38,-35],"ti":[46,48]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.445,"y":0.445},"t":-21.189,"s":[327,152],"to":[-38.548,-40.225],"ti":[70,-2]},{"i":{"x":0.575,"y":0.575},"o":{"x":0.167,"y":0.167},"t":1,"s":[232,72],"to":[-49.639,1.418],"ti":[15,-43]},{"i":{"x":0.637,"y":0.638},"o":{"x":0.299,"y":0.299},"t":22.579,"s":[159,168],"to":[-15,43],"ti":[-10,-61]},{"i":{"x":0.656,"y":0.656},"o":{"x":0.315,"y":0.315},"t":45.934,"s":[73,268],"to":[10,61],"ti":[-36,37]},{"i":{"x":0.669,"y":0.669},"o":{"x":0.333,"y":0.333},"t":80.804,"s":[253,316],"to":[36,-37],"ti":[-54.512,7.9]},{"i":{"x":0.685,"y":0.685},"o":{"x":0.345,"y":0.345},"t":100.846,"s":[364,332],"to":[69,-10],"ti":[38,35]},{"i":{"x":0.693,"y":0.693},"o":{"x":0.354,"y":0.354},"t":128.555,"s":[420,208],"to":[-38,-35],"ti":[46,48]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.445,"y":0.445},"t":146.811,"s":[327,152],"to":[-38.548,-40.225],"ti":[70,-2]},{"t":169,"s":[232,72]}],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[0.5607843137254902,0.7176470588235294,0.3686274509803922,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.5607843137254902,0.7176470588235294,0.3686274509803922,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[233,73],"ix":2},"a":{"a":0,"k":[233,73],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":-167,"op":191,"st":-167,"bm":0},{"ddd":0,"ind":11,"ty":4,"nm":"Circles - 11","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":71,"ix":10},"p":{"a":0,"k":[376.898,209.72,0],"ix":2},"a":{"a":0,"k":[194.187,88.128,0],"ix":1},"s":{"a":0,"k":[-80,80,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[20,20],"ix":2},"p":{"a":1,"k":[{"i":{"x":0.575,"y":0.575},"o":{"x":0.167,"y":0.167},"t":-122,"s":[232,72],"to":[-49.639,1.418],"ti":[15,-43]},{"i":{"x":0.637,"y":0.638},"o":{"x":0.299,"y":0.299},"t":-100.421,"s":[159,168],"to":[-15,43],"ti":[-10,-61]},{"i":{"x":0.656,"y":0.656},"o":{"x":0.315,"y":0.315},"t":-77.066,"s":[73,268],"to":[10,61],"ti":[-36,37]},{"i":{"x":0.669,"y":0.669},"o":{"x":0.333,"y":0.333},"t":-42.196,"s":[253,316],"to":[36,-37],"ti":[-54.512,7.9]},{"i":{"x":0.685,"y":0.685},"o":{"x":0.345,"y":0.345},"t":-22.154,"s":[364,332],"to":[69,-10],"ti":[38,35]},{"i":{"x":0.693,"y":0.693},"o":{"x":0.354,"y":0.354},"t":5.555,"s":[420,208],"to":[-38,-35],"ti":[46,48]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.445,"y":0.445},"t":23.811,"s":[327,152],"to":[-38.548,-40.225],"ti":[70,-2]},{"i":{"x":0.575,"y":0.575},"o":{"x":0.167,"y":0.167},"t":46,"s":[232,72],"to":[-49.639,1.418],"ti":[15,-43]},{"i":{"x":0.637,"y":0.638},"o":{"x":0.299,"y":0.299},"t":67.579,"s":[159,168],"to":[-15,43],"ti":[-10,-61]},{"i":{"x":0.656,"y":0.656},"o":{"x":0.315,"y":0.315},"t":90.934,"s":[73,268],"to":[10,61],"ti":[-36,37]},{"i":{"x":0.669,"y":0.669},"o":{"x":0.333,"y":0.333},"t":125.804,"s":[253,316],"to":[36,-37],"ti":[-54.512,7.9]},{"i":{"x":0.685,"y":0.685},"o":{"x":0.345,"y":0.345},"t":145.846,"s":[364,332],"to":[69,-10],"ti":[38,35]},{"i":{"x":0.693,"y":0.693},"o":{"x":0.354,"y":0.354},"t":173.555,"s":[420,208],"to":[-38,-35],"ti":[46,48]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.445,"y":0.445},"t":191.811,"s":[327,152],"to":[-38.548,-40.225],"ti":[70,-2]},{"t":214,"s":[232,72]}],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[0.5607843137254902,0.7176470588235294,0.3686274509803922,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.5607843137254902,0.7176470588235294,0.3686274509803922,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[233,73],"ix":2},"a":{"a":0,"k":[233,73],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":-122,"op":183,"st":-122,"bm":0},{"ddd":0,"ind":12,"ty":4,"nm":"Circles - 10","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":71,"ix":10},"p":{"a":0,"k":[376.898,209.72,0],"ix":2},"a":{"a":0,"k":[194.187,88.128,0],"ix":1},"s":{"a":0,"k":[-80,80,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[20,20],"ix":2},"p":{"a":1,"k":[{"i":{"x":0.575,"y":0.575},"o":{"x":0.167,"y":0.167},"t":-68,"s":[232,72],"to":[-49.639,1.418],"ti":[15,-43]},{"i":{"x":0.637,"y":0.638},"o":{"x":0.299,"y":0.299},"t":-46.421,"s":[159,168],"to":[-15,43],"ti":[-10,-61]},{"i":{"x":0.656,"y":0.656},"o":{"x":0.315,"y":0.315},"t":-23.066,"s":[73,268],"to":[10,61],"ti":[-36,37]},{"i":{"x":0.669,"y":0.669},"o":{"x":0.333,"y":0.333},"t":11.804,"s":[253,316],"to":[36,-37],"ti":[-54.512,7.9]},{"i":{"x":0.685,"y":0.685},"o":{"x":0.345,"y":0.345},"t":31.846,"s":[364,332],"to":[69,-10],"ti":[38,35]},{"i":{"x":0.693,"y":0.693},"o":{"x":0.354,"y":0.354},"t":59.555,"s":[420,208],"to":[-38,-35],"ti":[46,48]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.445,"y":0.445},"t":77.811,"s":[327,152],"to":[-38.548,-40.225],"ti":[70,-2]},{"i":{"x":0.575,"y":0.575},"o":{"x":0.167,"y":0.167},"t":100,"s":[232,72],"to":[-49.639,1.418],"ti":[15,-43]},{"i":{"x":0.637,"y":0.638},"o":{"x":0.299,"y":0.299},"t":121.579,"s":[159,168],"to":[-15,43],"ti":[-10,-61]},{"i":{"x":0.656,"y":0.656},"o":{"x":0.315,"y":0.315},"t":144.934,"s":[73,268],"to":[10,61],"ti":[-36,37]},{"i":{"x":0.669,"y":0.669},"o":{"x":0.333,"y":0.333},"t":179.804,"s":[253,316],"to":[36,-37],"ti":[-54.512,7.9]},{"i":{"x":0.685,"y":0.685},"o":{"x":0.345,"y":0.345},"t":199.846,"s":[364,332],"to":[69,-10],"ti":[38,35]},{"i":{"x":0.693,"y":0.693},"o":{"x":0.354,"y":0.354},"t":227.555,"s":[420,208],"to":[-38,-35],"ti":[46,48]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.445,"y":0.445},"t":245.811,"s":[327,152],"to":[-38.548,-40.225],"ti":[70,-2]},{"t":268,"s":[232,72]}],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[0.5607843137254902,0.7176470588235294,0.3686274509803922,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.5607843137254902,0.7176470588235294,0.3686274509803922,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[233,73],"ix":2},"a":{"a":0,"k":[233,73],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":-68,"op":179,"st":-68,"bm":0},{"ddd":0,"ind":13,"ty":4,"nm":"Circles - 9","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":129,"ix":10},"p":{"a":0,"k":[173.913,303.783,0],"ix":2},"a":{"a":0,"k":[194.187,88.128,0],"ix":1},"s":{"a":0,"k":[39,39,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[20,20],"ix":2},"p":{"a":1,"k":[{"i":{"x":0.575,"y":0.575},"o":{"x":0.167,"y":0.167},"t":-167,"s":[232,72],"to":[-49.639,1.418],"ti":[15,-43]},{"i":{"x":0.637,"y":0.638},"o":{"x":0.299,"y":0.299},"t":-145.421,"s":[159,168],"to":[-15,43],"ti":[-10,-61]},{"i":{"x":0.656,"y":0.656},"o":{"x":0.315,"y":0.315},"t":-122.066,"s":[73,268],"to":[10,61],"ti":[-36,37]},{"i":{"x":0.669,"y":0.669},"o":{"x":0.333,"y":0.333},"t":-87.196,"s":[253,316],"to":[36,-37],"ti":[-54.512,7.9]},{"i":{"x":0.685,"y":0.685},"o":{"x":0.345,"y":0.345},"t":-67.154,"s":[364,332],"to":[69,-10],"ti":[38,35]},{"i":{"x":0.693,"y":0.693},"o":{"x":0.354,"y":0.354},"t":-39.445,"s":[420,208],"to":[-38,-35],"ti":[46,48]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.445,"y":0.445},"t":-21.189,"s":[327,152],"to":[-38.548,-40.225],"ti":[70,-2]},{"i":{"x":0.575,"y":0.575},"o":{"x":0.167,"y":0.167},"t":1,"s":[232,72],"to":[-49.639,1.418],"ti":[15,-43]},{"i":{"x":0.637,"y":0.638},"o":{"x":0.299,"y":0.299},"t":22.579,"s":[159,168],"to":[-15,43],"ti":[-10,-61]},{"i":{"x":0.656,"y":0.656},"o":{"x":0.315,"y":0.315},"t":45.934,"s":[73,268],"to":[10,61],"ti":[-36,37]},{"i":{"x":0.669,"y":0.669},"o":{"x":0.333,"y":0.333},"t":80.804,"s":[253,316],"to":[36,-37],"ti":[-54.512,7.9]},{"i":{"x":0.685,"y":0.685},"o":{"x":0.345,"y":0.345},"t":100.846,"s":[364,332],"to":[69,-10],"ti":[38,35]},{"i":{"x":0.693,"y":0.693},"o":{"x":0.354,"y":0.354},"t":128.555,"s":[420,208],"to":[-38,-35],"ti":[46,48]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.445,"y":0.445},"t":146.811,"s":[327,152],"to":[-38.548,-40.225],"ti":[70,-2]},{"t":169,"s":[232,72]}],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[0.5607843137254902,0.7176470588235294,0.3686274509803922,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.5607843137254902,0.7176470588235294,0.3686274509803922,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[233,73],"ix":2},"a":{"a":0,"k":[233,73],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":-167,"op":191,"st":-167,"bm":0},{"ddd":0,"ind":14,"ty":4,"nm":"Circles - 8","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":129,"ix":10},"p":{"a":0,"k":[173.913,303.783,0],"ix":2},"a":{"a":0,"k":[194.187,88.128,0],"ix":1},"s":{"a":0,"k":[39,39,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[20,20],"ix":2},"p":{"a":1,"k":[{"i":{"x":0.575,"y":0.575},"o":{"x":0.167,"y":0.167},"t":-122,"s":[232,72],"to":[-49.639,1.418],"ti":[15,-43]},{"i":{"x":0.637,"y":0.638},"o":{"x":0.299,"y":0.299},"t":-100.421,"s":[159,168],"to":[-15,43],"ti":[-10,-61]},{"i":{"x":0.656,"y":0.656},"o":{"x":0.315,"y":0.315},"t":-77.066,"s":[73,268],"to":[10,61],"ti":[-36,37]},{"i":{"x":0.669,"y":0.669},"o":{"x":0.333,"y":0.333},"t":-42.196,"s":[253,316],"to":[36,-37],"ti":[-54.512,7.9]},{"i":{"x":0.685,"y":0.685},"o":{"x":0.345,"y":0.345},"t":-22.154,"s":[364,332],"to":[69,-10],"ti":[38,35]},{"i":{"x":0.693,"y":0.693},"o":{"x":0.354,"y":0.354},"t":5.555,"s":[420,208],"to":[-38,-35],"ti":[46,48]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.445,"y":0.445},"t":23.811,"s":[327,152],"to":[-38.548,-40.225],"ti":[70,-2]},{"i":{"x":0.575,"y":0.575},"o":{"x":0.167,"y":0.167},"t":46,"s":[232,72],"to":[-49.639,1.418],"ti":[15,-43]},{"i":{"x":0.637,"y":0.638},"o":{"x":0.299,"y":0.299},"t":67.579,"s":[159,168],"to":[-15,43],"ti":[-10,-61]},{"i":{"x":0.656,"y":0.656},"o":{"x":0.315,"y":0.315},"t":90.934,"s":[73,268],"to":[10,61],"ti":[-36,37]},{"i":{"x":0.669,"y":0.669},"o":{"x":0.333,"y":0.333},"t":125.804,"s":[253,316],"to":[36,-37],"ti":[-54.512,7.9]},{"i":{"x":0.685,"y":0.685},"o":{"x":0.345,"y":0.345},"t":145.846,"s":[364,332],"to":[69,-10],"ti":[38,35]},{"i":{"x":0.693,"y":0.693},"o":{"x":0.354,"y":0.354},"t":173.555,"s":[420,208],"to":[-38,-35],"ti":[46,48]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.445,"y":0.445},"t":191.811,"s":[327,152],"to":[-38.548,-40.225],"ti":[70,-2]},{"t":214,"s":[232,72]}],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[0.5607843137254902,0.7176470588235294,0.3686274509803922,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.5607843137254902,0.7176470588235294,0.3686274509803922,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[233,73],"ix":2},"a":{"a":0,"k":[233,73],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":-122,"op":183,"st":-122,"bm":0},{"ddd":0,"ind":15,"ty":4,"nm":"Circles - 7","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":129,"ix":10},"p":{"a":0,"k":[173.913,303.783,0],"ix":2},"a":{"a":0,"k":[194.187,88.128,0],"ix":1},"s":{"a":0,"k":[39,39,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[20,20],"ix":2},"p":{"a":1,"k":[{"i":{"x":0.575,"y":0.575},"o":{"x":0.167,"y":0.167},"t":-68,"s":[232,72],"to":[-49.639,1.418],"ti":[15,-43]},{"i":{"x":0.637,"y":0.638},"o":{"x":0.299,"y":0.299},"t":-46.421,"s":[159,168],"to":[-15,43],"ti":[-10,-61]},{"i":{"x":0.656,"y":0.656},"o":{"x":0.315,"y":0.315},"t":-23.066,"s":[73,268],"to":[10,61],"ti":[-36,37]},{"i":{"x":0.669,"y":0.669},"o":{"x":0.333,"y":0.333},"t":11.804,"s":[253,316],"to":[36,-37],"ti":[-54.512,7.9]},{"i":{"x":0.685,"y":0.685},"o":{"x":0.345,"y":0.345},"t":31.846,"s":[364,332],"to":[69,-10],"ti":[38,35]},{"i":{"x":0.693,"y":0.693},"o":{"x":0.354,"y":0.354},"t":59.555,"s":[420,208],"to":[-38,-35],"ti":[46,48]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.445,"y":0.445},"t":77.811,"s":[327,152],"to":[-38.548,-40.225],"ti":[70,-2]},{"i":{"x":0.575,"y":0.575},"o":{"x":0.167,"y":0.167},"t":100,"s":[232,72],"to":[-49.639,1.418],"ti":[15,-43]},{"i":{"x":0.637,"y":0.638},"o":{"x":0.299,"y":0.299},"t":121.579,"s":[159,168],"to":[-15,43],"ti":[-10,-61]},{"i":{"x":0.656,"y":0.656},"o":{"x":0.315,"y":0.315},"t":144.934,"s":[73,268],"to":[10,61],"ti":[-36,37]},{"i":{"x":0.669,"y":0.669},"o":{"x":0.333,"y":0.333},"t":179.804,"s":[253,316],"to":[36,-37],"ti":[-54.512,7.9]},{"i":{"x":0.685,"y":0.685},"o":{"x":0.345,"y":0.345},"t":199.846,"s":[364,332],"to":[69,-10],"ti":[38,35]},{"i":{"x":0.693,"y":0.693},"o":{"x":0.354,"y":0.354},"t":227.555,"s":[420,208],"to":[-38,-35],"ti":[46,48]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.445,"y":0.445},"t":245.811,"s":[327,152],"to":[-38.548,-40.225],"ti":[70,-2]},{"t":268,"s":[232,72]}],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[0.5607843137254902,0.7176470588235294,0.3686274509803922,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.5607843137254902,0.7176470588235294,0.3686274509803922,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[233,73],"ix":2},"a":{"a":0,"k":[233,73],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":-68,"op":179,"st":-68,"bm":0},{"ddd":0,"ind":16,"ty":4,"nm":"Circles - 6","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":66,"ix":10},"p":{"a":0,"k":[370.6,138.448,0],"ix":2},"a":{"a":0,"k":[194.187,88.128,0],"ix":1},"s":{"a":0,"k":[-28.000000000000004,28.000000000000004,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[20,20],"ix":2},"p":{"a":1,"k":[{"i":{"x":0.575,"y":0.575},"o":{"x":0.167,"y":0.167},"t":-167,"s":[232,72],"to":[-49.639,1.418],"ti":[15,-43]},{"i":{"x":0.637,"y":0.638},"o":{"x":0.299,"y":0.299},"t":-145.421,"s":[159,168],"to":[-15,43],"ti":[-10,-61]},{"i":{"x":0.656,"y":0.656},"o":{"x":0.315,"y":0.315},"t":-122.066,"s":[73,268],"to":[10,61],"ti":[-36,37]},{"i":{"x":0.669,"y":0.669},"o":{"x":0.333,"y":0.333},"t":-87.196,"s":[253,316],"to":[36,-37],"ti":[-54.512,7.9]},{"i":{"x":0.685,"y":0.685},"o":{"x":0.345,"y":0.345},"t":-67.154,"s":[364,332],"to":[69,-10],"ti":[38,35]},{"i":{"x":0.693,"y":0.693},"o":{"x":0.354,"y":0.354},"t":-39.445,"s":[420,208],"to":[-38,-35],"ti":[46,48]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.445,"y":0.445},"t":-21.189,"s":[327,152],"to":[-38.548,-40.225],"ti":[70,-2]},{"i":{"x":0.575,"y":0.575},"o":{"x":0.167,"y":0.167},"t":1,"s":[232,72],"to":[-49.639,1.418],"ti":[15,-43]},{"i":{"x":0.637,"y":0.638},"o":{"x":0.299,"y":0.299},"t":22.579,"s":[159,168],"to":[-15,43],"ti":[-10,-61]},{"i":{"x":0.656,"y":0.656},"o":{"x":0.315,"y":0.315},"t":45.934,"s":[73,268],"to":[10,61],"ti":[-36,37]},{"i":{"x":0.669,"y":0.669},"o":{"x":0.333,"y":0.333},"t":80.804,"s":[253,316],"to":[36,-37],"ti":[-54.512,7.9]},{"i":{"x":0.685,"y":0.685},"o":{"x":0.345,"y":0.345},"t":100.846,"s":[364,332],"to":[69,-10],"ti":[38,35]},{"i":{"x":0.693,"y":0.693},"o":{"x":0.354,"y":0.354},"t":128.555,"s":[420,208],"to":[-38,-35],"ti":[46,48]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.445,"y":0.445},"t":146.811,"s":[327,152],"to":[-38.548,-40.225],"ti":[70,-2]},{"t":169,"s":[232,72]}],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[0.5607843137254902,0.7176470588235294,0.3686274509803922,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.5607843137254902,0.7176470588235294,0.3686274509803922,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[233,73],"ix":2},"a":{"a":0,"k":[233,73],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":-167,"op":191,"st":-167,"bm":0},{"ddd":0,"ind":17,"ty":4,"nm":"Circles - 5","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":66,"ix":10},"p":{"a":0,"k":[370.6,138.448,0],"ix":2},"a":{"a":0,"k":[194.187,88.128,0],"ix":1},"s":{"a":0,"k":[-28.000000000000004,28.000000000000004,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[20,20],"ix":2},"p":{"a":1,"k":[{"i":{"x":0.575,"y":0.575},"o":{"x":0.167,"y":0.167},"t":-122,"s":[232,72],"to":[-49.639,1.418],"ti":[15,-43]},{"i":{"x":0.637,"y":0.638},"o":{"x":0.299,"y":0.299},"t":-100.421,"s":[159,168],"to":[-15,43],"ti":[-10,-61]},{"i":{"x":0.656,"y":0.656},"o":{"x":0.315,"y":0.315},"t":-77.066,"s":[73,268],"to":[10,61],"ti":[-36,37]},{"i":{"x":0.669,"y":0.669},"o":{"x":0.333,"y":0.333},"t":-42.196,"s":[253,316],"to":[36,-37],"ti":[-54.512,7.9]},{"i":{"x":0.685,"y":0.685},"o":{"x":0.345,"y":0.345},"t":-22.154,"s":[364,332],"to":[69,-10],"ti":[38,35]},{"i":{"x":0.693,"y":0.693},"o":{"x":0.354,"y":0.354},"t":5.555,"s":[420,208],"to":[-38,-35],"ti":[46,48]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.445,"y":0.445},"t":23.811,"s":[327,152],"to":[-38.548,-40.225],"ti":[70,-2]},{"i":{"x":0.575,"y":0.575},"o":{"x":0.167,"y":0.167},"t":46,"s":[232,72],"to":[-49.639,1.418],"ti":[15,-43]},{"i":{"x":0.637,"y":0.638},"o":{"x":0.299,"y":0.299},"t":67.579,"s":[159,168],"to":[-15,43],"ti":[-10,-61]},{"i":{"x":0.656,"y":0.656},"o":{"x":0.315,"y":0.315},"t":90.934,"s":[73,268],"to":[10,61],"ti":[-36,37]},{"i":{"x":0.669,"y":0.669},"o":{"x":0.333,"y":0.333},"t":125.804,"s":[253,316],"to":[36,-37],"ti":[-54.512,7.9]},{"i":{"x":0.685,"y":0.685},"o":{"x":0.345,"y":0.345},"t":145.846,"s":[364,332],"to":[69,-10],"ti":[38,35]},{"i":{"x":0.693,"y":0.693},"o":{"x":0.354,"y":0.354},"t":173.555,"s":[420,208],"to":[-38,-35],"ti":[46,48]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.445,"y":0.445},"t":191.811,"s":[327,152],"to":[-38.548,-40.225],"ti":[70,-2]},{"t":214,"s":[232,72]}],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[0.5607843137254902,0.7176470588235294,0.3686274509803922,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.5607843137254902,0.7176470588235294,0.3686274509803922,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[233,73],"ix":2},"a":{"a":0,"k":[233,73],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":-122,"op":183,"st":-122,"bm":0},{"ddd":0,"ind":18,"ty":4,"nm":"Circles - 4","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":66,"ix":10},"p":{"a":0,"k":[370.6,138.448,0],"ix":2},"a":{"a":0,"k":[194.187,88.128,0],"ix":1},"s":{"a":0,"k":[-28.000000000000004,28.000000000000004,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[20,20],"ix":2},"p":{"a":1,"k":[{"i":{"x":0.575,"y":0.575},"o":{"x":0.167,"y":0.167},"t":-68,"s":[232,72],"to":[-49.639,1.418],"ti":[15,-43]},{"i":{"x":0.637,"y":0.638},"o":{"x":0.299,"y":0.299},"t":-46.421,"s":[159,168],"to":[-15,43],"ti":[-10,-61]},{"i":{"x":0.656,"y":0.656},"o":{"x":0.315,"y":0.315},"t":-23.066,"s":[73,268],"to":[10,61],"ti":[-36,37]},{"i":{"x":0.669,"y":0.669},"o":{"x":0.333,"y":0.333},"t":11.804,"s":[253,316],"to":[36,-37],"ti":[-54.512,7.9]},{"i":{"x":0.685,"y":0.685},"o":{"x":0.345,"y":0.345},"t":31.846,"s":[364,332],"to":[69,-10],"ti":[38,35]},{"i":{"x":0.693,"y":0.693},"o":{"x":0.354,"y":0.354},"t":59.555,"s":[420,208],"to":[-38,-35],"ti":[46,48]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.445,"y":0.445},"t":77.811,"s":[327,152],"to":[-38.548,-40.225],"ti":[70,-2]},{"i":{"x":0.575,"y":0.575},"o":{"x":0.167,"y":0.167},"t":100,"s":[232,72],"to":[-49.639,1.418],"ti":[15,-43]},{"i":{"x":0.637,"y":0.638},"o":{"x":0.299,"y":0.299},"t":121.579,"s":[159,168],"to":[-15,43],"ti":[-10,-61]},{"i":{"x":0.656,"y":0.656},"o":{"x":0.315,"y":0.315},"t":144.934,"s":[73,268],"to":[10,61],"ti":[-36,37]},{"i":{"x":0.669,"y":0.669},"o":{"x":0.333,"y":0.333},"t":179.804,"s":[253,316],"to":[36,-37],"ti":[-54.512,7.9]},{"i":{"x":0.685,"y":0.685},"o":{"x":0.345,"y":0.345},"t":199.846,"s":[364,332],"to":[69,-10],"ti":[38,35]},{"i":{"x":0.693,"y":0.693},"o":{"x":0.354,"y":0.354},"t":227.555,"s":[420,208],"to":[-38,-35],"ti":[46,48]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.445,"y":0.445},"t":245.811,"s":[327,152],"to":[-38.548,-40.225],"ti":[70,-2]},{"t":268,"s":[232,72]}],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[0.5607843137254902,0.7176470588235294,0.3686274509803922,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.5607843137254902,0.7176470588235294,0.3686274509803922,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[233,73],"ix":2},"a":{"a":0,"k":[233,73],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":-68,"op":179,"st":-68,"bm":0},{"ddd":0,"ind":19,"ty":4,"nm":"Circles - 3","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[164.187,108.128,0],"ix":2},"a":{"a":0,"k":[194.187,88.128,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[20,20],"ix":2},"p":{"a":1,"k":[{"i":{"x":0.575,"y":0.575},"o":{"x":0.167,"y":0.167},"t":-167,"s":[232,72],"to":[-49.639,1.418],"ti":[15,-43]},{"i":{"x":0.637,"y":0.638},"o":{"x":0.299,"y":0.299},"t":-145.421,"s":[159,168],"to":[-15,43],"ti":[-10,-61]},{"i":{"x":0.656,"y":0.656},"o":{"x":0.315,"y":0.315},"t":-122.066,"s":[73,268],"to":[10,61],"ti":[-36,37]},{"i":{"x":0.669,"y":0.669},"o":{"x":0.333,"y":0.333},"t":-87.196,"s":[253,316],"to":[36,-37],"ti":[-54.512,7.9]},{"i":{"x":0.685,"y":0.685},"o":{"x":0.345,"y":0.345},"t":-67.154,"s":[364,332],"to":[69,-10],"ti":[38,35]},{"i":{"x":0.693,"y":0.693},"o":{"x":0.354,"y":0.354},"t":-39.445,"s":[420,208],"to":[-38,-35],"ti":[46,48]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.445,"y":0.445},"t":-21.189,"s":[327,152],"to":[-38.548,-40.225],"ti":[70,-2]},{"i":{"x":0.575,"y":0.575},"o":{"x":0.167,"y":0.167},"t":1,"s":[232,72],"to":[-49.639,1.418],"ti":[15,-43]},{"i":{"x":0.637,"y":0.638},"o":{"x":0.299,"y":0.299},"t":22.579,"s":[159,168],"to":[-15,43],"ti":[-10,-61]},{"i":{"x":0.656,"y":0.656},"o":{"x":0.315,"y":0.315},"t":45.934,"s":[73,268],"to":[10,61],"ti":[-36,37]},{"i":{"x":0.669,"y":0.669},"o":{"x":0.333,"y":0.333},"t":80.804,"s":[253,316],"to":[36,-37],"ti":[-54.512,7.9]},{"i":{"x":0.685,"y":0.685},"o":{"x":0.345,"y":0.345},"t":100.846,"s":[364,332],"to":[69,-10],"ti":[38,35]},{"i":{"x":0.693,"y":0.693},"o":{"x":0.354,"y":0.354},"t":128.555,"s":[420,208],"to":[-38,-35],"ti":[46,48]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.445,"y":0.445},"t":146.811,"s":[327,152],"to":[-38.548,-40.225],"ti":[70,-2]},{"t":169,"s":[232,72]}],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[0.5607843137254902,0.7176470588235294,0.3686274509803922,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.5607843137254902,0.7176470588235294,0.3686274509803922,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[233,73],"ix":2},"a":{"a":0,"k":[233,73],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":-167,"op":191,"st":-167,"bm":0},{"ddd":0,"ind":20,"ty":4,"nm":"Circles - 2","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[164.187,108.128,0],"ix":2},"a":{"a":0,"k":[194.187,88.128,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[20,20],"ix":2},"p":{"a":1,"k":[{"i":{"x":0.575,"y":0.575},"o":{"x":0.167,"y":0.167},"t":-122,"s":[232,72],"to":[-49.639,1.418],"ti":[15,-43]},{"i":{"x":0.637,"y":0.638},"o":{"x":0.299,"y":0.299},"t":-100.421,"s":[159,168],"to":[-15,43],"ti":[-10,-61]},{"i":{"x":0.656,"y":0.656},"o":{"x":0.315,"y":0.315},"t":-77.066,"s":[73,268],"to":[10,61],"ti":[-36,37]},{"i":{"x":0.669,"y":0.669},"o":{"x":0.333,"y":0.333},"t":-42.196,"s":[253,316],"to":[36,-37],"ti":[-54.512,7.9]},{"i":{"x":0.685,"y":0.685},"o":{"x":0.345,"y":0.345},"t":-22.154,"s":[364,332],"to":[69,-10],"ti":[38,35]},{"i":{"x":0.693,"y":0.693},"o":{"x":0.354,"y":0.354},"t":5.555,"s":[420,208],"to":[-38,-35],"ti":[46,48]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.445,"y":0.445},"t":23.811,"s":[327,152],"to":[-38.548,-40.225],"ti":[70,-2]},{"i":{"x":0.575,"y":0.575},"o":{"x":0.167,"y":0.167},"t":46,"s":[232,72],"to":[-49.639,1.418],"ti":[15,-43]},{"i":{"x":0.637,"y":0.638},"o":{"x":0.299,"y":0.299},"t":67.579,"s":[159,168],"to":[-15,43],"ti":[-10,-61]},{"i":{"x":0.656,"y":0.656},"o":{"x":0.315,"y":0.315},"t":90.934,"s":[73,268],"to":[10,61],"ti":[-36,37]},{"i":{"x":0.669,"y":0.669},"o":{"x":0.333,"y":0.333},"t":125.804,"s":[253,316],"to":[36,-37],"ti":[-54.512,7.9]},{"i":{"x":0.685,"y":0.685},"o":{"x":0.345,"y":0.345},"t":145.846,"s":[364,332],"to":[69,-10],"ti":[38,35]},{"i":{"x":0.693,"y":0.693},"o":{"x":0.354,"y":0.354},"t":173.555,"s":[420,208],"to":[-38,-35],"ti":[46,48]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.445,"y":0.445},"t":191.811,"s":[327,152],"to":[-38.548,-40.225],"ti":[70,-2]},{"t":214,"s":[232,72]}],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[0.5607843137254902,0.7176470588235294,0.3686274509803922,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.5607843137254902,0.7176470588235294,0.3686274509803922,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[233,73],"ix":2},"a":{"a":0,"k":[233,73],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":-122,"op":183,"st":-122,"bm":0},{"ddd":0,"ind":21,"ty":4,"nm":"Circles - 1","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[164.187,108.128,0],"ix":2},"a":{"a":0,"k":[194.187,88.128,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[20,20],"ix":2},"p":{"a":1,"k":[{"i":{"x":0.575,"y":0.575},"o":{"x":0.167,"y":0.167},"t":-68,"s":[232,72],"to":[-49.639,1.418],"ti":[15,-43]},{"i":{"x":0.637,"y":0.638},"o":{"x":0.299,"y":0.299},"t":-46.421,"s":[159,168],"to":[-15,43],"ti":[-10,-61]},{"i":{"x":0.656,"y":0.656},"o":{"x":0.315,"y":0.315},"t":-23.066,"s":[73,268],"to":[10,61],"ti":[-36,37]},{"i":{"x":0.669,"y":0.669},"o":{"x":0.333,"y":0.333},"t":11.804,"s":[253,316],"to":[36,-37],"ti":[-54.512,7.9]},{"i":{"x":0.685,"y":0.685},"o":{"x":0.345,"y":0.345},"t":31.846,"s":[364,332],"to":[69,-10],"ti":[38,35]},{"i":{"x":0.693,"y":0.693},"o":{"x":0.354,"y":0.354},"t":59.555,"s":[420,208],"to":[-38,-35],"ti":[46,48]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.445,"y":0.445},"t":77.811,"s":[327,152],"to":[-38.548,-40.225],"ti":[70,-2]},{"i":{"x":0.575,"y":0.575},"o":{"x":0.167,"y":0.167},"t":100,"s":[232,72],"to":[-49.639,1.418],"ti":[15,-43]},{"i":{"x":0.637,"y":0.638},"o":{"x":0.299,"y":0.299},"t":121.579,"s":[159,168],"to":[-15,43],"ti":[-10,-61]},{"i":{"x":0.656,"y":0.656},"o":{"x":0.315,"y":0.315},"t":144.934,"s":[73,268],"to":[10,61],"ti":[-36,37]},{"i":{"x":0.669,"y":0.669},"o":{"x":0.333,"y":0.333},"t":179.804,"s":[253,316],"to":[36,-37],"ti":[-54.512,7.9]},{"i":{"x":0.685,"y":0.685},"o":{"x":0.345,"y":0.345},"t":199.846,"s":[364,332],"to":[69,-10],"ti":[38,35]},{"i":{"x":0.693,"y":0.693},"o":{"x":0.354,"y":0.354},"t":227.555,"s":[420,208],"to":[-38,-35],"ti":[46,48]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.445,"y":0.445},"t":245.811,"s":[327,152],"to":[-38.548,-40.225],"ti":[70,-2]},{"t":268,"s":[232,72]}],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[0.5607843137254902,0.7176470588235294,0.3686274509803922,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.5607843137254902,0.7176470588235294,0.3686274509803922,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[233,73],"ix":2},"a":{"a":0,"k":[233,73],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":-68,"op":179,"st":-68,"bm":0}],"markers":[{"tm":168,"cm":"1","dr":0}]}'),
            gt = __webpack_require__(451), vt = __webpack_require__.n(gt), xt = __webpack_require__(988),
            bt = __webpack_require__.n(xt), kt = __webpack_require__(726), St = __webpack_require__.n(kt);

        function Et() {
            return Et = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            }, Et.apply(this, arguments)
        }

        function Pt(e, t) {
            return e(t = {exports: {}}, t.exports), t.exports
        }

        var wt = "function" === typeof Symbol && Symbol.for, _t = wt ? Symbol.for("react.element") : 60103,
            Ct = wt ? Symbol.for("react.portal") : 60106, At = wt ? Symbol.for("react.fragment") : 60107,
            Dt = wt ? Symbol.for("react.strict_mode") : 60108, Tt = wt ? Symbol.for("react.profiler") : 60114,
            Mt = wt ? Symbol.for("react.provider") : 60109, Ft = wt ? Symbol.for("react.context") : 60110,
            It = wt ? Symbol.for("react.async_mode") : 60111, Bt = wt ? Symbol.for("react.concurrent_mode") : 60111,
            jt = wt ? Symbol.for("react.forward_ref") : 60112, Rt = wt ? Symbol.for("react.suspense") : 60113,
            Vt = wt ? Symbol.for("react.suspense_list") : 60120, Lt = wt ? Symbol.for("react.memo") : 60115,
            Nt = wt ? Symbol.for("react.lazy") : 60116, Ot = wt ? Symbol.for("react.block") : 60121,
            zt = wt ? Symbol.for("react.fundamental") : 60117, Gt = wt ? Symbol.for("react.responder") : 60118,
            Ht = wt ? Symbol.for("react.scope") : 60119;

        function qt(e) {
            if ("object" === typeof e && null !== e) {
                var t = e.$$typeof;
                switch (t) {
                    case _t:
                        switch (e = e.type) {
                            case It:
                            case Bt:
                            case At:
                            case Tt:
                            case Dt:
                            case Rt:
                                return e;
                            default:
                                switch (e = e && e.$$typeof) {
                                    case Ft:
                                    case jt:
                                    case Nt:
                                    case Lt:
                                    case Mt:
                                        return e;
                                    default:
                                        return t
                                }
                        }
                    case Ct:
                        return t
                }
            }
        }

        function Wt(e) {
            return qt(e) === Bt
        }

        var $t = {
                AsyncMode: It,
                ConcurrentMode: Bt,
                ContextConsumer: Ft,
                ContextProvider: Mt,
                Element: _t,
                ForwardRef: jt,
                Fragment: At,
                Lazy: Nt,
                Memo: Lt,
                Portal: Ct,
                Profiler: Tt,
                StrictMode: Dt,
                Suspense: Rt,
                isAsyncMode: function (e) {
                    return Wt(e) || qt(e) === It
                },
                isConcurrentMode: Wt,
                isContextConsumer: function (e) {
                    return qt(e) === Ft
                },
                isContextProvider: function (e) {
                    return qt(e) === Mt
                },
                isElement: function (e) {
                    return "object" === typeof e && null !== e && e.$$typeof === _t
                },
                isForwardRef: function (e) {
                    return qt(e) === jt
                },
                isFragment: function (e) {
                    return qt(e) === At
                },
                isLazy: function (e) {
                    return qt(e) === Nt
                },
                isMemo: function (e) {
                    return qt(e) === Lt
                },
                isPortal: function (e) {
                    return qt(e) === Ct
                },
                isProfiler: function (e) {
                    return qt(e) === Tt
                },
                isStrictMode: function (e) {
                    return qt(e) === Dt
                },
                isSuspense: function (e) {
                    return qt(e) === Rt
                },
                isValidElementType: function (e) {
                    return "string" === typeof e || "function" === typeof e || e === At || e === Bt || e === Tt || e === Dt || e === Rt || e === Vt || "object" === typeof e && null !== e && (e.$$typeof === Nt || e.$$typeof === Lt || e.$$typeof === Mt || e.$$typeof === Ft || e.$$typeof === jt || e.$$typeof === zt || e.$$typeof === Gt || e.$$typeof === Ht || e.$$typeof === Ot)
                },
                typeOf: qt
            }, Ut = (Pt((function (e, t) {
                0
            })), Pt((function (e) {
                e.exports = $t
            })), Object.getOwnPropertySymbols), Yt = Object.prototype.hasOwnProperty,
            Qt = Object.prototype.propertyIsEnumerable;
        (function () {
            try {
                if (!Object.assign) return !1;
                var e = new String("abc");
                if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;
                for (var t = {}, r = 0; r < 10; r++) t["_" + String.fromCharCode(r)] = r;
                var n = Object.getOwnPropertyNames(t).map((function (e) {
                    return t[e]
                }));
                if ("0123456789" !== n.join("")) return !1;
                var i = {};
                return "abcdefghijklmnopqrst".split("").forEach((function (e) {
                    i[e] = e
                })), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, i)).join("")
            } catch (a) {
                return !1
            }
        })() && Object.assign;
        var Xt = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
        Function.call.bind(Object.prototype.hasOwnProperty);

        function Kt(e, t, r, n, i) {
        }

        Kt.resetWarningCache = function () {
            0
        };

        function Zt() {
        }

        function Jt() {
        }

        Jt.resetWarningCache = Zt;
        var er = Pt((function (e) {
            e.exports = function () {
                function e(e, t, r, n, i, a) {
                    if (a !== Xt) {
                        var s = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                        throw s.name = "Invariant Violation", s
                    }
                }

                function t() {
                    return e
                }

                e.isRequired = e;
                var r = {
                    array: e,
                    bigint: e,
                    bool: e,
                    func: e,
                    number: e,
                    object: e,
                    string: e,
                    symbol: e,
                    any: e,
                    arrayOf: t,
                    element: e,
                    elementType: e,
                    instanceOf: t,
                    node: e,
                    objectOf: t,
                    oneOf: t,
                    oneOfType: t,
                    shape: t,
                    exact: t,
                    checkPropTypes: Jt,
                    resetWarningCache: Zt
                };
                return r.PropTypes = r, r
            }()
        })), tr = {
            animationData: er.object,
            path: er.string,
            play: er.bool,
            goTo: er.number,
            speed: er.number,
            direction: er.number,
            loop: er.oneOfType([er.number, er.bool]),
            useSubframes: er.bool,
            segments: er.oneOfType([er.arrayOf(er.number), er.bool]),
            rendererSettings: er.object,
            renderer: er.string,
            audioFactory: er.func,
            onComplete: er.func,
            onLoopComplete: er.func,
            onEnterFrame: er.func,
            onSegmentStart: er.func
        }, rr = {
            animationData: null,
            path: null,
            play: null,
            segments: null,
            goTo: null,
            useSubframes: !0,
            speed: 1,
            direction: 1,
            loop: !0,
            rendererSettings: {},
            renderer: "svg",
            audioFactory: null,
            onLoad: function () {
            },
            onComplete: function () {
            },
            onLoopComplete: function () {
            },
            onEnterFrame: function () {
            },
            onSegmentStart: function () {
            }
        }, nr = function (e) {
            var r = e.loadAnimation, n = (0, t.memo)((0, t.forwardRef)((function (e, n) {
                var i = e.animationData, a = e.path, s = e.play, o = e.speed, l = e.direction, h = e.segments,
                    u = e.goTo, c = e.useSubframes, p = e.renderer, f = e.loop, d = e.rendererSettings,
                    m = e.audioFactory, y = e.onLoad, g = e.onComplete, v = e.onLoopComplete, x = e.onEnterFrame,
                    b = e.onSegmentStart, k = function (e, t) {
                        if (null == e) return {};
                        var r, n, i = {}, a = Object.keys(e);
                        for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) >= 0 || (i[r] = e[r]);
                        return i
                    }(e, ["animationData", "path", "play", "speed", "direction", "segments", "goTo", "useSubframes", "renderer", "loop", "rendererSettings", "audioFactory", "onLoad", "onComplete", "onLoopComplete", "onEnterFrame", "onSegmentStart"]),
                    S = (0, t.useRef)(), E = (0, t.useRef)(), P = (0, t.useState)(!1), w = P[0], _ = P[1],
                    C = (0, t.useState)(h), A = C[0], D = C[1];
                (0, t.useEffect)((function () {
                    bt()(A, h) || D(h)
                }), [h, A]);
                var T = (0, t.useState)(d), M = T[0], F = T[1];
                (0, t.useEffect)((function () {
                    bt()(M, d) || F(d)
                }), [d, M]), (0, t.useEffect)((function () {
                    return function () {
                        return E.current.removeEventListener("complete", g)
                    }
                }), [g]), (0, t.useEffect)((function () {
                    return function () {
                        return E.current.removeEventListener("loopComplete", v)
                    }
                }), [v]), (0, t.useEffect)((function () {
                    return function () {
                        return E.current.removeEventListener("enterFrame", x)
                    }
                }), [x]), (0, t.useEffect)((function () {
                    return function () {
                        return E.current.removeEventListener("segmentStart", b)
                    }
                }), [b]), (0, t.useEffect)((function () {
                    return function () {
                        return E.current.removeEventListener("DOMLoaded", y)
                    }
                }), [y]);
                var I = (0, t.useCallback)((function (e) {
                    E.current = e, n && (n.current = e)
                }), []);
                (0, t.useEffect)((function () {
                    var e = r({
                        animationData: null == i || "object" !== typeof i ? i : "object" === typeof i.default ? St()(i.default) : St()(i),
                        path: a,
                        container: S.current,
                        renderer: p,
                        loop: !1,
                        autoplay: !1,
                        rendererSettings: M,
                        audioFactory: m
                    });
                    I(e);
                    var t = function () {
                        return _(!0)
                    };
                    return E.current.addEventListener("DOMLoaded", t), function () {
                        E.current.removeEventListener("DOMLoaded", t), _(!1), E.current.destroy(), I(void 0)
                    }
                }), [f, p, M, i, a, m, I]), (0, t.useEffect)((function () {
                    E.current.addEventListener("DOMLoaded", y)
                }), [y]), (0, t.useEffect)((function () {
                    E.current.addEventListener("complete", g)
                }), [g]), (0, t.useEffect)((function () {
                    E.current.addEventListener("loopComplete", v)
                }), [v]), (0, t.useEffect)((function () {
                    E.current.addEventListener("enterFrame", x)
                }), [x]), (0, t.useEffect)((function () {
                    E.current.addEventListener("segmentStart", b)
                }), [b]), (0, t.useEffect)((function () {
                    w && (E.current.loop = f)
                }), [w, f]);
                var B = (0, t.useRef)(!1);
                return (0, t.useEffect)((function () {
                    if (w) if (!0 === s) {
                        if (A) {
                            if (E.current.playSegments(A, true), B.current = !0, -1 === l) e(A[1])
                        } else if (B.current && E.current.resetSegments(true), B.current = !1, -1 === l) e(E.current.getDuration(!0)); else E.current.play()
                    } else !1 === s && E.current.pause();

                    function e(e) {
                        E.current.goToAndPlay(e, !0), E.current.setDirection(l)
                    }
                }), [s, A, w, l]), (0, t.useEffect)((function () {
                    w && (Number.isNaN(o) || E.current.setSpeed(o))
                }), [o, w]), (0, t.useEffect)((function () {
                    w && E.current.setDirection(l)
                }), [l, w]), (0, t.useEffect)((function () {
                    if (w && null != u) {
                        s ? E.current.goToAndPlay(u, true) : E.current.goToAndStop(u, true)
                    }
                }), [u, s, w]), (0, t.useEffect)((function () {
                    E.current.setSubframe && E.current.setSubframe(c)
                }), [c]), t.createElement("div", Et({}, k, {ref: S}))
            })));
            return n.propTypes = tr, n.defaultProps = rr, n
        }(vt()), ir = nr;
        var ar = function () {
            return (0, $e.jsx)("div", {
                children: (0, $e.jsx)(ir, {
                    className: "lottie-player",
                    loop: !1,
                    animationData: yt,
                    play: !0,
                    onComplete: function () {
                        return window.location.replace("/Home")
                    }
                })
            })
        }, sr = function () {
            localStorage.clear(), window.location.href = "/"
        };
        var or = function () {
            return (0, $e.jsxs)("nav", {
                className: "navbar",
                children: [(0, $e.jsx)("h1", {children: "The Studio Management App"}), (0, $e.jsxs)("div", {
                    className: "links",
                    children: [(0, $e.jsx)(He, {
                        to: "/InstructorAttendance",
                        children: "Attendance"
                    }), (0, $e.jsx)(He, {to: "/HealthData", children: "Health Data"})]
                })]
            })
        };
        var lr = function () {
            var e = l((0, t.useState)([]), 2), r = e[0], n = e[1];
            return (0, t.useEffect)((function () {
                var e = function () {
                    var e = it(rt().mark((function e() {
                        var t, r, i;
                        return rt().wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, fetch("/users");
                                case 2:
                                    return t = e.sent, e.next = 5, t.json();
                                case 5:
                                    r = e.sent, i = Array.from(r), n(r), console.log(i);
                                case 9:
                                case"end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }();
                e()
            }), []), (0, $e.jsxs)("div", {
                children: [(0, $e.jsx)(or, {}), (0, $e.jsx)("h1", {children: "Mentor Profile"}), (0, $e.jsx)("table", {
                    children: (0, $e.jsx)("tbody", {
                        children: (0, $e.jsxs)("tr", {
                            children: [(0, $e.jsxs)("t", {
                                children: [(0, $e.jsx)("tr", {
                                    children: r.map((function (e) {
                                        return (0, $e.jsx)("td", {children: "Email: "}, e)
                                    }))
                                }), (0, $e.jsx)("tr", {
                                    children: r.map((function (e) {
                                        return (0, $e.jsx)("td", {children: "Full Name: "}, e)
                                    }))
                                }), (0, $e.jsx)("tr", {
                                    children: r.map((function (e) {
                                        return (0, $e.jsx)("td", {children: "Id: "}, e)
                                    }))
                                }), (0, $e.jsx)("tr", {
                                    children: r.map((function (e) {
                                        return (0, $e.jsx)("td", {children: "User Add: "}, e)
                                    }))
                                }), (0, $e.jsx)("tr", {
                                    children: r.map((function (e) {
                                        return (0, $e.jsx)("td", {children: "Batch ID: "}, e)
                                    }))
                                }), (0, $e.jsx)("tr", {
                                    children: r.map((function (e) {
                                        return (0, $e.jsx)("td", {children: "Birthday: "}, e)
                                    }))
                                }), (0, $e.jsx)("tr", {
                                    children: r.map((function (e) {
                                        return (0, $e.jsx)("td", {children: "City: "}, e)
                                    }))
                                }), (0, $e.jsx)("tr", {
                                    children: r.map((function (e) {
                                        return (0, $e.jsx)("td", {children: "Emergency Mobile: "}, e)
                                    }))
                                }), (0, $e.jsx)("tr", {
                                    children: r.map((function (e) {
                                        return (0, $e.jsx)("td", {children: "Mobile: "}, e)
                                    }))
                                }), (0, $e.jsx)("tr", {
                                    children: r.map((function (e) {
                                        return (0, $e.jsx)("td", {children: "Username: "}, e)
                                    }))
                                }), (0, $e.jsx)("tr", {
                                    children: r.map((function (e) {
                                        return (0, $e.jsx)("td", {children: "PinCode: "}, e)
                                    }))
                                }), (0, $e.jsx)("tr", {
                                    children: r.map((function (e) {
                                        return (0, $e.jsx)("td", {children: "Role: "}, e)
                                    }))
                                }), (0, $e.jsx)("tr", {
                                    children: r.map((function (e) {
                                        return (0, $e.jsx)("td", {children: "website: "}, e)
                                    }))
                                })]
                            }), (0, $e.jsxs)("td", {
                                children: [(0, $e.jsx)("tr", {
                                    children: r.map((function (e) {
                                        return (0, $e.jsx)("td", {children: e.email}, e)
                                    }))
                                }), (0, $e.jsx)("tr", {
                                    children: r.map((function (e) {
                                        return (0, $e.jsx)("td", {children: e.fullname}, e)
                                    }))
                                }), (0, $e.jsx)("tr", {
                                    children: r.map((function (e) {
                                        return (0, $e.jsx)("td", {children: e.id}, e)
                                    }))
                                }), (0, $e.jsx)("tr", {
                                    children: r.map((function (e) {
                                        return (0, $e.jsx)("td", {children: e.userAdd}, e)
                                    }))
                                }), (0, $e.jsx)("tr", {
                                    children: r.map((function (e) {
                                        return (0, $e.jsx)("td", {children: e.userBatchID}, e)
                                    }))
                                }), (0, $e.jsx)("tr", {
                                    children: r.map((function (e) {
                                        return (0, $e.jsx)("td", {children: e.userBirthday}, e)
                                    }))
                                }), (0, $e.jsx)("tr", {
                                    children: r.map((function (e) {
                                        return (0, $e.jsx)("td", {children: e.userCity}, e)
                                    }))
                                }), (0, $e.jsx)("tr", {
                                    children: r.map((function (e) {
                                        return (0, $e.jsx)("td", {children: e.userEmergencyMobile}, e)
                                    }))
                                }), (0, $e.jsx)("tr", {
                                    children: r.map((function (e) {
                                        return (0, $e.jsx)("td", {children: e.userMobile}, e)
                                    }))
                                }), (0, $e.jsx)("tr", {
                                    children: r.map((function (e) {
                                        return (0, $e.jsx)("td", {children: e.username}, e)
                                    }))
                                }), (0, $e.jsx)("tr", {
                                    children: r.map((function (e) {
                                        return (0, $e.jsx)("td", {children: e.userPinCode}, e)
                                    }))
                                }), (0, $e.jsx)("tr", {
                                    children: r.map((function (e) {
                                        return (0, $e.jsx)("td", {children: e.userRole}, e)
                                    }))
                                }), (0, $e.jsx)("tr", {
                                    children: r.map((function (e) {
                                        return (0, $e.jsx)("td", {children: e.website}, e)
                                    }))
                                })]
                            })]
                        })
                    })
                })]
            })
        };
        var hr = function () {
            return (0, $e.jsxs)("div", {
                children: [(0, $e.jsx)(or, {}), (0, $e.jsx)("form", {
                    name: "healthData", action: "/healthData", method: "post", children: (0, $e.jsxs)("div", {
                        className: "container",
                        children: [(0, $e.jsx)("div", {
                            className: "container",
                            children: (0, $e.jsxs)("div", {
                                className: "pinkFont",
                                children: [(0, $e.jsx)("h1", {children: "Take Health Data"}), (0, $e.jsx)("hr", {})]
                            })
                        }), (0, $e.jsx)("label", {
                            htmlFor: "username",
                            children: (0, $e.jsx)("b", {children: "Username"})
                        }), (0, $e.jsx)("input", {
                            type: "text",
                            placeholder: "Enter Username",
                            name: "username",
                            id: "username",
                            required: !0
                        }), (0, $e.jsx)("label", {
                            htmlFor: "height",
                            children: (0, $e.jsx)("b", {children: "Height"})
                        }), (0, $e.jsx)("input", {
                            type: "number",
                            placeholder: "Enter Height",
                            name: "height",
                            id: "height",
                            required: !0
                        }), (0, $e.jsx)("label", {
                            htmlFor: "weight",
                            children: (0, $e.jsx)("b", {children: "Weight"})
                        }), (0, $e.jsx)("input", {
                            type: "number",
                            placeholder: "Enter Weight",
                            name: "weight",
                            id: "weight",
                            required: !0
                        }), (0, $e.jsx)("label", {
                            htmlFor: "remarks",
                            children: (0, $e.jsx)("b", {children: "Remarks"})
                        }), (0, $e.jsx)("input", {
                            type: "textarea",
                            placeholder: "Enter Remarks",
                            name: "remarks",
                            id: "remarks",
                            required: !0
                        }), (0, $e.jsx)("button", {type: "submit", className: "registerbtn", children: "Submit"})]
                    })
                })]
            })
        };
        var ur = function () {
            var e = l((0, t.useState)("Female"), 2), r = e[0], n = e[1], i = function (e) {
                n(e.target.value)
            };
            return (0, $e.jsxs)("div", {
                children: [(0, $e.jsx)(Ue, {}), (0, $e.jsxs)("form", {
                    name: "Inquiry",
                    onSubmit: "/inquiry",
                    method: "post",
                    children: [(0, $e.jsx)("label", {
                        htmlFor: "fullname",
                        children: (0, $e.jsx)("b", {children: "Full Name"})
                    }), (0, $e.jsx)("input", {
                        type: "text",
                        placeholder: "Enter Your Full Name",
                        name: "fullname",
                        id: "fullname",
                        required: !0
                    }), (0, $e.jsx)("label", {
                        htmlFor: "age",
                        children: (0, $e.jsx)("b", {children: "Age"})
                    }), (0, $e.jsx)("input", {
                        type: "number",
                        placeholder: "Enter Your Age",
                        name: "age",
                        id: "age",
                        required: !0
                    }), (0, $e.jsx)("label", {
                        htmlFor: "gender",
                        children: (0, $e.jsx)("b", {children: "Gender"})
                    }), (0, $e.jsxs)("div", {
                        className: "container",
                        children: [(0, $e.jsx)("input", {
                            type: "radio",
                            name: "gender",
                            value: "Male",
                            id: "Male",
                            checked: "Male" === r,
                            onChange: i
                        }), (0, $e.jsx)("label", {
                            htmlFor: "Male",
                            children: "Male"
                        }), (0, $e.jsx)("input", {
                            type: "radio",
                            name: "gender",
                            value: "Female",
                            id: "Female",
                            checked: "Female" === r,
                            onChange: i
                        }), (0, $e.jsx)("label", {
                            htmlFor: "Female",
                            children: "Female"
                        }), (0, $e.jsx)("input", {
                            type: "radio",
                            name: "gender",
                            value: "Other",
                            id: "Other",
                            checked: "Other" === r,
                            onChange: i
                        }), (0, $e.jsx)("label", {
                            htmlFor: "Other",
                            children: "Other"
                        }), (0, $e.jsxs)("p", {children: ["Selected gender ", (0, $e.jsx)("strong", {children: r})]})]
                    }), (0, $e.jsx)("label", {
                        htmlFor: "reason",
                        children: (0, $e.jsx)("b", {children: "Reason For Joining Yoga"})
                    }), (0, $e.jsx)("input", {
                        type: "textarea",
                        placeholder: "Enter Reason",
                        name: "reason",
                        id: "reason",
                        required: !0
                    }), (0, $e.jsx)("label", {
                        htmlFor: "yes",
                        children: (0, $e.jsx)("b", {children: "Have you been practising yoga lately?"})
                    }), (0, $e.jsx)("input", {
                        type: "text",
                        placeholder: "Enter Your Answer",
                        name: "doneyoga",
                        id: "doneyoga",
                        required: !0
                    }), (0, $e.jsx)("label", {
                        htmlFor: "yes",
                        children: (0, $e.jsx)("b", {children: 'If the answer is "YES," where and how long have you been trying to practice?'})
                    }), (0, $e.jsx)("input", {
                        type: "text",
                        placeholder: "Enter Your Answer",
                        name: "yes",
                        id: "yes",
                        required: !0
                    }), (0, $e.jsx)("label", {
                        htmlFor: "userMobile",
                        children: (0, $e.jsx)("b", {children: "Mobile Number"})
                    }), (0, $e.jsx)("input", {
                        type: "number",
                        placeholder: "Enter Your Mobile Number",
                        name: "userMobile",
                        id: "userMobile",
                        required: !0
                    }), (0, $e.jsx)("label", {
                        htmlFor: "illness",
                        children: (0, $e.jsx)("b", {children: "Any illness or discomfort?"})
                    }), (0, $e.jsx)("input", {
                        type: "text",
                        placeholder: "Enter Your Answer",
                        name: "illness",
                        id: "illness",
                        required: !0
                    }), (0, $e.jsx)("label", {
                        htmlFor: "reference",
                        children: (0, $e.jsx)("b", {children: "Reference: - Social Media / Print Media / Other?"})
                    }), (0, $e.jsx)("input", {
                        type: "text",
                        placeholder: "Enter Your Reference",
                        name: "reference",
                        id: "reference",
                        required: !0
                    }), (0, $e.jsxs)("p", {
                        children: ["On Submitting you agreeing to our ", (0, $e.jsx)(He, {
                            to: "",
                            children: "Terms & Condition"
                        }), "."]
                    }), (0, $e.jsx)("button", {type: "submit", className: "registerbtn", children: "Submit"})]
                })]
            })
        };
        var cr = function () {
            return (0, $e.jsx)(ze, {
                children: (0, $e.jsx)("div", {
                    className: "container", children: (0, $e.jsx)("div", {
                        className: "container", children: (0, $e.jsxs)(je, {
                            children: [(0, $e.jsx)(Ie, {
                                exact: !0,
                                path: "/",
                                element: (0, $e.jsx)(ar, {})
                            }), (0, $e.jsx)(Ie, {
                                path: "/Home",
                                element: (0, $e.jsx)(Ye, {})
                            }), (0, $e.jsx)(Ie, {
                                exact: !0,
                                path: "/compregis",
                                element: (0, $e.jsx)(Qe, {})
                            }), (0, $e.jsx)(Ie, {
                                exact: !0,
                                path: "/userregis",
                                element: (0, $e.jsx)(Ze, {})
                            }), (0, $e.jsx)(Ie, {
                                path: "/complogin",
                                element: (0, $e.jsx)(Ke, {})
                            }), (0, $e.jsx)(Ie, {
                                path: "/userlogin",
                                element: (0, $e.jsx)(Je, {})
                            }), (0, $e.jsx)(Ie, {
                                path: "/dashboard",
                                element: (0, $e.jsx)(tt, {})
                            }), (0, $e.jsx)(Ie, {
                                path: "/userLogin",
                                element: (0, $e.jsx)(Je, {})
                            }), (0, $e.jsx)(Ie, {
                                path: "/UserHome",
                                element: (0, $e.jsx)(tt, {})
                            }), (0, $e.jsx)(Ie, {
                                path: "/profile",
                                element: (0, $e.jsx)(at, {})
                            }), (0, $e.jsx)(Ie, {
                                path: "/attendance",
                                element: (0, $e.jsx)(ft, {})
                            }), (0, $e.jsx)(Ie, {
                                path: "/incorrectPassword",
                                element: (0, $e.jsx)(dt, {})
                            }), (0, $e.jsx)(Ie, {
                                path: "/fdDashboard",
                                element: (0, $e.jsx)(mt, {})
                            }), (0, $e.jsx)(Ie, {
                                path: "/mentorDash",
                                element: (0, $e.jsx)(lr, {})
                            }), (0, $e.jsx)(Ie, {
                                path: "/logout",
                                element: (0, $e.jsx)(sr, {})
                            }), (0, $e.jsx)(Ie, {
                                path: "/HealthData",
                                element: (0, $e.jsx)(hr, {})
                            }), (0, $e.jsx)(Ie, {
                                path: "/inquiry",
                                element: (0, $e.jsx)(ur, {})
                            }), (0, $e.jsx)(Ie, {path: "*", element: (0, $e.jsx)(Xe, {})})]
                        })
                    })
                })
            })
        }, pr = function (e) {
            e && e instanceof Function && __webpack_require__.e(47).then(__webpack_require__.bind(__webpack_require__, 47)).then((function (t) {
                var r = t.getCLS, n = t.getFID, i = t.getFCP, a = t.getLCP, s = t.getTTFB;
                r(e), n(e), i(e), a(e), s(e)
            }))
        };
        n.createRoot(document.getElementById("root")).render((0, $e.jsx)(t.StrictMode, {children: (0, $e.jsx)(cr, {})})), pr()
    }()
})();
//# sourceMappingURL=main.a4c16a93.js.map
