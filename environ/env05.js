$(document).ready(function () {

    function changeBackground() {

        let userColor = prompt(
            "Choose the color that best matches your spirit: pink, blue, green, purple, yellow, or peach"
        );

        if (userColor === "pink") {
            $("body").css("background-color", "#ffd6e7");
        }

        else if (userColor === "blue") {
            $("body").css("background-color", "#cfe8ff");
        }

        else if (userColor === "green") {
            $("body").css("background-color", "#d8f3dc");
        }

        else if (userColor === "purple") {
            $("body").css("background-color", "#e5d4ff");
        }

        else if (userColor === "yellow") {
            $("body").css("background-color", "#fff4b8");
        }

        else if (userColor === "peach") {
            $("body").css("background-color", "#ffd8c2");
        }

        else {
            $("#magic-output").html("That color does not exist in this realm.");
            return;
        }

        $("#magic-output").html(
            "Your world changed to " + userColor + "!"
        );
    }

    $("#needy-button").click(function () {
        changeBackground();
    });

    $("#needy-button").hover(
        function () {
            $("#magic-output").html("The portal is glowing...");
        },
        function () {
            $("#magic-output").html("The portal is resting.");
        }
    );

    $(document).keydown(function (event) {

        if (event.key === "p") {
            $("body").css("background-color", "#ffd6e7");
            $("#magic-output").html("Pastel pink activated!");
        }

        if (event.key === "b") {
            $("body").css("background-color", "#cfe8ff");
            $("#magic-output").html("Pastel blue activated!");
        }

    });

});