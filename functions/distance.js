$(document).ready(function () {

    $("#button").click(function () {

        output();
    })
});
var input = function (a) {

    var userinput = parseInt($(a).val());

    return userinput;
}
var distance = function (x1, y1, x2, y2) {
    var distance = Math.sprt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));

    return distance
}
var perimeter = function (a, b, c) {
    var perimeter = a + b + c;
    return perimeter;
}
var output = function () {
    var distance1 = distance(input("#input1"), input("#input2"), input("#input3"), input("#input4"))
    var distance2 = distance(input("#input3"), input("#input4"), input("#input5"), input("#input6"))
    var distance3 = distance(input("#input1"), input("#input2"), input("#input5"), input("#input6"))
    var triperimeter = perimeter(distance1, distance2, distance3);
    $("#output").text("the perimeter is" + triperimeter);
}