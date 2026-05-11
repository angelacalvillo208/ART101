let count = 0;

let Mysticalcreature = {
    name: "Sparkle",
    species: "Unicorn",
    favoriteFood: "Rainbow Cake",
    moods: ["sparkling", "sleepy", "glowing", "dramatic", "excited", "happy"]
};
$("#sparkle").click(function () {

    count = count + 1;

    let arrayPosition = count - 1;

    let currentMood = Mysticalcreature.moods[arrayPosition];

    let message = "<p>You clicked me " + count + " times.</p>";
    
        message = message + "<p>My current mood is " + currentMood + ".</p>";

        message = message + "<p>My name is " + Mysticalcreature.name + ".</p>";

        message = message + "<p>I am an " + Mysticalcreature.species + ".</p>";

        message = message + "<p>My favorite food is " + Mysticalcreature.favoriteFood + ".</p>";

    $("#output").html(message);

    console.log(count);
    console.log(arrayPosition);
    console.log(currentMood);

});
