﻿(function () {
    var rootWin = this;
    var runonce = false;
    this.Crystalize = {
        script: {},
        result: [],
        conf: function () {
            return {
                all: internal.globalSettings,
                api: app._api
            }
        },
        all: function (e) {
            $.extend(internal.globalSettings, e)
        },
        ver: function () {
            return internal.CURRENT_VERSION
        },
        _api: {},
        make: function () {
            return new internal.ScenarioObject
        },
        dom: function (e) {
            return internal.createNewElement(e)
        },
        stat: function () {
            return {
                connection: internal.conn
            }
        },
        reset: function (e) {
            if (typeof e === "function") {
                e()
            }
            app.result = [];
            internal = new InternalFactory(this);
            app._api = (new internal.CreateAPI).api;
            app.result = []
        },
        begin: function (e) {
            if (internal.executed === true) return;
            var t = function (e, t) {
                for (var n in e) {
                    for (var r in e[n]) {
                        if (r !== "__type__") {
                            if (r === "class") {
                                $(e[n]["__type__"] + n).addClass(e[n][r])
                            } else {
                                internal.globalSettings.addAttr(e[n]["__type__"] + n, r, e[n][r])
                            }
                        }
                    }
                }
                if (t === true) {
                    for (var n in CRYSTAL_MOCKS) {
                        for (var r in CRYSTAL_MOCKS[n]) {
                            if (r !== "__type__") {
                                internal.globalSettings.addAttr(CRYSTAL_MOCKS[n]["__type__"] + n, app._api.xstal_mocked.n, "true");
                                internal.globalSettings.setMockUpTable(CRYSTAL_MOCKS[n]["__type__"] + n, r, CRYSTAL_MOCKS[n][r])
                            }
                        }
                    }
                }
            };
            try {
                if (CRYSTAL_SCRIPT) {
                    if (Object.keys(CRYSTAL_SCRIPT).length !== 0) {
                        app.script = CRYSTAL_SCRIPT;
                        if (runonce === false) {
                            runonce = true;
                            try {
                                if (CRYSTAL_MOCKS) {
                                    t(app.script, true)
                                }
                            } catch (n) {
                                t(app.script, false)
                            }
                        }
                    }
                }
            } catch (r) {
                console.log("no config file supp")
            }
            internal.executed = true;
            internal.globalSettings.whenAllStart();
            var i = function (t) {
                var n = internal.getAttr(t, app._api.xstal_runonload);
                internal.globalSettings.whenEventInvocking();
                var r = internal.QueryDom(e, t);
                var i = {
                    async: internal.getAttr(t, app._api.xstal_isasync),
                    url: internal.getAttr(t, app._api.xstal_add),
                    data: {
                        request: [internal.getAttr(t, app._api.xstal_function), r]
                    },
                    contentType: internal.globalSettings.contentType,
                    dataType: internal.globalSettings.dataType,
                    type: internal.globalSettings.type,
                    timeout: parseInt(internal.getAttr(t, app._api.xstal_timeout), 10),
                    success: function (e, n, r) {
                        internal.globalSettings.wholeInternalHandler(t, "success", e, n, r)
                    },
                    error: function (e, n, r) {
                        internal.globalSettings.wholeInternalHandler(t, "error", r, n, e)
                    }
                };
                if (internal.globalSettings.forceSynchronousOnAllAjaxCalls === true) {
                    i.async = false
                } else {
                    if (i.async === "true") {
                        i.async = true
                    } else {
                        i.async = false
                    }
                }
                var o = {};
                o = new function () {
                    this.async = i.async;
                    this.url = i.url;
                    this.responseTime = i.timeout;
                    this.dataType = i.dataType;
                    this.response = i.success;
                    this.contentType = "text/json";
                    this.responseText = internal.globalSettings.resposeOfNoRequest
                };
                if (internal.globalSettings.forceMockAllAjaxCalls === true) {
                    s(internal.globalSettings.MockingFxMethod, o)
                } else if (internal.getAttr(t, app._api.xstal_test) === "true") {
                    s(internal.globalSettings.MockingFxMethod, o)
                }
                var u = {};
                if (internal.globalSettings.dontMakeJQAjaxCall === false) {
                    internal.globalSettings.readyToAjaxcall();
                    if (internal.getAttr(t, app._api.xstal_mocked) === "false") {
                        u = internal.globalSettings.xmockajax(i, true)
                    } else {
                        u = internal.globalSettings.xmockajax(i, false, t, true)
                    }
                } else {
                    internal.conn = false;
                    u = {
                        responseText: internal.globalSettings.resposeOfNoRequest
                    }
                }
                internal.globalSettings.whenEventInvocked();
                return {
                    response: u,
                    connection: internal.conn,
                    ranOnLoad: n,
                    assync: i.async,
                    element: t,
                    request: i,
                    settings: app.conf()
                }
            };
            var s = function (e, t) {
                internal.conn = false;
                internal.globalSettings.whenMockSet();
                e(t)
            };
            var o = {};
            return function () {
                $(app._api.xstal_master_class.v).each(function () {
                    internal.globalSettings.whenEachStart();
                    $(this).on(internal.getAttr(this, app._api.xstal_event), function (e) {
                        e.stopPropagation();
                        return i(this)
                    });
                    o = this;
                    internal.globalSettings.whenEventMade();
                    var e = false;
                    if (internal.globalSettings.execAllEventOnLoad === true) {
                        e = true
                    } else if (internal.getAttr(this, app._api.xstal_runonload) === "true") {
                        e = true
                    }
                    if (e === true) {
                        app.result.push(i(this))
                    }
                    internal.globalSettings.whenEachStop()
                });
                internal.globalSettings.whenAllStop();
                return app.result
            }()
        }
    };
    var app = rootWin.Crystalize;
    var InternalFactory = function (that) {
        that.app = that.Crystalize;
        var within = this;
        this.CreateAPI = function () {
            this.api = {
                xstal_group_master: {
                    n: "xstal-group-master",
                    v: "oxstal_group_master"
                },
                xstal_master_class: {
                    n: ".xstal-master",
                    v: ".xstal-master"
                },
                xstal_group: {
                    n: "xstal-group",
                    v: "oxstal_group"
                },
                xstal_ret: {
                    n: "xstal-ret",
                    v: "oxstal_ret=html"
                },
                xstal_isasync: {
                    n: "xstal-isasync",
                    v: "false"
                },
                xstal_add: {
                    n: "xstal-add",
                    v: "/oxstal_add"
                },
                xstal_function: {
                    n: "xstal-function",
                    v: "oxstal_function"
                },
                xstal_event: {
                    n: "xstal-event",
                    v: "click"
                },
                xstal_querySeparator: {
                    n: "=",
                    v: "="
                },
                xstal_test: {
                    n: "xstal-test",
                    v: "false"
                },
                xstal_group_separator: {
                    n: ",",
                    v: ","
                },
                xstal_pre: {
                    n: "xstal-pre",
                    v: "oxstal_pre"
                },
                xstal_pos: {
                    n: "xstal-pos",
                    v: "oxstal_pos"
                },
                xstal_runonload: {
                    n: "xstal-runonload",
                    v: "false"
                },
                xstal_timeout: {
                    n: "xstal-timeout",
                    v: "2000"
                },
                xstal_ajaxresult: {
                    n: "xstal-ajaxresult",
                    v: ""
                },
                xstal_mocked: {
                    n: "xstal-mocked",
                    v: "false"
                }
            }
        };
        this.createNewElement = function (e) {
            var t = "<" + e.type + '  class="' + app._api.xstal_master_class.n.replace(".", "") + '"  ';
            t += "  " + app._api.xstal_group_master.n + '="' + e.oxstal_group_master + '"  ';
            t += "  " + app._api.xstal_group.n + '="' + e.oxstal_group + '"  ';
            t += "  " + app._api.xstal_ret.n + '="' + e.oxstal_ret + '"  ';
            t += "  " + app._api.xstal_isasync.n + '="' + e.oxstal_isasync + '"  ';
            t += "  " + app._api.xstal_add.n + '="' + e.oxstal_add + '"  ';
            t += "  " + app._api.xstal_function.n + '="' + e.oxstal_function + '"  ';
            t += "  " + app._api.xstal_event.n + '="' + e.oxstal_event + '"  ';
            t += "  " + app._api.xstal_test.n + '="' + e.oxstal_test + '"  ';
            t += "  " + app._api.xstal_pre.n + '="' + e.oxstal_pre + '"  ';
            t += "  " + app._api.xstal_pos.n + '="' + e.oxstal_pos + '"  ';
            t += "  " + app._api.xstal_runonload.n + '="' + e.oxstal_runonload + '"  ';
            t += "  " + app._api.xstal_timeout.n + '="' + e.oxstal_timeout + '"  ';
            t += "   " + app._api.xstal_ajaxresult.n + '="' + e.oxstal_ajaxresult + '"   ';
            t += "   " + app._api.xstal_mocked.n + '="' + e.xstal_mocked + '"   ';
            var n = "  >" + e.obody + "</" + e.type + "  >";
            return t + " " + n
        };
        this.CURRENT_VERSION = "1.0.0";
        this.ScenarioObject = function () {
            this.type = "div";
            this.obody = "body";
            this.oxstal_group_master = app._api.xstal_group_master.v;
            this.oxstal_group = app._api.xstal_group.v;
            this.oxstal_ret = app._api.xstal_ret.v;
            this.oxstal_isasync = app._api.xstal_isasync.v;
            this.oxstal_add = app._api.xstal_add.v;
            this.oxstal_function = app._api.xstal_function.v;
            this.oxstal_event = app._api.xstal_event.v;
            this.oxstal_test = app._api.xstal_test.v;
            this.oxstal_pre = app._api.xstal_pre.v;
            this.oxstal_pos = app._api.xstal_pos.v;
            this.oxstal_runonload = app._api.xstal_runonload.v;
            this.oxstal_timeout = app._api.xstal_timeout.v;
            this.oxstal_ajaxresult = app._api.xstal_ajaxresult.v;
            this.oxstal_mocked = app._api.xstal_mocked.v
        };
        this.mockFunction = function (e) { };
        this.mockMock = function (e) {
            conn = true
        };
        this.globalSettings = {
            dontMakeJQAjaxCall: false,
            forceSynchronousOnAllAjaxCalls: false,
            forceMockAllAjaxCalls: false,
            execAllEventOnLoad: false,
            resposeOfNoRequest: {},
            MockingFxMethod: within.mockMock,
            whenEventInvocking: within.mockFunction,
            whenEventInvocked: within.mockFunction,
            whenAllStart: within.mockFunction,
            whenAllStop: within.mockFunction,
            whenEachStart: within.mockFunction,
            whenEachStop: within.mockFunction,
            whenMockSet: within.mockFunction,
            whenEventMade: within.mockFunction,
            readyToAjaxcall: within.mockFunction,
            mockLookUpTable: [],
            setMockUpTable: function (e, t, n) {
                internal.globalSettings.mockLookUpTable.push({
                    r: e,
                    n: t,
                    v: n
                })
            },
            getMockFromMockUpTable: function () { },
            xmockajax: function (e, t, n, r, i) {
                if (t === true) {
                    return $.ajax(e)
                } else {
                    if (i === undefined) {
                        i = {};
                        var s = internal.globalSettings.mockLookUpTable;
                        var o = s.length;
                        for (var u = 0; u < o; u++) {
                            if (!$(n).hasClass(s[u].r.replace(".", ""))) { } else if (!$(n).attr("id") === s[u].r.replace("#", "")) { } else {
                                i[s[u].n] = s[u].v
                            }
                        }
                    }
                    if (r === true) {
                        e.success(JSON.stringify(i), "", "")
                    } else {
                        e.error("", "", "")
                    }
                    return {
                        response: JSON.stringify(i)
                    }
                }
            },
            evalAFunction: function (x, y) {
                eval("try{" + x + "('" + y + "');}catch(e){}")
            },
            alertFunction: function (e) {
                alert(e)
            },
            confirmFunction: function (e) {
                return confirm(e)
            },
            invokeDomManipFunction: function (e, t, n) {
                $(e)[t](n)
            },
            wholeInternalHandler: function (e, t, n, r, i) {
                var s = {
                    status: t,
                    textStatus: r,
                    data: n,
                    JqXHR: i
                };
                var o = internal.getAttr(e, app._api.xstal_ajaxresult);
                if (o !== "") {
                    var u = o.split(";");
                    var a = u.length;
                    for (var f = 0; f < a; f++) {
                        var l = u[f];
                        var c = l.replace("*", "");
                        var h = c.split(",");
                        var p, d, v, m, g = "";
                        p = n;
                        d = h[0];
                        v = h[1];
                        m = h[2];
                        g = h[3];
                        if (l.contains("*")) {
                            internal.globalSettings.internalHandler(n, h[0], h[1], h[2], h[3])
                        } else {
                            if (t === "error") {
                                internal.globalSettings.evalAFunction(l, n)
                            } else {
                                internal.globalSettings.evalAFunction(l, n)
                            }
                        }
                    }
                }
            },
            internalHandler: function (e, t, n, r, i) {
                if (t !== undefined) {
                    if (t === "alert") {
                        internal.globalSettings.Handlers.alertP(e, n, r, i)
                    } else if (t === "confirm") {
                        internal.globalSettings.Handlers.confirmP(e, n, r, i)
                    } else if (t === "in") {
                        internal.globalSettings.Handlers.inP(e, n, r, i)
                    }
                }
            },
            Handlers: {
                alertP: function (e, t, n, r) {
                    if (t === undefined) {
                        internal.globalSettings.alertFunction(e)
                    } else if (t.contains("=")) {
                        var i = t.split("=");
                        var s = $.parseJSON(e);
                        internal.globalSettings.alertFunction(s[i[1]])
                    }
                },
                confirmP: function (e, t, n, r) {
                    var i = true;
                    if (t !== undefined) {
                        if (t.contains("=")) {
                            var s = t.split("=");
                            var o = $.parseJSON(e);
                            i = internal.globalSettings.confirmFunction(o[s[1]])
                        } else {
                            i = internal.globalSettings.confirmFunction(e)
                        }
                    }
                    if (i === true) {
                        if (t !== undefined) {
                            internal.globalSettings.evalAFunction(t, e)
                        }
                    } else if (n !== undefined) {
                        internal.globalSettings.evalAFunction(n, e)
                    }
                },
                inP: function (e, t, n, r) {
                    if (t !== undefined) {
                        if (n !== undefined) {
                            if (n.contains("=")) {
                                var i = n.split("=");
                                var s = $.parseJSON(e);
                                internal.globalSettings.invokeDomManipFunction(t, i[0], s[i[1]])
                            } else {
                                internal.globalSettings.invokeDomManipFunction(t, n, e)
                            }
                        }
                    }
                }
            },
            addAttr: function (e, t, n) {
                $(e).attr(t, n)
            },
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            dataType: "text",
            type: "POST"
        };
        this.executed = false;
        this.conn = true;
        this.extractDom = function (e, t) {
            var n = within.getAttr(t, app._api.xstal_ret).split(app._api.xstal_querySeparator.n);
            var r = {};
            if (n[1] !== "attr") {
                r = $(t)[n[1]]()
            } else {
                if (n[2] !== "css") {
                    r = $(t).attr(n[2])
                } else {
                    r = $(t).css(n[3])
                }
            }
            e[n[0]] = r
        };
        this.QueryDom = function (e, t) {
            var n = {};
            $(e).each(function () {
                if (within.IsInGroup(this, t) === true) {
                    within.extractDom(n, this)
                }
            });
            return n
        };
        this.IsInGroup = function (e, t, n) {
            var r = within.getAttr(t, app._api.xstal_group_master);
            var i = within.getAttr(e, app._api.xstal_group);
            if (i === undefined) {
                return false
            }
            if (r === undefined) {
                return false
            }
            var s = r.split(app._api.xstal_group_separator.n);
            var o = i.split(app._api.xstal_group_separator.n);
            var u = o.length;
            var a = s.length;
            for (var f = 0; f < u; f++) {
                for (var l = 0; l < a; l++) {
                    if (s[l] === o[f]) {
                        return true
                    }
                }
            }
            return false
        };
        this.getAttr = function (e, t) {
            var n = $(e).attr("data-" + t.n);
            if (n === undefined || n.trim() === "") {
                n = $(e).attr(t.n)
            }
            if (n === undefined || n.trim() === "") {
                return t.v
            }
            return n
        }
    };
    var internal = new InternalFactory(rootWin);
    app._api = (new internal.CreateAPI).api;
    rootWin.Crystalize.begin("*")
}).call(this)