//***************************************
//test BEGINS==========================================================================================
//***************************************

TEST("Veryfy that the dafault global setting is correct", function () {
    Crystalize.reset();

    var setting = Crystalize.conf().all;

    //OK(typeof setting.whenEventInvocking === "function", "when event invoking  must be a function by default( and always)");
    //OK(typeof setting.whenEventInvocked === "function", "when event invoked  must be a function by default( and always)");
    OK(typeof setting.wholeInternalHandler === "function", " when all start  must be a function by default( and always)"); //**
    //OK(typeof setting.mockFunct === "function", "when all stop  must be a function by default( and always)"); //**
    //OK( setting.XDlisteners !== undefined, "when each start  must be a function by default( and always)"); //**
    //OK(typeof setting.deliverXD === "function", "when each stop  must be a function by default( and always)"); //**
    OK(typeof setting.e_ === "function", "when mock set  must be a function by default( and always)"); //**
    OK(typeof setting.runScript === "function", "when event made  must be a function by default( and always)"); //**


    OK(typeof setting !== "undefined", "Should always be able to get default setting");
    OK(setting.dontMakeJQAjaxCall === false, "dont make ajax call must be false by default");
    OK(setting.forceSynchronousOnAllAjaxCalls === false, "forcing assync on all ajax call  must be false by default");
    OK(setting.forceMockAllAjaxCalls === false, "forcing mock on all ajax call  must be false by default");
    OK(setting.execAllEventOnLoad === false, "execute all event on load  must be false by default");
    OK(typeof setting.resposeOfNoRequest !== "undefined", " response of no request  default  must be  set as expected (must be an empty object)");
    OK(typeof setting.MockingFxMethod === "function", "mocking framework method  must be a function by default( and always)");//mock ajax place holder
    //OK(typeof setting.XDebug === "function", "ready to ajax  default  must be a function by default( and always)"); //**
    OK(setting.contentType === "application/x-www-form-urlencoded; charset=UTF-8", "ajax content type  default  must be  set as expected");
    OK(setting.dataType === "text", "ajax datatype  default must be set as expected");
    OK(setting.type === "POST", "type default  must be s set as expected");
    OK(typeof setting.alertFunction === "function", "internal request handler must be an object");
    OK(typeof setting.confirmFunction === "function", "internal request handler must have a run method");
    OK(typeof setting.internalHandler === "function", "internal request handler must have a setup object");
    OK(typeof setting.Handlers.alertP === "function", "internal request handler must have a alertP method");
    OK(typeof setting.Handlers.confirmP === "function", "internal request handler must have a confirmP method");
    OK(typeof setting.Handlers.inP === "function", "internal request handler must have a inP method");
    OK(typeof  setting.xmockajax === "function", "internal must have a  xmockajax  method");
    OK(typeof  setting.wholeInternalHandler=== "function", "internal  must have a  wholeInternalHandler  method");
    OK(typeof  setting.internalHandler=== "function", "internal  must have a  internalHandler  method");
    OK(typeof setting.invokeDomManipFunction === "function", "internal  must have a invokeDomManipFunction  method");

});

TEST("Verify that the default api html attribute is well implemented", function () {

    Crystalize.reset();
    var api = Crystalize._api;

    OK(api.xstal_group_master.n === "xstal-group-master", "api parameter name 'group master' cannot be brocken brocken");
    OK(api.xstal_master_class.n === ".xstal-master", "api parameter name 'master class' cannot be brocken brocken");
    OK(api.xstal_group.n === "xstal-group", "api parameter name 'group' cannot be brocken brocken");
    OK(api.xstal_ret.n === "xstal-ret", "api parameter name 'ret' cannot be brocken brocken");
    OK(api.xstal_isasync.n === "xstal-isasync", "api parameter name 'is assync' cannot be brocken brocken");
    OK(api.xstal_add.n === "xstal-add", "api parameter name 'add' cannot be brocken brocken");
    OK(api.xstal_function.n === "xstal-function", "api parameter name 'function' cannot be brocken brocken");
    OK(api.xstal_event.n === "xstal-event", "api parameter name 'event' cannot be brocken brocken");
    OK(api.xstal_querySeparator.n === "=", "api parameter name 'query separator' cannot be brocken brocken");
    OK(api.xstal_test.n === "xstal-test", "api parameter name 'test' cannot be brocken brocken");
    OK(api.xstal_group_separator.n === ",", "api parameter name 'group separator' cannot be brocken brocken");
    OK(api.xstal_pre.n === "xstal-pre", "api parameter name 'pre' cannot be brocken brocken");
    OK(api.xstal_pos.n === "xstal-pos", "api parameter name 'pos' cannot be brocken brocken");
    OK(api.xstal_runonload.n === "xstal-runonload", "api parameter name 'runonload' cannot be brocken brocken");
    OK(api.xstal_timeout.n === "xstal-timeout", "api parameter name 'timeout' cannot be brocken brocken");
    OK(api.xstal_ajaxresult.n === "xstal-ajaxresult", "api parameter name 'xstal_ajaxresult' cannot be brocken");
    OK(api.xstal_mocked.n === "xstal-mocked", "api parameter name 'xstal_mocked' cannot be brocken");

});

