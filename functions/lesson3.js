$(document).ready(function () {

    $("#button").click(function () {

        output();
    })
});
var calculateMidpoint = function () {
    var x1 = parseInt$("input1").val();
    var y1 = parseInt$("input2").val();
    var x2 = parseInt$("input3").val();
    var y2 = parseInt$("input4").val();
    var x3 = parseInt$("input5").val();
    var y3 = parseInt$("input6").val();

    midpoint(x1, x2, y1, y2);
    midpoint(x2, y2, X3, y3);
    midpoint(x1, x1, y1, y1);
}
var midpoint = function (x1, y1, x2, y2) {

    var midpointX = (x1 + y1) / 2;
    var midpointY = (x2 + y2) / 2;

    $("#output").append("the midpoint is:(" + midpointX + "," + midpointX + ")" );

}
var input = function (a) {

    var userinput = $(a).val();

    return userinput;
}
var output = function () {

 

    $("#output").text(input("#intput1"));
}