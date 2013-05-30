
(function () {
    var rootWin = this;
    var runonce = false;
    this.Crystalize = {

        script: {

        },

        result: [],

        conf: function () {
            return {
                all: internal.globalSettings,
                api: app._api
            };
        },

        all: function (g) {
            $.extend(internal.globalSettings, g);
        },

        ver: function () {
            return internal.CURRENT_VERSION;
        },

        _api: {},

        make: function () {
            return new internal.ScenarioObject();
        },

        dom: function (o) {
            return internal.createNewElement(o);
        },

        stat: function () {
            return {
                connection: internal.conn
            };
        },

        reset: function (mockClearFunction) {
            if (typeof mockClearFunction === "function") {
                mockClearFunction();
            }

            app.result = [];
            internal = new InternalFactory(this);
            app._api = new internal.CreateAPI().api;
            app.result = [];
        },

        begin: function (selector) {

            if (internal.executed === true)
                return;

            var runScript = function (scr, test) {
                for (var ea in scr) {
                    for (var eb in scr[ea]) {

                        if (eb !== "__type__") {
                            if (eb === "class") {
                                $(scr[ea]["__type__"] + ea).addClass(scr[ea][eb]);
                            } else {

                                internal.globalSettings.addAttr(scr[ea]["__type__"] + ea, eb, scr[ea][eb]);
                                if (test === true) {// mock exist
                                   
                                    if (eb === app._api.xstal_mocked.n)
                                    {
                                        if (scr[ea][eb] !== app._api.xstal_mocked.v) {
                                            var theDtoName = scr[ea][eb];
                                            var atty="";
                                            for (var eam in CRYSTAL_MOCKS) {
                                                if (eam === theDtoName) {
                                                    for (var ebm in CRYSTAL_MOCKS[eam]) {
                                                        atty = atty + ebm + "=" + CRYSTAL_MOCKS[eam][ebm] + ";";
                                                    }
                                                }
                                            }

                                            internal.globalSettings.addAttr(scr[ea]["__type__"] + ea,app._api.xstal_mocked_prefix.n , atty);


                                        }
                                    }
                                }
                            }
                        }

                    }
                }

            }
          
            //determine if object exist to fix- todo
            try{
                if (CRYSTAL_SCRIPT){
                    if (Object.keys(CRYSTAL_SCRIPT).length !== 0) {
                        app.script = CRYSTAL_SCRIPT;
                        if (runonce === false) {
                            runonce = true;
                            try{
                                if (CRYSTAL_MOCKS) {
                                    runScript(app.script,true);
                                }
                            }catch(ft){
                                runScript(app.script, false);
                            }
                        }
                    }
                }
            }
            catch (fu) {
                console.log("no config file supp");
            }



            internal.executed = true;

            internal.globalSettings.whenAllStart();

            var createRequestObject = function (othat) {
                var runOnLoad = internal.getAttr(othat, app._api.xstal_runonload);
                internal.globalSettings.whenEventInvocking();
                var parame = internal.QueryDom(selector, othat);


                var a_obj = {
                    async: internal.getAttr(othat, app._api.xstal_isasync),
                    url: internal.getAttr(othat, app._api.xstal_add),
                    data: {
                        request: [
                          internal.getAttr(othat, app._api.xstal_function),
                          parame
                        ]
                    },
                    contentType: internal.globalSettings.contentType,
                    dataType: internal.globalSettings.dataType,
                    type: internal.globalSettings.type,
                    timeout: parseInt(internal.getAttr(othat, app._api.xstal_timeout), 10),

                    success: function (data, textStatus, jqXHR) {

                        internal.globalSettings.wholeInternalHandler(othat, "success", data, textStatus, jqXHR);


                    },
                    error: function (jqXHR, textStatus, data) {

                        internal.globalSettings.wholeInternalHandler(othat, "error", data, textStatus, jqXHR);

                    }

                };

                if (internal.globalSettings.forceSynchronousOnAllAjaxCalls === true) { //override all assync call specified
                    a_obj.async = false;
                } else {
                    if (a_obj.async === "true") {
                        a_obj.async = true;
                    } else {
                        a_obj.async = false;
                    }
                }

                var mockParameter = {};

                mockParameter = new function () {

                    this.async = a_obj.async;
                    this.url = a_obj.url;
                    this.responseTime = a_obj.timeout;
                    this.dataType = a_obj.dataType;
                    this.response = a_obj.success;
                    this.contentType = 'text/json';
                    this.responseText = internal.globalSettings.resposeOfNoRequest;

                };

                if (internal.globalSettings.forceMockAllAjaxCalls === true) {

                    mockAllAjaxCalls(internal.globalSettings.MockingFxMethod, mockParameter);
                } else if (internal.getAttr(othat, app._api.xstal_test) === "true") {

                    //this is differential mocking by remote locationyet to fully implement diferential ajax mocking
                    mockAllAjaxCalls(internal.globalSettings.MockingFxMethod, mockParameter);
                }

                var resp = {};//= MakeAjaxCall(a_obj, internal.globalSettings.dontMakeJQAjaxCall).responseText;
                if (internal.globalSettings.dontMakeJQAjaxCall === false) {
                    internal.globalSettings.readyToAjaxcall();
                    // resp = $.ajax(a_obj);

                    if (internal.getAttr(othat, app._api.xstal_mocked) === "false") {
                        resp = internal.globalSettings.xmockajax(a_obj, true);
                    } else {

                          resp = internal.globalSettings.xmockajax(a_obj, false,othat,true);
                    }

                  

                } else {
                    internal.conn = false;
                    resp = {
                        responseText: internal.globalSettings.resposeOfNoRequest
                    };
                }



                internal.globalSettings.whenEventInvocked();
                return {
                    response: resp,
                    connection: internal.conn,
                    ranOnLoad: runOnLoad,
                    assync: a_obj.async,
                    element: othat,
                    request: a_obj,
                    settings: app.conf()
                };



            };

            var mockAllAjaxCalls = function (methodMock, paramet) {
                internal.conn = false;
                internal.globalSettings.whenMockSet();

                methodMock(paramet);
            };

            var that = {};
            return (function () {
                $(app._api.xstal_master_class.v).each(function () {
                    internal.globalSettings.whenEachStart();
                    $(this).on(internal.getAttr(this, app._api.xstal_event), function (e) { e.stopPropagation(); return createRequestObject(this); });

                    that = this;

                    internal.globalSettings.whenEventMade();

                    var flag = false;
                    if (internal.globalSettings.execAllEventOnLoad === true) {
                        flag = true;
                    } else if (internal.getAttr(this, app._api.xstal_runonload) === "true") {
                        flag = true;
                    }

                    if (flag === true) {
                        app.result.push(createRequestObject(this));
                    }

                    internal.globalSettings.whenEachStop();
                });
                internal.globalSettings.whenAllStop();

                return app.result;
            })();
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
                },
                xstal_mocked_prefix: {
                    n: "xstal-mockarg-",
                    v: ""
                }



            }

        };

        this.createNewElement = function (o) {
            var builder_open = '<' + o.type + '  class="' + app._api.xstal_master_class.n.replace(".", "") + '"  ';
            builder_open += '  ' + app._api.xstal_group_master.n + '="' + o.oxstal_group_master + '"  ';
            builder_open += '  ' + app._api.xstal_group.n + '="' + o.oxstal_group + '"  ';
            builder_open += '  ' + app._api.xstal_ret.n + '="' + o.oxstal_ret + '"  ';
            builder_open += '  ' + app._api.xstal_isasync.n + '="' + o.oxstal_isasync + '"  ';
            builder_open += '  ' + app._api.xstal_add.n + '="' + o.oxstal_add + '"  ';
            builder_open += '  ' + app._api.xstal_function.n + '="' + o.oxstal_function + '"  ';
            builder_open += '  ' + app._api.xstal_event.n + '="' + o.oxstal_event + '"  ';
            builder_open += '  ' + app._api.xstal_test.n + '="' + o.oxstal_test + '"  ';
            builder_open += '  ' + app._api.xstal_pre.n + '="' + o.oxstal_pre + '"  ';
            builder_open += '  ' + app._api.xstal_pos.n + '="' + o.oxstal_pos + '"  ';
            builder_open += '  ' + app._api.xstal_runonload.n + '="' + o.oxstal_runonload + '"  ';
            builder_open += '  ' + app._api.xstal_timeout.n + '="' + o.oxstal_timeout + '"  ';
            builder_open += '   ' + app._api.xstal_ajaxresult.n + '="' + o.oxstal_ajaxresult + '"   ';
            builder_open += '   ' + app._api.xstal_mocked.n + '="' + o.xstal_mocked + '"   ';
            var builder_close = '  >' + o.obody + '</' + o.type + '  >';

            return builder_open + " " + builder_close;


        };
        this.CURRENT_VERSION = '1.0.0';
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
            this.oxstal_mocked = app._api.xstal_mocked.v;
        };
        this.mockFunction = function (o) { };
        this.mockMock = function (o) {
            conn = true; // no mock ajax supplied
        };

        this.globalSettings = {
            dontMakeJQAjaxCall: false,
            forceSynchronousOnAllAjaxCalls: false,
            forceMockAllAjaxCalls: false,
            execAllEventOnLoad: false,
            resposeOfNoRequest: {},
            MockingFxMethod: within.mockMock, //mock ajax place holder
            whenEventInvocking: within.mockFunction,
            whenEventInvocked: within.mockFunction,
            whenAllStart: within.mockFunction, //**
            whenAllStop: within.mockFunction, //**
            whenEachStart: within.mockFunction, //**
            whenEachStop: within.mockFunction, //**
            whenMockSet: within.mockFunction, //**
            whenEventMade: within.mockFunction, //**
            readyToAjaxcall: within.mockFunction, //**
            mockLookUpTable: [],
            setMockUpTable:function(or,on,ov){
                internal.globalSettings.mockLookUpTable.push({ r: or, n: on, v: ov });
            },
            getMockFromMockUpTable:function(){
    
            },
           GetMockedDataFromMockTable: function (ref) {
                re = {};
                var x1 = internal.globalSettings.mockLookUpTable;
                var tots = x1.length;
                for (var it = 0; it < tots; it++) {
                    if (!$(ref).hasClass(x1[it].r.replace(".", ""))) {

                    }
                    else if (!$(ref).attr("id") === (x1[it].r.replace("#", ""))) {

                    } else {
                        re[x1[it].n] = x1[it].v;
                    }
                }
               
                return re;
            },
            getMockedData: function (ref) {
              var  re = "";

              var attrib = $(ref).attr(app._api.xstal_mocked_prefix.n);

              if (attrib === "") {
                  throw "DTO does not exist for master with DTO specified as : " + $(ref).attr(app._api.xstal_mocked.n)
              }

                var attrSplit = attrib.split(";"); // bug, where mock has a ; inside
                for (var ea in attrSplit) {
                    if (re === "") {
                        re = {};
                    }
                  var tent=  attrSplit[ea].split("=");
                  re[tent[0]] = tent[1];
                }

               
                return re;
            },
            xmockajax: function (o, usereal,ref, IsSuccess, re) {
                if (usereal === true) {
                    return $.ajax(o);
                }
                else {

                   // mockParameter
                    if (re === undefined) {
                        re = internal.globalSettings.getMockedData(ref)
                    }

                    if (IsSuccess === true) {
                        o.success( JSON.stringify(re), "", "");
                    }
                    else {
                        o.error("", "", "");
                    }
                    return {
                        response: JSON.stringify( re)
                    };
                }
            },
            evalAFunction: function (x, y) {
                eval("try{" + x + "('" + y + "');}catch(e){}");
            },
            alertFunction: function (o) {
                alert(o);
            },
            confirmFunction: function (o) {
                return confirm(o);
            },
            invokeDomManipFunction: function (a, b, c) {
                $(a)[b](c);
            },
            wholeInternalHandler: function (othat, _status, _data, textStatus, jqXHR) {
                var result = { status: _status, textStatus: textStatus, data: _data, JqXHR: jqXHR };

                var clientHandlingMethod = internal.getAttr(othat, app._api.xstal_ajaxresult);

                if (clientHandlingMethod !== "") {

                    var alleach = clientHandlingMethod.split(";");
                    var tots = alleach.length;
                    for (var tie = 0; tie < tots; tie++) {
                        var clientHandlingMethodi = alleach[tie];

                        var q = clientHandlingMethodi.replace("*", "");
                        var s = q.split(",");
                        var o, x, y, z, w = "";
                        o = _data; x = s[0]; y = s[1]; z = s[2]; w = s[3];




                        if (clientHandlingMethodi.contains("*")) {
                            internal.globalSettings.internalHandler(_data, s[0], s[1], s[2], s[3]);
                        } else {

                            if (_status === "error") {
                                internal.globalSettings.evalAFunction(clientHandlingMethodi, _data);
                            } else {

                                internal.globalSettings.evalAFunction(clientHandlingMethodi, _data);
                            }

                        }

                    }
                }
            },
            internalHandler: function (o, x, y, z, w) {
                if (x !== undefined) {
                    if (x === "alert") {
                        internal.globalSettings.Handlers.alertP(o, y, z, w);
                    } else if (x === "confirm") {
                        internal.globalSettings.Handlers.confirmP(o, y, z, w);
                    }
                    else if (x === "in") {
                        internal.globalSettings.Handlers.inP(o, y, z, w);
                    }
                }
            },
            Handlers: {
                alertP: function (o, y, z, w) {

                    if (y === undefined) {
                        internal.globalSettings.alertFunction(o);
                    } else
                        if (y.contains("=")) {
                            var ar = y.split("=");
                            var ja = $.parseJSON(o);// this is a hacke

                            internal.globalSettings.alertFunction(ja[ar[1]]);
                        }

                },
                confirmP: function (o, y, z, w) {
                    var c = true;



                    if (y !== undefined) {

                        if (y.contains("=")) {
                            var ar = y.split("=");
                            var ja = $.parseJSON(o);// this is a hacke
                            c = internal.globalSettings.confirmFunction(ja[ar[1]]);
                        } else {
                            c = internal.globalSettings.confirmFunction(o);
                        }
                    }


                    if (c === true) {
                        if (y !== undefined) {
                            internal.globalSettings.evalAFunction(y, o);
                        }

                    } else if (z !== undefined) {
                        internal.globalSettings.evalAFunction(z, o);
                    }

                },

                inP: function (o, y, z, w) {
                    if (y !== undefined) {
                        if (z !== undefined) {
                            if (z.contains("=")) {
                                var ar = z.split("=");
                                var ja = $.parseJSON(o);

                                internal.globalSettings.invokeDomManipFunction(y, ar[0], ja[ar[1]]);
                                //   $(y)[ar[0]](ja[ar[1]]);

                            } else {
                                // $(y)[z](o);
                                internal.globalSettings.invokeDomManipFunction(y, z, o);
                            }
                        }
                    }
                }
            },
            addAttr: function (r, a, v) {
                if (v === undefined) {
                   return $(r).attr(a);
                } else {
                    $(r).attr(a, v);
                }
            },
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            dataType: "text",
            type: "POST"
        };
        this.executed = false;
        this.conn = true;
        this.extractDom = function (pa, currentElemen) {
            var s = within.getAttr(currentElemen, app._api.xstal_ret).split(app._api.xstal_querySeparator.n);
            var retval = {};
            if (s[1] !== "attr") {
                retval = ($(currentElemen)[s[1]])();
            } else {
                if (s[2] !== "css") {
                    retval = $(currentElemen).attr(s[2]);
                } else {
                    retval = $(currentElemen).css(s[3]);
                }
            }
            pa[s[0]] = retval;
        };
        this.QueryDom = function (selector, othat) {
            var parame = {};
            $(selector).each(function () {
                if (within.IsInGroup(this, othat) === true) {
                    within.extractDom(parame, this);
                }
            });
            return parame;
        };
        this.IsInGroup = function (ref, refthat, grp) {
            var atrthat = within.getAttr(refthat, app._api.xstal_group_master);
            var atr = within.getAttr(ref, app._api.xstal_group);
            if (atr === undefined) {
                return false;
            }
            if (atrthat === undefined) {
                return false;
            }
            var grpsthat = atrthat.split(app._api.xstal_group_separator.n);
            var grps = atr.split(app._api.xstal_group_separator.n);
            var tot = grps.length;
            var totthat = grpsthat.length;

            for (var i = 0; i < tot; i++) {
                for (var j = 0; j < totthat; j++) {
                    if (grpsthat[j] === grps[i]) {
                        return true;
                    }
                }
            }
            return false;
        };
        this.getAttr = function (ref, attr) {
            var at = $(ref).attr("data-" + attr.n);
            if (at === undefined || at.trim() === "") {
                at = $(ref).attr(attr.n);
            }
            if (at === undefined || at.trim() === "") {
                return attr.v;
            }
            return at;

        };

    };

    var internal = new InternalFactory(rootWin);

    app._api = new internal.CreateAPI().api;

    rootWin.Crystalize.begin("*");


}).call(this);