TEST("Verify that the default api html values is correct", function () {
    Crystalize.reset();
    var api = Crystalize._api;

    OK(api.xstal_group_master.v === "oxstal_group_master", "api parameter value 'group master' cannot be brocken brocken");
    OK(api.xstal_master_class.v === ".xstal-master", "api parameter  value ' master class' cannot be brocken brocken");
    OK(api.xstal_group.v === "oxstal_group", "api parameter  value 'group' cannot be brocken brocken");
    OK(api.xstal_ret.v === "oxstal_ret=html", "api parameter  value 'ret'  cannot be brocken brocken");
    OK(api.xstal_isasync.v === "false", "api parameter  value 'isassync' cannot be brocken brocken");
    OK(api.xstal_add.v === "/oxstal_add", "api parameter  value 'add'  cannot be brocken brocken");
    OK(api.xstal_function.v === "oxstal_function", "api parameter value  'function' cannot be brocken brocken");
    OK(api.xstal_event.v === "none", "api parameter  value 'event' cannot be brocken brocken");
    OK(api.xstal_querySeparator.v === "=", "api parameter  value 'query separator' cannot be brocken brocken");
    OK(api.xstal_test.v === "false", "api parameter  value 'test' cannot be brocken brocken");
    OK(api.xstal_group_separator.v === ",", "api parameter  value group separator  cannot be brocken brocken");
    OK(api.xstal_pre.v === "oxstal_pre", "api parameter  value  'pre' cannot be brocken brocken");
    OK(api.xstal_pos.v === "oxstal_pos", "api parameter  value 'pos'  cannot be brocken brocken");
    OK(api.xstal_runonload.v === "false", "api parameter  value 'runonload'  cannot be brocken brocken");
    OK(api.xstal_timeout.v === "2000", "api parameter  value 'timeout'  cannot be brocken brocken");
    OK(api.xstal_ajaxresult.v === "", "api parameter value 'xstal_ajaxresult' cannot be brocken");
    OK(api.xstal_mocked.v === "false", "api parameter name 'xstal_mocked' cannot be brocken");


});

TEST("Test that framework is functioning when loaded into page", function () {
    Crystalize.reset($.mockjaxClear);
    //arrange:
    applySpecialTestSettings();
    Crystalize.all({
        MockingFxMethod: $.mockjax,
        resposeOfNoRequest: "hello",
        dontMakeJQAjaxCall: true // this way you can avoid injection of mock ajax
    });

    var o = Crystalize.make(); //create a new scenario object
    o.oxstal_group_master = "a";
    o.oxstal_group = "a";
    o.oxstal_ret = "p=html";
    o.oxstal_add = "/a";
    o.oxstal_function = "f";
    o.oxstal_event = "click";

    arrangeTestStage(o);

    //act:
    Crystalize.begin("*");

    //assertions:

    OK(Crystalize.result !== null, "When all reuired setup is done, Crystalize must copile successfully");
    //OK(Crystalize.result[0] !== null, "");
    OK(typeof Crystalize.result[0].connection !== "undefined", "connection result must exist");
    OK(typeof Crystalize.result[0].element !== "undefined", "dom element must exist");
    OK(typeof Crystalize.result[0].request !== "undefined", "a request object must exist");
    OK(typeof Crystalize.result[0].settings !== "undefined", "settings result must exist");
    OK(typeof Crystalize.result[0].settings === "object", "settings must be an object");
    OK(typeof Crystalize.result[0].element === "object", "element must be an object");
    OK(typeof Crystalize.result[0].request === "object", "request must be an object");

});

TEST("Test that the api settings and the settings in the result is the same", function () {
    Crystalize.reset($.mockjaxClear);
    var initialApi = Crystalize._api;
    applySpecialTestSettings();
    Crystalize.all({
        MockingFxMethod: $.mockjax,
        resposeOfNoRequest: "hello",
        dontMakeJQAjaxCall: true // this way you can avoid injection of mock ajax
    });

    var o = Crystalize.make(); //create a new scenario object
    o.oxstal_group_master = "a";
    o.oxstal_group = "a";
    o.oxstal_ret = "p=html";
    o.oxstal_add = "/a";
    o.oxstal_function = "f";
    o.oxstal_event = "click";

    arrangeTestStage(o);

    //act:
    Crystalize.begin("*");

    //assertions:
    var resultApi = Crystalize.result[0].settings.api;

    var totali = initialApi.length;
    var totalr = resultApi.length;

    OK(totali === totalr, "initial and final api settings must be of same length");



    for (var key in initialApi) {
        OK(resultApi.hasOwnProperty(key), "the property '" + key + "' of the api must be present in the api returned in the result");
    }
    for (var key in resultApi) {
        OK(initialApi.hasOwnProperty(key), "the property '" + key + "' of the the api returned in the result must be originally in the original api");
    }

});

TEST("Test that the request built is correct", function () {

    Crystalize.reset($.mockjaxClear);
    applySpecialTestSettings();
    var expectedResponse = "response";
    var functionToCall = "f";
    var urlLoc = "abc";
    var dataType = "jasonable";
    var requestType = "POSTerable";
    var group_master = "GMaster";
    var variableName = "pac";
    var htmlBody = "<span>hi</span>";
    Crystalize.all({
        MockingFxMethod: $.mockjax,
        forceSynchronousOnAllAjaxCalls: true,
        resposeOfNoRequest: expectedResponse,
        dontMakeJQAjaxCall: true, // this way you can avoid injection of mock ajax
        dataType: dataType,
        type: requestType
    });

    var o = Crystalize.make(); //create a new scenario object
    o.oxstal_group_master = group_master;
    o.oxstal_group = group_master;
    o.oxstal_ret = variableName + "=html";
    o.oxstal_add = urlLoc;
    o.obody = htmlBody;
    o.oxstal_function = functionToCall;
    o.oxstal_event = "click";

    arrangeTestStage(o);

    //act:
    Crystalize.begin("*");

    //assertions:
    var request = Crystalize.result[0].request;
    console.log(request);
    OK(request.async === false, "when forceSynchronousOnAllAjaxCalls is set to true assync in request setting must be false");
    OK(request.data.request[0] === functionToCall, "when user specified function as " + functionToCall + " in dome element, request.data.rMethod must be the same as specified");

    OK(request.url === urlLoc, "when user specified address as " + urlLoc + " in dome element, request.url must be the same as specified");

    OK(request.dataType === dataType, "when user specified datatype as " + dataType + " in dome element, request.dataType must be the same as specified");

    OK(request.type === requestType, "when user specified requestType as " + requestType + " in dome element, request.type must be the same as specified");


    OK(request.data.request[1][variableName] === htmlBody, "when user uses the html selection attribute name=html  " + variableName + "=html the parameter " + request.data.request[1][variableName] + "must be configured to equal the html body " + htmlBody);


});

