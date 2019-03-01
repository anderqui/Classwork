var hasBanna = false;
var hasKeys = false;

$(document).ready(function () {
  $("footer").html(createButton("#button1", O1) + createButton("#button2", O2));

  $("#button1").click(function () {
    if ($("#button1").text() === O4) {
      updateNartive(N3);
      updateButtons(O4, O5);
      $("#button1").show(N2);
      $("#button2").hide(O5);

    }
    else if ($("#button1").text() === O3 && hasKeys === true) {
      updateNarrtive(N5);
      updateButtons(O1, O2);
      $("#button1").show(O4);
      $("#button2").hide();
    }
    $("#button2").click(function () {
      if ($("#button2").text() === O5) {
        updateNarrtive(N2);
        updateButtons(O4, O5);
        $("#button1").show(O5);
        $("#button2").text(O7);

      }
      else if ($("#button2").text() === N5) {
        updateNarrtive(N1);
        updateButtons(N1,N6);
        $("#button2").show(O6);
        $("#button1").hide();
      }
      $("#button2").click(function () {
        if ($("#button2").text() === O4) {
          updateNarrtive(N2);
          u
          updateButtons(O4, O5);
          $("#button1").show(O5);
          $("#button2").text(O7);

        }
        else if ($("#button2").text() === O5) {
          updateNarrtive(N1);
          $("#button2").show(O6);
          $("#button1").hide();
        }
      })
    })
  })
});

var N1 = 'Once upon a time there was a king that lived in ...'
var N2 = 'The crowd was evil'
var N3 = 'Joan of arc killed the king'
var N4 = 'you attempted to sly the drag '
var N5 = 'ypu died trying to slay the dragon '
var N6 = 'you found an apothocary'
var N7 = 'you found a family of rats and dies'
var N8 = ' you died form heart exhcursion'
var N9 = 'you died from food poisong '
var N10 = 'you died'
var O1 = 'went to the store'
var O2 = 'walked into the marketplace'
var O3 = 'talked to the butcher'
var O4 = 'killed the butcher'
var O5 = 'ran into the preist'
var O6 = 'talked to the town squirer'
var O7 = 'you died'

var updateNarrive = function (a) {
  $("article").text(a);
}
var updateButtons = function (a, b, c) {
  $("#button1").text(a);
  $("#button2").text(b);
  $("#button3").text(c);
}

var createButton = function (id, text) {
  return "<button type = button id=" + id + ">" + text + "</button>";

}