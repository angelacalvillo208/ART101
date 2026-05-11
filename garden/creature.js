$("#crAdd").click(function () { 
    let crName=$("#crName") .val() ;
    console.log(crName);

    if(crName=="") { }
    else {
        $("#creature-list").append("<div>" + crName + "</div>");
    }
    $("#crName").val(""); // Clear the input field

});