TEST("Test that when user used the query attribute , the correct request is constructed for html selection", function () {

    Crystalize.reset($.mockjaxClear);
    applySpecialTestSettings();
    var expectedResponse = "response";
    var functionToCall = "f";
    var urlLoc = "abc";
    var dataType = "jasonable";
    var requestType = "POSTerable";
    var group_master = "GMaster";
    var variableName = "pac";
    var htmlBody = "<span>hi</span>";
    Crystalize.all({
        MockingFxMethod: $.mockjax,
        forceSynchronousOnAllAjaxCalls: true,
        resposeOfNoRequest: expectedResponse,
        dontMakeJQAjaxCall: true, // this way you can avoid injection of mock ajax
        dataType: dataType,
        type: requestType
    });

    var o = Crystalize.make(); //create a new scenario object
    o.oxstal_group_master = group_master;
    o.oxstal_group = group_master;
    o.oxstal_ret = variableName + "=html";
    o.oxstal_add = urlLoc;
    o.obody = htmlBody;
    o.oxstal_function = functionToCall;
    o.oxstal_event = "click";

    arrangeTestStage(o);

    //act:
    Crystalize.begin("*");

    //assertions:
    var request = Crystalize.result[0].request;

    OK(request.data.request[1][variableName] === htmlBody, "when user uses the html selection attribute name=html  " + variableName + "=html the parameter " + request.data.request[1][variableName] + "must be configured to equal the html body " + htmlBody);


});

TEST("Test that when user used the query attribute , the correct request is constructed for attr selection", function () {
    Crystalize.reset($.mockjaxClear);
    applySpecialTestSettings();
    var expectedResponse = "response";
    var functionToCall = "f";
    var urlLoc = "abc";
    var dataType = "jasonable";
    var requestType = "POSTerable";
    var group_master = "GMaster";
    var variableName = "pac";
    var htmlBody = "<span>hi</span>";
    Crystalize.all({
        MockingFxMethod: $.mockjax,
        forceSynchronousOnAllAjaxCalls: true,
        resposeOfNoRequest: expectedResponse,
        dontMakeJQAjaxCall: true, // this way you can avoid injection of mock ajax
        dataType: dataType,
        type: requestType
    });
    var eventSel = Crystalize._api.xstal_event.n;
    var o = Crystalize.make(); //create a new scenario object
    o.oxstal_group_master = group_master;
    o.oxstal_group = group_master;
    o.oxstal_ret = variableName + "=attr=" + eventSel;
    o.oxstal_add = urlLoc;
    o.obody = htmlBody;
    o.oxstal_function = functionToCall;
    o.oxstal_event = "click";

    arrangeTestStage(o);

    //act:
    Crystalize.begin("*");

    //assertions:
    var request = Crystalize.result[0].request;

    OK(request.data.request[1][variableName] === o.oxstal_event, "when user uses the =attr= selection say   " + variableName + "=attr=" + eventSel + " and  " + o.oxstal_event + " is set as the event, then the parameter " + o.oxstal_event + " must be selected ");

});

TEST("Test that when user used the query attribute , the correct request is constructed for attr selection", function () {
    Crystalize.reset($.mockjaxClear);
    applySpecialTestSettings();
    var expectedResponse = "response";
    var functionToCall = "f";
    var urlLoc = "abc";
    var dataType = "jasonable";
    var requestType = "POSTerable";
    var group_master = "GMaster";
    var variableName = "pac";
    var htmlBody = "<span>hi</span>";
    Crystalize.all({
        MockingFxMethod: $.mockjax,
        forceSynchronousOnAllAjaxCalls: true,
        resposeOfNoRequest: expectedResponse,
        dontMakeJQAjaxCall: true, // this way you can avoid injection of mock ajax
        dataType: dataType,
        type: requestType
    });
    var eventSel = Crystalize._api.xstal_event.n;
    var o = Crystalize.make(); //create a new scenario object
    o.oxstal_group_master = group_master;
    o.oxstal_group = group_master;
    o.oxstal_ret = variableName + "=attr=" + eventSel;
    o.oxstal_add = urlLoc;
    o.obody = htmlBody;
    o.oxstal_function = functionToCall;
    o.oxstal_event = "click";

    arrangeTestStage(o);

    //act:
    Crystalize.begin("*");

    //assertions:
    var request = Crystalize.result[0].request;

    OK(request.data.request[1][variableName] === o.oxstal_event, "when user uses the =attr= selection say   " + variableName + "=attr=" + eventSel + " and  " + o.oxstal_event + " is set as the event, then the parameter " + o.oxstal_event + " must be selected ");



});

