//***************************************
//test wrapper
//***************************************
var OK = function (exp, reason) {
    ok(exp, reason);
}
var TEST = function (nameOfTest, setup) {
    test(nameOfTest, function () {
        setup();
    });
};
//***************************************
//test sample
//***************************************
/*
TEST("my test",function(){
	//arrange
 SingleElementScenario();
 //act
 var results=Crystalize.execute();
 //assert
	 OK(1==2,"its a customised test");
 });
 */
//***************************************
//test setup helper mehods
//***************************************	

var createStage = function (ClassOfContainerElement) {
    $("." + ClassOfContainerElement + "").remove();// remove if it previously existed
    $("body").append('<div id="qunit-userAgent" class="' + ClassOfContainerElement + '"></div>');// add a fresh one
    $("." + ClassOfContainerElement + "").css("padding", "20px").css("border-width", "10px").css("border-color", "#c0c0c0");
};
var putElementOnStage = function (el, stage) { $("." + stage).append(el); };

var arrangeTestStage = function (o) {
    var stage = "testing";
    createStage(stage); //define element class create the dom container element 
    var newElement = Crystalize.dom(o);//Create new dome element
    putElementOnStage(newElement, stage);// insert the new dom element into the stage

};

var arrangeManualTestStage = function (newElement) {
    var stage = "testing";
    createStage(stage); //define element class create the dom container element 
    putElementOnStage(newElement, stage);// insert the new dom element into the stage

};


var arrangeMultipleElementsOnManualTestStage = function (newElement1, newElement2, newElement3, newElement4) {
    var stage = "testing";
    createStage(stage); //define element class create the dom container element 
    putElementOnStage(newElement1, stage);// insert the new dom element into the stage
    putElementOnStage(newElement2, stage);// insert the new dom element into the stage
    putElementOnStage(newElement3, stage);// insert the new dom element into the stage
    putElementOnStage(newElement4, stage);// insert the new dom element into the stage
};






function trackObject() {
    // console.log(Crystalize.conf());
    // console.log(Crystalize.stat()); 
};
var applySpecialTestSettings = function () {
    Crystalize.all({
        //=====================================
        // SPECIAL TEST SETTINGS
        //=====================================
        forceSynchronousOnAllAjaxCalls: true,
        execAllEventOnLoad: true,
        forceMockAllAjaxCalls: true,
        //=====================================

        dontMakeJQAjaxCall: false,
        MockingFxMethod: $.mockjax,
        resposeOfNoRequest: false,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        dataType: "jason",
        type: "POST"
       
    });
};


