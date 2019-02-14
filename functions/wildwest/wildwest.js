var hasBow = false;
var hasPhaser = false;


$(document).ready(function () {
    $("footer").html(createButton("#button1", O1) + createButton("button2", O2) + createButton("button3", "not used"));
    $("#button3").hide();

    $("#button1").click(function () {
        if ($("#button1").text() === O1) {
            updateNarrtive(N2);
            updateButtons(O3,O4,O5);
            $("#button1").text(O3)
            $("#button2").text(O4)
            $("#button3").text(O5)
            $("#button3").show()
        }
        else if ($("#button1").text() === O3 && hasBow === true) {
            updateNarrtive(N5);
            $("#button1").text(O81);
            $("#button2").hide();

        }
        else if ($("#button1").text() === O3) {
            updateNarrtive("Did not get bow.")
        }

        $("button2").click(function () {
            if ($("#button2").text() === O2) {
                updateNarrtive(N3);
                $("#button1").text(O6);
                $("#button2").text(O7);

            }
            else if ($("#button2") === O4) {
                updateNarrtive(" he went to his  bag to get his pancake mix, found his favorite weapon, a super slicer arrowthingy 4000, bot.");
                $("#button1").text(O3)
                $("#button2").text("runs to targt practice")

            }
            else if ($("button2").text() === O7) {
                updateNarrtive(N6);
                $("#button2").text(O82);
                $("#button1").hide();


            }

            $("button3").click(function () {
                if ($("button2").text() === O4) {
                    updateNarrtive(N2);
                    $("#button1").text(O4);
                    $("#button2").text(O7);

                }
                else if ($("button2").text() === O5) {
                    updateNarrtive(N1);
                    $("#button2").text(O6);
                    $("#button1").hide();
                }
            });
        })



        var N1 = " Once upon a time in the Wild Wild West there lived a..."
        var N2 = " This ranger was the most dangerous gunslinger known to man. He loved to..."
        var N3 = " This robot had killer instincts. Purge the Wild west of all evil doers. armed with a phaser he..."
        var N5 = "the ranger approaches the insidious Mr.Pig. He raises his bow and..."
        var N6 = "The robot approaches the insidious Mr.Pig. he rasise his phaser and..."
        var O1 = " ranger"
        var O2 = " robot"
        var O3 = " chase tumbleweeds"
        var O4 = "cook pancakes"
        var O5 = " arrest bad robots"
        var O6 = " heats his pork and beans"
        var O7 = "purges the wild west of all evil-doers"
        var O81 = "shoot the arrow through the pig"
        var O82 = " fires, vapories Mr.pg"

        var updateNarrtive = function (a) {

            $("article").text(a);
        }
        var updateButtons = function(a ,b , c){
            $("#button1").text(a);
            $("#button2").text(b);
            $("#button3").text(c);
        }

        

        var createButton = function (id, text) {
            return "<button type= button id=" + id + ">" + text + "</button>"

        }
    });
}); 