TEST("Test that when user used the query attribute , the correct request is constructed for css selection - for display", function () {
    Crystalize.reset($.mockjaxClear);
    applySpecialTestSettings();
    var expectedResponse = "response";
    var functionToCall = "f";
    var urlLoc = "abc";
    var dataType = "jasonable";
    var requestType = "POSTerable";
    var group_master = "GMaster";
    var variableName = "pac";
    var htmlBody = "<span>hi</span>";
    Crystalize.all({
        MockingFxMethod: $.mockjax,
        forceSynchronousOnAllAjaxCalls: true,
        resposeOfNoRequest: expectedResponse,
        dontMakeJQAjaxCall: true, // this way you can avoid injection of mock ajax
        dataType: dataType,
        type: requestType
    });
    var eventSel = Crystalize._api.xstal_event.n;
    var o = Crystalize.make(); //create a new scenario object
    o.oxstal_group_master = group_master;
    o.oxstal_group = group_master;
    o.oxstal_ret = variableName + "=attr=css=opacity";
    o.oxstal_add = urlLoc;
    o.obody = htmlBody;
    o.oxstal_function = functionToCall;
    o.oxstal_event = "click";

    arrangeTestStage(o);

    //act:
    Crystalize.begin("*");

    //assertions:
    var request = Crystalize.result[0].request;

    OK(request.data.request[1][variableName] === "1", "when user uses the =attr=css selection say   " + variableName + "=attr=css=opacity and  opacity of elemet is used as selection parameter, then 1 must be selected ");

    //console.log(Crystalize.result);

});

TEST("Test that when user used the query attribute , the correct request is constructed for css selection - for opacity", function () {
    Crystalize.reset($.mockjaxClear);
    applySpecialTestSettings();
    var expectedResponse = "response";
    var functionToCall = "f";
    var urlLoc = "abc";
    var dataType = "jasonable";
    var requestType = "POSTerable";
    var group_master = "GMaster";
    var variableName = "pac";
    var htmlBody = "<span>hi</span>";
    Crystalize.all({
        MockingFxMethod: $.mockjax,
        forceSynchronousOnAllAjaxCalls: true,
        resposeOfNoRequest: expectedResponse,
        dontMakeJQAjaxCall: true, // this way you can avoid injection of mock ajax
        dataType: dataType,
        type: requestType
    });
    var eventSel = Crystalize._api.xstal_event.n;
    var o = Crystalize.make(); //create a new scenario object
    o.oxstal_group_master = group_master;
    o.oxstal_group = group_master;
    o.oxstal_ret = variableName + "=attr=css=display";
    o.oxstal_add = urlLoc;
    o.obody = htmlBody;
    o.oxstal_function = functionToCall;
    o.oxstal_event = "click";

    arrangeTestStage(o);

    //act:
    Crystalize.begin("*");

    //assertions:
    var request = Crystalize.result[0].request;

    OK(request.data.request[1][variableName] === "block", "when user uses the =attr=css selection say   " + variableName + "=attr=css=display and  opacity of elemet is used as selection parameter, then 'block' must be selected ");


});

TEST("Test MINIMUM parameter required for user to pass - 8 PARAMETERS +1 test param + MOCK FX where mock ajax is not enabled", function () {
    Crystalize.reset($.mockjaxClear);

    Crystalize.all({
        MockingFxMethod: $.mockjax
    });
    //applySpecialTestSettings(); 

    var domVar = '<div class="xstal-master" xstal-isasync="false"  xstal-event="click" xstal-runonload="true" xstal-function="f" xstal-add="/handler1"  xstal-ret="pac=html" xstal-group="a" xstal-group-master="a">ManualDiv<div>';
    arrangeManualTestStage(domVar);
    //act:

    Crystalize.begin("*");

    //assertions:

    OK(typeof Crystalize.result[0].response === "object", 'when element is at least set as xstal-isasync="false"  and xstal-runonload="true" then all should run synchronously and response must be an object and AJAX MUST BE MOCKED OUT');


});

TEST("Test MINIMUM parameter required for user to pass - 8 PARAMETERS +1 test param + MOCK FX where mock ajax IS enabled", function () {
    Crystalize.reset($.mockjaxClear);
    var responseExpected = "hello!";
    Crystalize.all({
        MockingFxMethod: $.mockjax,
        resposeOfNoRequest: responseExpected
    });
    //applySpecialTestSettings(); 

    var domVar = '<div class="xstal-master" xstal-isasync="false" xstal-test="true"  xstal-event="click" xstal-runonload="true" xstal-function="f" xstal-add="/handler1"  xstal-ret="pac=html" xstal-group="a" xstal-group-master="a">ManualDiv<div>';
    arrangeManualTestStage(domVar);
    //act:

    Crystalize.begin("*");

    //assertions:

    OK(typeof Crystalize.result[0].response === "object", 'when element is at least set as xstal-isasync="false"  and xstal-runonload="true" then all should run synchronously and response must be an object');
});

TEST("Test MINIMUM parameter required for user to pass -ALL DEFAULT - 5 PARAMETERS + 2TEST PARAMETER + MOCK FX", function () {
    Crystalize.reset();

    var domVar = '<div xstal-runonload="true"  xstal-isasync="false"  class="xstal-master"    xstal-event="click"  xstal-add="/handler1"  xstal-group="a" xstal-group-master="a">ManualDiv<div>';
    arrangeManualTestStage(domVar);
    //act:

    Crystalize.begin("*");

    //assertions:
    OK(typeof Crystalize.result[0].response === "object", 'when element is at least set as xstal-isasync="false"  and xstal-runonload="true" then all should run synchronously and response must be an object');



});

TEST("Test MINIMUM parameter required for user to pass - 8 PARAMETERS +1 test param + MOCK FX where mock ajax IS enabled - When mocked ajax is enabled, the response text must be set to the expected set response", function () {
    Crystalize.reset($.mockjaxClear);
    var responseExpected = "hello!";
    Crystalize.all({
        MockingFxMethod: $.mockjax,
        resposeOfNoRequest: responseExpected
    });
    //applySpecialTestSettings(); 

    var domVar = '<div class="xstal-master" xstal-isasync="false" xstal-test="true"  xstal-event="click" xstal-runonload="true" xstal-function="f" xstal-add="/handler1"  xstal-ret="pac=html" xstal-group="a" xstal-group-master="a">ManualDiv<div>';
    arrangeManualTestStage(domVar);
    //act:

    Crystalize.begin("*");

    //assertions:
    OK(Crystalize.result[0].response.responseText === responseExpected, 'When mocked ajax is enabled, the response text must be set to the expected set response ');

});

