$(document).ready(function () {

    function changeBackground() {

        let userColor = prompt(
            "What color matches your inner self? Red, Orange, Yellow, Green, Blue, Purple, or Pink?"
        );

        $("body").css("background-color", userColor);

        $("#magic-output").html("Your realm is now " + userColor + "!");
    }

    $("#needy-button").click(function () {
        changeBackground();
    });

});