TEST("Test mock when responseText is passed WITHIN A STRING TAG(MUST) --When mocked ajax is enabled, the response text must be set to the expected set response", function () {
    Crystalize.reset($.mockjaxClear);
    var responseExpected = '{hello:"hello!"}';
    Crystalize.all({
        MockingFxMethod: $.mockjax,
        resposeOfNoRequest: responseExpected
    });
    //applySpecialTestSettings(); 

    var domVar = '<div class="xstal-master" xstal-isasync="false" xstal-test="true"  xstal-event="click" xstal-runonload="true" xstal-function="f" xstal-add="/handler1"  xstal-ret="pac=html" xstal-group="a" xstal-group-master="a">ManualDiv<div>';
    arrangeManualTestStage(domVar);
    //act:

    Crystalize.begin("*");

    //assertions:
    OK(Crystalize.result[0].response.responseText === responseExpected, 'When mocked ajax is enabled, the response text must be set to the expected set response ');
    console.log(Crystalize.result[0].response.responseText);
});

//xstal_ajaxresult
//public method client handler **** for next test
var PUBLIC_SPY = true;
var clientHandler = function (o) {

    PUBLIC_SPY = false;
};
TEST("Test when client handler is specified, the handler should be called when ajax has completed", function () {

    Crystalize.reset($.mockjaxClear);
    var responseExpected = { "hello": "hello!" };
    Crystalize.all({
        MockingFxMethod: $.mockjax,
        resposeOfNoRequest: responseExpected
    });
    //applySpecialTestSettings(); 

    var domVar = '<div class="xstal-master" xstal-ajaxresult="clientHandler" xstal-isasync="false" xstal-test="true"  xstal-event="click" xstal-runonload="true" xstal-function="f" xstal-add="/handler1"  xstal-ret="pac=html" xstal-group="a" xstal-group-master="a">ManualDiv<div>';
    arrangeManualTestStage(domVar);
    //act:

    Crystalize.begin("*");

    //assertions:
    OK(PUBLIC_SPY === false, 'Test when client handler is specified, the handler should be called when ajax has completed ');

    PUBLIC_SPY = true;
});


TEST("Test when ajax has completed , if element has a callback function setup and  with * then the internal handler must be called ", function () {

    Crystalize.reset($.mockjaxClear);
    var responseExpected = { "hello": "hello!" };
    var spy = 0;
    Crystalize.all({
        MockingFxMethod: $.mockjax,
        resposeOfNoRequest: responseExpected,
        internalHandler:  function (o, x, y, z,w) {
                spy = 1;
            }
    });
    //applySpecialTestSettings(); 

    var domVar = '<div class="xstal-master" xstal-ajaxresult="*" xstal-isasync="false" xstal-test="true"  xstal-event="click" xstal-runonload="true" xstal-function="f" xstal-add="/handler1"  xstal-ret="pac=html" xstal-group="a" xstal-group-master="a">ManualDiv<div>';
    arrangeManualTestStage(domVar);
    //act:

    Crystalize.begin("*");

    //assertions:
    OK(spy === 1, 'when ajax has completed , if element has a callback function setup and starts with * then the internal handler must be called  ');
    spy = 0;
});

var tmp = function () { };

TEST("Test when ajax has completed , if element has a callback function setup and  without * then the internal handler must not be called ", function () {

    Crystalize.reset($.mockjaxClear);
    var responseExpected = { "hello": "hello!" };
    var spy = 0;
    Crystalize.all({
        MockingFxMethod: $.mockjax,
        resposeOfNoRequest: responseExpected,
        internalHandler: function (o, x, y, z, w) {
            spy = 1;
        }
    });

    //applySpecialTestSettings(); 

    var domVar = '<div class="xstal-master" xstal-ajaxresult="tmp" xstal-isasync="false" xstal-test="true"  xstal-event="click" xstal-runonload="true" xstal-function="f" xstal-add="/handler1"  xstal-ret="pac=html" xstal-group="a" xstal-group-master="a">ManualDiv<div>';
    arrangeManualTestStage(domVar);
    //act:

    Crystalize.begin("*");

    //assertions:
    OK(spy === 0, 'when ajax has completed , if element has a callback function setup and starts without * then the internal handler must NOT be called  ');

});



TEST("when ajax has completed , if element has a callback function setup and starts with * and three parameters, all three must be sent to the internal handler call back", function () {

    Crystalize.reset($.mockjaxClear);
    var responseExpected = { "hello": "hello!" };
    var spy = 0;
    var x1 = "";
    var x2 = "";
    var x3 = "";

    Crystalize.all({
        MockingFxMethod: $.mockjax,
        resposeOfNoRequest: responseExpected,
        internalHandler: function (o, x, y, z) {
                spy = 1;
                x1 = x;
                x2 = y;
                x3 = z;
            }
        
    });

    //applySpecialTestSettings(); 

    var domVar = '<div class="xstal-master" xstal-ajaxresult="*a,b,c" xstal-isasync="false" xstal-test="true"  xstal-event="click" xstal-runonload="true" xstal-function="f" xstal-add="/handler1"  xstal-ret="pac=html" xstal-group="a" xstal-group-master="a">ManualDiv<div>';
    arrangeManualTestStage(domVar);
    //act:

    Crystalize.begin("*");

    //assertions:
    OK(x1 === "a", 'when ajax has completed , if element has a callback function setup and starts with * and three parameters ie *a,b,c, then the first parameter  must be sent to the second argumnet of internal handler call back  ');
    OK(x2 === "b", 'when ajax has completed , if element has a callback function setup and starts with * and three parameters ie *a,b,c, then the second parameter  must be sent to the third argumnet of internal handler call back  ');
    OK(x3 === "c", 'when ajax has completed , if element has a callback function setup and starts with * and three parameters ie *a,b,c, then the third parameter  must be sent to the forth argumnet of internal handler call back  ');

});





TEST("when ajax has completed , if element has a callback function setup and is *alert then alertP must be caled ", function () {

    Crystalize.reset($.mockjaxClear);
    var responseExpected = { "hello": "hello!" };
    var spy = 0;
    var x1 = 0;
    var x2 = 0;
    var x3 = 0;

    Crystalize.all({
        MockingFxMethod: $.mockjax,
        resposeOfNoRequest: responseExpected,
        Handlers: {
            alertP: function (o, y, z, w) {
                x1 = 1;
            },
            confirmP: function (o, y, z, w) {
                x2 = 1;
             
            },
            inP: function (o, y, z, w) {
                x3 = 1;
            }
        }

    });

    //applySpecialTestSettings(); 

    var domVar = '<div class="xstal-master" xstal-ajaxresult="*alert" xstal-isasync="false" xstal-test="true"  xstal-event="click" xstal-runonload="true" xstal-function="f" xstal-add="/handler1"  xstal-ret="pac=html" xstal-group="a" xstal-group-master="a">ManualDiv<div>';
    arrangeManualTestStage(domVar);
    //act:

    Crystalize.begin("*");

    //assertions:
    OK(x1 === 1, 'when ajax has completed , if element has a callback function setup and is *alert then alertP must be caled ');
 
});


TEST("when ajax has completed , if element has a callback function setup and is *confirm,a,b then confirmP must be caled ", function () {

    Crystalize.reset($.mockjaxClear);
    var responseExpected = { "hello": "hello!" };
    var spy = 0;
    var x1 = 0;
    var x2 = 0;
    var x3 = 0;

    Crystalize.all({
        MockingFxMethod: $.mockjax,
        resposeOfNoRequest: responseExpected,
        Handlers: {
            alertP: function (o, y, z, w) {
                x1 = 1;
            },
            confirmP: function (o, y, z, w) {
                x2 = 1;

            },
            inP: function (o, y, z, w) {
                x3 = 1;
            }
        }

    });

    //applySpecialTestSettings(); 

    var domVar = '<div class="xstal-master" xstal-ajaxresult="*confirm,a,b" xstal-isasync="false" xstal-test="true"  xstal-event="click" xstal-runonload="true" xstal-function="f" xstal-add="/handler1"  xstal-ret="pac=html" xstal-group="a" xstal-group-master="a">ManualDiv<div>';
    arrangeManualTestStage(domVar);
    //act:

    Crystalize.begin("*");

    //assertions:
    OK(x2 === 1, 'when ajax has completed , if element has a callback function setup and is *confirm,a,b then confirmP must be caled ');

});


TEST("when ajax has completed , if element has a callback function setup and is *in,a,b then  inP must be caled ", function () {

    Crystalize.reset($.mockjaxClear);
    var responseExpected = { "hello": "hello!" };
    var spy = 0;
    var x1 = 0;
    var x2 = 0;
    var x3 = 0;

    Crystalize.all({
        MockingFxMethod: $.mockjax,
        resposeOfNoRequest: responseExpected,
        Handlers: {
            alertP: function (o, y, z, w) {
                x1 = 1;
            },
            confirmP: function (o, y, z, w) {
                x2 = 1;

            },
            inP: function (o, y, z, w) {
                x3 = 1;
            }
        }

    });

    //applySpecialTestSettings(); 

    var domVar = '<div class="xstal-master" xstal-ajaxresult="*in,a,b" xstal-isasync="false" xstal-test="true"  xstal-event="click" xstal-runonload="true" xstal-function="f" xstal-add="/handler1"  xstal-ret="pac=html" xstal-group="a" xstal-group-master="a">ManualDiv<div>';
    arrangeManualTestStage(domVar);
    //act:

    Crystalize.begin("*");

    //assertions:
    OK(x3 === 1, 'when ajax has completed , if element has a callback function setup and is *in,a,b then  inP must be caled ');

});








TEST("when ajax has completed , if element has a callback function setup and is *alert then alertFunction must be called ", function () {

    Crystalize.reset($.mockjaxClear);
    var responseExpected = { "hello": "hello!" };
    var spy = 0;
    var x1 = 0;
    var x2 = 0;
    var x3 = 0;

    Crystalize.all({
        MockingFxMethod: $.mockjax,
        resposeOfNoRequest: responseExpected,
        alertFunction: function (o) {
            x1 = 1;
        },
        confirmFunction: function (o) {
            x2 = 1;
        }

    });

    //applySpecialTestSettings(); 

    var domVar = '<div class="xstal-master" xstal-ajaxresult="*alert" xstal-isasync="false" xstal-test="true"  xstal-event="click" xstal-runonload="true" xstal-function="f" xstal-add="/handler1"  xstal-ret="pac=html" xstal-group="a" xstal-group-master="a">ManualDiv<div>';
    arrangeManualTestStage(domVar);
    //act:

    Crystalize.begin("*");

    //assertions:
    OK(x1 === 1, 'when ajax has completed , if element has a callback function setup and is *alert then alertFunction must be called ');

});


TEST("when ajax has completed , if element has a callback function setup and is confirm,a,b then  confirmFunction must be called ", function () {

    Crystalize.reset($.mockjaxClear);
    var responseExpected = { "hello": "hello!" };
    var spy = 0;
    var x1 = 0;
    var x2 = 0;
    var x3 = 0;

    Crystalize.all({
        MockingFxMethod: $.mockjax,
        resposeOfNoRequest: responseExpected,
        alertFunction: function (o) {
             x1 = 1;
        },
        confirmFunction: function (o) {
           x2 = 1;
        }

    });

    //applySpecialTestSettings(); 

    var domVar = '<div class="xstal-master" xstal-ajaxresult="*confirm,a,b" xstal-isasync="false" xstal-test="true"  xstal-event="click" xstal-runonload="true" xstal-function="f" xstal-add="/handler1"  xstal-ret="pac=html" xstal-group="a" xstal-group-master="a">ManualDiv<div>';
    arrangeManualTestStage(domVar);
    //act:

    Crystalize.begin("*");

    //assertions:
    OK(x2 === 1, 'when ajax has completed , if element has a callback function setup and is *confirm,a,b then  confirmFunction must be called ');

});



TEST("when ajax has completed , if element has a callback function setup NOT starting with * then  evalAFunction must be called ", function () {

    Crystalize.reset($.mockjaxClear);
    var responseExpected = { "hello": "hello!" };
    var spy = 0;
    var x1 = 0;
    var x2 = 0;
    var x3 = 0;

    Crystalize.all({
        MockingFxMethod: $.mockjax,
        resposeOfNoRequest: responseExpected,
        evalAFunction: function (x, y) {
            x1 = 1;
        }


    });

    //applySpecialTestSettings(); 

    var domVar = '<div class="xstal-master" xstal-ajaxresult="confirm" xstal-isasync="false" xstal-test="true"  xstal-event="click" xstal-runonload="true" xstal-function="f" xstal-add="/handler1"  xstal-ret="pac=html" xstal-group="a" xstal-group-master="a">ManualDiv<div>';
    arrangeManualTestStage(domVar);
    //act:

    Crystalize.begin("*");

    //assertions:
    OK(x1 === 1, 'when ajax has completed , if element has a callback function setup NOT starting with * then  evalAFunction must be called  ');
});



TEST("when there are more than one element in the dom the last element only must NOT be effective ", function () {

    Crystalize.reset($.mockjaxClear);
    var responseExpected = { "hello": "hello!" };
    var spy = 0;
    var x1 = 0;
    var x2 = 0;
    var x3 = 0;
    var x4 = 0;
    Crystalize.all({
        MockingFxMethod: $.mockjax,
        resposeOfNoRequest: responseExpected,
        Handlers: {
            alertP: function (o, y, z, w) {
                x1 = x1 + 1;
            },
            confirmP: function (o, y, z, w) {
                x2 = x2 + 1;

            },
            inP: function (o, y, z, w) {
                x3 = x3 + 1;
            }
        },
        evalAFunction: function (x, y) {
            x4 = x4+1;
        }



    });


    var domVar1 = '<div class="xstal-master" xstal-ajaxresult="confirm" xstal-isasync="false" xstal-test="true"  xstal-event="click" xstal-runonload="true" xstal-function="f1" xstal-add="/handler1"  xstal-ret="pac=html" xstal-group="a" xstal-group-master="a">ManualDiv A<div>';
    var domVar2 = '<div class="xstal-master" xstal-ajaxresult="*alert" xstal-isasync="false" xstal-test="true"  xstal-event="mouseenter" xstal-runonload="true" xstal-function="f2" xstal-add="/handler1"  xstal-ret="pac=html" xstal-group="b" xstal-group-master="a">ManualDiv B<div>';
    var domVar3 = '<div class="xstal-master" xstal-ajaxresult="*confirm,a,b" xstal-isasync="false" xstal-test="true"  xstal-event="dblclick" xstal-runonload="true" xstal-function="f3" xstal-add="/handler1"  xstal-ret="pac=html" xstal-group="a" xstal-group-master="a">ManualDiv C<div>';
    var domVar4 = '<div class="xstal-master" xstal-ajaxresult="*in,xstal-master,html" xstal-isasync="false" xstal-test="true"  xstal-event="mouseleave" xstal-runonload="true" xstal-function="f4" xstal-add="/handler1"  xstal-ret="pac=html" xstal-group="a" xstal-group-master="a">ManualDiv D<div>';



    arrangeMultipleElementsOnManualTestStage(domVar1, domVar2, domVar3, domVar4);
    //act:

    Crystalize.begin("*");

    //assertions:
    OK(x1 === 1, 'under this scenario of three occurences  confirm *alert me *confirm  inP must be called twice AND ITS NOW CALLED ' + x1 + ' times');
    OK(x2 === 1, 'under this scenario of three occurences  confirm *alert me *confirm  alertP must be called once AND ITS NOW CALLED ' + x2 + ' times');
    OK(x3 === 1, 'under this scenario of three occurences  confirm *alert me *confirm  confirmP must be called once AND ITS NOW CALLED ' + x3 + ' times');
    OK(x4 >= 1, 'under this scenario of three occurences  confirm *alert me *confirm  evalAFunction must be called at least once AND ITS NOW CALLED ' + x3 + ' times');


    console.log(x1);
    console.log(x2);
    console.log(x3);
    console.log(x4);

});


TEST("testing various destination patterns 1 ", function () {

    Crystalize.reset($.mockjaxClear);
    var responseExpected =' { "a": "hello1!", "b": {"c": "hello3!", "d": "hello4!", "e": "hello5!"}, "f": "hello6!" }';
    var spy = 0;
    var x1 = 0;
    var x2 = 0;
    var x3 = 0;
    var aa = "";
    var bb = "";
    var cc = "";
    var mm = "";
   
    Crystalize.all({
        xmockajax: function (o, usereal,IsSuccess,r) {
            mm = 1;

            r = responseExpected;

               o.success(r,"","");
               
                return {
                    request:o,
                    response:r                    
                };
        },
        resposeOfNoRequest: responseExpected,
        evalAFunction: function (x, y) {
            x1 = 1;
        },
        alertFunction: function (o) {
            x2 = 1;
        },
        confirmFunction: function (o) {
            x3 = 1;
        },
        invokeDomManipFunction: function (a,b,c) {
            aa = a; bb = b; cc = c;
        }
    });

    //applySpecialTestSettings(); 
    //*alert,x=datareceived;*alert;*confirm,alert,confirm;
    var selectors = "*in,.destination option,html=a;";
    // selectors += "*in,body,prepend=datareceived;";
    var domVar = '<div class="xstal-master" xstal-ajaxresult="' + selectors + '" xstal-isasync="false" xstal-test="false"  xstal-event="click" xstal-runonload="true" xstal-function="f" xstal-add="/handler1"  xstal-ret="pac=html" xstal-group="a" xstal-group-master="a">ManualDiv<div>';
    arrangeManualTestStage(domVar);
    //act:

    Crystalize.begin("*");

    //assertions:
    OK(aa === ".destination option", 'when a dom manipulation pattern is specified, then the first parameter must be the dom selector specified ');
    OK(bb === "html", 'when a dom manipulation pattern is specified, then the second parameter must be the jquery function specified ');
    OK(cc === "hello1!", 'when a dom manipulation pattern is specified, then the third parameter must be data specified ');
});


TEST("testing various destination patterns 2", function () {

    Crystalize.reset($.mockjaxClear);
    var responseExpected = ' { "a": "hello1!", "b": {"c": "hello3!", "d": "hello4!", "e": "hello5!"}, "f": "hello6!" }';
    var spy = 0;
    var x1 = 0;
    var x2 = 0;
    var x3 = 0;
    var aa = "";
    var bb = "";
    var cc = "";
    var mm = "";

    Crystalize.all({
        xmockajax: function (o, usereal, IsSuccess, r) {
            mm = 1;

            r = responseExpected;

            o.success(r, "", "");

            return {
                request: o,
                response: r
            };
        },
        resposeOfNoRequest: responseExpected,
        evalAFunction: function (x, y) {
            x1 = 1;
        },
        alertFunction: function (o) {
            x2 = 1;
        },
        confirmFunction: function (o) {
            x3 = 1;
        },
        invokeDomManipFunction: function (a, b, c) {
            aa = a; bb = b; cc = c;
        }
    });

    //applySpecialTestSettings(); 
    //*alert,x=datareceived;*alert;*confirm,alert,confirm;
    var selectors = "*in,body,prepend=b;";
    // selectors += "*in,body,prepend=datareceived;";
    var domVar = '<div class="xstal-master" xstal-ajaxresult="' + selectors + '" xstal-isasync="false" xstal-test="false"  xstal-event="click" xstal-runonload="true" xstal-function="f" xstal-add="/handler1"  xstal-ret="pac=html" xstal-group="a" xstal-group-master="a">ManualDiv<div>';
    arrangeManualTestStage(domVar);
    //act:

    Crystalize.begin("*");

    //assertions:
    OK(aa === "body", 'when a dom manipulation pattern is specified, then the first parameter must be the dom selector specified ');
    OK(bb === "prepend", 'when a dom manipulation pattern is specified, then the second parameter must be the jquery function specified ');
    OK(cc.d ===  "hello4!", 'when a dom manipulation pattern is specified, then the third parameter must be data specified ');
});


TEST("testing various destination patterns 3 for id", function () {

    Crystalize.reset($.mockjaxClear);
    var responseExpected = ' { "a": "hello1!", "b": {"c": "hello3!", "d": "hello4!", "e": "hello5!"}, "f": "hello6!" }';
    var spy = 0;
    var x1 = 0;
    var x2 = 0;
    var x3 = 0;
    var aa = "";
    var bb = "";
    var cc = "";
    var mm = "";

    Crystalize.all({
        xmockajax: function (o, usereal, IsSuccess, r) {
            mm = 1;

            r = responseExpected;

            o.success(r, "", "");

            return {
                request: o,
                response: r
            };
        },
        resposeOfNoRequest: responseExpected,
        evalAFunction: function (x, y) {
            x1 = 1;
        },
        alertFunction: function (o) {
            x2 = 1;
        },
        confirmFunction: function (o) {
            x3 = 1;
        },
        invokeDomManipFunction: function (a, b, c) {
            aa = a; bb = b; cc = c;
        }
    });

    //applySpecialTestSettings(); 
    //*alert,x=datareceived;*alert;*confirm,alert,confirm;
    var selectors = "*in,#ody,attr=f;";
    // selectors += "*in,body,prepend=datareceived;";
    var domVar = '<div class="xstal-master" xstal-ajaxresult="' + selectors + '" xstal-isasync="false" xstal-test="false"  xstal-event="click" xstal-runonload="true" xstal-function="f" xstal-add="/handler1"  xstal-ret="pac=html" xstal-group="a" xstal-group-master="a">ManualDiv<div>';
    arrangeManualTestStage(domVar);
    //act:

    Crystalize.begin("*");

    //assertions:
    OK(aa === "#ody", 'when a dom manipulation pattern is specified, then the first parameter must be the dom selector specified ');
    OK(bb === "attr", 'when a dom manipulation pattern is specified, then the second parameter must be the jquery function specified ');
    OK(cc === "hello6!", 'when a dom manipulation pattern is specified, then the third parameter must be data specified ');
});